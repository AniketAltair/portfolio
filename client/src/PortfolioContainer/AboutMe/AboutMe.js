import React,{useEffect} from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/Scrollservice';
import Animations from '../../utilities/Animations';
import './AboutMe.css';     

function AboutMe(props) {
    let fadeInScreenHandler=(screen)=>{
        if(screen.fadeInScreen!==props.id) return;
        Animations.animations.fadeInScreen(props.id);
    }
    const fadeInSubscription=ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const SCREEN_CONSTANTS={
        description:"Full Stack Web Developer, with sound knowledge and Experience in Web and Mobile Development. Also Sound knowledge in Competetive Coding and Machine Learning Technologies. Thirst for Experience and skills, willing to be an asset for an organization.",
        highlights:{
            bullets:[
                "Full Stack Web and Mobile Development",
                "Proficient in MERN and React Native",
                "Building REST API",
                "Interactive and Responsive UI/UX",
                "Competetive coding with C++",
                "Interest in NLP and Computer Vision"
            ],
            heading:"Few Highlights :"
        }
    }

    const renderHighlights=()=>{
        return(
            SCREEN_CONSTANTS.highlights.bullets.map((value,i)=>(
                <div className='highlight' key={i}>
                    <div className='highlight-blob'></div>
                    <span>{value}</span>
                </div>
            ))
        )
    }



    return (
        <div className='about-me-container screen-container' id={props.id || ""}>
            <div className="about-me-parent">
                <ScreenHeading title={'About Me'} subHeading={'Why Choose Me?'}/>
                <div className="about-me-card">
                    <div className="about-me-profile">

                    </div>
                    <div className="about-me-details">
                        <span className='about-me-description'>{SCREEN_CONSTANTS.description}</span>
                        <div className='about-me-highlights'>
                            <div className='highlight-heading'>
                                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
                            </div>
                            {renderHighlights()}

                        </div>
                        <div className='about-me-options'>
                        <button className='btn primary-btn'>
                            {""}
                            Hire Me
                        </button>
                        <a href="resume.pdf" download="Aniket_resume.pdf">
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>

                        </div>
                    </div>
                </div>
            </div>            
        </div>
    );
}

export default AboutMe;