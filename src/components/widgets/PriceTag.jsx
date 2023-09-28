import React from "react";

const PriceTag = ({ price, discount, ...props }) => {
    const bdOrPrice = Math.round(price * 110);
    const bdPrice = Math.round((price - (price * discount) / 100) * 110);
    return (
        <div {...props}>
            <span className="text-primary font-bold text-sm">{bdPrice + "tk "}</span>
            <span className="line-through text-xs">{bdOrPrice}/</span>
        </div>
    );
};

export default PriceTag;
