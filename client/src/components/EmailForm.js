import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
// import env from "react-dotenv";
import { toast } from 'react-toastify';

const service_id = process.env.REACT_APP_email_service_id
const public_key = process.env.REACT_APP_email_public_key

const EmailForm = () => {
    const [formData, setFormData] = useState({
        from_name: '',
        from_email: '',
        message: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
            .sendForm(service_id, 'contact_form', e.target, {
                publicKey: public_key,
            })
            .then(
                () => {
                    toast.success('Message sent successfully!');
                    setFormData({ from_name: '', from_email: '', message: '' });
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    toast.error('Failed to send message. Please try again later.')
                },
            );
        e.target.reset()
    };
  
    return (
        <form onSubmit={sendEmail} id="form-container">
            <label htmlFor='name'>Name
                <input type="text" name="from_name" value={formData.from_name} onChange={handleChange} required />
            </label>
            <label htmlFor='email'>Email
                <input type="email" name="from_email" value={formData.from_email} onChange={handleChange} required/>
            </label>
            <label htmlFor='message'>Message
                <textarea name="message" value={formData.message} onChange={handleChange} required/>
            </label>
            <button type="submit" className='link-effect'>Send</button>
        </form>
    );
}

export default EmailForm