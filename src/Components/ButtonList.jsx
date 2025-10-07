import React, { useState } from 'react';

const HomepageButtons = ({ children, onClick }) => {
    const buttonStyle = {
        // Custom Color Variables for the soft lavender look
        '--button-light': '#f9f5ff', 
        '--button-outline': '#E0E0FF', 

        // Base Styling
        padding: '.3em 1.3em',
        fontSize: '2.6vw',
        fontFamily: 'DM Serif Text, serif',
        fontWeight: 600,
        letterSpacing: '0.04em',
        cursor: 'pointer',
        userSelect: 'none',
        width: '10',
        
        // Shape and base colors
        borderRadius: '30px',
        backgroundColor: 'var(--button-light)',
        color: '#333',
        border: '2px solid var(--button-outline)',

    };

  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  let currentStyle = { ...buttonStyle };

  if (isHovered) {
    currentStyle = {
      ...currentStyle,
      fontStyle: "italic",
      color: "#9169f5",
    };
  }

  if (isActive) {
    currentStyle = {
      ...currentStyle,
      transform: "translateY(1px)",
    };
  }

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsActive(false);
  };

  return (
    <button
      style={currentStyle}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
    >
      {children}
    </button>
  );
};

const ButtonList = () => {
  const [, setLastClicked] = useState("");

  const buttonItems = [
    { label: "UNIVERSITY", key: "university" },
    { label: "CITY", key: "city" },
    { label: "SPORTS", key: "sports" },
    { label: "ARTS & CULTURE", key: "artsCulture" },
    { label: "OPINION", key: "opinion" },
    { label: "SPECTRUM", key: "spectrum" },
    { label: "VIDEO", key: "video" },
    { label: "AUDIO", key: "audio" },
    { label: "CROSSWORDS", key: "crosswords" },
  ];

  const handleButtonClick = (sectionKey) => {
    setLastClicked(sectionKey);

    const targetElement = document.getElementById(sectionKey);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      console.log(`Scrolled to: ${sectionKey}`);
    } else {
      console.warn(`No section found for key: ${sectionKey}`);
    }
  };

  const containerStyle = {
    width: "80%",
    maxWidth: "350px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: "15px",
  };

  return (
    <div style={containerStyle}>
      {buttonItems.map(({ label, key }) => (
        <HomepageButtons key={key} onClick={() => handleButtonClick(key)}>
          {label}
        </HomepageButtons>
      ))}
    </div>
  );
};

export default ButtonList;