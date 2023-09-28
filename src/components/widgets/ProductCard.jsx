// components/ProductDetail.js
import Image from "next/image";
import { Switch } from "../ui/switch";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { Check } from "lucide-react";

const ProductCard = ({ product }) => {
    const {
        _id,
        component_type,
        component_brand,
        component_model,
        component_price,
        component_discount,
        component_rating,
        component_image,
        key_features,
    } = product;
    return (
        <Card className="">
            <CardHeader>
                <Image src={component_image} width={300} height={300} alt={component_model} />
                <Separator />
                <p className="text-lg font-medium">{component_model}</p>
            </CardHeader>
            <CardContent>
                <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                    {key_features &&
                        key_features.map((feature, index) => (
                            <li key={index} className="text-sm font-medium">
                                {Object.keys(feature)}: {Object.values(feature)}
                            </li>
                        ))}
                </ul>
                <Separator />
            </CardContent>
            <CardFooter>
                <Button className="w-full">Mark all as read</Button>
            </CardFooter>
        </Card>
    );
};

export default ProductCard;
