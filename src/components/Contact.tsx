import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-emerald-800 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Travaillons Ensemble
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Vous avez un projet en tête ? N'hésitez pas à me contacter pour en discuter
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div>
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">Informations de Contact</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-white/10 backdrop-blur-sm rounded-full p-3 mr-4">
                    <Mail className="text-blue-300" size={20} />
                  </div>
                  <div>
                    <p className="text-blue-100">Email</p>
                    <p className="font-semibold">andrianiainaandreas99@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-white/10 backdrop-blur-sm rounded-full p-3 mr-4">
                    <Phone className="text-emerald-300" size={20} />
                  </div>
                  <div>
                    <p className="text-blue-100">Téléphone</p>
                    <p className="font-semibold">+261 34 62 555 48</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-white/10 backdrop-blur-sm rounded-full p-3 mr-4">
                    <MapPin className="text-amber-300" size={20} />
                  </div>
                  <div>
                    <p className="text-blue-100">Localisation</p>
                    <p className="font-semibold">Madagascar, Fianarantsoa</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Suivez-moi</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/andreas2104"
                  className="bg-white/10 backdrop-blur-sm rounded-full p-4 hover:bg-white/20 transition-all duration-300 hover:scale-110"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://mg.linkedin.com/in/andrea-s-andrianiaina-05705a360"
                  className="bg-white/10 backdrop-blur-sm rounded-full p-4 hover:bg-white/20 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin size={24} />
                </a>
            
              </div>
            </div>

            <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h4 className="font-bold mb-3">Disponibilité</h4>
              <p className="text-blue-100 mb-2">Actuellement disponible pour de nouveaux projets</p>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                <span className="text-green-300 text-sm">En ligne</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Envoyez-moi un message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-blue-100 mb-2 font-medium">Nom</label>
                  <input
                    type="text"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-blue-200 focus:outline-none focus:border-blue-300 focus:bg-white/20 transition-all"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-blue-100 mb-2 font-medium">Email</label>
                  <input
                    type="email"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-blue-200 focus:outline-none focus:border-blue-300 focus:bg-white/20 transition-all"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-blue-100 mb-2 font-medium">Sujet</label>
                <input
                  type="text"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-blue-200 focus:outline-none focus:border-blue-300 focus:bg-white/20 transition-all"
                  placeholder="Sujet de votre message"
                />
              </div>
              
              <div>
                <label className="block text-blue-100 mb-2 font-medium">Message</label>
                <textarea
                  rows={5}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-blue-200 focus:outline-none focus:border-blue-300 focus:bg-white/20 transition-all resize-none"
                  placeholder="Décrivez votre projet ou votre demande..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-emerald-500 text-white font-semibold py-4 px-6 rounded-xl hover:from-blue-600 hover:to-emerald-600 transition-all duration-300 flex items-center justify-center group"
              >
                <Send className="mr-2 group-hover:translate-x-1 transition-transform" size={20} />
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;