import Container from "@/components/CustomUI/Container";
import { Card } from "@/components/ui/card";
import Tag from "@/components/widgets/Tag";
import { bdPrice } from "@/lib/utils";
import Image from "next/image";

const ComponentFullInfo = ({ componentData }) => {
    if (componentData.success === false) {
        return <div>FAILED</div>;
    }

    const {
        component_type,
        component_brand,
        component_model,
        component_price,
        component_stock,
        component_reviews,
        component_discount,
        component_sales,
        component_rating,
        component_image,
        component_description,
        component_unique_url,
        component_category,
        component_subcategory,
        key_features,
        specifications,
    } = componentData.data[0];

    return (
        <Container className="mt-4 md:mt-10">
            {/* PRODUCT HERO SECTION + KEY_FEATURES*/}
            <div className="flex flex-col sm:flex-row gap-x-10 ">
                {/* Image */}
                <Image
                    src={component_image}
                    alt={component_model}
                    width={600}
                    height={500}
                    className="w-full sm:max-w-xs lg:max-w-lg object-contain"
                />
                {/* Details + Key Features */}
                <div className=" self-center justify-self-center ">
                    <h1 className="text-4xl font-bold mb-4">{component_description}</h1>
                    {/* Total Rating, Sales, Reviews */}
                    <div className="flex gap-4 mb-4 flex-wrap hidden">
                        <Tag className="max-w-max bg-slate-800/10 border-slate-700">
                            <span className="font-base">Rating:</span> {component_rating}
                        </Tag>
                        <Tag className="max-w-max bg-slate-800/10 border-slate-700">
                            <span className="font-base">Sales:</span> {component_sales}
                        </Tag>
                        <Tag className="max-w-max bg-slate-800/10 border-slate-700">
                            <span className="font-base">Reviews:</span> {component_reviews}
                        </Tag>
                    </div>

                    {/* Prices*/}
                    <div className="flex gap-4 mb-4 flex-wrap">
                        <Tag className="max-w-max bg-emerald-600/10 border-emerald-600">
                            Price: {bdPrice(component_price)} Tk
                        </Tag>
                        <Tag className="max-w-max bg-emerald-600/10 border-emerald-600">
                            Discount: {component_discount ?? "No Discount"}
                        </Tag>
                        <Tag className="max-w-max bg-emerald-600/10 border-emerald-600">Stock: {component_stock}</Tag>
                        <Tag className="max-w-max bg-slate-800/10 border-slate-700">
                            <span className="font-base">Rating:</span> {component_rating}
                        </Tag>
                        <Tag className="max-w-max bg-slate-800/10 border-slate-700">
                            <span className="font-base">Sales:</span> {component_sales}
                        </Tag>
                        <Tag className="max-w-max bg-slate-800/10 border-slate-700">
                            <span className="font-base">Reviews:</span> {component_reviews}
                        </Tag>
                    </div>

                    {/* Category and Subcategory */}
                    <div className="flex gap-4 mb-4 flex-wrap hidden">
                        <Tag className="max-w-max">Category: {component_category}</Tag>
                        <Tag className="max-w-max">Sub Category: {component_subcategory}</Tag>
                    </div>

                    <h2 className="text-2xl font-semibold mb-4">Brand: {component_brand}</h2>
                    <div className="flex flex-col">
                        <h4 className="text-lg font-bold ">Key Features</h4>
                        <ul className="my-6 ml-6 list-disc">
                            {key_features.map((feature) => (
                                <li key={feature} className="text-sm font-medium">
                                    {Object.keys(feature)[0]}: {Object.values(feature)[0]}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* PRODUCT SPECIFICATION SECTION */}
            <div className="mt-10">
                <h1 className="text-4xl font-bold mb-4">Specifications</h1>
                <div className="grid grid-cols-min-300 gap-2 md:gap-4">
                    {specifications.map((spec) => (
                        <Card key={spec.title} className="p-2 md:p-4 hover:shadow-none">
                            {/* Title */}
                            <h2 className="text-2xl font-semibold mb-4">{spec.title}</h2>
                            {/* List */}
                            <ul className="my-6 ml-6 list-disc">
                                {spec.data.map((item) => (
                                    <li key={item} className="text-sm font-medium">
                                        {Object.keys(item)[0]}: {Object.values(item)[0]}
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    ))}
                </div>
            </div>
        </Container>
    );
};

export async function getStaticProps(context) {
    const item_unique_name = context.params.component;
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/product?unique_name=${item_unique_name}`);
    const data = await res.json();
    return {
        props: { componentData: data },
        revalidate: 120, // In seconds
    };
}

export async function getStaticPaths() {
    const allProductsRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/all_products`);
    const allProducts = await allProductsRes.json();

    const paths = allProducts.data.map((product) => {
        return {
            params: {
                component: product.component_unique_url,
            },
        };
    });
    return {
        paths,
        fallback: false,
    };
}

export default ComponentFullInfo;
