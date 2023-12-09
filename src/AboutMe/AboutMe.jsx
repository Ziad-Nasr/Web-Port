import React from "react";
import "./AboutMe.css";
import Dust
 from "../Components/Dust";
export default function AboutMe() {
    return (
        <div className="AboutMeBody">
            <div>
                <h1 className="AboutMeTitle">Quick brief about Me</h1>
            </div>
            <div className="AboutMeText">
                <div className="Dust">
                        <Dust />
                    </div>
                {/* <p>
                An Enthusiastic senior at Ain Shams University<br/> In the vibrant heart of<span className="Orange"> Cairo, Egypt.</span><br/>
                My academic journey delves deep into the world of Data Science,<br/>
                where I unravel the mysteries of <span className="Blue">Machine Learning,</span> Neural Networks,<br/>
                and the captivating realms of Computer Vision.<br/>
                Beyond the digital landscape, <br/>
                I navigate the intricate paths of Embedded Systems<br/>
                and bring ideas to life on the <span className="Orange">Frontend canvas.</span>
                </p> */}
            </div>
        </div>
    )
}