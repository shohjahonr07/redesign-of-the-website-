
import React, { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Mail className="w-16 h-16 text-orange-400 mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Never Miss a Deal
            </h2>
            <p className="text-xl text-blue-100 leading-relaxed">
              Get the latest car deals, exclusive offers, and leasing tips delivered straight to your inbox. 
              Join over 50,000 savvy drivers who save with LingsCars.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-lg border-0 focus:ring-4 focus:ring-orange-400 focus:ring-opacity-50 text-gray-800"
                required
              />
              <button
                type="submit"
                disabled={isSubscribed}
                className="bg-orange-500 hover:bg-orange-600 disabled:bg-green-500 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 disabled:hover:scale-100 flex items-center justify-center min-w-[120px]"
              >
                {isSubscribed ? (
                  <>
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Subscribed!
                  </>
                ) : (
                  'Subscribe'
                )}
              </button>
            </div>
          </form>

          <p className="text-blue-200 text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
