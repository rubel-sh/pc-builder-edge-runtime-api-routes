import { cn } from "@/lib/utils";
import React from "react";

const Tag = ({ children, className }) => {
    return (
        <span className={cn("border-primary border-b-2 px-3 py-1  bg-primary/10 font-semibold text-sm", className)}>
            {children}
        </span>
    );
};

export default Tag;
