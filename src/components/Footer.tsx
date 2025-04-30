import React from 'react';
import { Github, Linkedin, Twitter, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <a 
            onClick={scrollToTop}
            href="#"
            className="mb-8 p-2 bg-teal-600 hover:bg-teal-700 rounded-full transition-colors duration-300 cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} />
          </a>

          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">
              DevOps<span className="text-teal-400">Engineer</span>
            </h3>
            <p className="text-gray-400 max-w-md mx-auto">
              Building scalable infrastructure and efficient CI/CD pipelines with a focus on reliability and automation.
            </p>
          </div>

          <div className="flex space-x-4 mb-8">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 hover:bg-teal-600 rounded-full transition-colors duration-300"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 hover:bg-teal-600 rounded-full transition-colors duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 hover:bg-teal-600 rounded-full transition-colors duration-300"
            >
              <Twitter size={20} />
            </a>
          </div>

          <div className="w-full border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">
                © {new Date().getFullYear()} John Doe. All rights reserved.
              </p>
              <ul className="flex flex-wrap justify-center space-x-4">
                <li>
                  <a href="#about" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">About</a>
                </li>
                <li>
                  <a href="#skills" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">Skills</a>
                </li>
                <li>
                  <a href="#experience" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">Experience</a>
                </li>
                <li>
                  <a href="#projects" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">Projects</a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;