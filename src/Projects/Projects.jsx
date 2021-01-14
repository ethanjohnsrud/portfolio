// import 'bootstrap/dist/css/bootstrap.css';
import React, {useState, useCallback, useEffect, useRef} from 'react';
import Tip from 'react-tooltip';
import ProjectsContent from './ProjectsContent';

const Projects = ({passRef}) => {

    return (<div id='projects-section' ref={passRef}  class='container-fluid no-padding no-margin w-100 h-100'  style={{paddingTop: '3.0rem', minHeight: '100vh'}}>
        <div style={{display: 'flex', flexDirection: 'column', backgroundColor: 'black', margin: '1.0rem 0', paddingTop: '0.5rem'}}>
        <h1 id='project-title' >Projects</h1>        
            <ProjectsContent/>
        </div>
    </div>);
}

export default Projects;