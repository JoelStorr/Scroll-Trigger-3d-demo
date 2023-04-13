import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Canvas } from '@react-three/fiber'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="renderContainer">
      <Canvas>
        <App />
      </Canvas>
    </div>
    <div className="placeHolder "></div>
    <div className="placeHolder box1"></div>
    <div className="placeHolder box2"></div>
    <div className="placeHolder box3"></div>
  </React.StrictMode>
);
