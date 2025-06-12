import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Senior Software Developer',
      company: 'BMO Harris Bank',
      duration: 'Aug 2023 - Till Date',
      location: 'Chicago, IL',
      description: [
        'Led a critical performance optimization initiative for trading system, order execution reducing latency by 20% through the strategic adoption of microservices architecture, significantly enhancing system scalability and resilience.',
        'Engineered highly resilient microservices architectures, incorporating advanced fault tolerance and self-healing patterns using circuit breakers to maximize uptime and ensure business continuity in distributed environments.',
        'Architected and developed a library of custom React Hooks to promote code reusability and maintainability, effectively streamlining component logic and enhancing developer efficiency.',
        'Architected and implemented robust CI/CD pipelines utilizing JIRA and Jenkins to fully automate the seamless deployment of microservices and AWS Lambda functions across diverse development and production environments.'
      ]
    },
    {
      title: 'Senior Software Developer',
      company: 'Legacy Health',
      duration: 'Oct 2021 - July 2023',
      location: 'Portland, Oregan',
      description: [
        'Lead development of enterprise web applications using React, Spring Boot Microservices and MongoDB',
        'Implemented microservices architecture resulting in 30% improved system performance',
        'Mentored junior developers and conducted code reviews to ensure best practices',
        'Collaborated with product managers to define feature requirements and project timelines'
      ]
    },
    {
      title: 'Software Developer',
      company: 'Sephora',
      duration: 'Jan 2020 - Sep 2021',
      location: 'Chennai, India',
      description: [
        'Developed dynamic user interfaces using React.js, implementing core components, forms, and routing (React-Router) to render interactive content.',
        'Developed core RESTful services using Spring Boot, facilitating efficient JSON data consumption and production for client-side applications.',
        'Applied modern Java 8 features (Lambdas, Streams, functional interfaces) to improve code efficiency and readability.',
        'Managed Oracle databases, including creating tables, triggers, and views, and developing PL/SQL Stored Procedures and complex SQL queries for data manipulation.'
      ]
    },
    {
      title: 'Software Developer',
      company: 'Fusion Matricks',
      duration: 'Jul 2018 - Dec 2019',
      location: 'Bangalore, India',
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