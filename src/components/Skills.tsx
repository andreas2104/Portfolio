import React from 'react';
import { Code2, Database, Globe, Smartphone } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend",
      icon: <Code2 className="text-blue-600" size={32} />,
      skills: [
        { name: "Symfony", level: 75, color: "bg-blue-500" },
        { name: "Laravel", level: 70, color: "bg-red-500" },
        { name: "PHP", level: 75, color: "bg-purple-500" },
        { name: "Node.js", level: 60, color: "bg-green-500" },
        { name: "Rust", level: 10, color: "bg-orange-500" },
        { name: "Python", level: 30, color: "bg-blue-500" },
        { name: "C#", level: 30, color: "bg-green-500" },
        { name: "Java", level: 50, color: "bg-cyan-500" }

      ]
    },
    {
      title: "Frontend",
      icon: <Globe className="text-emerald-600\" size={32} />,
      skills: [
        { name: "React", level: 60, color: "bg-blue-400" },
        { name: "Next.js", level: 88, color: "bg-gray-800" },
        { name: "TypeScript", level: 85, color: "bg-blue-600" },
        { name: "Tailwind CSS", level: 50, color: "bg-cyan-500" }
      ]
    },
    {
      title: "Database",
      icon: <Database className="text-amber-600" size={32} />,
      skills: [
        { name: "MySQL", level: 90, color: "bg-orange-500" },
        { name: "PostgreSQL", level: 75, color: "bg-blue-700" },
        { name: "MongoDB", level: 70, color: "bg-green-600" },
      ]
    },
    {
      title: "Mobile & Tools",
      icon: <Smartphone className="text-purple-600\" size={32} />,
      skills: [
        { name: "React Native", level: 50, color: "bg-blue-500" },
        { name: "Docker", level: 40, color: "bg-blue-600" },
        { name: "Git", level: 75, color: "bg-orange-600" },
        { name: "AWS", level: 20, color: "bg-yellow-600" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
            Mes Compétences
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Technologies et outils que je maîtrise pour créer des solutions exceptionnelles
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="text-xl font-bold ml-3 text-gray-900">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-gray-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className={`${skill.color} h-full rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Certifications & Formation</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6">
                <h4 className="font-semibold text-blue-800 mb-2">Symfony Certified Developer</h4>
                <p className="text-blue-600 text-sm">SensioLabs - 2023</p>
              </div>
              <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-xl p-6">
                <h4 className="font-semibold text-red-800 mb-2">Laravel Expert</h4>
                <p className="text-red-600 text-sm">Laravel.com - 2022</p>
              </div>
              <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-xl p-6">
                <h4 className="font-semibold text-emerald-800 mb-2">React Professional</h4>
                <p className="text-emerald-600 text-sm">Meta - 2023</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Skills;