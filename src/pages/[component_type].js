import Container from "@/components/CustomUI/Container";
import ProductCard from "@/components/widgets/ProductCard";
import { NAVIGATIONLINKS } from "@/lib/constants";
import { useRouter } from "next/router";
import React from "react";

const ComponentDetails = ({ componentData }) => {
    if (componentData.data.length === 0) return null;

    return (
        <Container>
            <div className="flex flex-wrap flex-grow gap-4 ">
                {componentData.data.map((component) => (
                    <ProductCard product={component} key={component.id} />
                ))}
            </div>
        </Container>
    );
};

export async function getStaticProps(context) {
    const componentType = context.params.component_type.toUpperCase();
    console.log(componentType);
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/${componentType}`);
    const data = await res.json();

    return {
        props: { componentData: data },
    };
}

export function getStaticPaths() {
    const paths = NAVIGATIONLINKS.map((link) => {
        return {
            params: {
                component_type: link.link,
            },
        };
    });
    return {
        paths,
        fallback: false,
    };
}

export default ComponentDetails;
