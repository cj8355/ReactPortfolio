//import { SpaRounded } from "@material-ui/icons";
import "./contact.scss";
import * as React from 'react';
import { useState, useRef, useContext } from "react";
import emailjs from '@emailjs/browser';
import { ThemeContext } from "../../context";

export default function Contact() {
    const formRef = useRef();
    const [message, setMessage] = useState(false)
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;
    

    const handleSubmit = (e) => {
        e.preventDefault();
       
        emailjs.sendForm('service_0hmdweh', 'template_gs6iht9', e.target, 'user_3MkYyvYpRZAfMnbbl5mRj')
        .then((result) => {
            console.log(result.text);
            setMessage(true);
            setTimeout(() => {
                setMessage(false);
            }, 3000);
        }, (error) => {
            console.log(error.text);
        });
    };
    
    return (
        <div className='contact' id='contact'>
            <div className="left">
                <img src="assets/shake.svg" alt="" />
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form onSubmit={handleSubmit}>
                    <input style={{ backgroundColor: darkMode && "black", color: darkMode && "white" }} type="text" placeholder="Name" name="user_name"/>
                    <input style={{ backgroundColor: darkMode && "black", color: darkMode && "white" }} type="text" placeholder="Subject" name="user_subject"/>
                    <input style={{ backgroundColor: darkMode && "black", color: darkMode && "white" }} type="text" placeholder="Email" name="user_email"/>
                    <textarea style={{ backgroundColor: darkMode && "black", color: darkMode && "white"}} placeholder="Message" name="user_message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span className="contactMsg">Thanks, I'll reply ASAP :)</span>}
                </form>
            </div>

        </div>
    )
}