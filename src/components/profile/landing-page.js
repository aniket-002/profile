import React from 'react';
import Navbar from './navbar';
import Home from './home';
import About from './about';
import Projects from './projects';
import Skills from './skills';
import Certificates from './certificates';
import Education from './education';
import Contact from './contact';
import Footer from './footer';
import WorkExperience from './work-exprience';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <WorkExperience />
      <Projects />
      <Skills />
      <Certificates />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
