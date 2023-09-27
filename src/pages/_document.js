import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en" className="dark-mode">
            <Head />
            <body className="bg-primary-dark text-white">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
