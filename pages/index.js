import Cagtegoriesbased4news from '../component/Common/Categoriesbased4news'
import Categoriesbased8news from '../component/Common/Categoriesbased8news'
import EditorialP1Comp from '../component/Common/EditorialP1Comp'
//import SubscribeWidget from '../component/Common/SubscribeWidget'
import StateselectComp from '../component/Home/StateselectComp'
import HomeTopRHSComp from "../component/Ads/Home/HomeTopRHSComp";  
import JagranTvComp from '../component/Common/JagranTvComp'
//import PlayWidgetComp from '../component/Common/PlayWidgetComp'
//import PodcastComp from '../component/Common/PodcastComp'
import Recommedarticle from '../component/Common/Recommedarticle'
import JagranSpecialComp from '../component/Common/JagranSpecialComp'
import Categoriesbased8newsP1 from '../component/Common/Categoriesbased8newsP1';
import Layout from '../component/Layout/Layout'
import React from 'react'
import ReactDOM from 'react-dom'
  
 

import { AppConfig, HomePageConfig, JagranPrimeConfig} from '../component/Utils/JPlusConfig'
import axios from 'axios'
import Link from 'next/link'
/* 
Author: Mohammad Shaazad 
*/

function Home(props) {
    const { HOME_P1_RESP, HOME_POLITICS,HOME_AUTOMOBILE, HOME_TECHNOLOGY, HOME_LIFESTYLE, HOME_CRICKET, HOME_EDUCATION, HOME_COMMON_MEN_ISSUE, JAGRAN_TV_RESP, HOME_JAGRAN_SPECIAL, HOME_ENTERTAINMENT, HOME_BUSINESS, HOME_WORLD, HOME_JAGRAN_PRIME } = props



    return (
    <>
    <Layout title="Dainik Jagran: Hindi News, Latest News in Hindi Today, हिन्दी समाचार, Today Hindi News Paper" keywords="hindi news, news in hindi, hindi news headlines, हिन्दी समाचार, latest news in hindi, hindi news live, hindi samachar, breaking news in hindi, headlines in hindi, ताज़ा ख़बर, ब्रेकिंग न्यूज़" desc="Hindi News Paper Dainik Jagran (दैनिक जागरण) brings latest hindi news headlines, breaking news in hindi on Politics, Business, Bollywood, Technology, Cricket from India and around the World. हिंदी में पढ़ें देश और दुनिया की ताजा ख़बरें." image={AppConfig.DEFAULT_IMAGE_NAME} url={AppConfig.DOMAIN_NAME}>
               
     {/* Schema For Home Page Only*/}
       <script type="application/ld+json" dangerouslySetInnerHTML={{  __html: ` {"@context" : "https://schema.org","@type" : "Organization","name" : "दैनिक जागरण","url" : "${AppConfig.DOMAIN_NAME}","sameAs" : [ "https://www.facebook.com/dainikjagran","https://twitter.com/JagranNews"]}`} }></script>
     {/* Schema For Home Page End*/}
       
     {/* datalayer script is started */} 
      <script dangerouslySetInnerHTML={{
          __html:`var dataLayer = window.dataLayer || [];
       dataLayer.push({'event':'pageview','tvc_page_type':'Homepage','tvc_homepage_type':'Prime Homepage','language':'hindi'});`
      }}></script> 
    {/* datalayer script is end */} 
                <div className="main-content container" id="main-content">
                    <div className="left-col">
                             
                             <div className='stickySidebar'><Recommedarticle jagranPrime={HOME_JAGRAN_PRIME}/></div>
                     </div>

                    <div className="main-col">
                    <div className='stickySidebar'>
                        
                                <EditorialP1Comp p1component={HOME_P1_RESP} />
                             
                           {/* <SubscribeWidget />*/}
                           
 
                            <div className="list-article">
                                 <Categoriesbased8news news8component={HOME_POLITICS} title="पॉलिटिक्स" /> 
                            </div>
                             </div>
                     </div>
                    <div className="right-col">
                   
                    
                    <div className='stickySidebar'>
                           <HomeTopRHSComp/>
                           <JagranSpecialComp listingData={HOME_JAGRAN_SPECIAL}/>                      
                      </div>
                    </div>
                </div>

                <StateselectComp title="राज्य" />

                <div className="main-content container">
                    <div className="left-col">
                    <div className='stickySidebar'>
                        <Cagtegoriesbased4news news4component={HOME_COMMON_MEN_ISSUE} title="आम मुद्दे" />
                        </div>
                    </div>
                    <div className="main-col list-article">
                    <div className='stickySidebar'>
                        <Categoriesbased8newsP1 news8component={HOME_ENTERTAINMENT} title={"मनोरंजन"} />
                        </div>
                    </div>
                    <div className="right-col">
                    <div className='stickySidebar'>
                        <Cagtegoriesbased4news news4component={HOME_LIFESTYLE} title="लाइफस्टाइल" />
                        </div>
                    </div>
                </div>

                <div className="main-content container">
                    <div className="left-col">
                    <div className='stickySidebar'>
                    
                        <Cagtegoriesbased4news news4component={HOME_BUSINESS} title="बिजनेस" />
                        </div>
                    </div>
                    <div className="main-col list-article">
                    <div className='stickySidebar'>
                        <Categoriesbased8news news8component={HOME_CRICKET} title="क्रिकेट" />
                        </div>
                    </div>
                    <div className="right-col">
                    <div className='stickySidebar'>
                        <Cagtegoriesbased4news news4component={HOME_EDUCATION} title="शिक्षा" />
                        </div>
                    </div>
                </div>


                <div className="main-content container">
                    <div className="left-col">
                    <div className='stickySidebar'>
                    
                        <Cagtegoriesbased4news news4component={HOME_WORLD} title="दुनिया" />
                        </div>
                    </div>
                    <div className="main-col list-article">
                    <div className='stickySidebar'>
                        <Categoriesbased8news news8component={HOME_TECHNOLOGY} title="टेक ज्ञान" />
                        </div>
                    </div>
                    <div className="right-col">
                    <div className='stickySidebar'>
                        <Cagtegoriesbased4news news4component={HOME_AUTOMOBILE} title="ऑटो" />
                        </div>
                    </div>
                </div>


                <JagranTvComp tvcomponent={JAGRAN_TV_RESP} />
            </Layout>

        </>
    )
}

