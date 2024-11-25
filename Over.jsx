
import React from "react";
import { useNavigate } from "react-router-dom";

const BoxWithMarquee = () => {

    const navigate=useNavigate("");
    function handleTrack(){
        navigate('/MapboxMap');
    }
  const styles = {
    boxStyle: {
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '20px',
      maxWidth: '500px',
      margin: '20px auto',
      textAlign: 'center',
      boxShadow: '0 4px 8px 0 rgba(0,0,0,0.7)', // Added shadow for depth
      backgroundColor: '#f8f8f8', // Light background color
    },
    headingStyle: {
      fontWeight: 'bold',
      fontSize: '24px',
      color: '#333', // Dark text for better readability
    },
    marqueeStyle: {
      // Keeping it for fallback
      width: '100%',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      animation: 'marquee 10s linear infinite',
    },
    descriptionStyle: {
      margin: '20px 0',
      color: '#455', // Slightly lighter text color
    },
    buttonStyle: {
      backgroundColor: '#005bff',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      padding: '10px 20px',
      cursor: 'pointer',
      boxShadow:'0.0px',
      transition: 'background-color 0.3s', // Smooth transition for button hover
    }
  };

  return (
    <div style={styles.boxStyle}>
      <div style={styles.headingStyle}>
        <marquee behavior="scroll" direction="left">"USE A LAND" , MAKE MONEY.....</marquee>
      </div>
      <p style={styles.descriptionStyle}>
        If you have an empty land (near a bus stand or in the heart of the city) and have extra parking space in your house, make money from it by clicking the button below.
      </p>
      <button 
        style={styles.buttonStyle}
        onMouseOver={e => e.target.style.backgroundColor = '#0056b3'} // Darker blue on hover
        onMouseOut={e => e.target.style.backgroundColor = '#007bff'} // Original color on mouse out
     onClick={handleTrack} >
        Click Me
      </button>
    </div>
  );
};

export default BoxWithMarquee;
