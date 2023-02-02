import React from 'react';
import { Carousel } from 'antd';
const contentStyle = {
    margin: 0,
    height: '60px',
    color: '#fff',
    fontSize: '24px',
    lineHeight: '60px',
    textAlign: 'center',
    position: 'absolute',
    left: '50%',
    bottom: '20px', 
    transform: 'translateX(-50%)'
  };
  const backStyle1 = {
    height: "800px",
    position: 'relative',
    backgroundImage: "URL('images/visual_main22.jpg')",
  }
  const backStyle2 = {
    position: 'relative',
    height: "800px",
    backgroundImage: "URL('images/visual_main23.jpg')",
  }
  const backStyle3 = {
    position: 'relative',
    height: "800px",
    backgroundImage: "URL('images/visual_main24.jpg')",
  }
  const backStyle4 = {
    position: 'relative',
    height: "800px",
    backgroundImage: "URL('images/visual_main25.jpg')",
  }
const VisualSlider = () => {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
      };
    return (
    <Carousel afterChange={onChange}>
    <div>
      <div style={backStyle1}>
        <h3 style={contentStyle}>1/4</h3>
      </div>
    </div>
    <div>
      <div style={backStyle2}>
        <h3 style={contentStyle}>2/4</h3>
      </div>
    </div>
    <div>
      <div style={backStyle3}>
        <h3 style={contentStyle}>3/4</h3>
      </div>
    </div>
    <div>
      <div style={backStyle4}>
        <h3 style={contentStyle}>4/4</h3>
      </div>
    </div>
    </Carousel> 
    );
};

export default VisualSlider;