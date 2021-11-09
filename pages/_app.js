import React from "react";
import { GlobalStyles } from "../style/GlobalStyles";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
