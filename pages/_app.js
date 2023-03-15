import React from "react";
import { Toaster } from "react-hot-toast";
import { Layout } from "@component/components";
import "@component/styles/globals.css";
import { StateContext } from "@component/context/StateContext";

export default function App({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}
