
import React from 'react';

const Research = () => {
  return (
    <section id="research" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-light text-gray-900 mb-12 text-center">Research</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-medium text-gray-900 mb-4">Single-Cell Genomics</h3>
            <p className="text-gray-700 leading-relaxed">
              We develop computational methods for analyzing single-cell RNA sequencing data, 
              including novel approaches for cell type identification, trajectory inference, 
              and integration of multi-modal single-cell datasets.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-medium text-gray-900 mb-4">Spatial Transcriptomics</h3>
            <p className="text-gray-700 leading-relaxed">
              Our lab works on computational tools for spatial transcriptomics analysis, 
              focusing on methods that can capture tissue architecture and cell-cell 
              communication patterns in complex biological systems.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-medium text-gray-900 mb-4">Machine Learning for Biology</h3>
            <p className="text-gray-700 leading-relaxed">
              We apply and develop machine learning techniques specifically tailored for 
              biological data, including deep learning approaches for genomic sequence 
              analysis and graph neural networks for biological network analysis.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-medium text-gray-900 mb-4">Software Development</h3>
            <p className="text-gray-700 leading-relaxed">
              We create open-source software tools and packages that make our methods 
              accessible to the broader scientific community, with a focus on user-friendly 
              interfaces and robust implementation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
