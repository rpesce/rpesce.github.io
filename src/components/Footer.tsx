
import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Pesce Lab</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Advancing computational biology and bioinformatics research through 
              innovative algorithms and data analysis techniques.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors duration-200">About</a></li>
              <li><a href="#research" className="text-gray-300 hover:text-white transition-colors duration-200">Research</a></li>
              <li><a href="#publications" className="text-gray-300 hover:text-white transition-colors duration-200">Publications</a></li>
              <li><a href="#team" className="text-gray-300 hover:text-white transition-colors duration-200">Team</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Software</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Datasets</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Protocols</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Collaborations</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Pesce Lab. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
