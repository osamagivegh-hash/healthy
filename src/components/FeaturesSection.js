import React from 'react';
import { motion } from 'framer-motion';
import { 
  Dumbbell, 
  Apple, 
  Brain, 
  TrendingUp, 
  Clock, 
  Users2,
  Heart,
  Target,
  Zap,
  Shield
} from 'lucide-react';

const FeaturesSection = () => {
  const mainFeatures = [
    {
      icon: Dumbbell,
      title: 'Personalized Workout Plans',
      description: 'Get custom workout routines tailored to your fitness level, goals, and preferences with AI-powered recommendations.',
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600'
    },
    {
      icon: Apple,
      title: 'Smart Nutrition Tracking',
      description: 'Track your meals, count calories, and get personalized nutrition advice to fuel your fitness journey.',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      icon: Brain,
      title: 'Mental Wellness Tools',
      description: 'Meditation guides, stress management, and mindfulness exercises to support your mental health.',
      color: 'from-purple-500 to-violet-500',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      icon: TrendingUp,
      title: 'Progress Monitoring',
      description: 'Track your fitness metrics, body measurements, and achievements with detailed analytics and insights.',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    }
  ];

  const additionalFeatures = [
    {
      icon: Clock,
      title: 'Quick Workouts',
      description: '5-30 minute workouts for busy schedules'
    },
    {
      icon: Users2,
      title: 'Community Support',
      description: 'Connect with like-minded fitness enthusiasts'
    },
    {
      icon: Heart,
      title: 'Health Monitoring',
      description: 'Heart rate, sleep, and activity tracking'
    },
    {
      icon: Target,
      title: 'Goal Setting',
      description: 'Set and achieve realistic fitness milestones'
    },
    {
      icon: Zap,
      title: 'Workout Intensity',
      description: 'Adaptive difficulty based on your performance'
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Proper form guidance and injury prevention'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="features" className="section-padding bg-gray-50">
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
            Everything You Need for
            <span className="block gradient-text">Complete Wellness</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive platform combines fitness, nutrition, and mental wellness 
            to help you achieve your health goals faster and more effectively.
          </p>
        </motion.div>

        {/* Main Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {mainFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="card-hover bg-white rounded-3xl p-8 h-full border border-gray-100">
                {/* Icon */}
                <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`h-8 w-8 ${feature.iconColor}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Gradient Border Effect */}
                <div className={`mt-6 h-1 bg-gradient-to-r ${feature.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold font-display text-gray-900 mb-4">
              And So Much More
            </h3>
            <p className="text-gray-600 text-lg">
              Discover additional features that make your fitness journey seamless and enjoyable.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300"
              >
                <div className="bg-primary-100 p-2 rounded-lg flex-shrink-0">
                  <feature.icon className="h-5 w-5 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <button className="btn-primary text-lg px-8 py-4">
            Explore All Features
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
