// import 'bootstrap/dist/css/bootstrap.css';
import React, {useState, useCallback, useEffect, useRef} from 'react';
import Tip from 'react-tooltip';
import Player from 'react-video-js-player';
import { detect } from 'detect-browser';
// import Carousel from 'react-bootstrap/Carousel'
import '../index.css';
import './Projects.css';
import {projects, technologies} from './ProjectsData';
import github from '../Assets/github-logo.png';


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

//Custom Hook : Reference Current State in useCalback : https://scastiel.dev/posts/2019-02-19-react-hooks-get-current-state-back-to-the-future/
const useRefState = initialValue => {
    const [state, setState] = useState(initialValue);
    const stateRef = useRef(state);
    useEffect(
      () => { stateRef.current = state },
      [state]
    );
    return [state, stateRef, setState]
  }

const ProjectsContent = () => {
    const carouselRef = useRef(null); //Reference for height of left/right arrows
    //Configure Height in Pixels for video player, runs once on load
    const [carouselHeight, setCarouselHeight] = useState(744);
    useEffect(()=>(carouselRef != undefined && carouselRef.current != undefined) ? setCarouselHeight(carouselRef.current.offsetHeight) : null, []);
        // useCallback(()=>{
        //     if(caroselRef.current != null) setArrowHeight(caroselRef.current.offsetHeight);
        //     console.log('Height is: ', arrowHeight);
        // },[caroselRef.current]);
   
//Controls for Display in Carousel
    const [previewMode, previewModeRef, setPreviewMode] = useRefState(true);
    const getPreviewMode = () => previewMode;
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
            // autoPlay(true);
        }, [previewMode, projectIndex]);

    //Regular Interval, AutoPlay only for Preview Mode
    useAutoPlay(()=>{
        if(previewMode) { // && autoPlay
            setProjectIndex(previous => previous == projects.length-1 ? 0 : previous + 1);
        } 
    }, 5000);

    //Regular Interval, Toggle Demo Flashes
    const [invertDemo, setInvertDemo] = useState(false);
    useAutoPlay(()=>{
        setInvertDemo(previous => !previous);
    }, 750);

    //Whether to Display Side Arrows
    const allowPrevious = () => previewMode ? false : (pageIndex > 0);
    const allowNext = () => previewMode ? false : (pageIndex < (projects[projectIndex].pages.length-1));   

    //Restart Animation when not in View
    const contentRef = useRef(null);
    useEffect(()=>window.addEventListener('scroll',onProjectView),[]); //Execute Once onLoad
      //Start typing on scroll, only first occurrence
      const onProjectView = useCallback((event) => {
          if(!previewModeRef.current && ((contentRef != undefined && contentRef.current != undefined) && (window.scrollY > (contentRef.current.offsetTop + contentRef.current.offsetHeight)))
            && (detect() != undefined && detect().name == 'chrome')) { //Only Chrome browser restarts Preview
            setPreviewMode(true);
            // setAutoPlay(true);
            console.log('Restarting Project Preview Mode');
          } else if(previewModeRef.current && ((contentRef != undefined && contentRef.current != undefined) && (window.scrollY > (contentRef.current.offsetTop + contentRef.current.offsetHeight)))
          && (detect() == undefined || detect().name != 'chrome')) { //Non Chrome preview still active
            setPreviewMode(false);
            // setAutoPlay(false);

            console.log('Stopping Project Preview Mode');
          }
        // console.log('HERE ::', previewModeRef.current, contentRef.current.offsetTop, window.scrollY, contentRef.current.offsetBottom, contentRef.current.offsetHeight);
    }, []);
    
