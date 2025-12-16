import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';
// import "./App.css"

// Page Components
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import ProjectDetails from './pages/ProjectDetails'; // For individual project view

// Main application component
function App() {
  return (
    <Router>
      <Navbar />
      <ThemeToggle />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetails />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </main>
      {/* Footer component would go here */}
    </Router>
  );
}

export default App;