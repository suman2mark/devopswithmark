import React from 'react';
import { ArrowDownCircle, Terminal } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center px-6 pt-20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="relative inline-block mb-4">
              <Terminal size={48} className="text-teal-500" />
            </div>
            <p className="text-teal-600 dark:text-teal-400 font-medium mb-4">Hello, I'm</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="block">Markandeyulu Reddi</span>
              <span className="block text-gray-700 dark:text-gray-300">DevOps Engineer</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
              An accomplished IT professional with over 5.7 years of experience in DevOps, 
              specializing in Kubernetes, Docker, Linux, and shell scripting.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-md shadow-md transition-all duration-300 transform hover:-translate-y-1"
              >
                Get in Touch
              </a>
              <a 
                href="#projects" 
                className="px-6 py-3 border border-teal-600 dark:border-teal-400 text-teal-600 dark:text-teal-400 font-medium rounded-md hover:bg-teal-600/10 transition-all duration-300 transform hover:-translate-y-1"
              >
                View Projects
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-teal-600/20 rounded-full flex items-center justify-center overflow-hidden">
                <div className="w-60 h-60 md:w-72 md:h-72 bg-teal-600/30 rounded-full flex items-center justify-center">
                  <div className="w-56 h-56 md:w-64 md:h-64 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center overflow-hidden shadow-lg">
                    <img 
                      src="/my resume/mark_white_bg.jpg" 
                      alt="Markandeyulu Reddi" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-900 p-4 rounded-full shadow-lg">
                <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900/50 rounded-full flex items-center justify-center">
                  <Terminal size={32} className="text-teal-600 dark:text-teal-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block animate-bounce">
          <a href="#about">
            <ArrowDownCircle size={32} className="text-teal-600 dark:text-teal-400" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;