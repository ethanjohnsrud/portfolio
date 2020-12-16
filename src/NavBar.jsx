import {Navbar, Nav} from 'react-bootstrap';
import React, {useState, useEffect, useRef} from 'react';
import './index.css';
import head from './Assets/head.png';




const NavBar = ({coverRef, projectRef, experienceRef, technologiesRef, educationRef, awardRef, contactRef}) => {
  const navigation = useRef(null);
  // const [offset, setOffSet] = useState(50);
  // useEffect(() => {
  //   // console.log('width', navigation.current ? navigation.current.offsetWidth : 0);
  //   setOffSet(navigation.current.offsetHeight);
  // }, [navigation.current]);
  
  //Navigation Bar References
  const [coverActive, setCoverActive] = useState(true);
  const [projectActive, setProjectActive] = useState(false);
  const [experienceActive, setExperienceActive] = useState(false);
  const [technologiesActive, setTechnologiesActive] = useState(false);
  const [educationActive, setEducationActive] = useState(false);
  const [awardActive, setAwardActive] = useState(false);
  const [contactActive, setContactActive] = useState(false);

  const refList = [
    {ref: coverRef, set: setCoverActive},
    {ref: projectRef, set: setProjectActive},
    {ref: experienceRef, set: setExperienceActive},
    {ref: technologiesRef, set: setTechnologiesActive},
    {ref: educationRef, set: setEducationActive},
    {ref: awardRef, set: setAwardActive},
    {ref: contactRef, set: setContactActive},
  ];
  
  // const clearNavBar = () => refList.forEach(r=>r.set(false));
   
useEffect(() => { //https://stackoverflow.com/questions/63544289/how-to-highlight-navbar-links-on-page-scroll-in-react
    const handleScroll = (e) => { const middle = window.scrollY + (window.innerHeight / 2);
      refList.forEach((ref)=>{
        if (ref.ref.current.offsetTop < middle && (ref.ref.current.offsetTop + ref.ref.current.offsetHeight) >= middle)
          ref.set(true);
        else ref.set(false);
      });
    }
    document.addEventListener('scroll', handleScroll);
    return () => {
        document.removeEventListener('scroll', handleScroll);
    }
}, []);

  return (
      <Navbar ref={navigation} className='container-fluid navbar-expanded' expand="md" bg='dark' variant='dark' style={{position: 'sticky', top: 0, zIndex: 10, padding: '0'}}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style= {{paddin: '0'}}>
          <Nav className="mr-auto">
            <Nav.Link className= {coverActive ? 'activeNav' : ''} href="#cover-section">Ethan Johnsrud</Nav.Link>
            {/* <NavDropdown  title="Projects" id="basic-nav-dropdown" bg='dark' variant='dark' >
              <NavDropdown.Header>Fasetto</NavDropdown.Header>
              <NavDropdown.Item href="#concept-environment">Concept Environment</NavDropdown.Item>
              <NavDropdown.Item href="#projects-section">Gravity Editor</NavDropdown.Item>
              <NavDropdown.Header>Personal</NavDropdown.Header>
              <NavDropdown.Item href="#action/3.3">What to Eat</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Project Manager</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Pac-Man</NavDropdown.Item>
              <NavDropdown.Header>Academic</NavDropdown.Header>
              <NavDropdown.Item href="#action/3.3">NLP - Eliza Advisor</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">NLP - Random Talker</NavDropdown.Item>
              <NavDropdown.Item href="">Graph - FGCW</NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link className= {projectActive ? 'activeNav' : ''} href="#projects-section" >Projects</Nav.Link>
            <Nav.Link className= {experienceActive ? 'activeNav' : ''} href="#experience-section" >Internship</Nav.Link>
            <Nav.Link className= {technologiesActive ? 'activeNav' : ''} href="#technologies-section" >Technologies</Nav.Link>
            <Nav.Link className= {educationActive ? 'activeNav' : ''} href="#education-section" >Education</Nav.Link>
            <Nav.Link className= {awardActive ? 'activeNav' : ''} href="#award-section" >Involvement</Nav.Link>
            <Nav.Link className= {contactActive ? 'activeNav' : ''} href="#contact-section" ><section style={{display: 'grid', width: '100%',  height: '100%', margin: '0', padding: '0', }}>
              <label id='contact-label' style={{gridColumn: '1'}}>Contact</label>
            <img src={head} alt='Floating Head' style={{gridColumn: '2', position: 'absolute', right: '1.0rem', bottom: '-2.0rem', height: '4.0rem', width: 'auto', backgroundColor: contactActive ? 'var(--orange)' : 'black', borderRadius: '50%', border: contactActive ? '2px solid black' : '2px solid var(--orange)', }}></img>
            </section>
            </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
}

export default NavBar;
