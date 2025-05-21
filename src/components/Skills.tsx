import React from 'react';

const Skills: React.FC = () => {
  const skills = {
    'Backend Development': [
      'Java/Spring Boot',
      'REST API Design',
      'Apache Kafka',
      'System Design',
      'Data Structures and Algorithms'
    ],
    'Frontend Development': [
      'React',
      'Angular',
      'JavaScript/TypeScript',
      'HTML/CSS'
    ],
    'Database & Cloud': [
      'MongoDB',
      'MySQL',
      'AWS',
      'Docker',
      'Kubernetes'
    ],
    'Others': [
      'Git/GitHub',
      'CI/CD',
      'Agile/Scrum',
      'Testing (JUnit, TDD)'
    ]
  };

  // Rearranged the skills into two grouped rows
  const groupedSkills = [
    ['Backend Development', 'Frontend Development'],
    ['Database & Cloud', 'Others']
  ];

  return (
    <section id="skills" className="section bg-white dark:bg-slate-900">
      <div className="container mx-auto">
        <h2 className="section-title">Skills</h2>
        <div className="space-y-10">
          {groupedSkills.map((group, groupIndex) => (
            <div key={groupIndex} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {group.map((category, categoryIndex) => (
                <div key={category} className="animate-slide-up" style={{ animationDelay: `${groupIndex * 200 + categoryIndex * 100}ms` }}>
                  <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-white">{category}</h3>
                  <ul className="list-disc list-inside space-y-2 text-slate-800 dark:text-white">
                    {skills[category].map((skill, skillIndex) => (
                      <li key={skillIndex}>{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;