import LatestVideoComp from "../../component/ArticleDetail/LatestVideoComp";
import ArticleDetailComp from "../../component/ArticleDetail/ArticleDetailComp";
import Layout from "../../component/Layout/Layout";
import axios from 'axios';
import { useRouter } from "next/router";

import {AppConfig,ArticleDetailPageConfig } from '../../component/Utils/JPlusConfig';
import {DateIsoFormat, TimeDifference, CalcWordCount } from "../../component/Utils/CommonUtils";

/* 
Author: Mohammad Shaazad 
*/

function Articledetails(props) {
  const { ARTICLE_DETAIL_DATA } = props
  const router = useRouter();
  const currentUrl = AppConfig.DOMAIN_NAME + router.asPath.replace('/','');
  const isoPubDate = DateIsoFormat(ARTICLE_DETAIL_DATA.pubDate);
  const isoModDate = DateIsoFormat(ARTICLE_DETAIL_DATA.modDate);
  let brandedContentJson = '';
  let authorIDJson = '';
  let campainJson = '';
  let videoEmbedJson = '';
  let embedTypeJson = '';
  if(ARTICLE_DETAIL_DATA.brandedContent !== undefined){
    brandedContentJson = `,'cre':'${ARTICLE_DETAIL_DATA.brandedContent}'`;    
  }
  if(ARTICLE_DETAIL_DATA.authorId !== undefined){
    authorIDJson = `,'author_ID':'${ARTICLE_DETAIL_DATA.authorId}'`;
  }
  if(ARTICLE_DETAIL_DATA.channelName !== undefined){    
    embedTypeJson = `,'Embed_type':'${ARTICLE_DETAIL_DATA.channelName}'`;
  }
  if(ARTICLE_DETAIL_DATA.campainName !== undefined){
    campainJson = `,'campaign':'${ARTICLE_DETAIL_DATA.campainName}'`;    
  }else{
    campainJson = `,'campaign':'none'`;
  }
  if(ARTICLE_DETAIL_DATA.video !== undefined){
    videoEmbedJson = `,'tvc_video_embed':'${ARTICLE_DETAIL_DATA.video}'`;
  }
  return (
    <>
      <Layout title={ARTICLE_DETAIL_DATA.metaTitle} keywords={ARTICLE_DETAIL_DATA.keywords} desc={ARTICLE_DETAIL_DATA.summary} image={`${AppConfig.IMAGE_DOMAIN_NAME}${ARTICLE_DETAIL_DATA.imgName}`} url={currentUrl}>


<script dangerouslySetInnerHTML={{__html : `var dataLayer = window.dataLayer || [];dataLayer.push({'event':'pageview','tvc_page_type':'Prime Detail Page','article_subcategory':'${ARTICLE_DETAIL_DATA.subcategory}','tvc_publish_date':'${isoPubDate}','tvc_update_date':'${isoModDate}','tvc_artical_tags':'${ARTICLE_DETAIL_DATA.keywords}','tvc_word_count':'${CalcWordCount(ARTICLE_DETAIL_DATA.body)}','tvc_page_cat':'${ARTICLE_DETAIL_DATA.category}','link_present_home page':'true','tvc_author':'${ARTICLE_DETAIL_DATA.authorEng}'${embedTypeJson}${campainJson},'article_age':'${TimeDifference(ARTICLE_DETAIL_DATA.pubDate)}','language':'hindi','genre':'science-tech'${authorIDJson},'tvc_detail_page':'Prime Article Detail','storyID':'${router.query.id}'${brandedContentJson}${videoEmbedJson},'online_offline':'${(ARTICLE_DETAIL_DATA.authorEng === "Jagran" ? "Offline" : "Online")}'});`}}></script>

        <div className="container article-detail" id="articledetails">
          <div className="col-left-side">
          <div className='stickySidebar'>
          
              {/* <LatestVideoComp /> */}
            </div>


          </div>
  
          <ArticleDetailComp articledetaildata={ARTICLE_DETAIL_DATA} />
        </div>
      </Layout>
    </>
  )
}

export const getServerSideProps = async (context) => {
  const { req, query, res, asPath, pathname } = context;
  const { category, subcategory, title, id } = query;

  if (req) {
    let host = req.headers.host;
    console.log(asPath)}
  let ARTICLE_DETAIL_API = ArticleDetailPageConfig.ARTICLE_DETAIL_API + '/' + id
  const ARTICLE_DETAIL_DATA = await axios.get(ARTICLE_DETAIL_API).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
  return { props: { ARTICLE_DETAIL_DATA } }
}

export default Articledetails