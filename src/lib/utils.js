import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export function bdPrice(price) {
    return Math.round(parseInt(price) * 110);
}
