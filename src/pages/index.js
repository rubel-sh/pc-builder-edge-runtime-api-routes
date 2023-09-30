import { Inter } from "next/font/google";
import Navigations from "@/components/widgets/Navigations";
import Container from "@/components/CustomUI/Container";
import ProductCard from "@/components/widgets/ProductCard";
import FeaturedProductCard from "@/components/widgets/FeaturedProductCard";
import { PiCpu } from "react-icons/pi";
import { LiaMemorySolid } from "react-icons/lia";
import { BsMotherboard } from "react-icons/bs";
import { TfiHarddrives } from "react-icons/tfi";
import { SlPower } from "react-icons/sl";
import { FiMonitor } from "react-icons/fi";
import { useMemo } from "react";
import COMPONENT_TYPE from "@/lib/constants";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ featuredProductsData }) {
    const chooseOptions = useMemo(
        () => [
            {
                name: "Processor",
                componentType: COMPONENT_TYPE.CPU,
                isRequired: true,
                icon: <PiCpu />,
                link: "cpu",
            },
            {
                name: "Motherboard",
                componentType: COMPONENT_TYPE.MOTHERBOARD,
                isRequired: true,
                icon: <BsMotherboard />,
                link: "motherboard",
            },
            {
                name: "Memory",
                componentType: COMPONENT_TYPE.RAM,
                isRequired: true,
                icon: <LiaMemorySolid />,
                link: "ram",
            },
            {
                name: "Storage",
                componentType: COMPONENT_TYPE.STORAGE,
                isRequired: true,
                icon: <TfiHarddrives />,
                link: "power_supply_unit",
            },
            {
                name: "Power Supply",
                componentType: COMPONENT_TYPE.POWER_SUPPLY_UNIT,
                isRequired: true,
                icon: <SlPower />,
                link: "storage",
            },
            {
                name: "Monitor",
                componentType: COMPONENT_TYPE.MONITOR,
                isRequired: true,
                icon: <FiMonitor />,
                link: "monitor",
            },
        ],
        []
    );
    return (
        <Container>
            {/* Featured Categories */}

            <div className="bg-secondary px-4 py-1 my-4 rounded-md">
                <h3 className="text-xl font-semibold my-2 ">Featured Categories</h3>
            </div>
            <div className="grid grid-cols-min-200 gap-4 ">
                {chooseOptions.slice(0, 6).map((option) => (
                    <Link href={`/components/${option.link}`} key={option.componentType}>
                        <div
                            key={option.name}
                            className="bg-accent hover:scale-95 hover:text-primary active:scale-105 transition-transform text-accent-foreground grid place-content-center gap-y-2 p-5 md:p-10 rounded-md "
                        >
                            <div className="text-6xl mx-auto">{option.icon}</div>
                            <h3 className="text-center text-lg font-semibold">{option.name}</h3>
                        </div>
                    </Link>
                ))}
            </div>
            {/* Featured Products*/}
            <div className="bg-secondary px-4 py-1 my-4 rounded-md">
                <h3 className="text-xl font-semibold my-2 ">Featured Products</h3>
            </div>
            <div className="grid grid-cols-min-200 gap-4 mb-10">
                {featuredProductsData.data.map((component) => (
                    <FeaturedProductCard featuredProduct={component} key={component._id} />
                ))}
            </div>
        </Container>
    );
}

export async function getStaticProps() {
    const featuredProducts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/featured_products?limit=12`);
    const featuredProductsData = await featuredProducts.json();
    return {
        props: { featuredProductsData },
        revalidate: 120, // In seconds
    };
}
