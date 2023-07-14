import React from "react";
import "./Landing.css";
import Project from "../Projects/Projects";

function Landing() {
    return (
        <div className="body">
            <div className="Welcome">
                <div className="WelcomeText">
                    <h1 className="WelcomeTitle">Hello, I am Ziad Nasr,<br/>A Software Engineer</h1>
                    <p className="Subtitle">Lorem Ipsum. Lorem Ipsum. Lorem Ipsum</p>
                </div>
            </div>
            <div className="Projects">
                <Project />
            </div>
        </div>
    )
}

export default Landing;