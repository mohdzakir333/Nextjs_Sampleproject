import ArticleListingComp from "../../component/ArticleListing/ArticleListingComp";
import CommonInnerLHS from "../../component/Common/CommonInnerLHS";
import CommonInnerRHS from "../../component/Common/CommonInnerRHS";
import Recommedarticle from '../../component/Common/Recommedarticle';
import JagranSpecialComp from '../../component/Common/JagranSpecialComp';
import Layout from "../../component/Layout/Layout";
import Link from 'next/link'
import { AppConfig, CategoryListingPageConfig, JagranPrimeConfig, StateCityListingPageConfig } from '../../component/Utils/JPlusConfig'
import axios from "axios";
import { useRouter } from "next/router";

function PrimeListing(props) {
    const { PRIME_ARTICLE_LISTING_DATA, PRIME_ARTICLE_META_DATA,CATEGORY_JAGRAN_SPECIAL } = props
    const router = useRouter();
    const currentUrl = AppConfig.DOMAIN_NAME + router.asPath.replace('/','');
    let tvcCat = ''; 
    let dataLayerJson = '';

    if(router.query.category === undefined && router.query.subcategory === undefined 
        && router.query.statename === undefined && router.query.cityname === undefined){
        tvcCat ='latest-news';
       
    }
    return (
        <>
            <Layout title={PRIME_ARTICLE_META_DATA.title} desc={PRIME_ARTICLE_META_DATA.desc} keywords={PRIME_ARTICLE_META_DATA.keywords} image={AppConfig.DEFAULT_IMAGE_NAME} url={currentUrl}>
            
            <script dangerouslySetInnerHTML={{
                __html : `var dataLayer = window.dataLayer || [];dataLayer.push({'event':'pageview','tvc_page_type':'Listing Page','tvc_listing_page_type':'Prime Article Listing','tvc_page_cat':'${tvcCat}'${dataLayerJson},'language':'hindi'});`
            }}></script>
                <div className="main-content container" id="main-content">
                    <div className="left-col">
                        <div className='stickySidebar'>
                        <Recommedarticle/>   
                        <CommonInnerLHS/> 
                        </div>
                    </div>
                    <div className="main-col">
                    <div className='stickySidebar'>
                        <ArticleListingComp articlelistingdata={PRIME_ARTICLE_LISTING_DATA} />
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

    let page;
    let rows;
    if (page == null) {
        page = 0;
        rows = 20;
    }
    let PRIME_ARTICLE_LISTING_DATA = '';
    let PRIME_ARTICLE_META_DATA = '';

    if (category == undefined && subcategory == undefined && statename == undefined && cityname == undefined) {
        let PRIME_NEWS_API = JagranPrimeConfig.JAGRAN_PRIME_API + '/' + page + '/' + rows;
        PRIME_ARTICLE_LISTING_DATA = await axios.get(PRIME_NEWS_API).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
        PRIME_ARTICLE_META_DATA = {
            "title": "Prime News Today: Breaking News in Hindi, Today News in Hindi - Jagran.com",
            "keywords": "Prime News, News Today, Breaking News, Breaking News in Hindi, Today News, Today News in Hindi, News Today in Hindi, Latest Breaking News",
            "desc": "State politics news: पढ़े अपने राज्य की राजनीति से जूडी खबरों के अपडेट, highlights, breaking politics news only at Dainik Jagran",
            "pageNameHi": "प्राइम खबरें"
        }
    }
    return { props: { PRIME_ARTICLE_LISTING_DATA, PRIME_ARTICLE_META_DATA ,CATEGORY_JAGRAN_SPECIAL} }
}

export default PrimeListing