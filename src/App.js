import 'bootstrap/dist/css/bootstrap.css';
import {Button, Form, FormControl, Navbar, Nav, NavDropdown, NavbarBrand } from 'react-bootstrap';
import React, {useState, useEffect, useRef, useCallback} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavBar from './NavBar';
import Cover from './Cover/Cover';
import Projects from './Projects/Projects';
import Experience from './Experience/Experience';
import Technologies from './Technologies/Technologies';
import Education from './Education/Education';
import Contact from './Contact/Contact';
import Awards from './Awards/Awards';
import Manifesto from './Manifesto/Manifesto';
import head from './Assets/head.png';




const App = () => {
  //Navigation Bar References
  const coverRef = useRef();
  const projectRef = useRef();
  const experienceRef = useRef();
  const technologiesRef = useRef();
  const educationRef = useRef();
  const awardRef = useRef();
  const contactRef = useRef();

  return (
    <div className="">
      <NavBar
        coverRef={coverRef}
        projectRef={projectRef}
        experienceRef={experienceRef}
        technologiesRef={technologiesRef}
        educationRef={educationRef}
        awardRef={awardRef}
        contactRef={contactRef}
      />
      {/* <div style={{height: `${95}vh`}} > */}
        <Cover passRef={coverRef} />
        <Projects passRef={projectRef}/>
        <Experience passRef={experienceRef}/>
        <Technologies passRef={technologiesRef}/>
        <Education passRef={educationRef}/>
        <Awards passRef={awardRef}/>
        <Contact passRef={contactRef}/>
        <Manifesto/>
      {/* </div> */}
        {/* <div style={{height: '1000px'}}></div> */}
    </div>
  );
}

export default App;
