import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ScrollToTopButton from './ScollToTopButton';


const Contact = () => {
  const form = useRef();
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const formElements = form.current.elements;
    const errors = {};
    if (!formElements.user_name.value.trim()) {
      errors.user_name = 'Name is required';
    }
    if (!formElements.user_email.value.trim()) {
      errors.user_email = 'Email is required';
    }  else if (!/\S+@\S+\.\S+/.test(formElements.user_email.value)) {
      errors.user_email = 'Email is invalid';
    }
    if (!formElements.message.value.trim()) {
      errors.message = 'Message is required';
    }
    return errors;
  };


  const sendEmail = (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    emailjs
      .sendForm('service_tsqw1r2', 'template_vpd91nu', form.current, {
        publicKey: 'wp86Ig-qRQiPyjTJq',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset();
          setErrors({});
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div id='contact' className=' pt-5 lg:pt-9 pb-10 bg-gradient-to-t from-slate-100' >
      <div className='mx-[1rem] lg:mx-[15rem] flex flex-col justify-center items-center'>
      <h3 className='text-2xl font-bold md:text-3xl text-gray-500 text-center'>Contact</h3>
      <p className='md:text-xl md:w-[40rem] text-center'>Ready to take your web projects to the next <span className='text-purple-900'> level?</span> <br />
Let's collaborate and create exceptional user experiences together. <br />
Contact me now and let's discuss how I can contribute to your frontend development needs. Reach out and let's build something amazing!</p>
      <div className='flex flex-col gap-2 *:text-lg '>
        <p className='mt-5 font-semibold'>Write me a message!</p>
        <form ref={form} onSubmit={sendEmail}>
          <div className='flex flex-col gap-2'>
            <div className='flex flex-col'>
      <label>Your Name <span className='text-red-500'>*</span></label>
      <input type="text" name="user_name" placeholder='Name' className='p-1 border-2 border-gray-400 rounded w-[20rem] md:w-[25rem] ' />
      {errors.user_name && <span className='text-red-500'>{errors.user_name}</span>}
      </div>
      <div className='flex flex-col'>
      <label>Your Email <span className='text-red-500'>*</span></label>
      <input type="email" name="user_email" placeholder='Email'className='p-1 rounded border-2 border-gray-400 w-[20rem] md:w-[25rem]' />
      {errors.user_email && <span className='text-red-500'>{errors.user_email}</span>}
      </div>
      <div className='flex flex-col'>
      <label>Message <span className='text-red-500'>*</span></label>
      <textarea name="message"id="" cols="30" rows="10" placeholder='Write here...' className='p-1 border-2 border-gray-400 rounded w-[20rem] md:w-[25rem] h-[8rem]' />
      {errors.message && <span className='text-red-500'>{errors.message}</span>}
      </div>
      <input type="submit" value="Send" className='p-1 rounded border-4 shadow-xl border-purple-900 w-[20rem] md:w-[25rem] font-bold hover:bg-slate-700 hover:text-white hover:border-none hover:py-[7.5px] hover:px-4 cursor-pointer text-purple-900' />
      </div>
    </form>
      </div>
      </div>
      <ScrollToTopButton/>
    </div>
  )
}

export default Contact