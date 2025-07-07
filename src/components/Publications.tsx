
import React from 'react';
import { ExternalLink } from 'lucide-react';

const Publications = () => {
  const publications = [
    {
      title: "Novel algorithms for large-scale genomic data analysis",
      authors: "Pesce, A., Smith, B., Johnson, C.",
      journal: "Nature Biotechnology",
      year: "2023",
      link: "#"
    },
    {
      title: "Machine learning approaches to protein structure prediction",
      authors: "Johnson, C., Pesce, A., Williams, D.",
      journal: "Bioinformatics",
      year: "2023",
      link: "#"
    },
    {
      title: "Statistical methods for multi-omics data integration",
      authors: "Smith, B., Pesce, A., Brown, E.",
      journal: "Genome Biology",
      year: "2022",
      link: "#"
    },
    {
      title: "Computational tools for single-cell RNA sequencing analysis",
      authors: "Williams, D., Pesce, A., Davis, F.",
      journal: "Cell Systems",
      year: "2022",
      link: "#"
    }
  ];

  return (
    <section id="publications" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Publications</h2>
          <p className="text-xl text-gray-600">
            Selected publications from our research group
          </p>
        </div>
        
        <div className="space-y-6">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-blue-200 transition-colors duration-200"
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{pub.title}</h3>
                  <p className="text-gray-700 mb-1">{pub.authors}</p>
                  <p className="text-blue-600 font-medium">
                    {pub.journal} ({pub.year})
                  </p>
                </div>
                <a
                  href={pub.link}
                  className="ml-4 text-blue-600 hover:text-blue-800 transition-colors duration-200"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <a
            href="#"
            className="inline-block text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
          >
            View all publications →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Publications;
