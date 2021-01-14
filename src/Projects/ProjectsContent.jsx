// import 'bootstrap/dist/css/bootstrap.css';
import React, {useState, useCallback, useEffect, useRef} from 'react';
import Tip from 'react-tooltip';
import Player from 'react-video-js-player';
// import Carousel from 'react-bootstrap/Carousel'
import '../index.css';
import './Projects.css';
import projects from './ProjectsData';
import github from '../Assets/github-logo.png';
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
import slate from '../Assets/slate.png';
import bootstrap from '../Assets/bootstrap.png';
import socket from '../Assets/socket-logo.png';
import android from '../Assets/android-studio-logo.png';

const technologies = new Map();
technologies.set('github', {title: 'Git Hub', link: 'https://github.com/', icon: github, background: 'var(--grey)'});
technologies.set('agile', {title: 'Agile Scrum', link: 'https://www.scrum.org/resources/what-is-scrum', icon: scrum, background: 'var(--grey)'});
technologies.set('oop', {title: 'Object Oriented Programming', link: 'https://searchapparchitecture.techtarget.com/definition/object-oriented-programming-OOP', icon: oop, background: 'var(--grey)'});
technologies.set('linux', {title: 'Linux Environment', link: 'https://www.linux.org/', icon: linux, background: 'var(--grey)'});
technologies.set('web', {title: 'JavaScript HTML CSS', link: 'https://www.ecma-international.org/', icon: web, background: 'var(--grey)'});
technologies.set('react', {title: 'React JS', link: 'http://reactjs.org', icon: react, background: 'var(--grey)'});
technologies.set('node', {title: 'Node JS', link: 'https://nodejs.org/en/', icon: node, background: 'var(--grey)'});
technologies.set('flutter', {title: 'Flutter', link: 'https://flutter.dev/', icon: flutter, background: 'var(--grey)'});
technologies.set('dart', {title: 'Dart', link: 'https://dart.dev/', icon: dart, background: 'var(--grey)'});
technologies.set('c++', {title: 'C++', link: 'https://www.cplusplus.com/', icon: c, background: 'var(--grey)'});
technologies.set('java', {title: 'Java', link: 'https://www.java.com/en/', icon: java, background: 'var(--grey)'});
technologies.set('javafx', {title: 'JavaFX', link: 'https://openjfx.io/', icon: javafx, background: 'var(--grey)'});
technologies.set('socket', {title: 'Socket.IO', link: 'https://socket.io/', icon: socket, background: 'var(--grey)'});
technologies.set('express', {title: 'Express-js', link: 'https://expressjs.com/', icon: express, background: 'var(--grey)'});
technologies.set('slate', {title: 'Slate-js', link: 'https://docs.slatejs.org/', icon: slate, background: 'var(--grey)'});
technologies.set('bootstrap', {title: 'Bootstrap', link: 'https://getbootstrap.com/', icon: bootstrap, background: 'var(--grey)'});
technologies.set('android', {title: 'Android Studio', link: 'https://developer.android.com/studio/', icon: android, background: 'var(--grey)'});




//Custom Hook : Interval for autoplay
function useAutoPlay(callback, delay) {
    const savedCallback = useRef();
    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
    // Set up the interval.
    useEffect(() => {
      let id = setInterval(() => {
        savedCallback.current();
      }, delay);
      return () => {clearInterval(id);}
    }, [delay]);
  }

