//import Sticky from 'react-stickynode'
import Cagtegoriesbased4news from '../../component/Common/Categoriesbased4news'
import Categoriesbased8news from '../../component/Common/Categoriesbased8news'
import { AppConfig } from '../../component/Utils/JPlusConfig'
import { ArticleURL, TimeDifference } from "../../component/Utils/CommonUtils";
import Categoriesp1Comp from '../../component/Common/Categoriesp1Comp'
import JagranTvComp from '../../component/Common/JagranTvComp'
import Layout from '../../component/Layout/Layout'
import CommonInnerLHS from "../../component/Common/CommonInnerLHS";
import CommonInnerRHS from "../../component/Common/CommonInnerRHS";
import Recommedarticle from '../../component/Common/Recommedarticle';
import JagranSpecialComp from '../../component/Common/JagranSpecialComp';
import { BusinessLandingPageConfig, JagranPrimeConfig } from '../../component/Utils/JPlusConfig'
import axios from 'axios';
import Link from 'next/link'
import { useRouter } from "next/router";

/* 
Author: Mohammad Shaazad 
*/

function BusinessLandingPage(props) {
    const { BUSINESS_P1,BUSINESS_JAGRAN_SPECIAL, BUSINESS_TOP15, BUSINESS_SAVING, BUSINESS_INSURANCE, BUSINESS_BANK_LOAN, BUSINESS_EXPERT_COLUMN, JAGRAN_TV_RESP, BUSINESS_JAGRAN_PRIME } = props
    const router = useRouter();
    const currentUrl = AppConfig.DOMAIN_NAME + router.asPath.replace('/','');
    return (

        <>
            <Layout title="Business News in Hindi: Share Market, Sensex, Nifty, Stock Market Today - www.jagran.com" 
            keywords="Business News, Business News in Hindi, Latest Business News, बिज़नेस समाचार, Latest Business News in Hindi, Share Market, BSE Sensex, NSE Nifty, Stock Market, Money, Finance" 
            desc="Business News (बिज़नेस समाचार) - Find Latest Business News in Hindi on Share Market, BSE Sensex, NSE Nifty, Stock Market, Money, Finance by www.jagran.com." 
            image={AppConfig.DEFAULT_IMAGE_NAME}
            url={currentUrl}>
              
        <script dangerouslySetInnerHTML={{__html : `var dataLayer = window.dataLayer || [];dataLayer.push({'event':'pageview','tvc_page_type':'Prime Landing Page','tvc_landing_page_type':'Prime Category Landing','tvc_page_cat':'business','language':'hindi'});`}}></script>
               
               
        <div className="main-content container" id="main-content">
                    <div className="left-col">
                    
                        <div className='stickySidebar'>
                        <Recommedarticle jagranPrime={BUSINESS_JAGRAN_PRIME}/>
                        <Recommedarticle/>
                        <CommonInnerLHS/> 
                        </div>
                    </div>
                    <div className="main-col CategoryLanding">
                    <Categoriesp1Comp news8component={BUSINESS_P1} title="बिजनेस समाचार" />
                        <div className="list-article">
                            <Categoriesbased8news news8component={BUSINESS_TOP15} title="बिजनेस विज्डम" />
                        </div>

                        <div className="list-article">
                        <Cagtegoriesbased4news news4component={BUSINESS_SAVING} title="बचत और निवेश" />
                        </div>

                        <div className="list-article">
                        <Categoriesbased8news news8component={BUSINESS_INSURANCE} title="इंश्योरेंस" />
                        </div>

                        <div className="list-article">
                        <Cagtegoriesbased4news news4component={BUSINESS_BANK_LOAN} title="बैंकिंग और लोन" />
                        </div>

                        <div className="list-article">
                        <Cagtegoriesbased4news news4component={BUSINESS_EXPERT_COLUMN} title="एक्सपर्ट कॉलम" />
                        </div>
                     </div>
                    <div className="right-col">
                    <div className='stickySidebar'>
                    {/* <ul className="list">

                                {
                                    BUSINESS_P1.map((componentdata, index) => {
                                        if (index > 3) {
                                            const bookmarkobj = { 'title': componentdata.headline, 'url': `${ArticleURL(componentdata)}`, 'image': `${AppConfig.IMAGE_DOMAIN_NAME}${componentdata.imgName}`, 'projectid': componentdata.id, 'description': componentdata.headline, 'site_name': 'jagranplus' };
                                            return (
                                                <li className="article">
                                                    <div className="summary full">
                                                        <p><Link href={`${ArticleURL(componentdata)}`}>
                                                            <a>{componentdata.headline}</a>
                                                        </Link></p>
                                                    </div>
                                                    <div className="timestemp text-uppercase">
                                                        <span className="label"><span className="red">{componentdata.category}</span>{TimeDifference(componentdata.modDate)}</span>
                                                        <Link href="javascript:void(0)"><a className="bookmark bookmarkaddContainer" id={`htmlDataBookmarkId${componentdata.id}`}>
                                                            <svg onClick={() => pluslistingBookmark(bookmarkobj)}><use href="#bookmark"></use></svg></a>
                                                        </Link>
                                                    </div>
                                                </li>

                                            );
                                        }
                                    }
                                    )
                                }
                            </ul> */}
                            <JagranSpecialComp listingData={BUSINESS_JAGRAN_SPECIAL}/>
                            <CommonInnerRHS/>                             
                        
                        </div>
                    </div>
                </div>
                 
                <JagranTvComp tvcomponent={JAGRAN_TV_RESP} />
            </Layout>

        </>
    )
}
export const getServerSideProps = async () => {
    const BUSINESS_P1 = await axios.get(BusinessLandingPageConfig.BUSINESS_P1_API).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const BUSINESS_JAGRAN_SPECIAL = await axios.get(BusinessLandingPageConfig.BUSINESS_JAGRAN_SPECIAL_API).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const BUSINESS_TOP15 = await axios.get(BusinessLandingPageConfig.BUSINESS_TOP15_API).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const BUSINESS_SAVING = await axios.get(BusinessLandingPageConfig.BUSINESS_SAVING_API).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const BUSINESS_INSURANCE = await axios.get(BusinessLandingPageConfig.BUSINESS_INSURANCE_API).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const BUSINESS_BANK_LOAN = await axios.get(BusinessLandingPageConfig.BUSINESS_BANK_LOAN_API).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const BUSINESS_EXPERT_COLUMN = await axios.get(BusinessLandingPageConfig.BUSINESS_EXPERT_COLUMN_API).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const JAGRAN_TV = await axios.get(BusinessLandingPageConfig.JAGRAN_TV_API).then((resp) => { return resp.data }).catch((err) => { console.log("Error Found") });
    const BUSINESS_JAGRAN_PRIME = await axios.get(JagranPrimeConfig.JAGRAN_PRIME_API + '/0/10').then((resp) => {return resp.data}).catch((err)=> {console.log("Error Found")});
    const JAGRAN_TV_RESP = JAGRAN_TV.item;
    return { props: { BUSINESS_P1,BUSINESS_JAGRAN_SPECIAL, BUSINESS_TOP15, BUSINESS_SAVING, BUSINESS_INSURANCE, BUSINESS_BANK_LOAN, BUSINESS_EXPERT_COLUMN, JAGRAN_TV_RESP,BUSINESS_JAGRAN_PRIME } }
}

export default BusinessLandingPage