

/* 
Author: Mohammad Shaazad 
*/
import Script from 'next/script'


function Footer() {
    return (
        <>
        {/* <script src="https://experience-ap.piano.io/xbuilder/experience/load?aid=Bu3KtrhZpj"/> */}

          <script src="https://storage.googleapis.com/bookm-com-static-jagran/js/public/bookmark.js?v=tree" />
          <footer className="footerage">
        <div className="container footer">
            {/*<div className="col-left">
                <div className="logo"><a href=""><svg><use href="#jagranpluswhite"></use></svg></a></div>
                <div className="footer-subscribe">
                      <h4 className="text-uppercase">Subscribe to the jagran</h4>  
                    <p>जागरण डॉट कॉम सब्सक्राइब  भरें और आकर्षक पुरस्कार जीतें</p>
                    <a href="subscription.html" className="btn btn-primary">Subscribe Now</a>
                </div>
                 <div className="newsletter">
                    <svg><use href="#mail"></use></svg>
                    <p><a href="">Sign up for our newsletter</a></p>
                </div> 
                <p className="copyright">Copyright © 2022 Jagran Prakashan Limited. </p>
            </div>*/} 
            <div className="col-right">
                <ul className="social">
                    <li><a href="https://bit.ly/3eU6qLp" className="btn btn-dark"><svg><use href="#googleplay"></use></svg><span>Google Play</span></a></li>
                    <li><a href="https://apple.co/2ZTyNW0" className="btn btn-dark"><svg><use href="#appleios"></use></svg><span>App Store</span></a></li>
                    <li><a href="https://www.facebook.com/dainikjagran"><svg><use href="#facebook"></use></svg></a></li>
                    <li><a href="https://twitter.com/JagranNews"><svg><use href="#twitter"></use></svg></a></li>
                    <li><a href="https://www.pinterest.com/hindinewsjagran"><svg><use href="#pinterest"></use></svg></a></li>
                    <li><a href="https://www.youtube.com/channel/UCSKgOW8Pg_eZymYJyJc432g"><svg><use href="#youtube"></use></svg></a></li>                    
                    <li><a href="https://www.kooapp.com/profile/dainikjagran" target="_blank"><svg class="koo"><use href="#svgKoo3"></use></svg></a></li>
                </ul>
                <div className="link">
                    <ul>
                        <li>
                            <a href="https://english.jagran.com?itm_source=referral&amp;itm_medium=JagHin&amp;itm_campaign=footerlink"
                                rel="noopener" target="_blank">Jagran English</a>
                        </li>
                        
                        <li>
                            <a href="https://www.onlymyhealth.com" rel="noopener" target="_blank">Health</a>
                        </li>
                        <li>
                            <a href="https://www.jagranjosh.com/" rel="noopener" target="_blank">Education</a>
                        </li>
                        <li>
                            <a href="https://www.naidunia.com/" rel="noopener" target="_blank">Nai Dunia</a>
                        </li>
                        <li>
                            <a href="https://www.inextlive.com/" rel="noopener" target="_blank">Inextlive</a>
                        </li>
                        <li>
                            <a href="https://www.herzindagi.com/" rel="noopener" target="_blank">Her Zindagi</a>
                        </li>
                        <li>
                            <a href="https://www.radiocity.in/" rel="noopener" target="_blank">Radio City</a>
                        </li>
                        <li>
                            <a href="https://www.jagran.com/blogs/" rel="noopener" target="_blank">Blogs</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="https://www.jagran.com/" target="_blank">Hindi News</a>
                        </li>
                        <li>
                            <a href="https://www.jagran.com/about-us.html" target="_blank">About us</a>
                        </li>
                        <li>
                            <a href="https://www.jagran.com/advertise-withus.html" target="_blank">Advertise with Us</a>
                        </li>
                        <li>
                            <a rel="noopener" href="https://bit.ly/2MIUIrC" target="_blank">Book Ads on Jagran</a>
                        </li>
                        <li>
                            <a href="https://www.jagran.com/advertise-withus.html" target="_blank">Partnership</a>
                        </li>
                        <li>
                            <a rel="noopener" href="https://jplcorp.in/new/Contact_Us.aspx"  target="_blank">Contact us</a>
                        </li>
                        <li>
                            <a href="https://www.jagran.com/sitemap.html"  target="_blank">Sitemap</a>
                        </li>
                        <li>
                            <a href="https://www.jagran.com/citizen-journalism-hindi.html"  target="_blank">Submit your news</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="https://www.jagran.com/policies-and-standards.html#mission"  target="_blank">Mission Statement</a>
                        </li>
                        <li>
                            <a href="https://www.jagran.com/policies-and-standards.html#messageeditor" target="_blank">Message from the Editor</a>
                        </li>
                        <li>
                            <a href="https://www.jagran.com/policies-and-standards.html#ourbusiness" target="_blank">Our Business</a>
                        </li>
                        <li>
                            <a href="https://www.jagran.com/policies-and-standards.html#journalistswork" target="_blank">How our Journalists work</a>
                        </li>
                        <li>
                            <a href="https://www.jagran.com/policies-and-standards.html#correctionspolicy" target="_blank">Corrections Policy</a>
                        </li>
                        <li>
                            <a href="https://www.jagran.com/policies-and-standards.html#coveragepriorities" target="_blank">Coverage Priorities</a>
                        </li>
                        <li>
                            <a href="https://www.jagran.com/policies-and-standards.html#diversevoices" target="_blank">Diverse Voices Statement</a>
                        </li>
                        <li>
                            <a href="https://www.jagran.com/policies-and-standards.html#diversestaffing" target="_blank">Diverse Staffing and Policy</a>
                        </li>
                        <li>
                            <a href="https://www.jagran.com/policies-and-standards.html#anonymousources" target="_blank">Anonymous Sources Policy</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="https://www.jagran.com/policies-and-standards.html#actionablefeedback" target="_blank">Actionable Feedback</a>
                        </li>
                        <li>
                            <a href="https://www.jagran.com/privacy-policy.html" target="_blank">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="https://www.jagran.com/terms-conditions.html" target="_blank">Disclaimer</a>
                        </li>
                        <li>
                            <a href="https://www.jagran.com/dnpa-code-of-ethics-for-digital-news-websites" rel="nofollow">This website follows the DNPA’s code of conduct</a>
                        </li>
                        <li>
                            <a href="mailto:compliant_gro@jagrannewmedia.com" rel="nofollow">For any feedback or complaint, email to compliant_gro
@jagrannewmedia.com
</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
        <div id="bottom_ribbon"> </div>
    </footer>   
    
        </>
      )
}

export default Footer

