
import React from 'react';

const Research = () => {
  return (
    <section id="research" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wide text-gray-500 mb-4">The Developer Positioning Sprint</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 leading-tight">
            <span className="font-black">Work with Me To Solve Your Developer Positioning Challenge</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="https://images.clickfunnels.com/cdn-cgi/image/width=1000px,fit=scale-down,f=auto,q=80/https://statics.myclickfunnels.com/workspace/eVlnPL/image/3728151/file/b6a14cae55420ac02ce22366d2f10cb9.png"
              alt="Roberto Pesce" 
              className="w-full rounded-lg"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Roberto Pesce</h3>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="flex items-center mb-6">
              <span className="text-4xl font-bold text-blue-600 mr-4">01</span>
              <h3 className="text-2xl font-bold text-gray-900">Positioning Audit</h3>
            </div>
            
            <ul className="space-y-3 text-gray-700">
              <li>• Audit your website & landing pages</li>
              <li>• Review your top competitors</li>
              <li>• Listen to 2+ sales calls from your team</li>
              <li>• Review your product demo</li>
              <li>• Review customer feedback</li>
              <li>• Analyze your intake questionnaire</li>
            </ul>
            
            <div className="mt-6 space-y-4">
              <img 
                src="https://images.clickfunnels.com/cdn-cgi/image/width=1000px,fit=scale-down,f=auto,q=80/https://statics.myclickfunnels.com/workspace/eVlnPL/image/7194683/file/6efefbfef700e62bbe933e38ee3d496f.png"
                alt="Audit Process" 
                className="w-full rounded"
              />
              <img 
                src="https://images.clickfunnels.com/cdn-cgi/image/width=1000px,fit=scale-down,f=auto,q=80/https://statics.myclickfunnels.com/workspace/eVlnPL/image/7194688/file/0cd133606923ecb572ac8df3f2277d27.png"
                alt="Audit Results" 
                className="w-full rounded"
              />
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="flex items-center mb-6">
              <span className="text-4xl font-bold text-blue-600 mr-4">02</span>
              <h3 className="text-2xl font-bold text-gray-900">STP Workshops</h3>
            </div>
            
            <ul className="space-y-3 text-gray-700">
              <li>• Discuss the audit results</li>
              <li>• Identify your core segment</li>
              <li>• Articulate your value proposition</li>
              <li>• Brainstorm positioning angles</li>
              <li>• Identify your core differentiators</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="flex items-center mb-6">
              <span className="text-4xl font-bold text-blue-600 mr-4">03</span>
              <h3 className="text-2xl font-bold text-gray-900">Deliverables</h3>
            </div>
            
            <ul className="space-y-3 text-gray-700">
              <li>• Positioning strategy document</li>
              <li>• Messaging framework</li>
              <li>• Production-ready homepage copy</li>
              <li>• Sales battle cards</li>
              <li>• Recommended acquisition channels</li>
            </ul>
            
            <div className="mt-6">
              <img 
                src="https://images.clickfunnels.com/cdn-cgi/image/width=1000px,fit=scale-down,f=auto,q=80/https://statics.myclickfunnels.com/workspace/eVlnPL/image/7194684/file/c3211834c6418538988777b45e7cc26b.png"
                alt="Deliverables" 
                className="w-full rounded"
              />
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a 
            href="#pricing" 
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get a FREE Audit →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Research;
