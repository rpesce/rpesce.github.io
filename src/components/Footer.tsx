
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12" id="content-library">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <img 
            src="https://images.clickfunnels.com/cdn-cgi/image/width=1000px,fit=scale-down,f=auto,q=80/https://statics.myclickfunnels.com/workspace/eVlnPL/image/10018119/file/ac892352d72bc63df8ed65bcf231e34f.png"
            alt="Pesce Lab Logo" 
            className="mx-auto mb-12 h-16"
          />
          
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto text-white mb-12">
            <div>
              <h4 className="font-bold mb-4">Content Library</h4>
              <div className="space-y-2">
                <a href="https://www.pescelab.com/resources/1-page-gtm-canvas" className="block text-orange-400 hover:underline">
                  1-Page GTM Canvas
                </a>
                <a href="https://www.pescelab.com/resources/the-developer-marketing-guide" className="block text-orange-400 hover:underline">
                  Developer Marketing Guide
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <div className="space-y-2">
                <a href="https://www.pescelab.com/contact" className="block text-orange-400 hover:underline">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center text-gray-600 text-sm space-y-2 border-t border-gray-700 pt-8">
          <p>
            KvK-number: 94084955 | Btw-id: NL005062915B73
          </p>
          <p>
            © 2025 Pesce Lab - All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
