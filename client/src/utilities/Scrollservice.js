import { TOTAL_SCREENS } from "./commonUtils";
import {Subject} from 'rxjs';
import {object} from "prop-types";

export default class ScrollService{

    static scrollHandler=new ScrollService();

    static currentScreenBroadcaster=new Subject();
    static currentScreenFadeIn=new Subject();

    constructor(){
        window.addEventListener('scroll',this.checkCurrentScreenUnderViewport);
    }

    scrollToHireMe=()=>{
        let contactScreen=document.getElementById("ContactMe");
        if(!contactScreen) return;
        contactScreen.scrollIntoView({behavior:"smooth"});
    }

    scrollToHome=()=>{
        let homeScreen=document.getElementById("Home");
        if(!homeScreen) return;
        homeScreen.scrollIntoView({behavior:"smooth"});
    }

    isElementInView=(elem,type)=>{
        let rec=elem.getBoundingClientReact();
        let elementTop=rec.top;
        let elementBottom=rec.bottom;

        let partiallyVisible= elementTop<window.innerHeight && elementBottom>=0;
        let completelyVisible= elementTop>=0 && elementBottom<=window.innerHeight;

        switch(type){
            case "partial":
                return partiallyVisible;
            case "complete":
                return completelyVisible;
            default:
                return false
        }
    }

    checkCurrentScreenUnderViewport=(event)=>{
        if(!event || object.keys(event).length<1){
            return;
        }
        for(let screen of TOTAL_SCREENS){
            let screenfromDOM=document.getElementById(screen.screen_name);
            if(!screenfromDOM) 
            continue;
            
            let fullyVisible=this.isElementInView(screenfromDOM,"complete");
            let partiallyVisible=this.isElementInView(screenfromDOM,"partial");

            if(fullyVisible || partiallyVisible){
                if(partiallyVisible && !screen.alreadyRendered){
                    ScrollService.currentScreenFadeIn.next({
                        fadeInScreen: screen.screen_name,
                    });
                    screen['alreadyRendered']=true;
                    break;
                }
                if(fullyVisible){
                    ScrollService.currentScreenBroadcaster.next({
                        screenInView: screen.screen_name,
                    });
                    break;
                }
            }
        }
    }


}