import './APropos.css'
import Header from '../header/Header.jsx'
import emailjs from 'emailjs-com'

import { useState, useEffect } from 'react'
import profileLogo from '../icones/profile.png'

function APropos() {

  const [senderName, setSenderName] = useState('');
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [replyTo, setReplyTo] = useState('');
  const [message, setMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setErrorMessage('');
}, [senderName, to, subject, replyTo, message]);

useEffect(() => {
  if (import.meta.env.VITE_EMAIL_TO) {
      setTo(import.meta.env.VITE_EMAIL_TO);
  }
}, []);

  const sendEmail = async (e) => {
    e.preventDefault();
    setErrorMessage('');


    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const replyTo = e.target.elements.reply_to.value;

    if (!emailRegex.test(replyTo)) {
        setErrorMessage('Please enter a valid email address.');
        return;
    }


    try {
        (function () {
            emailjs.init(import.meta.env.VITE_EMAILJS);
        })();

        var service_id = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        var template_id = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

        await emailjs.sendForm(service_id, template_id, e.target)
            .then(res => {
                if (res.status === 200) {
                    console.log('Email sent!', res.status, res.text);
                    setSenderName('');
                    setSubject('');
                    setReplyTo('');
                    setMessage('');
                    setEmailSent(true);

                    setTimeout(() => {
                        setEmailSent(false);
                    }, 5000);
                } else {
                    console.error('Failed to send email. Status: ', res.status);
                    setErrorMessage('Failed to send email.');
                    setEmailSent(false);
                }
            })
            .catch(err => {
                console.error('Failed to send email. Error: ', err);
                setErrorMessage('Failed to send email.');
                setEmailSent(false);
            });
    } catch (error) {
        setErrorMessage('Failed to send email.');
        setEmailSent(false);
    }

}
    return (
        <>
        <Header/>
        <div className="content">
                <div className="profile">
                    <img className="profile-image" src={profileLogo} alt="Profile" />
                    <h2>Gervot</h2>
                    <h3>Suzy-Lou</h3>
                </div>
                <div className="about">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec lectus ut nisi vehicula convallis. Nulla auctor felis a interdum vehicula. Nulla facilisi. Nullam at aliquam lorem. Donec sit amet ultricies quam.</p>
                </div>
        <div className="email-form">
        <h2>Envoyer un email</h2>
        <form onSubmit={sendEmail}>
        <label>Nom</label>
        <input type="text" value={senderName} onChange={e => setSenderName(e.target.value)}id="senderName" /> 
        <br/>
        <p>destinataire : {to}</p>
        <input type="hidden" value={to} name="to" />
        <br/>
        <label>Objet du mail</label>
        <input type="text" value={subject} onChange={e => setSubject(e.target.value)} id="subject"/>
        <br/>
        <label>Adresse Email</label>
        <input type="text" value={replyTo} onChange={e => setReplyTo(e.target.value)} id="reply_to"/>
        <br/>
        <label>Message</label>
        <textarea value={message} onChange={e => setMessage(e.target.value)}id="message" />
        <br/>
        <button type="submit">Envoyer</button>
        {emailSent && <p>Email envoyé</p>}
        {errorMessage && <p>{errorMessage}</p>}
        </form>
        </div>
        </div>
        </>
      )
}

export default APropos
