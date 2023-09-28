import Container from "../CustomUI/Container";
import Logo from "../CustomUI/Logo";
import { DarkModeMenu } from "./DarkModeMenu";
import { BiMenuAltRight } from "react-icons/bi";
import { useState } from "react";
import { NAVIGATIONLINKS } from "@/lib/constants";
import { Button } from "../ui/button";
import Components from "../CustomUI/Components";

const Navigations = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div className="py-3">
            <Container>
                <nav className="flex justify-between items-center">
                    <div className="flex items-center gap-x-2 border-1 border-slate-700">
                        <Logo />
                        {/* Navigation Links */}
                        <div className="max-md:hidden">
                            <Components components={NAVIGATIONLINKS} />
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
                                <Components components={NAVIGATIONLINKS} />
                                <div className="flex items-center gap-x-4">
                                    {/* DARK MODE */}
                                    <DarkModeMenu />
                                    {/* PC BUILDER BUTTON*/}
                                    <Button>PC Builder</Button>
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
