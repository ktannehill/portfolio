import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import env from "react-dotenv";
import { toast } from 'react-toastify';

const service_id = env?.REACT_APP_email_service_id
const public_key = env?.REACT_APP_email_public_key

const EmailForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
            .sendForm(service_id, 'contact_form', form.current, {
                publicKey: public_key,
            })
            .then(
                () => {
                    toast.success('Message sent successfully!');
                    setFormData({ name: '', email: '', message: '' });
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        e.target.reset()
    };
  
    return (
        <form ref={form} onSubmit={sendEmail} id="form-container">
            <label htmlFor='name'>Name
                <input type="text" name="from_name" required />
            </label>
            <label htmlFor='email'>Email
                <input type="email" name="from_email" required/>
            </label>
            <label htmlFor='message'>Message
                <textarea name="message" required/>
            </label>
            <button type="submit" className='link-effect'>Submit</button>
        </form>
    );
}

export default EmailForm