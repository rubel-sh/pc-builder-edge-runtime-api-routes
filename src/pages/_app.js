import PrimaryLayout from "@/components/layout/PrimaryLayout";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
    const getLayout = Component.getLayout || ((page) => page);
    return (
        <ThemeProvider attribute="class" defaultTheme="system">
            <PrimaryLayout>{getLayout(<Component {...pageProps} />)}</PrimaryLayout>
        </ThemeProvider>
    );
}
