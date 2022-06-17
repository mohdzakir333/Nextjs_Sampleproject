import Cagtegoriesbased4news from '../../component/Common/Categoriesbased4news'
import Categoriesbased8news from '../../component/Common/Categoriesbased8news'
import { AppConfig } from '../../component/Utils/JPlusConfig'
import { ArticleURL, TimeDifference, StateShortName } from "../../component/Utils/CommonUtils";
import EditorialP1Comp from '../../component/Common/EditorialP1Comp'
import JagranTvComp from '../../component/Common/JagranTvComp'
import CommonInnerLHS from "../../component/Common/CommonInnerLHS";
import CommonInnerRHS from "../../component/Common/CommonInnerRHS";
import Recommedarticle from '../../component/Common/Recommedarticle';
import JagranSpecialComp from '../../component/Common/JagranSpecialComp';
import Layout from '../../component/Layout/Layout'

import { LocalLandingPageConfig } from '../../component/Utils/JPlusConfig'
import Link from 'next/link'
import axios from 'axios';
import { useRouter } from "next/router";

/* 
Author: Mohammad Shaazad 
*/

function LocalLandingPage(props) {
    const { LOCAL_P1_RESP, LOCAL_POLITICS, LOCAL_SPECIAL, LOCAL_COMMAN_MAN_ISSUES, LOCAL_CRIME,
        LOCAL_OTHER_NEWS, LOCAL_STATE_LATEST_NEWS, JAGRAN_TV_RESP, LOCAL_CITY_META,LOCAL_CITY_JAGRAN_SPECIAL } = props

        const { asPath ,query} = useRouter()
        const currentURL = AppConfig.DOMAIN_NAME + asPath.replace('/','');

        console.log(LOCAL_POLITICS[0].stateHn)
        console.log(LOCAL_POLITICS[0].cityHn)

    return (

        <>
            <Layout title={LOCAL_CITY_META.title} keywords={LOCAL_CITY_META.keywords} desc={LOCAL_CITY_META.desc} image={AppConfig.DEFAULT_IMAGE_NAME} url={currentURL}>
                
<script dangerouslySetInnerHTML={{
          __html:`var dataLayer = window.dataLayer || [];dataLayer.push({'event':'pageview','tvc_page_type':'Prime Landing Page','tvc_landing_page_type':'City Landing','tvc_page_cat':${query.statename},'article_subcategory':${query.cityname},'language':'hindi'});`
      }}></script>
                
                <div className="main-content container" id="main-content">
                    <div className="left-col">
                        <div className='stickySidebar'>
                        <Recommedarticle/>
                        <CommonInnerLHS/> 
                        </div>
                    </div>
                    <div className="main-col ListingPage">
                    <EditorialP1Comp p1component={LOCAL_P1_RESP} title="मनोरंजन समाचार" />
                        <div className="list-article">
                            <Categoriesbased8news news8component={LOCAL_POLITICS} title="पॉलिटिक्स" />
                        </div>
                        <div className="list-article">
                        <Cagtegoriesbased4news news4component={LOCAL_SPECIAL} title="जागरण स्पेशल" />
                    </div>
                    <div className="list-article">
                        <Categoriesbased8news news8component={LOCAL_COMMAN_MAN_ISSUES} title="आम मुद्दे" />
                    </div>
                    <div className="list-article">
                        <Cagtegoriesbased4news news4component={LOCAL_CRIME} title="क्राइम" />
                    </div>
                    <div className="list-article">
                        <Cagtegoriesbased4news news4component={LOCAL_OTHER_NEWS} title="अन्य खबरें" />
                    </div>
                    <div className="list-article">
                        <Categoriesbased8news news8component={LOCAL_STATE_LATEST_NEWS} title="ताजा खबरें" />
                    </div>

                    </div>
                    <div className="right-col">
                    <div className='stickySidebar'>
                    <ul className="list">

{
    LOCAL_P1_RESP.map((componentdata, index) => {
        if (index > 3) {
            const bookmarkobj = { 'title': componentdata.headline, 'url': `${AppConfig.DOMAIN_NAME}${componentdata.link}`, 'image': `${AppConfig.IMAGE_DOMAIN_NAME}${componentdata.imgThumb1}`, 'projectid': componentdata.id, 'description': componentdata.headline, 'site_name': 'jagranplus' };
            return (
                <li className="article">
                    <div className="summary full">
                        <p><Link href={`${AppConfig.DOMAIN_NAME}${componentdata.link}`}>
                            <a>
                                {componentdata.headline}
                            </a>
                        </Link>
                        </p>
                    </div>
                    <div className="timestemp text-uppercase">
                        <span className="label"><span className="red">{componentdata.category}</span> {componentdata.time}</span>
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

<JagranSpecialComp listingData={LOCAL_CITY_JAGRAN_SPECIAL}/>
                            <CommonInnerRHS/>                                                      
                        
                        </div>
                    </div>
                </div>

 


  
                <JagranTvComp tvcomponent={JAGRAN_TV_RESP} />
            </Layout>

        </>
    )
}
export const getServerSideProps = async (context) => {
    const { query } = context;
    const { statename, cityname } = query;
    console.log("statename-----" + statename);
    console.log("city-----" + cityname);

    const LOCAL_P1 = await axios.get(LocalLandingPageConfig.LOCAL_P1_API + cityname + '.json').then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const LOCAL_CITY_JAGRAN_SPECIAL = await axios.get(LocalLandingPageConfig.LOCAL_CITY_JAGRAN_SPECIAL_API + cityname + '-politics/0/8').then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const LOCAL_POLITICS = await axios.get(LocalLandingPageConfig.LOCAL_CITY_GENRE_API + cityname + '-politics/0/8').then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const LOCAL_SPECIAL = await axios.get(LocalLandingPageConfig.LOCAL_CITY_GENRE_API + cityname + '-jagran-special/0/4').then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const LOCAL_COMMAN_MAN_ISSUES = await axios.get(LocalLandingPageConfig.LOCAL_CITY_GENRE_API + cityname + '-common-man-issues/0/8').then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const LOCAL_CRIME = await axios.get(LocalLandingPageConfig.LOCAL_CITY_GENRE_API + cityname + '-crime/0/4').then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const LOCAL_OTHER_NEWS = await axios.get(LocalLandingPageConfig.LOCAL_CITY_GENRE_API + cityname + '-other/0/4').then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const LOCAL_STATE_LATEST_NEWS = await axios.get(LocalLandingPageConfig.LOCAL_STATE_LATEST_NEWS_API + statename + '/0/8').then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const LOCAL_P1_RESP = LOCAL_P1.response.docs;
    const JAGRAN_TV = await axios.get(LocalLandingPageConfig.JAGRAN_TV_API).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const LOCAL_CITY_META = await axios.get(LocalLandingPageConfig.LOCAL_CITY_META_API + statename + '/' + cityname).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const JAGRAN_TV_RESP = JAGRAN_TV.item;

    return { props: { LOCAL_P1_RESP, LOCAL_POLITICS, LOCAL_SPECIAL, LOCAL_COMMAN_MAN_ISSUES, LOCAL_CRIME, LOCAL_OTHER_NEWS, LOCAL_STATE_LATEST_NEWS, JAGRAN_TV_RESP, LOCAL_CITY_META } }
}

export default LocalLandingPage