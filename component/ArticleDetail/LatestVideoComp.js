/* 
Author: Mohammad Shaazad 
This component is written to display the data based on video feeds. 
*/
function LatestVideoComp() {
    return (
        <>
            <div className="most-reading space-top">
                <h3>लेटेस्ट वीडियो</h3>
                <ul>
                    <li>
                        <figure><svg><use href="#youtube"></use></svg><img src="https://www.jagranimages.com/images/newimg/07092021/07_09_2021-breaking_21998634_m.jpg" alt="" /></figure>
                        <p><a href="">Gurdas Maan Controversy: गुरदास मान की अदालत में पेशी आज, सिख संगठनों ने लगाया कोर्ट कांप्लेक्स में डेरा</a></p>
                        <div className="timestemp text-uppercase">
                            <span className="label"><span className="red">Politics</span> 17 Mins Ago <svg className="plus"><use href="#jagranPlus"></use></svg></span>
                            <a href="/" className="bookmark"><svg><use href="#bookmark"></use></svg></a>
                        </div>
                    </li>
                    <li>
                        <figure><svg><use href="#youtube"></use></svg><img src="https://www.jagranimages.com/images/newimg/07092021/07_09_2021-evehiclenews_21998296_m.jpg" alt="" /></figure>
                        <p><a href="">E Vehicle News: दिल्ली वालों को भा गईं इलेक्ट्रिक गाड़ियां, वजह जानकर आप भी कहेंगे 'वाह क्या बात है'</a></p>
                        <div className="timestemp text-uppercase">
                            <span className="label"><span className="red">Politics</span> 17 Mins Ago</span>
                            <a href="/" className="bookmark"><svg><use href="#bookmark"></use></svg></a>
                        </div>
                    </li>
                    <li>
                        <figure><svg><use href="#youtube"></use></svg><img src="https://www.jagranimages.com/images/newimg/07092021/07_09_2021-roadways_strike_21998605_m.jpg" alt="" /></figure>
                        <p><a href="">Karnal Kisan Mahapanchayat: हरियाणा में किसानाें के धरने से लुधियाना में यात्री रहे परेशान, दिल्ली जाने के लिए नहीं मिली बसें</a></p>
                        <div className="timestemp text-uppercase">
                            <span className="label"><span className="red">Politics</span> 17 Mins Ago</span>
                            <a href="/" className="bookmark"><svg><use href="#bookmark"></use></svg></a>
                        </div>
                    </li>
                    <li>
                        <figure><svg><use href="#youtube"></use></svg><img src="https://www.jagranimages.com/images/newimg/07092021/07_09_2021-dmrcmetro_21998539_m.jpg" alt="" /></figure>
                        <p><a href="">Delhi Metro News: एक साल बाद भी तकरीबन 3000 करोड़ रुपये के घाटे में हैं दिल्ली मेट्रो</a></p>
                        <div className="timestemp text-uppercase">
                            <span className="label"><span className="red">Politics</span> 17 Mins Ago</span>
                            <a href="/" className="bookmark"><svg><use href="#bookmark"></use></svg></a>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default LatestVideoComp


