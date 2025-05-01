import React from 'react';
import ReactStars from 'react-rating-stars-component';

interface Skill {
  name: string;
  rating: number;
  category: 'infrastructure' | 'cicd' | 'cloud' | 'containerization' | 'monitoring' | 'automation';
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    // Version Control
    { name: 'Git', rating: 4, category: 'infrastructure' },
    
    // CI/CD
    { name: 'Jenkins', rating: 4, category: 'cicd' },
    { name: 'TeamCity', rating: 3.5, category: 'cicd' },
    { name: 'Octopus', rating: 3.5, category: 'cicd' },
    
    // Infrastructure & Configuration
    { name: 'Terraform', rating: 4, category: 'infrastructure' },
    { name: 'Ansible', rating: 4, category: 'automation' },
    { name: 'JFrog Artifactory', rating: 3.5, category: 'infrastructure' },
    
    // Containerization
    { name: 'Docker', rating: 4, category: 'containerization' },
    { name: 'Kubernetes', rating: 4, category: 'containerization' },
    
    // Databases
    { name: 'MongoDB', rating: 3.5, category: 'infrastructure' },
    { name: 'MySQL', rating: 3.5, category: 'infrastructure' },
    
    // Security
    { name: 'Trivy', rating: 3.5, category: 'automation' },
    { name: 'Wazuh', rating: 3.5, category: 'automation' },
    { name: 'Clamscan', rating: 3.5, category: 'automation' },
    
    // Monitoring
    { name: 'Prometheus', rating: 4, category: 'monitoring' },
    { name: 'Grafana', rating: 4, category: 'monitoring' },
    { name: 'Solarwinds', rating: 3.5, category: 'monitoring' },
    { name: 'ELK Stack', rating: 3.5, category: 'monitoring' },
    
    // Cloud & Platforms
    { name: 'AWS', rating: 4, category: 'cloud' },
    { name: 'Linux', rating: 4, category: 'infrastructure' },
    { name: 'Windows', rating: 3.5, category: 'infrastructure' },
    
    // Scripting
    { name: 'Shell Scripting', rating: 4, category: 'automation' },
  ];

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
                    </div>
                    <ReactStars
                      count={5}
                      value={skill.rating}
                      edit={false}
                      size={24}
                      activeColor="#2dd4bf"
                      color="#cbd5e1"
                    />
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