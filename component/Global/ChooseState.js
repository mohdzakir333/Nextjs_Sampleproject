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
                                <Link href="#"><a onClick={() => UPsetToggleView(!UPtoggleView)} className={`SubMenu ${UPtoggleView ? 'show' : 'HideMenu'}`}><svg><use href="#uttar-pradesh"></use></svg><span>??????????????? ??????????????????</span></a></Link>
                                                                 
                                <div className={`state-city ${UPtoggleView ? 'show' : 'HideMenu'}`}>
                                    {/* <div className="tophead-main">
                                        <div className="tophead">
                                            <span>???????????? ???????????????</span>
                                           <a href='#' onClick={() => UPsetToggleView(!UPtoggleView)} className="closeCity" ><svg><use href="#close"></use></svg></a> 
                                        </div>
                                    </div> */}
                                    <div className="sub-drop">
                                        <h2 className="city-lable"> <Link href="/state/uttar-pradesh"><a onClick={handleClosePopup}>??????????????? ?????????????????? <svg><use href="#arrow-nav"></use></svg></a></Link> </h2>
                                        <ul>
                                            <li><strong>A</strong></li>
                                            <li><Link href="/local/uttar-pradesh_amethi-news-hindi.html"><a onClick={handleClosePopup}>???????????????</a></Link></li>
                                            <li><Link href="/local/uttar-pradesh_agra-city-news-hindi.html"><a onClick={handleClosePopup}>????????????</a></Link></li>
                                            <li><Link href="/local/uttar-pradesh_aligarh-city-news-hindi.html"><a onClick={handleClosePopup}>??????????????????</a></Link></li>
                                            <li><Link href="/local/uttar-pradesh_allahabad-city-news-hindi.html"><a onClick={handleClosePopup}>???????????????????????????</a></Link></li>
                                            <li><Link href="/local/uttar-pradesh_amroha-city-news-hindi.html"><a onClick={handleClosePopup}>??????????????????</a></Link></li>
                                            <li><Link href="/local/uttar-pradesh_ambedkarnagar-news-hindi.html"><a onClick={handleClosePopup}>??????????????????????????????</a></Link></li>
                                            <li><Link href="/local/uttar-pradesh_auraiya-news-hindi.html"><a onClick={handleClosePopup}>???????????????</a></Link></li>
                                            <li><Link href="/local/uttar-pradesh_azamgarh-news-hindi.html"><a onClick={handleClosePopup}>??????????????????</a></Link></li>
                                        </ul>
                                       <ul>
                                            <li><strong>B</strong></li>
                                            <li><Link href="/local/uttar-pradesh_badaun-news-hindi.html"><a onClick={handleClosePopup}>??????????????????</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_bagpat-news-hindi.html"><a onClick={handleClosePopup}>???????????????</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_bahraich-news-hindi.html"><a onClick={handleClosePopup}>??????????????????</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_ballia-news-hindi.html"><a onClick={handleClosePopup}>???????????????</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_balrampur-news-hindi.html"><a onClick={handleClosePopup}>????????????????????????</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_banda-news-hindi.html"><a onClick={handleClosePopup}>???????????????</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_barabanki-news-hindi.html"><a onClick={handleClosePopup}>????????????????????????</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_bareilly-city-news-hindi.html"><a onClick={handleClosePopup}>???????????????</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_basti-news-hindi.html"><a onClick={handleClosePopup}>???????????????</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_bhadohi-news-hindi.html"><a onClick={handleClosePopup}>???????????????</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_bijnor-news-hindi.html"><a onClick={handleClosePopup}>??????????????????</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_bulandshahr-news-hindi.html"><a onClick={handleClosePopup}>????????????????????????</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>C</strong></li>
                                            <li><Link href="/local/uttar-pradesh_chandauli-news-hindi.html"><a onClick={handleClosePopup}>??????????????????</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_chitrakoot-news-hindi.html"><a onClick={handleClosePopup}>????????????????????????</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>D</strong></li>
                                            <li><Link href="/local/uttar-pradesh_deoria-news-hindi.html"><a onClick={handleClosePopup}>?????????????????????</a></Link>
                                            </li>
                                        </ul>
                                         <ul>
                                            <li><strong>E</strong></li>
                                            <li><Link href="/local/uttar-pradesh_etawah-news-hindi.html"><a onClick={handleClosePopup}>???????????????</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_etah-news-hindi.html"><a onClick={handleClosePopup}>?????????</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>F</strong> </li>
                                            <li><Link href="/local/uttar-pradesh_faizabad-news-hindi.html"><a onClick={handleClosePopup}>?????????????????????</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_fatehpur-news-hindi.html"><a onClick={handleClosePopup}>?????????????????????</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_farrukhabad-news-hindi.html"><a onClick={handleClosePopup}>??????????????????????????????</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_firozabad-news-hindi.html"><a onClick={handleClosePopup}>???????????????????????????</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>G</strong></li>
                                            <li><Link href="/local/uttar-pradesh_ghaziabad-news-hindi.html"><a onClick={handleClosePopup}>???????????????????????????</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_ghazipur-news-hindi.html"><a onClick={handleClosePopup}>?????????????????????</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_gonda-news-hindi.html"><a onClick={handleClosePopup}>???????????????</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_gorakhpur-city-news-hindi.html"><a onClick={handleClosePopup}>?????????????????????</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>H</strong></li>
                                            <li><Link href="/local/uttar-pradesh_hamirpur-up-news-hindi.html"><a onClick={handleClosePopup}>?????????????????????</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_hapur-city-news-hindi.html"><a onClick={handleClosePopup}>??????????????????</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_hardoi-news-hindi.html"><a onClick={handleClosePopup}>???????????????</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_hathras-news-hindi.html"><a onClick={handleClosePopup}>???????????????</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>J</strong></li>
                                            <li><Link href="/local/uttar-pradesh_jalaun-news-hindi.html"><a onClick={handleClosePopup}>???????????????</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_jaunpur-news-hindi.html"><a onClick={handleClosePopup}>??????????????????</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_jhansi-city-news-hindi.html"><a onClick={handleClosePopup}>???????????????</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_jyotiba-phule-nagar-news-hindi.html"><a onClick={handleClosePopup}>????????????????????????????????????
                                                ?????????</a></Link></li>
                                        </ul>
                                        <ul>
                                            <li><strong>K</strong></li>
                                            <li><Link href="/local/uttar-pradesh_kannauj-news-hindi.html"><a onClick={handleClosePopup}>??????????????????</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_kanpur-city-news-hindi.html"><a onClick={handleClosePopup}>??????????????????</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_kanpur-dehat-news-hindi.html"><a onClick={handleClosePopup}>??????????????????
                                                ???????????????</a></Link></li>
                                            <li><Link href="/local/uttar-pradesh_kaushambi-news-hindi.html"><a onClick={handleClosePopup}>?????????????????????</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_kasganj-news-hindi.html"><a onClick={handleClosePopup}>??????????????????</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>L</strong></li>
                                            <li><Link href="/local/uttar-pradesh_lakhimpur-kheri-news-hindi.html"><a onClick={handleClosePopup}>?????????????????????
                                                ????????????</a></Link></li>
                                            <li><Link href="/local/uttar-pradesh_lucknow-city-news-hindi.html"><a onClick={handleClosePopup}>????????????</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_lalitpur-news-hindi.html"><a onClick={handleClosePopup}>?????????????????????</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>M</strong></li>
                                            <li><Link href="/local/uttar-pradesh_maharajganj-news-hindi.html"><a onClick={handleClosePopup}>???????????????????????????</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_mahoba-news-hindi.html"><a onClick={handleClosePopup}>???????????????</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_mainpuri-news-hindi.html"><a onClick={handleClosePopup}>?????????????????????</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_mathura-news-hindi.html"><a onClick={handleClosePopup}>???????????????</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_mau-news-hindi.html"><a onClick={handleClosePopup}>??????</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_meerut-city-news-hindi.html"><a onClick={handleClosePopup}>????????????</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_mirzapur-news-hindi.html"><a onClick={handleClosePopup}>???????????????????????????</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_moradabad-city-news-hindi.html"><a onClick={handleClosePopup}>???????????????????????????</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_muzaffarnagar-news-hindi.html"><a onClick={handleClosePopup}>??????????????????????????????</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>N</strong></li>
                                            <li><Link href="/local/uttar-pradesh_noida-news-hindi.html"><a onClick={handleClosePopup}>???????????????</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>P</strong></li>
                                            <li><Link href="/local/uttar-pradesh_pratapgarh-news-hindi.html"><a onClick={handleClosePopup}>???????????????????????????</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_pilibhit-news-hindi.html"><a onClick={handleClosePopup}>?????????????????????</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>R</strong></li>
                                            <li><Link href="/local/uttar-pradesh_raebareli-news-hindi.html"><a onClick={handleClosePopup}>????????????????????????</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_rampur-news-hindi.html"><a onClick={handleClosePopup}>??????????????????</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>S</strong></li>
                                            <li><Link href="/local/uttar-pradesh_sant-kabir-nagar-news-hindi.html"><a onClick={handleClosePopup}>?????????
                                                ???????????? ?????????</a></Link></li>
                                            <li><Link href="/local/uttar-pradesh_shahjahanpur-news-hindi.html"><a onClick={handleClosePopup}>??????????????????????????????</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_shravasti-news-hindi.html"><a onClick={handleClosePopup}>???????????????????????????</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_sidharth-nagar-news-hindi.html"><a onClick={handleClosePopup}>???????????????????????????
                                                ?????????</a></Link></li>
                                            <li><Link href="/local/uttar-pradesh_sitapur-news-hindi.html"><a onClick={handleClosePopup}>?????????????????????</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_sonbhadra-news-hindi.html"><a onClick={handleClosePopup}>?????????????????????</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_sultanpur-news-hindi.html"><a onClick={handleClosePopup}>???????????????????????????</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_saharanpur-news-hindi.html"><a onClick={handleClosePopup}>????????????????????????</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_shamli-city-news-hindi.html"><a onClick={handleClosePopup}>???????????????</a></Link>
                                            </li>
                                            <li><Link href="/local/uttar-pradesh_sambhal-city-news-hindi.html"><a onClick={handleClosePopup}>????????????</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>U</strong></li>
                                            <li><Link href="/local/uttar-pradesh_unnao-news-hindi.html"><a onClick={handleClosePopup}>??????????????????</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>V</strong></li>
                                            <li><Link href="/local/uttar-pradesh_varanasi-city-news-hindi.html"><a onClick={handleClosePopup}>?????????????????????</a></Link>
                                            </li>
                                        </ul>  
                                    </div>
                                </div>
                            </li>
                            <li> 
                                <Link href="#"><a onClick={() => BiharsetToggleView(!BihartoggleView)}  className={`SubMenu ${BihartoggleView ? 'show' : 'HideMenu'}`}><svg><use href="#bihar"></use></svg><span>???????????????</span></a></Link>
                                <div className={`state-city ${BihartoggleView ? 'show' : 'HideMenu'}`}>
                                    {/* <div className="tophead-main">
                                        <div className="tophead">
                                            <span>???????????? ???????????????</span>
                                            <a href="#" onClick={() => BiharsetToggleView(!BihartoggleView)} className="closeCity"><svg><use href="#close"></use></svg></a>
                                        </div>
                                    </div> */}
                                    <div className="sub-drop">
                                        <h2 className="city-lable"><Link href="/state/bihar"><a onClick={handleClosePopup}>??????????????? <svg><use href="#arrow-nav"></use></svg></a></Link> </h2>
                                        <ul>
                                            <li><strong>A</strong></li>
                                            <li><Link href="/local/bihar_araria-news-hindi.html"><a onClick={handleClosePopup}>??????????????????</a></Link>
                                            </li>
                                            <li><Link href="/local/bihar_arwal-news-hindi.html"><a onClick={handleClosePopup}>????????????</a></Link>
                                            </li>
                                            <li><Link href="/local/bihar_aurangabad-news-hindi.html"><a onClick={handleClosePopup}>????????????????????????</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>B</strong></li>
                                            <li><Link href="/local/bihar_bhagalpur-news-hindi.html"><a onClick={handleClosePopup}>?????????????????????</a></Link>
                                            </li>
                                            <li><Link href="/local/bihar_begusarai-news-hindi.html"><a onClick={handleClosePopup}>????????????????????????</a></Link>
                                            </li>
                                            <li><Link href="/local/bihar_bhojpur-news-hindi.html"><a onClick={handleClosePopup}>??????????????????</a></Link>
                                            </li>
                                            <li><Link href="/local/bihar_buxar-news-hindi.html"><a onClick={handleClosePopup}>???????????????</a></Link>
                                            </li>
                                            <li><Link href="/local/bihar_banka-news-hindi.html"><a onClick={handleClosePopup}>???????????????</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>D</strong></li>
                                            <li><Link href="/local/bihar_darbhanga-news-hindi.html"><a onClick={handleClosePopup}>??????????????????</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>E</strong></li>
                                            <li><Link href="/local/bihar_east-champaran-news-hindi.html"><a onClick={handleClosePopup}>??????????????????
                                                ??????????????????</a></Link></li>
                                        </ul>
                                        <ul>
                                            <li><strong>G</strong></li>
                                            <li><Link href="/local/bihar_gaya-news-hindi.html"><a onClick={handleClosePopup}>?????????</a></Link>
                                            </li>
                                            <li><Link href="/local/bihar_gopalganj-news-hindi.html"><a onClick={handleClosePopup}>????????????????????????</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>J</strong></li>
                                            <li><Link href="/local/bihar_jahanabad-news-hindi.html"><a onClick={handleClosePopup}>????????????????????????</a></Link>
                                            </li>
                                            <li><Link href="/local/bihar_jamui-news-hindi.html"><a onClick={handleClosePopup}>????????????</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>K</strong></li>
                                            <li><Link href="/local/bihar_khagaria-news-hindi.html"><a onClick={handleClosePopup}>?????????????????????</a></Link>
                                            </li>
                                            <li><Link href="/local/bihar_kishanganj-news-hindi.html"><a onClick={handleClosePopup}>?????????????????????</a></Link>
                                            </li>
                                            <li><Link href="/local/bihar_kaimoor-news-hindi.html"><a onClick={handleClosePopup}>???????????????</a></Link>
                                            </li>
                                            <li><Link href="/local/bihar_katihar-news-hindi.html"><a onClick={handleClosePopup}>??????????????????</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>L</strong></li>
                                            <li><Link href="/local/bihar_lakhisarai-news-hindi.html"><a onClick={handleClosePopup}>?????????????????????</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>M</strong></li>
                                            <li><Link href="/local/bihar_muzaffarpur-news-hindi.html"><a onClick={handleClosePopup}>??????????????????????????????</a></Link>
                                            </li>
                                            <li><Link href="/local/bihar_munger-news-hindi.html"><a onClick={handleClosePopup}>??????????????????</a></Link>
                                            </li>
                                            <li><Link href="/local/bihar_madhepura-news-hindi.html"><a onClick={handleClosePopup}>?????????????????????</a></Link>
                                            </li>
                                            <li><Link href="/local/bihar_madhubani-news-hindi.html"><a onClick={handleClosePopup}>??????????????????</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>N</strong></li>
                                            <li><Link href="/local/bihar_nalanda-news-hindi.html"><a onClick={handleClosePopup}>??????????????????</a></Link>
                                            </li>
                                            <li><Link href="/local/bihar_nawada-news-hindi.html"><a onClick={handleClosePopup}>???????????????</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>P</strong></li>
                                            <li><Link href="/local/bihar_patna-city-news-hindi.html"><a onClick={handleClosePopup}>????????????</a></Link>
                                            </li>
                                            <li><Link href="/local/bihar_west-champaran-news-hindi.html"><a onClick={handleClosePopup}>?????????????????????
                                                ??????????????????</a></Link></li>
                                            <li><Link href="/local/bihar_purnea-news-hindi.html"><a onClick={handleClosePopup}>????????????????????????</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>R</strong></li>
                                            <li><Link href="/local/bihar_rohtas-news-hindi.html"><a onClick={handleClosePopup}>??????????????????</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>S</strong></li>
                                            <li><Link href="/local/bihar_samastipur-news-hindi.html"><a onClick={handleClosePopup}>???????????????????????????</a></Link>
                                            </li>
                                            <li><Link href="/local/bihar_sheohar-news-hindi.html"><a onClick={handleClosePopup}>???????????????</a></Link>
                                            </li>
                                            <li><Link href="/local/bihar_saran-news-hindi.html"><a onClick={handleClosePopup}>????????????</a></Link>
                                            </li>
                                            <li><Link href="/local/bihar_sitamarhi-news-hindi.html"><a onClick={handleClosePopup}>????????????????????????</a></Link>
                                            </li>
                                            <li><Link href="/local/bihar_shiekhpura-news-hindi.html"><a onClick={handleClosePopup}>?????????????????????</a></Link>
                                            </li>
                                            <li><Link href="/local/bihar_supaul-news-hindi.html"><a onClick={handleClosePopup}>???????????????</a></Link>
                                            </li>
                                            <li><Link href="/local/bihar_siwan-news-hindi.html"><a onClick={handleClosePopup}>???????????????</a></Link>
                                            </li>
                                            <li><Link href="/local/bihar_saharsa-news-hindi.html"><a onClick={handleClosePopup}>???????????????</a></Link>
                                            </li> 
                                        </ul>
                                        <ul>
                                            <li><strong>V</strong></li>
                                            <li><Link href="/local/bihar_vaishali-news-hindi.html"><a onClick={handleClosePopup}>??????????????????</a></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <Link href="#"><a onClick={() => DelhisetToggleView(!DelhitoggleView)}   className={`SubMenu ${DelhitoggleView ? 'show' : 'HideMenu'}`}><svg><use href="#delhi"></use></svg><span>??????????????????</span></a></Link>
                                <div className={`state-city ${DelhitoggleView ? 'show' : 'HideMenu'}`}>
                                    {/* <div className="tophead-main">
                                        <div className="tophead">
                                            <span>???????????? ???????????????</span>
                                            <a href="#"  onClick={() => DelhisetToggleView(!DelhitoggleView)} className="closeCity"><svg><use href="#close"></use></svg></a>
                                        </div>
                                    </div> */}
                                    <div className="sub-drop">
                                        <h2 className="city-lable"><Link href="/state/delhi-ncr"><a onClick={handleClosePopup}>?????????????????? <svg><use href="#arrow-nav"></use></svg></a></Link> </h2>
                                        <ul>
                                            <li><strong>G</strong></li>
                                            <li><Link href="/local/uttar-pradesh_ghaziabad-news-hindi.html"><a onClick={handleClosePopup}>???????????????????????????</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>H</strong></li>
                                            <li><Link href="/local/uttar-pradesh_hapur-city-news-hindi.html"><a onClick={handleClosePopup}>??????????????????</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>M</strong></li>
                                            <li><Link href="/local/haryana_mewat-news-hindi.html"><a onClick={handleClosePopup}>???????????????</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>N</strong></li>
                                            <li><Link href="/local/delhi_new-delhi-city-news-hindi.html"><a onClick={handleClosePopup}>??????
                                                ??????????????????</a></Link></li>
                                            <li><Link href="/local/uttar-pradesh_noida-news-hindi.html"><a onClick={handleClosePopup}>???????????????</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>P</strong></li>
                                            <li><Link href="/local/haryana_palwal-news-hindi.html"><a onClick={handleClosePopup}>????????????</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>R</strong></li>
                                            <li><Link href="/local/haryana_rewari-news-hindi.html"><a onClick={handleClosePopup}>?????????????????????</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>S</strong></li>
                                            <li><Link href="/local/haryana_sonipat-news-hindi.html"><a onClick={handleClosePopup}>??????????????????</a></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="#" onClick={() => PunjabsetToggleView(!PunjabtoggleView)}   className={`SubMenu ${PunjabtoggleView ? 'show' : 'HideMenu'}`}><svg><use href="#punjab"></use></svg><span>???????????????</span></a>
                                <div className={`state-city ${PunjabtoggleView ? 'show' : 'HideMenu'}`}>
                                    {/* <div className="tophead-main">
                                        <div className="tophead">
                                            <span>???????????? ???????????????</span>
                                            <a href="#"  onClick={() => PunjabsetToggleView(!PunjabtoggleView)} className="closeCity"><svg><use href="#close"></use></svg></a>
                                        </div>
                                    </div> */}
                                    <div className="sub-drop">
                                        <h2 className="city-lable"><Link href="/state/punjab"><a onClick={handleClosePopup}>??????????????? <svg><use href="#arrow-nav"></use></svg></a></Link> </h2>
                                        <ul>
                                            <li><strong>A</strong></li>
                                            <li><Link href="/local/punjab_amritsar-news-hindi.html"><a onClick={handleClosePopup}>??????????????????</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>B</strong></li>
                                            <li><Link href="/local/punjab_barnala-news-hindi.html"><a onClick={handleClosePopup}>??????????????????</a></Link>
                                            </li>
                                            <li><Link href="/local/punjab_bhatinda-news-hindi.html"><a onClick={handleClosePopup}>??????????????????</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>C</strong></li>
                                            <li><strong><Link href="/local/punjab_chandigarh-news-hindi.html"><a onClick={handleClosePopup}>?????????????????????</a></Link></strong>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>F</strong></li>
                                            <li><strong><Link href="/local/punjab_fatehgarh-sahib-news-hindi.html"><a onClick={handleClosePopup}>?????????????????????
                                                ???????????????</a></Link></strong></li>
                                            <li><strong><Link href="/local/punjab_fazilka-news-hindi.html"><a onClick={handleClosePopup}>????????????????????????</a></Link></strong>
                                            </li>
                                            <li><strong><Link href="/local/punjab_firozpur-news-hindi.html"><a onClick={handleClosePopup}>????????????????????????</a></Link></strong>
                                            </li>
                                            <li><strong><Link href="/local/punjab_faridkot-news-hindi.html"><a onClick={handleClosePopup}>?????????????????????</a></Link></strong>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>G</strong></li>
                                            <li><strong><Link href="/local/punjab_gurdaspur-news-hindi.html"><a onClick={handleClosePopup}>???????????????????????????</a></Link></strong>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>H</strong></li>
                                            <li><strong><Link href="/local/punjab_hoshiarpur-news-hindi.html"><a onClick={handleClosePopup}>??????????????????????????????</a></Link></strong>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>J</strong></li>
                                            <li><strong><Link href="/local/punjab_jalandhar-city-news-hindi.html"><a onClick={handleClosePopup}>??????????????????</a></Link></strong>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>K</strong></li>
                                            <li><strong><Link href="/local/punjab_kapurthala-news-hindi.html"><a onClick={handleClosePopup}>?????????????????????</a></Link></strong>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>L</strong></li>
                                            <li><strong><Link href="/local/punjab_ludhiana-news-hindi.html"><a onClick={handleClosePopup}>????????????????????????</a></Link></strong>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>M</strong></li>
                                            <li><strong><Link href="/local/punjab_muktsar-news-hindi.html"><a onClick={handleClosePopup}>?????????????????????</a></Link></strong>
                                            </li>
                                            <li><strong><Link href="/local/punjab_mansa-news-hindi.html"><a onClick={handleClosePopup}>???????????????</a></Link></strong>
                                            </li>
                                            <li><strong><Link href="/local/punjab_moga-news-hindi.html"><a onClick={handleClosePopup}>????????????</a></Link></strong></li>
                                        </ul>
                                        <ul>
                                            <li><strong>N</strong></li>
                                            <li><strong><Link href="/local/punjab_nawanshahr-news-hindi.html"><a onClick={handleClosePopup}>????????????
                                                ?????????</a></Link></strong></li>
                                        </ul>
                                        <ul>
                                            <li><strong>P</strong></li>
                                            <li><strong><Link href="/local/punjab_patiala-news-hindi.html"><a onClick={handleClosePopup}>?????????????????????</a></Link></strong>
                                            </li>
                                            <li><strong><Link href="/local/punjab_pathankot-news-hindi.html"><a onClick={handleClosePopup}>?????????????????????</a></Link></strong>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>R</strong></li>
                                            <li><strong><Link href="/local/punjab_ropar-news-hindi.html"><a
                                            >???????????????</a></Link></strong>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>S</strong></li>
                                            <li><strong><Link href="/local/punjab_sangrur-news-hindi.html"><a
                                            >??????????????????</a></Link></strong>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>T</strong></li>
                                            <li><strong><Link href="/local/punjab_tarantaran-news-hindi.html"><a
                                            >?????????????????????</a></Link></strong>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <Link href="#"><a onClick={() => HaryanasetToggleView(!HaryanatoggleView)} className={`SubMenu ${HaryanatoggleView ? 'show' : 'HideMenu'}`}><svg><use href="#haryana"></use></svg><span>?????????????????????</span></a></Link>
                                <div className={`state-city ${HaryanatoggleView ? 'show' : 'HideMenu'}`}>
                                    {/* <div className="tophead-main">
                                        <div className="tophead">
                                            <span>???????????? ???????????????</span>
                                            <a href="#"  onClick={() => HaryanasetToggleView(!HaryanatoggleView)} className="closeCity"><svg><use href="#close"></use></svg></a>
                                        </div>
                                    </div> */}
                                    <div className="sub-drop">
                                        <h2 className="city-lable"><Link href="/state/haryana"><a onClick={handleClosePopup}>????????????????????? <svg><use href="#arrow-nav"></use></svg></a></Link> </h2>
                                        <ul>
                                            <li><strong>A</strong></li>
                                            <li><Link href="/local/haryana_ambala-news-hindi.html"><a onClick={handleClosePopup}>??????????????????</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>B</strong></li>
                                            <li><Link href="/local/haryana_bhiwani-news-hindi.html"><a onClick={handleClosePopup}>??????????????????</a></Link>
                                            </li>
                                            <li><Link href="/local/haryana_bahadurgarh-news-hindi.html"><a onClick={handleClosePopup}>???????????????????????????</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>C</strong></li>
                                            <li><Link href="/local/punjab_chandigarh-news-hindi.html"><a onClick={handleClosePopup}>?????????????????????</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>F</strong></li>
                                            <li><Link href="/local/haryana_faridabad-news-hindi.html"><a onClick={handleClosePopup}>????????????????????????</a></Link>
                                            </li>
                                            <li><Link href="/local/haryana_fatehabad-news-hindi.html"><a onClick={handleClosePopup}>????????????????????????</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>G</strong></li>
                                            <li><Link href="/local/haryana_gurgaon-news-hindi.html"><a onClick={handleClosePopup}>???????????????????????????</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>H</strong></li>
                                            <li><Link href="/local/haryana_hisar-news-hindi.html"><a onClick={handleClosePopup}>???????????????</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>J</strong></li>
                                            <li><Link href="/local/haryana_jhajjar-news-hindi.html"><a onClick={handleClosePopup}>???????????????</a></Link>
                                            </li>
                                            <li><Link href="/local/haryana_jind-news-hindi.html"><a onClick={handleClosePopup}>????????????</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>K</strong></li>
                                            <li><Link href="/local/haryana_kaithal-news-hindi.html"><a onClick={handleClosePopup}>????????????</a></Link>
                                            </li>
                                            <li><Link href="/local/haryana_kurukshetra-news-hindi.html"><a onClick={handleClosePopup}>?????????????????????????????????</a></Link>
                                            </li>
                                            <li><Link href="/local/haryana_karnal-news-hindi.html"><a onClick={handleClosePopup}>???????????????</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>M</strong></li>
                                            <li><Link href="/local/haryana_mahendragarh-news-hindi.html"><a onClick={handleClosePopup}>??????????????????????????????</a></Link>
                                            </li>
                                            <li><Link href="/local/haryana_mewat-news-hindi.html"><a onClick={handleClosePopup}>???????????????</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>P</strong></li>
                                            <li><Link href="/local/haryana_panchkula-news-hindi.html"><a onClick={handleClosePopup}>?????????????????????</a></Link>
                                            </li>
                                            <li><Link href="/local/haryana_panipat-news-hindi.html"><a onClick={handleClosePopup}>??????????????????</a></Link>
                                            </li>
                                            <li><Link href="/local/haryana_palwal-news-hindi.html"><a onClick={handleClosePopup}>????????????</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>R</strong></li>
                                            <li><Link href="/local/haryana_rohtak-news-hindi.html"><a onClick={handleClosePopup}>???????????????</a></Link>
                                            </li>
                                            <li><Link href="/local/haryana_rewari-news-hindi.html"><a onClick={handleClosePopup}>?????????????????????</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>S</strong></li>
                                            <li><Link href="/local/haryana_sirsa-news-hindi.html"><a onClick={handleClosePopup}>???????????????</a></Link>
                                            </li>
                                            <li><Link href="/local/haryana_sonipat-news-hindi.html"><a onClick={handleClosePopup}>??????????????????</a></Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><strong>Y</strong></li>
                                            <li><Link href="/local/haryana_yamunanagar-news-hindi.html"><a onClick={handleClosePopup}>????????????????????????</a></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li>
                            <Link href="#"><a onClick={() => UttarakhandsetToggleView(!UttarakhandtoggleView)}  className={`SubMenu ${UttarakhandtoggleView ? 'show' : 'HideMenu'}`}><svg><use href="#uttarakhand"></use></svg><span>???????????????????????????</span></a></Link>
                                <div className={`state-city ${UttarakhandtoggleView ? 'show' : 'HideMenu'}`}>
                                    {/* <div className="tophead-main">
                                        <div className="tophead">
                                            <span>???????????? ???????????????</span>
                                            <a href="#"  onClick={() => UttarakhandsetToggleView(!UttarakhandtoggleView)} className="closeCity"><svg><use href="#close"></use></svg></a>
                                        </div>
                                    </div> */}
                                    <div className="sub-drop">
                                        <h2 className="city-lable"><Link href="/state/uttarakhand"><a onClick={handleClosePopup}>???????????????????????????<svg><use href="#arrow-nav"></use></svg></a></Link> </h2>
                                                                 
                            <ul>
                              <li><strong>A</strong></li>
                              <li><Link href="/local/uttarakhand_almora-news-hindi.html"><a onClick={handleClosePopup}>????????????????????????</a></Link></li>
                            </ul>
                            <ul>
                              <li><strong>B</strong></li>
                              <li><Link href="/local/uttarakhand_bageshwar-news-hindi.html"><a onClick={handleClosePopup}>????????????????????????</a></Link></li>
                            </ul>
                            <ul>
                              <li><strong>C</strong></li>
                              <li><Link href="/local/uttarakhand_chamoli-news-hindi.html"><a onClick={handleClosePopup}>???????????????</a></Link></li>
                              <li><Link href="/local/uttarakhand_champawat-news-hindi.html"><a onClick={handleClosePopup}>??????????????????</a></Link></li>
                            </ul>
                          
                            <ul>
                              <li><strong>D</strong></li>
                              <li><Link href="/local/uttarakhand_dehradun-city-news-hindi.html"><a onClick={handleClosePopup}>????????????????????????</a></Link></li>
                            </ul>
                            <ul>
                              <li><strong>H</strong></li>
                              <li><Link href="/local/uttarakhand_haridwar-news-hindi.html"><a onClick={handleClosePopup}>????????????????????????</a></Link></li>
                            </ul>
                            <ul>
                              <li><strong>N</strong></li>
                              <li><Link href="/local/uttarakhand_nainital-news-hindi.html"><a onClick={handleClosePopup}>?????????????????????</a></Link></li>
                            </ul>
                          
                            <ul>
                              <li><strong>P</strong></li>
                              <li><Link href="/local/uttarakhand_pithoragarh-news-hindi.html"><a onClick={handleClosePopup}>???????????????????????????</a></Link></li>
                              <li><Link href="/local/uttarakhand_pauri-garhwal-news-hindi.html"><a onClick={handleClosePopup}>??????????????? ??????????????????</a></Link></li>
                            </ul>
                            <ul>
                              <li><strong>R</strong></li>
                              <li><Link href="/local/uttarakhand_rudraprayag-news-hindi.html"><a onClick={handleClosePopup}>?????????????????????????????????</a></Link></li>
                            </ul>
                            <ul>
                              <li><strong>T</strong></li>
                              <li><Link href="/local/uttarakhand_tehri-garhwal-news-hindi.html"><a onClick={handleClosePopup}>??????????????? ??????????????????</a></Link></li>
                            </ul>
                          
                            <ul>
                              <li><strong>U</strong></li>
                              <li><Link href="/local/uttarakhand_uttarkashi-news-hindi.html"><a onClick={handleClosePopup}>???????????????????????????</a></Link></li>
                              <li><Link href="/local/uttarakhand_udhamsingh-nagar-news-hindi.html"><a onClick={handleClosePopup}>????????????????????? ?????????</a></Link></li>
                            </ul>
                                     </div>
                                </div>
                            </li>
                            <li>
                            <Link href="#"><a onClick={() => JharkhandsetToggleView(!JharkhandtoggleView)}  className={`SubMenu ${JharkhandtoggleView ? 'show' : 'HideMenu'}`}><svg><use href="#jharkhand"></use></svg><span>?????????????????????</span></a></Link>
                                <div className={`state-city ${JharkhandtoggleView ? 'show' : 'HideMenu'}`}>
                                    {/* <div className="tophead-main">
                                        <div className="tophead">
                                            <span>???????????? ???????????????</span>
                                            <a href="#"  onClick={() => JharkhandsetToggleView(!JharkhandtoggleView)} className="closeCity"><svg><use href="#close"></use></svg></a>
                                        </div>
                                    </div> */}
                                    <div className="sub-drop">
                                        <h2 className="city-lable"><Link href="/state/jharkhand"><a onClick={handleClosePopup}>?????????????????????<svg><use href="#arrow-nav"></use></svg></a></Link> </h2>
                                                                                
                                        <ul>
                                              <li><strong>B</strong></li>
                                              <li><Link href="/local/jharkhand_bokaro-news-hindi.html"><a onClick={handleClosePopup}>??????????????????</a></Link></li>
                                            </ul>
                                            <ul>
                                              <li><strong>C</strong></li>
                                              <li><Link href="/local/jharkhand_chatra-news-hindi.html"><a onClick={handleClosePopup}>????????????</a></Link></li>
                                            </ul>
                                            <ul>
                                              <li><strong>D</strong></li>
                                              <li><Link href="/local/jharkhand_dhanbad-news-hindi.html"><a onClick={handleClosePopup}>???????????????</a></Link></li>
                                              <li><Link href="/local/jharkhand_dumka-news-hindi.html"><a onClick={handleClosePopup}>???????????????</a></Link></li>
                                              <li><Link href="/local/jharkhand_deoghar-news-hindi.html"><a onClick={handleClosePopup}>???????????????</a></Link></li>
                                            </ul>
                                            <ul>
                                              <li><strong>G</strong></li>
                                              <li><Link href="/local/jharkhand_gumla-news-hindi.html"><a onClick={handleClosePopup}>???????????????</a></Link></li>
                                              <li><Link href="/local/jharkhand_giridih-news-hindi.html"><a onClick={handleClosePopup}>?????????????????????</a></Link></li>
                                              <li><Link href="/local/jharkhand_godda-news-hindi.html"><a onClick={handleClosePopup}>??????????????????</a></Link></li>
                                              <li><Link href="/local/jharkhand_garhwa-news-hindi.html"><a onClick={handleClosePopup}>???????????????</a></Link></li>
                                            </ul>
                                          
                                            <ul>
                                              <li><strong>H</strong></li>
                                              <li><Link href="/local/jharkhand_hazaribagh-news-hindi.html"><a onClick={handleClosePopup}>????????????????????????</a></Link></li>
                                            </ul>
                                            <ul>
                                              <li><strong>j</strong></li>
                                              <li><Link href="/local/jharkhand_jamshedpur-news-hindi.html"><a onClick={handleClosePopup}>????????????????????????</a></Link></li>
                                              <li><Link href="/local/jharkhand_jamtara-news-hindi.html"><a onClick={handleClosePopup}>????????????????????????</a></Link></li>
                                            </ul>
                                            <ul>
                                              <li><strong>K</strong></li>
                                              <li><Link href="/local/jharkhand_khunti-news-hindi.html"><a onClick={handleClosePopup}>???????????????</a></Link></li>
                                              <li><Link href="/local/jharkhand_koderma-news-hindi.html"><a onClick={handleClosePopup}>??????????????????</a></Link></li>
                                            </ul>
                                            <ul>
                                              <li><strong>L</strong></li>
                                              <li><Link href="/local/jharkhand_latehar-news-hindi.html"><a onClick={handleClosePopup}>?????????????????????</a></Link></li>
                                              <li><Link href="/local/jharkhand_lohardaga-news-hindi.html"><a onClick={handleClosePopup}>???????????????????????????</a></Link></li>
                                            </ul>
                                          
                                            <ul>
                                              <li><strong>P</strong></li>
                                              <li><Link href="/local/jharkhand_pakur-news-hindi.html"><a onClick={handleClosePopup}>??????????????????</a></Link></li>
                                              <li><Link href="/local/jharkhand_palamu-news-hindi.html"><a onClick={handleClosePopup}>???????????????</a></Link></li>
                                            </ul>
                                            <ul>
                                              <li><strong>R</strong></li>
                                              <li><Link href="/local/jharkhand_ramgarh-news-hindi.html"><a onClick={handleClosePopup}>??????????????????</a></Link></li>
                                              <li><Link href="/local/jharkhand_ranchi-news-hindi.html"><a onClick={handleClosePopup}>???????????????</a></Link></li>
                                            </ul>
                                            <ul>
                                              <li><strong>S</strong></li>
                                              <li><Link href="/local/jharkhand_sahibganj-news-hindi.html"><a onClick={handleClosePopup}>????????????????????????</a></Link></li>
                                              <li><Link href="/local/jharkhand_seraikela-news-hindi.html"><a onClick={handleClosePopup}>????????????????????????</a></Link></li>
                                              <li><Link href="/local/jharkhand_simdega-news-hindi.html"><a onClick={handleClosePopup}>?????????????????????</a></Link></li>
                                            </ul>
                                          
                                            <ul>
                                              <li><strong>W</strong></li>
                                              <li><Link href="/local/jharkhand_west-singhbhum-news-hindi.html"><a onClick={handleClosePopup}>????????????????????? ?????????????????????</a></Link></li>
                                            </ul>

                                     </div>
                                </div>
                            </li>
                            <li>
                            <Link href="#"><a onClick={() => ChhattisgarhsetToggleView(!ChhattisgarhtoggleView)}   className={`SubMenu ${ChhattisgarhtoggleView ? 'show' : 'HideMenu'}`}><svg><use href="#chhattisgarh"></use></svg><span>???????????????????????????</span></a></Link>
                                <div className={`state-city ${ChhattisgarhtoggleView ? 'show' : 'HideMenu'}`}>
                                    {/* <div className="tophead-main">
                                        <div className="tophead">
                                            <span>???????????? ???????????????</span>
                                            <a href="#"  onClick={() => ChhattisgarhsetToggleView(!ChhattisgarhtoggleView)} className="closeCity"><svg><use href="#close"></use></svg></a>
                                        </div>
                                    </div> */}
                                    <div className="sub-drop">
                                        <h2 className="city-lable"><Link href="/state/chhattisgarh"><a onClick={handleClosePopup}>???????????????????????????<svg><use href="#arrow-nav"></use></svg></a></Link> </h2>
                                        
                                        <ul>
                                  <li><strong>A</strong></li>
                                  <li><Link href="https://www.naidunia.com/chhattisgarh/ambikapur"><a onClick={handleClosePopup}>???????????????????????????</a></Link></li>
                                </ul>
                                <ul>
                                  <li><strong>B</strong></li>
                                  <li><Link href="https://www.naidunia.com/chhattisgarh/bhilai"><a onClick={handleClosePopup}>???????????????</a></Link></li>
                                  <li><Link href="https://naidunia.jagran.com/chhattisgarh/bilaspur"><a onClick={handleClosePopup}>??????????????? ?????????</a></Link></li>
                                </ul>
                                <ul>
                                  <li><strong>K</strong></li>
                                  <li><Link href="https://www.naidunia.com/chhattisgarh/korba"><a onClick={handleClosePopup}>???????????????</a></Link></li>
                                </ul>
                              
                                <ul>
                                  <li><strong>J</strong></li>
                                  <li><Link href="https://www.naidunia.com/chhattisgarh/jashpur"><a onClick={handleClosePopup}>???????????????</a></Link></li>
                                  <li><Link href="https://www.naidunia.com/chhattisgarh/janjgir-champa"><a onClick={handleClosePopup}>????????????????????? ???????????????</a></Link></li>
                                </ul>
                                <ul>
                                  <li><strong>R</strong></li>
                                  <li><Link href="https://naidunia.jagran.com/chhattisgarh/raipur"><a onClick={handleClosePopup}>??????????????????</a></Link></li>
                                  <li><Link href="https://naidunia.jagran.com/chhattisgarh/raigarh"><a onClick={handleClosePopup}>??????????????????</a></Link></li>
                                  <li><Link href="https://www.naidunia.com/chhattisgarh/rajnandgaon"><a onClick={handleClosePopup}>?????????????????????????????????</a></Link></li>
                                </ul>
                           

                                     </div>
                                </div>
                            </li>
                            <li>
                            <Link href="#"><a onClick={() => MPsetToggleView(!MPtoggleView)}   className={`SubMenu ${MPtoggleView ? 'show' : 'HideMenu'}`}><svg><use href="#madhya-pradesh"></use></svg><span>???????????? ??????????????????</span></a></Link>
                                <div className={`state-city ${MPtoggleView ? 'show' : 'HideMenu'}`}>
                                    {/* <div className="tophead-main">
                                        <div className="tophead">
                                            <span>???????????? ???????????????</span>
                                            <a href="#"  onClick={() => MPsetToggleView(!MPtoggleView)} className="closeCity"><svg><use href="#close"></use></svg></a>
                                        </div>
                                    </div> */}
                                    <div className="sub-drop">
                                        <h2 className="city-lable"><Link href="/state/madhya-pradesh"><a onClick={handleClosePopup}>???????????? ??????????????????<svg><use href="#arrow-nav"></use></svg></a></Link> </h2>
                                                                        
                                    <ul>
                                      <li><strong>B</strong></li>
                                      <li><Link href="https://naidunia.jagran.com/madhya-pradesh/bhopal"><a onClick={handleClosePopup}>???????????????</a></Link></li>
                                      <li><Link href="https://www.naidunia.com/madhya-pradesh/bhind"><a onClick={handleClosePopup}>????????????</a></Link></li>
                                    </ul>
                                    <ul>
                                      <li>C</li>
                                      <li><Link href="https://www.naidunia.com/madhya-pradesh/chhatarpur"><a onClick={handleClosePopup}>??????????????????</a></Link></li>
                                    </ul>
                                    <ul>
                                      <li>D</li>
                                      <li><Link href="https://www.naidunia.com/madhya-pradesh/damoh"><a onClick={handleClosePopup}>????????????</a></Link></li>
                                    </ul>
                                  
                                    <ul>
                                      <li><strong>G</strong></li>
                                      <li><Link href="https://www.naidunia.com/madhya-pradesh/gwalior"><a onClick={handleClosePopup}>????????????????????????</a></Link></li>
                                    </ul>
                                    <ul>
                                      <li><strong>I</strong></li>
                                      <li><Link href="https://www.naidunia.com/madhya-pradesh/indore"><a onClick={handleClosePopup}>???????????????</a></Link></li>
                                    </ul>
                                  
                                    <ul>
                                      <li><strong>J</strong></li>
                                      <li><Link href="https://www.naidunia.com/madhya-pradesh/jabalpur"><a onClick={handleClosePopup}>??????????????????</a></Link></li>
                                    </ul>
                                    <ul>
                                      <li><strong>S</strong></li>
                                      <li><Link href="https://www.naidunia.com/madhya-pradesh/shivpuri"><a onClick={handleClosePopup}>?????????????????????</a></Link></li>
                                    </ul>
                                     </div>
                                </div>
                            </li>
                            <li>
                            <Link href="#"><a onClick={() => HPsetToggleView(!HPtoggleView)}   className={`SubMenu ${HPtoggleView ? 'show' : 'HideMenu'}`}><svg><use href="#himachal-pradesh"></use></svg><span>?????????????????? ??????????????????</span></a></Link>
                                <div className={`state-city ${HPtoggleView ? 'show' : 'HideMenu'}`}>
                                    {/* <div className="tophead-main">
                                        <div className="tophead">
                                            <span>???????????? ???????????????</span>
                                            <a href="#"  onClick={() => HPsetToggleView(!HPtoggleView)} className="closeCity"><svg><use href="#close"></use></svg></a>
                                        </div>
                                    </div> */}
                                    <div className="sub-drop">
                                        <h2 className="city-lable"><Link href="/state/himachal-pradesh"><a onClick={handleClosePopup}>?????????????????? ??????????????????<svg><use href="#arrow-nav"></use></svg></a></Link> </h2>
                                        <ul>
                                          <li><strong>B</strong></li>
                                          <li><Link href="/local/himachal-pradesh_bilaspur-hp-news-hindi.html"><a onClick={handleClosePopup}>????????????????????????</a></Link></li>
                                        </ul>
                                        <ul>
                                          <li><strong>C</strong></li>
                                          <li><Link href="/local/himachal-pradesh_chamba-news-hindi.html"><a onClick={handleClosePopup}>????????????</a></Link></li>
                                        </ul>
                                        <ul>
                                          <li><strong>D</strong></li>
                                          <li><Link href="/local/himachal-pradesh_dharmshala-news-hindi.html"><a onClick={handleClosePopup}>????????????????????????</a></Link></li>
                                        </ul>
                                      
                                        <ul>
                                          <li><strong>H</strong></li>
                                          <li><Link href="/local/himachal-pradesh_hamirpur-hp-news-hindi.html"><a onClick={handleClosePopup}>???????????? ?????????</a></Link></li>
                                        </ul>
                                        <ul>
                                          <li><strong>K</strong></li>
                                          <li><Link href="/local/himachal-pradesh_kangra-news-hindi.html"><a onClick={handleClosePopup}>?????????????????????</a></Link></li>
                                          <li><Link href="/local/himachal-pradesh_kullu-news-hindi.html"><a onClick={handleClosePopup}>??????????????????</a></Link></li>
                                        </ul>
                                      
                                        <ul>
                                          <li><strong>M</strong></li>
                                          <li><Link href="/local/himachal-pradesh_mandi-news-hindi.html"><a onClick={handleClosePopup}>????????????</a></Link></li>
                                        </ul>
                                        <ul>
                                          <li><strong>S</strong></li>
                                          <li><Link href="/local/himachal-pradesh_shimla-news-hindi.html"><a onClick={handleClosePopup}>???????????????</a></Link></li>
                                          <li><Link href="/local/himachal-pradesh_sirmaur-news-hindi.html"><a onClick={handleClosePopup}>??????????????????</a></Link></li>
                                          <li><Link href="/local/himachal-pradesh_solan-news-hindi.html"><a onClick={handleClosePopup}>????????????</a></Link></li>
                                        </ul>
                                      
                                        <ul>
                                          <li><strong>U</strong></li>
                                          <li><Link href="/local/himachal-pradesh_una-news-hindi.html"><a onClick={handleClosePopup}>?????????</a></Link></li>
                                        </ul>
                             
                                     
                                     </div>
                                </div>
                            </li>
                            <li>
                            <Link href="#"><a onClick={() => JKsetToggleView(!JKtoggleView)}   className={`SubMenu ${JKtoggleView ? 'show' : 'HideMenu'}`}><svg><use href="#jammu-and-kashmir"></use></svg><span>???????????????-??????????????????</span></a></Link>
                                <div className={`state-city ${JKtoggleView ? 'show' : 'HideMenu'}`}>
                                    {/* <div className="tophead-main">
                                        <div className="tophead">
                                            <span>???????????? ???????????????</span>
                                            <a href="#"  onClick={() => JKsetToggleView(!JKtoggleView)} className="closeCity"><svg><use href="#close"></use></svg></a>
                                        </div>
                                    </div> */}
                                    <div className="sub-drop">
                                        <h2 className="city-lable"><Link href="/state/jammu-and-kashmir"><a onClick={handleClosePopup}>???????????????-?????????????????? <svg><use href="#arrow-nav"></use></svg></a></Link> </h2>
                                            
                                        <ul>
                                          <li><strong>J</strong></li>
                                          <li><Link href="/local/jammu-and-kashmir_jammu-news-hindi.html"><a onClick={handleClosePopup}>???????????????</a></Link></li>
                                        </ul>
                                        <ul>
                                          <li><strong>K</strong></li>
                                          <li><Link href="/local/jammu-and-kashmir_kathua-news-hindi.html"><a onClick={handleClosePopup}>????????????</a></Link></li>
                                        </ul>
                                         <ul>
                                          <li><strong>P</strong></li>
                                          <li><Link href="/local/jammu-and-kashmir_poonch-news-hindi.html"><a onClick={handleClosePopup}>????????????</a></Link></li>
                                        </ul>
                                        <ul>
                                          <li><strong>R</strong></li>
                                          <li><Link href="/local/jammu-and-kashmir_rajouri-news-hindi.html"><a onClick={handleClosePopup}>???????????????</a></Link></li>
                                        </ul>
                                      
                                         <ul>
                                          <li><strong>S</strong></li>
                                          <li><Link href="/local/jammu-and-kashmir_srinagar-news-hindi.html"><a onClick={handleClosePopup}>?????????????????????</a></Link></li>
                                        </ul>
                                     
                                        <ul>
                                          <li><strong>U</strong></li>
                                          <li><Link href="/local/jammu-and-kashmir_udhampur-news-hindi.html"><a onClick={handleClosePopup}>??????????????????</a></Link></li>
                                        </ul>  
                       
                                     </div>
                                </div>
                            </li>
                            <li>
                            <Link href="#"><a onClick={() => WBsetToggleView(!WBtoggleView)}   className={`SubMenu ${WBtoggleView ? 'show' : 'HideMenu'}`}><svg><use href="#west-bengal"></use></svg><span>?????????????????? ???????????????</span></a></Link>
                                <div className={`state-city ${WBtoggleView ? 'show' : 'HideMenu'}`}>
                                    {/* <div className="tophead-main">
                                        <div className="tophead">
                                            <span>???????????? ???????????????</span>
                                            <a href="#"  onClick={() => WBsetToggleView(!WBtoggleView)} className="closeCity"><svg><use href="#close"></use></svg></a>
                                        </div>
                                    </div> */}
                                    <div className="sub-drop">
                                        <h2 className="city-lable"><Link href="/state/west-bengal"><a onClick={handleClosePopup}>?????????????????? ??????????????? <svg><use href="#arrow-nav"></use></svg></a></Link> </h2>
                                
                                        <ul>
                                      <li><strong>B</strong></li>
                                      <li><Link href="/local/west-bengal_bardhaman-news-hindi.html"><a onClick={handleClosePopup}>??????????????????????????????</a></Link></li>
                                    </ul>
                                    <ul>
                                      <li><strong>C</strong></li>
                                      <li><Link href="/local/west-bengal_cooch-behar-news-hindi.html"><a onClick={handleClosePopup}>????????????????????????</a></Link></li>
                                    </ul>
                                    <ul>
                                      <li><strong>D</strong></li>
                                      <li><Link href="/local/west-bengal_darjeeling-news-hindi.html"><a onClick={handleClosePopup}>??????????????????????????????</a></Link></li>
                                      <li><Link href="/local/west-bengal_dakshin-dinajpur-news-hindi.html"><a onClick={handleClosePopup}>?????????????????? ????????????????????????</a></Link></li>
                                    </ul>
                                  
                                  
                                    <ul>
                                      <li><strong>J</strong></li>
                                      <li><Link href="/local/west-bengal_jalpaiguri-news-hindi.html"><a onClick={handleClosePopup}>??????????????????????????????</a></Link></li>
                                    </ul>
                                    <ul>
                                      <li><strong>K</strong></li>
                                      <li><Link href="/local/west-bengal_kolkata-news-hindi.html"><a onClick={handleClosePopup}>?????????????????????</a></Link></li>
                                      <li><Link href="/local/west-bengal_khadagpur-news-hindi.html"><a onClick={handleClosePopup}>?????????????????????</a></Link></li>
                                    </ul>
                                  
                                    <ul>
                                      <li><strong>M</strong></li>
                                      <li><Link href="/local/west-bengal_malda-news-hindi.html"><a onClick={handleClosePopup}>???????????????</a></Link></li>
                                      <li><Link href="/local/west-bengal_medinipur-news-hindi.html"><a onClick={handleClosePopup}>???????????????????????????</a></Link></li>
                                    </ul>
                                    <ul>
                                      <li><strong>P</strong></li>
                                      <li><Link href="/local/west-bengal_purulia-news-hindi.html"><a onClick={handleClosePopup}>????????????????????????</a></Link></li>
                                    </ul>
                                  
                                    <ul>
                                      <li><strong>U</strong></li>
                                      <li><Link href="/local/west-bengal_uttar-dinajpur-news-hindi.html"><a onClick={handleClosePopup}>?????????????????? ????????????????????????</a></Link></li>
                                    </ul>

                                     
                                     </div>
                                </div>
                            </li>
                            

                            <li>
                            <Link href="#"><a onClick={() => OdishasetToggleView(!OdishatoggleView)}  className={`SubMenu ${OdishatoggleView ? 'show' : 'HideMenu'}`}><svg><use href="#odisha"></use></svg><span>??????????????? </span></a></Link>
                                <div className={`state-city ${OdishatoggleView ? 'show' : 'HideMenu'}`}>
                                    {/* <div className="tophead-main">
                                        <div className="tophead">
                                            <span>???????????? ???????????????</span>
                                            <a href="#"  onClick={() => OdishasetToggleView(!OdishatoggleView)} className="closeCity"><svg><use href="#close"></use></svg></a>
                                        </div>
                                    </div> */}
                                    <div className="sub-drop">
                                        <h2 className="city-lable"><Link href="/state/odisha"><a onClick={handleClosePopup}>??????????????? <svg><use href="#arrow-nav"></use></svg></a></Link> </h2>
                        
                                <ul>
                                  <li><strong>B</strong></li>
                                  <li><Link href="/local/odisha_baleshwar-news-hindi.html"><a onClick={handleClosePopup}>????????????????????????</a></Link></li>
                                  <li><Link href="/local/odisha_bhubaneshwar-news-hindi.html"><a onClick={handleClosePopup}>???????????????????????????</a></Link></li>
                                </ul>
                                <ul>
                                  <li><strong>C</strong></li>
                                  <li><Link href="/local/odisha_cuttack-news-hindi.html"><a onClick={handleClosePopup}>?????????</a></Link></li>
                                </ul>
                  
                                <ul>
                                  <li><strong>J</strong></li>
                                  <li><Link href="/local/odisha_jharsuguda-news-hindi.html"><a onClick={handleClosePopup}>??????????????????????????????</a></Link></li>
                                </ul>
                                <ul>
                                  <li><strong>K</strong></li>
                                  <li><Link href="/local/odisha_khordha-news-hindi.html"><a onClick={handleClosePopup}>???????????????</a></Link></li>
                                </ul>
                              
                                <ul>
                                  <li><strong>P</strong></li>
                                  <li><Link href="/local/odisha_puri-news-hindi.html"><a onClick={handleClosePopup}>????????????</a></Link></li>
                                </ul>
                                <ul>
                                  <li><strong>R</strong></li>
                                  <li><Link href="/local/odisha_rourkela-news-hindi.html"><a onClick={handleClosePopup}>????????????????????????</a></Link></li>
                                </ul>

                                <ul>
                                  <li><strong>S</strong></li>
                                  <li><Link href="/local/odisha_sundergarh-news-hindi.html"><a onClick={handleClosePopup}>????????????????????????</a></Link></li>
                                  <li><Link href="/local/odisha_sambalpur-news-hindi.html"><a onClick={handleClosePopup}>????????????????????????</a></Link></li>
                                </ul>
           
                                     </div>
                                </div>
                            </li>
                            <li>
                            <Link href="#"><a onClick={() => MaharashtrasetToggleView(!MaharashtratoggleView)}  className={`SubMenu ${MaharashtratoggleView ? 'show' : 'HideMenu'}`}><svg><use href="#maharashtra"></use></svg><span>??????????????????????????????</span></a></Link>
                                <div className={`state-city ${MaharashtratoggleView ? 'show' : 'HideMenu'}`}>
                                    {/* <div className="tophead-main">
                                        <div className="tophead">
                                            <span>???????????? ???????????????</span>
                                            <a href="#"  onClick={() => MaharashtrasetToggleView(!MaharashtratoggleView)} className="closeCity"><svg><use href="#close"></use></svg></a>
                                        </div>
                                    </div> */}
                                    <div className="sub-drop">
                                        <h2 className="city-lable"><Link href="/local/maharashtra-news-hindi.html"><a onClick={handleClosePopup}>??????????????????????????????<svg><use href="#arrow-nav"></use></svg></a></Link> </h2>
                        
                                        <ul>
                              <li><strong>M</strong></li>
                              <li><Link href="/local/maharashtra_mumbai-news-hindi.html"><a onClick={handleClosePopup}>???????????????</a></Link></li>
                            </ul>
                          
                            <ul>
                              <li><strong>N</strong></li>
                              <li><Link href="/local/maharashtra_nagpur-news-hindi.html"><a onClick={handleClosePopup}>??????????????????</a></Link></li>
                            </ul>
                          
                            <ul>
                              <li><strong>K</strong></li>
                              <li><Link href="/local/maharashtra_pune-news-hindi.html"><a onClick={handleClosePopup}>????????????</a></Link></li>
                            </ul>

           
                                     </div>
                                </div>
                            </li>
                            <li>
                            <Link href="#"><a onClick={() => GujaratsetToggleView(!GujarattoggleView)}  className={`SubMenu ${GujarattoggleView ? 'show' : 'HideMenu'}`}><svg><use href="#gujarat"></use></svg><span>?????????????????? </span></a></Link>
                                <div className={`state-city ${MaharashtratoggleView ? 'show' : 'HideMenu'}`}>
                                    {/* <div className="tophead-main">
                                        <div className="tophead">
                                            <span>???????????? ???????????????</span>
                                            <a href="#"  onClick={() => GujaratsetToggleView(!GujarattoggleView)} className="closeCity"><svg><use href="#close"></use></svg></a>
                                        </div>
                                    </div> */}
                                    <div className="sub-drop">
                                        <h2 className="city-lable"><Link href="/local/gujarat-news-hindi.html"><a onClick={handleClosePopup}>??????????????????<svg><use href="#arrow-nav"></use></svg></a></Link> </h2>
                                        <ul>
                              <li><strong>A</strong></li>
                              <li><Link href="/local/gujarat_ahmedabad-news-hindi.html"><a onClick={handleClosePopup}>????????????????????????</a></Link></li>
                            </ul>
                           
                            <ul>
                              <li><strong>S</strong></li>
                              <li><Link href="/local/gujarat_surat-news-hindi.html"><a onClick={handleClosePopup}>????????????</a></Link></li>
                            </ul>
                           
                            <ul>
                              <li><strong>v</strong></li>
                              <li><Link href="/local/gujarat_vadodara-news-hindi.html"><a onClick={handleClosePopup}>?????????????????????</a></Link></li>
                            </ul> 
                             </div>
                                </div>
                            </li>
                            <li>
                            <Link href="#"><a onClick={() => RajasthansetToggleView(!RajasthantoggleView)} className={`SubMenu ${RajasthantoggleView ? 'show' : 'HideMenu'}`}><svg><use href="#rajasthan"></use></svg><span>????????????????????????</span></a></Link>
                                <div className={`state-city ${RajasthantoggleView ? 'show' : 'HideMenu'}`}>
                                    {/* <div className="tophead-main">
                                        <div className="tophead">
                                            <span>???????????? ???????????????</span>
                                            <a href="#"  onClick={() => RajasthansetToggleView(!RajasthantoggleView)} className="closeCity"><svg><use href="#close"></use></svg></a>
                                        </div>
                                    </div> */}
                                    <div className="sub-drop">
                                        <h2 className="city-lable"><Link href="/local/rajasthan-news-hindi.html"><a onClick={handleClosePopup}>????????????????????????<svg><use href="#arrow-nav"></use></svg></a></Link> </h2>
                                        <ul>
                              <li><strong>A</strong></li>
                              <li><Link href="/local/gujarat_ahmedabad-news-hindi.html"><a onClick={handleClosePopup}>????????????????????????</a></Link></li>
                            </ul>
                           
                            <ul>
                              <li><strong>S</strong></li>
                              <li><Link href="/local/gujarat_surat-news-hindi.html"><a onClick={handleClosePopup}>????????????</a></Link></li>
                            </ul>
                           
                            <ul>
                              <li><strong>v</strong></li>
                              <li><Link href="/local/gujarat_vadodara-news-hindi.html"><a onClick={handleClosePopup}>?????????????????????</a></Link></li>
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