//Projects Scroll Box Management
    const projectScrollBoxRef = useRef(null); //Reference Outer Scroll Box
    const sampleItem = useRef(null); //Reference First Item to get width, as adjusts with screen size = responsive
    const [leftVisible, setLeftVisible] = useState(false); //Left Scroll Arrow
    const [rightVisible, setRightVisible] = useState(true); //Right Scroll Arrow

        //Called on change in horizontal scroll determines whether scroll arrows are at the end and visible
        const displayLeft = () => (projectScrollBoxRef != undefined && projectScrollBoxRef.current != undefined) ? projectScrollBoxRef.current.scrollLeft == 0 ? false : true : true;
        const displayRight = () => (projectScrollBoxRef != undefined && projectScrollBoxRef.current != undefined) ? projectScrollBoxRef.current.scrollLeft > (projectScrollBoxRef.current.scrollWidth - (projectScrollBoxRef.current.offsetWidth*1.1)) ? false : true : true;
    useEffect(()=>{
        // console.log('checking arrows', displayLeft(), displayRight());
        if(displayLeft() != leftVisible) 
            setLeftVisible(displayLeft());
        if(displayRight() != rightVisible) 
            setRightVisible(displayRight());
    }); //omitting brackets, is called on every state change
        
    //OnClick Action horizontal scroll shift of overlay buttons
    const scrollLeft = () => (projectScrollBoxRef != undefined && projectScrollBoxRef.current != undefined) ? projectScrollBoxRef.current.scrollLeft -= sampleItem.current.offsetWidth || 200 : null;
    const scrollRight = () => (projectScrollBoxRef != undefined && projectScrollBoxRef.current != undefined) ? projectScrollBoxRef.current.scrollLeft += sampleItem.current.offsetWidth || 200 : null;

    //Paused on Hover : onMouseEnter={() => {setAutoPlay(false); }} onMouseLeave={() => {setAutoPlay(true); }}
    return (<div ref={contentRef} style={{}}>   
            <div key= {'carousel'}  ref={carouselRef} data-tip data-for={'carousel-tip'} className='carousel-box'  onClick={()=>{setPreviewMode(false); }}  style={{margin: '0 auto',}}>
                <div className='' key={projects[projectIndex].pages[pageIndex].target+pageIndex+projects[projectIndex].title} style={{height: 'calc(min(1200px, 100vw) * 0.537)', width: projects[projectIndex].pages[pageIndex].type == 'vertical-scroll' ? '100%' : '', maxHeight: '75vh', overflowY: projects[projectIndex].pages[pageIndex].type == 'vertical-scroll' ? 'scroll' : 'hidden', margin: '0.25rem auto'}} >
                    <ProjectMedia projectIndex={projectIndex} pageIndex={pageIndex} carouselRef={carouselRef} />
                    <h3 className='carousel-title' >{projects[projectIndex].title}</h3>
                    {(projects[projectIndex].demo && projects[projectIndex].demo!='') ? 
                        <a data-tip data-for={'project-demo-tip'} href={projects[projectIndex].demo} target='_blank' rel="noopener noreferrer" className='' >
                        <h3 className={`carousel-demo-button${invertDemo ? ' carousel-demo-button-invert' : ''}`} >DEMO</h3></a> : <section className='none'></section>}
                        <Tip id={'project-demo-tip'}><span>Click to See</span></Tip>
                    {projects[projectIndex].pages[pageIndex].type == 'vertical-scroll' ? <div></div>
                    : <div id='describe-box' className='carousel-description-box' >
                        <p className='carousel-description' style={{paddingBottom: previewMode ? '0.4rem' : ''}} >{projects[projectIndex].pages[pageIndex].description}</p>
                    </div>}
                </div>
                {!previewMode ? <span></span>
                : <Tip id={'carousel-tip'}><span>{previewMode ? 'Click to View' : 'Paused while Hovering'}</span></Tip>}
                
                <div className='carousel-indicators-box'>
                     {previewMode ? <div></div> : projects[projectIndex].pages.map((page, i) => <div className={`${(page.type == 'additional-features') ? 'carousel-indicators-features' : 'carousel-indicators'} ${(i==pageIndex) ? (page.type == 'additional-features') ? 'carousel-indicators-features-active' : 'carousel-indicators-active' : ''}`} style={{borderRadius: (page.type == 'video') ? '50%' : ''}} onClick={()=>setPageIndex(i)}>{(page.type == 'additional-features') ? <section>&#9733;</section>:<section></section>}</div>)}
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
            {leftVisible ? <div class='project-scroll-arrow-Nav project-scroll-arrow-Left' style={{height: (projectScrollBoxRef == undefined || projectScrollBoxRef.current == undefined || projectScrollBoxRef.current == null) ? 200 : projectScrollBoxRef.current.offsetHeight, opacity: ''}} onClick={() => scrollLeft()}><div style={{ display: 'table-cell', verticalAlign: 'middle'}}>&lt;</div></div> : <div></div>}
            {rightVisible ? <div class='project-scroll-arrow-Nav project-scroll-arrow-Right' style={{height: (projectScrollBoxRef == undefined || projectScrollBoxRef.current == undefined || projectScrollBoxRef.current == null) ? 200 : projectScrollBoxRef.current.offsetHeight, opacity: ''}} onClick={() => scrollRight()}><div style={{ display: 'table-cell', verticalAlign: 'middle'}}>&gt;</div></div> : <div></div>}
        <div ref={projectScrollBoxRef} id='project-list-scroll-box' style={{}}>
            {projects.map((project,i)=> (!previewMode && projectIndex == i) ? <div></div> :
                <span ref={(i==0) ? sampleItem : (!previewMode && projectIndex == 0 && i==1) ? sampleItem : null} >
                    <div key={project.target} data-tip data-for={project.target + i + '-tip'} className='project-list' onClick={()=>{setPreviewMode(false); setProjectIndex(i); setPageIndex(0); }}>
                        <h3 className='project-list-title'>{project.title}</h3>
                        <img src={project.pages[0].content} alt={project.target} className='project-list-image' ></img>
                        <p className='project-list-text' style={{opacity: ''}}>{project.caption}</p>
                    </div>
                    <Tip id={project.target + i + '-tip'}><span>View {project.title}</span></Tip>
                </span>)}
        </div>
    </div>);
}

const ProjectMedia = ({projectIndex, pageIndex, carouselRef}) => 
    projects[projectIndex].pages[pageIndex].type == 'video' ?
    <Player playing src={projects[projectIndex].pages[pageIndex].content}  height={(carouselRef == undefined || carouselRef.current == undefined || carouselRef.current == null) ? 744 : carouselRef.current.offsetHeight} controls={false} bigPlayButtonCentered={true} autoplay={true} style={{height: '100%', width: '100%', margin: '0 auto', textAlign: 'center', overflowX: 'hidden'}} className='project-image carousel-slide-animation'/>
    : projects[projectIndex].pages[pageIndex].type == 'additional-features' 
    ? <div className='d-block project-image carousel-slide-animation' style={{width: '100%', height: '100%', maxHeight: '', backgroundColor: 'black'}}>
        <div className='project-additional-header'>Features Coming Soon</div>
        {projects[projectIndex].pages[pageIndex].features.map((feature)=><div className='project-additional-text'>&#10026;{'\t'+feature}</div>)}
    </div>
    : <img  className="d-block project-image carousel-slide-animation" src={projects[projectIndex].pages[pageIndex].content} alt={projects[projectIndex].pages[pageIndex].target}  style={{width: '100%', maxWidth: '1200px'}}/>;



export default ProjectsContent;