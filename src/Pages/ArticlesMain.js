import React, { useState } from "react";
import "./ArticlesMain.css";

const sections = [
  { key: "university", label: "University", colorClass: "university" },
  { key: "city", label: "City", colorClass: "city" },
  { key: "sports", label: "Sports", colorClass: "sports" },
  { key: "artsCulture", label: "Arts & Culture", colorClass: "artsCulture" },
  { key: "opinion", label: "Opinion", colorClass: "opinion" },
  { key: "spectrum", label: "Spectrum", colorClass: "spectrum" },
  { key: "video", label: "Video", colorClass: "video" },
  { key: "audio", label: "Audio", colorClass: "audio" },
  { key: "crosswords", label: "Crosswords", colorClass: "crosswords" },
];

const ArticleMain = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (key) => {
    setOpenSection(openSection === key ? null : key);
  };

  return (
    <div>
      <div className="img-wrapper">
        <img
          src="articles_header.png"
          alt="Article title"
          className="title-line"
        />
      </div>

      <div className="flex-box section-text">
        {sections.map(({ key, label, colorClass }) => (
          <div
            key={key}
            className={`section-box ${colorClass} ${
              openSection === key ? "expanded" : ""
            }`}
            onClick={() => toggleSection(key)}
          >
            <div className="section-header">
              <span>{label}</span>
              <img
                className={`drop-arrow ${
                  openSection === key ? "rotated" : ""
                }`}
                src="drop_arrow.png"
                alt="dropdown arrow"
              />
            </div>

            {/* MODIFY THIS SECTION AND ADD ARTICLES */}
            {openSection === key && (
              <div>
                <ul>
                  <li>{label} Article 1</li>
                  <li>{label} Article 2</li>
                  <li>{label} Article 3</li>
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleMain;

