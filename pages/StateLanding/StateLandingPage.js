import Cagtegoriesbased4news from '../../component/Common/Categoriesbased4news'
import Categoriesbased8news from '../../component/Common/Categoriesbased8news'
import { AppConfig } from '../../component/Utils/JPlusConfig'
import { ArticleURL, TimeDifference, StateShortName } from "../../component/Utils/CommonUtils";
import Recommedarticle from '../../component/Common/Recommedarticle'
import EditorialP1Comp from '../../component/Common/EditorialP1Comp'
import JagranSpecialComp from '../../component/Common/JagranSpecialComp'
import JagranTvComp from '../../component/Common/JagranTvComp'
import CommonInnerLHS from "../../component/Common/CommonInnerLHS";
import CommonInnerRHS from "../../component/Common/CommonInnerRHS";
import Layout from '../../component/Layout/Layout'
import axios from 'axios'
import Link from 'next/link'

import { StateLandingPageConfig } from '../../component/Utils/JPlusConfig'
import { StateCityListingPageConfig, JagranPrimeConfig } from '../../component/Utils/JPlusConfig'
import { useRouter } from "next/router";

/* 
Author: Mohammad Shaazad 
*/

function StateLandingPage(props) {
    const { STATE_P1_RESP, STATE_POLITICS, STATE_SPECIAL, STATE_COMMAN_MAN_ISSUES, STATE_CRIME, STATE_OTHER_NEWS,
        STATE_LATEST_NEWS, JAGRAN_TV_RESP, stateNameHN, STATE_META_API,STATE_JAGRAN_SPECIAL, STATE_JAGRAN_PRIME } = props

        const { asPath ,query} = useRouter()
        const currentURL = AppConfig.DOMAIN_NAME + asPath.replace('/','');

        
    
    return (

        <>
            <Layout title={STATE_META_API.title} keywords={STATE_META_API.keywords} desc={STATE_META_API.desc} image={AppConfig.DEFAULT_IMAGE_NAME} url={currentURL}>


<script dangerouslySetInnerHTML={{
          __html:`var dataLayer = window.dataLayer || [];dataLayer.push({'event':'pageview','tvc_page_type':'Prime Landing Page','tvc_landing_page_type':'State Landing','tvc_page_cat':${query.statename},'language':'hindi'});`
      }}></script>
                
                {/* <div className="MainTitle">{`${stateNameHN} की ताजा खबरें`}</div> */}

                <div className="main-content container" id="main-content">
                    <div className="left-col">
                        <div className='stickySidebar'>
                        <Recommedarticle jagranPrime={STATE_JAGRAN_PRIME}/>
                        {/* <CommonInnerLHS/>  
                        <Recommedarticle listingData={STATE_JAGRAN_SPECIAL}/>*/}
                        </div>
                    </div>
                    <div className="main-col">
                    <div className='stickySidebar'>
                    <EditorialP1Comp p1component={STATE_P1_RESP} title="ख़ास आपके लिए" />
                        <div className="list-article">
                            <Categoriesbased8news news8component={STATE_POLITICS} title="पॉलिटिक्स" />
                        </div>

                        <div className="list-article">
                        <Cagtegoriesbased4news news4component={STATE_SPECIAL} title="जागरण स्पेशल" />
                      </div>

                    <div className="list-article">
                        <Categoriesbased8news news8component={STATE_COMMAN_MAN_ISSUES} title="आम मुद्दे" />
                    </div>
                    <div className="list-article">
                        <Cagtegoriesbased4news news4component={STATE_CRIME} title="क्राइम" />
                    </div>

                    {/* <div className="list-article">
                        <Cagtegoriesbased4news news4component={STATE_OTHER_NEWS} title="पढ़ें कुछ अन्य जरूरी खबरें" />
                    </div> */}
                  

                        </div>
                    </div>
                    <div className="right-col">
                    <div className='stickySidebar'> <CommonInnerRHS/> 
                    <JagranSpecialComp listingData={STATE_JAGRAN_SPECIAL}/> 
                    <Cagtegoriesbased4news news4component={STATE_LATEST_NEWS} title={`${stateNameHN} की ताजा खबरें`} /> 
                    {/* <ul className="list">

{
    STATE_P1_RESP.map((componentdata, index) => {
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
</ul> */}



                                                      
                        
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
    const { statename } = query;
    console.log("statename-----" + statename);
    const stateNameHN = 'बिहार';
    const STATE_P1 = await axios.get(StateLandingPageConfig.STATE_P1_API + statename + '.json').then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const STATE_POLITICS = await axios.get(StateLandingPageConfig.STATE_GENRE_API + StateShortName(statename) + '-politics/0/8').then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const STATE_SPECIAL = await axios.get(StateLandingPageConfig.STATE_GENRE_API + statename + '-top/0/4').then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const STATE_COMMAN_MAN_ISSUES = await axios.get(StateLandingPageConfig.STATE_GENRE_API + statename + '-commonmanissues/0/8').then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const STATE_CRIME = await axios.get(StateLandingPageConfig.STATE_GENRE_API + statename + '-crime/0/4').then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const STATE_OTHER_NEWS = await axios.get(StateLandingPageConfig.STATE_GENRE_API + statename + '-other/0/4').then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const STATE_LATEST_NEWS = await axios.get(StateLandingPageConfig.STATE_LATEST_NEWS_API + statename + '/0/8').then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const STATE_P1_RESP = STATE_P1.response.docs;
    const JAGRAN_TV = await axios.get(StateLandingPageConfig.JAGRAN_TV_API).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const JAGRAN_TV_RESP = JAGRAN_TV.item;
    const STATE_JAGRAN_SPECIAL = await axios.get(StateLandingPageConfig.STATE_JAGRAN_SPECIAL_API).then((resp) => {return resp.data}).catch((err)=> {console.log("Error Found")});
    const STATE_META_API = await axios.get(StateCityListingPageConfig.STATE_META_API +statename).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const STATE_JAGRAN_PRIME = await axios.get(JagranPrimeConfig.JAGRAN_PRIME_API + '/0/10').then((resp) => {return resp.data}).catch((err)=> {console.log("Error Found")});
    return { props: { STATE_JAGRAN_SPECIAL,STATE_P1_RESP, STATE_POLITICS, STATE_SPECIAL, STATE_COMMAN_MAN_ISSUES, STATE_CRIME, STATE_OTHER_NEWS, STATE_LATEST_NEWS, stateNameHN, JAGRAN_TV_RESP, STATE_META_API, STATE_JAGRAN_PRIME } }
}

export default StateLandingPage