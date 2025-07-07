
import React from 'react';

const Team = () => {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-light text-gray-900 mb-12 text-center">Team</h2>
        
        <div className="mb-12">
          <h3 className="text-xl font-medium text-gray-900 mb-6">Principal Investigator</h3>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="text-lg font-medium text-gray-900 mb-2">Dr. Alessandro Pesce</h4>
            <p className="text-gray-700 mb-3">Assistant Professor</p>
            <p className="text-gray-600 leading-relaxed">
              Dr. Pesce received his PhD in Computational Biology from MIT and completed 
              postdoctoral training at Stanford University. His research focuses on developing 
              machine learning methods for genomics and single-cell analysis.
            </p>
          </div>
        </div>
        
        <div className="mb-12">
          <h3 className="text-xl font-medium text-gray-900 mb-6">Postdoctoral Researchers</h3>
          <div className="space-y-4">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-lg font-medium text-gray-900 mb-2">Dr. Maria Rodriguez</h4>
              <p className="text-gray-600">
                Spatial transcriptomics and computational method development
              </p>
            </div>
          </div>
        </div>
        
        <div className="mb-12">
          <h3 className="text-xl font-medium text-gray-900 mb-6">Graduate Students</h3>
          <div className="space-y-4">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-lg font-medium text-gray-900 mb-2">James Chen</h4>
              <p className="text-gray-600">
                PhD student working on machine learning for genomic variant interpretation
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-lg font-medium text-gray-900 mb-2">Sarah Johnson</h4>
              <p className="text-gray-600">
                PhD student developing methods for single-cell multi-omics integration
              </p>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-medium text-gray-900 mb-6">Undergraduate Researchers</h3>
          <div className="space-y-4">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-lg font-medium text-gray-900 mb-2">Alex Kim</h4>
              <p className="text-gray-600">
                Undergraduate researcher working on software development and data analysis
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
