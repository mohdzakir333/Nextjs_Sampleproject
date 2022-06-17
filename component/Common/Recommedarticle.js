import { AppConfig } from '../Utils/JPlusConfig'
import {ArticleURL,TimeDifference} from "../Utils/CommonUtils";

import Link from 'next/link'

/* 
Author: Mohammad Shaazad 
*/
function Recommedarticle(props) {

    // console.log(props.jagranPrime);

    if (props.jagranPrime == null) {
        return (
            <>
              <h2>Parameter jagranPrime value is null</h2>
            </>
        ) 
    }else{

    return (
        <>

  <h2 className="PrimeNews">प्राइम खबरें <svg class="plus"><use href="#jagranPlus"></use></svg></h2>
 
           <div id="content_reco_1" className="LHS-content">
           <ul className="list">

           {
props.jagranPrime.map(
    (componentdata,index) => 
{
   
    if(index < 7){
        return (
     
           <li class="article">
                    <figure><Link href={`${ArticleURL(componentdata)}`}><a><img src={`${AppConfig.IMAGE_DOMAIN_NAME}${componentdata.imgName}`} alt="" /></a></Link></figure>
                    <div class="summary">
                        <p><Link href={`${ArticleURL(componentdata)}`}><a>{componentdata.headline}</a></Link></p>
                    </div>
                    <div class="timestemp text-uppercase">
                        <span class="label"><span class="red">{componentdata.state==null?componentdata.category:componentdata.state}</span> {TimeDifference(componentdata.modDate)} <svg class="plus"><use href="#jagranPlus"></use></svg></span>
                        <a href="javascript:void(0)" class="bookmark"><svg><use href="#bookmark"></use></svg></a>
                    </div>
            </li>

);
}
}

)
}


                {/* <li class="article">
                    <figure><a href="article-detail-plus.html"><img src="https://www.jagranimages.com/images/newimg/03092021/03_09_2021-cbi_21988982_m.jpg" alt=""/></a></figure>
                    <div class="summary">
                        <p><a href="article-detail-plus.html">सोनीपत के अलावा जेईई मेंस के अन्य परीक्षा केंद्रों में भी गड़बड़ी के संकेत, सात गिरफ्तार, तीन को सीबीआइ हिरासत</a></p>
                    </div>
                    <div class="timestemp text-uppercase">
                        <span class="label"><span class="red">Politics</span> 17 Mins Ago <svg class="plus"><use href="#jagranPlus"></use></svg></span>
                        <a href="javascript:void(0)" class="bookmark"><svg><use href="#bookmark"></use></svg></a>
                    </div>
                </li>
                <li class="article">
                    <figure><a href="article-detail-plus.html"><img src="https://www.jagranimages.com/images/newimg/03092021/03_09_2021-cbi_21988982_m.jpg" alt=""/></a></figure>
                    <div class="summary">
                        <p><a href="article-detail-plus.html">सोनीपत के अलावा जेईई मेंस के अन्य परीक्षा केंद्रों में भी गड़बड़ी के संकेत, सात गिरफ्तार, तीन को सीबीआइ हिरासत</a></p>
                    </div>
                    <div class="timestemp text-uppercase">
                        <span class="label"><span class="red">Politics</span> 17 Mins Ago <svg class="plus"><use href="#jagranPlus"></use></svg></span>
                        <a href="javascript:void(0)" class="bookmark"><svg><use href="#bookmark"></use></svg></a>
                    </div>
                </li>
                <li class="article">
                    <figure><a href="article-detail-plus.html"><img src="https://www.jagranimages.com/images/newimg/03092021/03_09_2021-cbi_21988982_m.jpg" alt=""/></a></figure>
                    <div class="summary">
                        <p><a href="article-detail-plus.html">सोनीपत के अलावा जेईई मेंस के अन्य परीक्षा केंद्रों में भी गड़बड़ी के संकेत, सात गिरफ्तार, तीन को सीबीआइ हिरासत</a></p>
                    </div>
                    <div class="timestemp text-uppercase">
                        <span class="label"><span class="red">Politics</span> 17 Mins Ago <svg class="plus"><use href="#jagranPlus"></use></svg></span>
                        <a href="javascript:void(0)" class="bookmark"><svg><use href="#bookmark"></use></svg></a>
                    </div>
                </li>
                <li class="article">
                    <figure><a href="article-detail-plus.html"><img src="https://www.jagranimages.com/images/newimg/03092021/03_09_2021-cbi_21988982_m.jpg" alt=""/></a></figure>
                    <div class="summary">
                        <p><a href="article-detail-plus.html">सोनीपत के अलावा जेईई मेंस के अन्य परीक्षा केंद्रों में भी गड़बड़ी के संकेत, सात गिरफ्तार, तीन को सीबीआइ हिरासत</a></p>
                    </div>
                    <div class="timestemp text-uppercase">
                        <span class="label"><span class="red">Politics</span> 17 Mins Ago <svg class="plus"><use href="#jagranPlus"></use></svg></span>
                        <a href="javascript:void(0)" class="bookmark"><svg><use href="#bookmark"></use></svg></a>
                    </div>
                </li>
                <li class="article">
                    <figure><a href="article-detail-plus.html"><img src="https://www.jagranimages.com/images/newimg/03092021/03_09_2021-cbi_21988982_m.jpg" alt=""/></a></figure>
                    <div class="summary">
                        <p><a href="article-detail-plus.html">सोनीपत के अलावा जेईई मेंस के अन्य परीक्षा केंद्रों में भी गड़बड़ी के संकेत, सात गिरफ्तार, तीन को सीबीआइ हिरासत</a></p>
                    </div>
                    <div class="timestemp text-uppercase">
                        <span class="label"><span class="red">Politics</span> 17 Mins Ago <svg class="plus"><use href="#jagranPlus"></use></svg></span>
                        <a href="javascript:void(0)" class="bookmark"><svg><use href="#bookmark"></use></svg></a>
                    </div>
                </li> */}
                  
 </ul>    

           </div>

            </>
      )
            }
}

export default Recommedarticle
