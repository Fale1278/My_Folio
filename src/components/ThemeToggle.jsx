import React, { useState, useEffect } from 'react';
import '../styles/ThemeToggle.css'; // Add styling for the button itself (e.g., animated sun/moon icon)

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  // 1. Check local storage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'theme-dark') {
      document.documentElement.className = 'theme-dark';
      setIsDark(true);
    } else {
      document.documentElement.className = 'theme-light';
      setIsDark(false);
    }
  }, []);

  // 2. Handler to switch theme
  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.className = 'theme-light';
      localStorage.setItem('theme', 'theme-light');
      setIsDark(false);
    } else {
      document.documentElement.className = 'theme-dark';
      localStorage.setItem('theme', 'theme-dark');
      setIsDark(true);
    }
  };

  return (
    <button className="theme-toggle-button" onClick={toggleTheme} aria-label="Toggle light and dark mode">
      {/* Icon logic: show moon if it's light mode, show sun if it's dark mode */}
      {isDark ? '☀️' : '🌙'}
    </button>
  );
};

export default ThemeToggle;