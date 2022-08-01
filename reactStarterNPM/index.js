import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import ReactFunFacts from './components/ReactFunFacts';
import ReasonsToLearnReact from './components/ReasonsToLearnReact';
import App from './src/App';
const center = <h1>Hello React</h1>;
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div>
    <Navbar />
    <ReasonsToLearnReact />
    <ReactFunFacts />
  </div>
);
