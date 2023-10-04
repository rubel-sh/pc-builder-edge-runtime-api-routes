import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export function bdPrice(price) {
    return Math.round(parseInt(price) * 110);
}

export function getCurrentEnvironment() {
    if (process.env.NODE_ENV === "production") {
        return process.env.NEXT_PUBLIC_API_URL;
    } else {
        return "http://localhost:3000";
    }
}
