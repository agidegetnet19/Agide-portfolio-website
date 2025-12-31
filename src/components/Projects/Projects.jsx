import React from 'react'
import classes from './Projects.module.css'
import js_logo from '../../assets/js_logo.png'


function Projects() {
    return (
        <section id='projects'>
            <div className={classes.projects}>
                <h1>MY Projects</h1>
                <div>
                    <div className={classes.cards_1}>
                        <div className={classes.amazon_card}>
                            <div className={classes.amazon_text}>
                                <h4>AMAZON CLONE</h4><br />

                                <button style={{ width: "250px" }} onClick={() => window.open("https://github.com/agidegetnet19/amazon-front-end/", "_blank")} >VIEW CODE ON GITHUB</button><br /><br />
                                <button style={{ width: "150px" }} onClick={() => window.open("https://amazon-front-end-lemon.vercel.app/", "_blank")}>VISIT SITE</button>
                            </div>
                        </div>
                        <div className={classes.apple_card}>
                            <div className={classes.apple_text}>
                                <h4>APPLE WEBSITE <br />  REPLICA WITH  <br />REACT</h4><br />

                                <button style={{ width: "250px" }} onClick={() => window.open("https://github.com/agidegetnet19/apple-website-replica-with-react", "_blank")}>VIEW CODE ON GITHUB</button><br /><br />
                                <button style={{ width: "150px" }} onClick={() => window.open("https://apple-website-replica-with-react-ruby.vercel.app/", "_blank")} >VISIT SITE</button>
                            </div>

                        </div>
                        <div className={classes.netflix_card}>
                            <div className={classes.netflix_text}>
                                <h4>NETFLIX CLONE<br />WITH REACT</h4><br />

                                <button style={{ width: "250px" }} onClick={() => window.open("https://github.com/agidegetnet19/Netflix-Clone-2025/tree/main/netflix-clone", "_blank")} >VIEW CODE ON GITHUB</button><br /><br />
                                <button style={{ width: "150px" }} onClick={() => window.open(" https://agidegetnet19.github.io/Netflix-Clone-2025/", "_blank")} >VISIT SITE</button>
                            </div>
                        </div>
                    </div>

                    <div className={classes.cards_2}>
                        <div className={classes.apple_bootstrap_card}>
                            <div className={classes.apple_bootstrap_text}>
                                <h4>APPLE WEBSITE <br />REPLICA WITH <br />BOOTSTRAP</h4><br />
                                <button style={{ width: "250px" }} onClick={() => window.open("https://github.com/agidegetnet19/apple-website-replica-with-bootstrap-", "_blank")} >VIEW CODE ON GITHUB</button><br /><br />
                                <button style={{ width: "150px" }} onClick={() => window.open("https://apple-website-replica-with-bootstra.vercel.app/", "_blank")}>VISIT SITE</button>
                            </div>

                        </div>
                        <div className={classes.snake_card}>
                            <div className={classes.snake_text}>
                                <h4>SNAKE GAME  <br />WITH JS</h4><br />
                                <button style={{ width: "250px" }} onClick={() => window.open("https://github.com/agidegetnet19/snake-game", "_blank")} >VIEW CODE ON GITHUB</button><br /><br />
                                <button style={{ width: "150px" }} onClick={() => window.open("https://snake-game-liard-five.vercel.app/", "_blank")} >VISIT SITE</button>
                            </div>
                        </div>
                        <div className={classes.calculator_card}>
                            <div className={classes.calculator_text}>
                                <h4>CALCULATOR<br />WITH JS</h4><br />
                                <button style={{ width: "250px" }} onClick={() => window.open("https://github.com/agidegetnet19/calculator-app", "_blank")} >VIEW CODE ON GITHUB</button><br /><br />
                                <button style={{ width: "150px" }} onClick={() => window.open("https://calculator-app-wine-sigma.vercel.app/", "_blank")} >VISIT SITE</button>
                            </div>
                            <div>
                                <img src={js_logo} alt=" js logo" style={{ width: "70px", height: "70px" }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Projects