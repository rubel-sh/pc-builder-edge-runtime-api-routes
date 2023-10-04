import Container from "../CustomUI/Container";
import Logo from "../CustomUI/Logo";
import { DarkModeMenu } from "./DarkModeMenu";
import { BiMenuAltRight } from "react-icons/bi";
import { useState } from "react";
import { NAVIGATIONLINKS } from "@/lib/constants";
import { Button } from "../ui/button";
import Components from "../CustomUI/Components";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import useClickOutside from "@/hooks/useClickOutside";

const Navigations = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { data: session } = useSession();
    const handleSignOut = async () => {
        await signOut();
    };
    const [popupRef] = useClickOutside(setIsMenuOpen);

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
                        <Link href={"/builder"}>
                            <Button variant="outline">PC Builder</Button>
                        </Link>
                        {/* Signout */}
                        {session && (
                            <Button variant="outline" onClick={handleSignOut}>
                                Logout
                            </Button>
                        )}
                    </div>

                    {/* HamburgerMenu */}
                    <div className="md:hidden relative">
                        <BiMenuAltRight
                            size={40}
                            className="p-2 cursor-pointer "
                            onClick={() => setIsMenuOpen((prev) => !prev)}
                        />

                        {isMenuOpen && (
                            <div className="absolute top-full right-0 w-full space-y-2 min-w-[280px] flex flex-col items-end bg-popover shadow-md p-5 z-10">
                                <Components className="mr-32" components={NAVIGATIONLINKS} />
                                <div className="flex items-center gap-x-4">
                                    {/* DARK MODE */}
                                    <DarkModeMenu />
                                    {/* PC BUILDER BUTTON*/}
                                    <Button>PC Builder</Button>
                                    {/* Signout */}
                                    {session && <Button onClick={handleSignOut}>Logout</Button>}
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
