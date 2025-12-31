import React from "react";
import { Container } from "react-bootstrap";
import './AboutMe.css'

function AboutMe() {
    return (
        <section style={{ backgroundColor: "#f8f9fa" }}>
            <Container id="about" className="my-5">
                <h2 className="text-center mb-4">About me</h2>
                <p className="about-text">I’m an aspiring Full‑Stack Developer with a strong interest in building modern web applications. Currently, I’m learning and practicing technologies like HTML, CSS,Bootstrap, JavaScript,Jquery, React, Node.js,Express,SQL and API Integration, while exploring databases such as MongoDB and MySQL. As a beginner, I focus on writing clean code, understanding best practices, and improving my problem‑solving skills through hands‑on projects. I enjoy turning ideas into functional applications and am excited to keep growing my knowledge in both front‑end and back‑end development. My goal is to collaborate on real‑world projects, contribute to teams, and continue developing into a confident, skilled developer. </p>
            </Container>
        </section>
    );
}
export default AboutMe;