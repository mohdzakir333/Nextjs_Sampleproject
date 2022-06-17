import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

function ChooseState(props){    
    const router = useRouter();
    const currentUrl = router.asPath.replace('/','').replace('#','');

    const [UPtoggleView, UPsetToggleView] = useState(false);
    const [BihartoggleView,BiharsetToggleView] = useState(false);
    const [DelhitoggleView,DelhisetToggleView] = useState(false);
    const [PunjabtoggleView, PunjabsetToggleView] = useState(false);
    const [HaryanatoggleView, HaryanasetToggleView] = useState(false);
    const [UttarakhandtoggleView, UttarakhandsetToggleView] = useState(false);
    const [JharkhandtoggleView,JharkhandsetToggleView] = useState(false);
    const [ChhattisgarhtoggleView,ChhattisgarhsetToggleView] = useState(false);
    const [MPtoggleView, MPsetToggleView] = useState(false);
    const [HPtoggleView, HPsetToggleView] = useState(false);
    const [JKtoggleView, JKsetToggleView] = useState(false);
    const [WBtoggleView,WBsetToggleView] = useState(false);
    const [OdishatoggleView,OdishasetToggleView] = useState(false);
    const [MaharashtratoggleView, MaharashtrasetToggleView] = useState(false);
    const [GujarattoggleView, GujaratsetToggleView] = useState(false);
    const [RajasthantoggleView, RajasthansetToggleView] = useState(false);

    const handleClosePopup = () => {
        props.handleCloseCity();
    }
   
    return (
        <div className="select-city"   style={{display: "block"}}>
        <div className="select-city-main">
            <div className="tophead-main">
                <div className="tophead">
                    <input type="text" placeholder="Serach your city" />
                    <a href="#"  onClick={props.handleCloseCity}  className="close-city"><svg><use href="#close"></use></svg></a>
                </div>            
            </div>

            {/* select city ------------------------ */}
        
                    <div className="cities-main">
                        <ul className="cities">
                            <li>
                                <Link href="#"><a onClick={() => UPsetToggleView(!UPtoggleView)} className={`SubMenu ${UPtoggleView ? 'show' : 'HideMenu'}`}><svg><use href="#uttar-pradesh"></use></svg><span>उत्तर प्रदेश</span></a></Link>
                                                                 
                                <div className={`state-city ${UPtoggleView ? 'show' : 'HideMenu'}`}>
                                    {/* <div className="tophead-main">
                                        <div className="tophead">
                                            <span>आपका राज्य</span>
                                           <a href='#' onClick={() => UPsetToggleView(!UPtoggleView)} className="closeCity" ><svg><use href="#close"></use></svg></a> 
                                        </div>
                                    </div> */}
                                    <div className="sub-drop">
                                        <h2 className="city-lable"> <Link href="/state/uttar-pradesh"><a onClick={handleClosePopup}>उत्तर प्रदेश <svg><use href="#arrow-nav"></use></svg></a></Link> </h2>
                                        <ul>
                                            <li><strong>A</strong></li>
                                            <li><Link href="/local/uttar-pradesh_amethi-news-hindi.html"><a onClick={handleClosePopup}>अमेठी</a></Link></li>
                                            <li><Link href="/local/uttar-pradesh_agra-city-news-hindi.html"><a onClick={handleClosePopup}>आगरा</a></Link></li>
                                            <li><Link href="/local/uttar-pradesh_aligarh-city-news-hindi.html"><a onClick={handleClosePopup}>अलीगढ़</a></Link></li>
                                            <li><Link href="/local/uttar-pradesh_allahabad-city-news-hindi.html"><a onClick={handleClosePopup}>प्रयागराज</a></Link></li>
                                            <li><Link href="/local/uttar-pradesh_amroha-city-news-hindi.html"><a onClick={handleClosePopup}>अमरोहा</a></Link></li>
                                            <li><Link href="/local/uttar-pradesh_ambedkarnagar-news-hindi.html"><a onClick={handleClosePopup}>अंबेडकरनगर</a></Link></li>
                                            <li><Link href="/local/uttar-pradesh_auraiya-news-hindi.html"><a onClick={handleClosePopup}>औरैया</a></Link></li>
                                            <li><Link href="/local/uttar-pradesh_azamgarh-news-hindi.html"><a onClick={handleClosePopup}>आजमगढ़</a></Link></li>
                                        </ul>
                                       <ul>
                                            <li><strong>B</strong></li>
                                            <li><Link href="/local/uttar-pradesh_badaun-news-hindi.html"><a onClick={handleClosePopup}>बदायूं</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_bagpat-news-hindi.html"><a onClick={handleClosePopup}>बागपत</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_bahraich-news-hindi.html"><a onClick={handleClosePopup}>बहराइच</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_ballia-news-hindi.html"><a onClick={handleClosePopup}>बलिया</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_balrampur-news-hindi.html"><a onClick={handleClosePopup}>बलरामपुर</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_banda-news-hindi.html"><a onClick={handleClosePopup}>बांदा</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_barabanki-news-hindi.html"><a onClick={handleClosePopup}>बाराबंकी</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_bareilly-city-news-hindi.html"><a onClick={handleClosePopup}>बरेली</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_basti-news-hindi.html"><a onClick={handleClosePopup}>बस्ती</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_bhadohi-news-hindi.html"><a onClick={handleClosePopup}>भदोही</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_bijnor-news-hindi.html"><a onClick={handleClosePopup}>बिजनौर</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_bulandshahr-news-hindi.html"><a onClick={handleClosePopup}>बुलंदशहर</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>C</strong></li>
                                            <li><Link href="/local/uttar-pradesh_chandauli-news-hindi.html"><a onClick={handleClosePopup}>चंदौली</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_chitrakoot-news-hindi.html"><a onClick={handleClosePopup}>चित्रकूट</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>D</strong></li>
                                            <li><Link href="/local/uttar-pradesh_deoria-news-hindi.html"><a onClick={handleClosePopup}>देवरिया</a></Link>
                                            </li>
                                        </ul>
                                         <ul>
                                            <li><strong>E</strong></li>
                                            <li><Link href="/local/uttar-pradesh_etawah-news-hindi.html"><a onClick={handleClosePopup}>इटावा</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_etah-news-hindi.html"><a onClick={handleClosePopup}>एटा</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>F</strong> </li>
                                            <li><Link href="/local/uttar-pradesh_faizabad-news-hindi.html"><a onClick={handleClosePopup}>फैजाबाद</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_fatehpur-news-hindi.html"><a onClick={handleClosePopup}>फतेहपुर</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_farrukhabad-news-hindi.html"><a onClick={handleClosePopup}>फर्रुखाबाद</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_firozabad-news-hindi.html"><a onClick={handleClosePopup}>फीरोजाबाद</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>G</strong></li>
                                            <li><Link href="/local/uttar-pradesh_ghaziabad-news-hindi.html"><a onClick={handleClosePopup}>गाजियाबाद</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_ghazipur-news-hindi.html"><a onClick={handleClosePopup}>गाजीपुर</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_gonda-news-hindi.html"><a onClick={handleClosePopup}>गोंडा</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_gorakhpur-city-news-hindi.html"><a onClick={handleClosePopup}>गोरखपुर</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>H</strong></li>
                                            <li><Link href="/local/uttar-pradesh_hamirpur-up-news-hindi.html"><a onClick={handleClosePopup}>हमीरपुर</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_hapur-city-news-hindi.html"><a onClick={handleClosePopup}>हापुड़</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_hardoi-news-hindi.html"><a onClick={handleClosePopup}>हरदोई</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_hathras-news-hindi.html"><a onClick={handleClosePopup}>हाथरस</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>J</strong></li>
                                            <li><Link href="/local/uttar-pradesh_jalaun-news-hindi.html"><a onClick={handleClosePopup}>जालौन</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_jaunpur-news-hindi.html"><a onClick={handleClosePopup}>जौनपुर</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_jhansi-city-news-hindi.html"><a onClick={handleClosePopup}>झांसी</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_jyotiba-phule-nagar-news-hindi.html"><a onClick={handleClosePopup}>ज्योतिबाफूले
                                                नगर</a></Link></li>
                                        </ul>
                                        <ul>
                                            <li><strong>K</strong></li>
                                            <li><Link href="/local/uttar-pradesh_kannauj-news-hindi.html"><a onClick={handleClosePopup}>कन्नौज</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_kanpur-city-news-hindi.html"><a onClick={handleClosePopup}>कानपुर</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_kanpur-dehat-news-hindi.html"><a onClick={handleClosePopup}>कानपुर
                                                देहात</a></Link></li>
                                            <li><Link href="/local/uttar-pradesh_kaushambi-news-hindi.html"><a onClick={handleClosePopup}>कौशांबी</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_kasganj-news-hindi.html"><a onClick={handleClosePopup}>कासगंज</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>L</strong></li>
                                            <li><Link href="/local/uttar-pradesh_lakhimpur-kheri-news-hindi.html"><a onClick={handleClosePopup}>लखीमपुर
                                                खीरी</a></Link></li>
                                            <li><Link href="/local/uttar-pradesh_lucknow-city-news-hindi.html"><a onClick={handleClosePopup}>लखनऊ</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_lalitpur-news-hindi.html"><a onClick={handleClosePopup}>ललितपुर</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>M</strong></li>
                                            <li><Link href="/local/uttar-pradesh_maharajganj-news-hindi.html"><a onClick={handleClosePopup}>महाराजगंज</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_mahoba-news-hindi.html"><a onClick={handleClosePopup}>महोबा</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_mainpuri-news-hindi.html"><a onClick={handleClosePopup}>मैनपुरी</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_mathura-news-hindi.html"><a onClick={handleClosePopup}>मथुरा</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_mau-news-hindi.html"><a onClick={handleClosePopup}>मऊ</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_meerut-city-news-hindi.html"><a onClick={handleClosePopup}>मेरठ</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_mirzapur-news-hindi.html"><a onClick={handleClosePopup}>मिर्जापुर</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_moradabad-city-news-hindi.html"><a onClick={handleClosePopup}>मुरादाबाद</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_muzaffarnagar-news-hindi.html"><a onClick={handleClosePopup}>मुजफ्फरनगर</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>N</strong></li>
                                            <li><Link href="/local/uttar-pradesh_noida-news-hindi.html"><a onClick={handleClosePopup}>नोएडा</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>P</strong></li>
                                            <li><Link href="/local/uttar-pradesh_pratapgarh-news-hindi.html"><a onClick={handleClosePopup}>प्रतापगढ़</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_pilibhit-news-hindi.html"><a onClick={handleClosePopup}>पीलीभीत</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>R</strong></li>
                                            <li><Link href="/local/uttar-pradesh_raebareli-news-hindi.html"><a onClick={handleClosePopup}>रायबरेली</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_rampur-news-hindi.html"><a onClick={handleClosePopup}>रामपुर</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>S</strong></li>
                                            <li><Link href="/local/uttar-pradesh_sant-kabir-nagar-news-hindi.html"><a onClick={handleClosePopup}>संत
                                                कबीर नगर</a></Link></li>
                                            <li><Link href="/local/uttar-pradesh_shahjahanpur-news-hindi.html"><a onClick={handleClosePopup}>शाहजहांपुर</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_shravasti-news-hindi.html"><a onClick={handleClosePopup}>श्रावस्ती</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_sidharth-nagar-news-hindi.html"><a onClick={handleClosePopup}>सिद्धार्थ
                                                नगर</a></Link></li>
                                            <li><Link href="/local/uttar-pradesh_sitapur-news-hindi.html"><a onClick={handleClosePopup}>सीतापुर</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_sonbhadra-news-hindi.html"><a onClick={handleClosePopup}>सोनभद्र</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_sultanpur-news-hindi.html"><a onClick={handleClosePopup}>सुलतानपुर</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_saharanpur-news-hindi.html"><a onClick={handleClosePopup}>सहारनपुर</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_shamli-city-news-hindi.html"><a onClick={handleClosePopup}>शामली</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_sambhal-city-news-hindi.html"><a onClick={handleClosePopup}>संभल</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>U</strong></li>
                                            <li><Link href="/local/uttar-pradesh_unnao-news-hindi.html"><a onClick={handleClosePopup}>उन्नाव</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>V</strong></li>
                                            <li><Link href="/local/uttar-pradesh_varanasi-city-news-hindi.html"><a onClick={handleClosePopup}>वाराणसी</a></Link>
                                            </li>
                                        </ul>  
                                    </div>
                                </div>
                            </li>
                            <li> 
                                <Link href="#"><a onClick={() => BiharsetToggleView(!BihartoggleView)}  className={`SubMenu ${BihartoggleView ? 'show' : 'HideMenu'}`}><svg><use href="#bihar"></use></svg><span>बिहार</span></a></Link>
                                <div className={`state-city ${BihartoggleView ? 'show' : 'HideMenu'}`}>
                                    {/* <div className="tophead-main">
                                        <div className="tophead">
                                            <span>आपका राज्य</span>
                                            <a href="#" onClick={() => BiharsetToggleView(!BihartoggleView)} className="closeCity"><svg><use href="#close"></use></svg></a>
                                        </div>
                                    </div> */}
                                    <div className="sub-drop">
                                        <h2 className="city-lable"><Link href="/state/bihar"><a onClick={handleClosePopup}>बिहार <svg><use href="#arrow-nav"></use></svg></a></Link> </h2>
                                        <ul>
                                            <li><strong>A</strong></li>
                                            <li><Link href="/local/bihar_araria-news-hindi.html"><a onClick={handleClosePopup}>अररिया</a></Link>
                                            </li>
                                            <li><Link href="/local/bihar_arwal-news-hindi.html"><a onClick={handleClosePopup}>अरवल</a></Link>
                                            </li>
                                            <li><Link href="/local/bihar_aurangabad-news-hindi.html"><a onClick={handleClosePopup}>औरंगाबाद</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>B</strong></li>
                                            <li><Link href="/local/bihar_bhagalpur-news-hindi.html"><a onClick={handleClosePopup}>भागलपुर</a></Link>
                                            </li>
                                            <li><Link href="/local/bihar_begusarai-news-hindi.html"><a onClick={handleClosePopup}>बेगूसराय</a></Link>
                                            </li>
                                            <li><Link href="/local/bihar_bhojpur-news-hindi.html"><a onClick={handleClosePopup}>भोजपुर</a></Link>
                                            </li>
                                            <li><Link href="/local/bihar_buxar-news-hindi.html"><a onClick={handleClosePopup}>बक्सर</a></Link>
                                            </li>
                                            <li><Link href="/local/bihar_banka-news-hindi.html"><a onClick={handleClosePopup}>बांका</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>D</strong></li>
                                            <li><Link href="/local/bihar_darbhanga-news-hindi.html"><a onClick={handleClosePopup}>दरभंगा</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>E</strong></li>
                                            <li><Link href="/local/bihar_east-champaran-news-hindi.html"><a onClick={handleClosePopup}>पूर्वी
                                                चंपारण</a></Link></li>
                                        </ul>
                                        <ul>
                                            <li><strong>G</strong></li>
                                            <li><Link href="/local/bihar_gaya-news-hindi.html"><a onClick={handleClosePopup}>गया</a></Link>
                                            </li>
                                            <li><Link href="/local/bihar_gopalganj-news-hindi.html"><a onClick={handleClosePopup}>गोपालगंज</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>J</strong></li>
                                            <li><Link href="/local/bihar_jahanabad-news-hindi.html"><a onClick={handleClosePopup}>जहानाबाद</a></Link>
                                            </li>
                                            <li><Link href="/local/bihar_jamui-news-hindi.html"><a onClick={handleClosePopup}>जमुई</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>K</strong></li>
                                            <li><Link href="/local/bihar_khagaria-news-hindi.html"><a onClick={handleClosePopup}>खगडि़या</a></Link>
                                            </li>
                                            <li><Link href="/local/bihar_kishanganj-news-hindi.html"><a onClick={handleClosePopup}>किशनगंज</a></Link>
                                            </li>
                                            <li><Link href="/local/bihar_kaimoor-news-hindi.html"><a onClick={handleClosePopup}>कैमूर</a></Link>
                                            </li>
                                            <li><Link href="/local/bihar_katihar-news-hindi.html"><a onClick={handleClosePopup}>कटिहार</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>L</strong></li>
                                            <li><Link href="/local/bihar_lakhisarai-news-hindi.html"><a onClick={handleClosePopup}>लखीसराय</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>M</strong></li>
                                            <li><Link href="/local/bihar_muzaffarpur-news-hindi.html"><a onClick={handleClosePopup}>मुजफ्फरपुर</a></Link>
                                            </li>
                                            <li><Link href="/local/bihar_munger-news-hindi.html"><a onClick={handleClosePopup}>मुंगेर</a></Link>
                                            </li>
                                            <li><Link href="/local/bihar_madhepura-news-hindi.html"><a onClick={handleClosePopup}>मधेपुरा</a></Link>
                                            </li>
                                            <li><Link href="/local/bihar_madhubani-news-hindi.html"><a onClick={handleClosePopup}>मधुबनी</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>N</strong></li>
                                            <li><Link href="/local/bihar_nalanda-news-hindi.html"><a onClick={handleClosePopup}>नालंदा</a></Link>
                                            </li>
                                            <li><Link href="/local/bihar_nawada-news-hindi.html"><a onClick={handleClosePopup}>नवादा</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>P</strong></li>
                                            <li><Link href="/local/bihar_patna-city-news-hindi.html"><a onClick={handleClosePopup}>पटना</a></Link>
                                            </li>
                                            <li><Link href="/local/bihar_west-champaran-news-hindi.html"><a onClick={handleClosePopup}>पश्चिमी
                                                चंपारण</a></Link></li>
                                            <li><Link href="/local/bihar_purnea-news-hindi.html"><a onClick={handleClosePopup}>पूर्णिया</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>R</strong></li>
                                            <li><Link href="/local/bihar_rohtas-news-hindi.html"><a onClick={handleClosePopup}>रोहतास</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>S</strong></li>
                                            <li><Link href="/local/bihar_samastipur-news-hindi.html"><a onClick={handleClosePopup}>समस्तीपुर</a></Link>
                                            </li>
                                            <li><Link href="/local/bihar_sheohar-news-hindi.html"><a onClick={handleClosePopup}>शिवहर</a></Link>
                                            </li>
                                            <li><Link href="/local/bihar_saran-news-hindi.html"><a onClick={handleClosePopup}>सारण</a></Link>
                                            </li>
                                            <li><Link href="/local/bihar_sitamarhi-news-hindi.html"><a onClick={handleClosePopup}>सीतामढ़ी</a></Link>
                                            </li>
                                            <li><Link href="/local/bihar_shiekhpura-news-hindi.html"><a onClick={handleClosePopup}>शेखपुरा</a></Link>
                                            </li>
                                            <li><Link href="/local/bihar_supaul-news-hindi.html"><a onClick={handleClosePopup}>सुपौल</a></Link>
                                            </li>
                                            <li><Link href="/local/bihar_siwan-news-hindi.html"><a onClick={handleClosePopup}>सिवान</a></Link>
                                            </li>
                                            <li><Link href="/local/bihar_saharsa-news-hindi.html"><a onClick={handleClosePopup}>सहरसा</a></Link>
                                            </li> 
                                        </ul>
                                        <ul>
                                            <li><strong>V</strong></li>
                                            <li><Link href="/local/bihar_vaishali-news-hindi.html"><a onClick={handleClosePopup}>वैशाली</a></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <Link href="#"><a onClick={() => DelhisetToggleView(!DelhitoggleView)}   className={`SubMenu ${DelhitoggleView ? 'show' : 'HideMenu'}`}><svg><use href="#delhi"></use></svg><span>दिल्ली</span></a></Link>
                                <div className={`state-city ${DelhitoggleView ? 'show' : 'HideMenu'}`}>
                                    {/* <div className="tophead-main">
                                        <div className="tophead">
                                            <span>आपका राज्य</span>
                                            <a href="#"  onClick={() => DelhisetToggleView(!DelhitoggleView)} className="closeCity"><svg><use href="#close"></use></svg></a>
                                        </div>
                                    </div> */}
                                    <div className="sub-drop">
                                        <h2 className="city-lable"><Link href="/state/delhi-ncr"><a onClick={handleClosePopup}>दिल्ली <svg><use href="#arrow-nav"></use></svg></a></Link> </h2>
                                        <ul>
                                            <li><strong>G</strong></li>
                                            <li><Link href="/local/uttar-pradesh_ghaziabad-news-hindi.html"><a onClick={handleClosePopup}>गाजियाबाद</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>H</strong></li>
                                            <li><Link href="/local/uttar-pradesh_hapur-city-news-hindi.html"><a onClick={handleClosePopup}>हापुड़</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>M</strong></li>
                                            <li><Link href="/local/haryana_mewat-news-hindi.html"><a onClick={handleClosePopup}>मेवात</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>N</strong></li>
                                            <li><Link href="/local/delhi_new-delhi-city-news-hindi.html"><a onClick={handleClosePopup}>नई
                                                दिल्ली</a></Link></li>
                                            <li><Link href="/local/uttar-pradesh_noida-news-hindi.html"><a onClick={handleClosePopup}>नोएडा</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>P</strong></li>
                                            <li><Link href="/local/haryana_palwal-news-hindi.html"><a onClick={handleClosePopup}>पलवल</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>R</strong></li>
                                            <li><Link href="/local/haryana_rewari-news-hindi.html"><a onClick={handleClosePopup}>रेवाड़ी</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>S</strong></li>
                                            <li><Link href="/local/haryana_sonipat-news-hindi.html"><a onClick={handleClosePopup}>सोनीपत</a></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="#" onClick={() => PunjabsetToggleView(!PunjabtoggleView)}   className={`SubMenu ${PunjabtoggleView ? 'show' : 'HideMenu'}`}><svg><use href="#punjab"></use></svg><span>पंजाब</span></a>
                                <div className={`state-city ${PunjabtoggleView ? 'show' : 'HideMenu'}`}>
                                    {/* <div className="tophead-main">
                                        <div className="tophead">
                                            <span>आपका राज्य</span>
                                            <a href="#"  onClick={() => PunjabsetToggleView(!PunjabtoggleView)} className="closeCity"><svg><use href="#close"></use></svg></a>
                                        </div>
                                    </div> */}
                                    <div className="sub-drop">
                                        <h2 className="city-lable"><Link href="/state/punjab"><a onClick={handleClosePopup}>पंजाब <svg><use href="#arrow-nav"></use></svg></a></Link> </h2>
                                        <ul>
                                            <li><strong>A</strong></li>
                                            <li><Link href="/local/punjab_amritsar-news-hindi.html"><a onClick={handleClosePopup}>अमृतसर</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>B</strong></li>
                                            <li><Link href="/local/punjab_barnala-news-hindi.html"><a onClick={handleClosePopup}>बरनाला</a></Link>
                                            </li>
                                            <li><Link href="/local/punjab_bhatinda-news-hindi.html"><a onClick={handleClosePopup}>भटिंडा</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>C</strong></li>
                                            <li><strong><Link href="/local/punjab_chandigarh-news-hindi.html"><a onClick={handleClosePopup}>चंडीगढ़</a></Link></strong>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>F</strong></li>
                                            <li><strong><Link href="/local/punjab_fatehgarh-sahib-news-hindi.html"><a onClick={handleClosePopup}>फतेहगढ़
                                                साहिब</a></Link></strong></li>
                                            <li><strong><Link href="/local/punjab_fazilka-news-hindi.html"><a onClick={handleClosePopup}>फ़ज़िलका</a></Link></strong>
                                            </li>
                                            <li><strong><Link href="/local/punjab_firozpur-news-hindi.html"><a onClick={handleClosePopup}>फिरोजपुर</a></Link></strong>
                                            </li>
                                            <li><strong><Link href="/local/punjab_faridkot-news-hindi.html"><a onClick={handleClosePopup}>फरीदकोट</a></Link></strong>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>G</strong></li>
                                            <li><strong><Link href="/local/punjab_gurdaspur-news-hindi.html"><a onClick={handleClosePopup}>गुरदासपुर</a></Link></strong>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>H</strong></li>
                                            <li><strong><Link href="/local/punjab_hoshiarpur-news-hindi.html"><a onClick={handleClosePopup}>होशियारपुर</a></Link></strong>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>J</strong></li>
                                            <li><strong><Link href="/local/punjab_jalandhar-city-news-hindi.html"><a onClick={handleClosePopup}>जालंधर</a></Link></strong>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>K</strong></li>
                                            <li><strong><Link href="/local/punjab_kapurthala-news-hindi.html"><a onClick={handleClosePopup}>कपूरथला</a></Link></strong>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>L</strong></li>
                                            <li><strong><Link href="/local/punjab_ludhiana-news-hindi.html"><a onClick={handleClosePopup}>लुधियाना</a></Link></strong>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>M</strong></li>
                                            <li><strong><Link href="/local/punjab_muktsar-news-hindi.html"><a onClick={handleClosePopup}>मुक्तसर</a></Link></strong>
                                            </li>
                                            <li><strong><Link href="/local/punjab_mansa-news-hindi.html"><a onClick={handleClosePopup}>मानसा</a></Link></strong>
                                            </li>
                                            <li><strong><Link href="/local/punjab_moga-news-hindi.html"><a onClick={handleClosePopup}>मोगा</a></Link></strong></li>
                                        </ul>
                                        <ul>
                                            <li><strong>N</strong></li>
                                            <li><strong><Link href="/local/punjab_nawanshahr-news-hindi.html"><a onClick={handleClosePopup}>नवां
                                                शहर</a></Link></strong></li>
                                        </ul>
                                        <ul>
                                            <li><strong>P</strong></li>
                                            <li><strong><Link href="/local/punjab_patiala-news-hindi.html"><a onClick={handleClosePopup}>पटियाला</a></Link></strong>
                                            </li>
                                            <li><strong><Link href="/local/punjab_pathankot-news-hindi.html"><a onClick={handleClosePopup}>पठानकोट</a></Link></strong>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>R</strong></li>
                                            <li><strong><Link href="/local/punjab_ropar-news-hindi.html"><a
                                            >रोपड़</a></Link></strong>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>S</strong></li>
                                            <li><strong><Link href="/local/punjab_sangrur-news-hindi.html"><a
                                            >संगरूर</a></Link></strong>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>T</strong></li>
                                            <li><strong><Link href="/local/punjab_tarantaran-news-hindi.html"><a
                                            >तरनतारन</a></Link></strong>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <Link href="#"><a onClick={() => HaryanasetToggleView(!HaryanatoggleView)} className={`SubMenu ${HaryanatoggleView ? 'show' : 'HideMenu'}`}><svg><use href="#haryana"></use></svg><span>हरियाणा</span></a></Link>
                                <div className={`state-city ${HaryanatoggleView ? 'show' : 'HideMenu'}`}>
                                    {/* <div className="tophead-main">
                                        <div className="tophead">
                                            <span>आपका राज्य</span>
                                            <a href="#"  onClick={() => HaryanasetToggleView(!HaryanatoggleView)} className="closeCity"><svg><use href="#close"></use></svg></a>
                                        </div>
                                    </div> */}
                                    <div className="sub-drop">
                                        <h2 className="city-lable"><Link href="/state/haryana"><a onClick={handleClosePopup}>हरियाणा <svg><use href="#arrow-nav"></use></svg></a></Link> </h2>
                                        <ul>
                                            <li><strong>A</strong></li>
                                            <li><Link href="/local/haryana_ambala-news-hindi.html"><a onClick={handleClosePopup}>अंबाला</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>B</strong></li>
                                            <li><Link href="/local/haryana_bhiwani-news-hindi.html"><a onClick={handleClosePopup}>भिवानी</a></Link>
                                            </li>
                                            <li><Link href="/local/haryana_bahadurgarh-news-hindi.html"><a onClick={handleClosePopup}>बहादुरगढ़</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>C</strong></li>
                                            <li><Link href="/local/punjab_chandigarh-news-hindi.html"><a onClick={handleClosePopup}>चंडीगढ़</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>F</strong></li>
                                            <li><Link href="/local/haryana_faridabad-news-hindi.html"><a onClick={handleClosePopup}>फरीदाबाद</a></Link>
                                            </li>
                                            <li><Link href="/local/haryana_fatehabad-news-hindi.html"><a onClick={handleClosePopup}>फतेहाबाद</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>G</strong></li>
                                            <li><Link href="/local/haryana_gurgaon-news-hindi.html"><a onClick={handleClosePopup}>गुरुग्राम</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>H</strong></li>
                                            <li><Link href="/local/haryana_hisar-news-hindi.html"><a onClick={handleClosePopup}>हिसार</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>J</strong></li>
                                            <li><Link href="/local/haryana_jhajjar-news-hindi.html"><a onClick={handleClosePopup}>झज्जर</a></Link>
                                            </li>
                                            <li><Link href="/local/haryana_jind-news-hindi.html"><a onClick={handleClosePopup}>जींद</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>K</strong></li>
                                            <li><Link href="/local/haryana_kaithal-news-hindi.html"><a onClick={handleClosePopup}>कैथल</a></Link>
                                            </li>
                                            <li><Link href="/local/haryana_kurukshetra-news-hindi.html"><a onClick={handleClosePopup}>कुरुक्षेत्र</a></Link>
                                            </li>
                                            <li><Link href="/local/haryana_karnal-news-hindi.html"><a onClick={handleClosePopup}>करनाल</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>M</strong></li>
                                            <li><Link href="/local/haryana_mahendragarh-news-hindi.html"><a onClick={handleClosePopup}>महेंद्रगढ़</a></Link>
                                            </li>
                                            <li><Link href="/local/haryana_mewat-news-hindi.html"><a onClick={handleClosePopup}>मेवात</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>P</strong></li>
                                            <li><Link href="/local/haryana_panchkula-news-hindi.html"><a onClick={handleClosePopup}>पंचकुला</a></Link>
                                            </li>
                                            <li><Link href="/local/haryana_panipat-news-hindi.html"><a onClick={handleClosePopup}>पानीपत</a></Link>
                                            </li>
                                            <li><Link href="/local/haryana_palwal-news-hindi.html"><a onClick={handleClosePopup}>पलवल</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>R</strong></li>
                                            <li><Link href="/local/haryana_rohtak-news-hindi.html"><a onClick={handleClosePopup}>रोहतक</a></Link>
                                            </li>
                                            <li><Link href="/local/haryana_rewari-news-hindi.html"><a onClick={handleClosePopup}>रेवाड़ी</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>S</strong></li>
                                            <li><Link href="/local/haryana_sirsa-news-hindi.html"><a onClick={handleClosePopup}>सिरसा</a></Link>
                                            </li>
                                            <li><Link href="/local/haryana_sonipat-news-hindi.html"><a onClick={handleClosePopup}>सोनीपत</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>Y</strong></li>
                                            <li><Link href="/local/haryana_yamunanagar-news-hindi.html"><a onClick={handleClosePopup}>यमुनानगर</a></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li>
                            <Link href="#"><a onClick={() => UttarakhandsetToggleView(!UttarakhandtoggleView)}  className={`SubMenu ${UttarakhandtoggleView ? 'show' : 'HideMenu'}`}><svg><use href="#uttarakhand"></use></svg><span>उत्तराखंड</span></a></Link>
                                <div className={`state-city ${UttarakhandtoggleView ? 'show' : 'HideMenu'}`}>
                                    {/* <div className="tophead-main">
                                        <div className="tophead">
                                            <span>आपका राज्य</span>
                                            <a href="#"  onClick={() => UttarakhandsetToggleView(!UttarakhandtoggleView)} className="closeCity"><svg><use href="#close"></use></svg></a>
                                        </div>
                                    </div> */}
                                    <div className="sub-drop">
                                        <h2 className="city-lable"><Link href="/state/uttarakhand"><a onClick={handleClosePopup}>उत्तराखंड<svg><use href="#arrow-nav"></use></svg></a></Link> </h2>
                                                                 
                            <ul>
                              <li><strong>A</strong></li>
                              <li><Link href="/local/uttarakhand_almora-news-hindi.html"><a onClick={handleClosePopup}>अल्मोड़ा</a></Link></li>
                            </ul>
                            <ul>
                              <li><strong>B</strong></li>
                              <li><Link href="/local/uttarakhand_bageshwar-news-hindi.html"><a onClick={handleClosePopup}>बागेश्वर</a></Link></li>
                            </ul>
                            <ul>
                              <li><strong>C</strong></li>
                              <li><Link href="/local/uttarakhand_chamoli-news-hindi.html"><a onClick={handleClosePopup}>चमोली</a></Link></li>
                              <li><Link href="/local/uttarakhand_champawat-news-hindi.html"><a onClick={handleClosePopup}>चंपावत</a></Link></li>
                            </ul>
                          
                            <ul>
                              <li><strong>D</strong></li>
                              <li><Link href="/local/uttarakhand_dehradun-city-news-hindi.html"><a onClick={handleClosePopup}>देहरादून</a></Link></li>
                            </ul>
                            <ul>
                              <li><strong>H</strong></li>
                              <li><Link href="/local/uttarakhand_haridwar-news-hindi.html"><a onClick={handleClosePopup}>हरिद्वार</a></Link></li>
                            </ul>
                            <ul>
                              <li><strong>N</strong></li>
                              <li><Link href="/local/uttarakhand_nainital-news-hindi.html"><a onClick={handleClosePopup}>नैनीताल</a></Link></li>
                            </ul>
                          
                            <ul>
                              <li><strong>P</strong></li>
                              <li><Link href="/local/uttarakhand_pithoragarh-news-hindi.html"><a onClick={handleClosePopup}>पिथौरागढ़</a></Link></li>
                              <li><Link href="/local/uttarakhand_pauri-garhwal-news-hindi.html"><a onClick={handleClosePopup}>पौड़ी गढ़वाल</a></Link></li>
                            </ul>
                            <ul>
                              <li><strong>R</strong></li>
                              <li><Link href="/local/uttarakhand_rudraprayag-news-hindi.html"><a onClick={handleClosePopup}>रुद्रप्रयाग</a></Link></li>
                            </ul>
                            <ul>
                              <li><strong>T</strong></li>
                              <li><Link href="/local/uttarakhand_tehri-garhwal-news-hindi.html"><a onClick={handleClosePopup}>टिहरी गढ़वाल</a></Link></li>
                            </ul>
                          
                            <ul>
                              <li><strong>U</strong></li>
                              <li><Link href="/local/uttarakhand_uttarkashi-news-hindi.html"><a onClick={handleClosePopup}>उत्तरकाशी</a></Link></li>
                              <li><Link href="/local/uttarakhand_udhamsingh-nagar-news-hindi.html"><a onClick={handleClosePopup}>उधमसिंह नगर</a></Link></li>
                            </ul>
                                     </div>
                                </div>
                            </li>
                            <li>
                            <Link href="#"><a onClick={() => JharkhandsetToggleView(!JharkhandtoggleView)}  className={`SubMenu ${JharkhandtoggleView ? 'show' : 'HideMenu'}`}><svg><use href="#jharkhand"></use></svg><span>झारखण्ड</span></a></Link>
                                <div className={`state-city ${JharkhandtoggleView ? 'show' : 'HideMenu'}`}>
                                    {/* <div className="tophead-main">
                                        <div className="tophead">
                                            <span>आपका राज्य</span>
                                            <a href="#"  onClick={() => JharkhandsetToggleView(!JharkhandtoggleView)} className="closeCity"><svg><use href="#close"></use></svg></a>
                                        </div>
                                    </div> */}
                                    <div className="sub-drop">
                                        <h2 className="city-lable"><Link href="/state/jharkhand"><a onClick={handleClosePopup}>झारखण्ड<svg><use href="#arrow-nav"></use></svg></a></Link> </h2>
                                                                                
                                        <ul>
                                              <li><strong>B</strong></li>
                                              <li><Link href="/local/jharkhand_bokaro-news-hindi.html"><a onClick={handleClosePopup}>बोकारो</a></Link></li>
                                            </ul>
                                            <ul>
                                              <li><strong>C</strong></li>
                                              <li><Link href="/local/jharkhand_chatra-news-hindi.html"><a onClick={handleClosePopup}>चतरा</a></Link></li>
                                            </ul>
                                            <ul>
                                              <li><strong>D</strong></li>
                                              <li><Link href="/local/jharkhand_dhanbad-news-hindi.html"><a onClick={handleClosePopup}>धनबाद</a></Link></li>
                                              <li><Link href="/local/jharkhand_dumka-news-hindi.html"><a onClick={handleClosePopup}>दुमका</a></Link></li>
                                              <li><Link href="/local/jharkhand_deoghar-news-hindi.html"><a onClick={handleClosePopup}>देवघर</a></Link></li>
                                            </ul>
                                            <ul>
                                              <li><strong>G</strong></li>
                                              <li><Link href="/local/jharkhand_gumla-news-hindi.html"><a onClick={handleClosePopup}>गुमला</a></Link></li>
                                              <li><Link href="/local/jharkhand_giridih-news-hindi.html"><a onClick={handleClosePopup}>गिरीडीह</a></Link></li>
                                              <li><Link href="/local/jharkhand_godda-news-hindi.html"><a onClick={handleClosePopup}>गोड्डा</a></Link></li>
                                              <li><Link href="/local/jharkhand_garhwa-news-hindi.html"><a onClick={handleClosePopup}>गढ़वा</a></Link></li>
                                            </ul>
                                          
                                            <ul>
                                              <li><strong>H</strong></li>
                                              <li><Link href="/local/jharkhand_hazaribagh-news-hindi.html"><a onClick={handleClosePopup}>हजारीबाग</a></Link></li>
                                            </ul>
                                            <ul>
                                              <li><strong>j</strong></li>
                                              <li><Link href="/local/jharkhand_jamshedpur-news-hindi.html"><a onClick={handleClosePopup}>जमशेदपुर</a></Link></li>
                                              <li><Link href="/local/jharkhand_jamtara-news-hindi.html"><a onClick={handleClosePopup}>जामताड़ा</a></Link></li>
                                            </ul>
                                            <ul>
                                              <li><strong>K</strong></li>
                                              <li><Link href="/local/jharkhand_khunti-news-hindi.html"><a onClick={handleClosePopup}>खुंटी</a></Link></li>
                                              <li><Link href="/local/jharkhand_koderma-news-hindi.html"><a onClick={handleClosePopup}>कोडरमा</a></Link></li>
                                            </ul>
                                            <ul>
                                              <li><strong>L</strong></li>
                                              <li><Link href="/local/jharkhand_latehar-news-hindi.html"><a onClick={handleClosePopup}>लातेहार</a></Link></li>
                                              <li><Link href="/local/jharkhand_lohardaga-news-hindi.html"><a onClick={handleClosePopup}>लोहरदग्गा</a></Link></li>
                                            </ul>
                                          
                                            <ul>
                                              <li><strong>P</strong></li>
                                              <li><Link href="/local/jharkhand_pakur-news-hindi.html"><a onClick={handleClosePopup}>पाकुड़</a></Link></li>
                                              <li><Link href="/local/jharkhand_palamu-news-hindi.html"><a onClick={handleClosePopup}>पलामू</a></Link></li>
                                            </ul>
                                            <ul>
                                              <li><strong>R</strong></li>
                                              <li><Link href="/local/jharkhand_ramgarh-news-hindi.html"><a onClick={handleClosePopup}>रामगढ़</a></Link></li>
                                              <li><Link href="/local/jharkhand_ranchi-news-hindi.html"><a onClick={handleClosePopup}>रांची</a></Link></li>
                                            </ul>
                                            <ul>
                                              <li><strong>S</strong></li>
                                              <li><Link href="/local/jharkhand_sahibganj-news-hindi.html"><a onClick={handleClosePopup}>साहेबगंज</a></Link></li>
                                              <li><Link href="/local/jharkhand_seraikela-news-hindi.html"><a onClick={handleClosePopup}>सरायकेला</a></Link></li>
                                              <li><Link href="/local/jharkhand_simdega-news-hindi.html"><a onClick={handleClosePopup}>सिमडेगा</a></Link></li>
                                            </ul>
                                          
                                            <ul>
                                              <li><strong>W</strong></li>
                                              <li><Link href="/local/jharkhand_west-singhbhum-news-hindi.html"><a onClick={handleClosePopup}>पश्चिमी सिंहभूम</a></Link></li>
                                            </ul>

                                     </div>
                                </div>
                            </li>
                            <li>
                            <Link href="#"><a onClick={() => ChhattisgarhsetToggleView(!ChhattisgarhtoggleView)}   className={`SubMenu ${ChhattisgarhtoggleView ? 'show' : 'HideMenu'}`}><svg><use href="#chhattisgarh"></use></svg><span>छत्तीसगढ़</span></a></Link>
                                <div className={`state-city ${ChhattisgarhtoggleView ? 'show' : 'HideMenu'}`}>
                                    {/* <div className="tophead-main">
                                        <div className="tophead">
                                            <span>आपका राज्य</span>
                                            <a href="#"  onClick={() => ChhattisgarhsetToggleView(!ChhattisgarhtoggleView)} className="closeCity"><svg><use href="#close"></use></svg></a>
                                        </div>
                                    </div> */}
                                    <div className="sub-drop">
                                        <h2 className="city-lable"><Link href="/state/chhattisgarh"><a onClick={handleClosePopup}>छत्तीसगढ़<svg><use href="#arrow-nav"></use></svg></a></Link> </h2>
                                        
                                        <ul>
                                  <li><strong>A</strong></li>
                                  <li><Link href="https://www.naidunia.com/chhattisgarh/ambikapur"><a onClick={handleClosePopup}>अंबिकापुर</a></Link></li>
                                </ul>
                                <ul>
                                  <li><strong>B</strong></li>
                                  <li><Link href="https://www.naidunia.com/chhattisgarh/bhilai"><a onClick={handleClosePopup}>भिलाई</a></Link></li>
                                  <li><Link href="https://naidunia.jagran.com/chhattisgarh/bilaspur"><a onClick={handleClosePopup}>बिलास पुर</a></Link></li>
                                </ul>
                                <ul>
                                  <li><strong>K</strong></li>
                                  <li><Link href="https://www.naidunia.com/chhattisgarh/korba"><a onClick={handleClosePopup}>कोरबा</a></Link></li>
                                </ul>
                              
                                <ul>
                                  <li><strong>J</strong></li>
                                  <li><Link href="https://www.naidunia.com/chhattisgarh/jashpur"><a onClick={handleClosePopup}>जशपुर</a></Link></li>
                                  <li><Link href="https://www.naidunia.com/chhattisgarh/janjgir-champa"><a onClick={handleClosePopup}>जांजगीर चांपा</a></Link></li>
                                </ul>
                                <ul>
                                  <li><strong>R</strong></li>
                                  <li><Link href="https://naidunia.jagran.com/chhattisgarh/raipur"><a onClick={handleClosePopup}>रायपुर</a></Link></li>
                                  <li><Link href="https://naidunia.jagran.com/chhattisgarh/raigarh"><a onClick={handleClosePopup}>रायगढ़</a></Link></li>
                                  <li><Link href="https://www.naidunia.com/chhattisgarh/rajnandgaon"><a onClick={handleClosePopup}>राजनांदगांव</a></Link></li>
                                </ul>
                           

                                     </div>
                                </div>
                            </li>
                            <li>
                            <Link href="#"><a onClick={() => MPsetToggleView(!MPtoggleView)}   className={`SubMenu ${MPtoggleView ? 'show' : 'HideMenu'}`}><svg><use href="#madhya-pradesh"></use></svg><span>मध्य प्रदेश</span></a></Link>
                                <div className={`state-city ${MPtoggleView ? 'show' : 'HideMenu'}`}>
                                    {/* <div className="tophead-main">
                                        <div className="tophead">
                                            <span>आपका राज्य</span>
                                            <a href="#"  onClick={() => MPsetToggleView(!MPtoggleView)} className="closeCity"><svg><use href="#close"></use></svg></a>
                                        </div>
                                    </div> */}
                                    <div className="sub-drop">
                                        <h2 className="city-lable"><Link href="/state/madhya-pradesh"><a onClick={handleClosePopup}>मध्य प्रदेश<svg><use href="#arrow-nav"></use></svg></a></Link> </h2>
                                                                        
                                    <ul>
                                      <li><strong>B</strong></li>
                                      <li><Link href="https://naidunia.jagran.com/madhya-pradesh/bhopal"><a onClick={handleClosePopup}>भोपाल</a></Link></li>
                                      <li><Link href="https://www.naidunia.com/madhya-pradesh/bhind"><a onClick={handleClosePopup}>भिंड</a></Link></li>
                                    </ul>
                                    <ul>
                                      <li>C</li>
                                      <li><Link href="https://www.naidunia.com/madhya-pradesh/chhatarpur"><a onClick={handleClosePopup}>छतरपुर</a></Link></li>
                                    </ul>
                                    <ul>
                                      <li>D</li>
                                      <li><Link href="https://www.naidunia.com/madhya-pradesh/damoh"><a onClick={handleClosePopup}>दमोह</a></Link></li>
                                    </ul>
                                  
                                    <ul>
                                      <li><strong>G</strong></li>
                                      <li><Link href="https://www.naidunia.com/madhya-pradesh/gwalior"><a onClick={handleClosePopup}>ग्वालियर</a></Link></li>
                                    </ul>
                                    <ul>
                                      <li><strong>I</strong></li>
                                      <li><Link href="https://www.naidunia.com/madhya-pradesh/indore"><a onClick={handleClosePopup}>इंदौर</a></Link></li>
                                    </ul>
                                  
                                    <ul>
                                      <li><strong>J</strong></li>
                                      <li><Link href="https://www.naidunia.com/madhya-pradesh/jabalpur"><a onClick={handleClosePopup}>जबलपुर</a></Link></li>
                                    </ul>
                                    <ul>
                                      <li><strong>S</strong></li>
                                      <li><Link href="https://www.naidunia.com/madhya-pradesh/shivpuri"><a onClick={handleClosePopup}>शिवपुरी</a></Link></li>
                                    </ul>
                                     </div>
                                </div>
                            </li>
                            <li>
                            <Link href="#"><a onClick={() => HPsetToggleView(!HPtoggleView)}   className={`SubMenu ${HPtoggleView ? 'show' : 'HideMenu'}`}><svg><use href="#himachal-pradesh"></use></svg><span>हिमाचल प्रदेश</span></a></Link>
                                <div className={`state-city ${HPtoggleView ? 'show' : 'HideMenu'}`}>
                                    {/* <div className="tophead-main">
                                        <div className="tophead">
                                            <span>आपका राज्य</span>
                                            <a href="#"  onClick={() => HPsetToggleView(!HPtoggleView)} className="closeCity"><svg><use href="#close"></use></svg></a>
                                        </div>
                                    </div> */}
                                    <div className="sub-drop">
                                        <h2 className="city-lable"><Link href="/state/himachal-pradesh"><a onClick={handleClosePopup}>हिमाचल प्रदेश<svg><use href="#arrow-nav"></use></svg></a></Link> </h2>
                                        <ul>
                                          <li><strong>B</strong></li>
                                          <li><Link href="/local/himachal-pradesh_bilaspur-hp-news-hindi.html"><a onClick={handleClosePopup}>बिलासपुर</a></Link></li>
                                        </ul>
                                        <ul>
                                          <li><strong>C</strong></li>
                                          <li><Link href="/local/himachal-pradesh_chamba-news-hindi.html"><a onClick={handleClosePopup}>चंबा</a></Link></li>
                                        </ul>
                                        <ul>
                                          <li><strong>D</strong></li>
                                          <li><Link href="/local/himachal-pradesh_dharmshala-news-hindi.html"><a onClick={handleClosePopup}>धर्मशाला</a></Link></li>
                                        </ul>
                                      
                                        <ul>
                                          <li><strong>H</strong></li>
                                          <li><Link href="/local/himachal-pradesh_hamirpur-hp-news-hindi.html"><a onClick={handleClosePopup}>हमीर पुर</a></Link></li>
                                        </ul>
                                        <ul>
                                          <li><strong>K</strong></li>
                                          <li><Link href="/local/himachal-pradesh_kangra-news-hindi.html"><a onClick={handleClosePopup}>कांगड़ा</a></Link></li>
                                          <li><Link href="/local/himachal-pradesh_kullu-news-hindi.html"><a onClick={handleClosePopup}>कुल्लू</a></Link></li>
                                        </ul>
                                      
                                        <ul>
                                          <li><strong>M</strong></li>
                                          <li><Link href="/local/himachal-pradesh_mandi-news-hindi.html"><a onClick={handleClosePopup}>मंडी</a></Link></li>
                                        </ul>
                                        <ul>
                                          <li><strong>S</strong></li>
                                          <li><Link href="/local/himachal-pradesh_shimla-news-hindi.html"><a onClick={handleClosePopup}>शिमला</a></Link></li>
                                          <li><Link href="/local/himachal-pradesh_sirmaur-news-hindi.html"><a onClick={handleClosePopup}>सिरमौर</a></Link></li>
                                          <li><Link href="/local/himachal-pradesh_solan-news-hindi.html"><a onClick={handleClosePopup}>सोलन</a></Link></li>
                                        </ul>
                                      
                                        <ul>
                                          <li><strong>U</strong></li>
                                          <li><Link href="/local/himachal-pradesh_una-news-hindi.html"><a onClick={handleClosePopup}>ऊना</a></Link></li>
                                        </ul>
                             
                                     
                                     </div>
                                </div>
                            </li>
                            <li>
                            <Link href="#"><a onClick={() => JKsetToggleView(!JKtoggleView)}   className={`SubMenu ${JKtoggleView ? 'show' : 'HideMenu'}`}><svg><use href="#jammu-and-kashmir"></use></svg><span>जम्मू-कश्मीर</span></a></Link>
                                <div className={`state-city ${JKtoggleView ? 'show' : 'HideMenu'}`}>
                                    {/* <div className="tophead-main">
                                        <div className="tophead">
                                            <span>आपका राज्य</span>
                                            <a href="#"  onClick={() => JKsetToggleView(!JKtoggleView)} className="closeCity"><svg><use href="#close"></use></svg></a>
                                        </div>
                                    </div> */}
                                    <div className="sub-drop">
                                        <h2 className="city-lable"><Link href="/state/jammu-and-kashmir"><a onClick={handleClosePopup}>जम्मू-कश्मीर <svg><use href="#arrow-nav"></use></svg></a></Link> </h2>
                                            
                                        <ul>
                                          <li><strong>J</strong></li>
                                          <li><Link href="/local/jammu-and-kashmir_jammu-news-hindi.html"><a onClick={handleClosePopup}>जम्मू</a></Link></li>
                                        </ul>
                                        <ul>
                                          <li><strong>K</strong></li>
                                          <li><Link href="/local/jammu-and-kashmir_kathua-news-hindi.html"><a onClick={handleClosePopup}>कठुआ</a></Link></li>
                                        </ul>
                                         <ul>
                                          <li><strong>P</strong></li>
                                          <li><Link href="/local/jammu-and-kashmir_poonch-news-hindi.html"><a onClick={handleClosePopup}>पुंछ</a></Link></li>
                                        </ul>
                                        <ul>
                                          <li><strong>R</strong></li>
                                          <li><Link href="/local/jammu-and-kashmir_rajouri-news-hindi.html"><a onClick={handleClosePopup}>रजौरी</a></Link></li>
                                        </ul>
                                      
                                         <ul>
                                          <li><strong>S</strong></li>
                                          <li><Link href="/local/jammu-and-kashmir_srinagar-news-hindi.html"><a onClick={handleClosePopup}>श्रीनगर</a></Link></li>
                                        </ul>
                                     
                                        <ul>
                                          <li><strong>U</strong></li>
                                          <li><Link href="/local/jammu-and-kashmir_udhampur-news-hindi.html"><a onClick={handleClosePopup}>ऊधमपुर</a></Link></li>
                                        </ul>  
                       
                                     </div>
                                </div>
                            </li>
                            <li>
                            <Link href="#"><a onClick={() => WBsetToggleView(!WBtoggleView)}   className={`SubMenu ${WBtoggleView ? 'show' : 'HideMenu'}`}><svg><use href="#west-bengal"></use></svg><span>पश्चिम बंगाल</span></a></Link>
                                <div className={`state-city ${WBtoggleView ? 'show' : 'HideMenu'}`}>
                                    {/* <div className="tophead-main">
                                        <div className="tophead">
                                            <span>आपका राज्य</span>
                                            <a href="#"  onClick={() => WBsetToggleView(!WBtoggleView)} className="closeCity"><svg><use href="#close"></use></svg></a>
                                        </div>
                                    </div> */}
                                    <div className="sub-drop">
                                        <h2 className="city-lable"><Link href="/state/west-bengal"><a onClick={handleClosePopup}>पश्चिम बंगाल <svg><use href="#arrow-nav"></use></svg></a></Link> </h2>
                                
                                        <ul>
                                      <li><strong>B</strong></li>
                                      <li><Link href="/local/west-bengal_bardhaman-news-hindi.html"><a onClick={handleClosePopup}>ब‌र्द्धमान</a></Link></li>
                                    </ul>
                                    <ul>
                                      <li><strong>C</strong></li>
                                      <li><Link href="/local/west-bengal_cooch-behar-news-hindi.html"><a onClick={handleClosePopup}>कूचबिहार</a></Link></li>
                                    </ul>
                                    <ul>
                                      <li><strong>D</strong></li>
                                      <li><Link href="/local/west-bengal_darjeeling-news-hindi.html"><a onClick={handleClosePopup}>दार्जिलिंग</a></Link></li>
                                      <li><Link href="/local/west-bengal_dakshin-dinajpur-news-hindi.html"><a onClick={handleClosePopup}>दक्षिण दिनाजपुर</a></Link></li>
                                    </ul>
                                  
                                  
                                    <ul>
                                      <li><strong>J</strong></li>
                                      <li><Link href="/local/west-bengal_jalpaiguri-news-hindi.html"><a onClick={handleClosePopup}>जलपाईगुड़ी</a></Link></li>
                                    </ul>
                                    <ul>
                                      <li><strong>K</strong></li>
                                      <li><Link href="/local/west-bengal_kolkata-news-hindi.html"><a onClick={handleClosePopup}>कोलकाता</a></Link></li>
                                      <li><Link href="/local/west-bengal_khadagpur-news-hindi.html"><a onClick={handleClosePopup}>खड़गपुर</a></Link></li>
                                    </ul>
                                  
                                    <ul>
                                      <li><strong>M</strong></li>
                                      <li><Link href="/local/west-bengal_malda-news-hindi.html"><a onClick={handleClosePopup}>मालदा</a></Link></li>
                                      <li><Link href="/local/west-bengal_medinipur-news-hindi.html"><a onClick={handleClosePopup}>मेदिनीपुर</a></Link></li>
                                    </ul>
                                    <ul>
                                      <li><strong>P</strong></li>
                                      <li><Link href="/local/west-bengal_purulia-news-hindi.html"><a onClick={handleClosePopup}>पुरुलिया</a></Link></li>
                                    </ul>
                                  
                                    <ul>
                                      <li><strong>U</strong></li>
                                      <li><Link href="/local/west-bengal_uttar-dinajpur-news-hindi.html"><a onClick={handleClosePopup}>उत्तरी दिनाजपुर</a></Link></li>
                                    </ul>

                                     
                                     </div>
                                </div>
                            </li>
                            

                            <li>
                            <Link href="#"><a onClick={() => OdishasetToggleView(!OdishatoggleView)}  className={`SubMenu ${OdishatoggleView ? 'show' : 'HideMenu'}`}><svg><use href="#odisha"></use></svg><span>ओडिशा </span></a></Link>
                                <div className={`state-city ${OdishatoggleView ? 'show' : 'HideMenu'}`}>
                                    {/* <div className="tophead-main">
                                        <div className="tophead">
                                            <span>आपका राज्य</span>
                                            <a href="#"  onClick={() => OdishasetToggleView(!OdishatoggleView)} className="closeCity"><svg><use href="#close"></use></svg></a>
                                        </div>
                                    </div> */}
                                    <div className="sub-drop">
                                        <h2 className="city-lable"><Link href="/state/odisha"><a onClick={handleClosePopup}>ओडिशा <svg><use href="#arrow-nav"></use></svg></a></Link> </h2>
                        
                                <ul>
                                  <li><strong>B</strong></li>
                                  <li><Link href="/local/odisha_baleshwar-news-hindi.html"><a onClick={handleClosePopup}>बालेश्वर</a></Link></li>
                                  <li><Link href="/local/odisha_bhubaneshwar-news-hindi.html"><a onClick={handleClosePopup}>भुवनेश्वर</a></Link></li>
                                </ul>
                                <ul>
                                  <li><strong>C</strong></li>
                                  <li><Link href="/local/odisha_cuttack-news-hindi.html"><a onClick={handleClosePopup}>कटक</a></Link></li>
                                </ul>
                  
                                <ul>
                                  <li><strong>J</strong></li>
                                  <li><Link href="/local/odisha_jharsuguda-news-hindi.html"><a onClick={handleClosePopup}>झरसुगुड्डा</a></Link></li>
                                </ul>
                                <ul>
                                  <li><strong>K</strong></li>
                                  <li><Link href="/local/odisha_khordha-news-hindi.html"><a onClick={handleClosePopup}>खोरधा</a></Link></li>
                                </ul>
                              
                                <ul>
                                  <li><strong>P</strong></li>
                                  <li><Link href="/local/odisha_puri-news-hindi.html"><a onClick={handleClosePopup}>पुरी</a></Link></li>
                                </ul>
                                <ul>
                                  <li><strong>R</strong></li>
                                  <li><Link href="/local/odisha_rourkela-news-hindi.html"><a onClick={handleClosePopup}>राऊरकेला</a></Link></li>
                                </ul>

                                <ul>
                                  <li><strong>S</strong></li>
                                  <li><Link href="/local/odisha_sundergarh-news-hindi.html"><a onClick={handleClosePopup}>सुंदरगढ़</a></Link></li>
                                  <li><Link href="/local/odisha_sambalpur-news-hindi.html"><a onClick={handleClosePopup}>सम्बलपुर</a></Link></li>
                                </ul>
           
                                     </div>
                                </div>
                            </li>
                            <li>
                            <Link href="#"><a onClick={() => MaharashtrasetToggleView(!MaharashtratoggleView)}  className={`SubMenu ${MaharashtratoggleView ? 'show' : 'HideMenu'}`}><svg><use href="#maharashtra"></use></svg><span>महाराष्ट्र</span></a></Link>
                                <div className={`state-city ${MaharashtratoggleView ? 'show' : 'HideMenu'}`}>
                                    {/* <div className="tophead-main">
                                        <div className="tophead">
                                            <span>आपका राज्य</span>
                                            <a href="#"  onClick={() => MaharashtrasetToggleView(!MaharashtratoggleView)} className="closeCity"><svg><use href="#close"></use></svg></a>
                                        </div>
                                    </div> */}
                                    <div className="sub-drop">
                                        <h2 className="city-lable"><Link href="/local/maharashtra-news-hindi.html"><a onClick={handleClosePopup}>महाराष्ट्र<svg><use href="#arrow-nav"></use></svg></a></Link> </h2>
                        
                                        <ul>
                              <li><strong>M</strong></li>
                              <li><Link href="/local/maharashtra_mumbai-news-hindi.html"><a onClick={handleClosePopup}>मुंबई</a></Link></li>
                            </ul>
                          
                            <ul>
                              <li><strong>N</strong></li>
                              <li><Link href="/local/maharashtra_nagpur-news-hindi.html"><a onClick={handleClosePopup}>नागपूर</a></Link></li>
                            </ul>
                          
                            <ul>
                              <li><strong>K</strong></li>
                              <li><Link href="/local/maharashtra_pune-news-hindi.html"><a onClick={handleClosePopup}>पुणे</a></Link></li>
                            </ul>

           
                                     </div>
                                </div>
                            </li>
                            <li>
                            <Link href="#"><a onClick={() => GujaratsetToggleView(!GujarattoggleView)}  className={`SubMenu ${GujarattoggleView ? 'show' : 'HideMenu'}`}><svg><use href="#gujarat"></use></svg><span>गुजरात </span></a></Link>
                                <div className={`state-city ${MaharashtratoggleView ? 'show' : 'HideMenu'}`}>
                                    {/* <div className="tophead-main">
                                        <div className="tophead">
                                            <span>आपका राज्य</span>
                                            <a href="#"  onClick={() => GujaratsetToggleView(!GujarattoggleView)} className="closeCity"><svg><use href="#close"></use></svg></a>
                                        </div>
                                    </div> */}
                                    <div className="sub-drop">
                                        <h2 className="city-lable"><Link href="/local/gujarat-news-hindi.html"><a onClick={handleClosePopup}>गुजरात<svg><use href="#arrow-nav"></use></svg></a></Link> </h2>
                                        <ul>
                              <li><strong>A</strong></li>
                              <li><Link href="/local/gujarat_ahmedabad-news-hindi.html"><a onClick={handleClosePopup}>अहमदाबाद</a></Link></li>
                            </ul>
                           
                            <ul>
                              <li><strong>S</strong></li>
                              <li><Link href="/local/gujarat_surat-news-hindi.html"><a onClick={handleClosePopup}>सूरत</a></Link></li>
                            </ul>
                           
                            <ul>
                              <li><strong>v</strong></li>
                              <li><Link href="/local/gujarat_vadodara-news-hindi.html"><a onClick={handleClosePopup}>बड़ोदरा</a></Link></li>
                            </ul> 
                             </div>
                                </div>
                            </li>
                            <li>
                            <Link href="#"><a onClick={() => RajasthansetToggleView(!RajasthantoggleView)} className={`SubMenu ${RajasthantoggleView ? 'show' : 'HideMenu'}`}><svg><use href="#rajasthan"></use></svg><span>राजस्थान</span></a></Link>
                                <div className={`state-city ${RajasthantoggleView ? 'show' : 'HideMenu'}`}>
                                    {/* <div className="tophead-main">
                                        <div className="tophead">
                                            <span>आपका राज्य</span>
                                            <a href="#"  onClick={() => RajasthansetToggleView(!RajasthantoggleView)} className="closeCity"><svg><use href="#close"></use></svg></a>
                                        </div>
                                    </div> */}
                                    <div className="sub-drop">
                                        <h2 className="city-lable"><Link href="/local/rajasthan-news-hindi.html"><a onClick={handleClosePopup}>राजस्थान<svg><use href="#arrow-nav"></use></svg></a></Link> </h2>
                                        <ul>
                              <li><strong>A</strong></li>
                              <li><Link href="/local/gujarat_ahmedabad-news-hindi.html"><a onClick={handleClosePopup}>अहमदाबाद</a></Link></li>
                            </ul>
                           
                            <ul>
                              <li><strong>S</strong></li>
                              <li><Link href="/local/gujarat_surat-news-hindi.html"><a onClick={handleClosePopup}>सूरत</a></Link></li>
                            </ul>
                           
                            <ul>
                              <li><strong>v</strong></li>
                              <li><Link href="/local/gujarat_vadodara-news-hindi.html"><a onClick={handleClosePopup}>बड़ोदरा</a></Link></li>
                            </ul> 
                             </div>
                                </div>
                            </li>
                        </ul>
                    </div>

{/* Select City ------------------------------- */}

        </div>
    </div>
    );
}

export default ChooseState; 