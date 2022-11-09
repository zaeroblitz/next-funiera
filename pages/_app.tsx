import type { AppProps } from "next/app";
import Router from "next/router";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";
import ProgressBar from "@badrap/bar-of-progress";

import store from "../redux/store/store";
import { Footer, Navbar } from "../components";
import "../styles/globals.css";

const progressBar = new ProgressBar({
  size: 4,
  color: "#D38669",
  className: "z-50",
  delay: 100,
});

Router.events.on("routeChangeStart", progressBar.start);
Router.events.on("routeChangeComplete", progressBar.finish);
Router.events.on("routeChangeError", progressBar.finish);

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <div className="bg-[#FAFAFA]">
      <SessionProvider session={session}>
        <Provider store={store}>
          <Toaster />
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </Provider>
      </SessionProvider>
    </div>
  );
}
