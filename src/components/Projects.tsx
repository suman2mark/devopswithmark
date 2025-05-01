import React, { useState } from 'react';
import { Github, ExternalLink, Folder, GitBranch } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  github: string;
  demo?: string;
  category: 'infrastructure' | 'cicd' | 'automation' | 'monitoring' | 'all';
}

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'infrastructure' | 'cicd' | 'automation' | 'monitoring'>('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'Kubernetes Cluster Automation',
      description: 'Automated deployment of Kubernetes clusters on AWS using Terraform and Ansible.',
      tags: ['Kubernetes', 'Terraform', 'AWS', 'Ansible'],
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg',
      github: 'https://github.com',
      category: 'infrastructure'
    },
    {
      id: 2,
      title: 'CI/CD Pipeline for Microservices',
      description: 'Built a complete CI/CD pipeline for microservices architecture using Jenkins, Docker, and Kubernetes.',
      tags: ['Jenkins', 'Docker', 'Kubernetes', 'Microservices'],
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg',
      github: 'https://github.com',
      demo: 'https://demo-url.com',
      category: 'cicd'
    },
    {
      id: 3,
      title: 'Infrastructure as Code Repository',
      description: 'Template repository for Infrastructure as Code using Terraform modules for AWS, Azure, and GCP.',
      tags: ['Terraform', 'AWS', 'Azure', 'GCP', 'IaC'],
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg',
      github: 'https://github.com',
      category: 'infrastructure'
    },
    {
      id: 4,
      title: 'Automated Backup Solution',
      description: 'Python scripts for automated database backups with cloud storage integration and monitoring.',
      tags: ['Python', 'AWS S3', 'Automation', 'Bash'],
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
      github: 'https://github.com',
      category: 'automation'
    },
    {
      id: 5,
      title: 'Monitoring Stack Deployment',
      description: 'Automated deployment of Prometheus, Grafana, and Alertmanager with predefined dashboards and alerts.',
      tags: ['Prometheus', 'Grafana', 'Docker Compose', 'Monitoring'],
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg',
      github: 'https://github.com',
      demo: 'https://demo-url.com',
      category: 'monitoring'
    },
    {
      id: 6,
      title: 'GitOps Workflow Implementation',
      description: 'Implementation of GitOps workflow using ArgoCD for Kubernetes deployments.',
      tags: ['GitOps', 'ArgoCD', 'Kubernetes', 'CI/CD'],
      image: 'https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg',
      github: 'https://github.com',
      category: 'cicd'
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const filterOptions = [
    { value: 'all', label: 'All Projects' },
    { value: 'infrastructure', label: 'Infrastructure' },
    { value: 'cicd', label: 'CI/CD' },
    { value: 'automation', label: 'Automation' },
    { value: 'monitoring', label: 'Monitoring' },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 bg-teal-600 dark:bg-teal-400 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my DevOps projects focusing on infrastructure automation, 
            CI/CD pipelines, and monitoring solutions. Currently building awesome 
            things – updates coming shortly.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filterOptions.map(option => (
            <button
              key={option.value}
              onClick={() => setFilter(option.value as any)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                filter === option.value
                  ? 'bg-teal-600 dark:bg-teal-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full text-gray-900 hover:text-teal-600 transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-white rounded-full text-gray-900 hover:text-teal-600 transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <Folder className="text-teal-600 dark:text-teal-400" size={24} />
                  <GitBranch className="text-gray-400" size={18} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;