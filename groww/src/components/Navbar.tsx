import React from 'react';
import { Link } from 'react-router-dom';
import { Search, User, Bell } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-green-600">Groww</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link to="/stocks" className="text-gray-900 hover:text-green-600 px-3 py-2 text-sm font-medium">
                Stocks
              </Link>
              <Link to="/mutual-funds" className="text-gray-900 hover:text-green-600 px-3 py-2 text-sm font-medium">
                Mutual Funds
              </Link>
              <Link to="/dashboard" className="text-gray-900 hover:text-green-600 px-3 py-2 text-sm font-medium">
                Dashboard
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex-shrink-0 relative">
              <div className="flex items-center md:ml-6 space-x-4">
                <div className="relative">
                  <Search className="h-5 w-5 text-gray-400 cursor-pointer" />
                </div>
                <Bell className="h-5 w-5 text-gray-400 cursor-pointer" />
                <User className="h-5 w-5 text-gray-400 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;