import Container from "@/components/CustomUI/Container";
import React from "react";
import { useSelector } from "react-redux";

const PcBuilder = () => {
    const counter = useSelector((state) => state.counter.value);
    console.log(counter);
    return <Container>PcBuilder</Container>;
};

export default PcBuilder;
