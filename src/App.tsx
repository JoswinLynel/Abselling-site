import { useState, useEffect } from 'react'
import {
  Phone,
  Mail,
  MapPin,
  Shield,
  Award,
  Clock,
  CheckCircle,
  Menu,
  X,
  ChevronRight,
  HardHat,
  Settings,
  Calendar
} from 'lucide-react'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { ServicesSection } from '@/sections/ServicesSection'
import { QuoteForm } from '@/components/QuoteForm'
import './App.css'

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const }
  }
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  const benefits = [
    {
      title: 'IRATA Certified',
      description: 'All technicians hold current IRATA certifications — the global standard for rope access professionals.',
      icon: <Award className="w-8 h-8" />
    },
    {
      title: 'Fully Insured',
      description: 'Comprehensive insurance coverage including public liability, employers liability, and professional indemnity.',
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: '24/7 Emergency',
      description: 'Round-the-clock emergency response team ready to assist when urgent issues arise.',
      icon: <Clock className="w-8 h-8" />
    },
    {
      title: 'Flexible Scheduling',
      description: 'We work around your schedule — including nights, weekends, and holidays.',
      icon: <Calendar className="w-8 h-8" />
    },
    {
      title: 'Tailored Solutions',
      description: 'Customised service plans designed around your specific needs, budget, and operational requirements.',
      icon: <Settings className="w-8 h-8" />
    },
    {
      title: 'Safety First',
      description: 'Rigorous safety protocols, regular equipment inspections, and continuous team training.',
      icon: <CheckCircle className="w-8 h-8" />
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-slate-950/75 backdrop-blur-md border-b border-white/10 shadow-xl' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
              <img
                src="/all_areas_partnershipaccess_logo.png"
                alt="All Areas Access"
                className="h-16 w-auto scale-[2] origin-left md:scale-[3.5] transition-transform"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('home')} className={`text-sm font-medium hover:text-blue-500 transition-colors text-white`}>Home</button>
              <button onClick={() => scrollToSection('about')} className={`text-sm font-medium hover:text-blue-500 transition-colors text-white`}>About</button>
              <button onClick={() => scrollToSection('services')} className={`text-sm font-medium hover:text-blue-500 transition-colors text-white`}>Services</button>
              <button onClick={() => scrollToSection('why-us')} className={`text-sm font-medium hover:text-blue-500 transition-colors text-white`}>Why Us</button>
              <button onClick={() => scrollToSection('contact')} className={`text-sm font-medium hover:text-blue-500 transition-colors text-white`}>Contact</button>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <a href="tel:02075114146" className={`flex items-center gap-2 text-sm font-medium text-white`}>
                <Phone className="w-4 h-4" />
                <span>0207 5114 146</span>
              </a>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white">Get Free Quote</Button>
                </DialogTrigger>
                <DialogContent className="max-w-lg">
                  <DialogHeader>
                    <DialogTitle>Get Your Free Quote</DialogTitle>
                  </DialogHeader>
                  <QuoteForm />
                </DialogContent>
              </Dialog>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className={`w-6 h-6 text-white`} />
              ) : (
                <Menu className={`w-6 h-6 text-white`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-950/90 backdrop-blur-xl border-t border-white/10 shadow-2xl">
            <div className="px-4 py-4 space-y-3">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 text-white/90 hover:text-blue-400 transition-colors font-medium">Home</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-white/90 hover:text-blue-400 transition-colors font-medium">About</button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left py-2 text-white/90 hover:text-blue-400 transition-colors font-medium">Services</button>
              <button onClick={() => scrollToSection('why-us')} className="block w-full text-left py-2 text-white/90 hover:text-blue-400 transition-colors font-medium">Why Us</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-white/90 hover:text-blue-400 transition-colors font-medium">Contact</button>
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white shadow-lg mt-4 border border-orange-400/50">Get Free Quote</Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src="/hero-rope-access.jpg"
            alt="IRATA Rope Access Technician"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            className="max-w-3xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-blue-600/90 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              <span>IRATA Certified Specialists</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Your Go-To Team for Expert Rope Access & High-Level Maintenance
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl">
              All Areas Access delivers safe, professional rope access and specialist support services for commercial, industrial, and residential clients. Free quotes and 24/7 emergency response available.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 transition-transform hover:scale-105 active:scale-95">
                    Get Your Free Quote
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-lg">
                  <DialogHeader>
                    <DialogTitle>Get Your Free Quote</DialogTitle>
                  </DialogHeader>
                  <QuoteForm />
                </DialogContent>
              </Dialog>

              <a href="tel:07572276319">
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-slate-900 px-8 transition-transform hover:scale-105 active:scale-95">
                  <Phone className="w-5 h-5 mr-2" />
                  Urgent: 07572 276 319
                </Button>
              </a>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-12 flex flex-wrap items-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-sm">IRATA Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-sm">Fully Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-sm">24/7 Available</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.span variants={fadeInUp} className="text-blue-600 font-semibold text-sm uppercase tracking-wider">About All Areas Access</motion.span>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-6">
                Trusted Professionals for Work at Height
              </motion.h2>
              <motion.div variants={fadeInUp} className="space-y-4 text-slate-600">
                <p>
                  All Areas Access was founded with a clear mission: to provide safe, reliable, and professional rope access services that businesses and property owners can trust. What began as a commitment to excellence in working at height has grown into a trusted name in specialist maintenance and access solutions.
                </p>
                <p>
                  Our team comprises highly skilled, <strong>IRATA-certified technicians</strong> who bring extensive experience to every project. We understand that working at height demands more than technical ability — it requires meticulous planning, rigorous safety protocols, and an unwavering focus on quality.
                </p>
                <p>
                  At All Areas Access, safety is never compromised. Every task we undertake follows strict industry standards and best practices, ensuring not only the protection of our team but also the integrity of your property and operations.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="mt-8 grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">10+</div>
                  <div className="text-sm text-slate-500 mt-1">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-slate-500 mt-1">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">100%</div>
                  <div className="text-sm text-slate-500 mt-1">Safety Record</div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-600 rounded-lg opacity-20" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-orange-500 rounded-lg opacity-20" />
              <img
                src="/service-maintenance.jpg"
                alt="Rope Access Work"
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section - New Accordion Style */}
      <ServicesSection />

      {/* Why Choose Us Section */}
      <section id="why-us" className="relative py-12 md:py-20 bg-slate-950 overflow-hidden text-white">
        {/* Modern Background Gradients */}
        <div className="absolute top-0 left-0 -translate-y-12 -translate-x-1/3 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 translate-y-1/3 translate-x-1/3 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-12 lg:mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-4">
              <span className="text-orange-400 font-semibold text-xs uppercase tracking-wider">Why Choose Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4 mt-2 text-white">
              Why Clients Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">All Areas Access</span>
            </h2>
            <p className="text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
              We combine expertise, safety, and reliability to deliver exceptional rope access services that exceed expectations.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors backdrop-blur-sm overflow-hidden"
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-blue-500/30 transition-all duration-300">
                    <div className="text-blue-400 group-hover:text-blue-300 transition-colors">{benefit.icon}</div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-200 transition-colors">{benefit.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Ready to Get Started?
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-slate-600 text-lg max-w-2xl mx-auto mb-8">
            Contact our team today for a free, no-obligation quote. We&apos;ll assess your requirements and provide a competitive, transparent estimate.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 transition-transform hover:scale-105 active:scale-95">
                  Get Your Free Quote Today
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-lg">
                <DialogHeader>
                  <DialogTitle>Get Your Free Quote</DialogTitle>
                </DialogHeader>
                <QuoteForm />
              </DialogContent>
            </Dialog>
            <a href="tel:07572276319">
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 transition-transform hover:scale-105 active:scale-95">
                Call Us: 07572 276 319
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-12 md:py-20 bg-slate-950 overflow-hidden">
        {/* Modern Background Gradients */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
                <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Contact Us</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-white leading-tight mt-2 mb-4">
                Let&apos;s Discuss Your Next <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">Project</span>
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-base md:text-lg text-slate-300 mb-8 leading-relaxed max-w-lg">
                We&apos;re here to help with all your rope access and specialist maintenance needs. Whether you need a quote, have a question, or require emergency assistance, our team is ready to assist.
              </motion.p>

              <div className="space-y-4">
                <motion.div variants={fadeInUp} className="group flex items-start gap-3 bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-colors backdrop-blur-sm">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-base">Phone</h4>
                    <p className="text-slate-300 text-sm mt-0.5">0207 5114 146</p>
                    <p className="text-xs text-orange-400 font-medium mt-1">Urgent Enquiries: 07572 276 319</p>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="group flex items-start gap-3 bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-colors backdrop-blur-sm">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-base">Email</h4>
                    <a href="mailto:info@allareasaccessltd.co.uk" className="text-slate-300 text-sm mt-0.5 hover:text-white transition-colors">info@allareasaccessltd.co.uk</a>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4">
                  <div className="group flex flex-col gap-2 bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-colors backdrop-blur-sm">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Clock className="w-4 h-4 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm">Office Hours</h4>
                      <p className="text-slate-400 text-xs mt-0.5">Mon – Fri: 08:00 – 18:00</p>
                      <p className="text-xs text-orange-400 font-medium mt-1">24/7 Emergency</p>
                    </div>
                  </div>

                  <div className="group flex flex-col gap-2 bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-colors backdrop-blur-sm">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <MapPin className="w-4 h-4 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm">Service Areas</h4>
                      <p className="text-slate-400 text-xs mt-0.5">Nationwide across the UK</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="relative rounded-3xl overflow-hidden mt-8 lg:mt-0"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            >
              <div className="absolute inset-0 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl pointer-events-none" />
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/30 rounded-full blur-[60px] pointer-events-none" />

              <div className="relative p-6 lg:p-8 z-10">
                <h3 className="text-2xl font-bold text-white mb-2">Send Us a Message</h3>
                <p className="text-sm text-slate-300 mb-6">Fill out the form below and we&apos;ll be in touch shortly.</p>
                <QuoteForm theme="glass" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Accreditations Section */}
      <section className="py-16 bg-slate-50 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Our Accreditations & Commitments</h3>
            <p className="text-slate-600">Trusted, certified, and fully insured for your peace of mind</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-1">IRATA Certified</h4>
              <p className="text-sm text-slate-500">Global rope access standard</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-1">Fully Insured</h4>
              <p className="text-sm text-slate-500">Comprehensive coverage</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-1">BS 7985 Compliant</h4>
              <p className="text-sm text-slate-500">Industry safety standards</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <HardHat className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-1">Work at Height</h4>
              <p className="text-sm text-slate-500">Regulations 2005</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-8 mt-2">
                <img
                  src="/all_areas_partnershipaccess_logo.png"
                  alt="All Areas Access"
                  className="h-20 w-auto scale-[2] md:scale-[2.5] origin-left"
                />
              </div>
              <p className="text-slate-400 text-sm">
                Professional rope access and specialist maintenance services. IRATA-certified technicians delivering safe, efficient solutions.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><button onClick={() => scrollToSection('home')} className="hover:text-white transition-colors">Home</button></li>
                <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">About Us</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">Services</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">Contact</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>IRATA Rope Access</li>
                <li>High Level Cleaning</li>
                <li>Window Cleaning</li>
                <li>Emergency Response</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  0207 5114 146
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  info@allareasaccessltd.co.uk
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} All Areas Access Partnership Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm text-slate-500">
              <span>IRATA Certified</span>
              <span>•</span>
              <span>Fully Insured</span>
              <span>•</span>
              <span>24/7 Emergency</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}



export default App
