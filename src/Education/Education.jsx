// import 'bootstrap/dist/css/bootstrap.css';
import React, {useState, useEffect, useRef, useCallback} from 'react';
import Tip from 'react-tooltip';
import Typing from 'react-typing-animation';
import '../index.css';
import './Education.css'
import fhsDiploma from '../Assets/FHS-Diploma.pdf';
import umdDiploma from '../Assets/university-transcript.pdf';

const origional=[ //new line is new command
    {text: `npm install`, command: true, link: '', prompt:''},
    {text: `node ./education.js`, command: true, link: '', prompt: ''},
//High School
{text: `education.highSchool`, command: true, link: '', prompt: ''},
{text: `> Faribault High School`, command: false, link: 'http://www.faribault.k12.mn.us', prompt: 'View FHS'},
{text: `>\tGPA: 3.99`, command: false, link: '', prompt: ''},
{text: `>\tDiploma`, command: false, link: fhsDiploma, prompt: 'View Document'},
{text: `education.highSchool.activities`, command: true, link: '', prompt: ''},
{text: `*\t FIRST Robotics Team #5434`, command: false, link: 'https://www.faribaultfalcons.com/robotics', prompt: 'View FRC'},
{text: `*\t National Honor Society`, command: false, link: 'https://www.nshss.org/', prompt: 'View NSHSS'},
{text: `*\t BSA :: Eagle Scout`, command: false, link: 'https://nesa.org/', prompt: 'View NESA'},

//University
{text: `education.university`, command: true, link: '', prompt: ''},
{text: `> University of Minnesota`, command: false, link: 'https://www.d.umn.edu/', prompt: 'View University'},
{text: `> Major: B.S. Computer Science`, command: false, link: 'https://onestop2.umn.edu/pcas/viewCatalogProgram.do?programID=439&strm=1179&campus=UMNDL', prompt: 'View Requirements'},
{text: `> Minor: Business Finance`, command: false, link: 'https://onestop2.umn.edu/pcas/viewCatalogProgram.do?programID=2296&strm=1209&campus=UMNDL', prompt: 'View Requirements'},
{text: `>ABET Accredited: CAC`, command: false, link: 'https://www.abet.org/', prompt: 'View ABET'},
{text: `>\t GPA: 3.35`, command: false, link: '', prompt: ''},
{text: `>\t Diploma`, command: false, link: umdDiploma, prompt: 'View Document'},
{text: `education.university.relevantCourses`, command: true, link: '', prompt: ''},
{text: `*\t Computer Security >> Encryption && Vulnerabilities`, command: false, link: '', prompt: ''},
{text: `*\t Natural Language Processing >> Machine Learning`, command: false, link: '', prompt: ''},
{text: `*\t Algorithms and Data Structures >> Optimization`, command: false, link: '', prompt: ''},
{text: `*\t Computer Networks >> Internet Protocols`, command: false, link: '', prompt: ''},
{text: `*\t Digital Design >> Adobe && Design Principles`, command: false, link: '', prompt: ''},
{text: `*\t Development >> Object Oriented Design && Agile Scrum`, command: false, link: '', prompt: ''},

//Independent
{text: `education.independent.topics`, command: true, link: '', prompt: ''},
{text: `*\t UI / UX Design`, command: false, link: 'https://www.adobe.com/products/xd.html', prompt: 'visit: adobe.com'},
{text: `*\t Front End Design >> React - CSS - HTML - Express - NodeJS`, command: false, link: 'https://reactjs.org/', prompt: 'Visit: reactjs.org'},
{text: `*\t Flutter Mobile Development`, command: false, link: 'https://flutter.dev/', prompt: 'Visit: flutter.dev'},
{text: `*\t HTTP API && Socket.IO`, command: false, link: 'https://socket.io/', prompt: 'Visit: socket.IO'},
];


