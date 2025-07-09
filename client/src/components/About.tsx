import React from 'react';
import { Users, Target, Award, Globe } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { number: '10M+', label: 'Links Shortened', icon: Globe },
    { number: '50K+', label: 'Active Users', icon: Users },
    { number: '99.9%', label: 'Uptime', icon: Target },
    { number: '5★', label: 'User Rating', icon: Award }
  ];

  // const team = [
  //   {
  //     name: 'Sarah Johnson',
  //     role: 'CEO & Founder',
  //     image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
  //     description: 'Visionary leader with 10+ years in tech startups.'
  //   },
  //   {
  //     name: 'Michael Chen',
  //     role: 'CTO',
  //     image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
  //     description: 'Expert in scalable infrastructure and system design.'
  //   },
  //   {
  //     name: 'Emily Rodriguez',
  //     role: 'Head of Product',
  //     image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
  //     description: 'Product strategist focused on user experience.'
  //   },
  //   {
  //     name: 'David Kim',
  //     role: 'Lead Developer',
  //     image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
  //     description: 'Full-stack developer passionate about clean code.'
  //   }
  // ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          About
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            ShortLink
          </span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We're on a mission to make the web more accessible and user-friendly by providing 
          the most reliable and feature-rich URL shortening service.
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl shadow-blue-500/10 p-8 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Story Section */}
      <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl shadow-blue-500/10 p-8 md:p-12 mb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              Founded in 2023, ShortLink emerged from a simple observation: the web was becoming 
              increasingly complex, with URLs growing longer and more unwieldy. Our founders, a team 
              of passionate developers and designers, recognized the need for a solution that would 
              make sharing links simpler and more elegant.
            </p>
            <p>
              What started as a side project quickly evolved into a comprehensive platform trusted 
              by millions of users worldwide. Today, ShortLink processes over 10 million links monthly, 
              serving everyone from individual content creators to Fortune 500 companies.
            </p>
            <p>
              Our commitment to reliability, security, and user experience has made us the go-to 
              choice for URL shortening. We continuously innovate, adding new features like advanced 
              analytics, custom domains, and API integrations to meet our users' evolving needs.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      {/* <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl shadow-blue-500/10 p-6 text-center hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300">
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 ring-4 ring-gradient-to-r from-blue-500 to-purple-600 ring-opacity-20">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-blue-600 font-medium mb-3">{member.role}</p>
              <p className="text-gray-600 text-sm">{member.description}</p>
            </div>
          ))}
        </div>
      </div> */}

      {/* Values Section */}
      <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl shadow-blue-500/10 p-8 md:p-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Reliability</h3>
            <p className="text-gray-600">We maintain 99.9% uptime and ensure your links work when you need them most.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">User-Centric</h3>
            <p className="text-gray-600">Every feature we build is designed with our users' needs and feedback in mind.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation</h3>
            <p className="text-gray-600">We continuously push the boundaries of what's possible in URL management.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;