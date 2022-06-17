import '../public/css/style.css'
import HOCLayout from '../component/Layout/HOC'


function MyApp({ Component, pageProps }) {

  return (
  <HOCLayout {...pageProps}><Component {...pageProps} /></HOCLayout>
  )
}

export default MyApp
