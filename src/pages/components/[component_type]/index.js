import Container from "@/components/CustomUI/Container";
import ProductCard from "@/components/widgets/ProductCard";
import { NAVIGATIONLINKS } from "@/lib/constants";
import { getCurrentEnvironment } from "@/lib/utils";

const ComponentDetails = ({ componentData }) => {
    if (componentData.data.length === 0) return null;

    return (
        <Container>
            <div className="grid grid-cols-min-300 gap-4 ">
                {componentData.data.map((component) => (
                    <ProductCard product={component} key={component._id} />
                ))}
            </div>
        </Container>
    );
};

export async function getStaticProps(context) {
    const baseUrl = getCurrentEnvironment();
    const componentType = context.params.component_type.toUpperCase();
    const res = await fetch(`${baseUrl}/api/${componentType}`);
    const data = await res.json();

    return {
        props: { componentData: data },
        revalidate: 120, // In seconds
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
