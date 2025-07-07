
import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Alessandro Pesce",
      role: "Principal Investigator",
      bio: "PhD in Computational Biology. Research focus on genomics and machine learning.",
      email: "apesce@university.edu",
      linkedin: "#"
    },
    {
      name: "Dr. Sarah Johnson",
      role: "Postdoctoral Researcher",
      bio: "PhD in Bioinformatics. Expertise in single-cell analysis and statistical methods.",
      email: "sjohnson@university.edu",
      linkedin: "#"
    },
    {
      name: "Mike Chen",
      role: "PhD Student",
      bio: "Graduate student working on protein structure prediction using deep learning.",
      email: "mchen@university.edu",
      linkedin: "#"
    },
    {
      name: "Lisa Rodriguez",
      role: "Research Assistant",
      bio: "Undergraduate researcher focusing on data analysis and visualization tools.",
      email: "lrodriguez@university.edu",
      linkedin: "#"
    }
  ];

  return (
    <section id="team" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h2>
          <p className="text-xl text-gray-600">
            Meet the researchers driving innovation in computational biology
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow duration-200"
            >
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-blue-600 font-medium mb-3">{member.role}</p>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
              <div className="flex justify-center space-x-3">
                <a
                  href={`mailto:${member.email}`}
                  className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
                >
                  <Mail size={18} />
                </a>
                <a
                  href={member.linkedin}
                  className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
