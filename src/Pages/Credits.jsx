import React from "react";
import "./Credits.css";
import { credits } from "../Data/credits";
import creditsTitleTop from "../Images/creditsTitleTop.png";
import creditsTitleBottom from "../Images/creditsTitleBottom.png";

const Credits = () => {
    return (
        <div className="section-staff-credits">
            <div className="credits-title">
                <img src={creditsTitleTop} alt="Staff that made" className="title-line" />
                <img src={creditsTitleBottom} alt="this possible" className="title-line" />
            </div>
            <div className="credits-box">
                <div className="credits-grid">
                    {Object.entries(credits).map(([section, members]) => (
                    <div className="credits-section" key={section}>
                        <h3 className="section-title">{section.toUpperCase()}</h3>
                        {members.map((person, idx) => (
                        <p className="personInfo" key={idx}>
                            {person.staff_name},<br />
                            {person.title}
                        </p>
                        ))}
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Credits;