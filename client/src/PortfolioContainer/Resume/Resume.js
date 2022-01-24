import React, { useState } from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/Scrollservice';
import Animations from '../../utilities/Animations';
import './Resume.css';
import { of } from 'rxjs';

function Resume(props) {

    const [selectedBulletIndex,setselectedBulletIndex]=useState(0);
    const [carousaloffsetStyle,setcarousaloffsetStyle]=useState({});

    let fadeInScreenHandler=(screen)=>{
        if(screen.fadeInScreen!==props.id) return;
        Animations.animations.fadeInScreen(props.id);
    }
    const fadeInSubscription=ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const ResumeHeading=(props)=>{
        return(
            <div className="resume-heading">
            <div className="resume-main-heading">
                <div className="heading-bullet"></div>
                
                <span>{props.heading?props.heading:''}</span>
                    {props.fromDate && props.toDate?(
                        <div className="heading-date">
                            {props.fromDate+"-"+props.toDate}
                        </div>
                    ):(
                        <div></div>
                    )} 
            </div>
            <div className='resume-sub-heading'>
                    <span>{props.subHeading?props.subHeading:''}</span>
            </div>
            <div className='resume-heading-description'>
                    <span>{props.description?props.description:''}</span>
            </div>
            <div className='resume-heading-description'>
                    <span> {props.percent?"CGPA/Percent: "+props.percent:''}</span>
            </div>
        </div>
        )
    };

    const resumeBullets=[
        {label:"Education",logosrc:"education.svg"},
        {label:"Work History",logosrc:"work-history.svg"},
        {label:"Programming Skills",logosrc:"programming-skills.svg"},
        {label:"Projects",logosrc:"projects.svg"},
        {label:"Co-curriculars/Interests",logosrc:"interests.svg"},
    ];

    const programmingSkillDetails=[
        {skill:"JavaScript",ratingPercentage:75},
        {skill:"C++",ratingPercentage:70},
        {skill:"Python",ratingPercentage:70},
        {skill:"MERN stack",ratingPercentage:80},
        {skill:"ReactJS",ratingPercentage:80},
        {skill:"NodeJS",ratingPercentage:75},
        {skill:"React Native",ratingPercentage:75},
        {skill:"HTML & CSS",ratingPercentage:85},
        {skill:"Flutter",ratingPercentage:70},
        {skill:"SQL",ratingPercentage:80},
    ];


    const projectDetails=[
        {
            title:<div>Ecommerce Website <a href='https://ecommercewebsite31.herokuapp.com/' target="_blank">(Click to visit)</a></div>,
            duration:{fromDate:"2021",toDate:"2022"},
            description:"Developed and Deployed Ecommerce Application with Authentication,Cart,Admin/User Dashboard/Payment gateway and Nodemailer to Notify made purchase.",
            subHeading:"Technologies Used: ReactJS, NodeJS, Bootstrap, ExpressJS, MongoDB Database",
        },
        {
            title:"Mall metering Management",
            duration:{fromDate:"2020",toDate:"2021"},
            description:"Meter Electricity consumption and Bill mangement system.",
            subHeading:"Technologies Used: ReactJS, Django, Bootstrap, PostgreSQL",
        },
        {
            title:"Classify Defaulter [American Express Course Work Project]",
            duration:{fromDate:"2021",toDate:"2022"},
            description:"Credit Risk Model to Classify if person is defaulter or not.",
            subHeading:"Technologies Used: Python, SKlearn Kit",
        },
        {
            title:"Stock Sentiment Analysis",
            duration:{fromDate:"2020",toDate:"2021"},
            description:"Predict if stock Prices will go Up or Down using news Headline.",
            subHeading:"Technologies Used: Python, NLTK, Tensorflow",
        },  
        
    ];

    const resumeDetails=[
        <div className='resume-screen-container-1' key="education">
            <ResumeHeading
            heading={"Indian Institute of Technology Madras (IITM)"}
            subHeading={"Bachelor in Technology in Mechanical Engineering"}
            percent={"7.8"}
            fromDate={"2019"}
            toDate={"2023"}
            />
            <ResumeHeading
            heading={"RatanBai Walbai Junior College of Science"}
            subHeading={"Seconadary High School : Science"}
            percent={"89 %"}
            fromDate={"2017"}
            toDate={"2019"}
            />
            <ResumeHeading
            heading={"Smt. Sulochanadevi Singhania School"}
            subHeading={"Primary High School"}
            percent={"97.2 %"}
            fromDate={"2010"}
            toDate={"2019"}
            />
        </div>,
        <div className='resume-screen-container-2' styles={{ }} key="work-experience">
            <ResumeHeading
            heading={"Javiss Technologies"}
            subHeading={"Full-Stack Web Developer Intern"}
            fromDate={"2020"}
            toDate={"2021"}
            />
            <div className="experience-description">
                <span className="resume-description-text">
                    Worked as both Frontend and Backend developer.
                </span>
            </div>
            <div className="experience-description">
                
                <span className="resume-description-text">
                - Designed Backend in Django and Frontend Screen in React.
                </span>
                <br/>
                <span className="resume-description-text">
                - Prepared Presentations and Documentation of Code.
                </span>
            </div>

            <ResumeHeading
            heading={"Qkres"}
            subHeading={"Mobile App Developer Intern"}
            fromDate={"2021"}
            toDate={"2021"}
            />
            <div className="experience-description">
                <span className="resume-description-text">
                    Lead team of four to build product prototype in Flutter framework.
                </span>
            </div>
            <div className="experience-description">
                <span className="resume-description-text">
                    - Worked on frontend side to create various screen components,like SignIn/SignUP, Homescreen, Seat booking system, Barcode for attendance.
                </span>

            </div>
        </div>,
        <div style={{height:210}}>

        </div>,
            
            <div className="resume-screen-container-3 programming-skills-container" key="programming-skills">
                {programmingSkillDetails.map((skill,index)=>(
                    <div className='skill-parent' key={index}>
                        <div className='heading-bullet'></div>
                        <span>{skill.skill}</span>
                            <div className='skill-percentage'>
                                <div style={{width:skill.ratingPercentage+"%"}} className='active-percentage'>
                                </div>
                            </div>
                    </div>
                ))}
            </div>,
            <div style={{height:150}}>

            </div>,

        <div className='resume-screen-container-4' key='projects'>
            {projectDetails.map((projectdetails,index)=>(
                <ResumeHeading
                key={index}
                heading={projectdetails.title}
                subHeading={projectdetails.subHeading}
                description={projectdetails.description}
                fromDate={projectdetails.duration.fromDate}
                toDate={projectdetails.duration.toDate}
                />
            ))}
        </div>,
        <div style={{height:20}}>

        </div>,

        <div className='resume-screen-container-5' key='interests'>
            <ResumeHeading
            heading='Shaastra_Tech Coordinator'
            description='Coordinated and managed online games during Annual Tech Fest Shaastra.'
            />
            <ResumeHeading
            heading='CFI Product Design Club Project Member'
            description='Ideated and built in a team a Course management App in React Native.'
            />
            <ResumeHeading
            heading='Brainly Freelancer'
            description='Solved Daily problems for high school students and solved their problems in maths and physics domain on brainly platform.'
            />
            <ResumeHeading
            heading='Photography'
            description='In love to take pictures of nature and its beauty where ever I travel.'
            />
            <ResumeHeading
            heading='Pencil Shading and Painting'
            description='In my free time I love sketch, let it be car or still life.'
            />
            <ResumeHeading
            heading='Fitness'
            description='I give time to fitness daily, atleast 30 mins a day, let it be physical exercise or meditation.'
            />
        </div>
    ];


    const handleCarousal=(index)=>{
        let offsetHeight=360;
            if(index==2){
                offsetHeight=430;
            }else if(index==3){
                offsetHeight=400;
            }else if(index==4){
                offsetHeight=390;
            }
        let newCarousalOffset={
            style:{transform:"translateY("+index*offsetHeight*-1+"px)"},
        };
        setcarousaloffsetStyle(newCarousalOffset);
        setselectedBulletIndex(index);
    };

    const getBullets=()=>{
        return resumeBullets.map((bullet,index)=>(
            <div
            onClick={()=>handleCarousal(index)}
            className={index===selectedBulletIndex?"bullet selected-bullet":"bullet"}
            key={index}
            >
                <img className='bullet-logo'
                src={require(`../../assets/Resume/${bullet.logosrc}`)}
                alt='oops, no internet connection'
                />
                <span className='bullet-label'>{bullet.label}</span>
                

            </div>
        ))
    }

    const getResumeScreen=()=>{
        return(
            <div
            style={carousaloffsetStyle.style}
            className='resume-details-carousal'>
                {resumeDetails.map((ResumeDetails)=>(ResumeDetails))}

            </div>
        )
    }
    

    return (
        <div className='resume-container screen-container fade-in' id={props.id || ''}>
            <div className='resume-content'>
                <ScreenHeading title={'Resume'} subHeading={'My formal Details'}/>
                <div className='resume-card'>
                    <div className="resume-bullets">
                        <div className="bullet-container">
                            <div className="bullet-icons"></div>
                            <div className="bullets">{getBullets()}</div>
                        </div>
                    </div>
                    <div className="resume-bullet-details">{getResumeScreen()}</div>
                </div>
            </div>
        </div>
    );
}

export default Resume;