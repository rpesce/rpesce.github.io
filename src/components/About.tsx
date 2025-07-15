
import React from 'react';
import { Card, CardContent } from './ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 leading-tight">
            You Want To Grow But Developers Are A Tough Target Audience
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="bg-white shadow-lg border border-gray-100">
            <CardContent className="p-8 text-center">
              <p className="text-lg text-gray-700 leading-relaxed">
                Developers are so different and you don't know <strong>which developer persona to focus</strong> on.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-lg border border-gray-100">
            <CardContent className="p-8 text-center">
              <p className="text-lg text-gray-700 leading-relaxed">
                Your product has too many features and <strong>it's hard to say what really differentiates you</strong>.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-lg border border-gray-100">
            <CardContent className="p-8 text-center">
              <p className="text-lg text-gray-700 leading-relaxed">
                Demand generation takes more effort and <strong>moves more slowly than you would wish</strong>.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
