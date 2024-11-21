"use client"

import React from 'react'
import { motion } from 'framer-motion'

const schemes = [
    {
        title: 'Financial Assistance To Disabled Students Pursuing (10th, 11th, 12th Equivalent Exams)',
        location: 'Kerala',
        description: 'The scheme "Financial Assistance to Disabled Students Pursuing (10th, 11th, 12th Equivalent Exams)" was launched by the Department of Social Justice, Government of Kerala.',
        tags: ['APL', 'BPL', 'Disabled', 'Financial Assistance', 'PwD', 'Student'],
    },
    {
        title: 'ICMR- Post Doctoral Fellowship',
        location: 'Ministry Of Health & Family Welfare',
        description: 'ICMR: Post Doctoral Fellowship (ICMR-PDF) Scheme is being instituted to foster high-quality research opportunities for promising fresh Ph.D./MD/MS holders in the areas of basic science, communicable and non-communicable diseases, & reproductive health including nutrition at ICMR Institutes/Centers.',
        tags: ['Fellowship', 'ICMR', 'PDF', 'Post Doctoral', 'Research'],
    },
    {
        title: 'Tool Kit Grant for Traditional Handicrafts Experts',
        location: 'Kerala',
        description: 'The "Tool Kit Grant for Traditional Handicrafts Experts" scheme is launched for the purpose of improving the productivity and competitiveness of the traditional OBC craftsmen ensuring quality goods for enhanced income and thereby qualitative improvement in their living conditions.',
        tags: ['Craftsman', 'Grant', 'Handicrafts', 'OBC', 'Self-employment', 'Stipend', 'Tool Kit', 'Training'],
    },
    {
        title: 'Snehasanthwanam',
        location: 'Kerala',
        description: 'The Government of Kerala has launched the "Snehasanthwanam" scheme under the Kerala Social Security Mission. This scheme acts as a relief measure for the Endosulfan victims in the state of Kerala.',
        tags: [],
    },
]

export default function SchemeSearchPage() {
    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-white shadow-md p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <img src="/placeholder.svg?height=40&width=120" alt="myScheme Logo" className="h-10" />
                    <div className="flex items-center space-x-4">
                        <input
                            type="text"
                            placeholder="Search"
                            className="pl-4 pr-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <button className="bg-green-500 text-white px-4 py-2 rounded-md">Sign In</button>
                    </div>
                </div>
            </header>

            <main className="container mx-auto mt-8 px-4 flex">
                <aside className="w-1/4 pr-4 hidden lg:block">
                    <h2 className="text-lg font-semibold mb-4">Filter By</h2>
                    <div className="space-y-4">
                        {['State', 'Scheme Category', 'Gender', 'Age', 'Caste', 'Ministry Name'].map((filter) => (
                            <div key={filter} className="border-b pb-2">
                                <h3 className="font-medium">{filter}</h3>
                                <select className="w-full mt-1 border rounded-md">
                                    <option>Select</option>
                                </select>
                            </div>
                        ))}
                    </div>
                </aside>

                <section className="flex-1">
                    <div className="flex justify-between items-center mb-4">
                        <h1 className="text-2xl font-bold">Total 2794 schemes available</h1>
                        <div className="flex items-center space-x-2">
                            <span>Sort :</span>
                            <select className="border rounded-md">
                                <option>Relevance</option>
                            </select>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {schemes.map((scheme, index) => (
                            <motion.div
                                key={scheme.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white rounded-lg shadow-md p-4"
                            >
                                <h2 className="text-xl font-semibold">{scheme.title}</h2>
                                <p className="text-sm text-gray-500">{scheme.location}</p>
                                <p className="mt-2 text-gray-700">{scheme.description}</p>
                                <div className="mt-2 flex flex-wrap gap-2">
                                    {scheme.tags.map((tag) => (
                                        <span key={tag} className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    )
}

