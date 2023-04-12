import { AppProps } from "next/app";
import Root from "../layouts/Root";
import "../styles/global.css";

function App({ Component, pageProps }: AppProps) {
  // Here: Providers - Context ~ theme, data
  // Layout
  // aditional props
  return (
    <Root>
      <Component {...pageProps} />
    </Root>
  );
}

export default App;
