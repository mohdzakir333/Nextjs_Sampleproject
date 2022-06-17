import Cagtegoriesbased4news from '../../component/Common/Categoriesbased4news'
import Categoriesbased8news from '../../component/Common/Categoriesbased8news'
import { AppConfig } from '../../component/Utils/JPlusConfig'
import { ArticleURL, TimeDifference } from "../../component/Utils/CommonUtils";
import EditorialP1Comp from '../../component/Common/EditorialP1Comp'
import JagranTvComp from '../../component/Common/JagranTvComp'
import CommonInnerLHS from "../../component/Common/CommonInnerLHS";
import CommonInnerRHS from "../../component/Common/CommonInnerRHS";
import Recommedarticle from '../../component/Common/Recommedarticle';
import JagranSpecialComp from '../../component/Common/JagranSpecialComp';
import Layout from '../../component/Layout/Layout'
import Link from 'next/link'
import { EntertainmentLandingPageConfig, JagranPrimeConfig } from '../../component/Utils/JPlusConfig'
import axios from 'axios';
import { useRouter } from "next/router";

/* 
Author: Mohammad Shaazad 
*/

function EntertainmentLandingPage(props) {
    const { ENTERTAINMENT_P1_RESP, ENTERTAINMENT_BOLLYWOOD, ENTERTAINMENT_WEB_SERIES_REVIEW, ENTERTAINMENT_REVIEW, ENTERTAINMENT_BOX_OFFICE, ENTERTAINMENT_TV, ENTERTAINMENT_BOLLYWOOD_VISHESH, JAGRAN_TV_RESP,ENTERTAINMENT_JAGRAN_SPECIAL,ENTERTAINMENT_JAGRAN_PRIME } = props
    const router = useRouter();
    const currentUrl = AppConfig.DOMAIN_NAME + router.asPath.replace('/','');
    return (

        <>
            <Layout title="Entertainment News in Hindi:Entertainment Hindi News, Latest Hindi Entertainment News -Jagran.com" 
            keywords="hindi entertainment news, entertainment news in hindi,bollywood news in hindi, hindi jokes,controvery,movie review in hindi, entertainment news hindi, latest entertainment news" 
            desc="Entertainment News in Hindi - Jagran.com, an entertainment hindi news portal covering latest entertainment hindi news as bollywood/Hollywood entertainment hindi news, celebrity hindi news, hindi jokes, mirch masala and more." 
            image={AppConfig.DEFAULT_IMAGE_NAME}
            url={currentUrl}>
           
        <script dangerouslySetInnerHTML={{__html : `var dataLayer = window.dataLayer || [];dataLayer.push({'event':'pageview','tvc_page_type':'Prime Landing Page','tvc_landing_page_type':'Prime Category Landing','tvc_page_cat':'entertainment','language':'hindi'});`}}></script>
                
        <div className="main-content container" id="main-content">
                    <div className="left-col">
                        <div className='stickySidebar'>
                        <Recommedarticle jagranPrime={ENTERTAINMENT_JAGRAN_PRIME}/>
                        <Recommedarticle/>
                        <CommonInnerLHS/> 
                        </div>
                    </div>
                    <div className="main-col CategoryLanding">
                    <EditorialP1Comp p1component={ENTERTAINMENT_P1_RESP} title="मनोरंजन समाचार" />
                        <div className="list-article">
                            <Categoriesbased8news news8component={ENTERTAINMENT_BOLLYWOOD} title="बॉलीवुड न्यूज़" />
                        </div>

                        <div className="list-article">
                        <Cagtegoriesbased4news news4component={ENTERTAINMENT_WEB_SERIES_REVIEW} title="वेब सीरीज और मूवी" />
                    </div>
                    <div className="list-article">
                        <Categoriesbased8news news8component={ENTERTAINMENT_REVIEW} title="मूवी रिव्यू" />
                    </div>
                    <div className="list-article">
                        <Cagtegoriesbased4news news4component={ENTERTAINMENT_BOX_OFFICE} title="बॉक्स ऑफ़िस" />
                    </div>
                    <div className="list-article">
                        <Cagtegoriesbased4news news4component={ENTERTAINMENT_TV} title="टेली मसाला" />
                    </div>
                    <div className="list-article">
                        <Categoriesbased8news news8component={ENTERTAINMENT_BOLLYWOOD_VISHESH} title="बॉलीवुड विशेष" />
                    </div>
                    {/* <div className="list-article">
                              <Cagtegoriesbased4news news4component={pagedata.homeeducation} title="शिक्षा" />
                      </div>   */}

                    </div>
                    <div className="right-col">
                    <div className='stickySidebar'>
                    {/* <ul className="list">

                                        {
                                            ENTERTAINMENT_P1_RESP.map((componentdata, index) => {
                                                if (index > 3) {
                                                    const bookmarkobj = { 'title': componentdata.headline, 'url': `${AppConfig.DOMAIN_NAME}${componentdata.link}`, 'image': `${AppConfig.IMAGE_DOMAIN_NAME}${componentdata.imgThumb1}`, 'projectid': componentdata.id, 'description': componentdata.headline, 'site_name': 'jagranplus' };
                                                    return (
                                                        <li className="article">
                                                            <div className="summary full">
                                                                <p>
                                                                    <Link href={`${AppConfig.DOMAIN_NAME}${componentdata.link}`}>
                                                                        <a>{componentdata.headline}</a>
                                                                    </Link>
                                                                </p>
                                                            </div>
                                                            <div className="timestemp text-uppercase">
                                                                <span className="label"><span className="red">{componentdata.type}</span> {componentdata.time}</span>
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
                        </ul> */}
                        <JagranSpecialComp listingData={ENTERTAINMENT_JAGRAN_SPECIAL}/>
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
    const ENTERTAINMENT_P1 = await axios.get(EntertainmentLandingPageConfig.ENTERTAINMENT_P1_API).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const ENTERTAINMENT_JAGRAN_SPECIAL = await axios.get(EntertainmentLandingPageConfig.ENTERTAINMENT_JAGRAN_SPECIAL_API).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const ENTERTAINMENT_BOLLYWOOD = await axios.get(EntertainmentLandingPageConfig.ENTERTAINMENT_BOLLYWOOD_API).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const ENTERTAINMENT_WEB_SERIES_REVIEW = await axios.get(EntertainmentLandingPageConfig.ENTERTAINMENT_WEB_SERIES_REVIEW_API).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const ENTERTAINMENT_REVIEW = await axios.get(EntertainmentLandingPageConfig.ENTERTAINMENT_REVIEW_API).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const ENTERTAINMENT_BOX_OFFICE = await axios.get(EntertainmentLandingPageConfig.ENTERTAINMENT_BOX_OFFICE_API).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const ENTERTAINMENT_TV = await axios.get(EntertainmentLandingPageConfig.ENTERTAINMENT_TV_API).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const ENTERTAINMENT_BOLLYWOOD_VISHESH = await axios.get(EntertainmentLandingPageConfig.ENTERTAINMENT_BOLLYWOOD_VISHESH_API).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const ENTERTAINMENT_P1_RESP = ENTERTAINMENT_P1.response.docs;
    const ENTERTAINMENT_JAGRAN_PRIME = await axios.get(JagranPrimeConfig.JAGRAN_PRIME_API + '/0/10').then((resp) => {return resp.data}).catch((err)=> {console.log("Error Found")});
    const JAGRAN_TV = await axios.get(EntertainmentLandingPageConfig.JAGRAN_TV_API).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const JAGRAN_TV_RESP = JAGRAN_TV.item;
    return { props: { ENTERTAINMENT_P1_RESP,ENTERTAINMENT_JAGRAN_SPECIAL, ENTERTAINMENT_BOLLYWOOD, ENTERTAINMENT_WEB_SERIES_REVIEW, ENTERTAINMENT_REVIEW, ENTERTAINMENT_BOX_OFFICE, ENTERTAINMENT_TV, ENTERTAINMENT_BOLLYWOOD_VISHESH, JAGRAN_TV_RESP,ENTERTAINMENT_JAGRAN_PRIME } }
}

export default EntertainmentLandingPage