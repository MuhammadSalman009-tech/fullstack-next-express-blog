import '../styles/globals.css'
import {AppProps} from "next/app"
import "bootstrap/dist/css/bootstrap.min.css"
function MyApp({ Component, pageProps }:AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
