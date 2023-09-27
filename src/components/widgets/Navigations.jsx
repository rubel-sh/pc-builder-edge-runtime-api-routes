import Container from "../CustomUI/Container";
import Logo from "../CustomUI/Logo";
import { DarkModeMenu } from "./DarkModeMenu";
import { Button } from "../ui/button";
import Components from "../CustomUI/Components";

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

    return (
        <Container>
            <nav className="flex justify-between items-center">
                <div className="flex items-center gap-x-4 border-1 border-slate-700">
                    <Logo />
                    {/* Navigation Links */}
                    <div>
                        <Components components={components} />
                    </div>
                </div>
                <div className="flex items-center gap-x-4">
                    {/* DARK MODE */}
                    <DarkModeMenu />
                    {/* PC BUILDER BUTTON*/}
                    <Button variant="outline">PC Builder</Button>
                </div>
            </nav>
        </Container>
    );
};

export default Navigations;
