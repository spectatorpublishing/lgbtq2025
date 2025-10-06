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

    // We use state to handle the temporary hover/active states
    const [isHovered, setIsHovered] = useState(false);
    const [isActive, setIsActive] = useState(false);
    
    let currentStyle = {...buttonStyle};

    // Apply temporary hover/active states (reverts when interaction ends)
    if (isHovered) {
        currentStyle = {
            ...currentStyle,
            fontStyle: 'italic',
            color: '#9169f5',
        };
    }
    
    if (isActive) {
        currentStyle = {
            ...currentStyle,
            transform: 'translateY(1px)',
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
            onMouseEnter={() => setIsHovered(true)} // Set hovered state
            onMouseLeave={handleMouseLeave} // Revert on mouse leave
            onMouseDown={() => setIsActive(true)}
            onMouseUp={() => setIsActive(false)}
        >
            {children}
        </button>
    );
};

/**
 * Renders the stack of navigation buttons.
 */
const ButtonList = () => {
    const [setLastClicked] = useState('');

    const handleButtonClick = (section) => {
        setLastClicked(section);
        console.log(`Mapsd to: ${section}`);
    };

    const buttonItems = [
        'UNIVERSITY', 
        'SECTION', 
        'UNIVERSITY', 
        'UNIVERSITY', 
        'UNIVERSITY', 
        'UNIVERSITY'
    ];

    const containerStyle = {
        width: "80%", 
        maxWidth: "350px",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        alignItems: "flex-end",
        gap: "15px",
    };


    return (
        // Replaced styled.div with a standard div and class/style attributes
        <div style={containerStyle}>
            {buttonItems.map((text) => (
                <HomepageButtons 
                    key={text} 
                    onClick={() => handleButtonClick(text)}
                >
                    {text}
                </HomepageButtons>
            ))}
        </div>
    );
};

export default ButtonList;
