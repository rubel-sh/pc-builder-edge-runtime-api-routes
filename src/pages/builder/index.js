import Container from "@/components/CustomUI/Container";
import PcBuilderComponentSection from "@/components/CustomUI/PcBuilderComponentSection";
import { Card } from "@/components/ui/card";
import { useSelector } from "react-redux";

// ICONS
import { PiCpu } from "react-icons/pi";
import { LiaMemorySolid } from "react-icons/lia";
import { BsMotherboard } from "react-icons/bs";
import { TfiHarddrives } from "react-icons/tfi";
import { SlPower } from "react-icons/sl";
import { FiMonitor } from "react-icons/fi";

import COMPONENT_TYPE from "@/lib/constants";
import PcBuilderComponentItem from "@/components/CustomUI/PcBuilderComponentItem";

const PcBuilder = () => {
    const counter = useSelector((state) => state.counter.value);
    const chooseOptions = [
        {
            name: "Processor",
            componentType: COMPONENT_TYPE.CPU,
            isRequired: true,
            icon: <PiCpu />,
        },
        {
            name: "Motherboard",
            componentType: COMPONENT_TYPE.MOTHERBOARD,
            isRequired: true,
            icon: <BsMotherboard />,
        },
        {
            name: "Memory",
            componentType: COMPONENT_TYPE.RAM,
            isRequired: true,
            icon: <LiaMemorySolid />,
        },
        {
            name: "Storage",
            componentType: COMPONENT_TYPE.STORAGE,
            isRequired: true,
            icon: <TfiHarddrives />,
        },
        {
            name: "Power Supply",
            componentType: COMPONENT_TYPE.POWER_SUPPLY_UNIT,
            isRequired: true,
            icon: <SlPower />,
        },
        {
            name: "Monitor",
            componentType: COMPONENT_TYPE.MONITOR,
            isRequired: true,
            icon: <FiMonitor />,
        },
    ];

    // Getting Choosen Components from Redux
    const choosenComponents = useSelector((state) => state.pcBuilder);
    console.log(choosenComponents.CPU);

    return (
        <Container className="mt-5 md:mt-8">
            {/* <h1 className="text-xl font-bold mb-4">PC Builder - Build Your Own Computer - Meta Tech</h1> */}
            <Card className="p-4">
                <PcBuilderComponentSection>Core Components</PcBuilderComponentSection>
                <div className="space-y-2 mt-5">
                    {chooseOptions.map((option, index) => {
                        return (
                            <PcBuilderComponentItem
                                key={index}
                                itemData={option}
                                choosenComponent={choosenComponents[option.componentType]}
                            />
                        );
                    })}
                </div>
            </Card>
        </Container>
    );
};

export default PcBuilder;
