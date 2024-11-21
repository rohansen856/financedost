"use client"

import React from 'react'
import { motion } from 'framer-motion'

export default function SIPCalculatorPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <header className="bg-white shadow-md p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <img src="/placeholder.svg?height=40&width=120" alt="Groww Logo" className="h-10" />
                    <div className="flex items-center space-x-4">
                        <input
                            type="text"
                            placeholder="What are you looking for today?"
                            className="pl-4 pr-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button className="bg-green-500 text-white px-4 py-2 rounded-md">Login/Register</button>
                    </div>
                </div>
            </header>

            <main className="container mx-auto mt-8 px-4 flex">
                <section className="flex-1">
                    <nav className="text-sm text-gray-500 mb-4">
                        Home &gt; Calculators &gt; SIP Calculator
                    </nav>
                    <h1 className="text-3xl font-bold mb-6">SIP Calculator</h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white rounded-lg shadow-md p-6 mb-8"
                    >
                        <div className="flex flex-col md:flex-row">
                            <div className="flex-1">
                                <div className="flex items-center mb-4">
                                    <button className="bg-green-100 text-green-700 px-4 py-2 rounded-md mr-2">SIP</button>
                                    <button className="px-4 py-2 rounded-md">Lumpsum</button>
                                </div>
                                <div className="space-y-4">
                                    {['Monthly investment', 'Expected return rate (p.a)', 'Time period'].map((label, index) => (
                                        <div key={label} className="flex items-center justify-between">
                                            <span>{label}</span>
                                            <input type="range" className="flex-1 mx-4" />
                                            <span className="bg-green-100 text-green-700 px-2 py-1 rounded-md">Value</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-6">
                                    <button className="bg-blue-500 text-white px-6 py-3 rounded-md">INVEST NOW</button>
                                </div>
                            </div>
                            <div className="flex-1 mt-6 md:mt-0 md:ml-8">
                                <div className="bg-gray-100 rounded-full h-40 w-40 mx-auto"></div>
                                <div className="mt-4 text-center">
                                    <p>Invested amount: ₹30,00,000</p>
                                    <p>Est. returns: ₹28,08,477</p>
                                    <p>Total value: ₹58,08,477</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-white rounded-lg shadow-md p-6"
                    >
                        <h2 className="text-2xl font-bold mb-4">SIP Calculator – Systematic Investment Plan Calculator</h2>
                        <p className="text-gray-700 mb-4">
                            Prospective investors can think that SIPs and mutual funds are the same. However, SIPs are merely a method of investing in mutual funds, the other method being a lump sum. A SIP calculator is a tool that helps you determine the returns you can avail when parking your funds in such investment tools.
                        </p>
                        <h3 className="text-xl font-semibold mb-2">What is a SIP Calculator?</h3>
                        <p className="text-gray-700 mb-4">
                            A SIP calculator is a simple tool that allows individuals to get an idea of the returns on their mutual fund investments made through SIP. SIP investments in mutual funds have become one of the most popular investment options for millennials lately.
                        </p>
                        <h3 className="text-xl font-semibold mb-2">How can a SIP return calculator help you?</h3>
                        <p className="text-gray-700">
                            SIPs are a more lucrative mode of investing funds compared to a lump sum amount according to several mutual fund experts. It helps you become financially disciplined and create a habit of savings that can benefit you in the future.
                        </p>
                    </motion.div>
                </section>

                <aside className="w-1/4 pl-4 hidden lg:block">
                    <div className="bg-white rounded-lg shadow-md p-4 mb-8">
                        <h3 className="text-lg font-semibold mb-4">Invest the way you want</h3>
                        <button className="bg-green-500 text-white px-4 py-2 rounded-md w-full">EXPLORE PRODUCTS</button>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-4">
                        <h3 className="text-lg font-semibold mb-4">Popular Calculators</h3>
                        <ul className="space-y-2">
                            {['Lumpsum Calculator', 'SWP Calculator', 'Mutual Fund Returns Calculator'].map((calc) => (
                                <li key={calc} className="text-blue-500 hover:underline">{calc}</li>
                            ))}
                        </ul>
                    </div>
                </aside>
            </main>
        </div>
    )
}

