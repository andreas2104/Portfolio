import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              RATSARAFANIRY Andrianiaina Andréas
            </h3>
            <p className="text-gray-400 mt-2">Développeur Full-Stack Passionné</p>
          </div>
          
          <div className="flex items-center justify-center space-x-2 text-gray-400 mb-6">
            <span>Fait avec</span>
            <Heart className="text-red-500" size={16} fill="currentColor" />
            <span>et</span>
            <Code className="text-blue-400" size={16} />
            <span>par Andreas</span>
          </div>
          
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} RATSARAFANIRY Andrianiaina Andreas. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;