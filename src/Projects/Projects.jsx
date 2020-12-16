// import 'bootstrap/dist/css/bootstrap.css';
import React, {useState, useCallback} from 'react';
import Tip from 'react-tooltip';
import Player from 'react-video-js-player';
import Carousel from 'react-bootstrap/Carousel'
import '../index.css';
import './Projects.css'
import github from '../Assets/github-logo.png';
import deskImage from '../Assets/desk-image.png';
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
import conceptLogin from '../Assets/conceptEnvirnoment-login.png';
import conceptSingle from '../Assets/conceptEnvirnoment-single.png';
import conceptTree from '../Assets/conceptEnvirnoment-tree.png';
import conceptPoster from '../Assets/conceptEnvironmentPoster.png';
import conceptVersion from '../Assets/conceptEnvironment-versionDemo.mp4';
import editorPoster from '../Assets/collaborativeEditorPoster.png';
import editor from '../Assets/fasettoTextEditor.jpg';
import editorHeader from '../Assets/fasettoEditor-top.png';
import editorFeatures from '../Assets/fasettoEditor-bottom.png';

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

const projects = [ //Target no spaces or Caps
    {target: 'concept-environment', title: 'Concept Environment', github: '', hours: 300,
        tech: ['react', 'web', 'node', 'express', 'socket'],
        pages: [
            {target: 'slide1', image: conceptTree, type: '', description: 'Fasetto Project: A collaborative place where ideas can be developed and explored.'},
            {target: 'slide2', image: conceptLogin, type: '', description: 'Multiple users are can join different sessions and create a mind tree.  Prior to opening a session, users may select a version, revert or branch to a new session. '},
            {target: 'slide3', image: conceptSingle, type: '', description: 'Starting with an original idea, users can expand and grow with more detailed concepts.  Graphically drawing relations provided the needed insight for new innovation.'},
            {target: 'slide4', image: conceptVersion, type: 'video', description: 'Special features include Version Control with the ability to view, branch, or revert any version.  For each version, the edit conducted and by whom is recorded for reference.  In addition, ability to Zoom and just between Map and Hierarchy View, allow for greater accessibility to users.'},
            {target: 'slide5', image: conceptPoster, type: 'vertical-scroll', description: 'Conducted crowd-source research for Concept Environment applications, as well as additional requested features.  Also, created a marketing poster to reach a greater audience.'},
    ]},
    {target: 'gravity-editor', title: 'Gravity Editor', github: '', hours: 70,
        tech: ['react', 'web', 'slate'],
        pages: [
            {target: 'slide1', image: editorHeader, type: '', description: 'Fasetto Project: Fasetto Collaborative Text Editor enables users of the Gravity Platform to construct, share, and amend documents.  Fasetto Editor allows multiple users to simultaneously edit documents with real-time data syncing.  This will empower users to make changes to papers and form directly on the Gravity system during meeting presentations and conference calls raising productivity and efficiency in the workplace.'},
            {target: 'slide2', image: editorFeatures, type: '', description: 'Gained in depth experience using Slate-js framework and API interface.  Parsed and interpreted nodes (text block sections) and leaves (character strings) to achieve desire styling.'},
            // {target: 'slide3', image: editor, type: 'vertical-scroll', description: ''},
            {target: 'slide4', image: editorPoster, type: 'vertical-scroll', description: ''},
    ]},

];

