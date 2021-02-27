import "../styles/global.css";

import { CountdownProvider } from "../contexts/CountdownContext";

function MyApp({ Component, pageProps }) {
  return (
      <CountdownProvider>
        <Component {...pageProps} />
      </CountdownProvider>
  );
}

export default MyApp;