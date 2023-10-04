import { GitHubLoginButton, GoogleLoginButton } from "@/components/CustomUI/SocialLoginButtons";
import { Card } from "@/components/ui/card";
import { getCurrentEnvironment } from "@/lib/utils";
import { signIn } from "next-auth/react";
import React from "react";

const login = () => {
    const baseUrl = getCurrentEnvironment();

    const handleGitHubSignIn = async () => {
        await signIn("github", { callbackUrl: `${baseUrl}/builder` });
    };
    const handleGoogleSignIn = async () => {
        await signIn("google", { callbackUrl: `${baseUrl}/builder` });
    };

    return (
        <div className="flex justify-center mt-10 md:mt-20">
            <Card className="max-w-max p-5 text-center">
                <h2 className="text-primary text-2xl font-bold">Welcome Back!</h2>
                <p className="my-3 font-medium text-muted-foreground">Plan Accordingly within your budget</p>
                <div className="space-y-4">
                    <GoogleLoginButton onClick={handleGoogleSignIn} />
                    <GitHubLoginButton onClick={handleGitHubSignIn} />
                </div>
            </Card>
        </div>
    );
};

export default login;
