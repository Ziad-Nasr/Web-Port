import React from "react";
import "./TabBar.css"
import LinkedIn from "../assets/Linkedin.png"
import Facebook from "../assets/Facebook.png"
import Github from "../assets/github.png"

function TabBar() {

    return (
        <div className="TabBar">
                <p className="Name">Ziad <span className="LetterN">N</span>asr</p>
            <div className="Titles">
                <p>Projects</p>
                <p>Technologies</p>
                <p>About me</p>
            </div>
            <div className="Icons">
                <a href="https://www.linkedin.com/in/ziad-nasr-071721260" className="TopButton"> <img src={LinkedIn} alt="LinkedIn" className="Icon"/></a>
                <a href="https://www.facebook.com/ziad.m.nasr" className="TopButton" ><img src={Facebook} alt="LinkedIn" className="Icon"/></a>
                <a href="https://github.com/Ziad-Nasr" className="TopButton"><img src={Github} alt="LinkedIn" className="Icon"/></a>
            </div>
        </div>
    );
}

export default TabBar;