const ProjectsContent = ({passRef}) => {
    const carouselRef = useRef(null); //Reference for height of left/right arrows
    //Configure Height in Pixels for video player, runs once on load
    const [carouselHeight, setCarouselHeight] = useState(744);
    useEffect(()=>setCarouselHeight(carouselRef.current.offsetHeight));
        // useCallback(()=>{
        //     if(caroselRef.current != null) setArrowHeight(caroselRef.current.offsetHeight);
        //     console.log('Height is: ', arrowHeight);
        // },[caroselRef.current]);

//Controls for Display in Carousel
    const [previewMode, setPreviewMode] = useState(true);
    const [projectIndex, setProjectIndex] = useState(0);       
    const [pageIndex, setPageIndex] = useState(0);

            //useEffect Essential for re-rendering Component - Testing / Temporary Only
            // const [, updateState] = useState();
            // const forceUpdate = useCallback(() => updateState({}), []);
            // useEffect(()=>{console.log('Changing Carousel to: ',projectIndex)}, [projectIndex]);
            // useEffect(()=>{console.log('Changing Page Index to: ',pageIndex)}, [pageIndex]);

    //Animation
    const [autoPlay, setAutoPlay] = useState(true);
        //Reset Page on Project Change
        useEffect(()=>{
            setPageIndex(0);     
        }, [previewMode, projectIndex]);

    //Regular Interval, AutoPlay only for Preview Mode
    useAutoPlay(()=>{
        if(previewMode && autoPlay) { 
            setProjectIndex(previous => previous == projects.length-1 ? 0 : previous + 1);
        } 
    }, 3500);

    //Whether to Display Side Arrows
    const allowPrevious = () => previewMode ? false : (pageIndex > 0);
    const allowNext = () => previewMode ? false : (pageIndex < (projects[projectIndex].pages.length-1));    

    return (<div style={{}}>        
            <div key= {'carousel'}  ref={carouselRef} data-tip data-for={'carousel-tip'} className='carousel-box'  onClick={()=>{setPreviewMode(false); }} onMouseEnter={() => {setAutoPlay(false); }} onMouseLeave={() => {setAutoPlay(true); }} style={{margin: '0 auto',}}>
                <div className='carousel-content' key={projects[projectIndex].pages[pageIndex].target+pageIndex+projects[projectIndex].title} style={{height: projects[projectIndex].pages[pageIndex].type == 'vertical-scroll' ? '100%' : '', width: projects[projectIndex].pages[pageIndex].type == 'vertical-scroll' ? '100%' : '', maxHeight: '75vh', overflowY: projects[projectIndex].pages[pageIndex].type == 'vertical-scroll' ? 'scroll' : 'hidden', margin: '0.25rem auto'}} >
                {projects[projectIndex].pages[pageIndex].type == 'video' ?
                <Player playing src={projects[projectIndex].pages[pageIndex].content}  height={carouselRef.current.offsetHeight} controls={false} bigPlayButtonCentered={true} autoplay={true} style={{height: '100%', width: '100%', margin: '0 auto', textAlign: 'center'}} className='project-image'/>
                : <img  className="d-block project-image" src={projects[projectIndex].pages[pageIndex].content} alt={projects[projectIndex].pages[pageIndex].target}  style={{width: projects[projectIndex].pages[pageIndex].type == 'vertical-scroll' ? '100%' : '100%', maxHeight: projects[projectIndex].pages[pageIndex].type == 'vertical-scroll' ? '' : '75vh'}}/>}
                    <h3 className='carousel-title' >{projects[projectIndex].title}</h3>
                    {projects[projectIndex].pages[pageIndex].type == 'vertical-scroll' ? <div></div>
                    : <div id='describe-box' className='carousel-description-box' >
                        <p className='carousel-description' style={{paddingBottom: previewMode ? '0.4rem' : ''}} >{projects[projectIndex].pages[pageIndex].description}</p>
                    </div>}
                </div>
                {!previewMode ? <span></span>
                : <Tip id={'carousel-tip'}><span>{previewMode ? 'Click to View' : 'Paused while Hovering'}</span></Tip>}
                
                <div className='carousel-indicators-box'>
                     {previewMode ? <div></div> : projects[projectIndex].pages.map((page, i) => <div className={i==pageIndex ? 'carousel-indicators-active' : 'carousel-indicators'} onClick={()=>setPageIndex(i)}></div>)}
                </div>
                {allowPrevious() ? <div key= {'previous'}  data-tip data-for={'previous-tip'} class='project-arrow project-arrow-Left' style={{}} onClick={() => allowPrevious() ? previewMode ? setProjectIndex(previous => previous - 1) : setPageIndex(previous => previous - 1):{}}><div style={{ display: 'table-cell', verticalAlign: 'middle'}}>&lt;</div></div> : <div></div>}
                <Tip id={'previous-tip'}><span>Previous Slide</span></Tip>
                {allowNext() ? <div key= {'next'}  data-tip data-for={'next-tip'} class='project-arrow project-arrow-Right' style={{}} onClick={() => allowNext() ? previewMode ? setProjectIndex(previous => previous + 1) : setPageIndex(previous => previous + 1):{}}><div style={{ display: 'table-cell', verticalAlign: 'middle'}}>&gt;</div></div> : <div></div>}
                <Tip id={'next-tip'}><span>Next Slide</span></Tip>
            </div>
        {projectIndex != null ?
        <div id='project-scroll-box'  >
            <div key={'hours'} data-tip data-for={'hours-tip'} className='project-tech' style={{margin: '0 0.25rem', padding: '0.15rem 0.25rem', height: '2.25rem', borderRadius: '0.25rem', color: 'var(--green)', background: 'var(--grey)'}}>{projects[projectIndex].hours} Hours</div>
            <Tip id={'hours-tip'}><span>Project Length</span></Tip>
            {projects[projectIndex].github == '' ? <div></div>
            : <span>
                <a key={'github'} data-tip data-for={'gitHub'} href={projects[projectIndex].github} target='_blank' rel="noopener noreferrer" className='' >
                    <img src={github} className='project-tech' style={{margin: '0 0.25rem', padding: '0.15rem 0.25rem', height: '2.25rem', borderRadius: '0.25rem', background: 'var(--grey)'}}></img>
                    {/* <h3 className='link' style={{fontSize: '1rem', marginTop: '0.5rem', color: 'var(--green)'}}>{technologies.get(t).title}</h3> */}
                </a>
                <Tip id={'gitHub'}><span>Source Code</span></Tip>
                </span>}
            {projects[projectIndex].tech.map((t,i)=>
            <span key={technologies.get(t).title}>
                <a   data-tip data-for={technologies.get(t).title + '-tip'} href={technologies.get(t).link} target='_blank' rel="noopener noreferrer" className='' >
                        <img src={technologies.get(t).icon} alt={technologies.get(t).target} className='project-tech' style={{margin: '0 0.25rem', padding: '0.15rem 0.25rem', height: '2.25rem', borderRadius: '0.25rem', background: 'var(--grey)'}}></img>
                        {/* <h3 className='link' style={{fontSize: '1rem', marginTop: '0.5rem', color: 'var(--green)'}}>{technologies.get(t).title}</h3> */}
                    </a>
                    <Tip id={technologies.get(t).title + '-tip'}><span>View: {technologies.get(t).link}</span></Tip>
                </span>)}
        </div> : <div key={'active-project'}></div>}
        <div id='project-scroll-box'  >
            {projects.map((project,i)=> (!previewMode && projectIndex == i) ? <div></div> :
                <span>
                    <div key={project.target} data-tip data-for={project.target + i + '-tip'} className='project-list' onClick={()=>{setPreviewMode(false); setProjectIndex(i); setPageIndex(0); }}>
                        <h3 className='project-list-title'>{project.title}</h3>
                        <img src={project.pages[0].content} alt={project.target} className='project-list-image' ></img>
                        <p className='project-list-text' style={{opacity: ''}}>{project.pages[0].description.split('.',1)[0]+'.'}</p>
                    </div>
                    <Tip id={project.target + i + '-tip'}><span>View {project.title}</span></Tip>
                </span>)}
        </div>
    </div>);
}

export default ProjectsContent;