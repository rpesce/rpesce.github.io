
import React from 'react';

const Publications = () => {
  return (
    <section id="testimonials" className="py-20 bg-orange-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white mb-16 text-center">
          What People Say About Me
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg">
            <div className="text-center mb-4">
              <img 
                src="https://images.clickfunnels.com/cdn-cgi/image/width=1000px,fit=scale-down,f=auto,q=80/https://statics.myclickfunnels.com/image/1008256/file/defaa32137c7535b38925778aba07bc2.png"
                alt="Profile" 
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">
              "...one of the most resourceful individuals I've ever met..."
            </h3>
            <p className="text-gray-700 mb-4 text-sm">
              "Roberto is one of the most driven and resourceful individuals I've ever met. He's got a great mind. If you have the chance to work with him you'll have a powerful team member."
            </p>
            <div className="text-center">
              <p className="font-semibold text-gray-900">Kris Schlesser</p>
              <p className="text-gray-600 text-sm">Founder @ LuckyBolt</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg">
            <div className="text-center mb-4">
              <img 
                src="https://images.clickfunnels.com/cdn-cgi/image/width=1000px,fit=scale-down,f=auto,q=80/https://statics.myclickfunnels.com/image/1008256/file/defaa32137c7535b38925778aba07bc2.png"
                alt="Profile" 
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">
              "...a very deliberate and mindful person."
            </h3>
            <p className="text-gray-700 mb-4 text-sm">
              "Roberto easily handled everything from publishing a new product version, communicating with stakeholders and partners, to writing down and executing the marketing strategy."
            </p>
            <div className="text-center">
              <p className="font-semibold text-gray-900">Pavel Karateev</p>
              <p className="text-gray-600 text-sm">Technical Lead @ JetBrains</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg">
            <div className="text-center mb-4">
              <img 
                src="https://images.clickfunnels.com/cdn-cgi/image/width=1000px,fit=scale-down,f=auto,q=80/https://statics.myclickfunnels.com/image/1008256/file/defaa32137c7535b38925778aba07bc2.png"
                alt="Profile" 
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">
              "...led product marketing with focus and clear goals..."
            </h3>
            <p className="text-gray-700 mb-4 text-sm">
              "Roberto led product with focus and clear goals, allowing the team to deliver valuable features promptly. Roberto is respectful and a great communicator."
            </p>
            <div className="text-center">
              <p className="font-semibold text-gray-900">Juozapas Zabuskas</p>
              <p className="text-gray-600 text-sm">CTO @ Convious</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