export const getServerSideProps = async (context) => {
    const HOME_P1 = await axios.get(HomePageConfig.HOME_P1_API).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const HOME_AUTOMOBILE = await axios.get(HomePageConfig.HOME_AUTOMOBILE_API).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const HOME_POLITICS = await axios.get(HomePageConfig.HOME_POLITICS_API).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const HOME_TECHNOLOGY = await axios.get(HomePageConfig.HOME_TECHNOLOGY_API).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const HOME_LIFESTYLE = await axios.get(HomePageConfig.HOME_LIFESTYLE_API).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const HOME_CRICKET = await axios.get(HomePageConfig.HOME_CRICKET_API).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const HOME_EDUCATION = await axios.get(HomePageConfig.HOME_EDUCATION_API).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const HOME_COMMON_MEN_ISSUE = await axios.get(HomePageConfig.HOME_COMMON_MEN_ISSUE_API).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const HOME_P1_RESP = HOME_P1.response.docs != undefined ? HOME_P1.response.docs : '';    
    const JAGRAN_TV = await axios.get(HomePageConfig.JAGRAN_TV_API).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const JAGRAN_TV_RESP = JAGRAN_TV.item != undefined ? JAGRAN_TV.item : '';    
    const HOME_JAGRAN_SPECIAL = await axios.get(HomePageConfig.HOME_JAGRAN_SPECIAL_API).then((resp) => {return resp.data}).catch((err)=> {console.log("Error Found")});
    const HOME_ENTERTAINMENT = await axios.get(HomePageConfig.HOME_ENTERTAINMENT_API).then((resp) => { return resp.data.response.docs }).catch((err) => { console.log("Error Found") });
    const HOME_BUSINESS = await axios.get(HomePageConfig.HOME_BUSINESS_API).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const HOME_WORLD = await axios.get(HomePageConfig.HOME_WORLD_API).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const HOME_JAGRAN_PRIME = await axios.get(JagranPrimeConfig.JAGRAN_PRIME_API + '/0/10').then((resp) => {return resp.data}).catch((err)=> {console.log("Error Found")});


    return { props: { HOME_P1_RESP,HOME_AUTOMOBILE, HOME_POLITICS, HOME_TECHNOLOGY, HOME_LIFESTYLE, HOME_CRICKET, HOME_EDUCATION, HOME_COMMON_MEN_ISSUE, JAGRAN_TV_RESP, HOME_JAGRAN_SPECIAL, HOME_ENTERTAINMENT, HOME_BUSINESS, HOME_WORLD, HOME_JAGRAN_PRIME }, }
}

export default Home
