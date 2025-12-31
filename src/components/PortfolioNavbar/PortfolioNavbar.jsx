import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Agide from '../../assets/Agide.png'

function PortfolioNavbar() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand href="#hero"><img style={{
                    width: "60px",
                    height: "50px"
                }} src={Agide} alt="Agide Logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="nav" />
                <Navbar.Collapse id="nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#hero">Home</Nav.Link> <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#skills">Skills</Nav.Link>
                        <Nav.Link href="#resume">Resume</Nav.Link> <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default PortfolioNavbar;