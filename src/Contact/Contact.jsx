// import 'bootstrap/dist/css/bootstrap.css';
import React, {useState} from 'react';
import RECAPTCHA from "react-google-recaptcha";
import Tip from 'react-tooltip';
import '../index.css';
import './Contact.css';
import emailjs from 'emailjs-com';
//Guideline: profile head Image saved: 80px x 80px 16-png transparent background
import head from '../Assets/head2.png';
// import dotenv from '../../.env';
// dotenv.config();
// import ('dotenv').config({ path: '../.env' }); //Access: process.env.PASSWORD

// Create Custom Hook for Form Input
const useInput = initialValue => {
    const [value, setValue] = useState(initialValue);
  
    return {
      value,
      setValue,
      reset: () => setValue(""),
      bind: {
        value,
        onChange: event => {
          setValue(event.target.value);
        }
      }
    };
  };

const Contact = ({passRef}) => {

    const { value:name, bind:bindName, reset:resetName } = useInput('');
    const { value:email, bind:bindEmail, reset:resetEmail } = useInput('');
    const { value:message, bind:bindMessage, reset:resetMessage } = useInput('');
    const recaptchaRef = React.createRef();

    const sendMessage = (event) => {
        event.preventDefault();
        if(message !== '' && recaptchaRef.current.getValue()!='') {
            const response = {name: name, email:email, message: message, 'g-recaptcha-response': recaptchaRef.current.getValue(),};
            console.log('Sending Message:', response, );
            emailjs.send(`${process.env.REACT_APP_emailServiceId}`, `${process.env.REACT_APP_emailTemplateId}`, response, `${process.env.REACT_APP_emailUserId}`)
                .then((res) => {
                    console.log('SUCCESS!', res.status, res.text);
                    resetName();
                    resetEmail();
                    resetMessage();
                    // recaptchaRef.current.reset();
                }, (err) => {
                    console.log('FAILED...', err);
                });
        }
        
    }

    return (<div id='contact-section' ref={passRef}   style={{paddingTop: '3.0rem'}} >
            <div class='container-fluid row' style={{display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '2.0rem auto'}} >
            <form id='formBox' onSubmit={sendMessage} className='container col-lg-6 w-100' >
                <section style={{display: 'inline-block', width: '100%', alignItems: 'center', margin: 'auto', }}>
                    <img src={head} alt='portrait' style={{position: 'absolute', left: '19%', top: '2%', height: '4rem', width: 'auto', borderRadius: '50%', border: '2px solid var(--orange)'}}></img>
                    <h1 style={{margin: '0 auto', textAlign: 'center', padding: '0.5rem', fontSize: '2.0rem'}}>Let's Talk</h1>
                </section>
                <input name="name" type="text" class="form-control" id="nameBox" placeholder="Name..." {...bindName}/>
                <input name="email" type="email" class="form-control" id="emailBox" placeholder="Email..." {...bindEmail}/>
                <textarea name="message" class="form-control" id="messageBox" placeholder="Message..." {...bindMessage}></textarea>
                <section style={{width: '100%', alignItems: 'center', margin: 'auto'}}>
                    <RECAPTCHA sitekey={process.env.REACT_APP_recaptchaKey}
                        ref={recaptchaRef}
                        theme="dark"/>
                    <input type="submit" value='SEND' class="btn btn-dark" id="sendButton"/>
            {/* Link for Google Form Review of Website  */}
                    {/* <a data-tip data-for={'survey-tip'} href='https://docs.google.com/forms/d/e/1FAIpQLSd41fhPOX7sKgfUOmtcL-FUGuOT-F935puawc1ikkWci9mhdw/viewform?usp=sf_link' target='_blank' rel="noopener noreferrer" class="btn btn-dark" id="reviewButton">SURVEY :: What do you think of my Portfolio?</a>
                    <Tip id={'survey-tip'}><span>Survey</span></Tip> */}
                </section>
            </form>
        </div>
    </div>);
}

export default Contact;