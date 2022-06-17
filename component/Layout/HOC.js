import Head from 'next/head'
import Footer from "../Global/Footer"
import Header from "../Global/Header"
import { useRouter } from "next/router";
import { AppConfig } from '../Utils/JPlusConfig'


function HOC({ children, title, keywords, desc,image, url, alternateLink, canonicalLink }) {
  const router = useRouter();
  const currenturl = AppConfig.DOMAIN_NAME + router.asPath.replace('/','');
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default HOC;
