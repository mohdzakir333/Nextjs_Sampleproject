//import Sticky from 'react-stickynode'
import Cagtegoriesbased4news from '../../component/Common/Categoriesbased4news'
import Categoriesbased8news from '../../component/Common/Categoriesbased8news'
import { AppConfig } from '../../component/Utils/JPlusConfig'
import {ArticleURL,TimeDifference} from "../../component/Utils/CommonUtils";
import Categoriesp1Comp from '../../component/Common/Categoriesp1Comp'
import JagranTvComp from '../../component/Common/JagranTvComp'
import Layout from '../../component/Layout/Layout'
import CommonInnerLHS from "../../component/Common/CommonInnerLHS";
import CommonInnerRHS from "../../component/Common/CommonInnerRHS";
import Recommedarticle from '../../component/Common/Recommedarticle';
import JagranSpecialComp from '../../component/Common/JagranSpecialComp';
import {CricketLandingPageConfig,JagranPrimeConfig} from '../../component/Utils/JPlusConfig'
import Link from 'next/link'
import axios from 'axios';
import { useRouter } from "next/router";

/* 
Author: Mohammad Shaazad 
*/

function CricketLandingPage(props) {
    const {CRICKET_P1,CRICKET_HEADLINES,CRICKET_BOUNCER,CRICKET_META,CRICKET_APNIBAT,CRICKET_MATCH_REPORT,JAGRAN_TV_RESP,CRICKET_JAGRAN_SPECIAL, CRICKET_JAGRAN_PRIME} = props
               
    const { asPath ,query} = useRouter()
    const currentURL = AppConfig.DOMAIN_NAME + asPath.replace('/','');

  return (
      
    <>
      <Layout title={CRICKET_META.title} keywords={CRICKET_META.keywords} desc={CRICKET_META.desc} image={AppConfig.DEFAULT_IMAGE_NAME} url={currentURL}>
        

<script dangerouslySetInnerHTML={{
          __html:`var dataLayer = window.dataLayer || [];dataLayer.push({'event':'pageview','tvc_page_type':'Prime Landing Page','tvc_landing_page_type':'Category Landing','tvc_page_cat':'cricket','language':'hindi'});`
      }}></script>

<div className="main-content container" id="main-content">
                    <div className="left-col">
                        <div className='stickySidebar'>
                        <Recommedarticle jagranPrime={CRICKET_JAGRAN_PRIME}/>
                        <Recommedarticle/>
                        <CommonInnerLHS/> 
                        </div>
                    </div>
                    <div className="main-col CategoryLanding">
                    <Categoriesp1Comp news8component={CRICKET_P1} title="क्रिकेट समाचार"/> 
                <div className="list-article">
                  <Categoriesbased8news news8component={CRICKET_HEADLINES} title="हेडलाइंस" />
                </div>
                <div className="list-article">
            <Cagtegoriesbased4news news4component={CRICKET_BOUNCER} title="बाउन्सर" />
          </div>
          <div className="list-article">  
            <Categoriesbased8news news8component={CRICKET_APNIBAT} title="अपनी बात" />
          </div>
          <div className="list-article">
            <Cagtegoriesbased4news news4component={CRICKET_MATCH_REPORT} title="मैच रिपोर्ट" />
          </div>
                    </div>
                    <div className="right-col">
                    <div className='stickySidebar'>
                    {/* <ul className="list">

                            {
                            CRICKET_P1.map((componentdata,index) => 
                            {
                                if(index >3){
                                    const bookmarkobj = {'title':componentdata.headline,'url':`${ArticleURL(componentdata)}`,'image':`${AppConfig.IMAGE_DOMAIN_NAME}${componentdata.imgName}`,'projectid':componentdata.id,'description':componentdata.headline,'site_name':'jagranplus'}; 
                                    return (
                                    <li className="article">
                                                <div className="summary full">
                                                    <p><Link href={`${ArticleURL(componentdata)}`}>
                                                        <a>{componentdata.headline}</a>
                                                        </Link></p>
                                                </div>
                                                <div className="timestemp text-uppercase">
                                                    <span className="label"><span className="red">{componentdata.category}</span>{TimeDifference(componentdata.modDate)}</span>
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
                    <JagranSpecialComp listingData={CRICKET_JAGRAN_SPECIAL}/>
                            <CommonInnerRHS/>                             
                        
                        </div>
                    </div>
                </div> 

         {/* <div className="main-content container"> */}
          {/* <div className="left-col"> */}
            {/* <Cagtegoriesbased4news news4component={PAGEDATA.BUSINESS_EXPERT_COLUMN} title="एक्सपर्ट कॉलम" /> */}
          {/* </div> */}
          {/* <div className="main-col">  
            <Categoriesbased8news news8component={pagedata.homecricket} title="क्रिकेट" />
          </div>
          <div className="right-col">
            <Cagtegoriesbased4news news4component={pagedata.homeeducation} title="शिक्षा" />
          </div> */}
        {/* </div>  */}

        <JagranTvComp tvcomponent={JAGRAN_TV_RESP} />
       </Layout> 
     
    </>
  )
}
export const getServerSideProps = async () => {
   const CRICKET_P1 = await axios.get(CricketLandingPageConfig.CRICKET_P1_API).then( (resp) => {return resp.data}).catch((err)=> {console.log("Error Found")});
   const CRICKET_JAGRAN_SPECIAL = await axios.get(CricketLandingPageConfig.CRICKET_JAGRAN_SPECIAL_API).then( (resp) => {return resp.data}).catch((err)=> {console.log("Error Found")});
   const CRICKET_HEADLINES = await axios.get(CricketLandingPageConfig.CRICKET_HEADLINES_API).then( (resp) => {return resp.data}).catch((err)=> {console.log("Error Found")});
   const CRICKET_BOUNCER = await axios.get(CricketLandingPageConfig.CRICKET_BOUNCER_API).then( (resp) => {return resp.data}).catch((err)=> {console.log("Error Found")});
   const CRICKET_META = await axios.get(CricketLandingPageConfig.CRICKET_META_API).then( (resp) => {return resp.data}).catch((err)=> {console.log("Error Found")});
   const CRICKET_APNIBAT = await axios.get(CricketLandingPageConfig.CRICKET_APNIBAT_API).then( (resp) => {return resp.data}).catch((err)=> {console.log("Error Found")});
   const CRICKET_MATCH_REPORT = await axios.get(CricketLandingPageConfig.CRICKET_MATCH_REPORT_API).then( (resp) => {return resp.data}).catch((err)=> {console.log("Error Found")});
   const CRICKET_JAGRAN_PRIME = await axios.get(JagranPrimeConfig.JAGRAN_PRIME_API + '/0/10').then((resp) => {return resp.data}).catch((err)=> {console.log("Error Found")});
   const JAGRAN_TV= await axios.get(CricketLandingPageConfig.JAGRAN_TV_API).then((resp) => {return resp.data}).catch((err)=> {console.log("Error Found")});
   const JAGRAN_TV_RESP  = JAGRAN_TV.item;
   return { props: {CRICKET_P1,CRICKET_JAGRAN_SPECIAL,CRICKET_HEADLINES,CRICKET_BOUNCER,CRICKET_META,CRICKET_APNIBAT,CRICKET_MATCH_REPORT,JAGRAN_TV_RESP, CRICKET_JAGRAN_PRIME} }
  }
  
export default CricketLandingPage