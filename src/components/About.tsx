import React from 'react';
import { Code, Server, Globe, Coffee } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="section bg-white dark:bg-slate-900">
      <div className="container mx-auto">
        <h2 className="section-title">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 animate-slide-up">
            <p className="text-lg mb-4 text-slate-700 dark:text-slate-300">
              I'm a passionate Full Stack Developer with expertise in building robust web applications from front-end to back-end. With 5+ years of experience, I've worked on various projects across different domains, helping businesses transform their ideas into functional, user-friendly applications.
            </p>
            <p className="text-lg mb-4 text-slate-700 dark:text-slate-300">
              I specialize in developing applicatios using Java Spring Boot and Microservice Architecture for Backend and  React, Angular for front-end development. I'm also proficient in database management, cloud services, and DevOps practices.
            </p>
            <p className="text-lg mb-8 text-slate-700 dark:text-slate-300">
              My approach to development combines technical expertise with a strong focus on user experience, ensuring that the applications I build are not just functional but also intuitive and enjoyable to use.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#experience" className="btn btn-primary">View Experience</a>
              <a href="#contact" className="btn btn-outline">Get In Touch</a>
            </div>
          </div>
          <div className="animate-slide-up delay-100">
            <div className="grid grid-cols-2 gap-4">
              <div className="skill-card flex flex-col items-center justify-center p-6">
                <Code size={36} className="mb-2 text-blue-500" />
                <h3 className="font-medium text-center">Frontend Dev</h3>
              </div>
              <div className="skill-card flex flex-col items-center justify-center p-6">
                <Server size={36} className="mb-2 text-green-500" />
                <h3 className="font-medium text-center">Backend Dev</h3>
              </div>
              <div className="skill-card flex flex-col items-center justify-center p-6">
                <Globe size={36} className="mb-2 text-purple-500" />
                <h3 className="font-medium text-center">Web Apps</h3>
              </div>
              <div className="skill-card flex flex-col items-center justify-center p-6">
                <Coffee size={36} className="mb-2 text-amber-500" />
                <h3 className="font-medium text-center">Problem Solver</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;