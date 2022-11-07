import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";

import store from "../redux/store/store";
import { Footer, Navbar } from "../components";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-[#FAFAFA]">
      <Provider store={store}>
        <Toaster />
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </div>
  );
}
