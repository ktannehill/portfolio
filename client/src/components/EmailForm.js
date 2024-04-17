import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

const EmailForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
            .sendForm('service_cum5weo', 'contact_form', form.current, {
                publicKey: '',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
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