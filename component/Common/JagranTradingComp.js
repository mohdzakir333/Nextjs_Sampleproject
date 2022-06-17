import { AppConfig } from '../Utils/JPlusConfig'

import Link from 'next/link'

function JagranTrading(props){
    return (
        <>
        <h2>जागरण ट्रेंडिंग </h2>
                           <ul className="list">

                                { props.listingData != undefined ?
                                    props.listingData.map((componentdata, index) => {
                                        if (index > 3) {
                                            const bookmarkobj = { 'title': componentdata.headline, 'url': `${AppConfig.DOMAIN_NAME}${componentdata.link}`, 'image': `${AppConfig.IMAGE_DOMAIN_NAME}${componentdata.imgThumb1}`, 'projectid': componentdata.id, 'description': componentdata.headline, 'site_name': 'jagranplus' };
                                            return (
                                                <li className="article" key={index}>
                                                    <div className="summary full">
                                                        <p><Link href={`${AppConfig.DOMAIN_NAME}${componentdata.link}`}>{componentdata.headline}</Link></p>
                                                    </div>
                                                    <div className="timestemp text-uppercase">
                                                        <span className="label"><span className="red">{componentdata.category}</span> {componentdata.time}</span>
                                                        <Link href="javascript:void(0)"><a className="bookmark bookmarkaddContainer" id={`htmlDataBookmarkId${componentdata.id}`}>
                                                            <svg onClick={() => pluslistingBookmark(bookmarkobj)}><use href="#bookmark"></use></svg></a>
                                                        </Link>
                                                    </div>

                                                </li>

                                            );
                                        }
                                    }
                                    )
                                    : ''
                                }
                                
                            </ul> 
                            </>

    )
}

export default JagranTrading;