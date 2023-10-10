import store from "@/redux/store";
import "@/styles/globals.css";
import "antd/dist/reset.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <ToastContainer position="bottom-right" autoClose={2000} />
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  );
}
