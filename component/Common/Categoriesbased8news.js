import { AppConfig } from "../Utils/JPlusConfig";
import {ArticleURL,TimeDifference} from "../Utils/CommonUtils";

import Link from 'next/link'

/* 
Author Mohammad Shaazad 
This component is written to display the 8 news data for category/subcategory 
and state/city on all the pages. 
*/

function Categoriesbased8news(props) {
    if (props.news8component == null) {
        return (
            <>
              <h2>Parameter news8component value is null</h2>
            </>
        ) 
    }else{
    return (
        <>
        <div className="list-article  space-bottom ">
          <h2>{props.title}</h2>
               <ul className="list">
                {
                props.news8component.map((componentdata,index) => 
                 {
                    const bookmarkobj = {'title':componentdata.headline,'url':`${ArticleURL(componentdata)}`,'image':`${AppConfig.IMAGE_DOMAIN_NAME}${componentdata.imgName}`,'projectid':componentdata.id,'description':componentdata.headline,'site_name':'jagranplus'};
                return (
                 <li className="article" key={index}>
                        <figure>
                        <Link href={`${ArticleURL(componentdata)}`}>   
                            <a>
                            <img src={`${AppConfig.IMAGE_DOMAIN_NAME}${componentdata.imgName}`} alt={`${AppConfig.IMAGE_DOMAIN_NAME}${componentdata.imgName}`} />
                            </a>
                        </Link>    
                        </figure>
                        <div className="summary">
                            <p><a href={`${ArticleURL(componentdata)}`}>{componentdata.headline}</a></p>
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
}
                </ul>
            </div>
         </>
      )
}
}
export default Categoriesbased8news


