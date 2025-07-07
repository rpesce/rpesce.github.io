
import React from 'react';

const Publications = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
          What people Say About Me
        </h2>
        
        <div className="grid md:grid-cols-1 gap-12 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="flex items-start gap-4 mb-6">
              <img 
                src="https://images.clickfunnels.com/cdn-cgi/image/width=1000px,fit=scale-down,f=auto,q=80/https://statics.myclickfunnels.com/image/1008256/file/defaa32137c7535b38925778aba07bc2.png"
                alt="Profile" 
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  "...one of the most resourceful individuals I've ever met..."
                </h3>
                <p className="text-gray-700 mb-4">
                  "Roberto is one of the most driven and resourceful individuals I've ever met. He's got a great mind. If you have the chance to work with him you'll have a powerful team member."
                </p>
                <p className="font-semibold text-gray-900">Kris Schlesser</p>
                <p className="text-gray-600">Founder @ LuckyBolt</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="flex items-start gap-4 mb-6">
              <img 
                src="https://images.clickfunnels.com/cdn-cgi/image/width=1000px,fit=scale-down,f=auto,q=80/https://statics.myclickfunnels.com/image/1008256/file/defaa32137c7535b38925778aba07bc2.png"
                alt="Profile" 
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  "...a very deliberate and mindful person."
                </h3>
                <p className="text-gray-700 mb-4">
                  "Roberto easily handled everything from publishing a new product version, communicating with stakeholders and partners, to writing down and executing the marketing strategy."
                </p>
                <p className="font-semibold text-gray-900">Pavel Karateev</p>
                <p className="text-gray-600">Technical Lead @ JetBrains</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="flex items-start gap-4 mb-6">
              <img 
                src="https://images.clickfunnels.com/cdn-cgi/image/width=1000px,fit=scale-down,f=auto,q=80/https://statics.myclickfunnels.com/image/1008256/file/defaa32137c7535b38925778aba07bc2.png"
                alt="Profile" 
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  "...led product marketing with focus and clear goals..."
                </h3>
                <p className="text-gray-700 mb-4">
                  "Roberto led product with focus and clear goals, allowing the team to deliver valuable features promptly. Roberto is respectful and a great communicator."
                </p>
                <p className="font-semibold text-gray-900">Juozapas Zabuskas</p>
                <p className="text-gray-600">CTO @ Convious</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
