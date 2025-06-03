
import React, { useState } from 'react';
import { Mail, CheckCircle, Send } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email && !isLoading) {
      setIsLoading(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubscribed(true);
        setEmail('');
        setIsLoading(false);
        
        // Reset success state after 5 seconds
        setTimeout(() => setIsSubscribed(false), 5000);
      }, 1500);
    }
  };

  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-20 w-32 h-32 bg-orange-500/10 rounded-full animate-float"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-orange-400/5 rounded-full animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full mb-6 animate-bounce-gentle">
              <Mail className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Never Miss a <span className="gradient-text">Deal</span>
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Get the latest car deals, exclusive offers, and leasing tips delivered straight to your inbox. 
              Join over <span className="font-bold text-orange-400">50,000</span> savvy drivers who save with LingsCars.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto animate-slide-up">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-6 py-4 rounded-lg border-0 bg-white/10 backdrop-blur-sm text-white placeholder-slate-300 focus:ring-4 focus:ring-orange-400/50 focus:bg-white/20 transition-all duration-300"
                  required
                  disabled={isLoading || isSubscribed}
                />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-orange-500/20 to-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
              
              <button
                type="submit"
                disabled={isSubscribed || isLoading}
                className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center min-w-[140px] ${
                  isSubscribed 
                    ? 'bg-green-500 hover:bg-green-600' 
                    : isLoading
                    ? 'bg-orange-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700'
                } text-white shadow-lg hover:shadow-xl`}
              >
                {isSubscribed ? (
                  <>
                    <CheckCircle className="w-5 h-5 mr-2 animate-bounce" />
                    Subscribed!
                  </>
                ) : isLoading ? (
                  <>
                    <div className="w-5 h-5 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Subscribing...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Subscribe
                  </>
                )}
              </button>
            </div>
          </form>

          <p className="text-slate-400 text-sm mt-6 animate-fade-in">
            🔒 We respect your privacy. Unsubscribe at any time. No spam, ever.
          </p>

          {/* Trust indicators */}
          <div className="flex items-center justify-center space-x-8 mt-8 text-slate-400 text-sm animate-fade-in">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
              <span>50,000+ subscribers</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
              <span>Weekly deals</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
              <span>Exclusive offers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
