import Cagtegoriesbased4news from '../Common/Categoriesbased4news';
import { AppConfig } from "../Utils/JPlusConfig";
import Breadcrumdetails from "../../component/Breadcrum/Breadcrumdetails";

/*
Author: Mohammad Shaazad
This component is written to display the data based on article id on article detail page.
*/
function ArticleDetailComp(props) {
    const { articledetaildata } = props;

    function handleOptionChange() {
        alert("आपकी प्रतिक्रिया दर्ज कर ली गई है। धन्यवाद!!");
    }

    return (
        <>
        


            <div className="article-main">
            <Breadcrumdetails data={articledetaildata}/>
                
                <div className="article-content">

                    <article>
                    <h1>{articledetaildata.headline}</h1>
                     <p className="short"></p>
                    <div className='stickySidebar'>
                   
                        <div className="autor">
                            <div className="info">
                                 <figure cl><img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" /></figure> 
                                {/* <span>Author <a href="">{articledetaildata.authorEng}</a></span> */}
                                <span>Author : {articledetaildata.authorEng}</span>
                                {/*<a href="" className="btn btn-outline">+ Follow</a>*/}
                            </div>
                            <span>Publish Date:{articledetaildata.pubDate}</span>
                        </div>
                        <figure className="main-img">
                            <img src={`${AppConfig.IMAGE_DOMAIN_NAME}${articledetaildata.imgName}`} alt="कप्तान कोहली के साथ टीम इंडिया के खिलाड़ी (एपी फोटो)" />
                            <figcaption>{articledetaildata.headline}</figcaption>
                        </figure>
                        <p>{articledetaildata.summary}</p>
                        {/* <div className="subscribe space-bottom">
                            <div className="banner">
                                <div className="logo"><svg><use href="#jagranplus"></use></svg></div>
                                <p>पर सब्सक्राइब करें और आकर्षक पुरस्कार जीतें <a href="subscription.html" className="btn btn-primary">Subscribe</a></p>
                                <div className="close"><a href="/" className="subscribe-close"><svg><use href="#close"></use></svg></a></div>
                            </div>
                        </div> */}
                        <div dangerouslySetInnerHTML={{ __html: articledetaildata.body}}></div>

                        <div className="like-article">
                            <h3>Did you like this article ?</h3>
                            <form id="smileys">
                                <p>
                                    <input type="radio" name="smiley" value="happy" className="happy" onClick={() => handleOptionChange()} />
                                    <label htmlFor="happy">Happy</label>
                                </p>
                                <p>
                                    <input type="radio" name="smiley" value="sad" className="sad" onClick={() => handleOptionChange()} />
                                    <label htmlFor="sad">Sad</label>
                                </p>
                                <p>
                                    <input type="radio" name="smiley" value="neutral" className="neutral" onClick={() => handleOptionChange()} />
                                    <label htmlFor="neutral">Dont know</label>
                                </p>
                            </form>
                        </div>
                        <div className="tagList">
                            <ul>

                                {
                                    articledetaildata.keywords.split(',').map((articledetailtag, index) => {
                                        return (<li key={index}># <a title="jagran tag" aria-label="cricket" href={`${AppConfig.searchUrlPrefix}${articledetailtag}`}>{articledetailtag}</a></li>
                                        )
                                    })
                                }

                            </ul>
                        </div>
                        <div id="article_container"> </div>

                        <div id="paywall"></div>
                        </div>
                    </article>
                 
                </div>
            </div>

        </>
    )
}

export default ArticleDetailComp
