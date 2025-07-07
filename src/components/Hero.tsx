
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-8 tracking-tight">
          Pesce Lab
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-12 font-light leading-relaxed max-w-3xl mx-auto">
          Computational Biology • Machine Learning • Data Science
        </p>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          We develop computational methods and software tools to understand complex biological systems, 
          with a focus on genomics, transcriptomics, and systems biology.
        </p>
      </div>
    </section>
  );
};

export default Hero;
