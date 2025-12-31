import React from "react";
import { Container, ProgressBar, Row, Col } from "react-bootstrap";
import './Skills.css'

function Skills() {
    const skills = [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "Bootstrap", level: 80 },
        { name: "Javascript", level: 75 },
        { name: "Jquery", level: 70 },
        { name: "React.js", level: 70 },
        { name: "Node.js", level: 70 },
        { name: "Express", level: 68 },
        { name: "SQL", level: 60 },
        { name: "REST API", level: 60 },
        { name: "Shopify", level: 60 },
        { name: "Git & GitHub", level: 75 }
    ];
    return (
        <section style={{ backgroundColor: "#e3f2fd" }}>
            <Container id="skills" className="my-5">
                <h2 className="text-center mb-4">Skills</h2>
                <Row>
                    {
                        skills.map((skill, i) => (<Col xs={12} md={6} key={i} className="mb-3">
                            <div className="d-flex justify-content-between"> <strong>{skill.name}</strong>
                                <span>{skill.level}%</span>
                            </div>
                            <ProgressBar now={skill.level} />
                        </Col>
                        ))}
                </Row>
            </Container>
        </section>
    );
}
export default Skills;