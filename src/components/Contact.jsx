// This is the contact form component, which is mostly a form for the user to fill out in order to send me a message 

// To receive email when a user sends me a message through the website, I have used emailjs, which allows me to receive an email without using any backend 
// react-hook-form package is used for form validation.
// react-toastify package is used for UX (user experience) as after the form is submitted, it creates a little alert card at the bottom right of the user screen

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import emailjs from 'emailjs-com';
import {useForm} from "react-hook-form"
function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState:{errors}
  } = useForm()

  // for creating a little alert at the bottom right of the user screen as a confirmation that the message has been sent   

  const toastifySuccess = () => {
    toast('Form was successfully sent to Shaswat Shukla', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,  
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast'
    });

// catching the submit event on a form and then extracting the user input to send me an email 

  };
  const onSubmit = async (data) => {

    const { name, email, message } = data.target;

    const endpoint = "<https://od5wv9kklh.execute-api.us-west-1.amazonaws.com/default/sendContactEmail>";
  
	  const body = JSON.stringify({
      senderName: name.value,
      senderEmail: email.value,
      message: message.value
    });
    const requestOptions = {
      method: "POST",
      body
    };

    fetch(endpoint, requestOptions)
      .then((response) => {
        if (!response.ok) throw new Error("Error in fetch");
          return response.json();
        })
      .then((response) => {
        document.getElementById("result-text").innerText ="Email sent successfully!";
        reset();
        toastifySuccess();
      })
      .catch((error) => {
        document.getElementById("result-text").innerText ="An unkown error occured.";
      });
  };    
    // const { name, email, subject, message } = data;
    // try {
    //   const templateParams = {
    //     name,
    //     email,
    //     subject,
    //     message
    //   };
    //   await emailjs.send(
    //     process.env.REACT_APP_SERVICE_ID,
    //     process.env.REACT_APP_TEMPLATE_ID,
    //     templateParams,
    //     process.env.REACT_APP_USER_ID
    //   );
    //   reset();
    //   toastifySuccess();
    // } catch (e) {
    //   console.log(e);
    // }
  return (
    <div className='contact_section' id='contact'>
      <h1>Contact Me</h1>
      <div className='contact_form'>

      {/* form starts */}

        <form onSubmit={handleSubmit(onSubmit)} noValidate>

        {/* Name of person who is contacting */}

          <div className='contact_content'>
            <div className='input_group'>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" placeholder="Your name" className='name'
                {...register('name', {
                required: { value: true, message: 'Please enter your name' },
                maxLength: {
                value: 30,
                message: 'Please use 30 characters or less'
                }
                })}
              />
              {errors.name && <div className='error_message'>{errors.name.message}</div>}
            </div>

            {/* Email of person who is contacting */}

            <div className='input_group'>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" placeholder="Your email" className='email'
                {...register('email', {
                required: true,
                pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                })}
              />
              {errors.email && (<div className='error_message'>Please enter a valid email address</div>)}
            </div>
            
            {/* Message */}

            <div className='input_group'>
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" cols="30" rows="10" placeholder="Message" 
                {...register('message', {
                required: true
                })}
              ></textarea>
              {errors.message && <div className='error_message'>Please enter a message</div>}
            </div>
              
            <button type="submit" className='submit_btn'>Send Message</button>
          </div>
        </form>
        <ToastContainer/> 
      </div>
    </div>
  )
}

export default Contact
