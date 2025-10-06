import React, { useState } from "react";
import "./ArticlesMain.css";
import articlesData from "../Data/articlesIndex";
import styled from "styled-components";
import Article from "../Components/Article";

const Section = styled.section`
  background-color: #AFBFE0;
`;

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
    <Section>
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

            {openSection === key && (
              <div className="articles-grid">
                {articlesData[key] && articlesData[key].length > 0 ? (
                  articlesData[key].map((article) => (
                    // <div key={article.id} className="articles-box">
                    //   <img
                    //     src={article.image}
                    //     alt={article.title}
                    //     className="articles-box-img"
                    //   />
                    //   <div className="article-text">
                    //     <h4 className="headline-text">{article.title}</h4>
                    //     <p className="byline-text">by {article.author}</p>
                    //   </div>
                    // </div>
                    <Article
                     key={article.id}
                     article_link={article.url || "#"}
                     image={article.image}
                     title={article.title}
                     authors={article.author ? [article.author] : []}
                     />
                  ))
                ) : (
                  <p>No articles available</p>
                )}
              </div>
            )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ArticleMain;

