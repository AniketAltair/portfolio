import React from 'react';
import Typical from 'react-typical';
import "./Profile.css";
import ScrollService from '../../../utilities/Scrollservice';

function Profile(props) {

    return (
        <div className='profile-container text-center'>
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="colz">
                        <div className="colz-icon">
                        <a href='https://www.facebook.com/aniket.katakdhond.12' target="_blank">
                            <i className='fa fa-facebook-square'></i>
                        </a>
                        <a href='#'>
                            <i className='fa fa-google-plus-square'></i>
                        </a>
                        <a href='https://www.instagram.com/aniket.katakdhond/' target="_blank">
                            <i className='fa fa-instagram'></i>
                        </a>
                        <a href='https://www.linkedin.com/in/aniket-katakdhond-47b93b18b/' target="_blank">
                            <i className='fa fa-linkedin-square'></i>
                        </a>
                        <a href='https://github.com/AniketAltair' target="_blank">
                            <i className='fa fa-github-square'></i>
                        </a>

                        </div>
                    </div>
                    <div className="profile-details-name">
                        <span className="primary-text">
                            {" "}
                            Hello i am <span className='highlighted-text'>Aniket Katakdhond</span>

                        </span>
                    </div>
                    <div className="profile-details-role">
                        <span className="primary-text">
                            {" "}
                            <h1>
                                {" "}
                                <Typical
                                loop={Infinity}
                                steps={[
                                    "Enthusiastic Dev",
                                    4000,
                                    "MERN stack Dev",
                                    4000,
                                    "Coding Enthusiast",
                                    4000,
                                    "Hybrid App Dev",
                                    4000,
                                    "ML/DL ",
                                    4000,
                                ]}
                                
                                />

                            </h1>
                            <span className='profile-role-tagline'>
                                Development with Human Touch
                            </span>
                        </span>
                    </div>
                    <div className="profile-options">
                        <button className='btn primary-btn' onClick={()=>ScrollService.scrollHandler.scrollToHireMe()}>
                            {""}
                            Hire Me
                        </button>
                        <a href="resume.pdf" download="Aniket_resume.pdf">
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className="profile-picture">
                    <div className="profile-picture-background">

                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Profile;