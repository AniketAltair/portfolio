import React from 'react';
import OwlCarousel from 'react-owl-carousel'; 
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ScrollService from '../../utilities/Scrollservice';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import Animations from '../../utilities/Animations';
import "./Testimonial.css";
import aditya from '../../../src/img/Testimonial/aditya.jpeg';
import user from '../../../src/img/Testimonial/user.png';
import footer_img from '../../../src/img/Testimonial/shape-bg.png';

import Footer from '../Home/Footer/Footer';
function Testimonial(props) {

    let fadeInScreenHandler=(screen)=>{
        if(screen.fadeInScreen!==props.id) return;
        Animations.animations.fadeInScreen(props.id);
    }
    const fadeInSubscription=ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const options={
        loop:true,
        margin:0,
        nav:true,
        animateIn:"bounceInRight",
        animateOut:"bounceOutRight",
        dots:true,
        autoplay:true,
        smartSpeed:1000,
        responsive:{
            0:{
                items:1,
            },
            768:{
                items:1,
            },
            1000:{
                items:3,
            }
        }
    }

    return (
        <div>
            <ScreenHeading
            title={"Testimonial"}
            subHeading={'What My Mentors say about Me'}
            />
            <section className='testimonial-section' id={props.id || ''}>
                <div className='container'>
                    <div className="row">
                        <OwlCarousel className='owl-carousel' id='testimonial-carousel' {...options}>

                            <div className="col-lg-12">
                                <div className="testi-item">
                                    <div className="testi-comment">
                                        <p>
                                            <i className='fa fa-quote-left'/>
                                            Dedicated and willingness to complete the task. Punctual about his work and delivers decent outcomes.
                                            <i className='fa fa-quote-right'/>
                                        </p>
                                        <ul className='stars list-unstyled'>
                                            <li>
                                                <i className='fa fa-star'/>
                                            </li>
                                            <li>
                                                <i className='fa fa-star'/>
                                            </li>
                                            <li>
                                                <i className='fa fa-star'/>
                                            </li>
                                            <li>
                                                <i className='fa fa-star-half-alt'/>
                                            </li>
                                            <li>
                                                <i className='fa fa-star'/>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="client-info">
                                        <img src={aditya} alt='no internet connection'/>
                                        <h5>
                                            Aditya Narayaan
                                        </h5>
                                        <p>Founder of Qkres Services and Limited</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="testi-item">
                                    <div className="testi-comment">
                                        <p>
                                            <i className='fa fa-quote-left'/>
                                            Hardworking and Quick Learner. Received appreciation from client for his Metering Project project contribution.
                                            <i className='fa fa-quote-right'/>
                                        </p>
                                        <ul className='stars list-unstyled'>
                                            <li>
                                                <i className='fa fa-star'/>
                                            </li>
                                            <li>
                                                <i className='fa fa-star'/>
                                            </li>
                                            <li>
                                                <i className='fa fa-star'/>
                                            </li>
                                            <li>
                                                <i className='fa fa-star'/>
                                            </li>
                                            <li>
                                                <i className='fa fa-star-half'/>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="client-info">
                                        <img src={user} alt='no internet connection'/>
                                        <h5>
                                            Vidya Lakshmi
                                        </h5>
                                        <p>Mentor at Jivass Technologies</p>
                                    </div>
                                </div>
                            </div>

                        </OwlCarousel>
                        
                    </div>
                    
                </div>

            </section>
            
                <div className='footer-image'>
                    <img src={footer_img} alt='no internet connection'/>
                </div>
           
        </div>
    );
}

export default Testimonial;