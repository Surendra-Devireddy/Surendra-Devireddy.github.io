import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-blue-400 mb-2">Surendra Reddy</h2>
            <p className="text-slate-300">Full Stack Developer</p>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a href="https://github.com/Surendra-Devireddy" className="text-slate-300 hover:text-blue-400 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/devireddy-surendra/" className="text-slate-300 hover:text-blue-400 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:devireddysurendra99@gmail.com" className="text-slate-300 hover:text-blue-400 transition-colors">
              <Mail size={20} />
            </a>
          </div>
          
          <button
            onClick={scrollToTop}
            className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Surendra Reddy Devireddy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;