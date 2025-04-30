import React, { useState } from 'react';
import { Briefcase, Calendar } from 'lucide-react';

interface Job {
  id: number;
  company: string;
  title: string;
  period: string;
  description: string[];
  achievements: string[];
}

const Experience: React.FC = () => {
  const [activeJob, setActiveJob] = useState(0);
  
  const jobs: Job[] = [
    {
      id: 0,
      company: 'Infosys Ltd',
      title: 'Senior Associate Consultant',
      period: '07/2021 - Present',
      description: [
        'Experience in Version Control Systems (GIT) for managing code repositories.',
        'Utilized Jenkins with shared libraries for efficient CI/CD pipeline implementation.',
        'Automated configuration management and deployment using Ansible.',
        'Managed MongoDB and MySQL databases, backups, and clustering.',
        'Deployed containerized apps on Kubernetes with HA and load balancing.',
        'Configured HAProxy and Nginx for load balancing in Kubernetes.',
        'Designed and maintained GlusterFS with NFS integration.',
      ],
      achievements: [
        'Integrated Prometheus and Grafana for monitoring and insights.',
        'Used Apache Kafka for microservices communication and data processing.',
        'Built automated CI/CD pipelines using Jenkins, Ansible, Kubernetes.',
        'Implemented IAM using Vault, Keycloak with MySQL backend.',
        'Secured SSH with Teleport, enabled session recording and auditing.',
        'Conducted vulnerability scanning with Clamscan and Wazuh.',
        'Fostered DevOps culture, optimized workflows, reduced delivery time by 20%.',
      ],
    },
    {
      id: 1,
      company: 'DPI IND Services Pvt Ltd',
      title: 'Design Engineer Trainee',
      period: '04/2019 - 12/2020',
      description: [
        'Configured and managed AWS resources: EC2, ELB, Auto-Scaling, IAM, S3, etc.',
        'Created IAM users, roles, and policies for secure access.',
        'Deployed infrastructure using AWS CloudFormation scripts.',
        'Implemented CI/CD pipelines with TeamCity and Octopus.',
        'Developed shell scripts for automation: backups, log rotation, monitoring.',
      ],
      achievements: [
        'Hands-on with Terraform for IaC provisioning.',
        'Managed both Windows and Linux environments.',
        'Performed proactive environment monitoring.',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-teal-600 dark:bg-teal-400 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey in DevOps and infrastructure management.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Job Selection Sidebar */}
          <div className="lg:col-span-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-1">
              {jobs.map(job => (
                <button
                  key={job.id}
                  onClick={() => setActiveJob(job.id)}
                  className={`w-full text-left p-4 mb-1 rounded-md transition-all duration-300 ${
                    activeJob === job.id 
                      ? 'bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-600 dark:border-teal-400'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-700/50'
                  }`}
                >
                  <h3 className="font-semibold">{job.title}</h3>
                  <p className={`text-sm ${activeJob === job.id ? 'text-teal-600 dark:text-teal-400' : 'text-gray-600 dark:text-gray-400'}`}>
                    {job.company}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Job Details */}
          <div className="lg:col-span-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold">{jobs[activeJob].title}</h3>
                  <p className="text-teal-600 dark:text-teal-400 font-medium">{jobs[activeJob].company}</p>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <Calendar size={16} className="mr-2" />
                  <span>{jobs[activeJob].period}</span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 flex items-center">
                  <Briefcase className="mr-2 text-teal-600 dark:text-teal-400" size={18} />
                  Responsibilities
                </h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  {jobs[activeJob].description.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-teal-600 dark:bg-teal-400 rounded-full mt-2 mr-2"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-3 flex items-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="mr-2 text-teal-600 dark:text-teal-400">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  Key Achievements
                </h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  {jobs[activeJob].achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-teal-600 dark:bg-teal-400 rounded-full mt-2 mr-2"></span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;