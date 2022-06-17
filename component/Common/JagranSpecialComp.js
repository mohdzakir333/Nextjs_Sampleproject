import { AppConfig } from '../Utils/JPlusConfig'
import {ArticleURL,TimeDifference} from "../Utils/CommonUtils";

import Link from 'next/link'

/* 
Author: Mohammad Shaazad 
*/
function Recommedarticle(props) {
    return (
        <>

  <h2 className="PrimeNews">जागरण स्पेशल</h2>
 
           <div id="content_reco_1" className="LHS-content">
           <ul className="list">
            {props.listingData != undefined ?
            props.listingData.map((componentdata,index) => 
            {
            const bookmarkobj = {'title':componentdata.headline,'url':`${ArticleURL(componentdata)}`,'image':`${AppConfig.IMAGE_DOMAIN_NAME}${componentdata.imgName}`,'projectid':componentdata.id,'description':componentdata.headline,'site_name':'jagranplus'};
            return (
            <li className="article" key={index}>
            <figure>
            <Link href={`${ArticleURL(componentdata)}`}>    
            <a>
            <img src={`${AppConfig.IMAGE_DOMAIN_NAME}${componentdata.imgName}`} alt={`${AppConfig.IMAGE_DOMAIN_NAME}${componentdata.imgName}`}  />
            </a>
            </Link>
            </figure>
            <div className="summary">
                <p>
                <Link href={`${ArticleURL(componentdata)}`}><a>{componentdata.headline}</a></Link>
                </p>
            </div>
            <div className="timestemp text-uppercase">
                <span className="label"><span className="red">{componentdata.state==null?componentdata.category:componentdata.state}</span>{TimeDifference(componentdata.modDate)}</span>
                <Link href="javascript:void(0)"><a className="bookmark bookmarkaddContainer" id={`htmlDataBookmarkId${componentdata.id}`}>
                <svg onClick={() => pluslistingBookmark(bookmarkobj)}><use href="#bookmark"></use></svg></a>
                </Link>
            </div>
        </li>
    ) 
    } 
   )
   : ''}     
 </ul>    

           </div>

            </>
      )
}

export default Recommedarticle
