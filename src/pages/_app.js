import PrimaryLayout from "@/components/layout/PrimaryLayout";
import { store } from "@/redux/store";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
    const getLayout = Component.getLayout || ((page) => page);
    return (
        <Provider store={store}>
            <ThemeProvider attribute="class" defaultTheme="system">
                <PrimaryLayout>{getLayout(<Component {...pageProps} />)}</PrimaryLayout>
            </ThemeProvider>
        </Provider>
    );
}
