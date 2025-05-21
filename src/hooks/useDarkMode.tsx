import { useState, useEffect } from 'react';

const useDarkMode = (): [boolean, () => void] => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check if user has already set a preference
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      return JSON.parse(savedMode);
    }
    
    // Check if user prefers dark mode
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  useEffect(() => {
    // Update localStorage
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    
    // Update document class
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Listen for system preference changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e: MediaQueryListEvent) => {
      const hasLocalSetting = localStorage.getItem('darkMode') !== null;
      if (!hasLocalSetting) {
        setIsDarkMode(e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return [isDarkMode, toggleDarkMode];
};

export default useDarkMode;