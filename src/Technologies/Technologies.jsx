import React, {useRef, useState, useCallback, useEffect} from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import Tip from 'react-tooltip';
import '../index.css';
import './Technologies.css'
import scrum from '../Assets/agile-scrum-logo.png';
import oop from '../Assets/oop-logo.png';
import unix from '../Assets/terminal-logo.png';
import linux from '../Assets/linux-logo.png';
import web from '../Assets/web-logo.png';
import react from '../Assets/react-logo.png';
import node from '../Assets/node-logo.png';
import dart from '../Assets/dart-logo.png';
import flutter from '../Assets/flutter-logo.png';
import c from '../Assets/C++-logo.png';
import java from '../Assets/java-logo.png';
import javafx from '../Assets/javafx-logo.png';
import express from '../Assets/express-logo.png';
import socket from '../Assets/socket-logo.png';
import github from '../Assets/github-logo.png';
import bootstrap from '../Assets/bootstrap.png';


const Technologies = ({passRef}) => {

    const technologies=[
        {title: 'Agile Scrum', link: 'https://www.scrum.org/resources/what-is-scrum', icon: scrum},
        {title: 'Object Oriented Programming', link: 'https://searchapparchitecture.techtarget.com/definition/object-oriented-programming-OOP', icon: oop},
        {title: 'GitHub', link: 'https://github.com/', icon: github},
        {title: 'Linux Environment', link: 'https://www.linux.org/', icon: linux},
        {title: 'JavaScript HTML CSS', link: 'https://www.ecma-international.org/', icon: web},
        {title: 'React JS', link: 'http://reactjs.org', icon: react},
        {title: 'Node JS', link: 'https://nodejs.org/en/', icon: node},
        {title: 'Flutter', link: 'https://flutter.dev/', icon: flutter},
        {title: 'Dart', link: 'https://dart.dev/', icon: dart},
        {title: 'C++', link: 'https://www.cplusplus.com/', icon: c},
        {title: 'Java', link: 'https://www.java.com/en/', icon: java},
        {title: 'JavaFX', link: 'https://openjfx.io/', icon: javafx},
        {title: 'Bootstrap', link: 'https://getbootstrap.com/', icon: bootstrap},
        {title: 'Socket.IO', link: 'https://socket.io/', icon: socket},
    ];
    const scrollRef = useRef(null); //Reference Outer Scroll Box
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
    const scrollLeft = () => scrollRef.current.scrollLeft -= 300;
    const scrollRight = () => scrollRef.current.scrollLeft += 300;


//NOTE: on small screen flexbox mapping changed to horizontal scroll overflow. see: technologies.css
//* When not matching: display is none.
    return (<div id='technologies-section' ref={passRef}  class='container-fluid no-padding no-margin w-100' style={{position: 'relative',  left: 0, right: 0, paddingTop: '3.0rem'}}>
        <h1 className='title' >Technologies</h1>
        <div className='technologies-box-map' >
            {technologies.map((tech)=> 
            <span key={tech.title}>
                    <a key={tech.title} data-tip data-for={tech.title + '-tip'} href={tech.link} target='_blank' rel="noopener noreferrer" className='tech-icon' >
                        <img src={tech.icon} alt={tech.title} className='' style={{margin: '0.5rem', padding: '0', height: '3.5rem', }}></img>
                        {/* <h3 className='link' className=''  style={{fontSize: '1rem', marginTop: '0.5rem', color: 'var(--green)'}}>{tech.title}</h3> */}
                    </a>
                    <Tip id={tech.title + '-tip'}><span>View: {tech.link}</span></Tip>
            </span>)}
        </div>
        {leftVisible ? <div class='tech-arrow-Nav tech-arrow-Left' style={{height: scrollRef.current == null ? 117 : scrollRef.current.offsetHeight, opacity: ''}} onClick={() => scrollLeft()}><div style={{display: 'table-cell', verticalAlign: 'middle'}}>&lt;</div></div> : <div></div>}
        {rightVisible ? <div class='tech-arrow-Nav tech-arrow-Right' style={{height: scrollRef.current == null ? 117 : scrollRef.current.offsetHeight, opacity: ''}} onClick={() => scrollRight()}><div style={{display: 'table-cell', verticalAlign: 'middle'}}>&gt;</div></div> : <div></div>}
        <div ref={scrollRef} className='technologies-box-scroll' >
            {technologies.map((tech)=> 
            <span key={tech.title}>
                    <a key={tech.title} data-tip data-for={tech.title + '-tip'} href={tech.link} target='_blank' rel="noopener noreferrer" className='tech-icon' >
                        <img src={tech.icon} alt={tech.title} className='' style={{margin: '0.5rem', padding: '0', height: '3.5rem', }}></img>
                        {/* <h3 className='link' className=''  style={{fontSize: '1rem', marginTop: '0.5rem', color: 'var(--green)'}}>{tech.title}</h3> */}
                    </a>
                    <Tip id={tech.title + '-tip'}><span>View: {tech.link}</span></Tip>
            </span>)}
        </div>
        {/* <hr className='line'/> */}
    </div>);
}

export default Technologies;