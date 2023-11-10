import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import './App.css';
import Experience from './components/Experience';
import Configurator from './components/Configurator';
import { CustomizationProvider } from './contexts/Customization';
import CustomLoadingScreen from './components/CustomLoadingScreen';

function App() {
  const [configurationDone, setConfigurationDone] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleDoneClick = () => {
    // Handle the "Preview" button click event, e.g., set the configuration as done
    setConfigurationDone(true);
  };

  const handleBackClick = () => {
    // Handle the "Back" button click event, e.g., reset the configuration
    setConfigurationDone(false);
  };

  // Simulate loading (replace this with your actual loading logic)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay as needed
  }, []);

  return (
    <CustomizationProvider>
      <div className="App">
        <Canvas>
          <color attach="background" args={["#3dc5ff"]} />
          <Experience />
        </Canvas>
        {!configurationDone ? (
          <Configurator />
        ) : (
          <button className="back-button" onClick={handleBackClick}>
            Back
          </button>
        )}
        {!configurationDone ? (
          <button className="done-button" onClick={handleDoneClick}>
            Preview
          </button>
        ) : null}
      </div>
      {loading ? <CustomLoadingScreen /> : null}
    </CustomizationProvider>
  );
}

export default App;
