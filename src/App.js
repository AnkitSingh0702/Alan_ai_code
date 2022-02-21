// import blog from '../src/blog.gif';
import { useLottie } from "lottie-react";
import Ai from '../src/Ai.json'
import './App.css';
import alanBtn from "@alan-ai/alan-sdk-web";
import React, { useEffect } from 'react';
function App() {
  const options = {
    animationData: Ai,
    loop: true,
    autoplay: true
  };
  const { View } = useLottie(options);
  useEffect(() => {
    alanBtn({
      key: 'Enter your own key',
      onCommand: (commandData) => {
        if (commandData.command === 'go:back') {
          console.log(commandData)
        }
      }
    });
  }, []);
  return (
    <div className="App">
      
        {/* <img src={blog} className="App-logo" alt="logo" /> */}
        {View}
        
    </div>
  );
}

export default App;
