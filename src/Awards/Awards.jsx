import React, {useRef, useState, useCallback, useEffect} from 'react';
import Tip from 'react-tooltip';
import '../index.css';
import './Awards.css'
//Note: all images are 300px x 300px square cropped
import deskPlusPLusImage from '../Assets/deskPlusPlus.png';
import frcImage from '../Assets/first.png';
import clickBaitImage from '../Assets/clickBait.png';
import routingPaper from '../Assets/Routing-Protocols.pdf';
import routingImage from '../Assets/protocol.png';
import osPaper from '../Assets/Remote-Operating-Systems.pdf';
import osImage from '../Assets/os.png';
import facialPaper from '../Assets/Facial-Recognition.pdf';
import facialImage from '../Assets/face.png';
import projectImage from '../Assets/project.png';
import projectReport from '../Assets/Eagle-Project-Report.pdf';
import eagleImage from '../Assets/eagle.png';
import eaglePaper from '../Assets/ECOH.pdf';
import scholarshipDocument from '../Assets/Scholarship-Application.pdf';
import scholarshipImage from '../Assets/scholarship.png';
import automationImage from '../Assets/garden.png';
import automation from '../Assets/Faribault-Automation.pdf';
import greenhouseImage from '../Assets/greenhouse.png';
// import greenhouseImage from '../Assets/greenhouse2.png';
import greenhouse from '../Assets/Plants-Display.pdf';
import github from '../Assets/github.png';

const Awards = ({passRef}) => {

    const accomplishments = [
        {title: 'CS Dept. Scholarship',  description: 'Recognition for my performance in classes and outside projects in the field of Computer Science', source: scholarshipDocument, cover: scholarshipImage, prompt: 'See Application'},
        {title: 'Eagle Scout', description: 'Achieved highest Rank in the Boy Scouts of America organization.  Proved abilities in survival, citizenship, and emergency preparedness.', source: eaglePaper, cover: eagleImage, prompt: 'See ECOH'},
        {title: 'Eagle Project', description: 'Planned, organized, and lead construction project of installing park concrete picnic tables and landscaping.', source: projectReport, cover: projectImage, prompt: 'See Report'},
        {title: 'Facial Recognition',  description: 'Advances in biometric technology, applications for facial recognition, and ethical concerns.', source: facialPaper, cover: facialImage, prompt: 'See Paper'},
        {title: 'ClickBait Advertising',  description: 'Ethical analysis of online advertising and the effects of clickBait across the internet.', source: 'https://youtu.be/i_6QNLfe8d8', cover: clickBaitImage, prompt: 'See Animated Presentation'},
        {title: 'Routing Protocols',  description: 'Research analysis of internet routing protocols.  Analyzed differences between RIP, IGRP, and OSPF.', source: routingPaper, cover: routingImage, prompt: 'See Paper'},
        {title: 'Remote OS',  description: 'Detecting remote operating systems theory and techniques.  Published results of NMAP network testing and analysis.', source: osPaper, cover: osImage, prompt: 'See Paper'},    
        {title: 'Greenhouse Automation',  description: 'Final Paper for Advanced Composition, under esteemed published author Larry Gavin.  Conducted field interviews as primary research initiative.', source: automation, cover: automationImage, prompt: 'See Paper'},
        {title: 'Desk ++',  description: 'Collaborative speech presentation for product invention and business model.  Created CAD Design and demo video to showcase product.', source: 'https://youtu.be/5Y85v9fZJ80', cover: deskPlusPLusImage, prompt: 'See Demo video'},
        {title: 'First Robotics',  description: 'Team #5434 Falcon Robotics, placed at State Junior and Senior Year.   Experience in 3D design, LabVIEW, and Manufacturing.', source: 'https://www.firstinspires.org/', cover: frcImage, prompt: 'See FRC'},
        {title: 'Greenhouse Business',  description: 'Operated a plant growing business in high school.  Performed analysis on growth records, business expenses, and marketing publications.', source: greenhouse, cover: greenhouseImage, prompt: 'See Publications'},
    ];
    
    const scrollRef = useRef(null); //Reference Outer Scroll Box
    const firstItem = useRef(null); //Reference First Item to get width, as adjusts with screen size = responsive
    const [leftVisible, setLeftVisible] = useState(false); //Left Scroll Arrow
    const [rightVisible, setRightVisible] = useState(true); //Right Scroll Arrow
     //Execute Once on Initial Render
    useEffect(() => {
        //Start adjusting to show scroll overlay arrows
        window.addEventListener('transitionend',onScroll);},[]);

        //Called on change in horizontal scroll determines whether scroll arrows are at the end and visible
        const displayLeft = () => scrollRef.current.scrollLeft == 0 ? false : true;
        const displayRight = () => scrollRef.current.scrollLeft > (scrollRef.current.scrollWidth - (scrollRef.current.offsetWidth*1.1)) ? false : true;
        const onScroll = useCallback((event) => {
            // if(displayLeft() != leftVisible) 
                setLeftVisible(displayLeft());
            // if(displayRight() != rightVisible) 
                setRightVisible(displayRight());
    }, []);
        
    //OnClick Action horizontal scroll shift of overlay buttons
    const scrollLeft = () => scrollRef.current.scrollLeft -= firstItem.current.offsetWidth || 300;
    const scrollRight = () => scrollRef.current.scrollLeft += firstItem.current.offsetWidth || 300;

    return (<div id='award-section' ref={passRef} class='no-padding no-margin w-100' style={{paddingTop: '3.0rem'}}>
        <h1 id='title' >Recognition</h1>
        {leftVisible ? <div class='award-arrow-Nav award-arrow-Left' style={{height: scrollRef.current == null ? 353 : scrollRef.current.offsetHeight, opacity: ''}} onClick={() => scrollLeft()}><div style={{ display: 'table-cell', verticalAlign: 'middle'}}>&lt;</div></div> : <div></div>}
        {rightVisible ? <div class='award-arrow-Nav award-arrow-Right' style={{height: scrollRef.current == null ? 353 : scrollRef.current.offsetHeight, opacity: ''}} onClick={() => scrollRight()}><div style={{ display: 'table-cell', verticalAlign: 'middle'}}>&gt;</div></div> : <div></div>}
        <div ref={scrollRef} id='award-scroll-box'  >
            {accomplishments.map((award,i)=> 
            <span key={award.title} ref={i==0?firstItem:null}>
                <a data-tip data-for={award.title + '-tip'} className='award' href={award.source} target='_blank' rel="noopener noreferrer"  style={{textDecoration: 'none'}}>
                    <h3 className='award-title'>{award.title}</h3>
                    <img src={award.cover} alt={award.title} className='award-image' ></img>
                    <p className='award-text' style={{opacity: ''}}>{award.description}</p>
                </a>
                <Tip id={award.title + '-tip'}><span>{award.prompt}</span></Tip>
            </span>)}
        </div>
        <hr className='line'/>
    </div>);
}

export default Awards;