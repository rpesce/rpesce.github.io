
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-light text-gray-900 mb-12 text-center">About</h2>
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p className="mb-6">
            The Pesce Lab is a computational biology research group at the University of Pennsylvania. 
            We are interested in developing and applying computational methods to understand the 
            complexity of biological systems.
          </p>
          <p className="mb-6">
            Our research focuses on machine learning applications in genomics, with particular 
            emphasis on single-cell analysis, spatial transcriptomics, and multi-omics integration. 
            We develop statistical methods and software tools that enable researchers to extract 
            meaningful insights from high-dimensional biological data.
          </p>
          <p>
            We collaborate closely with experimental biologists and clinicians to ensure our 
            computational tools address real biological questions and have practical impact 
            in advancing our understanding of human health and disease.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
