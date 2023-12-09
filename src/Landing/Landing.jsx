import React from "react";
import "./Landing.css";
import Project from "../Projects/Projects";
import AboutMe from "../AboutMe/AboutMe";
import Me from "../assets/Me.jpeg";
import Dust from "../Components/Dust";

function Landing() {
    return (
        <div className="body">
            <div className="Welcome">
                <div className="WelcomeRight">
                    <div className="Dust">
                        <Dust />
                    </div>
                    <div className="WelcomeText">
                        <h1 className="WelcomeTitle">Hello, I am Ziad Nasr<br/> A Software Engineer</h1>
                        <p className="Subtitle"> Hello, I am Ziad Nasr<br/> A Software Engineer</p>
                    </div>
                </div>
            <div className="image-container">
                <div className="circular-gradient"></div>
                <img src={Me} alt="MyPicture" className="Me"/>
                <div className="circular-gradient-behind"></div>
            </div>
            </div>
            <div className="Projects">
                <AboutMe />
                <Project />
            </div>
        </div>
    )
}

export default Landing;