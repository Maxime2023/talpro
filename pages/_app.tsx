import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ResponsiveAppBar from './components/ResponsiveAppBar'
import StickyFooter from './components/StickyFooter'
import { Provider } from 'react-redux';
import store from './components/Redux/ConfigureStore'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Provider store={store}>
    <ResponsiveAppBar/>
    <Component {...pageProps} />
    {/* <StickyFooter/> */}
    </Provider>
    </div>
)
}
