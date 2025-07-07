
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Fix Your Positioning, Engage The Right Developer Audience, And Grow.
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              We help companies targeting software developers position their products, 
              communicate the right message, and prioritize the right channels to generate demand
            </p>
            <a 
              href="#pricing" 
              className="inline-block bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              Get a FREE Audit →
            </a>
          </div>
          
          <div className="flex justify-center">
            <img 
              src="https://images.clickfunnels.com/cdn-cgi/image/width=1000px,fit=scale-down,f=auto,q=80/https://statics.myclickfunnels.com/workspace/eVlnPL/image/12626916/file/bc36d093144612cadeb3baf0792dd2d1.png"
              alt="Consulting Banner" 
              className="w-4/5 rounded-lg"
            />
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-8 text-lg">Trusted by professionals at these companies:</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            <img src="https://images.clickfunnels.com/cdn-cgi/image/width=1000px,fit=scale-down,f=auto,q=80/https://statics.myclickfunnels.com/workspace/eVlnPL/image/2975430/file/c215ac08fb7cc1bd586c64a0843007ac.png" alt="Company Logo" className="h-24" />
            <img src="https://images.clickfunnels.com/cdn-cgi/image/width=1000px,fit=scale-down,f=auto,q=80/https://statics.myclickfunnels.com/workspace/eVlnPL/image/12192047/file/c059550fe57128cd100cb285b61c0f3e.png" alt="Anaconda Logo" className="h-24" />
            <img src="https://images.clickfunnels.com/cdn-cgi/image/width=1000px,fit=scale-down,f=auto,q=80/https://statics.myclickfunnels.com/workspace/eVlnPL/image/12192046/file/5073eb4ffdbbac99dcc3614ac4271db1.png" alt="Company Logo" className="h-24" />
            <img src="https://images.clickfunnels.com/cdn-cgi/image/width=1000px,fit=scale-down,f=auto,q=80/https://statics.myclickfunnels.com/workspace/eVlnPL/image/12192045/file/985e60a5b31017ec0a49f447970ba311.png" alt="Company Logo" className="h-24" />
            <img src="https://images.clickfunnels.com/cdn-cgi/image/width=1000px,fit=scale-down,f=auto,q=80/https://statics.myclickfunnels.com/workspace/eVlnPL/image/2975427/file/a40446025cbdd160f43786ef45dd5c4c.png" alt="GitLab Logo" className="h-24" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
