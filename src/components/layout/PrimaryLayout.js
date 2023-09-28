import React from "react";
import Navigations from "../widgets/Navigations";

const PrimaryLayout = ({ children }) => {
    return (
        <div className="pb-10">
            <Navigations />
            {children}
        </div>
    );
};

export default PrimaryLayout;
