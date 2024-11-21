"use client"

import React from 'react'
import { motion } from 'framer-motion'

const SearchIcon = ({className}: {className: string}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
);

const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
    </svg>
);

const categories = [
    { icon: '🌾', name: 'Agriculture,Rural & Environment', schemes: 352 },
    { icon: '🏦', name: 'Banking,Financial Services and Insurance', schemes: 208 },
    { icon: '🤝', name: 'Business & Entrepreneurship', schemes: 361 },
    { icon: '🎓', name: 'Education & Learning', schemes: 675 },
    { icon: '🏥', name: 'Health & Wellness', schemes: 183 },
    { icon: '🏠', name: 'Housing & Shelter', schemes: 70 },
    { icon: '⚖️', name: 'Public Safety,Law & Justice', schemes: 9 },
    { icon: '🔬', name: 'Science, IT & Communications', schemes: 57 },
    { icon: '💼', name: 'Skills & Employment', schemes: 228 },
    { icon: '🤲', name: 'Social welfare & Empowerment', schemes: 1154 },
]

export default function MyScheme() {
    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-white shadow-md p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <img src="/placeholder.svg?height=40&width=120" alt="myScheme Logo" className="h-10" />
                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Enter scheme name to search..."
                                className="pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        </div>
                        <button className="bg-green-500 text-white px-4 py-2 rounded-md flex items-center space-x-2">
                            <span>Sign In</span>
                            <UserIcon />
                        </button>
                    </div>
                </div>
            </header>

            <main className="container mx-auto mt-8 px-4">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl font-bold text-center mb-4"
                >
                    #GOVERNMENTSCHEMES / #SCHEMESFORYOU
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex justify-center mb-8"
                >
                    <button className="bg-green-500 text-white px-6 py-3 rounded-md text-lg font-semibold">
                        Find Schemes For You →
                    </button>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {[
                        { title: 'Total Schemes', count: '2790+' },
                        { title: 'Central Schemes', count: '520+' },
                        { title: 'State/UT Schemes', count: '2250+' },
                    ].map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                            className="bg-white rounded-lg shadow-md p-6 text-center"
                        >
                            <h2 className="text-4xl font-bold mb-2">{item.count}</h2>
                            <p className="text-gray-600">{item.title}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="mb-8">
                    <div className="flex space-x-4 mb-4">
                        {['Categories', 'States/UTs', 'Central Ministries'].map((tab, index) => (
                            <button
                                key={tab}
                                className={`px-4 py-2 rounded-md ${index === 0 ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-700'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    <h2 className="text-2xl font-semibold mb-4 text-center">Find schemes based on categories</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {categories.map((category, index) => (
                            <motion.div
                                key={category.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="text-4xl mb-2">{category.icon}</div>
                                <p className="font-semibold mb-2">{category.schemes} Schemes</p>
                                <p className="text-sm text-gray-600">{category.name}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}

