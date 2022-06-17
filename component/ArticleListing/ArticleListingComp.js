import { AppConfig } from "../Utils/JPlusConfig";
import {ArticleURL,TimeDifference} from "../Utils/CommonUtils";
import Link from 'next/link'

/* 
Author: Mohammad Shaazad 
This component is written to display the data for category/subcategory 
and state/city on article listing page/latest news listing page. 
*/
function ListingdetailsComp(props) {
    const { articlelistingdata } = props
    
    return (
        <>
            <div className="main-story">
                     {
                        articlelistingdata.map((componentdata, index) => {
                            if (index < 20) {
                                const bookmarkobj = {'title':componentdata.headline,'url':`${ArticleURL(componentdata)}`,'image':`${AppConfig.IMAGE_DOMAIN_NAME}${componentdata.imgName}`,'projectid':componentdata.id,'description':componentdata.headline,'site_name':'jagranplus'};  
                                return (
                                    
                                    <div className="article" key={index}>
                                    
                                    <div className="summary">
                                        <div className="summaryTop">
                                            <h2><Link href={`${ArticleURL(componentdata)}`}><a>{componentdata.headline}</a></Link></h2>
                                            <p>{componentdata.summary}</p>  
                                            <div className="timestemp text-uppercase">
                                          <span className="label"><span className="red">{componentdata.state==null?componentdata.category:componentdata.state}</span>{TimeDifference(componentdata.modDate)}</span>
                                          <Link href="javascript:void(0)"><a className="bookmark bookmarkaddContainer" id={`htmlDataBookmarkId${componentdata.id}`}>
                                          <svg onClick={() => pluslistingBookmark(bookmarkobj)}><use href="#bookmark"></use></svg></a>
                                          </Link>
                                             </div>
                                            </div>
                                           
                                         
                                            <figure>
                                            <Link href="javascript:void(0)"> 
                                            <a><img src={`${AppConfig.IMAGE_DOMAIN_NAME}${componentdata.imgName}`} alt={`${AppConfig.IMAGE_DOMAIN_NAME}${componentdata.imgName}`} /></a>
                                            </Link></figure>
                                        </div>
                                    
                                        
                                    </div>
                                );
                            }
                        }
                      )
                    }
            </div>
        </>
    )
}

export default ListingdetailsComp