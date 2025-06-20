import React from 'react';
import { CalendarClock, GraduationCap, Award } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      degree: 'Master of Science in Information Technology',
      institution: 'University of Cincinnati',
      location: 'Cincinnati, OH',
      duration: 'Jan 2024 - May 2025',
      description: 'Focused on advanced web technologies, distributed systems, and cloud computing. Graduated with distinction.',
      achievements: ['GPA: 4.0/4.0']
    },
    {
      degree: 'Bachelors of Technology in Electrical Engineering',
      institution: 'Sastra Deemed University',
      location: 'Thanjavur, India',
      duration: '2015 - 2019',
      description: 'Comprehensive study of Electronics, Electrical, Communication and Software engineering.',
      achievements: ['Graduated with First Class Honors']
    }
  ];

  const certifications = [
    'AWS Certified Developer Associate'
  ];

  return (
    <section id="education" className="section bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto">
        <h2 className="section-title">Education</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {education.map((edu, index) => (
            <div key={index} className="experience-card animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="flex items-start mb-3">
                <GraduationCap size={24} className="mr-2 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white">{edu.degree}</h3>
              </div>
              <h4 className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-1">{edu.institution}</h4>
              <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-3">
                <CalendarClock size={16} className="mr-1" />
                <span className="mr-3">{edu.duration}</span> | <span className="ml-3">{edu.location}</span>
              </div>
              <p className="text-slate-700 dark:text-slate-300 mb-4">{edu.description}</p>
              <div>
                <h5 className="font-medium mb-2 flex items-center text-slate-800 dark:text-slate-200">
                  <Award size={16} className="mr-2 text-blue-600 dark:text-blue-400" /> Achievements
                </h5>
                <ul className="list-disc pl-8 text-slate-700 dark:text-slate-300">
                  {edu.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 animate-slide-up" style={{ animationDelay: '300ms' }}>
          <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-white">Certifications</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="skill-card p-4 flex items-center" 
                style={{ animationDelay: `${300 + (index * 50)}ms` }}
              >
                <Award size={20} className="mr-3 text-blue-600 dark:text-blue-400" />
                <span>{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;