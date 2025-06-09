import React from 'react';
import cvPdf from '../cv/RATSARAFANIRY_ANDRIANIAINA_ANDREAS_CV.pdf'
import { ArrowDown, Code, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-emerald-50"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-200/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-emerald-200/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-200/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <Sparkles className="text-amber-500 mr-2" size={24} />
          <span className="text-amber-600 font-medium tracking-wide">Développeur Full-Stack</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-emerald-800 bg-clip-text text-transparent leading-tight">
          RATSARAFANIRY
          <br />
          <span className="text-4xl md:text-5xl">Andrianiaina Andréas</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
          Développement web moderne avec
          <span className="font-semibold text-blue-600"> Symfony</span>,
          <span className="font-semibold text-red-600"> Laravel</span>,
          <span className="font-semibold text-emerald-600"> Next.js</span> et
          <span className="font-semibold text-blue-500"> React</span>
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button className="group bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center">
            <Code className="mr-2" size={20} />
            Voir mes projets
            <ArrowDown className="ml-2 group-hover:translate-y-1 transition-transform" size={16} />
          </button>
          

          <a
          href={cvPdf}
          download="CV_Andreas_Andrianiaina.pdf"
          className="group border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
        >
          Télécharger CV
        </a>
          {/* <button className="group border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
            Télécharger CV
          </button> */}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/80 transition-all duration-300 hover:scale-105">
            <div className="text-2xl font-bold text-blue-600 mb-1">2+</div>
            <div className="text-gray-600 text-sm">Années d'expérience</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/80 transition-all duration-300 hover:scale-105">
            <div className="text-2xl font-bold text-emerald-600 mb-1">10+</div>
            <div className="text-gray-600 text-sm">Projets réalisés</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/80 transition-all duration-300 hover:scale-105">
            <div className="text-2xl font-bold text-amber-600 mb-1">4</div>
            <div className="text-gray-600 text-sm">Technologies maîtrisées</div>
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default Hero;