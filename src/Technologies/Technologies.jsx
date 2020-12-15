// import 'bootstrap/dist/css/bootstrap.css';
// import Maple from 'reactjs-mappletooltip';
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

    return (<div id='technologies-section' ref={passRef}  class='container-fluid no-padding no-margin w-100' style={{position: 'relative',  left: 0, right: 0, }}>
        <h1 className='title' >Technologies</h1>
        <div className='technologies-box' >
            {technologies.map((tech)=> 
            <span>
                    <a key={tech.title} data-tip data-for={tech.title + '-tip'} href={tech.link} target='_blank' rel="noopener noreferrer" className='tech-icon' >
                        <img src={tech.icon} alt={tech.title} className='' style={{margin: '0.5rem', padding: '0', height: '3.5rem'}}></img>
                        {/* <h3 className='link' className=''  style={{fontSize: '1rem', marginTop: '0.5rem', color: 'var(--green)'}}>{tech.title}</h3> */}
                    </a>
                    <Tip id={tech.title + '-tip'}><span>View: {tech.link}</span></Tip>
            </span>)}
        </div>
        {/* <hr className='line'/> */}
    </div>);
}

export default Technologies;