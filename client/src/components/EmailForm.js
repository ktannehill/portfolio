import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

const EmailForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
            .sendForm('service_cum5weo', 'YOUR_TEMPLATE_ID', form.current, {
                publicKey: 'YOUR_PUBLIC_KEY',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
  
    return (
        <form ref={form} onSubmit={sendEmail} id="form-container">
            <label htmlFor='name'>Name
                <input type="text" name="user_name" />
            </label>
            <label htmlFor='email'>Email
                <input type="email" name="user_email" />
            </label>
            <label htmlFor='message'>Message
                <textarea name="message" autosize />
            </label>
            <button type="submit" className='link-effect'>Submit</button>
        </form>
    );
}

export default EmailForm