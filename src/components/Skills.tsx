import React from 'react';

type SkillCategory = 'Backend Development' | 'Frontend Development' | 'Database & Cloud' | 'Others';


const skills: Record<SkillCategory, string[]> = {
  'Backend Development': [
    'Java(8+,11,17)',
    'Spring Framework',
    'REST API Design',
    'Microservices',
    'System Design',
    'Data Structures and Algorithms'
  ],
  'Frontend Development': [
    'React',
    'Angular',
    'JavaScript/TypeScript',
    'HTML/CSS',
    'Redux',
    'Bootstrap'
  ],
  'Database & Cloud': [
    'MongoDB',
    'MySQL',
    'AWS (EC2, EKS, ECS, S3, RDS, DynamoDB, Lambda, API Gateway, CloudWatch, SNS, Elastic Beanstalk, CloudFormation)',
    'Azure (Key Vault, Blob Storage, Active Directory, Virtual Machine)',
    'Docker',
    'Kubernetes'
  ],
  'Others': [
    'Git/GitHub',
    'CI/CD',
    'Agile/Scrum',
    'Testing (JUnit, TDD)',
    'Jira',
    'Jenkins'
  ]
};

const groupedSkills: SkillCategory[][] = [
  ['Backend Development', 'Frontend Development'],
  ['Database & Cloud', 'Others']
];


const Skills: React.FC = () => {
  return (
    <section id="skills" className="section bg-white dark:bg-slate-900">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-slate-900 dark:text-white">Skills</h2>
        <div className="space-y-10">
          {groupedSkills.map((group, groupIndex) => (
            <div key={groupIndex} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {group.map((category, categoryIndex) => (
                <div
                  key={category}
                  className="animate-slide-up"
                  style={{ animationDelay: `${groupIndex * 200 + categoryIndex * 100}ms` }}
                >
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