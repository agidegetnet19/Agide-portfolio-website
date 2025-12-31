import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import FacebookIcon from '@mui/icons-material/Facebook';
 import InstagramIcon from '@mui/icons-material/Instagram'; 
import TelegramIcon from '@mui/icons-material/Telegram';
import { Link } from "react-router-dom";
import './Contact.css';

function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [loading, setLoading] = useState(false);
    const [feedback, setFeedback] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch("https://portfolio-back-end-km43.onrender.com/contact",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData),
                });
            const result = await response.json();
            setFeedback({
                type: "success",
                message: result.message

            });
            setFormData({
                name: "",
                email: "",
                message: ""
            });
        } catch (error) {
            setFeedback({
                type: "danger",
                message: "Error sending message."
            });
        }
        finally {
            setLoading(false);
        }
    };
    return (
        <section style={{ backgroundColor: "#f8f9fa" }}>
            <Container id="contact" className="my-5">
                <h2 className="text-center mb-4">Contact Me</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
                    </Form.Group> <Form.Group controlId="formMessage"> <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={3} name="message" placeholder="Your message" value={formData.message} onChange={handleChange} required />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="mt-3" style={{ width: "250px" }} disabled={loading} > {loading ? "Sending..." : "Send"} </Button>
                </Form>
                {feedback && (<Alert variant={feedback.type} className="mt-3"> {feedback.message} </Alert>)}
            </Container> 

           <div 
           className="d-flex justify-content-center mt-4 "
           style={{ marginBottom: "20px" 
           }}>
             <a
              href="https://facebook.com/Agide Getnet" 
              target="_blank" 
              rel="noopener noreferrer"
              > 
              <FacebookIcon 
             style={{
                 fontSize: 40, color: "#4267B2",
                  marginRight: "15px" 
                }} /> 
                </a> 
                
                <a 
             href="https://instagram.com/dad.191919" 
             target="_blank"
              rel="noopener noreferrer"> 
              <InstagramIcon
              style={{ 
                fontSize: 40, color: "#E1306C",
                 marginRight: "15px"
                 }} /> 
                 </a> 
                 <a
              href="https://t.me/agidachew191919"
              target="_blank" 
              rel="noopener noreferrer"
              > 
              <TelegramIcon 
              style={{
                 fontSize: 40, color: "#0088cc" 
                }}  />
                 </a>
              </div>   
        </section>
        
    );
}
export default Contact;