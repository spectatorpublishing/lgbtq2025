import React from "react";
import "./Credits.css";
import { credits } from "../Data/credits";

import styled from "styled-components";

const Section = styled.section`
  background-color: #DFCAF0;
`;

const Credits = () => {
    return (
        <Section>
            <div className="section-staff-credits">
                <div className="credits-title">
                    <img src="/creditsTitleTop.png" alt="Staff that made" className="title-line" />
                    <img src="/creditsTitleBottom.png" alt="this possible" className="title-line" />
                </div>
                <div className="credits-box">
                    <div className="credits-grid">
                        {Object.entries(credits).map(([section, members]) => (
                        <div className="credits-section" key={section}>
                            <h3 className="section-title">{section.toUpperCase()}</h3>
                            {members.map((person, idx) => (
                                <p className="personInfo" key={idx}>
                                {person.staff_name}{", "}{person.title}
                                </p>
                            ))}
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Credits;