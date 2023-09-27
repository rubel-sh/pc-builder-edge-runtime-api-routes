import { Inter } from "next/font/google";
import Navigations from "@/components/widgets/Navigations";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <div className=" py-2">
            <Navigations />
        </div>
    );
}
