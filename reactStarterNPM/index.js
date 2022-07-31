// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<h1>Hello React</h1>);
console.log(123);
import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App';
const center = <h1>Hello React</h1>;
function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
        <li>Login</li>
      </ul>
    </div>
  );
}

console.log(center);
console.log(Navbar());
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div>
    <Navbar />
    <App />
    {center}
  </div>
);
