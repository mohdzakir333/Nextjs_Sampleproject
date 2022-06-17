import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

import { AppConfig, HeaderPageConfig } from '../../component/Utils/JPlusConfig';
import { ArticleURL, TimeDifference } from '../Utils/CommonUtils';

function Notification(props){
    const [notificationArticle, setNotificationArticle] = useState(null);

    useEffect( () => {               
        axios.get(HeaderPageConfig.HEADER_LATEST_NEWS + '/0/10').then((resp) => setNotificationArticle(resp.data)).catch((e) => {console.log("Could Not Fetch Notification News!")})
        
    },[])

    return (
        <div  className={props.show ? "notification-popup show" : "notification-popup"} >
        <a  href="#" onClick={props.handleNotifyClose} className="close-notification"><svg><use href="#close"></use></svg></a> 
        <div className="notification-conent">
            <h3>Notification</h3>
            <p>{props.badgeCounter ? <>{props.badgeCounter} new message</> : ''} </p>
            <ul className="list">
                {notificationArticle != undefined ? 
                notificationArticle.map(latestdata => {
                    const obj = {'title':latestdata.headline,'url':`${ArticleURL(latestdata)}`,'image':`${AppConfig.IMAGE_DOMAIN_NAME}${latestdata.imgName}`,'projectid':latestdata.id,'description':latestdata.headline,'site_name':'jagranplus'};
                    return (
                        <li className="article" key={latestdata.id}>
                    <figure><a href="article-detail.html"><img src={`${AppConfig.IMAGE_DOMAIN_NAME}${latestdata.imgName}`} alt="" /></a></figure>
                    <div className="summary">
                        <p><Link href={`${ArticleURL(latestdata)}`}><a>{latestdata.headline}</a></Link></p>
                    </div>
                    <div className="timestemp text-uppercase">
                        <span className="label"><span className="red">{latestdata.category}</span> {TimeDifference(latestdata.modDate)}</span>
                        <Link href="#"><a className="bookmark" id={`htmlDataBookmarkId${latestdata.id}`}><svg onClick={() => pluslistingBookmark(obj)}><use href="#bookmark"></use></svg></a></Link>
                    </div>
                </li>
                    )
                })
                : <li className="article" key={1}>Loading...</li>}                
            </ul>
        </div>
    </div>
    )
}

export default Notification