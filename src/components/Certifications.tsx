import React from 'react';
import { Award } from 'lucide-react';

interface Certification {
  title: string;
  file: string;
  icon: string;
}

const Certifications: React.FC = () => {
  const certifications: Certification[] = [
    {
      title: 'Infosys- Red Hat Certified System Administrator',
      file: '/certs/RHEL Admin.pdf',
      icon: '/certs/rhel-icon.png'
    },
    {
      title: 'Infosys- Recognitions of Excellence',
      file: '/certs/ratings-recognitions.pdf',
      icon: '/certs/Professional-Honors.png'
    },    
    {
      title: 'Infosys -Certified Kubernetes Administrator',
      file: '/certs/Kubernetes.pdf',
      icon: '/certs/k8s-icon.png'
    }
  ];

  return (
    <section id="certifications" className="py-20 px-6 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-teal-600 dark:bg-teal-400 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional certifications and achievements in DevOps and system administration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <a
              key={index}
              href={cert.file}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center space-x-4">
                <Award className="w-12 h-12 text-teal-600 dark:text-teal-400" />
                <h3 className="text-lg font-semibold">{cert.title}</h3>
              </div>
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                Click to view certificate
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;