
import React from 'react';

const Contact = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-8">
            Stop Putting Off Your Foundational Strategy. Request Your Free Audit Today.
          </h2>
        </div>
        
        <div className="max-w-lg mx-auto">
          <div className="bg-white p-8 rounded-lg text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              The Developer Positioning Sprint with Roberto Pesce
            </h3>
            
            <div className="text-4xl font-bold text-gray-900 mb-6">
              EUR 4,500
            </div>
            
            <div className="text-left mb-8">
              <h4 className="font-bold text-gray-900 mb-4">What you get:</h4>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Positioning Audit</li>
                <li>• 3 Workshop Sessions (Online)</li>
                <li>• Primary Positioning Strategy</li>
                <li>• Homepage Copy (ready to use)</li>
                <li>• Recommended developer-first channels for demand generation</li>
                <li>• Dedicated Slack channel</li>
                <li>• 6 Weeks Of Engagement</li>
              </ul>
            </div>
            
            <a 
              href="https://www.pescelab.com/schedule/get-started" 
              className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors mb-4 w-full"
            >
              Start With a FREE Audit
            </a>
            
            <p className="text-gray-600 text-sm">
              Absolutely NO strings attached
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
