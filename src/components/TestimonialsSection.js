import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import ImageFallback from './ImageFallback';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: 'Alex Johnson',
      role: 'Fitness Enthusiast',
      location: 'New York, NY',
      rating: 5,
      text: 'FitLife completely transformed my approach to fitness. The personalized workout plans and nutrition tracking helped me lose 25 pounds in just 3 months. The mental wellness features are a game-changer!',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      achievement: 'Lost 25 lbs'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Software Engineer',
      location: 'San Francisco, CA',
      rating: 5,
      text: 'As someone who works long hours, I struggled to find time for fitness. FitLife\'s quick workout options and flexible scheduling made it possible to stay healthy despite my busy lifestyle.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      achievement: 'Built consistent routine'
    },
    {
      id: 3,
      name: 'Ethan Rodriguez',
      role: 'Yoga Instructor',
      location: 'Austin, TX',
      rating: 5,
      text: 'The meditation and mindfulness features are incredible. They helped me manage stress and improved my overall well-being. I recommend FitLife to all my yoga students!',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      achievement: 'Improved mental health'
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Personal Trainer',
      location: 'Miami, FL',
      rating: 5,
      text: 'I use FitLife to track my own fitness progress and recommend it to my clients. The progress monitoring and analytics are top-notch. It\'s like having a personal trainer in your pocket!',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      achievement: 'Enhanced training methods'
    },
    {
      id: 5,
      name: 'Lucas Wang',
      role: 'Nutritionist',
      location: 'Seattle, WA',
      rating: 5,
      text: 'The nutrition tracking features are incredibly detailed and user-friendly. My clients love how easy it is to log meals and get personalized recommendations. It\'s revolutionized my practice!',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      achievement: 'Optimized nutrition plans'
    },
    {
      id: 6,
      name: 'James Wilson',
      role: 'Marathon Runner',
      location: 'Boston, MA',
      rating: 5,
      text: 'FitLife helped me prepare for my first marathon. The training plans are scientifically backed and the progress tracking kept me motivated throughout the journey. Crossed the finish line with confidence!',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      achievement: 'Completed first marathon'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextTestimonial]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="section-padding bg-white">
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
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied users who have transformed their lives with FitLife.
          </p>
        </motion.div>

        {/* Main Testimonial Carousel */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-8 md:p-12">
            {/* Quote Icon */}
            <div className="absolute top-8 left-8">
              <Quote className="h-8 w-8 text-primary-300" />
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="h-6 w-6 text-gray-700" />
            </button>
            
            <button
              onClick={nextTestimonial}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="h-6 w-6 text-gray-700" />
            </button>

            {/* Testimonial Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                {/* Profile Image */}
                <div className="mb-8">
                  <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <ImageFallback
                      src={currentTestimonial.image}
                      alt={currentTestimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex justify-center mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                  "{currentTestimonial.text}"
                </blockquote>

                {/* User Info */}
                <div className="mb-4">
                  <h4 className="text-xl font-bold text-gray-900 mb-1">
                    {currentTestimonial.name}
                  </h4>
                  <p className="text-gray-600">
                    {currentTestimonial.role} • {currentTestimonial.location}
                  </p>
                </div>

                {/* Achievement Badge */}
                <div className="inline-flex items-center bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
                  🏆 {currentTestimonial.achievement}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-primary-500 scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                "{testimonial.text}"
              </p>

              {/* User Info */}
              <div className="flex items-center space-x-3">
                <ImageFallback
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h5 className="font-semibold text-gray-900 text-sm">
                    {testimonial.name}
                  </h5>
                  <p className="text-gray-500 text-xs">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">500K+</div>
              <div className="text-gray-600">Happy Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">4.9★</div>
              <div className="text-gray-600">App Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">1M+</div>
              <div className="text-gray-600">Workouts Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">98%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
