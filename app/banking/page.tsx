"use client"

import React from 'react'
import { motion } from 'framer-motion'

export default function ProductRecommendationPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <section className="bg-white py-12">
                <div className="container mx-auto px-4 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl font-bold mb-4"
                    >
                        Personalized product recommendation in a few steps
                    </motion.h1>
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-green-500 text-white px-6 py-3 rounded-md text-lg font-semibold"
                    >
                        Get Started →
                    </motion.button>
                    <p className="text-sm text-gray-500 mt-2">
                        *Note: You don’t need to provide your mobile number to get product suggestions.
                    </p>
                    <div className="flex justify-center mt-8 space-x-4">
                        {['01', '02', '03'].map((step, index) => (
                            <motion.div
                                key={step}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                className="bg-gray-100 rounded-lg p-4 w-1/3"
                            >
                                <h2 className="text-4xl font-bold text-green-500">{step}</h2>
                                <p className="mt-2 text-gray-700">
                                    {index === 0 && 'Share a few details with us'}
                                    {index === 1 && 'BankSathi’s smart algorithm does the processing'}
                                    {index === 2 && 'Get the best product recommendation'}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 py-12">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold text-center mb-8">Check what our customers have to say</h2>
                    <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
                        {[
                            {
                                name: 'Faiqa Ziya',
                                quote: 'My experience with BankSathi while applying for a cashback credit card was fantastic...',
                            },
                            {
                                name: 'John Doe',
                                quote: 'I recently applied for a credit card through BankSathi, and the ease of the process amazed me...',
                            },
                        ].map((testimonial, index) => (
                            <motion.div
                                key={testimonial.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                                className="bg-white rounded-lg shadow-md p-6 flex-1"
                            >
                                <p className="text-gray-700 mb-4">"{testimonial.quote}"</p>
                                <p className="font-semibold">{testimonial.name}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-white py-12">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold mb-8">Knowledge Base</h2>
                    <div className="flex flex-col md:flex-row">
                        <div className="flex-1 bg-gray-100 rounded-lg p-4 mb-4 md:mb-0 md:mr-4">
                            <img src="/placeholder.svg?height=200&width=400" alt="Knowledge Base" className="rounded-lg mb-4" />
                            <h3 className="font-semibold mb-2">How to Reset UAN Password: A Step-by-Step Guide</h3>
                            <p className="text-sm text-gray-500">Surabhi 19 Nov 2024 4 min read</p>
                        </div>
                        <div className="flex-1">
                            <ul className="space-y-4">
                                {[
                                    'Maximising Tax Savings on Medical Expenses: A Guide to Section 80DDB',
                                    'Personal Finance 101: Meaning, Planning, and Services',
                                    'What is Compound Interest and How Can It Grow Your Savings?',
                                ].map((article, index) => (
                                    <li key={index} className="text-blue-500 hover:underline">
                                        {article}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

