import React from 'react';
import logo from './logo.png'

function CustomLoadingScreen() {
  return (
    <div className="custom-loading-screen">
       <img src={logo} alt="Loading..." className="loading-image" />
    </div>
  );
}

export default CustomLoadingScreen;
