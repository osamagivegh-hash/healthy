import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Mail, 
  Shield, 
  Zap,
  Crown,
  Gift,
  Smartphone,
  Apple,
  Play
} from 'lucide-react';

const SubscriptionSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('premium');

  const pricingPlans = [
    {
      id: 'free',
      name: 'Free',
      price: '$0',
      period: 'forever',
      description: 'Perfect for getting started',
      features: [
        'Basic workout plans',
        'Simple nutrition tracking',
        'Community access',
        'Basic progress tracking'
      ],
      cta: 'Get Started Free',
      popular: false,
      color: 'border-gray-200',
      bgColor: 'bg-gray-50'
    },
    {
      id: 'premium',
      name: 'Premium',
      price: '$9.99',
      period: 'month',
      description: 'Most popular choice',
      features: [
        'Unlimited workout plans',
        'Advanced nutrition tracking',
        'Personal trainer AI',
        'Detailed analytics',
        'Meditation & wellness',
        'Priority support',
        'Offline access'
      ],
      cta: 'Start Free Trial',
      popular: true,
      color: 'border-primary-500',
      bgColor: 'bg-primary-50'
    },
    {
      id: 'pro',
      name: 'Pro',
      price: '$19.99',
      period: 'month',
      description: 'For fitness professionals',
      features: [
        'Everything in Premium',
        'Client management',
        'Custom workout creation',
        'Advanced analytics',
        'API access',
        'White-label options',
        '24/7 phone support'
      ],
      cta: 'Contact Sales',
      popular: false,
      color: 'border-secondary-500',
      bgColor: 'bg-secondary-50'
    }
  ];

  const appStores = [
    {
      name: 'App Store',
      icon: Apple,
      url: '#',
      color: 'bg-black hover:bg-gray-800'
    },
    {
      name: 'Google Play',
      icon: Play,
      url: '#',
      color: 'bg-black hover:bg-gray-800'
    }
  ];

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section id="download" className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 text-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-8">
            <Crown className="h-4 w-4 text-yellow-400" />
            <span className="font-medium">Join 500K+ Happy Users</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold font-display mb-6">
            Start Your Fitness
            <span className="block text-secondary-300">Journey Today</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Download FitLife now and get access to personalized workout plans, 
            nutrition tracking, and mental wellness tools.
          </p>
        </motion.div>

        {/* Download Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          {appStores.map((store, index) => (
            <motion.a
              key={store.name}
              href={store.url}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className={`${store.color} text-white px-8 py-4 rounded-2xl flex items-center space-x-3 transition-all duration-300 hover:scale-105 hover:shadow-lg`}
            >
              <store.icon className="h-8 w-8" />
              <div className="text-left">
                <div className="text-xs opacity-90">Download on the</div>
                <div className="text-lg font-semibold">{store.name}</div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Pricing Plans */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            Choose Your Plan
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className={`relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border-2 ${plan.color} ${
                  plan.popular ? 'scale-105 shadow-2xl' : 'hover:scale-105'
                } transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 py-2 rounded-full text-sm font-bold flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-current" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h4 className="text-2xl font-bold mb-2">{plan.name}</h4>
                  <div className="text-4xl font-bold mb-2">{plan.price}</div>
                  <div className="text-white/70">/{plan.period}</div>
                  <p className="text-white/80 mt-2">{plan.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-secondary-400 flex-shrink-0" />
                      <span className="text-white/90">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-white text-primary-600 hover:bg-white/90' 
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 text-center max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="bg-white/20 p-3 rounded-full">
              <Gift className="h-8 w-8 text-yellow-400" />
            </div>
          </div>
          
          <h3 className="text-3xl font-bold mb-4">
            Get Exclusive Updates
          </h3>
          <p className="text-white/90 mb-8">
            Subscribe to our newsletter and be the first to know about new features, 
            workout tips, and special offers.
          </p>
          
          <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <div className="flex-1 relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full pl-12 pr-4 py-3 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitted}
              className="bg-primary-500 hover:bg-primary-600 disabled:bg-primary-400 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
            >
              {isSubmitted ? (
                <>
                  <CheckCircle className="h-5 w-5" />
                  <span>Subscribed!</span>
                </>
              ) : (
                <>
                  <span>Subscribe</span>
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </form>
          
          <p className="text-white/70 text-sm mt-4 flex items-center justify-center space-x-1">
            <Shield className="h-4 w-4" />
            <span>We respect your privacy. Unsubscribe anytime.</span>
          </p>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center"
        >
          <div>
            <div className="text-3xl font-bold mb-2">500K+</div>
            <div className="text-white/80">Downloads</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">4.9★</div>
            <div className="text-white/80">App Rating</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">50+</div>
            <div className="text-white/80">Countries</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">24/7</div>
            <div className="text-white/80">Support</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SubscriptionSection;
