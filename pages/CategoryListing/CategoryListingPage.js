import ArticleListingComp from "../../component/ArticleListing/ArticleListingComp";
import Recommedarticle from '../../component/Common/Recommedarticle';
import Layout from "../../component/Layout/Layout";
import Link from 'next/link'
import { AppConfig, CategoryListingPageConfig, LatestNewsPageConfig, StateCityListingPageConfig } from '../../component/Utils/JPlusConfig'
import axios from "axios";
import { useRouter } from "next/router";

function Listing(props) {
    const { ARTICLE_LISTING_DATA, CATEGORY_META_DATA,CATEGORY_JAGRAN_SPECIAL } = props
     const router = useRouter();
     const currentUrl = AppConfig.DOMAIN_NAME + router.asPath.replace('/','');
   
    // //console.log(ARTICLE_LISTING_DATA);
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
    // if(router.query.category !== undefined && router.query.subcategory !== undefined){
    //     breadJson = `,{
	// 		"@type": "ListItem",
	// 		"position": 2,
	// 		"item": {
	// 		"@id": "${currentUrl}",
	// 		"name": "${ARTICLE_LISTING_DATA[0].webSubCategoryHn}"
	// 		}
	// 		}`;
    //     tvcCat = ARTICLE_LISTING_DATA[0].category;
    //     tvcSubcat = ARTICLE_LISTING_DATA[0].subcategory;
    //     dataLayerJson = `,'article_subcategory':'${tvcSubcat}'`;
    // }
    // if(router.query.category === undefined && router.query.subcategory === undefined 
    //     && router.query.statename === undefined && router.query.cityname === undefined){
    //     breadJson = `,{
	// 		"@type": "ListItem",
	// 		"position": 2,
	// 		"item": {
	// 		"@id": "${currentUrl}",
	// 		"name": "${ARTICLE_META_DATA.pageNameHi}"
	// 		}
	// 		}`;
    //     tvcCat ='latest-news';
       
    // }
    //console.log(router.query.category)
    return (
        <>
            <Layout title={CATEGORY_META_DATA.title} desc={CATEGORY_META_DATA.desc} keywords={CATEGORY_META_DATA.keywords} image={AppConfig.DEFAULT_IMAGE_NAME} url={currentUrl}>
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
                   <div className="main-content container" id="main-content">
                    <div className="left-col">
                        <div className='stickySidebar'>
                            
                        <Recommedarticle/>
                        <CommonInnerLHS/> 
                        </div>
                    </div>
                    <div className="main-col ListingPage">
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
    const { category, subcategory } = query;
    const CATEGORY_JAGRAN_SPECIAL = await axios.get(CategoryListingPageConfig.CATEGORY_JAGRAN_SPECIAL_API).then((resp) => {return resp.data}).catch((err)=> {console.log("Error Found")});

    let page;
    let rows;
    if (page == null) {
        page = 0;
        rows = 20;
    }
    let ARTICLE_LISTING_DATA = '';
    let CATEGORY_META_DATA = '';

     if (category !== undefined) {
        let CATEGORY_SUBCATEGORY = CategoryListingPageConfig.CATEGORY_CATEGORY_API + category + '/' + 3 + '/' + page + '/' + rows;
        console.log("----------------- " + CATEGORY_SUBCATEGORY + "-----------------");
        ARTICLE_LISTING_DATA = await axios.get(CATEGORY_SUBCATEGORY).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
        CATEGORY_META_DATA = await axios.get(CategoryListingPageConfig.CATEGORY_CATEGORY_META_API + category).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
        //ARTICLE_META_DATA = {...ARTICLE_META_DATA, pageNameHi : category}

    } 
    return { props: { ARTICLE_LISTING_DATA, CATEGORY_META_DATA,CATEGORY_JAGRAN_SPECIAL } }
}

export default Listing