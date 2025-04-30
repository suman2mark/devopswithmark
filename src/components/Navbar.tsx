import React, { useState, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { Sun, Moon, Menu, X } from 'lucide-react';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 px-6 transition-all duration-300 ${
        scrolled 
          ? 'py-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md' 
          : 'py-5 bg-transparent'
      }`}
    >
      <nav className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-xl md:text-2xl font-bold text-teal-600 dark:text-teal-400">
          DevOps<span className="text-gray-800 dark:text-white">Engineer</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navLinks.map(link => (
              <li key={link.name}>
                <a 
                  href={link.href}
                  className="font-medium text-gray-700 hover:text-teal-600 dark:text-gray-300 dark:hover:text-teal-400 transition-colors duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Navigation Button */}
        <div className="flex items-center md:hidden">
          <button 
            onClick={toggleTheme} 
            className="p-2 mr-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-white dark:bg-gray-900 pt-20">
          <div className="container mx-auto px-6">
            <ul className="flex flex-col space-y-6 text-lg">
              {navLinks.map(link => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="block py-2 font-medium text-gray-700 hover:text-teal-600 dark:text-gray-300 dark:hover:text-teal-400 transition-colors duration-300"
                    onClick={toggleMenu}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;