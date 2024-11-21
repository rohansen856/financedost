'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { BanknoteIcon, TrendingUp, LandPlot, CheckCircle, Star, ArrowRight, Phone, Mail, MapPin } from 'lucide-react'
import Link from 'next/link'
import { useState, useRef } from 'react'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function Component() {
    return (
        <div className="min-h-screen bg-white text-gray-900">
            <Header />
            <HeroSection />
            <FeaturesSection />
            <ServicesSection />
            <TestimonialSection />
            <FaqSection />
            <CtaSection />
            <ContactSection />
            <Footer />
        </div>
    )
}

function Header() {
    return (
        <header className="bg-white shadow-md">
            <nav className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <Link href="/" className="text-2xl font-bold text-blue-600">FinanceHub</Link>
                    <div className="hidden md:flex space-x-4">
                        <Link href="#services" className="text-gray-600 hover:text-blue-600">Services</Link>
                        <Link href="#features" className="text-gray-600 hover:text-blue-600">Features</Link>
                        <Link href="#testimonials" className="text-gray-600 hover:text-blue-600">Testimonials</Link>
                        <Link href="#faq" className="text-gray-600 hover:text-blue-600">FAQ</Link>
                        <Link href="#contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
                    </div>
                    <Button variant="outline">Login</Button>
                </div>
            </nav>
        </header>
    )
}

function HeroSection() {
    return (
        <section className="relative overflow-hidden py-20 bg-gradient-to-r from-blue-50 to-indigo-100">
            <div className="container mx-auto px-4 relative z-10">
                <motion.h1
                    className="mb-8 text-5xl font-bold leading-tight text-blue-900 md:text-6xl lg:text-7xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Your All-in-One
                    <br />
                    <span className="text-blue-600">Financial Solution</span>
                </motion.h1>
                <motion.p
                    className="mb-8 text-xl text-gray-700 md:text-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Banking, Finance, and Government Schemes - Simplified
                </motion.p>
                <motion.div
                    className="flex flex-wrap gap-4 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <TopicLink Icon={BanknoteIcon} text="Banking" href="/banking" />
                    <TopicLink Icon={TrendingUp} text="Finance" href="/finance" />
                    <TopicLink Icon={LandPlot} text="Govt. Schemes" href="/schemes" />
                </motion.div>
            </div>
        </section>
    )
}

function TopicLink({ Icon, text, href }: any) {
    return (
        <Link href={href}>
            <motion.div
                className="flex items-center space-x-2 bg-white rounded-full px-6 py-3 text-lg font-semibold text-blue-600 shadow-md transition-all hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <Icon className="h-6 w-6" />
                <span>{text}</span>
            </motion.div>
        </Link>
    )
}

