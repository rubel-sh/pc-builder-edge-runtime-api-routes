import Container from "../CustomUI/Container";
import Logo from "../CustomUI/Logo";
import { DarkModeMenu } from "./DarkModeMenu";
import { Button } from "../ui/button";
import Components from "../CustomUI/Components";
import { BiMenuAltRight } from "react-icons/bi";
import { useState } from "react";

const Navigations = () => {
    const components = [
        {
            title: "CPU / Processor",
            link: "/components/cpu-processor",
        },
        {
            title: "Motherboard",
            link: "/components/motherboard",
        },
        {
            title: "RAM",
            link: "/components/ram",
        },
        {
            title: "Power Supply Unit",
            link: "/components/power-supply-unit",
        },
        {
            title: "Storage Device",
            link: "/components/storage-device",
        },
        {
            title: "Monitor",
            link: "/components/monitor",
        },
        {
            title: "Others",
            link: "/components/others",
        },
    ];

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div className="py-3">
            <Container>
                <nav className="flex justify-between items-center">
                    <div className="flex items-center gap-x-2 border-1 border-slate-700">
                        <Logo />
                        {/* Navigation Links */}
                        <div className="max-md:hidden">
                            <Components components={components} />
                        </div>
                    </div>
                    <div className="flex items-center gap-x-4 max-md:hidden">
                        {/* DARK MODE */}
                        <DarkModeMenu />
                        {/* PC BUILDER BUTTON*/}
                        <Button variant="outline">PC Builder</Button>
                    </div>

                    {/* HamburgerMenu */}
                    <div className="md:hidden relative">
                        <BiMenuAltRight
                            size={40}
                            className="p-2 border-white/50 border cursor-pointer hover:"
                            onClick={() => setIsMenuOpen((prev) => !prev)}
                        />

                        {isMenuOpen && (
                            <div className="absolute top-full right-0 space-y-2  min-w-[280px] flex flex-col items-end">
                                <Components components={components} />
                                <div className="flex items-center gap-x-4">
                                    {/* DARK MODE */}
                                    <DarkModeMenu />
                                    {/* PC BUILDER BUTTON*/}
                                    <Button variant="outline">PC Builder</Button>
                                </div>
                            </div>
                        )}
                    </div>
                </nav>
            </Container>
        </div>
    );
};

export default Navigations;
