import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, BarChart2, Briefcase, DollarSign, Smartphone, TrendingUp } from "lucide-react"

export default function GrowwClone() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-green-600">Groww</h1>
            <nav className="hidden md:flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-green-600">Stocks</a>
              <a href="#" className="text-gray-600 hover:text-green-600">Mutual Funds</a>
              <a href="#" className="text-gray-600 hover:text-green-600">Gold</a>
              <a href="#" className="text-gray-600 hover:text-green-600">US Stocks</a>
            </nav>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline">Login</Button>
            <Button>Get Started</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-green-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Invest in Everything</h2>
          <p className="text-xl text-gray-600 mb-8">Online platform to invest in stocks, derivatives, mutual funds, and more</p>
          <Button size="lg" className="px-8">
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Investment Options */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Invest in</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Stocks", icon: TrendingUp },
              { title: "Mutual Funds", icon: BarChart2 },
              { title: "Gold", icon: DollarSign },
              { title: "US Stocks", icon: Briefcase },
            ].map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <item.icon className="h-12 w-12 mx-auto text-green-600" />
                  <CardTitle className="mt-4">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Invest in {item.title.toLowerCase()} with ease and grow your wealth.</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Why Choose Groww</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Easy to Use", description: "Simple and intuitive platform for seamless investing", icon: Smartphone },
              { title: "Low Costs", description: "Zero account opening and maintenance fees", icon: DollarSign },
              { title: "Expert Research", description: "Access to in-depth research and analysis", icon: BarChart2 },
            ].map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <feature.icon className="h-12 w-12 text-green-600 mb-4" />
                <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h5 className="text-lg font-semibold mb-4">Products</h5>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-green-400">Stocks</a></li>
                <li><a href="#" className="hover:text-green-400">Mutual Funds</a></li>
                <li><a href="#" className="hover:text-green-400">Gold</a></li>
                <li><a href="#" className="hover:text-green-400">US Stocks</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Groww</h5>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-green-400">About Us</a></li>
                <li><a href="#" className="hover:text-green-400">Careers</a></li>
                <li><a href="#" className="hover:text-green-400">Press & Media</a></li>
                <li><a href="#" className="hover:text-green-400">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Help & Support</h5>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-green-400">Help Center</a></li>
                <li><a href="#" className="hover:text-green-400">FAQs</a></li>
                <li><a href="#" className="hover:text-green-400">Quick Start Guide</a></li>
                <li><a href="#" className="hover:text-green-400">Tutorials</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Connect with Us</h5>
              <p className="mb-4">Stay up to date with the latest market trends and Groww updates.</p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-green-400">Twitter</a>
                <a href="#" className="hover:text-green-400">Facebook</a>
                <a href="#" className="hover:text-green-400">Instagram</a>
                <a href="#" className="hover:text-green-400">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; 2023 Groww. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}