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
import { WorldLandingPageConfig, JagranPrimeConfig } from '../../component/Utils/JPlusConfig'
import axios from 'axios';
import { useRouter } from "next/router";

/* 
Author: Mohammad Shaazad 
*/

function WorldLandingPage(props) {
    const { WORLD_P1, WORLD_PAKISTAN, WORLD_CHINA, WORLD_AMERICA, WORLD_MIDDLE_EAST, WORLD_OTHER, JAGRAN_TV_RESP,WORLD_JAGRAN_SPECIAL,WORLD_JAGRAN_PRIME } = props
    const router = useRouter();
    const currentUrl = AppConfig.DOMAIN_NAME + router.asPath.replace('/','');
    return (

        <>
            <Layout title="World News in Hindi:International News,World News Today - Jagran.com" 
            keywords="World News, World News Today, World News in Hindi, Latest World News, International News, Latest International News, International News Today, International News in Hindi" 
            desc="World News in Hindi - Find Latest International News in Hindi, World Hindi News, International News Today, World News Today, World Events at Jagran.com" 
            image={AppConfig.DEFAULT_IMAGE_NAME}
            url={currentUrl}>

        <script dangerouslySetInnerHTML={{__html : `var dataLayer = window.dataLayer || [];dataLayer.push({'event':'pageview','tvc_page_type':'Prime Landing Page','tvc_landing_page_type':'Prime Category Landing','tvc_page_cat':'world','language':'hindi'});`}}></script>
        <div className="main-content container" id="main-content">
                    <div className="left-col">
                        <div className='stickySidebar'>
                        <Recommedarticle jagranPrime={WORLD_JAGRAN_PRIME}/>
                            <Recommedarticle/>
                        <CommonInnerLHS/> 
                        
                        
                        </div>
                    </div>
                    <div className="main-col CategoryLanding">
                    <div className='stickySidebar'>
                    <Categoriesp1Comp news8component={WORLD_P1} title="समाचार" />
                        <div className="list-article">
                        <Cagtegoriesbased4news news4component={WORLD_PAKISTAN}  title="पाकिस्तान" /> 
                         </div>

                        <div className="list-article">
                        <Categoriesbased8news news8component={WORLD_AMERICA} title="अमेरिका" />
                        </div>
                        <div className="list-article">
                        <Cagtegoriesbased4news news4component={WORLD_MIDDLE_EAST} title="मिडिल ईस्ट" />
                        </div>
                        <div className="list-article">
                        <Cagtegoriesbased4news news4component={WORLD_OTHER} title="अन्य देश" />
                        </div>
                        
                        </div>
                    </div>
                    <div className="right-col">
                    <div className='stickySidebar'>
                    {/* <ul className="list">

                                {
                                    WORLD_P1.map((componentdata, index) => {
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
                            </ul> */}

                            <JagranSpecialComp listingData={WORLD_JAGRAN_SPECIAL}/>

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
    const WORLD_P1 = await axios.get(WorldLandingPageConfig.WORLD_P1_API).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const WORLD_JAGRAN_SPECIAL = await axios.get(WorldLandingPageConfig.WORLD_JAGRAN_SPECIAL_API).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const WORLD_PAKISTAN = await axios.get(WorldLandingPageConfig.WORLD_PAKISTAN_API).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const WORLD_CHINA = await axios.get(WorldLandingPageConfig.WORLD_CHINA_API).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const WORLD_AMERICA = await axios.get(WorldLandingPageConfig.WORLD_AMERICA_API).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const WORLD_MIDDLE_EAST = await axios.get(WorldLandingPageConfig.WORLD_MIDDLE_EAST_API).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const WORLD_OTHER = await axios.get(WorldLandingPageConfig.WORLD_OTHER_API).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const JAGRAN_TV = await axios.get(WorldLandingPageConfig.JAGRAN_TV_API).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const JAGRAN_TV_RESP = JAGRAN_TV.item;
    const WORLD_JAGRAN_PRIME = await axios.get(JagranPrimeConfig.JAGRAN_PRIME_API + '/0/10').then((resp) => {return resp.data}).catch((err)=> {console.log("Error Found")});
    return { props: { WORLD_P1, WORLD_PAKISTAN, WORLD_CHINA, WORLD_AMERICA, WORLD_MIDDLE_EAST, WORLD_OTHER, JAGRAN_TV_RESP,WORLD_JAGRAN_SPECIAL, WORLD_JAGRAN_PRIME } }
}

export default WorldLandingPage