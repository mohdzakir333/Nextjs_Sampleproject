import React from 'react'
import { AppConfig,HomePageConfig } from "../Utils/JPlusConfig";
import {ArticleURL,TimeDifference} from "../Utils/CommonUtils";

/* 
Author Abhay 
This function is written for state/city component. 
*/
export default function Child(props) {
       
    return (
        <ul className="city-list" id="citylist">
            {props.data !== undefined && props.data.length > 0 ?
            props.data.map((componentdata,index) =>
                
  /*  This condition is used to called the default json when page will be loaded 
      and the else part is used to fetch the data from db based on user selection */
                {
                    if(index <7){
                    if(componentdata.imgName !=undefined){
                    const obj = {'title':componentdata.headline,'url':`${ArticleURL(componentdata)}`,'image':`${AppConfig.IMAGE_DOMAIN_NAME}${componentdata.imgName}`,'projectid':componentdata.id,'description':componentdata.headline,'site_name':'jagranplus'};
                    return (
                    
                    <li className="article" key={index}>
                        <figure><a href=""><img src={`${AppConfig.IMAGE_DOMAIN_NAME}${componentdata.imgName}`} /></a></figure>
                        <div className="summary">
                            <p><a href={`${ArticleURL(componentdata)}`}>{componentdata.headline}</a></p>
                        </div>
                        <div className="timestemp text-uppercase">
                            <span className="label"><span className="red">{componentdata.city}</span>{TimeDifference(componentdata.modDate)}</span>
                            <a href="javascript:void(0)" class="bookmark bookmarkaddContainer" id={`htmlDataBookmarkId${componentdata.id}`}>
                            <svg onClick={() => pluslistingBookmark(obj)}><use href="#bookmark"></use>                      
                            </svg></a>
                        </div>
                    </li>
                    )
                    
                }else{
                    var obj = {'title':componentdata.headline,'url':`${componentdata.article_url}`,'image':`http://${componentdata.imgUrl}`,'projectid':componentdata.id,'description':componentdata.headline,'site_name':'jagranplus'};
                    return (
                    
                    <li className="article" key={index}>
                        <figure><a href=""><img src={`http://${componentdata.imgUrl}`} /></a></figure>
                        <div className="summary">
                            <p><a href={`${componentdata.article_url}`}>{componentdata.headline}</a></p>
                        </div>
                        <div className="timestemp text-uppercase">
                            <span className="label"><span className="red">{componentdata.state_en}</span>{componentdata.dateTime}</span>
                            
                            <a href="javascript:void(0)" class="bookmark bookmarkaddContainer" id={`htmlDataBookmarkId${componentdata.id}`}>
                            <svg onClick={() => pluslistingBookmark(obj)}><use href="#bookmark"></use>                      
                            </svg></a>
                        </div>
                    </li>
                    )
                }
            }
            }
            
            )
        : <li className="article" key={1}>Loading...</li>}

        </ul>
    )
}
