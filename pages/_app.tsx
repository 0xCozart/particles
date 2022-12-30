import type { AppProps } from "next/app";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "../styles/globals.css";
import { ContextWrapper } from "../utils/context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContextWrapper>
      <Component {...pageProps} />
    </ContextWrapper>
  );
}
