import React, { useState } from 'react';
import {TOTAL_SCREENS,GET_SCREEN_INDEX} from '../../../utilities/commonUtils';
import ScrollService from '../../../utilities/Scrollservice';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './Header.css';

function Header(props) {

    const [selectedScreen,setSelectedScreen]=useState(0);
    const [showheaderoptions,setshowheaderoptions]=useState(false);

    const updateScreen=(currentScreen)=>{
        if(!currentScreen || !currentScreen.screenInView)
        return;
        let screenIndex=GET_SCREEN_INDEX(currentScreen.screenInView);
        if(screenIndex<0)
        return
    }

    let currentScreenSubscription=ScrollService.currentScreenBroadcaster.subscribe(updateScreen);

    const getHeaderOptions=()=>{
        return(
            TOTAL_SCREENS.map((screen,i)=>(
                <div key={screen.screen_name} className={getHeaderOptionsClass(i)}
                 onClick={()=>switchScreen(i,screen)}>
                     <span>
                         {screen.screen_name}
                     </span>
                </div>
            ))
        )
    }

    const getHeaderOptionsClass=(index)=>{
        let classes="header-option ";
        if(index<TOTAL_SCREENS.length-1){
            classes+="header-option-seperator ";
        }
        if(selectedScreen===index){
            classes+="selected-header-option ";
        }
        return classes;
    }

    const switchScreen=(index,screen)=>{
        let screenComponent=document.getElementById(screen.screen_name);
        if(!screenComponent) return;

        screenComponent.scrollIntoView({behavior:"smooth"});
        setSelectedScreen(index);
        setshowheaderoptions(false);
    }

    return (
        <div>
            <div className='header-container' onClick={()=>setshowheaderoptions(!showheaderoptions)}>
                <div className='header-parent'>
                    <div className='header-hamburger' onClick={()=>setshowheaderoptions(!showheaderoptions)}>
                        <FontAwesomeIcon className='header-hamburger-bars' icon={faBars}/>
                    </div>
                    <div className="header-logo">
                        <span>
                            ANIKET~
                        </span>
                    </div>
                    <div className={(showheaderoptions)?"header-options show-hamburger-options":"header-options"}>
                        {getHeaderOptions()} 
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Header;