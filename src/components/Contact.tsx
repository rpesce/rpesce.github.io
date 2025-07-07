
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-light text-gray-900 mb-12 text-center">Contact</h2>
        
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Dr. Alessandro Pesce</h3>
              <p className="text-gray-700">Principal Investigator</p>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Email</h4>
              <p className="text-gray-700">
                <a href="mailto:apesce@upenn.edu" className="text-blue-600 hover:text-blue-800 underline">
                  apesce@upenn.edu
                </a>
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Office</h4>
              <p className="text-gray-700">
                Department of Genetics<br />
                Perelman School of Medicine<br />
                University of Pennsylvania<br />
                Philadelphia, PA 19104
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Lab Location</h4>
              <p className="text-gray-700">
                Clinical Research Building, Room 456<br />
                415 Curie Boulevard<br />
                Philadelphia, PA 19104
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Interested in joining the lab? We're always looking for motivated researchers.
          </p>
          <p className="text-gray-600">
            Please email Dr. Pesce with your CV and research interests.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
