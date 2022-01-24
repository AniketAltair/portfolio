import React, { useState } from 'react';
import imgBack from '../../../src/images/mailz.jpeg';
import load1 from '../../../src/images/load2.gif';
import ScrollService from '../../utilities/Scrollservice';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import Animations from '../../utilities/Animations';
import Typical from 'react-typical';
import './ContactMe.css';
import axios from 'axios';
import{toast} from 'react-toastify';

function ContactMe(props) {

    const [name,setname]=useState("");
    const [email,setemail]=useState("");
    const [message,setmessage]=useState("");
    const [banner,setbanner]=useState("");
    const [bool,setbool]=useState(false);

    const handleName=(e)=>{
        setname(e.target.value);
    };
    const handleEmail=(e)=>{
        setemail(e.target.value);
    };
    const handleMessage=(e)=>{
        setmessage(e.target.value);
    };

    const submitForm=async(e)=>{
        e.preventDefault();
        try{
            let data={name,email,message};
            setbool(true);
            const res=await axios.post(`/contact`,data);
            
            if(name.length==0 ||email.length==0 ||message.length==0){
                console.log(res.data.msg);
                setbanner(res.data.msg);
                toast.error(res.data.msg);
                setbool(false);
            }else if(res.status===200){
                setbanner(res.data.msg);
                toast.success(res.data.msg);
                setbool(false);

                setname("");
                setemail("");
                setmessage("");
            }
            console.log(data);
        }catch(error){
            console.log(error);
        }
        
    }

    let fadeInScreenHandler=(screen)=>{
        if(screen.fadeInScreen!==props.id) return;
        Animations.animations.fadeInScreen(props.id);
    }
    const fadeInSubscription=ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    return (
        <div className='main-container' id={props.id || ''}>
            <ScreenHeading 
            title={"Contact Me"}
            subHeading={"Let's keep in Touch"}
            />
            <div className="central-form">
                <div className="col">
                <h2 className='title'>
                                {" "}
                                <Typical
                                loop={Infinity}
                                steps={[
                                    "Get in Touch",
                                    4000,
                                    "Send Your Queries through the form",
                                    4000,
                                ]}
                                
                                />

                            </h2>
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
                <div className='back-form'>
                    <div className="img-back">
                        <h4>
                            Send Your Email Here!
                        </h4>
                        <img src={imgBack} alt='image not found'/>
                    </div>
                    <form onSubmit={submitForm}>
                        <p>
                            {banner}
                        </p>
                        <label htmlFor='name'>Name</label>
                        <input type='text' onChange={handleName} value={name}/>
                        <label htmlFor='email'>Email</label>
                        <input type='email' onChange={handleEmail} value={email}/>
                        <label htmlFor='message'>Message</label>
                        <textarea type='text' onChange={handleMessage} value={message}/>
                        <div className='send-btn'>
                            <button type='submit'>
                                Send
                                <i className='fa fa-paper-plane'/>
                                {bool?(
                                    <b className="load">
                                        <img src={load1} alt='image not responding'/>
                                    </b>
                                ):("")}
                            </button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactMe;