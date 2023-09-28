import React from "react";
import Navigations from "../widgets/Navigations";

const PrimaryLayout = ({ children }) => {
    return (
        <div>
            <Navigations />
            {children}
        </div>
    );
};

export default PrimaryLayout;
