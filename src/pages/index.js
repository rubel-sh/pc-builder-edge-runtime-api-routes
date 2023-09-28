import { Inter } from "next/font/google";
import Navigations from "@/components/widgets/Navigations";
import Container from "@/components/CustomUI/Container";
import ProductCard from "@/components/widgets/ProductCard";
import FeaturedProductCard from "@/components/widgets/FeaturedProductCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ featuredProductsData }) {
    return (
        <Container>
            {/* Featured Products*/}
            <div className="bg-secondary px-4 py-1 mb-4 rounded-md">
                <h3 className="text-xl font-semibold my-2 ">Featured Products</h3>
            </div>
            <div className="grid grid-cols-min-200 gap-4 mb-10">
                {featuredProductsData.data.map((component) => (
                    <FeaturedProductCard featuredProduct={component} key={component._id} />
                ))}
            </div>

            {/* Featured Categories */}

            <div className="bg-secondary px-4 py-1 mb-4 rounded-md">
                <h3 className="text-xl font-semibold my-2 ">Featured Categories</h3>
            </div>
            <div className="grid grid-cols-min-200 gap-4 ">
                {featuredProductsData.data.map((component) => (
                    <FeaturedProductCard featuredProduct={component} key={component._id} />
                ))}
            </div>
        </Container>
    );
}

export async function getStaticProps() {
    const featuredProducts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/featured_products?limit=8`);
    const featuredProductsData = await featuredProducts.json();
    return {
        props: { featuredProductsData },
        revalidate: 120, // In seconds
    };
}
