import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (
        <Link href="/">
            <Image priority src={"/logos/meta-dark.svg"} className="dark:invert" alt="Logo" width={280} height={50} />
        </Link>
    );
};

export default Logo;
