import React from 'react';
import { ExternalLink, Github, Smartphone, Globe, ShoppingCart, Users } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Resérvation de train",
      description: "une site web qui permet de reserver un train au sein de la gare FCE fianarantsoa.",
      technologies: ["Symfony", "Vue twig", "PostgreSQL"],
      category: "Web Application",
      icon: <ShoppingCart className="text-emerald-600" size={24} />,
      image: "/reservation.png",
      github: "https://github.com/andreas2104/reservationTrainFce",
      demo: "#",
      featured: true
    },
    {
      title: "Gestion de Courrier",
      description: "Application de gestion de Courrier qui est dediée au services enfin de traiter les dossier recue  plutot backend et notifications push.",
      technologies: ["Symfony", "javascript", "PostgreSQL"],
      category: "SaaS Platform",
      icon: <Users className="text-blue-600\" size={24} />,
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600",
      github: "https://github.com/andreas2104/emailavecSymfony",
     
      featured: true
    },
    {
      title: "Gestion Emploie du Temps ENI",
      description: "Application L'application permet de créer et de consulter les emplois du temps en temps réel pour les professeurs, les étudiants et l'administration.",
      technologies: ["Next js", "Laravel API", "mysql"],
      category: "Application web",
      icon: <Smartphone className="text-purple-600" size={24} />,
      image: "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=600",
      github: "#",
      demo: "#",
      featured: false
    },
    {
      title: "Gestion de contenue en laravel ",
      description: "Système de gestion de contenu mise a jours du site  site entreprise.",
      technologies: ["Laravel", "vue blade", "MySQL"],
      category: "CMS",
      icon: <Globe className="text-amber-600\" size={24} />,
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
      github: "#",
      demo: "#",
      featured: false
    },
    {
      title: "Creations de session Utilateurs",
      description: "Creation de session utilisateur connecté sur un reseau partager via API mikrotik un projet entreprise.",
      technologies: ["Next.js", "PostgreSQL", "API mikrotik"],
      category: "User Manager , client , administateur",
      icon: <Globe className="text-red-600" size={24} />,
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600",
      github: "#",
      demo: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
            Mes Projets
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez quelques-uns de mes projets les plus récents et innovants
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Projets Phares</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-105">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 flex items-center">
                    {project.icon}
                    <span className="text-white font-medium ml-2">{project.category}</span>
                  </div>
                </div>
                
                <div className="p-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h4>
                  <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="flex items-center text-gray-600 hover:text-blue-600 transition-colors font-medium"
                    >
                      <Github size={18} className="mr-2" />
                      Code Source
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center text-gray-600 hover:text-emerald-600 transition-colors font-medium"
                    >
                      <ExternalLink size={18} className="mr-2" />
                      Démo Live
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Autres Réalisations</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div key={index} className="group bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-4">
                  {project.icon}
                  <div className="ml-3">
                    <h4 className="font-bold text-gray-900">{project.title}</h4>
                    <span className="text-sm text-gray-500">{project.category}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span key={techIndex} className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-gray-500 text-xs">+{project.technologies.length - 3}</span>
                  )}
                </div>
                
                <div className="flex space-x-3">
                  <a href={project.github} className="text-gray-400 hover:text-gray-600 transition-colors">
                    <Github size={16} />
                  </a>
                  <a href={project.demo} className="text-gray-400 hover:text-blue-600 transition-colors">
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;