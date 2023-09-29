import React from "react";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";
import Link from "next/link";
import { bdPrice } from "@/lib/utils";

const PcBuilderComponentItem = ({ itemData, choosenComponent }) => {
    const { name, componentType, isRequired, icon } = itemData;
    return (
        <div className="flex">
            {/* LOGO */}
            <div className="flex flex-col p-3 bg-primary/10 text-primary/60 rounded-sm">
                <div className="text-4xl">{icon}</div>
            </div>

            <div className="ml-4 w-full mr-4">
                {/* Item Name (isRequired) */}
                <div className="flex items-start gap-x-3 ">
                    <div className="text-sm font-semibold">{name}</div>
                    <span className="text-xs bg-muted rounded-sm px-2 hidden md:inline">
                        {isRequired ? "Required" : "Optional"}
                    </span>
                </div>

                {/* Shimmer */}
                {!choosenComponent && (
                    <div className="flex justify-between ">
                        <Skeleton className="h-4 w-[120px] md:w-[400px] mt-2" />
                        <Skeleton className="h-4 w-[80px] md:w-[120px] hidden md:block" />
                    </div>
                )}

                {/* Selected Items */}
                {choosenComponent && (
                    <div className="flex justify-between ">
                        <div className="text-sm mt-2">
                            <div className="flex items-center gap-x-2">
                                <Link href={`/${choosenComponent?.component_unique_url}`}>
                                    <div className="text-sm font-semibold">{choosenComponent?.component_model}</div>
                                </Link>

                                <span className="text-xs bg-muted rounded-sm px-2 hidden md:inline">
                                    {choosenComponent?.component_brand}
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center gap-x-2">
                            <div className="text-sm font-semibold">
                                {bdPrice(choosenComponent?.component_price) -
                                    bdPrice(choosenComponent?.component_discount)}{" "}
                                Tk
                            </div>
                            <span className="text-xs bg-muted rounded-sm px-2 hidden md:inline">
                                Saved {bdPrice(choosenComponent?.component_discount)} Tk
                            </span>
                        </div>
                    </div>
                )}
            </div>

            {/* Choose Button */}
            {choosenComponent ? (
                <Link href={`/builder/component?item=${componentType}`}>
                    <Button className="hidden md:block">Change</Button>
                </Link>
            ) : (
                <Link href={`/builder/component?item=${componentType}`}>
                    <Button className="ml-auto">Choose</Button>
                </Link>
            )}
        </div>
    );
};

export default PcBuilderComponentItem;
