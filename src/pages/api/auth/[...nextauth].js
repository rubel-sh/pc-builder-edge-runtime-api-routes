import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        GoogleProvider({
            clientId: process.env.Google_ID,
            clientSecret: process.env.Google_SECRET,
        }),
        // ...add more providers here
    ],

    // Custom Login Page
    pages: {
        signIn: "/login",
    },
});
