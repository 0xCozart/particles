import { Merriweather_Sans } from "@next/font/google";
import { Provider as SelfIdProvider } from "@self.id/react";
import type { AppProps } from "next/app";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-blue/theme.css";
import { Provider } from "react-redux";
import store from "../redux/store";
import "../styles/globals.css";

const merri = Merriweather_Sans({ weight: "300", subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <SelfIdProvider client={{ ceramic: "testnet-clay" }}>
        <main className={merri.className}>
          <Component {...pageProps} />
        </main>
      </SelfIdProvider>
    </Provider>
  );
}
