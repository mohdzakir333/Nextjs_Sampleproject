import ArticleListingComp from "../../component/ArticleListing/ArticleListingComp";
import CommonInnerLHS from "../../component/Common/CommonInnerLHS";
import CommonInnerRHS from "../../component/Common/CommonInnerRHS";
import Recommedarticle from '../../component/Common/Recommedarticle';
import JagranSpecialComp from '../../component/Common/JagranSpecialComp';
import Link from 'next/link'
import Layout from "../../component/Layout/Layout";

import {AppConfig, ArticleSearchListingPageConfig, JagranPrimeConfig } from '../../component/Utils/JPlusConfig'
import axios from "axios";
/* 
Author: Mohammad Shaazad 
*/

function Listing(props) {
    const {ARTICLE_LISTING_DATA,ARTICLE_SEARCH_JAGRAN_SPECIAL, ARTICLELISTING_SPECIAL_JAGRAN_PRIME } = props

    return (
      <>
        <Layout title="Hindi News, India News Headlines & Live Updates, राष्ट्रीय समाचार  -  Dainik Jagran" keywords="" desc="" image={AppConfig.DEFAULT_IMAGE_NAME}>
      
                <div className="main-content container" id="main-content">
                    <div className="left-col">
                        <div className='stickySidebar'>
                          <Recommedarticle jagranPrime={ARTICLELISTING_SPECIAL_JAGRAN_PRIME}/>
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
                            <JagranSpecialComp listingData={ARTICLE_SEARCH_JAGRAN_SPECIAL}/>  
                        </div>
                    </div>
                </div>
        </Layout>
      </>
    )
    } 
export const getServerSideProps = async (context) => {
 const { query } = context;
 const {keyword} = query;
 const ARTICLE_SEARCH_JAGRAN_SPECIAL = await axios.get(ArticleSearchListingPageConfig.ARTICLE_SEARCH_JAGRAN_SPECIAL_API).then((resp) => {return resp.data}).catch((err)=> {console.log("Error Found")});
 const ARTICLELISTING_SPECIAL_JAGRAN_PRIME = await axios.get(JagranPrimeConfig.JAGRAN_PRIME_API + '/0/10').then((resp) => {return resp.data}).catch((err)=> {console.log("Error Found")});
 
 let page;
 let rows;
  if(page ==null){
      page =0;
      rows=20;
  }
    let JAGRAN_SEARCH_API = ArticleSearchListingPageConfig.JAGRAN_SEARCH_API+keyword+'/'+page+'/'+rows;
    const ARTICLE_LISTING_DATA = await axios.get(JAGRAN_SEARCH_API).then((resp) => {return resp.data}).catch((err)=> {console.log("Error Found")});
   
    return { props: {ARTICLE_LISTING_DATA, ARTICLE_SEARCH_JAGRAN_SPECIAL, ARTICLELISTING_SPECIAL_JAGRAN_PRIME} } 
  }
       
export default Listing