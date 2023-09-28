import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import Image from "next/image";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import PriceTag from "./PriceTag";
import Link from "next/link";

const FeaturedProductCard = ({ featuredProduct }) => {
    // Destructure the properties from the featuredProduct object
    const {
        component_type,
        component_brand,
        component_model,
        component_price,
        component_discount,
        component_image,
        component_description,
        component_unique_url,
        component_rating,
        component_reviews,
        component_stock,
        component_sales,
        component_category,
        component_subcategory,
    } = featuredProduct;

    return (
        <Card className="overflow-hidden relative">
            <CardHeader className="p-0">
                <Image
                    src={component_image}
                    width={300}
                    height={300}
                    alt={component_model}
                    className="w-full object-cover"
                />
            </CardHeader>
            <CardContent className=" p-3 pb-24">
                <Separator />

                {/* Display the component_model */}
                <Link href={component_unique_url} className="text-base font-medium mt-3 hover:text-primary">
                    {component_model}
                </Link>

                <div className="absolute bottom-2 inset-x-0 text-center">
                    <PriceTag price={component_price} discount={component_discount} className="pl-3 text-left" />
                    <Link href={component_unique_url}>
                        <Button className="w-[90%] mx-auto mt-2">Learn More</Button>
                    </Link>
                </div>
            </CardContent>
        </Card>
    );
};

export default FeaturedProductCard;
