import Image from "next/image";

const Logo = () => {
    return <Image priority src={"/logos/meta-dark.svg"} className="dark:invert" alt="Logo" width={280} height={50} />;
};

export default Logo;
