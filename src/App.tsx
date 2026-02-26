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
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ServicesSection } from '@/sections/ServicesSection'
import './App.css'

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
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
              <img
                src="https://images.squarespace-cdn.com/content/v1/5e7948b942e45b3538f61070/1587494588349-SVYDC0S96LW3V2J0SKUW/all_areas_partnershipaccess_logo.png?format=500w"
                alt="All Areas Access"
                className="h-12 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('home')} className={`text-sm font-medium hover:text-blue-500 transition-colors ${isScrolled ? 'text-slate-700' : 'text-white'}`}>Home</button>
              <button onClick={() => scrollToSection('about')} className={`text-sm font-medium hover:text-blue-500 transition-colors ${isScrolled ? 'text-slate-700' : 'text-white'}`}>About</button>
              <button onClick={() => scrollToSection('services')} className={`text-sm font-medium hover:text-blue-500 transition-colors ${isScrolled ? 'text-slate-700' : 'text-white'}`}>Services</button>
              <button onClick={() => scrollToSection('why-us')} className={`text-sm font-medium hover:text-blue-500 transition-colors ${isScrolled ? 'text-slate-700' : 'text-white'}`}>Why Us</button>
              <button onClick={() => scrollToSection('contact')} className={`text-sm font-medium hover:text-blue-500 transition-colors ${isScrolled ? 'text-slate-700' : 'text-white'}`}>Contact</button>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <a href="tel:02075114146" className={`flex items-center gap-2 text-sm font-medium ${isScrolled ? 'text-slate-700' : 'text-white'}`}>
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
                <X className={`w-6 h-6 ${isScrolled ? 'text-slate-900' : 'text-white'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isScrolled ? 'text-slate-900' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 text-slate-700 font-medium">Home</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-slate-700 font-medium">About</button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left py-2 text-slate-700 font-medium">Services</button>
              <button onClick={() => scrollToSection('why-us')} className="block w-full text-left py-2 text-slate-700 font-medium">Why Us</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-slate-700 font-medium">Contact</button>
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white mt-4">Get Free Quote</Button>
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
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-600/90 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              <span>IRATA Certified Specialists</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Your Go-To Team for Expert Rope Access & High-Level Maintenance
            </h1>

            <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl">
              All Areas Access delivers safe, professional rope access and specialist support services for commercial, industrial, and residential clients. Free quotes and 24/7 emergency response available.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8">
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
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900 px-8">
                  <Phone className="w-5 h-5 mr-2" />
                  Urgent: 07572 276 319
                </Button>
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-6 text-white/80">
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
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">About All Areas Access</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-6">
                Trusted Professionals for Work at Height
              </h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  All Areas Access was founded with a clear mission: to provide safe, reliable, and professional rope access services that businesses and property owners can trust. What began as a commitment to excellence in working at height has grown into a trusted name in specialist maintenance and access solutions.
                </p>
                <p>
                  Our team comprises highly skilled, <strong>IRATA-certified technicians</strong> who bring extensive experience to every project. We understand that working at height demands more than technical ability — it requires meticulous planning, rigorous safety protocols, and an unwavering focus on quality.
                </p>
                <p>
                  At All Areas Access, safety is never compromised. Every task we undertake follows strict industry standards and best practices, ensuring not only the protection of our team but also the integrity of your property and operations.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-6">
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
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-600 rounded-lg opacity-20" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-orange-500 rounded-lg opacity-20" />
              <img
                src="/service-maintenance.jpg"
                alt="Rope Access Work"
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - New Accordion Style */}
      <ServicesSection />

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-20 md:py-32 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
              Why Clients Choose All Areas Access
            </h2>
            <p className="text-slate-400">
              We combine expertise, safety, and reliability to deliver exceptional rope access services that exceed expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-colors">
                <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-white">{benefit.icon}</div>
                </div>
                <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-slate-400 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
            Contact our team today for a free, no-obligation quote. We&apos;ll assess your requirements and provide a competitive, transparent estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8">
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
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8">
                <Phone className="w-5 h-5 mr-2" />
                Urgent: 07572 276 319
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Contact Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-6">
                Get in Touch with All Areas Access
              </h2>
              <p className="text-slate-600 mb-8">
                We&apos;re here to help with all your rope access and specialist maintenance needs. Whether you need a quote, have a question, or require emergency assistance, our team is ready to assist.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Phone</h4>
                    <p className="text-slate-600">0207 5114 146</p>
                    <p className="text-sm text-orange-500 font-medium">Urgent Enquiries: 07572 276 319</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Email</h4>
                    <p className="text-slate-600">info@allareasaccessltd.co.uk</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Office Hours</h4>
                    <p className="text-slate-600">Monday – Friday: 08:00 – 18:00</p>
                    <p className="text-sm text-orange-500 font-medium">Emergency Service: Available 24/7</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Service Areas</h4>
                    <p className="text-slate-600">Nationwide coverage across the UK</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Send Us a Message</h3>
              <QuoteForm />
            </div>
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
              <div className="flex items-center gap-2 mb-4">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/5e7948b942e45b3538f61070/1587494588349-SVYDC0S96LW3V2J0SKUW/all_areas_partnershipaccess_logo.png?format=500w"
                  alt="All Areas Access"
                  className="h-10 w-auto"
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

// Quote Form Component
function QuoteForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">Thank You!</h3>
        <p className="text-slate-600">We&apos;ve received your enquiry and will get back to you within 24 hours.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Full Name *</Label>
          <Input id="name" placeholder="Your name" required />
        </div>
        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" placeholder="Your phone" />
        </div>
      </div>
      <div>
        <Label htmlFor="email">Email Address *</Label>
        <Input id="email" type="email" placeholder="your@email.com" required />
      </div>
      <div>
        <Label htmlFor="company">Company Name</Label>
        <Input id="company" placeholder="Your company (optional)" />
      </div>
      <div>
        <Label htmlFor="service">Service Required</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="rope-access">IRATA Rope Access</SelectItem>
            <SelectItem value="cleaning">High Level Cleaning</SelectItem>
            <SelectItem value="window-cleaning">Window Cleaning</SelectItem>
            <SelectItem value="cladding">Cladding Cleaning</SelectItem>
            <SelectItem value="facade">Façade Cleaning</SelectItem>
            <SelectItem value="gutter">Gutter Cleaning</SelectItem>
            <SelectItem value="roof-inspection">Roof Inspections</SelectItem>
            <SelectItem value="roof-repair">Roof Repairs</SelectItem>
            <SelectItem value="maintenance">High Level Maintenance</SelectItem>
            <SelectItem value="bird-control">Bird Control</SelectItem>
            <SelectItem value="installation">Installation Services</SelectItem>
            <SelectItem value="inspection">Inspection & Surveys</SelectItem>
            <SelectItem value="pressure-washing">Pressure Washing</SelectItem>
            <SelectItem value="emergency">Emergency Call-Out</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="message">Message / Project Details</Label>
        <Textarea id="message" placeholder="Tell us about your project..." rows={4} />
      </div>
      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
        Send Enquiry
      </Button>
    </form>
  )
}

export default App
