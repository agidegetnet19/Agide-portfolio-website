import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import './Resume.css';
import resume from '../../assets/resume.pdf'

function Resume() {
    return (
        <section style={{ backgroundColor: " #fff3cd", height: "300px", alignItems: "center", paddingTop: "25px", marginBottom: "50px" }}>
            <Container id="resume" className="my-5"> <h2 className="text-center mb-4 ms-5" >View my resume</h2>
                <h4 className="text-center mb-4 me-5">Detailed resume can be downloaded right below.</h4>
                <div id="button" className=" text-center mt-4 ms-5 ">  <Button href={resume} download> Download resume </Button>
                </div>
            </Container>
        </section>
    );
}
export default Resume;