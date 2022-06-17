import Cagtegoriesbased4news from '../../component/Common/Categoriesbased4news'
import Categoriesbased8news from '../../component/Common/Categoriesbased8news'
import { AppConfig } from '../../component/Utils/JPlusConfig'
import {ArticleURL,TimeDifference} from "../../component/Utils/CommonUtils";
import Categoriesp1Comp from '../../component/Common/Categoriesp1Comp'
import JagranTvComp from '../../component/Common/JagranTvComp'
import CommonInnerLHS from "../../component/Common/CommonInnerLHS";
import CommonInnerRHS from "../../component/Common/CommonInnerRHS";
import Recommedarticle from '../../component/Common/Recommedarticle';
import JagranSpecialComp from '../../component/Common/JagranSpecialComp';
import Layout from '../../component/Layout/Layout'
import {AutomobileLandingPageConfig, JagranPrimeConfig} from '../../component/Utils/JPlusConfig'
import Link from 'next/link'
import axios from 'axios';
import { useRouter } from "next/router";

/* 
Author: Mohammad Shaazad 
*/

function AutomobileLandingPage(props) {
    const {AUTOMOBILE_P1,AUTOMOBILE_GUIDE,AUTOMOBILE_LATEST_NEWS,AUTOMOBILE_LATEST_LAUNCH,AUTOMOBILE_REVIEW,JAGRAN_TV_RESP,AUTOMOBILE_JAGRAN_SPECIAL, AUTOMOBILE_JAGRAN_PRIME} = props
               
    const { asPath ,query} = useRouter()
    const currentURL = AppConfig.DOMAIN_NAME + asPath.replace('/','');
    //const { } = props
  return (
      
    <>
      <Layout title="Dainik Jagran: Hindi News, Latest News in Hindi Today, हिन्दी समाचार, Today Hindi News Paper" keywords="Car News, Bike News, Auto News, Automobile News, Auto News in Hindi, Car Reviews, Bike Reviews, New Car Launches, New Bike Launches, Car and Bike Photos, Car and Bike Videos" desc="Bike and Car News in Hindi: Find latest automobile news in Hindi at Jagran Auto. Also get car and bike reviews, photos, videos and new auto launch news in Hindi." image={AppConfig.DEFAULT_IMAGE_NAME} url={currentURL}>
 
        <script dangerouslySetInnerHTML={{
          __html:`var dataLayer = window.dataLayer || [];dataLayer.push({'event':'pageview','tvc_page_type':'Prime Landing Page','tvc_landing_page_type':'Category Landing','tvc_page_cat':'automobile','language':'hindi'});`
      }}></script>
            
            <div className="main-content container" id="main-content">
                    <div className="left-col">
                    
                        <div className='stickySidebar'>
                        <Recommedarticle jagranPrime={AUTOMOBILE_JAGRAN_PRIME}/>
                        <Recommedarticle/>
                        <CommonInnerLHS/> 
                        </div>
                    </div>
                    <div className="main-col CategoryLanding">
                    <div className='stickySidebar'>
                    <Categoriesp1Comp news8component={AUTOMOBILE_P1} title="ऑटो समाचार"/> 
                      <div className="list-article">
                        <Categoriesbased8news news8component={AUTOMOBILE_GUIDE} title="गाइड" />
                      </div>

                      <div className="list-article">
                      <Cagtegoriesbased4news news4component={AUTOMOBILE_LATEST_NEWS} title="लेटेस्ट न्यूज़" />
                      </div>

                      <div className="list-article">
                      <Categoriesbased8news news8component={AUTOMOBILE_LATEST_LAUNCH} title="लेटेस्ट लॉंच" />
                      </div>

                      <div className="list-article">
                      <Cagtegoriesbased4news news4component={AUTOMOBILE_REVIEW} title="रिव्यू" />
                      </div>
                        </div>
                    </div>
                    <div className="right-col">
                    <div className='stickySidebar'>
                        {/* <ul className="list">

                          {
                          AUTOMOBILE_P1.map((componentdata,index) => 
                          {
                              if(index >3){
                                  const bookmarkobj = {'title':componentdata.headline,'url':`${ArticleURL(componentdata)}`,'image':`${AppConfig.IMAGE_DOMAIN_NAME}${componentdata.imgName}`,'projectid':componentdata.id,'description':componentdata.headline,'site_name':'jagranplus'};
                                  return (
                                  <li className="article">
                                              <div className="summary full">
                                                  <p><Link href={`${ArticleURL(componentdata)}`}><a>{componentdata.headline}</a></Link></p>
                                              </div>
                                              <div className="timestemp text-uppercase">
                                                  <span className="label"><span className="red">{componentdata.category}</span> {TimeDifference(componentdata.modDate)}</span>
                                          <Link href="javascript:void(0)"><a className="bookmark bookmarkaddContainer" id={`htmlDataBookmarkId${componentdata.id}`}>
                                              <svg onClick={() => pluslistingBookmark(bookmarkobj)}><use href="#bookmark"></use></svg></a>
                                          </Link>
                                              </div>
                              </li>

                                    );
                                  }
                                }
                                )
                                } 
                        </ul>  */}

                        <JagranSpecialComp listingData={AUTOMOBILE_JAGRAN_SPECIAL}/>
                        
                            <CommonInnerRHS/>                             
                        
                        </div>
                    </div>
                </div>        

 
        <JagranTvComp tvcomponent={JAGRAN_TV_RESP} />
       </Layout> 
     
    </>
  )
}
export const getServerSideProps = async () => {
   const AUTOMOBILE_P1 = await axios.get(AutomobileLandingPageConfig.AUTOMOBILE_P1_API).then( (resp) => {return resp.data}).catch((err)=> {console.log("Error Found")});
   const AUTOMOBILE_JAGRAN_SPECIAL = await axios.get(AutomobileLandingPageConfig.AUTOMOBILE_JAGRAN_SPECIAL_API).then( (resp) => {return resp.data}).catch((err)=> {console.log("Error Found")});
   const AUTOMOBILE_GUIDE = await axios.get(AutomobileLandingPageConfig.AUTOMOBILE_GUIDE_API).then( (resp) => {return resp.data}).catch((err)=> {console.log("Error Found")});
   const AUTOMOBILE_LATEST_NEWS = await axios.get(AutomobileLandingPageConfig. AUTOMOBILE_LATEST_NEWS_API).then( (resp) => {return resp.data}).catch((err)=> {console.log("Error Found")});
   const AUTOMOBILE_LATEST_LAUNCH = await axios.get(AutomobileLandingPageConfig.AUTOMOBILE_LATEST_LAUNCH_API).then( (resp) => {return resp.data}).catch((err)=> {console.log("Error Found")});
   const AUTOMOBILE_REVIEW = await axios.get(AutomobileLandingPageConfig.AUTOMOBILE_REVIEW_API).then( (resp) => {return resp.data}).catch((err)=> {console.log("Error Found")});
   const JAGRAN_TV= await axios.get(AutomobileLandingPageConfig.JAGRAN_TV_API).then((resp) => {return resp.data}).catch((err)=> {console.log("Error Found")});
   const AUTOMOBILE_JAGRAN_PRIME = await axios.get(JagranPrimeConfig.JAGRAN_PRIME_API + '/0/10').then((resp) => {return resp.data}).catch((err)=> {console.log("Error Found")});
   const JAGRAN_TV_RESP  = JAGRAN_TV.item;
   
   return { props: {AUTOMOBILE_P1,AUTOMOBILE_JAGRAN_SPECIAL,AUTOMOBILE_GUIDE,AUTOMOBILE_LATEST_NEWS,AUTOMOBILE_LATEST_LAUNCH,AUTOMOBILE_REVIEW,JAGRAN_TV_RESP,AUTOMOBILE_JAGRAN_PRIME} }
  }
  
export default AutomobileLandingPage