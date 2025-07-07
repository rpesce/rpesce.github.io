
import React from 'react';
import { Dna, Brain, Database, BarChart3 } from 'lucide-react';

const Research = () => {
  const researchAreas = [
    {
      icon: <Dna className="w-8 h-8" />,
      title: "Genomics & Transcriptomics",
      description: "Developing algorithms for sequence analysis, variant calling, and gene expression analysis."
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Machine Learning",
      description: "Applying ML techniques to biological data for pattern recognition and predictive modeling."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Systems Biology",
      description: "Modeling complex biological networks and pathway analysis."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Statistical Methods",
      description: "Developing statistical frameworks for high-dimensional biological data analysis."
    }
  ];

  return (
    <section id="research" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Research Areas</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our interdisciplinary approach combines computational methods with biological insights
            to address fundamental questions in life sciences.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {researchAreas.map((area, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200"
            >
              <div className="text-blue-600 mb-4">{area.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{area.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
