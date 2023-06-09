import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../services/store";
import toast, { Toaster } from "react-hot-toast";
import Root from "../layouts/Root";
import "../styles/global.css";

function App({ Component, pageProps }: AppProps) {
  // Here: Providers - Context ~ theme, data
  // Layout
  // aditional props
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Root>
          <Component {...pageProps} />
          <Toaster />
        </Root>
      </PersistGate>
    </Provider>
  );
}

export default App;
