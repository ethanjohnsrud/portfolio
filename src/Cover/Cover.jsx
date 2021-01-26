import Tip from 'react-tooltip';
import '../index.css';
import './Cover.css'
//Guideline: Total Width: 1903px, reduced to 65% size
import Background from '../Assets/final-cover-desk-image.png';
//Guideline: icons Image saved: 40px x 40px 16-png transparent background
import linkedIn from '../Assets/linkedin.png';
import github from '../Assets/github.png';
import email from '../Assets/email.png';
import resume from '../Assets/resume.png';
import resumeDocument from '../Assets/Ethan_Johnsrud_Software_Developer.pdf';


const Cover = ({passRef}) => {

    const information=[
        {text: 'linkedin.com/in/ethanjohnsrud', link: 'https://www.linkedin.com/in/ethanjohnsrud/', icon: linkedIn, prompt: 'View LinkedIn Profile'},
        {text: 'github.com/ethanjohnsrud', link: 'https://github.com/ethanjohnsrud', icon: github, prompt: 'View GitHub'},
        {text: 'ethanjohnsrud@gmail.com', link: 'http://ethanjohnsrud@gmail.com', icon: email, prompt: 'Send Email'},
        {text: 'RESUME', link: resumeDocument, icon: resume, prompt: 'View Resume'}
    ];

    return (<div id='cover-section' ref={passRef} class='container-fluid no-padding no-margin' style={{position: 'relative',  left: 0, right: 0, }}>
        <img src={Background} alt='Desk Code Overlay' class='img-fluid' id='cover-image'/>
            <div id='about-caption'>
                <p id='about-caption-text' style={{opacity: ''}}>Surprising as it may be, I have always admired the coding process.  I started creating complex conditionals in Excel for my greenhouse businesses in high school, and since writing my first ‘Hello World’ program I knew I would flourish in software development.  
                    I discovered how I enjoy thinking through every step, using logic and problem 
                    solving skills within a set of guidelines fits my personality well. </p>
            </div>
        <h1 id='name'>ETHAN 
        JOHNSRUD</h1>
        <div className='container row' style={{position: 'relative', minWidth: '100%'}}>
            {information.map((info)=> 
                <div key={info.text} className='col-md-3 col-sm-6' >
                    <a data-tip data-for={info.text + '-tip'} href={info.link} target='_blank' rel="noopener noreferrer"  style={{display: 'flex', flexDirection: 'row', width: '100%', margin: '1% 10%'}}>
                        <img src={info.icon} alt={info.text} style={{width: '2rem', height: '2rem'}}></img>
                        <h3 className='link contact-text' style={{fontSize: '0.8rem', margin: 'auto', fontWeight: '600', color: 'var(--green)'}}>{info.text}</h3>
                    </a>
                    <Tip id={info.text + '-tip'}><span>{info.prompt}</span></Tip>
                </div>
            )}
        </div>
    </div>);
}

export default Cover;