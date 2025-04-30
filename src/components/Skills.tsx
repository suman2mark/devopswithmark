import React from 'react';

interface Skill {
  name: string;
  percentage: number;
  category: 'infrastructure' | 'cicd' | 'cloud' | 'containerization' | 'monitoring' | 'automation';
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    // Version Control
    { name: 'Git', percentage: 90, category: 'infrastructure' },
    
    // CI/CD
    { name: 'Jenkins', percentage: 90, category: 'cicd' },
    { name: 'TeamCity', percentage: 85, category: 'cicd' },
    { name: 'Octopus', percentage: 85, category: 'cicd' },
    
    // Infrastructure & Configuration
    { name: 'Terraform', percentage: 85, category: 'infrastructure' },
    { name: 'Ansible', percentage: 85, category: 'automation' },
    { name: 'JFrog Artifactory', percentage: 80, category: 'infrastructure' },
    
    // Containerization
    { name: 'Docker', percentage: 90, category: 'containerization' },
    { name: 'Kubernetes', percentage: 85, category: 'containerization' },
    
    // Databases
    { name: 'MongoDB', percentage: 85, category: 'infrastructure' },
    { name: 'MySQL', percentage: 85, category: 'infrastructure' },
    
    // Security
    { name: 'Trivy', percentage: 80, category: 'automation' },
    { name: 'Wazuh', percentage: 80, category: 'automation' },
    { name: 'Clamscan', percentage: 80, category: 'automation' },
    
    // Monitoring
    { name: 'Prometheus', percentage: 85, category: 'monitoring' },
    { name: 'Grafana', percentage: 85, category: 'monitoring' },
    { name: 'Solarwinds', percentage: 80, category: 'monitoring' },
    { name: 'ELK Stack', percentage: 80, category: 'monitoring' },
    
    // Cloud & Platforms
    { name: 'AWS', percentage: 90, category: 'cloud' },
    { name: 'Linux', percentage: 90, category: 'infrastructure' },
    { name: 'Windows', percentage: 85, category: 'infrastructure' },
    
    // Scripting
    { name: 'Shell Scripting', percentage: 90, category: 'automation' },
  ];

  // Group skills by category
  const categories = {
    containerization: { title: 'Containerization', skills: skills.filter(s => s.category === 'containerization') },
    cloud: { title: 'Cloud & Platforms', skills: skills.filter(s => s.category === 'cloud') },
    cicd: { title: 'CI/CD', skills: skills.filter(s => s.category === 'cicd') },
    infrastructure: { title: 'Infrastructure & Configuration', skills: skills.filter(s => s.category === 'infrastructure') },
    automation: { title: 'Automation & Security', skills: skills.filter(s => s.category === 'automation') },
    monitoring: { title: 'Monitoring & Logging', skills: skills.filter(s => s.category === 'monitoring') },
  };

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-teal-600 dark:bg-teal-400 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My technical toolkit includes a comprehensive range of DevOps technologies and methodologies
            that I've mastered throughout my career.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {Object.values(categories).map(category => (
            <div key={category.title} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-6 text-teal-600 dark:text-teal-400">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map(skill => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-gray-600 dark:text-gray-400">{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div 
                        className="bg-teal-600 dark:bg-teal-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;