function FeaturesSection() {
    const features = [
        { title: "Easy Banking", description: "Manage your accounts with just a few taps" },
        { title: "Smart Investments", description: "Get personalized investment recommendations" },
        { title: "Government Scheme Finder", description: "Discover schemes you're eligible for" },
        { title: "Secure Transactions", description: "Bank-grade security for all your transactions" },
    ]

    return (
        <section id="features" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-12 text-center text-blue-900">Our Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-lg p-6 shadow-md"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <CheckCircle className="h-12 w-12 mb-4 text-blue-600" />
                            <h3 className="text-xl font-semibold mb-2 text-blue-900">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

function ServicesSection() {
    const services = [
        { title: "Personal Banking", description: "Tailored banking solutions for individuals" },
        { title: "Business Finance", description: "Comprehensive financial services for businesses" },
        { title: "Government Schemes", description: "Easy access to eligible government programs" },
    ]

    return (
        <section id="services" className="py-20 bg-blue-600 text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Card key={index} className="bg-white text-blue-900">
                            <CardHeader>
                                <CardTitle>{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>{service.description}</p>
                            </CardContent>
                            <CardFooter>
                                <Button variant="outline">Learn More</Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

function TestimonialSection() {
    const testimonials = [
        { name: "John Doe", role: "Small Business Owner", text: "This platform has revolutionized how I manage my business finances." },
        { name: "Jane Smith", role: "Recent Graduate", text: "I found the perfect government scheme for my situation. Highly recommended!" },
        { name: "Alex Johnson", role: "Investor", text: "The investment tools here have helped me make informed decisions and grow my portfolio." },
    ]

    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <section id="testimonials" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-12 text-center text-blue-900">What Our Users Say</h2>
                <div className="relative">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-lg p-6 shadow-md mb-4"
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: index === activeIndex ? 1 : 0, x: index === activeIndex ? 0 : 100 }}
                            transition={{ duration: 0.5 }}
                        >
                            <p className="mb-4 text-lg italic text-gray-600">"{testimonial.text}"</p>
                            <div className="flex items-center">
                                <div className="mr-4">
                                    <p className="font-semibold text-blue-900">{testimonial.name}</p>
                                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                                </div>
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className="flex justify-center mt-8">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            className={`h-3 w-3 rounded-full mx-2 ${index === activeIndex ? 'bg-blue-600' : 'bg-gray-300'}`}
                            onClick={() => setActiveIndex(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

function FaqSection() {
    const faqs = [
        { question: "How do I open an account?", answer: "You can open an account online through our website or mobile app. Just click on the 'Open Account' button and follow the steps." },
        { question: "What government schemes am I eligible for?", answer: "Our platform analyzes your profile and suggests eligible schemes. Log in to your account and visit the 'Government Schemes' section to see your personalized recommendations." },
        { question: "Is my data secure?", answer: "Yes, we use bank-grade encryption and security measures to protect your data. We also comply with all relevant data protection regulations." },
    ]

    return (
        <section id="faq" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-12 text-center text-blue-900">Frequently Asked Questions</h2>
                <div className="space-y-6">
                    {faqs.map((faq, index) => (
                        <Card key={index}>
                            <CardHeader>
                                <CardTitle>{faq.question}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>{faq.answer}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

function CtaSection() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })
    const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])
    const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1])

    return (
        <section className="py-20 bg-blue-600 text-white">
            <motion.div
                ref={ref}
                style={{ opacity, scale }}
                className="container mx-auto px-4 text-center"
            >
                <h2 className="text-4xl font-bold mb-4">Ready to Take Control of Your Finances?</h2>
                <p className="text-xl mb-8">Join thousands of satisfied users and start your journey today.</p>
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                    Get Started Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
            </motion.div>
        </section>
    )
}

function ContactSection() {
    return (
        <section id="contact" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-12 text-center text-blue-900">Contact Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-2xl font-semibold mb-4 text-blue-600">Get in Touch</h3>
                        <p className="mb-4 text-gray-600">Have questions or need assistance? Our team is here to help.</p>
                        <div className="space-y-2">
                            <div className="flex items-center">
                                <Phone className="h-5 w-5 mr-2 text-blue-600" />
                                <span>+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-center">
                                <Mail className="h-5 w-5 mr-2 text-blue-600" />
                                <span>support@financehub.com</span>
                            </div>
                            <div className="flex items-center">
                                <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                                <span>123 Finance St, New York, NY 10001</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <form className="space-y-4">
                            <Input type="text" placeholder="Your Name" />
                            <Input type="email" placeholder="Your Email" />
                            <Input type="text" placeholder="Subject" />
                            <textarea
                                className="w-full p-3 border rounded-md"
                                rows={4}
                                placeholder="Your Message"
                            ></textarea>
                            <Button type="submit" className="w-full">Send Message</Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">FinanceHub</h3>
                        <p className="text-gray-400">Your all-in-one financial solution</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link href="#" className="text-gray-400 hover:text-white">Home</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-white">About Us</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-white">Services</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-white">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Legal</h4>
                        <ul className="space-y-2">
                            <li><Link href="#" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-white">Cookie Policy</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white">
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-400">
                    <p>&copy; 2023 FinanceHub. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}