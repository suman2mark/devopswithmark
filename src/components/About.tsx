import React from 'react';
import { Code, GitBranch, GitPullRequest, Server } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-teal-600 dark:bg-teal-400 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
              An accomplished IT professional with over 5.7 years of experience in DevOps, specializing in Kubernetes, Docker, Linux, and shell scripting. Proven ability to design and optimize CI/CD pipelines for seamless integration and deployment.
            </p>
            <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
              Experience in Logistics and Telecom domains. Effectively collaborates with engineering and change management teams to facilitate the smooth progression of bug fixes and user stories.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Excels in reviewing deployment components and contributing to agile workflows, including complex migrations and new environment setups.
            </p>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2">
                <Server className="text-teal-600 dark:text-teal-400 w-10 h-10 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Infrastructure</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Designing and implementing cloud-native infrastructure with a focus on scalability.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2">
                <Code className="text-teal-600 dark:text-teal-400 w-10 h-10 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Automation</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Creating automated workflows to increase efficiency and reduce human error.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2">
                <GitBranch className="text-teal-600 dark:text-teal-400 w-10 h-10 mb-4" />
                <h3 className="text-xl font-semibold mb-2">CI/CD</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Building continuous integration and deployment pipelines for rapid delivery.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2">
                <GitPullRequest className="text-teal-600 dark:text-teal-400 w-10 h-10 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Monitoring</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Implementing comprehensive monitoring and alerting systems for proactive operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;