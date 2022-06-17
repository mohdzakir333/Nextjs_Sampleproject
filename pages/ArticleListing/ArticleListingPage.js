import ArticleListingComp from "../../component/ArticleListing/ArticleListingComp";
import CommonInnerLHS from "../../component/Common/CommonInnerLHS";
import CommonInnerRHS from "../../component/Common/CommonInnerRHS";
import Recommedarticle from '../../component/Common/Recommedarticle';
import JagranSpecialComp from '../../component/Common/JagranSpecialComp';
import Layout from "../../component/Layout/Layout";
import Link from 'next/link'
import { AppConfig, CategoryListingPageConfig, LatestNewsPageConfig, StateCityListingPageConfig, JagranPrimeConfig } from '../../component/Utils/JPlusConfig'
import axios from "axios";
import { useRouter } from "next/router";

function Listing(props) {
    const { ARTICLE_LISTING_DATA, ARTICLE_META_DATA,CATEGORY_JAGRAN_SPECIAL,ARTICLELISTING_JAGRAN_PRIME } = props
    const router = useRouter();
    const currentUrl = AppConfig.DOMAIN_NAME + router.asPath.replace('/','');
    //console.log(ARTICLE_LISTING_DATA);
    let tvcCat = ''; 
    let tvcSubcat = '';
    let dataLayerJson = '';
    if(router.query.statename !== undefined && router.query.cityname !== undefined){
        tvcCat = ARTICLE_LISTING_DATA[0].state;
        tvcSubcat = ARTICLE_LISTING_DATA[0].city;
        dataLayerJson = `,'article_subcategory':'${tvcSubcat}'`;
    }
    if(router.query.category !== undefined && router.query.subcategory !== undefined){
        tvcCat = ARTICLE_LISTING_DATA[0].category;
        tvcSubcat = ARTICLE_LISTING_DATA[0].subcategory;
        dataLayerJson = `,'article_subcategory':'${tvcSubcat}'`;
    }
    if(router.query.category === undefined && router.query.subcategory === undefined 
        && router.query.statename === undefined && router.query.cityname === undefined){
        tvcCat ='latest-news';
       
    }
    //console.log(router.query.category)
    return (
        <>
            <Layout title={ARTICLE_META_DATA.title} desc={ARTICLE_META_DATA.desc} keywords={ARTICLE_META_DATA.keywords} image={AppConfig.DEFAULT_IMAGE_NAME} url={currentUrl}>
            
            <script dangerouslySetInnerHTML={{
                __html : `var dataLayer = window.dataLayer || [];dataLayer.push({'event':'pageview','tvc_page_type':'Listing Page','tvc_listing_page_type':'Prime Article Listing','tvc_page_cat':'${tvcCat}'${dataLayerJson},'language':'hindi'});`
            }}></script>
                <div className="main-content container" id="main-content">
                    <div className="left-col">
                        <div className='stickySidebar'>
                        <Recommedarticle jagranPrime={ARTICLELISTING_JAGRAN_PRIME}/>
                        <CommonInnerLHS/> 
                        </div>
                    </div>
                    <div className="main-col">
                    <div className='stickySidebar'>
                        <ArticleListingComp articlelistingdata={ARTICLE_LISTING_DATA} />
                        </div>
                    </div>
                    <div className="right-col">
                    <div className='stickySidebar'>
                            <CommonInnerRHS/>                             
                            <JagranSpecialComp listingData={CATEGORY_JAGRAN_SPECIAL}/>    
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export const getServerSideProps = async (context) => {
    const { query } = context;
    const { category, subcategory, statename, cityname } = query;
    const CATEGORY_JAGRAN_SPECIAL = await axios.get(CategoryListingPageConfig.CATEGORY_JAGRAN_SPECIAL_API).then((resp) => {return resp.data}).catch((err)=> {console.log("Error Found")});
    const ARTICLELISTING_JAGRAN_PRIME = await axios.get(JagranPrimeConfig.JAGRAN_PRIME_API + '/0/10').then((resp) => {return resp.data}).catch((err)=> {console.log("Error Found")});
    let page;
    let rows;
    if (page == null) {
        page = 0;
        rows = 20;
    }
    let ARTICLE_LISTING_DATA = '';
    let ARTICLE_META_DATA = '';

    if (category == undefined && subcategory == undefined && statename == undefined && cityname == undefined) {
        let LATEST_NEWS_API = LatestNewsPageConfig.LATEST_NEWS_API + '/' + page + '/' + rows
        ARTICLE_LISTING_DATA = await axios.get(LATEST_NEWS_API).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
        ARTICLE_META_DATA = {
            "title": "Latest News Today: Breaking News in Hindi, Today News in Hindi - Jagran.com",
            "keywords": "Latest News, News Today, Breaking News, Breaking News in Hindi, Today News, Today News in Hindi, News Today in Hindi, Latest Breaking News",
            "desc": "State politics news: पढ़े अपने राज्य की राजनीति से जूडी खबरों के अपडेट, highlights, breaking politics news only at Dainik Jagran",
            "pageNameHi": "ताजा खबरें"
        }
    } if (category !== undefined && subcategory !== undefined) {
        let CATEGORY_SUBCATEGORY = CategoryListingPageConfig.CATEGORY_SUBCATEGORY_API + category + '/' + subcategory + '/' + page + '/' + rows;
        ARTICLE_LISTING_DATA = await axios.get(CATEGORY_SUBCATEGORY).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
        ARTICLE_META_DATA = await axios.get(CategoryListingPageConfig.CATEGORY_SUBCATEGORY_META_API + category + '/' + subcategory).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
        //ARTICLE_META_DATA = {...ARTICLE_META_DATA, pageNameHi : category}

    } if (statename !== undefined && cityname !== undefined) {
        let STATE_CITY = StateCityListingPageConfig.STATE_CITY_API + statename + '/' + cityname + '/' + page + '/' + rows;
        ARTICLE_LISTING_DATA = await axios.get(STATE_CITY).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
        ARTICLE_META_DATA = await axios.get(StateCityListingPageConfig.STATE_CITY_META_API + statename + '/' + cityname).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
        //console.log(StateCityListingPageConfig.STATE_CITY_META_API + statename + '/' + cityname)
        //ARTICLE_META_DATA =  {title : '', desc: '', keywords : '', pageNameHi : ''}
    }
    return { props: { ARTICLE_LISTING_DATA, ARTICLE_META_DATA ,CATEGORY_JAGRAN_SPECIAL, ARTICLELISTING_JAGRAN_PRIME } }
}

export default Listing