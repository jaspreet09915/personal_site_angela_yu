import '../styles/globals.css'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('tw-elements')
    import('tw-elements/dist/css/index.min.css')
  }, [])
  
  return <Component {...pageProps} />
}

export default MyApp
