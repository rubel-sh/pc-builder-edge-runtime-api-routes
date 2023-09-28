// components/ProductDetail.js
import Image from "next/image";
import { Switch } from "../ui/switch";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { Check } from "lucide-react";
import Link from "next/link";

const ProductCard = ({ product }) => {
    const {
        _id,
        component_type,
        component_brand,
        component_model,
        component_price,
        component_discount,
        component_rating,
        component_unique_url,
        component_image,
        key_features,
    } = product;
    return (
        <Card className="overflow-hidden relative">
            <CardHeader className="p-0 ">
                <Image
                    src={component_image}
                    width={300}
                    height={300}
                    alt={component_model}
                    className="w-full object-cover"
                />
            </CardHeader>
            <CardContent className="">
                <Separator />
                <p className="text-lg font-medium mt-3">{component_model}</p>
                <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                    {key_features &&
                        key_features.map((feature, index) => (
                            <li key={index} className="text-sm font-medium">
                                {Object.keys(feature)}: {Object.values(feature)}
                            </li>
                        ))}
                </ul>
                <Separator className="mb-8" />
                <Link href={"/" + component_unique_url}>
                    <Button className="w-[90%] absolute bottom-2 inset-x-0 mx-auto">Get Full Information</Button>
                </Link>
            </CardContent>
        </Card>
    );
};

export default ProductCard;
