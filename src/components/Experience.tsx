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
        'Developed custom banking menus using Spring Boot and React, reducing response latency by 20% through efficient API design, database query tuning, and frontend rendering enhancements—significantly improving system responsiveness and user experience.',
        'Engineered highly resilient microservices architectures, incorporating advanced fault tolerance and self-healing patterns using circuit breakers to maximize uptime and ensure business continuity in distributed environments.',
        'Architected and developed a library of custom React Hooks to promote code reusability and maintainability, effectively streamlining component logic and enhancing developer efficiency.',
        'Integrated Load Balancers, Route 53 DNS configurations, and Amazon SNS for seamless traffic routing, service discovery, and real-time notification handling across distributed cloud-native applications.'
      ]
    },
    {
      title: 'Senior Software Developer',
      company: 'Legacy Health',
      duration: 'Oct 2021 - July 2023',
      location: 'Portland, Oregan',
      description: [
        'Worked on backend design and development of a real-time Client Monitoring Dashboard to provide real-time data related to client appointment bookings, form submissions, and session durations and diagnosis reports.',
        'Ensured robust service quality through rigorous Test-Driven Development (TDD) with JUnit and Mockito, complemented by comprehensive web service validation using SOAP UI and Postman',
        'Architected a Client Monitoring Dashboard in Angular to allow administrative and support staff of the healthcare platform to view and analyze real-time patient activity, appointment trends, and system health metrics',
        'Architected and managed robust deployment and automation strategies across Azure public and hybrid cloud environments, overseeing critical infrastructure components including Azure Virtual Machines (VMs), Blob Storage, Azure CDN, and Azure Files'
      ]
    },
    {
      title: 'Software Developer',
      company: 'Sephora',
      duration: 'Jan 2020 - Sep 2021',
      location: 'Chennai, India',
      description: [
        'Worked on migration of a legacy monolithic application to a modular Spring Boot microservices architecture, improving scalability, fault isolation, and enabling faster release cycles following Agile methodology',
        'Managed persistence across both relational (Oracle) and NoSQL (MongoDB) databases, implementing JPA for transactional consistency and using Mongo Repository for scalable document storage',
        'Developed dynamic user interfaces using React.js, implementing core components, forms, and client-side routing with React-Router to deliver a responsive and engaging user experience',
        'Implemented CI/CD pipelines using Jenkins, automating unit testing, image builds, and deployments to development and staging environments'
      ]
    },
    {
      title: 'Software Developer',
      company: 'Fusion Matricks',
      duration: 'Jul 2018 - Dec 2019',
      location: 'Bangalore, India',
      description: [
        'Participated in the full Software Development Life Cycle (SDLC) within an Agile methodology, contributing to requirements gathering, design, and business reviews',
        'Applied core Java concepts including Multi-Threading, Exception Handling, and Collection APIs to develop and enhance various application features',
        'Utilized Jenkins and Maven to manage project builds, automate compilation, handle dependencies, and streamline application deployments',
        'Conducted rigorous Unit Testing using JUnit to ensure code quality and reliability and collaborated effectively with QA teams for comprehensive system testing'
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