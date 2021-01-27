  import React, { Component } from 'react';
import Contact from './components/Contact.js';
import Education from './components/Education.js';
import Experience from './components/Experience.js';
import './styles/App.css';

class App extends Component {
  render () {
    return (
        <div id="app">
            <div id="title-container" className="mar-45">
                <h1>CV Builder</h1>
            </div>
            <div id="resume-builder" className="slideIn">
                <Contact />
                <Experience />
                <Education />
            </div>
        </div>
    )
  }
}

export default App;
