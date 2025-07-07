
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wide text-gray-500 mb-4">The Problem</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 leading-tight">
            <span className="font-black">You Want To Grow But Developers are a tough target audience</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Developers are so different and you don't know <strong>which developer persona to focus</strong> on.
            </p>
            <p>
              Your product has too many features and <strong>it's hard to say what really differentiates you</strong>.
            </p>
            <p>
              Demand generation takes more effort and <strong>moves more slowly than you would wish</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
