import React from "react";
import { Card } from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import { bdPrice } from "@/lib/utils";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { updateComponent } from "@/redux/features/pcBuilderSlice";

const BuilderComponentListItem = ({ productInfo }) => {
    const router = useRouter();
    const dispatch = useDispatch();

    const {
        component_type,
        component_brand,
        component_model,
        component_price,
        component_discount,
        component_rating,
        component_image,
        key_features,
    } = productInfo;

    const handleAdd = () => {
        dispatch(updateComponent({ component: component_type, data: productInfo }));
        router.push("/builder");
    };
    return (
        <Card className="p-2 sm:p-4">
            <div className="flex flex-col sm:flex-row">
                {/* Image Section */}
                <div className="flex justify-center">
                    <Image
                        src={component_image}
                        alt="Component Image"
                        width={200}
                        height={200}
                        className="w-[140px] h-[140px] object-contain"
                    />
                </div>
                {/* Desc Section */}
                <div className="flex flex-col sm:flex-row justify-between basis-full sm:items-center sm:ml-5">
                    {/* DESC */}
                    <div>
                        <p className="text-lg font-semibold">{component_model}</p>
                        <ul className="my-2 ml-6 list-disc">
                            {key_features.slice(1, 5).map((feature, i) => (
                                <li key={i} className="text-[13px] ">
                                    {Object.keys(feature)}: {Object.values(feature)}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Price + Add Button */}
                    <div className="flex-grow sm:flex-grow-0">
                        <p className="text-lg font-medium text-center mb-2">
                            {bdPrice(component_price) - bdPrice(component_discount)} tk
                        </p>
                        <Button onClick={handleAdd} className="w-full sm:w-max">
                            Add
                        </Button>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default BuilderComponentListItem;
