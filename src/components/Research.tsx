
import React from 'react';

const Research = () => {
  return (
    <section id="research" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 leading-tight">
            Work With Me To Solve Your Developer Positioning Challenge
          </h2>
        </div>

        <div className="text-center mb-16">
          <div className="inline-block">
            <img 
              src="https://images.clickfunnels.com/cdn-cgi/image/width=1000px,fit=scale-down,f=auto,q=80/https://statics.myclickfunnels.com/workspace/eVlnPL/image/3728151/file/b6a14cae55420ac02ce22366d2f10cb9.png"
              alt="Roberto Pesce" 
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-2xl font-bold text-gray-900">Roberto Pesce</h3>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 text-center">
            <div className="mb-6">
              <span className="text-5xl font-bold text-orange-500 mb-4 block">01</span>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Positioning Audit</h3>
            </div>
            
            <ul className="space-y-3 text-gray-700 text-left">
              <li>• Audit your website & landing pages</li>
              <li>• Review your top competitors</li>
              <li>• Listen to 2+ sales calls from your team</li>
              <li>• Review your product demo</li>
              <li>• Review customer feedback</li>
              <li>• Analyze your intake questionnaire</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 text-center">
            <div className="mb-6">
              <span className="text-5xl font-bold text-yellow-500 mb-4 block">02</span>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">STP Workshops</h3>
            </div>
            
            <ul className="space-y-3 text-gray-700 text-left">
              <li>• Discuss the audit results</li>
              <li>• Identify your core segment</li>
              <li>• Articulate your value proposition</li>
              <li>• Brainstorm positioning angles</li>
              <li>• Identify your core differentiators</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 text-center">
            <div className="mb-6">
              <span className="text-5xl font-bold text-blue-500 mb-4 block">03</span>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Deliverables</h3>
            </div>
            
            <ul className="space-y-3 text-gray-700 text-left">
              <li>• Positioning strategy document</li>
              <li>• Messaging framework</li>
              <li>• Production-ready homepage copy</li>
              <li>• Sales battle cards</li>
              <li>• Recommended acquisition channels</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <a 
            href="#pricing" 
            className="inline-block bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors"
          >
            Get a FREE Audit →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Research;
