import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/Logo";
import Container from "@/components/ui/Container";
import Navigations from "@/components/widgets/Navigations";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <div className="bg-primary-dark py-2">
            <Container>
                <nav className="flex justify-between items-center">
                    <div>
                        <Logo />
                        {/* Navigation Links */}
                        <div>
                            <Navigations />
                        </div>
                    </div>
                    {/* PC BUILDER BUTTON*/}
                    <Button>PC Builder</Button>
                </nav>
            </Container>
        </div>
    );
}
