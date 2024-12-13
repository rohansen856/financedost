import React from 'react';
import { ArrowRight, TrendingUp, Shield, Users } from 'lucide-react';

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-500 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
              Invest in Your Future
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg text-white sm:text-xl md:mt-5 md:max-w-3xl">
              Start your investment journey with zero commission trading
            </p>
            <div className="mt-10">
              <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-gray-50">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Us</h2>
            <p className="mt-4 text-lg text-gray-600">
              Experience the best-in-class trading and investing platform
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-gray-900">Zero Commission</h3>
              <p className="mt-2 text-base text-gray-600 text-center">
                Trade stocks without any commission charges
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-gray-900">Secure Platform</h3>
              <p className="mt-2 text-base text-gray-600 text-center">
                Bank-level security for all your investments
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-gray-900">Expert Support</h3>
              <p className="mt-2 text-base text-gray-600 text-center">
                24/7 expert support for all your queries
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">
              Ready to start investing?
            </h2>
            <p className="mt-4 text-xl text-green-100">
              Join millions of investors who trust us with their investments
            </p>
            <button className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-gray-50">
              Open Free Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;