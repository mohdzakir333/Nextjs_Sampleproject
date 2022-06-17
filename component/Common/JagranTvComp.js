import { useState, useEffect } from 'react';

/* 
Author Mohammad Shaazad 
This component is used to display the data related to the jagran tv on all the landing pages. 
*/
function JagranTvComp(props) {
    
    const [videoEmbedInfo , setVideoEmbedInfo] = useState({title: '', link: ''});

    useEffect(() => {
        setVideoEmbedInfo({title : props.tvcomponent[0].title, link: props.tvcomponent[0].embeded_link});
    },[]);

    const changeVideoHandle = (e, link, title) => {
        e.preventDefault();
        console.log(link)
        setVideoEmbedInfo({title : link, link: title});
    }

    if (props.tvcomponent == null || props.tvcomponent==undefined) {
            return (
                <>
                  <h2>Parameter tv component value is null</h2>
                </>
            ) 
        }else{
            //setVideoEmbedInfo({title : props.tvcomponent[0].title, link: props.tvcomponent[0].embeded_link})
        return (
            <>
            
              <div className="jagran-tv">
             <div className="container">
             <div className="heading">
                        <a href="" className="logo"><img src="img/jagran-tv.png" alt="" /></a>
                        {/* <a href="#" className="btn btn-primary">और देखें</a> */}
                    </div>
               <div className="tv-widget">
               
               
               {props.tvcomponent.map((componentdata, index) => {
                if (index == 0) {
                    
               return (
                <div className="tv-player" id="tv-player" key={index}>
                    <div className="player" id="player1">
                        <a href={componentdata.link}>
                            {/*<img width="100%" src={componentdata.image} alt={componentdata.title} /> */}
                            <iframe  
                            allowfullscreen="1" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            title={videoEmbedInfo.title} 
                            src={videoEmbedInfo.link} 
                            width="100%" height="390" frameborder="0"></iframe>
                            </a>
                    </div>
                    
                </div>
                 );
                }})}
                
                <div className="video-listing">
               
                    <ul className="video-list" id="video-list">
                    
                     { props.tvcomponent.map((componentdata, index) => {
                        if (index > 0) {
                        return (
                        <li className="a ctive" key={index}>                        
                            <div className="summary">                            
                                <p><a href="#" onClick={(e) => changeVideoHandle(e, componentdata.title, componentdata.embeded_link)} style={{ color: '#fff'}}>{componentdata.title}</a></p>                            
                            </div>
                            <figure><a href="#" onClick={(e) => changeVideoHandle(e, componentdata.title, componentdata.embeded_link)}><svg><use href="#youtube"></use></svg><img src={componentdata.image} alt={componentdata.title} /></a></figure>                        </li>
                        );
        }})}
                    </ul>                
                </div>
            </div>
         
            {/* <div className="container subscription-bg">
                <div className="subscription">
                    <div className="heading">JAGRAN <span className="red">top 10</span></div>
                    <div className="info"><h3>Start your day smart with stories curated specially for you</h3></div>
                    <div className="email">
                        <form action="">
                            <input type="text" placeholder="Your email address" />
                            <button className="text-uppercase">Get</button>
                        </form>
                    </div>
                    <div className="close"><a href="/" className="subscribe-close"><svg><use href="#close"></use></svg></a></div>
                </div>
            </div> */}
        </div>   
        </div>        
            </>
          )
    }
    }
    export default JagranTvComp