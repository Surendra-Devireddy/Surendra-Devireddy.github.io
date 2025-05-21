import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Systems Engineer',
      company: 'Infosys Limited',
      duration: 'Sep 2021 - Dec 2023',
      location: 'Chennai, India',
      description: [
        'Lead development of enterprise web applications using React, Spring Boot Microservices and MongoDB',
        'Implemented microservices architecture resulting in 30% improved system performance',
        'Mentored junior developers and conducted code reviews to ensure best practices',
        'Collaborated with product managers to define feature requirements and project timelines'
      ]
    },
    {
      title: 'Programmer Analyst Intern',
      company: 'Cognizant Technology Solutions',
      duration: 'Feb 2021 - Aug 2021',
      location: 'Chennai, India',
      description: [
        'Developed responsive web applications using Angular and Express.js',
        'Created RESTful APIs and implemented authentication systems',
        'Worked with SQL and NoSQL databases for data storage and retrieval',
        'Participated in agile development process with bi-weekly sprints'
      ]
    },
  ];

  return (
    <section id="experience" className="section bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto">
        <h2 className="section-title">Work Experience</h2>
        <div className="space-y-8 relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 h-full w-px bg-blue-200 dark:bg-blue-900 hidden md:block transform -translate-x-1/2"></div>
          
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`relative md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-12 md:ml-auto' : 'md:pl-12'
              } animate-slide-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Timeline dot */}
              <div className="absolute top-6 w-5 h-5 rounded-full bg-blue-500 dark:bg-blue-400 hidden md:block" style={{
                [index % 2 === 0 ? 'left' : 'right']: '-2.5px'
              }}></div>
              
              <div className="experience-card">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white">{exp.title}</h3>
                <h4 className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-2">{exp.company}</h4>
                <div className="flex flex-col sm:flex-row sm:items-center text-sm text-slate-500 dark:text-slate-400 mb-4">
                  <div className="flex items-center mb-2 sm:mb-0 sm:mr-6">
                    <Calendar size={16} className="mr-1" />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-1" />
                    <span>{exp.location}</span>
                  </div>
                </div>
                <ul className="list-disc pl-5 text-slate-700 dark:text-slate-300 space-y-1">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;