const Education = ({passRef}) => {
    const [renderAnimation, setRenderAnimation] = useState(false);
    const [maxCharacters, setMaxCharacters] = useState(50);
    const [maxCommandCharacters, setMaxCommandCharacters] = useState(42);
    const width = useRef(null);
    useEffect(() => {
        const fontSize = window.innerWidth > 628 ? 20 : 10; //phone transition for root rem
        const fontWidth = ((fontSize*0.8*0.62)); //font-size: 0.8rem 0.62 constant ratio ???
        setMaxCharacters(width.current ? (Math.floor((width.current.clientWidth-(fontSize*1.5*2)) / fontWidth)) : 50); 
        setMaxCommandCharacters(width.current ? (Math.floor((width.current.clientWidth-(fontSize*1.5*2)) / fontWidth)-8) : 50); //ethan:~$ == 8 characters && (20)*1.5) == 1.5rem padding 
        console.log(`Terminal width is: ${width.current ? width.current.clientWidth : 0}`, 
            `Max Characters set: ${maxCharacters}`);
        //Listener to start animation, first time in view
            window.addEventListener('scroll',onView);
    }, [width.current,]);


        //Start typing on scroll, only first occurrence
        const onView = useCallback((event) => {
              if (passRef != null && passRef.current.offsetTop < window.scrollY) {
            // if((document.getElementById('education-section').getBoundingClientRect().top-(document.getElementById('education-section').getBoundingClientRect().height *2 )) < 0){
                setRenderAnimation(true);
                console.log('Starting Terminal Animation');
                window.removeEventListener('scroll', onView);
            //Timer to reset State
                setTimeout(()=>setRenderAnimation(false), 90000);
            }
        }, []);
 

    //Splits line by new line and max width at word break, or force if word exceeds maxCharacters
    const expression = new RegExp('.{1,'+maxCharacters+'}\\b|.{'+maxCharacters+'}', 'g'); 
    const commandExpression = new RegExp('.{1,'+maxCharacters+'}\\b|.{'+maxCharacters+'}', 'g'); 
    // const expression = new RegExp(/.{1,15}\b|.{15}/g); //Temp test with line-max = 15;
    const extraSpacingExpression = new RegExp(/[ ]{2,}/g);  //Regular Expression to identify punctuation
    let lines = [];
    origional.forEach((line)=>{ //ethan:~$ == 8 characters
        if(line.length > maxCommandCharacters) {
            const separate = line.match(commandExpression) || []; //temp get first line
                const first = line.substring(0, separate[0].length);
                console.log('first', separate, first);
                if(first != '') lines.push({text: first, command: line.command, link: line.link, prompt: line.prompt});
                const remaining = line.substring(separate[0].length, line.length);
                console.log('remaining', remaining);
                const split = remaining.match(expression) || [];
                console.log('split', split);
                split.forEach(s => {
                    let str = s;
                    // let str = s.replace(extraSpacingExpression, ' ');
                    console.log(str);
                    if(str[0]==' ') str = str.substring(1,str.length-1);
                    if(str[str.length]===' ') str = str.substring(0,str.length-2);

                    if(str != '') lines.push({text: str, command: false, link: ''});
                });    
        } else if(line != '') lines.push({text: line.text, command: line.command, link: line.link, prompt: line.prompt});
    }); 
    
    console.log('final', lines);
    
    return (<div id='education-section' ref={passRef}  class='container-fluid row no-padding no-margin w-100' style={{position: 'relative',  left: 0, right: 0, paddingTop: '3.0rem'}}>
            <div className='col-xl-6 col-lg-8 col-md-12 w-100' style={{margin: '0 auto' }}>
                <div style={{textAlign: 'center'}}>
                <section class='console console-header' >
                    <label className='console-header-title'>Education</label>
                    <button onClick={()=>setRenderAnimation(!renderAnimation)} data-tip data-for={'skip-tip'} className={renderAnimation ? 'btn btn-outline-danger' : 'btn btn-outline-success'} style={{padding: '0.1rem 0.5rem', position: 'absolute', right: '0.75rem', top: '0.75rem', margin: '0 0 0 auto' }}>{renderAnimation ? 'SKIP' : 'START'}</button>
                    <Tip id={'skip-tip'}><span>Animation</span></Tip>
                </section>
                <section ref={width} class='console'>
                {renderAnimation ?      
                <Typing speed={0}>
                {lines.map((line, i) => line.command ? 
                    <div key={i} class = 'text-block' style={{marginTop: '0.5rem'}}><Typing.Speed ms={0}/><span className='text' style={{color: 'var(--orange)', marginLeft: 0,}}>ethan:~$</span><Typing.Delay ms={200} /><Typing.Speed ms={20}/><p className='text'>{line.text}</p><Typing.Delay ms={500} /></div>
                    : line.link !== '' ? 
                        <span>
                            <a key={i} href={line.link} data-tip data-for={line.link + '-tip'} target='_blank' rel="noopener noreferrer" class = 'text-block'><Typing.Speed ms={0}/><p className='text' style={{color: 'whitesmoke'}}>{line.text}</p></a>
                            <Tip id={line.link + '-tip'}><span>{line.prompt}</span></Tip>
                        </span>
                    : <div key={i} class = 'text-block'><Typing.Speed ms={0}/><p className='text' style={{color: 'whitesmoke'}}>{line.text}</p><Typing.Delay ms={300} /></div>
                    )}            
                </Typing>
                :
                <div>
                {lines.map((line, i) => line.command ? 
                    <div key={i} class = 'text-block' style={{marginTop: '0.5rem'}}><span className='text' style={{color: 'var(--orange)', marginLeft: 0,}}>ethan:~$</span><p className='text'>{line.text}</p></div>
                    : line.link !== '' ? 
                        <span>
                            <a key={i} data-tip data-for={line.link + '-tip'} href={line.link} target='_blank' rel="noopener noreferrer" class = 'text-block'><p className='text' style={{color: 'whitesmoke'}}>{line.text}</p></a>
                            <Tip id={line.link + '-tip'}><span>{line.prompt}</span></Tip>
                        </span>
                    : <div key={i} class = 'text-block'><p className='text' style={{color: 'whitesmoke'}}>{line.text}</p></div>
                    )}
                </div>
                }
                </section>
                </div>     
            </div>
    </div>);
}

export default Education;

