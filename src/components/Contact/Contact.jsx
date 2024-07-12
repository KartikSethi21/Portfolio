import React, { useState } from 'react'
import "./Contact.css";
import { Button, Typography } from '@mui/material';
function Contact() {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [message,setMessage]=useState("");
    const contactHandler=(e)=>{
        e.preventDefault();
    }
  return (
    <div className='contact'>
        <div className="contactRightBar">

        </div>
        <div className="contactContainer">
        <form 
        className='contactContainerForm' 
        onSubmit={contactHandler}>

            <Typography variant='h4'>
                Contact Us
            </Typography>
            <input
             type='text' 
            placeholder='Name'
             value={name}
             onChange={(e)=>setName(e.target.value)}
             required
             />
            <input 
            type='email' 
            placeholder='Email'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required/>
            <textarea 
            placeholder='Message' 
            cols={"30"} 
            rows={"10"}
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
            >

            </textarea>
            <Button variant='contained' type='Submit'>
                Send
            </Button>
        </form>
        </div>
    </div>
  )
}

export default Contact