
import React from 'react';

const Contact = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wide text-gray-500 mb-4">Pricing</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Stop Putting off your foundational strategy. Request your free audit today.
          </h2>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              The Developer Positioning Sprint with Roberto Pesce
            </h3>
            
            <div className="text-5xl font-bold text-blue-600 mb-8">
              EUR 4,500
            </div>
            
            <div className="text-left mb-8">
              <h4 className="font-bold text-gray-900 mb-4">What you get:</h4>
              <ul className="space-y-2 text-gray-700">
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
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors mb-4"
            >
              Start With a FREE Audit
            </a>
            
            <p className="text-gray-600 text-sm">
              Absolutely NO strings attached
            </p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <img 
            src="https://images.clickfunnels.com/cdn-cgi/image/width=1000px,fit=scale-down,f=auto,q=80/https://statics.myclickfunnels.com/workspace/eVlnPL/image/10018119/file/ac892352d72bc63df8ed65bcf231e34f.png"
            alt="Pesce Lab Logo" 
            className="mx-auto mb-12 h-16"
          />
          
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Content Library</h4>
              <div className="space-y-2">
                <a href="https://www.pescelab.com/resources/1-page-gtm-canvas" className="block text-blue-600 hover:underline">
                  1-Page GTM Canvas
                </a>
                <a href="https://www.pescelab.com/resources/the-developer-marketing-guide" className="block text-blue-600 hover:underline">
                  Developer Marketing Guide
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Company</h4>
              <div className="space-y-2">
                <a href="https://www.pescelab.com/contact" className="block text-blue-600 hover:underline">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
