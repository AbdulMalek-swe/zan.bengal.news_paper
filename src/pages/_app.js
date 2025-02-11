import { LayoutPageWrapper } from "@/components/layouts";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <LayoutPageWrapper>
      <Component {...pageProps} />
    </LayoutPageWrapper>
  );
}
