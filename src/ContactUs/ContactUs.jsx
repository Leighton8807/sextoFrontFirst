import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import './ContactUs.css'

 const ContactUs = () => {

  const refForm = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const serviceId = 'service_lmshxzf';
    const template = 'template_40d1tix';
    const apikey = '-Dk6ttThLy_GGtr52';

    emailjs.sendForm(serviceId, template, refForm.current, apikey)
    .then(result => console.log(result.text))
    .catch(error => console.log(error))
  }

  return (
    <form ref={refForm} onSubmit={handleSubmit}>
      <div className="header-contact">
        <h2>Contact Us</h2>
        <p>Pleae feill this form</p>
      </div>
      <fieldset className='field-email'>
        <label className='symbol-required name' htmlFor="">Name</label>
        <input name='username' type="text" placeholder='Ej Leighton' required/>
      </fieldset>
      <fieldset className='field-name'>
        <label className='symbol-required' name='email' htmlFor="">Email</label>
        <input name='email' type="email" placeholder='Ej: ejemplo@hotmail.com' id='email' required/>
      </fieldset>
      <fieldset className='field-message'>
        <label className='symbol-required'>Email</label>
        <textarea maxLength= "500" placeholder='type you message' name="message" id="" cols="30" rows="10"></textarea>
      </fieldset>
      <button className='btn-send'>Send</button>
    </form>
  )
}

export default ContactUs;