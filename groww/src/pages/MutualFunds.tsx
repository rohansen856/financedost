import React, { useState } from 'react';
import { Search, Star, TrendingUp } from 'lucide-react';

const fundsData = [
  {
    id: 1,
    name: 'Large Cap Growth Fund',
    category: 'Equity',
    rating: 5,
    returns: '15.8%',
    nav: '45.67',
    risk: 'High',
  },
  {
    id: 2,
    name: 'Debt Fund Direct Growth',
    category: 'Debt',
    rating: 4,
    returns: '8.2%',
    nav: '32.45',
    risk: 'Low',
  },
  {
    id: 3,
    name: 'Mid Cap Opportunities',
    category: 'Equity',
    rating: 4,
    returns: '18.5%',
    nav: '56.78',
    risk: 'Very High',
  },
  {
    id: 4,
    name: 'Balanced Advantage Fund',
    category: 'Hybrid',
    rating: 5,
    returns: '12.4%',
    nav: '28.90',
    risk: 'Moderate',
  },
];

const MutualFunds = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Mutual Funds</h1>
        <p className="mt-2 text-gray-600">
          Explore a wide range of mutual funds to match your investment goals
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative mb-8">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm"
          placeholder="Search mutual funds..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Mutual Funds Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {fundsData.map((fund) => (
          <div
            key={fund.id}
            className="bg-white overflow-hidden shadow rounded-lg hover:shadow-lg transition-shadow duration-300 cursor-pointer"
          >
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  {fund.category}
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  {fund.risk}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">
                {fund.name}
              </h3>
              <div className="mt-2 flex items-center">
                {renderStars(fund.rating)}
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">3Y Returns</p>
                  <p className="mt-1 flex items-center text-lg font-semibold text-green-600">
                    <TrendingUp className="h-5 w-5 mr-1" />
                    {fund.returns}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">NAV</p>
                  <p className="mt-1 text-lg font-semibold text-gray-900">
                    ₹{fund.nav}
                  </p>
                </div>
              </div>
              <button className="mt-4 w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                Invest Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MutualFunds;