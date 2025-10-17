import React from "react";
import "../Pages/ArticlesMain.css";

export function isYouTubeUrl(url) {
  return url.includes("youtube.com") || url.includes("youtu.be");
}

export function getEmbedUrl(url) {
  if (url.includes("youtu.be/")) {
    return url.replace("youtu.be/", "www.youtube.com/embed/");
  }
  if (url.includes("youtube.com/watch?v=")) {
    return url.replace("watch?v=", "embed/");
  }
  return url;
}

const Article = ({ article_link, image, title, authors }) => {
  const youtubeLink = isYouTubeUrl(image);
  const embedUrl = youtubeLink ? getEmbedUrl(image) : null;

  const handleClick = () => {
    if (article_link) window.open(article_link, "_blank");
  };

  return (
    <div className="articles-box" onClick={handleClick} style={{ cursor: "pointer" }}>
      {youtubeLink ? (
        <iframe
          className="articles-box-img"
          src={embedUrl}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={title}
        />
      ) : (
        <img className="articles-box-img" src={image} alt={title} />
      )}
      <h4 className="headline-text">{title}</h4>
      <p className="byline-text">By {authors.join(", ")}</p>
    </div>
  );
};

export default Article;

