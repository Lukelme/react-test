// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

const Home = () => (
  <div>
    <h2>Home</h2>
    <p>página inicial do site!</p>
  </div>
);

const About = () => (
  <div>
    <h2>Sobre</h2>
    <p>Esta é a página sobre o nosso site.</p>
  </div>
);

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">inicio</Link>
            </li>
            <li>
              <Link to="/about">Sobre</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
}

export default App;
