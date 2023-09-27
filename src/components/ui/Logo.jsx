import Image from "next/image";

const Logo = ({ dark }) => {
    return (
        <Image
            priority
            src={dark ? "/logos/meta-dark.svg" : "/logos/meta-light.svg"}
            alt="Logo"
            width={280}
            height={50}
        />
    );
};

export default Logo;
