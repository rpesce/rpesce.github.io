
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
