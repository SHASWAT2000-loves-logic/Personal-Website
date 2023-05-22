// This is the contact form component, which is mostly a form for the user to fill out in order to send me a message 

// To receive email when a user sends me a message through the website, I have used Formspree, which allows me to receive an email without using any backend code 
// react-hook-form package is used for form validation.
// react-toastify package is used for UX (user experience) as after the form is submitted, it creates a little alert card at the bottom right of the user screen to say that the form was been successfully sent
// Axios is used for making HTTP requests from the browser

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import {useForm} from "react-hook-form"
import React from 'react'
import axios from 'axios';
import ScrollToTop from './ScrollToTop';

function Contact(){  

  const {
    register,
    handleSubmit,
    reset,
    formState:{errors}
  } = useForm()

  // This function styles the notification that the user will see after the form is submitted

  const toastifySuccess = () => {
    toast('Message was successfully sent to Shaswat Shukla', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,  
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast'
    });
  };

  // Catching the submit event on a form

  const onSubmit = async (data) =>{

    // storing the data enetered by the user

    const { name, email, subject, message } = data;
    try {
      const dataObject = {
        name,
        email,
        subject,
        message
      };

      // sending post request

      const response=await axios.post(
        "https://formspree.io/f/mknejqva",dataObject
      );
      reset();
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }
  }


  return (
    <div className='contact_section' id='contact'>
      <h1>Contact Me</h1>

      {/* form starts */}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='contact_content'>

        {/* Name of the user*/}

          <div className='input_group'>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" placeholder="Your name" className='name'
              {...register('name', {required: { value: true, message: 'Please enter your name' }, maxLength: {value: 30, message: 'Please use 30 characters or less'}})}
            />
            {errors.name && <div className='error_message'>{errors.name.message}</div>}
          </div>

          {/* Email of the user */}

          <div className='input_group'>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="Your email" className='email'
              {...register('email', {required: true,pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/})}
            />
            {errors.email && (<div className='error_message'>Please enter a valid email address</div>)}
          </div>

          {/* Subject of the message */}

          <div className='input_group'>
            <label htmlFor="subject">Subject</label>
            <input type="text" name="subject" placeholder="Subject"
              {...register('subject', {required: { value: true, message: 'Please enter a subject' },maxLength: {value: 75, message: 'Subject cannot exceed 75 characters'}})}
            />
            {errors.subject && (<div className='error_message'>{errors.subject.message}</div>)}
          </div>

          {/* Message from the user */}

          <div className='input_group'>
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" cols="30" rows="10" placeholder="Message" 
              {...register('message', {required: true})}
            ></textarea>
            {errors.message && <div className='error_message'>Please enter a message</div>}
          </div>

          <button type="submit" className='submit_btn'>Send Message</button>

        </div>  
      </form>
        <ToastContainer/>
        <ScrollToTop/>
    </div>
  );
}        

export default Contact;