
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Our Lab</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                The Pesce Lab is a computational biology research group focused on developing 
                innovative algorithms and computational methods to understand complex biological systems.
              </p>
              <p>
                Our work spans multiple areas of bioinformatics, including genomics, proteomics, 
                and systems biology. We combine mathematical modeling, statistical analysis, and 
                machine learning approaches to tackle challenging problems in modern biology.
              </p>
              <p>
                We collaborate with experimental biologists and clinicians to ensure our 
                computational tools have real-world applications and can drive scientific discovery.
              </p>
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <div className="bg-gray-100 aspect-square rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4"></div>
                <p className="text-lg font-medium">Lab Image</p>
                <p className="text-sm">Placeholder for lab photo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
