import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../services/store";
import Root from "../layouts/Root";
import "../styles/global.css";

function App({ Component, pageProps }: AppProps) {
  // Here: Providers - Context ~ theme, data
  // Layout
  // aditional props
  return (
    <Provider store={store}>
      <Root>
        <Component {...pageProps} />
      </Root>
    </Provider>
  );
}

export default App;
