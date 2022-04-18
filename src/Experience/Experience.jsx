// import 'bootstrap/dist/css/bootstrap.css';
import '../index.css';
import './Experience.css'
import Tip from 'react-tooltip';
import fasetto from '../Assets/fasetto-logo-black.svg';
import fasettoLetter from '../Assets/fasettoRecommendation.pdf'

const Experience = ({passRef}) => {

    const EXPERIENCES=[
        {position: 'Software Developer', company: 'Fasetto', time: '2020 - 2021', link: 'https://www.fasetto.com/', icon: fasetto,
            summary: '•  Implemented frequent Q&A testing, version control; enabling smooth flow from demonstrating prototypes though iterating development to final production and release.\n• Coordinated communication between client and project manager on development progress and expectations; allowing the team to stay on schedule and reducing confusion.\n• Designed publication, prints, and digital design; improving company marketing and product recognition',
            achievements: [{title: 'Navigated the full software lifecycle in developing Concept Environment:',
                list: ['1) Brainstorming Ideas', '2) Mock Prototypes', '3) Feature Development', '4) Client User Interface', '5) Backend Server Organization', '6) Market Research', '7) Version Control Management', '8) Marketing', '9) Production Release', '10) Deployment',
                ]},
            ],
            notes: [
                {title: 'Mentor: Matthew Kleven', description: 'Guided in introduction with React and Front End Technology Stack', link: 'https://www.linkedin.com/in/matthew-kleven-b4a48b179/', prompt: 'Matthew LinkedIn'},
                {title: 'Supervisor: Parnell Lutz', description: 'Guided in User Design, Functionality, and Project Management', link: 'https://www.linkedin.com/in/parnell-lutz-6bb13224/', prompt: 'Parnell LinkedIn'},
                {title: 'Recommendation Letter', description: '', link: fasettoLetter, prompt: 'Recommendation Letter by Parnell Lutz'},
            ],
            projects: [
                {title: 'Concept Environment', link: '#projects-section', description: 'Introduction to React, web technologies, and user interfaces.  Also full scope product development with server backend, client tracking, and database online and offline version control.', prompt: 'Concept Environment Project'},
                {title: 'Gravity Text Editor', link: '#projects-section', description: 'Unique experience working within slatejs in identifying and rendering leaves and blocks of document objects', prompt: 'Gravity Editor Project'}
            ],},
    ];

    return (<div id='experience-section' ref={passRef}  class='container-fluid no-padding no-margin w-100' style={{position: 'relative',  left: 0, right: 0, paddingTop: '3.0rem'}}>
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
                            {experience.achievements.map((achieve)=>
                                <div className='experience-achievements-area'>
                                    <h3 className='experience-summary' style={{fontSize: '', margin: '', fontWeight: '700'}}>{achieve.title}</h3>
                                    <div className='experience-achievements-list'>                                    
                                        {achieve.list.map((item)=><span key={item} className='experience-summary' style={{width: '25%', minWidth: '235px', fontSize: '', margin: '0 0 0.30rem 0.5rem', }}>{item}</span>)}
                                    </div>
                                </div>
                                )}
                        <div className='experience-note-area'>
                            {experience.notes.map((note)=>
                            <span key={note.title}>
                                <a data-tip data-for={note.title + '-tip'} href={note.link} target='_blank' rel="noopener noreferrer" >
                                <div  className='experience-note-box' style={{background: note.description == '' ? 'black' : ''}}>
                                    <section>
                                    {note.link == '' ?
                                        <h3 className='experience-note-title' style={{color: note.description == '' ? 'whitesmoke' : ''}}>{note.title}</h3>
                                        : <h3 className='link experience-note-title' style={{color: note.description == '' ? 'whitesmoke' : ''}}>{note.title}</h3>
                                            }
                                    {note.description == '' ? <section></section>
                                        : <h3 className='experience-note-description' style={{}}>{note.description}</h3>}
                                    </section>
                                </div>
                                </a>
                                <Tip id={note.title + '-tip'}><span>{note.prompt}</span></Tip>
                            </span>
                                )}
                        </div>
                        <div className='experience-project-area'>
                            {experience.projects.map((pro)=>
                            <span key={pro.title}>
                                <a data-tip data-for={pro.title + '-tip'} href={pro.link}>
                                    <div  className='experience-project-box' style={{}}>
                                        {pro.link == '' ?
                                            <h3 className='experience-project-title' style={{}}>{pro.title}</h3>
                                            : <h3 className='link experience-project-title' style={{}}>{pro.title}</h3>
                                            }
                                        <p class='experience-project-description' style={{}}>{pro.description}</p>
                                    </div>
                                </a>
                                <Tip id={pro.title + '-tip'}><span>{pro.prompt}</span></Tip>
                            </span>
                            )}
                        </div>
                    </div>
                </div>
            </div>)}
        </div>
    </div>);
}

export default Experience;