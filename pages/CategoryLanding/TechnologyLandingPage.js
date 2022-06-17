import Cagtegoriesbased4news from '../../component/Common/Categoriesbased4news'
import Categoriesbased8news from '../../component/Common/Categoriesbased8news'
import { AppConfig } from '../../component/Utils/JPlusConfig'
import { ArticleURL, TimeDifference } from "../../component/Utils/CommonUtils";
import Categoriesp1Comp from '../../component/Common/Categoriesp1Comp'
import JagranTvComp from '../../component/Common/JagranTvComp'
import Recommedarticle from '../../component/Common/Recommedarticle';
import JagranSpecialComp from '../../component/Common/JagranSpecialComp';
import CommonInnerLHS from "../../component/Common/CommonInnerLHS";
import CommonInnerRHS from "../../component/Common/CommonInnerRHS";
import Layout from '../../component/Layout/Layout'
import { TechnologyLandingPageConfig, JagranPrimeConfig } from '../../component/Utils/JPlusConfig'
import axios from 'axios';
import Link from 'next/link'
import { useRouter } from "next/router";

/* 
Author: Mohammad Shaazad 
*/

function TechnologyLandingPage(props) {
    const { TECHNOLOGY_P1, TECHNOLOGY_TECHNEWS, TECHNOLOGY_LATEST_LAUNCH, TECHNOLOGY_REVIEW, TECHNOLOGY_META, TECHNOLOGY_TECHGUIDE,
        TECHNOLOGY_APPNEWS, TECHNOLOGY_SOCIAL_MEDIA, JAGRAN_TV_RESP,TECHNOLOGY_JAGRAN_SPECIAL, TECHNOLOGY_JAGRAN_PRIME } = props


        const { asPath ,query} = useRouter()
    const currentURL = AppConfig.DOMAIN_NAME + asPath.replace('/','');

    return (

        <>
            <Layout title={TECHNOLOGY_META.title} keywords={TECHNOLOGY_META.keywords} desc={TECHNOLOGY_META.desc} image={AppConfig.DEFAULT_IMAGE_NAME} url={currentURL}>


<script dangerouslySetInnerHTML={{
          __html:`var dataLayer = window.dataLayer || [];dataLayer.push({'event':'pageview','tvc_page_type':'Prime Landing Page','tvc_landing_page_type':'Category Landing','tvc_page_cat':'technology','language':'hindi'});`
      }}></script>
                
                <div className="main-content container" id="main-content">
                    <div className="left-col">
                        <div className='stickySidebar'>
                        <Recommedarticle jagranPrime={TECHNOLOGY_JAGRAN_PRIME}/>    
                        <Recommedarticle/>
                        <CommonInnerLHS/> 
                        </div>
                    </div>
                    <div className="main-col CategoryLanding">
                    <Categoriesp1Comp news8component={TECHNOLOGY_P1} title="टेक ज्ञान" />

                        <div className="list-article">
                            <Categoriesbased8news news8component={TECHNOLOGY_TECHNEWS} title="टेक न्यूज़" />
                        </div>
                        <div className="list-article">
                        <Cagtegoriesbased4news news4component={TECHNOLOGY_LATEST_LAUNCH} title="टेक लॉंच" />
                    </div>
                    <div className="list-article">
                        <Categoriesbased8news news8component={TECHNOLOGY_REVIEW} title="टेक रिव्यू" />
                    </div>
                    <div className="list-article">
                        <Cagtegoriesbased4news news4component={TECHNOLOGY_TECHGUIDE} title="टेक गाइड" />
                    </div>

                    <div className="list-article">
                        <Cagtegoriesbased4news news4component={TECHNOLOGY_APPNEWS} title="ऐप्स न्यूज़" />
                    </div>
                    <div className="list-article">
                        <Categoriesbased8news news8component={TECHNOLOGY_SOCIAL_MEDIA} title="सोशल मीडिया" />
                    </div>

                    </div>
                    <div className="right-col">
                    <div className='stickySidebar'>
                    {/* <ul className="list">

                                {
                                    TECHNOLOGY_P1.map((componentdata, index) => {
                                        if (index > 3) {
                                            const bookmarkobj = { 'title': componentdata.headline, 'url': `${ArticleURL(componentdata)}`, 'image': `${AppConfig.IMAGE_DOMAIN_NAME}${componentdata.imgName}`, 'projectid': componentdata.id, 'description': componentdata.headline, 'site_name': 'jagranplus' };

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
                            </ul> */}
                            <JagranSpecialComp listingData={TECHNOLOGY_JAGRAN_SPECIAL}/>
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
    const TECHNOLOGY_JAGRAN_SPECIAL = await axios.get(TechnologyLandingPageConfig.TECHNOLOGY_JAGRAN_SPECIAL_API).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const TECHNOLOGY_P1 = await axios.get(TechnologyLandingPageConfig.TECHNOLOGY_P1_API).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const TECHNOLOGY_TECHNEWS = await axios.get(TechnologyLandingPageConfig.TECHNOLOGY_TECHNEWS_API).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const TECHNOLOGY_LATEST_LAUNCH = await axios.get(TechnologyLandingPageConfig.TECHNOLOGY_LATEST_LAUNCH_API).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const TECHNOLOGY_REVIEW = await axios.get(TechnologyLandingPageConfig.TECHNOLOGY_REVIEW_API).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const TECHNOLOGY_META = await axios.get(TechnologyLandingPageConfig.TECHNOLOGY_META_API).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const TECHNOLOGY_TECHGUIDE = await axios.get(TechnologyLandingPageConfig.TECHNOLOGY_TECHGUIDE_API).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const TECHNOLOGY_APPNEWS = await axios.get(TechnologyLandingPageConfig.TECHNOLOGY_APPNEWS_API).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const TECHNOLOGY_SOCIAL_MEDIA = await axios.get(TechnologyLandingPageConfig.TECHNOLOGY_SOCIAL_MEDIA_API).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const JAGRAN_TV = await axios.get(TechnologyLandingPageConfig.JAGRAN_TV_API).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const JAGRAN_TV_RESP = JAGRAN_TV.item;
    const TECHNOLOGY_JAGRAN_PRIME = await axios.get(JagranPrimeConfig.JAGRAN_PRIME_API + '/0/10').then((resp) => {return resp.data}).catch((err)=> {console.log("Error Found")});
    return { props: { TECHNOLOGY_JAGRAN_SPECIAL,TECHNOLOGY_P1, TECHNOLOGY_TECHNEWS, TECHNOLOGY_LATEST_LAUNCH, TECHNOLOGY_REVIEW, TECHNOLOGY_META, TECHNOLOGY_TECHGUIDE, TECHNOLOGY_APPNEWS, TECHNOLOGY_SOCIAL_MEDIA, JAGRAN_TV_RESP, TECHNOLOGY_JAGRAN_PRIME } }
}

export default TechnologyLandingPage