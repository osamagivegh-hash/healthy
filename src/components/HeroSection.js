import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Star, Users, Award } from 'lucide-react';

const HeroSection = () => {
  const stats = [
    { icon: Users, value: '500K+', label: 'Active Users' },
    { icon: Star, value: '4.9', label: 'App Rating' },
    { icon: Award, value: '50+', label: 'Awards Won' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 via-primary-700/60 to-secondary-600/80 z-10"></div>
        {/* Placeholder for background video/image */}
        <div className="w-full h-full bg-gradient-to-br from-primary-600 via-primary-500 to-secondary-500 flex items-center justify-center">
          <div className="text-center text-white/20">
            <div className="text-6xl font-bold mb-4">🏃‍♀️💪</div>
            <p className="text-xl">Background Video/Image Placeholder</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-8"
          >
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-white font-medium">#1 Fitness App of 2024</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-display text-white mb-6 text-shadow-lg"
          >
            Transform Your
            <span className="block gradient-text bg-gradient-to-r from-secondary-400 to-accent-400 bg-clip-text text-transparent">
              Fitness Journey
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Join millions of users who have transformed their lives with personalized workout plans, 
            nutrition tracking, and mental wellness tools.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12"
          >
            <button className="group btn-primary text-lg px-8 py-4 flex items-center space-x-2">
              <span>Download App</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button className="group flex items-center space-x-2 text-white hover:text-secondary-300 transition-colors duration-300">
              <div className="bg-white/20 backdrop-blur-md rounded-full p-3 group-hover:bg-white/30 transition-colors duration-300">
                <Play className="h-6 w-6" />
              </div>
              <span className="text-lg font-medium">Watch Demo</span>
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-4">
                  <stat.icon className="h-8 w-8 text-secondary-400 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-white/70 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
