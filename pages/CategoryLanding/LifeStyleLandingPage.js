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
import { LifestyleLandingPageConfig, JagranPrimeConfig } from '../../component/Utils/JPlusConfig'
import axios from 'axios';
import { useRouter } from "next/router";

/* 
Author: Mohammad Shaazad 
*/

function LifestyleLandingPage(props) {
    const { LIFESTYLE_P1,LIFESTYLE_JAGRAN_SPECIAL, LIFESTYLE_HOROSCOPE, LIFESTYLE_HEALTH, LIFESTYLE_META, LIFESTYLE_WORK_FROM_HOME, LIFESTYLE_AJAB_GAJAB, LIFESTYLE_SPRITUAL, LIFESTYLE_TRAVAL, LIFESTYLE_FASHION_AND_BEAUTY, JAGRAN_TV_RESP, LIFESTYLE_JAGRAN_PRIME } = props


    const { asPath ,query} = useRouter()
    const currentURL = AppConfig.DOMAIN_NAME + asPath.replace('/','');

    return (

        <>
            <Layout title={LIFESTYLE_META.title} keywords={LIFESTYLE_META.keywords} desc={LIFESTYLE_META.desc} image={AppConfig.DEFAULT_IMAGE_NAME} url={currentURL}>
 

<script dangerouslySetInnerHTML={{
          __html:`var dataLayer = window.dataLayer || [];dataLayer.push({'event':'pageview','tvc_page_type':'Prime Landing Page','tvc_landing_page_type':'Category Landing','tvc_page_cat':'lifestyle','language':'hindi'});`
      }}></script>

<div className="main-content container" id="main-content">
                    <div className="left-col">
                        <div className='stickySidebar'>
                        <Recommedarticle jagranPrime={LIFESTYLE_JAGRAN_PRIME}/>
                            <Recommedarticle/>
                        <CommonInnerLHS/> 
                        </div>
                    </div>
                    <div className="main-col CategoryLanding">
                    <EditorialP1Comp p1component={LIFESTYLE_P1} title="लाइफस्टाइल समाचार" />
                        <div className="list-article">
                            <Categoriesbased8news news8component={LIFESTYLE_HOROSCOPE} title="आपके सितारे 2022" />
                        </div>
                        <div className="list-article">
                        <Cagtegoriesbased4news news4component={LIFESTYLE_HEALTH} title="सेहत" />
                    </div>
                    <div className="list-article">
                        <Categoriesbased8news news8component={LIFESTYLE_WORK_FROM_HOME} title="वर्क फ्रॉम होम" />
                    </div>
                    <div className="list-article">
                        <Cagtegoriesbased4news news4component={LIFESTYLE_SPRITUAL} title="अध्यात्म" />
                    </div>
                    <div className="list-article">
                        <Cagtegoriesbased4news news4component={LIFESTYLE_AJAB_GAJAB} title="अजब-गजब" />
                    </div>
                    <div className="list-article">
                        <Categoriesbased8news news8component={LIFESTYLE_TRAVAL} title="पर्यटन" />
                    </div>
                    <div className="list-article">
                        <Cagtegoriesbased4news news4component={LIFESTYLE_FASHION_AND_BEAUTY} title="सुंदरता" />
                    </div>

                    </div>
                    <div className="right-col">
                    <div className='stickySidebar'>
                    {/* <ul className="list">

                                {
                                    LIFESTYLE_P1.map((componentdata, index) => {
                                        if (index > 3) {
                                            const bookmarkobj = { 'title': componentdata.headline, 'url': `${AppConfig.DOMAIN_NAME}${componentdata.link}`, 'image': `${AppConfig.IMAGE_DOMAIN_NAME}${componentdata.imgThumb1}`, 'projectid': componentdata.id, 'description': componentdata.headline, 'site_name': 'jagranplus' };
                                            return (
                                                <li className="article">
                                                    <div className="summary full">
                                                        <p>
                                                            <Link href={`${AppConfig.DOMAIN_NAME}${componentdata.link}`}>
                                                                <a>{componentdata.headline}
                                                                </a>
                                                            </Link>
                                                        </p>
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
                            </ul> */}
                            <JagranSpecialComp listingData={LIFESTYLE_JAGRAN_SPECIAL}/>
                            
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
    const LIFESTYLE_P1_RESP = await axios.get(LifestyleLandingPageConfig.LIFESTYLE_P1_API).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const LIFESTYLE_JAGRAN_SPECIAL = await axios.get(LifestyleLandingPageConfig.LIFESTYLE_JAGRAN_SPECIAL_API).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const LIFESTYLE_HOROSCOPE = await axios.get(LifestyleLandingPageConfig.LIFESTYLE_HOROSCOPE_API).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const LIFESTYLE_HEALTH = await axios.get(LifestyleLandingPageConfig.LIFESTYLE_HEALTH_API).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const LIFESTYLE_META = await axios.get(LifestyleLandingPageConfig.LIFESTYLE_META_API).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const LIFESTYLE_AJAB_GAJAB = await axios.get(LifestyleLandingPageConfig.LIFESTYLE_AJAB_GAJAB_API).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const LIFESTYLE_WORK_FROM_HOME = await axios.get(LifestyleLandingPageConfig.LIFESTYLE_WORK_FROM_HOME_API).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const LIFESTYLE_SPRITUAL = await axios.get(LifestyleLandingPageConfig.LIFESTYLE_SPRITUAL_API).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const LIFESTYLE_TRAVAL = await axios.get(LifestyleLandingPageConfig.LIFESTYLE_TRAVAL_API).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const LIFESTYLE_FASHION_AND_BEAUTY = await axios.get(LifestyleLandingPageConfig.LIFESTYLE_FASHION_AND_BEAUTY_API).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const LIFESTYLE_P1 = LIFESTYLE_P1_RESP.response.docs;
    const LIFESTYLE_JAGRAN_PRIME = await axios.get(JagranPrimeConfig.JAGRAN_PRIME_API + '/0/10').then((resp) => {return resp.data}).catch((err)=> {console.log("Error Found")});
    const JAGRAN_TV = await axios.get(LifestyleLandingPageConfig.JAGRAN_TV_API).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const JAGRAN_TV_RESP = JAGRAN_TV.item;
    return { props: { LIFESTYLE_P1,LIFESTYLE_JAGRAN_SPECIAL, LIFESTYLE_HOROSCOPE, LIFESTYLE_HEALTH, LIFESTYLE_META, LIFESTYLE_WORK_FROM_HOME, LIFESTYLE_AJAB_GAJAB, LIFESTYLE_SPRITUAL, LIFESTYLE_TRAVAL, LIFESTYLE_FASHION_AND_BEAUTY, JAGRAN_TV_RESP,LIFESTYLE_JAGRAN_PRIME } }
}

export default LifestyleLandingPage