const Projects = ({passRef}) => {

    const [projectIndex, setProjectIndex] = useState(null);   
    
    const [pageIndex, setPageIndex] = useState(0);

    //useEffect Essential for re-rendering Component
    const [, updateState] = useState();
    const forceUpdate = useCallback(() => updateState({}), []);
    // useEffect(()=>{console.log('Changing Carousel to: ',projectIndex)}, [projectIndex]);
    // useEffect(()=>{console.log('Changing Page Index to: ',pageIndex)}, [pageIndex]);

    return (<div id='projects-section' ref={passRef}  class='container-fluid row no-padding no-margin w-100 h-100' style={{display: 'flex', flexDirection: 'column', backgroundColor: 'black', margin: '1.0rem 0', paddingTop: '0.5rem'}}>
        <h1 id='project-title' >Projects</h1>        
        {projectIndex == null ?
            <Carousel key= {'preview'}  activeIndex={pageIndex} onSelect={(i,e)=>{ setPageIndex(i); console.log('select-called');}} className='col-lg-8 col-md-10' style={{margin: '0.25rem auto', padding: '0',}}>
                {projects.map((project,i) => 
                    <Carousel.Item key={project.target+i}   interval={2500} onClick={()=>{ setProjectIndex(i); setPageIndex(0); forceUpdate();}} style={{maxHeight: '75vh', }}>
                        <img  className="d-block w-100 project-image" src={project.pages[0].image} alt={project.target} />
                        <h3 className='carousel-title'>{project.title}</h3>
                        <div className='carousel-description-box' >
                            <p className='carousel-description' style={{opacity: '90%'}} >{project.pages[0].description}</p>
                        </div>
                    </Carousel.Item>)}
            </Carousel>
            : 
            <Carousel key= {'in-depth'+projectIndex}  activeIndex={pageIndex} onSelect={(i,e)=>{setPageIndex(i); console.log('select-called'); forceUpdate();}} className='col-lg-8 col-md-10' style={{margin: '1.0rem auto',}}>
                {projects[projectIndex].pages.map((page,i) => 
                    <Carousel.Item key={projects[projectIndex].pages[i].target+i+projects[projectIndex].title} interval={5000} style={{maxHeight: '75vh', overflowY: page.type == 'vertical-scroll' ? 'scroll' : 'hidden'}} class={i==0 ? 'active' : ''}>
                    {page.type == 'video' ?
                    <Player playing src={conceptVersion}  height='420' width='720' controls={true} style={{margin: '0 auto', textAlign: 'center'}} className='project-image'/>
                    : <img  className="d-block w-100 project-image" src={projects[projectIndex].pages[i].image} alt={projects[projectIndex].pages[i].target} />}
                        <h3 className='carousel-title' >{projects[projectIndex].title}</h3>
                        {page.type == 'vertical-scroll' ? <div></div>
                        : <div id='describe-box' className='carousel-description-box' >
                            <p className='carousel-description' style={{opacity: '90%'}} >{projects[projectIndex].pages[i].description}</p>
                        </div>}
                    </Carousel.Item>)}
            </Carousel>
            }
        {projectIndex != null ?
        <div id='project-scroll-box'  >
            <div key={'hours'} data-tip data-for={'hours-tip'} className='project-tech' style={{margin: '0', padding: '0.15rem 0.25rem', height: '2.25rem', borderRadius: '0.25rem', color: 'var(--green)', background: 'var(--grey)'}}>{projects[projectIndex].hours} Hours</div>
            <Tip id={'hours-tip'}><span>Project Length</span></Tip>
            {projects[projectIndex].github == '' ? <div></div>
            : <span>
                <a key={'github'} data-tip data-for={'gitHub'} href={projects[projectIndex].github} target='_blank' rel="noopener noreferrer" className='project-tech' >
                    <img src={github} className='' style={{margin: '0', padding: '0.15rem 0.25rem', height: '2.25rem', borderRadius: '0.25rem', background: 'var(--grey)'}}></img>
                    {/* <h3 className='link' style={{fontSize: '1rem', marginTop: '0.5rem', color: 'var(--green)'}}>{technologies.get(t).title}</h3> */}
                </a>
                <Tip id={'gitHub'}><span>Source Code</span></Tip>
                </span>}
            {projects[projectIndex].tech.map((t,i)=>
            <span>
                <a key={technologies.get(t).title}  data-tip data-for={technologies.get(t).title + '-tip'} href={technologies.get(t).link} target='_blank' rel="noopener noreferrer" className='project-tech' >
                        <img src={technologies.get(t).icon} alt={technologies.get(t).target} className='' style={{margin: '0', padding: '0.15rem 0.25rem', height: '2.25rem', borderRadius: '0.25rem', background: 'var(--grey)'}}></img>
                        {/* <h3 className='link' style={{fontSize: '1rem', marginTop: '0.5rem', color: 'var(--green)'}}>{technologies.get(t).title}</h3> */}
                    </a>
                    <Tip id={technologies.get(t).title + '-tip'}><span>View: {technologies.get(t).link}</span></Tip>
                </span>)}
        </div> : <div></div>}
        <div id='project-scroll-box'  >
            {projects.map((project,i)=> projectIndex == i ? <div></div> :
                <span>
                    <div key={project.target} data-tip data-for={project.target + i + '-tip'} className='project-list' onClick={()=>{ setProjectIndex(i); setPageIndex(0); forceUpdate();}}>
                        <h3 className='project-list-title'>{project.title}</h3>
                        <img src={project.pages[0].image} alt={project.target} className='project-list-image' ></img>
                        <p className='project-list-text'>{project.pages[0].description.split('.',1)[0]+'.'}</p>
                    </div>
                    <Tip id={project.target + i + '-tip'}><span>View {project.title}</span></Tip>
                </span>)}
        </div>
        {/* <hr className='line'/> */}
    </div>);
}

export default Projects;