import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, Play, Maximize2, ArrowRight, CheckCircle } from 'lucide-react';
import ImageFallback from './ImageFallback';

const AppPreviewSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  const appScreenshots = [
    {
      id: 1,
      title: 'Dashboard',
      description: 'Get a complete overview of your fitness journey with personalized insights and progress tracking.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['Real-time metrics', 'Goal tracking', 'Weekly summaries', 'Achievement badges']
    },
    {
      id: 2,
      title: 'Workout Plans',
      description: 'Access thousands of personalized workout routines designed by certified fitness professionals.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['Custom routines', 'Video guidance', 'Form corrections', 'Progress tracking']
    },
    {
      id: 3,
      title: 'Nutrition Tracker',
      description: 'Log meals, count calories, and get personalized nutrition recommendations for optimal health.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['Barcode scanning', 'Meal planning', 'Macro tracking', 'Recipe suggestions']
    },
    {
      id: 4,
      title: 'Mental Wellness',
      description: 'Meditation sessions, stress management tools, and mindfulness exercises for complete wellness.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['Guided meditation', 'Breathing exercises', 'Sleep stories', 'Mood tracking']
    },
    {
      id: 5,
      title: 'Progress Analytics',
      description: 'Detailed analytics and insights to help you understand your fitness journey and make improvements.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['Charts & graphs', 'Trend analysis', 'Goal milestones', 'Performance insights']
    }
  ];

  const tabs = [
    { id: 0, name: 'Dashboard', icon: '📊' },
    { id: 1, name: 'Workouts', icon: '💪' },
    { id: 2, name: 'Nutrition', icon: '🍎' },
    { id: 3, name: 'Wellness', icon: '🧘‍♀️' },
    { id: 4, name: 'Analytics', icon: '📈' }
  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="screenshots" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display text-gray-900 mb-6">
            See FitLife in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our beautiful, intuitive interface designed to make your fitness journey 
            enjoyable and effective.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-primary-500 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              <span className="text-lg">{tab.icon}</span>
              <span>{tab.name}</span>
            </button>
          ))}
        </motion.div>

        {/* App Preview Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center"
          >
            {/* Phone Frame */}
            <div className="relative">
              <div className="w-80 h-[600px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* Status Bar */}
                  <div className="absolute top-0 left-0 right-0 h-8 bg-white flex items-center justify-between px-6 text-xs font-medium text-gray-900 z-10">
                    <span>9:41</span>
                    <div className="flex items-center space-x-1">
                      <div className="w-4 h-2 bg-gray-900 rounded-sm"></div>
                      <div className="w-1 h-1 bg-gray-900 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* App Content */}
                  <div className="pt-8 h-full">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className="h-full cursor-pointer group"
                        onClick={() => openModal(appScreenshots[activeTab])}
                      >
                        <ImageFallback
                          src={appScreenshots[activeTab].image}
                          alt={appScreenshots[activeTab].title}
                          className="w-full h-full object-cover rounded-b-[2.5rem] group-hover:scale-105 transition-transform duration-300"
                        />
                        
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-b-[2.5rem]">
                          <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                            <Maximize2 className="h-6 w-6 text-gray-700" />
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-primary-500 text-white p-3 rounded-full shadow-lg"
              >
                <Play className="h-5 w-5" />
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 bg-secondary-500 text-white p-3 rounded-full shadow-lg"
              >
                <Smartphone className="h-5 w-5" />
              </motion.div>
            </div>
          </motion.div>

          {/* Feature Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-3xl font-bold font-display text-gray-900 mb-4">
                  {appScreenshots[activeTab].title}
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {appScreenshots[activeTab].description}
                </p>
                
                <div className="space-y-3 mb-8">
                  {appScreenshots[activeTab].features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="h-5 w-5 text-secondary-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>
                
                <button className="btn-primary flex items-center space-x-2">
                  <span>Try This Feature</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Screenshot Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            More App Screenshots
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {appScreenshots.map((screenshot, index) => (
              <motion.div
                key={screenshot.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => openModal(screenshot)}
              >
                <div className="aspect-[9/16] bg-gray-200 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <ImageFallback
                    src={screenshot.image}
                    alt={screenshot.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-3 text-center">
                  <h4 className="font-medium text-gray-900">{screenshot.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <ImageFallback
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full object-contain rounded-lg"
                />
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors duration-300"
                >
                  ✕
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AppPreviewSection;
