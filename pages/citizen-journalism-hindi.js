import Sticky from 'react-stickynode'
import Cagtegoriesbased4news from '../component/Common/Categoriesbased4news'
import Categoriesbased8news from '../component/Common/Categoriesbased8news'
import EditorialP1Comp from '../component/Common/EditorialP1Comp'
import StateselectComp from '../component/Home/StateselectComp'

import JagranTvComp from '../component/Common/JagranTvComp'
//import PlayWidgetComp from '../component/Common/PlayWidgetComp'
//import PodcastComp from '../component/Common/PodcastComp'
import Recommedarticle from '../component/Common/Recommedarticle'
import Layout from '../component/Layout/Layout'

import { AppConfig, HomePageConfig } from '../component/Utils/JPlusConfig'
import axios from 'axios'
import Link from 'next/link'
/* 
Author: Mohammad Shaazad 
*/

function Home(props) {
    const { HOME_P1_RESP, HOME_POLITICS, HOME_TECHNOLOGY, HOME_LIFESTYLE, HOME_CRICKET, HOME_EDUCATION, HOME_COMMON_MEN_ISSUE, HOME_STATE_NEWS, JAGRAN_TV_RESP } = props

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
                        <Sticky enabled={true} top={100} bottomBoundary="#main-content">
                            <Recommedarticle />
                             
                        </Sticky>
                    </div>

                    <div className="main-col">
                        <Sticky enabled={true} top={100} bottomBoundary="#main-content">
                            <EditorialP1Comp p1component={HOME_P1_RESP} />


                            {/* <div className="main-story">
                                <div className="article">
                                    <h2><a href="article-detail-plus.html">बिहार में जमीन को लेकर आमने-सामने हुए नीतीश-लालू, मुख्यमंत्री की दो टूक</a></h2>
                                    <p>राजद ने पटना में कार्यालय के लिए अतिरिक्त जमीन की मांग की है। इसको लेकर नीतीश कुमार ने शुक्रवार को साफ कर दिया है कि राजद ने जिस स्थान पर भूमि की मांग की थी वो उन्हें दी गई है। अब क्या आसमान से जमीन खरीद कर लाएं?</p>
                                    <div className="timestemp text-uppercase">
                                        <span className="label"><span className="red">Politics</span> 17 Mins Ago <svg className="plus"><use href="#jagranPlus"></use></svg></span>
                                        <a href="javascript:void(0)" className="bookmark"><svg><use href="#bookmark"></use></svg></a>
                                    </div>
                                </div>
                                <div className="article">
                                    <div className="ads300"></div>
                                </div>
                                <div className="article">
                                    <h2><a href="article-detail.html">बिहार में जमीन को लेकर आमने-सामने हुए नीतीश-लालू, मुख्यमंत्री की दो टूक</a></h2>
                                    <p>राजद ने पटना में कार्यालय के लिए अतिरिक्त जमीन की मांग की है। इसको लेकर नीतीश कुमार ने शुक्रवार को साफ कर दिया है कि राजद ने जिस स्थान पर भूमि की मांग की थी वो उन्हें दी गई है। अब क्या आसमान से जमीन खरीद कर लाएं?</p>
                                    <div className="timestemp text-uppercase">
                                        <span className="label"><span className="red">Politics</span> 17 Mins Ago</span>
                                        <a href="javascript:void(0)" className="bookmark"><svg><use href="#bookmark"></use></svg></a>
                                    </div>
                                </div>
                                <div className="article">
                                    <h2><a href="article-detail.html">महंगाई भत्&zwj;ते का Arrear मांगेंगे केंद्रीय कर्मचारी, एक बैनर तले रखेंगे सरकार से डिमांड</a></h2>
                                    <p>सरकार ने Rajyasabha में बयान दिया था कि जनवरी 2020 से 30 जून 2021 तक की अवधि के लिए कोई बकाया पेमेंट नहीं किया जाएगा। इसके बाद केंद्रीय कर्मचारी आंदोलन के रास्&zwj;ते पर चलने पर आमादा हैं। उनकी डिमांड है कि एरियर मिलना ही चाहिए।</p>
                                    <div className="timestemp text-uppercase">
                                        <span className="label"><span className="red">Politics</span> 17 Mins Ago</span>
                                        <a href="javascript:void(0)" className="bookmark"><svg><use href="#bookmark"></use></svg></a>
                                    </div>
                                </div>
                            </div> */}


                            <div className="subscribe space-bottom">
                                <div className="banner">
                                    <div className="logo"><svg><use href="#jagranplus"></use></svg></div>
                                    <p>पर सब्सक्राइब करें और आकर्षक पुरस्कार जीतें <a href="subscription.html" className="btn btn-primary">Subscribe</a></p>
                                    <div className="close"><a href="javascript:void(0)" className="subscribe-close"><svg><use href="#close"></use></svg></a></div>
                                </div>
                            </div>


                            <div className="list-article">
                                <Categoriesbased8news news8component={HOME_POLITICS} title="पॉलिटिक्स" />
                            </div>
                        </Sticky>
                    </div>
                    <div className="right-col">
                        <Sticky enabled={true} top={100} bottomBoundary="#main-content">
                            <h2 className="d-mobile">आपके लिए ख़ास</h2>

                            <ul className="list">

                                {
                                    HOME_P1_RESP.map((componentdata, index) => {
                                        if (index > 3) {
                                            const bookmarkobj = { 'title': componentdata.headline, 'url': `${AppConfig.DOMAIN_NAME}${componentdata.link}`, 'image': `${AppConfig.IMAGE_DOMAIN_NAME}${componentdata.imgThumb1}`, 'projectid': componentdata.id, 'description': componentdata.headline, 'site_name': 'jagranplus' };
                                            return (
                                                <li className="article" key={index}>
                                                    <div className="summary full">
                                                        <p><Link href={`${AppConfig.DOMAIN_NAME}${componentdata.link}`}>{componentdata.headline}</Link></p>
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

                             
                             
                             
                        </Sticky>
                    </div>
                </div>

                <StateselectComp newsstatecomponent={HOME_STATE_NEWS} title="राज्य" />

                <div className="main-content container">
                    <div className="left-col">
                        <Cagtegoriesbased4news news4component={HOME_COMMON_MEN_ISSUE} title="आम मुद्दे" />
                    </div>
                    <div className="main-col list-article">
                        <Categoriesbased8news news8component={HOME_TECHNOLOGY} title="टेक ज्ञान" />
                    </div>
                    <div className="right-col">
                        <Cagtegoriesbased4news news4component={HOME_LIFESTYLE} title="लाइफस्टाइल" />
                    </div>
                </div>

                <div className="main-content container">
                    <div className="left-col">
                        <Cagtegoriesbased4news news4component={HOME_LIFESTYLE} title="जोक्स" />
                    </div>
                    <div className="main-col list-article">
                        <Categoriesbased8news news8component={HOME_CRICKET} title="क्रिकेट" />
                    </div>
                    <div className="right-col">
                        <Cagtegoriesbased4news news4component={HOME_EDUCATION} title="शिक्षा" />
                    </div>
                </div>


                <div className="main-content container">
                    <div className="left-col">
                        <Cagtegoriesbased4news news4component={HOME_LIFESTYLE} title="दुनिया" />
                    </div>
                    <div className="main-col list-article">
                        <Categoriesbased8news news8component={HOME_CRICKET} title="टेक न्यूज़" />
                    </div>
                    <div className="right-col">
                        <Cagtegoriesbased4news news4component={HOME_EDUCATION} title="ऑटो" />
                    </div>
                </div>


                <JagranTvComp tvcomponent={JAGRAN_TV_RESP} />
            </Layout>

        </>
    )
}
export const getServerSideProps = async (context) => {
    const HOME_P1 = await axios.get(HomePageConfig.HOME_P1_API).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const HOME_POLITICS = await axios.get(HomePageConfig.HOME_POLITICS_API).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const HOME_TECHNOLOGY = await axios.get(HomePageConfig.HOME_TECHNOLOGY_API).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const HOME_LIFESTYLE = await axios.get(HomePageConfig.HOME_LIFESTYLE_API).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const HOME_CRICKET = await axios.get(HomePageConfig.HOME_CRICKET_API).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const HOME_EDUCATION = await axios.get(HomePageConfig.HOME_EDUCATION_API).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const HOME_COMMON_MEN_ISSUE = await axios.get(HomePageConfig.HOME_COMMON_MEN_ISSUE_API).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const HOME_P1_RESP = HOME_P1.response.docs;
    const HOME_STATE_API = await axios.get(HomePageConfig.HOME_STATE_NEWS_API).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const HOME_STATE_NEWS = HOME_STATE_API.response.docs;
    const JAGRAN_TV = await axios.get(HomePageConfig.JAGRAN_TV_API).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const JAGRAN_TV_RESP = JAGRAN_TV.item;
    return { props: { HOME_P1_RESP, HOME_POLITICS, HOME_TECHNOLOGY, HOME_LIFESTYLE, HOME_CRICKET, HOME_EDUCATION, HOME_COMMON_MEN_ISSUE, HOME_STATE_NEWS, JAGRAN_TV_RESP }, }
}

export default Home
