//import { SpaRounded } from "@material-ui/icons";
import "./contact.scss";
import * as React from 'react';
import { useState, useRef, useContext, useEffect } from "react";

import emailjs from '@emailjs/browser';
import { ThemeContext } from "../../context";

export default function Contact() {
    /*const formRef = useRef();*/
    const [message, setMessage] = useState(false)
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;
    const initialValues = { user_name: "", user_subject: "", user_email: "", user_message: "" };
    const [ formValues, setFormValues ] = useState(initialValues);
    const [ formErrors, setFormErrors ] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        console.log(e.target);
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        console.log(formValues);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);

        console.log("Form errors",formErrors) ;

        

            
            

       
    };

    useEffect(() => {
        console.log(formErrors);
        if(Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
            emailjs.sendForm('service_0hmdweh', 'template_gs6iht9', "form", 'user_3MkYyvYpRZAfMnbbl5mRj')
            .then((result) => {
                console.log(result.text);
                setFormValues(initialValues);
                setMessage(true);
                setTimeout(() => {
                    setMessage(false);
                }, 3000);
            }, (error) => {
                console.log(error.text);
            });
        }
    }, [formErrors])

    const validate =(values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if(!values.user_name) {
            errors.user_name = "Please provide your name";
        }
        if(!values.user_subject) {
            errors.user_subject = "Please provide a subject";
        }
        if(!values.user_email) {
            errors.user_email = "Please provide your email";
        } else if(!regex.test(values.user_email)) {
            errors.user_email = "Email is invalid";
        }

        if(!values.user_message) {
            errors.user_message = "Please type a message";
        } else if(values.user_message.length > 500) {
            errors.user_message = "Message can't exceed 500 characters";
        }
        return errors;
    };
    
    return (
        <div className='contact' id='contact'>
            <div className="left">
                <img src="assets/shake.svg" alt="" />
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form onSubmit={handleSubmit}>
                    <input style={{ backgroundColor: darkMode && "black", color: darkMode && "white" }} 
                    type="text" placeholder="Name" name="user_name"   value={ formValues.user_name } onChange={handleChange}/>
                    <p>{ formErrors.user_name }</p>

                    <input style={{ backgroundColor: darkMode && "black", color: darkMode && "white" }} 
                    type="text" placeholder="Subject" name="user_subject"  value={ formValues.user_subject } onChange={handleChange}/>
                    <p>{ formErrors.user_subject }</p>

                    <input style={{ backgroundColor: darkMode && "black", color: darkMode && "white" }} 
                    type="text" placeholder="Email" name="user_email"  value={ formValues.user_email } onChange={handleChange}/>
                    <p>{ formErrors.user_email }</p>

                    <textarea style={{ backgroundColor: darkMode && "black", color: darkMode && "white"}} 
                    placeholder="Message" name="user_message"  title="Please type a message" value={ formValues.user_message } onChange={handleChange}></textarea>
                    <p>{ formErrors.user_message }</p>

                    <button type="submit">Send</button>
                    {message && <span className="contactMsg">Thanks, I'll reply ASAP :)</span>}
                </form>
            </div>

        </div>
    )
}