import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useDarkMode from './hooks/useDarkMode';

function App() {
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  // Update page title
  useEffect(() => {
    document.title = 'Surendra Reddy Devireddy | Full Stack Developer';
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 dark:bg-slate-900 dark:text-slate-200">
      <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;