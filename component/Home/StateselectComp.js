import React, { Component } from 'react'
import { HomePageConfig } from "../Utils/JPlusConfig";
import Child from './Child';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ChooseState from '../Global/ChooseState';
import Link from 'next/link'
/* 
Author Abhay 
This function is written for state/city component. 
*/
let selectedState = 'uttar-pradesh';
let selectedTab = 'tab1';

function StateselectComp(props) {
    const [state, setState] = useState({data: {}, activeTab : 'tab1'});
    //const [state, setState] = useState({data:props.newsstatecomponent, activeTab : 'tab'});
    //const [selectCity, setSelectCity] = useState('uttar-pradesh');   
    

    const changeState = async (e, val, tabid) => {
        e.preventDefault()
        selectedState = val;
        selectedTab = tabid;
        //if(tabid == 'tab'){
            //await axios.get(HomePageConfig.HOME_STATE_NEWS_API).then((resp) => { setState({data:resp.data.response.docs, activeTab : tabid}) }).catch((err) => { console.log("Error Found") });
       // }else{
        var URL = HomePageConfig.HOME_STATE_API + val + '/0/7';
            //console.log(URL); 
        await axios.get(`${URL}`).then( (resp) => {setState({data:resp.data, activeTab : tabid});}).catch((err)=> {console.log("Error Found")});
        //}
        
    };   
    

    const handleSelectCity = (e) => {
        e.preventDefault(); 
        if(confirm('क्या आप इस राज्य/शहर की खबरें हर बार मुख्य पृष्ठ पर देखना चाहेंगे?')){
          localStorage.setItem('savedStateName', JSON.stringify({"state" : selectedState,"tab" :selectedTab}));
        }             
    }

   useEffect(() => {
    let savedStateName = JSON.parse(localStorage.getItem('savedStateName'));
    let URL = '';
    let selTab = '';

    if(savedStateName!== null && savedStateName.state != undefined){
    URL = HomePageConfig.HOME_STATE_API + savedStateName.state + '/0/7';
    selTab = savedStateName.tab;
    }else{
    URL = HomePageConfig.HOME_STATE_API + selectedState + '/0/7';   
    selTab = selectedTab; 
    }
    
    axios.get(`${URL}`).then((resp) => { 
        const HOME_STATE_NEWS = (resp.data !== undefined ? resp.data : '');
        setState({data: HOME_STATE_NEWS, activeTab : selTab});
        
    }).catch((err) => { console.log("Choose State API Error") });
    
   },[])
    
    return (
        <>
         {/*selectCity ? <ChooseState handleCloseCity={handleCloseCity}/> : ''*/}
          <div className="aritcle-widget container" id="Sticky-content">
       
        
        <div className='stickySidebar'>
        <div className="head-tabing">
        <h2>{props.title}</h2>
                <Link href="#"><a onClick={(e) => handleSelectCity(e)}>Save City</a></Link>
            </div>
             <div className="StateTabing">
              
                <ul className="list-tab">
                    {/* <li><a href="#" onClick={(e) => changeState(e,'', 'tab')} className={state.activeTab == 'tab' ? 'active' : ''}>TRENDING CITIES</a></li> */}
                    <li><a href="#" onClick={(e) => changeState(e, 'uttar-pradesh', 'tab1')} className={state.activeTab == 'tab1' || state.activeTab == 'tab'? 'active' : ''}>उत्तर प्रदेश</a></li>
                    <li><a href="#" onClick={(e) => changeState(e, 'bihar', 'tab2')} className={state.activeTab == 'tab2' ? 'active' : ''}>बिहार</a></li>
                    <li><a href="#" onClick={(e) => changeState(e, 'delhi', 'tab3')} className={state.activeTab == 'tab3' ? 'active' : ''}>दिल्ली</a></li>
                    <li><a href="#" onClick={(e) => changeState(e, 'punjab', 'tab4')} className={state.activeTab == 'tab4' ? 'active' : ''}>पंजाब</a></li>
                    <li><a href="#" onClick={(e) => changeState(e, 'haryana', 'tab5')} className={state.activeTab == 'tab5' ? 'active' : ''}>हरियाणा</a></li>
                    <li><a href="#" onClick={(e) => changeState(e, 'uttarakhand', 'tab6')} className={state.activeTab == 'tab6' ? 'active' : ''}>उत्तराखंड</a></li>
                    <li><a href="#" onClick={(e) => changeState(e, 'jharkhand', 'tab7')} className={state.activeTab == 'tab7' ? 'active' : ''}>झारखण्ड</a></li>
                    <li><a href="#" onClick={(e) => changeState(e, 'himachal-pradesh', 'tab8')} className={state.activeTab == 'tab8' ? 'active' : ''}>हिमाचल प्रदेश</a></li>
                    <li><a href="#" onClick={(e) => changeState(e, 'jammu-and-kashmir', 'tab9')} className={state.activeTab == 'tab9' ? 'active' : ''}>जम्मू-कश्मीर</a></li>
                    <li><a href="#" onClick={(e) => changeState(e, 'west-bengal', 'tab10')} className={state.activeTab == 'tab10' ? 'active' : ''}>पश्चिम बंगाल</a></li>
                    <li><a href="#" onClick={(e) => changeState(e, 'odisha', 'tab11')} className={state.activeTab == 'tab11' ? 'active' : ''}>ओडिशा</a></li>
                    <li><a href="#" onClick={(e) => changeState(e, 'maharashtra', 'tab12')} className={state.activeTab == 'tab12' ? 'active' : ''}>महाराष्ट्र</a></li>
                    <li><a href="#" onClick={(e) => changeState(e, 'gujarat', 'tab13')} className={state.activeTab == 'tab13' ? 'active' : ''}>गुजरात</a></li>
                    <li><a href="#" onClick={(e) => changeState(e, 'rajasthan', 'tab14')} className={state.activeTab == 'tab14' ? 'active' : ''}>राजस्थान</a></li>
                </ul>
            </div>
            <Child data={state.data} />
             {/*<div className="widget local-jagran local-jagran-append"></div> */}
            </div>
        
    </div>            
        </>
      )
 }

export default StateselectComp
