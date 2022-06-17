import ArticleListingComp from "../../component/ArticleListing/ArticleListingComp";
import Layout from "../../component/Layout/Layout";
import Recommedarticle from '../../component/Common/Recommedarticle';
import JagranSpecialComp from '../../component/Common/JagranSpecialComp'
import Link from 'next/link'
import { AppConfig,  StateCityListingPageConfig } from '../../component/Utils/JPlusConfig'
import axios from "axios";
import { useRouter } from "next/router";

function Listing(props) {
    const { ARTICLE_LISTING_DATA, ARTICLE_META_DATA,STATE_CITY_JAGRAN_SPECIAL } = props
    const router = useRouter();
    const currentUrl = AppConfig.DOMAIN_NAME + router.asPath.replace('/','');
   
    // let breadJson = '';
    // let tvcCat = ''; 
    // let tvcSubcat = '';
    // let dataLayerJson = '';
    // if(router.query.statename !== undefined && router.query.cityname !== undefined){
    //     breadJson = `,{
	// 		"@type": "ListItem",
	// 		"position": 2,
	// 		"item": {
	// 		"@id": "${AppConfig.DOMAIN_NAME + "state/"+router.query.statename}",
	// 		"name": "${ARTICLE_LISTING_DATA[0].stateHn}"
	// 		}
	// 		},{"@type": "ListItem",
    //     "position": 3,
    //     "item": {
    //     "@id": "${currentUrl}",
    //     "name":"${ARTICLE_LISTING_DATA[0].cityHn}"
    //     }}`;
    //     tvcCat = ARTICLE_LISTING_DATA[0].state;
    //     tvcSubcat = ARTICLE_LISTING_DATA[0].city;
    //     dataLayerJson = `,'article_subcategory':'${tvcSubcat}'`;
    // }
    
    //console.log(router.query.category)
    return (
        <>
            <Layout title={ARTICLE_META_DATA.title} desc={ARTICLE_META_DATA.desc} keywords={ARTICLE_META_DATA.keywords} image={AppConfig.DEFAULT_IMAGE_NAME} url={currentUrl}>
            {/* <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:
			`{
			"@context": "https://schema.org",
			"@type": "BreadcrumbList",
			"itemListElement": [{
			"@type": "ListItem",
			"position": 1,
			"item": {
			"@id": "${AppConfig.DOMAIN_NAME}",
			"name": "हिंदी न्यूज़"
			}
			} ${breadJson}
			 ]
			}`
            }}></script> */}
            {/* <script dangerouslySetInnerHTML={{
                __html : `var dataLayer = window.dataLayer || [];dataLayer.push({'event':'pageview','tvc_page_type':'Listing Page','tvc_listing_page_type':'Prime Article Listing','tvc_page_cat':'${tvcCat}'${dataLayerJson},'language':'hindi'});`
            }}></script> */}
                   <div className="main-content container StateListing" id="main-content">
                    <div className="left-col">
                        <div className='stickySidebar'>StateListingPage.js
                        <Recommedarticle/>
                        <CommonInnerLHS/> 
                        </div>
                    </div>
                    <div className="main-col main-story ">
                    <div className='stickySidebar'>
                        <ArticleListingComp articlelistingdata={ARTICLE_LISTING_DATA} />
                        </div>
                    </div>
                    <div className="right-col">
                    <div className='stickySidebar'>
                            <CommonInnerRHS/>    
                            <JagranSpecialComp listingData={STATE_CITY_JAGRAN_SPECIAL}/>                         
                            
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
    const STATE_CITY_JAGRAN_SPECIAL = await axios.get(StateCityListingPageConfig.STATE_CITY_JAGRAN_SPECIAL_API).then((resp) => {return resp.data}).catch((err)=> {console.log("Error Found")});

    let page;
    let rows;
    if (page == null) {
        page = 0;
        rows = 20;
    }
    let ARTICLE_LISTING_DATA = '';
    let ARTICLE_META_DATA = '';

    if (statename !== undefined) {
        let STATE_API = StateCityListingPageConfig.STATE_API + statename + '/' + page + '/' + rows;
        ARTICLE_LISTING_DATA = await axios.get(STATE_API).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
        ARTICLE_META_DATA = await axios.get(StateCityListingPageConfig.STATE_META_API + statename).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
        //console.log(StateCityListingPageConfig.STATE_CITY_META_API + statename + '/' + cityname)
        //ARTICLE_META_DATA =  {title : '', desc: '', keywords : '', pageNameHi : ''}
    }
    return { props: { ARTICLE_LISTING_DATA, ARTICLE_META_DATA,STATE_CITY_JAGRAN_SPECIAL } }
}

export default Listing