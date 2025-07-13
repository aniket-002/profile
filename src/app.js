import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import About from './components/About'; // adjust path if needed

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true, // optional: run animation only once
    });
  }, []);

  return (
    <div>
      <About />
    </div>
  );
}

export default App;
