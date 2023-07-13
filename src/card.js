import React from 'react';
import ReactDOM from 'react-dom/client';

const Card = (props) => {
    const divStyle = {
      backgroundImage: `url(${props.val.bg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      // Add any other background-related styles here
    };
    
  
    return <div className="card" style={divStyle}><footer className='footer'>{props.val.ind}</footer></div>;
  };
  
  export default Card;