import React from 'react';
import { User, Award, Target, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
            À Propos de Moi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionné par le développement web, je crée des solutions innovantes et performantes
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl transform rotate-6"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-2xl">
                <User className="text-blue-600 mb-4" size={32} />
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Développeur Full-Stack</h3>
                <p className="text-gray-600 leading-relaxed">
                  Fort de plusieurs années d'expérience dans le développement web, je me spécialise dans la création
                  d'applications modernes et scalables. Ma passion pour les technologies émergentes me pousse à
                  constamment améliorer mes compétences et à rester à la pointe de l'innovation.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <Award className="text-blue-600 mr-3" size={24} />
                <h4 className="text-xl font-semibold text-gray-900">Expertise Technique</h4>
              </div>
              <p className="text-gray-700">
                Maîtrise avancée de Symfony, Laravel,Node.js Express.js Next.js et React avec une approche orientée bonnes pratiques
                et architecture propre.
              </p>
            </div>

            <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <Target className="text-emerald-600 mr-3" size={24} />
                <h4 className="text-xl font-semibold text-gray-900">Objectifs</h4>
              </div>
              <p className="text-gray-700">
                Créer des solutions web performantes qui répondent aux besoins réels des utilisateurs tout en
                respectant les standards de qualité les plus élevés.
              </p>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <Heart className="text-amber-600 mr-3" size={24} />
                <h4 className="text-xl font-semibold text-gray-900">Passion</h4>
              </div>
              <p className="text-gray-700">
                L'apprentissage continu et le partage de connaissances sont au cœur de ma démarche professionnelle.
                J'aime relever de nouveaux défis techniques.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;