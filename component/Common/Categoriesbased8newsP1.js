import { AppConfig } from '../Utils/JPlusConfig'

import Link from 'next/link'

function Categoriesbased8newsP1(props){
    return (
        <div className="list-article  space-bottom ">
          <h2>{props.title}</h2>
               <ul className="list">
                {props.news8component != undefined ? 
                props.news8component.map((componentdata,index) => 
                 {
                    const bookmarkobj = {'title':componentdata.headline,'url':`${AppConfig.DOMAIN_NAME}${componentdata.link}`,'image':`${AppConfig.IMAGE_DOMAIN_NAME}${componentdata.imgThumb1}`,'projectid':componentdata.id,'description':componentdata.headline,'site_name':'jagranplus'};
                return (
                 <li className="article" key={index}>
                        <figure>
                        <Link href={`${AppConfig.DOMAIN_NAME}${componentdata.link}`}>   
                            <a>
                            <img src={`${AppConfig.IMAGE_DOMAIN_NAME}${componentdata.imgThumb1}`} alt={`${AppConfig.IMAGE_DOMAIN_NAME}${componentdata.imgThumb1}`} />
                            </a>
                        </Link>    
                        </figure>
                        <div className="summary">
                            <p><a href={`${AppConfig.DOMAIN_NAME}${componentdata.link}`}>{componentdata.headline}</a></p>
                        </div>
                        <div className="timestemp text-uppercase">
                            <span className="label"><span className="red">{componentdata.state==null?componentdata.category:componentdata.state}</span>{componentdata.time}</span>
                            <Link href="javascript:void(0)"><a className="bookmark bookmarkaddContainer" id={`htmlDataBookmarkId${componentdata.id}`}>
                            <svg onClick={() => pluslistingBookmark(bookmarkobj)}><use href="#bookmark"></use></svg></a>
                            </Link>
                        </div>
                    </li>
                )  
            }
                
) : ''
}
                </ul>
            </div>
    )
}

export default Categoriesbased8newsP1;