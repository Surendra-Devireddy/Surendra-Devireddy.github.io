import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';

interface NavbarProps {
  toggleDarkMode: () => void;
  isDarkMode: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ toggleDarkMode, isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionElement = section as HTMLElement;
        const sectionTop = sectionElement.offsetTop;
        const sectionHeight = sectionElement.offsetHeight;
        const sectionId = sectionElement.id;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });

      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { id: 'about', text: 'About' },
    { id: 'experience', text: 'Experience' },
    { id: 'skills', text: 'Skills' },
    { id: 'education', text: 'Education' },
    { id: 'contact', text: 'Contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-10 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#" className="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-400">
          Surendra Reddy
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
            >
              {link.text}
            </a>
          ))}
          <button
            onClick={toggleDarkMode}
            className="ml-4 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleDarkMode}
            className="p-2 mr-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
            aria-label="Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 shadow-lg animate-fade-in">
          <div className="flex flex-col py-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`nav-link py-3 px-6 ${
                  activeSection === link.id ? 'active' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;