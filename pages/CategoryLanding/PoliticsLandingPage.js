import Cagtegoriesbased4news from '../../component/Common/Categoriesbased4news'
import Categoriesbased8news from '../../component/Common/Categoriesbased8news'
import { AppConfig } from '../../component/Utils/JPlusConfig'
import { ArticleURL, TimeDifference } from "../../component/Utils/CommonUtils";
import Categoriesp1Comp from '../../component/Common/Categoriesp1Comp'
import JagranTvComp from '../../component/Common/JagranTvComp'
import CommonInnerLHS from "../../component/Common/CommonInnerLHS";
import CommonInnerRHS from "../../component/Common/CommonInnerRHS";
import Recommedarticle from '../../component/Common/Recommedarticle';
import JagranSpecialComp from '../../component/Common/JagranSpecialComp';
import Layout from '../../component/Layout/Layout'
import Link from 'next/link'
import { PolitcsLandingPageConfig , JagranPrimeConfig} from '../../component/Utils/JPlusConfig'
import axios from 'axios';
import { useRouter } from "next/router";

/* 
Author: Mohammad Shaazad 
*/

function PoliticsLandingPage(props) {
  const { POLITICS_JAGRAN_SPECIAL, POLITICS_P1, POLITICS_NATIONAL, POLITICS_INTERNATIONAL, POLITICS_STATE, JAGRAN_TV_RESP, POLITICS_JAGRAN_PRIME } = props
  const router = useRouter();
  const currentUrl = AppConfig.DOMAIN_NAME + router.asPath.replace('/','');
  return (

    <>
      <Layout title="Political News in Hindi: Latest राजनीति समाचार from India &amp; World– Dainik Jagran" 
      keywords="Political News, Latest Politics News, News Politics, Top Political News, राजनीति समाचार, Political News in Hindi, Political Breaking News, Latest Political News India, Political News Today, International Politics News, National Political News, राजनीति की खबरे" 
      desc="Political News: Find Today’s Latest News on Politics, Political Breaking News, राजनीति समाचार, राजनीति की खबरे from India and around the World on Dainik Jagran" 
      image={AppConfig.DEFAULT_IMAGE_NAME}
      url={currentUrl}>
  
    <script dangerouslySetInnerHTML={{__html : `var dataLayer = window.dataLayer || [];dataLayer.push({'event':'pageview','tvc_page_type':'Prime Landing Page','tvc_landing_page_type':'Prime Category Landing','tvc_page_cat':'politics','language':'hindi'});`}}></script>
        
    <div className="main-content container" id="main-content">
                    <div className="left-col">
                        <div className='stickySidebar'>
                        <Recommedarticle jagranPrime={POLITICS_JAGRAN_PRIME}/>
                        <Recommedarticle/>
                        <CommonInnerLHS/> 
                        
                        </div>
                    </div>
                    <div className="main-col CategoryLanding">
                      <Categoriesp1Comp news8component={POLITICS_P1} title="पॉलिटिक्स समाचार" />

                        <div className="list-article"><Categoriesbased8news news8component={POLITICS_NATIONAL} title="राष्ट्रीय" /></div>
                        <div className="list-article"><Cagtegoriesbased4news news4component={POLITICS_INTERNATIONAL} title="दुनिया" /></div>
                        <div className="list-article"><Categoriesbased8news news8component={POLITICS_STATE} title="राज्य" /></div>
 
                    </div>
                     <div className="right-col">
                    <div className='stickySidebar'>
                    {/* <ul className="list">

                            {
                              POLITICS_P1.map((componentdata, index) => {
                                if (index > 3) {
                                  const bookmarkobj = { 'title': componentdata.headline, 'url': `${ArticleURL(componentdata)}`, 'image': `${AppConfig.IMAGE_DOMAIN_NAME}${componentdata.imgName}`, 'projectid': componentdata.id, 'description': componentdata.headline, 'site_name': 'jagranplus' };

                                  return (
                                    <li className="article">
                                      <div className="summary full">
                                        <p><Link href={`${ArticleURL(componentdata)}`}>
                                          <a>{componentdata.headline}</a>
                                        </Link>
                                        </p>
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
                        </ul>
*/}
                        <JagranSpecialComp listingData={POLITICS_JAGRAN_SPECIAL}/>   


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
  const POLITICS_P1 = await axios.get(PolitcsLandingPageConfig.POLITICS_P1_API).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
  const POLITICS_NATIONAL = await axios.get(PolitcsLandingPageConfig.POLITICS_NATIONAL_API).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
  const POLITICS_INTERNATIONAL = await axios.get(PolitcsLandingPageConfig.POLITICS_INTERNATIONAL_API).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
  const POLITICS_STATE = await axios.get(PolitcsLandingPageConfig.POLITICS_STATE_API).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
  const JAGRAN_TV = await axios.get(PolitcsLandingPageConfig.JAGRAN_TV_API).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
  const JAGRAN_TV_RESP = JAGRAN_TV.item;
  const POLITICS_JAGRAN_SPECIAL = await axios.get(PolitcsLandingPageConfig.POLITICS_JAGRAN_SPECIAL_API).then((resp) => {return resp.data}).catch((err)=> {console.log("Error Found")});
  const POLITICS_JAGRAN_PRIME = await axios.get(JagranPrimeConfig.JAGRAN_PRIME_API + '/0/10').then((resp) => {return resp.data}).catch((err)=> {console.log("Error Found")});
  return { props: { POLITICS_JAGRAN_SPECIAL, POLITICS_P1, POLITICS_NATIONAL, POLITICS_INTERNATIONAL, POLITICS_STATE, JAGRAN_TV_RESP, POLITICS_JAGRAN_PRIME } }
}

export default PoliticsLandingPage