// import 'bootstrap/dist/css/bootstrap.css';
import '../index.css';
import './Experience.css'
import Tip from 'react-tooltip';
import fasetto from '../Assets/fasetto-logo-black.svg';
import fasettoLetter from '../Assets/fasettoRecommendation.pdf'



const Experience = ({passRef}) => {

    const EXPERIENCES=[
        {position: 'Software Developer', company: 'Fasetto', time: 'Oct. 2019 - May. 2020', link: 'https://www.fasetto.com/', icon: fasetto,
            summary: 'Through this internship experience, I gained valuable insight into the inter-workings of a tech company and the daily duties of software engineers.  I had the opportunity to work side by side the development team on a daily basis, receiving career guidance and jump starting my skills with full stack development.',
            notes: [
                {title: 'Mentor: Matthew Kleven', description: 'Guided in introduction with React and Front End Technology Stack', link: 'https://www.linkedin.com/in/matthew-kleven-b4a48b179/', prompt: 'Matthew LinkedIn'},
                {title: 'Supervisor: Parnell Lutz', description: 'Guided in User Design, Functionality, and Project Management', link: 'https://www.linkedin.com/in/parnell-lutz-6bb13224/', prompt: 'Parnell LinkedIn'},
                {title: 'Recommendation Letter', description: '', link: fasettoLetter, prompt: 'Recommendation Letter by Parnell Lutz'},
            ],
            projects: [
                {title: 'Concept Environment', link: '#projects-section', description: 'Worked on Gravity using Socket.IO and React, great learning Experience!', prompt: 'Concept Environment Project'},
                {title: 'Gravity Text Editor', link: '#projects-section', description: 'Worked on Gravity using Socket.IO and React, great learning Experience!', prompt: 'Gravity Editor Project'}
            ],},
    ];

    return (<div id='experience-section' ref={passRef}  class='container-fluid no-padding no-margin w-100' style={{position: 'relative',  left: 0, right: 0, }}>
        <h1>Internship</h1>
        <hr/>
        <div className='container-fluid no-margin no-padding w-100' style={{}}>
            {EXPERIENCES.map((experience)=> 
            <div key={experience.company} style={{display:'grid'}}>
                <span>
                    <a style={{gridColumn: '1'}} data-tip data-for={experience.company + 'logo-tip'} href={experience.link} target='_blank' rel="noopener noreferrer">
                        <img className='experience-logo' src={experience.icon} alt={experience.company} style={{}} href={experience.link} target='_blank' rel="noopener noreferrer"></img>
                    </a>
                    <Tip id={experience.company + 'logo-tip'}><span>{experience.link}</span></Tip>
                </span>
                <div style={{gridColumn: '2'}} id='experience-section' className='' >
                    <div style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
                        <span>
                            <a data-tip data-for={experience.company + '-tip'} href={experience.link} target='_blank' rel="noopener noreferrer">
                                <h2 className='link' style={{fontSize: '1.8rem', margin: '0', textDecoration: 'none', fontWeight: '800', color: 'black'}}>{experience.company}</h2>
                            </a>
                            <Tip id={experience.company + '-tip'}><span>{experience.link}</span></Tip>
                        </span>
                        <h3 className='link' style={{fontSize: '1.3rem', fontWeight: '600', letterSpacing: '0.1rem', margin: 'auto', color: 'var(--green)'}}>{experience.position}</h3>
                        <h3 className='link' style={{fontSize: '0.8rem', margin: 'auto', fontWeight: '300', color: 'black'}}>{experience.time}</h3>
                    </div>

                    <div className='experience-area' style={{}}>
                        <h3 className='experience-summary' style={{}}>{experience.summary}</h3>
                        <div className='experience-note-area'>
                            {experience.notes.map((note)=>
                                <div key={note.title} className='experience-note-box' style={{background: note.description == '' ? 'black' : ''}}>
                                    {note.link == '' ?
                                        <h3 className='experience-note-title' style={{color: note.description == '' ? 'whitesmoke' : ''}}>{note.title}</h3>
                                        : <span>
                                            <a data-tip data-for={note.title + '-tip'} href={note.link} target='_blank' rel="noopener noreferrer" >
                                                <h3 className='link experience-note-title' style={{color: note.description == '' ? 'whitesmoke' : ''}}>{note.title}</h3>
                                            </a>
                                            <Tip id={note.title + '-tip'}><span>{note.prompt}</span></Tip>
                                        </span>}
                                    {note.description == '' ? <section></section>
                                        : <h3 className='experience-note-description' style={{}}>{note.description}</h3>}
                                </div>
                                )}
                        </div>
                        <div className='experience-project-area'>
                            {experience.projects.map((pro)=>
                                <div key={pro.title} className='experience-project-box' style={{}}>
                                    {pro.link == '' ?
                                        <h3 className='experience-project-title' style={{}}>{pro.title}</h3>
                                        : <span>
                                            <a data-tip data-for={pro.title + '-tip'} href={pro.link} target='_blank' rel="noopener noreferrer" >
                                                <h3 className='link experience-project-title' style={{}}>{pro.title}</h3>
                                            </a>
                                            <Tip id={pro.title + '-tip'}><span>{pro.prompt}</span></Tip>
                                        </span>}
                                    <p class='experience-project-description' style={{}}>{pro.description}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>)}
        </div>
    </div>);
}

export default Experience;