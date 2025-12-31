import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import agidachew from '../../assets/agidachew.jpg'

function Hero() {
    return (
        <section>
            <Container id="hero" className="py-5 text-center">
                <Row className="align-items-center">
                    <Col xs={12} md={4}>
                        <h1 className="display-5 fw-bold hero-title">Hello, I'm <br />
                            Agide Getnet</h1>
                        <p className="lead hero-subtitle">Full Stack Web Developer</p>
                    </Col>
                    <Col xs={12} md={8}>
                        <Image src={agidachew} alt="Profile" style={{ height: "450px", width: "66%" }} />
                    </Col>

                </Row>
            </Container>
        </section>
    );
}
export default Hero;