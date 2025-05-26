import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center pt-16 pb-12 px-4 md:px-8 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="md:w-1/2 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-slate-800 dark:text-white">
              <span className="block">Hi, I'm</span>
              <span className="text-blue-600 dark:text-blue-400">Surendra Reddy</span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-6 text-slate-600 dark:text-slate-300">
              Full Stack Developer
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-xl">
              I build responsive, user-friendly web applications with modern technologies.
              Passionate about creating efficient, scalable solutions to solve real-world problems.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn btn-primary">
                Contact Me
              </a>
              <a href="https://drive.google.com/uc?export=download&id=1aQAmktQKsDL0cjxgwWa5_FaZVsIW9Tw7" className="btn btn-outline flex items-center gap-2">
                <Download size={18} /> Resume
              </a>
            </div>
            <div className="flex gap-4 mt-8">
              <a
                href="https://github.com/Surendra-Devireddy"
                className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/surendra-devireddy/"
                className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:devireddysurendra99@gmail.com"
                className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                aria-label="Email"
              >
                <Mail size={30} />
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end animate-fade-in">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white dark:border-slate-700 shadow-xl">
             <img src='/profile.jpg' border='0'  alt='IMG-3864'
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;