
import { AppConfig } from '../Utils/JPlusConfig'
import Link from 'next/link'
/* 
Author Mohammad Shaazad 
This component is written to display the data  from editioral driven json used on all landing pages. 
*/
function Editorialp1Comp(props) {

return (
 <> 
{
     /* This condition is used to display further remaining itmes in different style */ 
props.p1component.map(
    (componentdata,index) => 
{
    if(index == 0){
        const bookmarkobj = {'title':componentdata.headline,'url':`${AppConfig.DOMAIN_NAME}${componentdata.link}`,'image':`${AppConfig.IMAGE_DOMAIN_NAME}${componentdata.imgThumb1}`,'projectid':componentdata.id,'description':componentdata.headline,'site_name':'jagranplus'};
        return (
 
            <div className="hero-story article" key={index}>
 
                    <div className="summary">
                        <h1><Link href={`${AppConfig.DOMAIN_NAME}${componentdata.link}`}><a>{componentdata.headline}</a></Link></h1>
                        {/* <p>{componentdata.summary}</p> */}
                        <div className="timestemp text-uppercase">
                            <span className="label"><span className="red">{componentdata.category}</span> {componentdata.time}</span>

                        <Link href="javascript:void(0)"><a className="bookmark bookmarkaddContainer" id={`htmlDataBookmarkId${componentdata.id}`}>
                            <svg onClick={() => pluslistingBookmark(bookmarkobj)}><use href="#bookmark"></use></svg></a>
                        </Link>
                        </div>
                    </div>  
                    <figure><Link href={`${AppConfig.DOMAIN_NAME}${componentdata.link}`}><a><img src={`${AppConfig.IMAGE_DOMAIN_NAME}${componentdata.imgThumb1}`} alt="" /></a></Link></figure>
              
                
        </div>

     );
   }
}
  
)
}

 

<div className='main-story'> 
      {         
     
props.p1component.map(
    (componentdata,index) => 
{
    if (index > 0 && index < 13) { 
       
        const bookmarkobj = {'title':componentdata.headline,'url':`${AppConfig.DOMAIN_NAME}${componentdata.link}`,'image':`${AppConfig.IMAGE_DOMAIN_NAME}${componentdata.imgThumb1}`,'projectid':componentdata.id,'description':componentdata.headline,'site_name':'jagranplus'};
        return (
            
            <div className="article" key={index}>
                   
                    <div className="summary">
                    <div className="summaryTop">
                        <h2><Link href={`${AppConfig.DOMAIN_NAME}${componentdata.link}`}><a>{componentdata.headline}</a></Link></h2>
                                    <div className="timestemp text-uppercase">
                                        <span className="label">{componentdata.summary}<span className="red">{componentdata.category}</span> {componentdata.time}</span>
                                    <Link href="javascript:void(0)"><a className="bookmark bookmarkaddContainer" id={`htmlDataBookmarkId${componentdata.id}`}>
                                        <svg onClick={() => pluslistingBookmark(bookmarkobj)}><use href="#bookmark"></use></svg></a>
                                    </Link>
                                    </div>
                        </div>

                        <figure><Link href={`${AppConfig.DOMAIN_NAME}${componentdata.link}`}><a><img src={`${AppConfig.IMAGE_DOMAIN_NAME}${componentdata.imgThumb1}`} alt="" /></a></Link></figure>  
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

export default Editorialp1Comp
