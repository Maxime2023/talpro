import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ResponsiveAppBar from './components/ResponsiveAppBar'
import StickyFooter from './components/StickyFooter'
import { Provider } from 'react-redux';
import store from './components/Redux/ConfigureStore'
import { useRouter } from "next/router";
import React, { Fragment } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const showHeader = router.pathname === "/" || router.pathname === "/login" || router.pathname === "/register" ? false : true;
  return (
    <div>
      <Provider store={store}>
      <Fragment>
        {showHeader && <ResponsiveAppBar />}
    </Fragment>
    
    <Component {...pageProps} />
    {/* <StickyFooter/> */}
    </Provider>
    </div>
)
}
