import { useTheme } from "next-themes";
import Image from "next/image";

const Logo = ({ dark }) => {
    const { theme } = useTheme();
    return (
        <Image
            priority
            src={theme === "light" ? "/logos/meta-dark.svg" : "/logos/meta-light.svg"}
            alt="Logo"
            width={280}
            height={50}
        />
    );
};

export default Logo;
