import React from "react";
import { Container } from "react-bootstrap";
import './AboutMe.css'

function AboutMe() {
    return (
        <section style={{ backgroundColor: "#e1e7ecff", paddingBottom: "10px" }}>
            <Container id="about" className="my-5">
                <h2 className="text-center mb-4">About me</h2>
                <p className="about-text">
                    I’m an aspiring Full‑Stack Developer with a strong passion for building modern web applications that bring ideas to life. I have a growing curiosity about how websites and applications work, and I’m learning step by step to create projects that combine creativity with functionality.  I enjoy exploring both the front‑end and back‑end sides of web development. On the front‑end,I work with HTML, CSS, Bootstrap, JavaScript, jQuery, and React to design user interfaces that are clean, responsive,and engaging. On the back‑end, I am learning how to build server‑side applications using Node.js and Express,develop REST APIs, and manage data with MySQL and JSON. This combination of skills allows me to understand the complete process of building applications from start to finish.My goal is to grow into a developer who can design and deliver applications that are functional, user‑friendly,and valuable to people. I am eager to take on new challenges, collaborate with others, and continue expanding my  knowledge in full‑stack development. Every project I work on is an opportunity to learn, improve, and move closer to becoming a skilled professional in the tech industry.
                </p>

            </Container>
        </section>
    );
}
export default AboutMe;