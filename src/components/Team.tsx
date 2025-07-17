
import React from 'react';

const Team = () => {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
          Who Is Roberto Pesce?
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="prose prose-lg text-gray-700 leading-relaxed space-y-6">
              <p>
                Hi, I'm Roberto! Over the last 10 years, I've helped businesses bring products to technical audiences, both locally and globally. From large organizations to niche startups, <strong>I've guided entrepreneurs in crafting and executing developer-centric go-to-market (GTM) strategies</strong> utilizing proven frameworks that drive differentiation, reach, adoption, and revenue growth.
              </p>
              
              <p>Here are two results I'm proud of:</p>
              
              <ul className="space-y-2">
                <li>• Helped scale a startup <strong>from $5M to $100M ARR</strong>.</li>
                <li>• Led a mature company into a new <strong>multi-million-dollar market segment</strong>.</li>
              </ul>
              
              <p>
                Count on me to help you fix your positioning so you can engage the right developer audience and grow.
              </p>
            </div>
            
            <div className="mt-6">
              <a 
                href="https://www.linkedin.com/in/robertopescejr/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="flex justify-center">
            <img 
              src="https://images.clickfunnels.com/cdn-cgi/image/width=1000px,fit=scale-down,f=auto,q=80/https://statics.myclickfunnels.com/workspace/eVlnPL/image/10285008/file/7aca74920dada3f1a543ff24b1495cb3.png"
              alt="Roberto Pesce" 
              className="w-4/5 rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
