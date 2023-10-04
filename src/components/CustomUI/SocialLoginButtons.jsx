import { Button } from "../ui/button";
import { BsGoogle, BsGithub } from "react-icons/bs";

const GoogleLoginButton = ({ ...props }) => {
    return (
        <Button
            {...props}
            type="button"
            className="flex items-center justify-center gap-2 bg-[#0076ff] hover:bg-[#0077ffdb] hover:scale-95 active:scale-105 px-5 py-6 text-white dark:text-black min-w-[300px]"
            variant="secondary"
        >
            <BsGoogle color="white" fontSize={26} />
            Login with Google
        </Button>
    );
};

const GitHubLoginButton = ({ ...props }) => {
    return (
        <Button
            {...props}
            type="button"
            className="flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 hover:scale-95 active:scale-105 hover:bg-opacity-95 px-5 py-6 text-white dark:text-black min-w-[300px]"
            variant="secondary"
        >
            <BsGithub color="white" fontSize={26} />
            Login with GitHub
        </Button>
    );
};

export { GoogleLoginButton, GitHubLoginButton };
