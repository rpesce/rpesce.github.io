
import React from 'react';

const Publications = () => {
  const publications = [
    {
      title: "Computational methods for single-cell multi-omics integration",
      authors: "Pesce A, Smith J, Johnson M, Brown K",
      journal: "Nature Methods",
      year: "2023",
      pmid: "37845123"
    },
    {
      title: "Spatial transcriptomics reveals tissue-specific gene expression patterns",
      authors: "Johnson M, Pesce A, Davis L, Wilson R",
      journal: "Cell",
      year: "2023",
      pmid: "37123456"
    },
    {
      title: "Machine learning approaches for genomic variant interpretation",
      authors: "Brown K, Pesce A, Miller S",
      journal: "Nature Genetics",
      year: "2022",
      pmid: "36789012"
    },
    {
      title: "A comprehensive framework for multi-modal single-cell analysis",
      authors: "Pesce A, Wilson R, Thompson E",
      journal: "Genome Biology",
      year: "2022",
      pmid: "35456789"
    },
    {
      title: "Statistical methods for high-dimensional biological data integration",
      authors: "Davis L, Pesce A, Anderson P",
      journal: "Bioinformatics",
      year: "2021",
      pmid: "34567890"
    }
  ];

  return (
    <section id="publications" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-light text-gray-900 mb-12 text-center">Publications</h2>
        <div className="space-y-6">
          {publications.map((pub, index) => (
            <div key={index} className="border-l-2 border-blue-200 pl-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">{pub.title}</h3>
              <p className="text-gray-700 mb-1">{pub.authors}</p>
              <p className="text-gray-600">
                <em>{pub.journal}</em> ({pub.year})
                {pub.pmid && (
                  <span className="ml-2">
                    <a 
                      href={`https://pubmed.ncbi.nlm.nih.gov/${pub.pmid}/`}
                      className="text-blue-600 hover:text-blue-800 underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      PubMed
                    </a>
                  </span>
                )}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://scholar.google.com/citations?user=example"
            className="text-blue-600 hover:text-blue-800 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View all publications on Google Scholar →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Publications;
