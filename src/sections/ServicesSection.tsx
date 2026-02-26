import { useState } from 'react'
import { Droplets, Bug, Sparkles, CloudRain, Building2, Layers } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { ServiceFlipCard } from '@/components/ui/service-flip-card'

interface Service {
  id: string
  title: string
  summary: string
  icon: React.ReactNode
  highlights: string[]
  benefits: string[]
  imageUrl: string
  themeColor: string
}

const services: Service[] = [
  {
    id: 'pressure-washing',
    title: 'Pressure Washing',
    summary: 'Professional high-pressure cleaning for driveways, patios, commercial premises and building exteriors.',
    icon: <Droplets className="w-5 h-5" />,
    highlights: [
      'Driveways & patios',
      'Commercial premises',
      'Graffiti removal',
    ],
    benefits: [
      'Removes stubborn dirt, grime & staining',
      'Restores surfaces to like-new condition',
      'Commercial & residential service',
      'Graffiti removal specialists',
      'Eco-friendly cleaning agents',
      'Prepares surfaces for sealing & coating',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&auto=format&fit=crop&q=80',
    themeColor: '210 70% 45%',
  },
  {
    id: 'pest-control',
    title: 'Pest Control',
    summary: 'Comprehensive pest management for birds, rodents and insects including proofing, deterrents and removal.',
    icon: <Bug className="w-5 h-5" />,
    highlights: [
      'Bird proofing & netting',
      'Rodent control',
      'Insect treatment',
    ],
    benefits: [
      'Humane bird proofing & deterrents',
      'Rodent & insect eradication',
      'Netting & spike installations',
      'Contamination cleaning & disinfection',
      'Compliant with wildlife legislation',
      'Long-lasting protection guarantees',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&auto=format&fit=crop&q=80',
    themeColor: '140 50% 35%',
  },
  {
    id: 'window-cleaning',
    title: 'Window Cleaning',
    summary: 'Professional window cleaning for high-rise and commercial buildings using rope access and water-fed pole systems.',
    icon: <Sparkles className="w-5 h-5" />,
    highlights: [
      'High-rise specialist',
      'Water-fed pole systems',
      'Glass restoration',
    ],
    benefits: [
      'Streak-free results every time',
      'Safe rope access to all heights',
      'No scaffolding required',
      'Glass restoration & stain removal',
      'Regular maintenance contracts',
      'Enhanced building appearance',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&auto=format&fit=crop&q=80',
    themeColor: '200 65% 42%',
  },
  {
    id: 'gutter-drainage',
    title: 'Gutter & Drainage Maintenance',
    summary: 'Complete gutter cleaning, downpipe clearance, drainage inspection and preventative maintenance programmes.',
    icon: <CloudRain className="w-5 h-5" />,
    highlights: [
      'Blockage removal',
      'Downpipe clearance',
      'CCTV drainage surveys',
    ],
    benefits: [
      'Prevents water damage to property',
      'Eliminates damp & mould issues',
      'High-pressure jetting available',
      'CCTV inspection for blockages',
      'Scheduled maintenance programmes',
      '24/7 emergency service',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=600&auto=format&fit=crop&q=80',
    themeColor: '195 55% 38%',
  },
  {
    id: 'high-level-cleaning',
    title: 'High Level Cleaning',
    summary: 'Specialist cleaning for warehouses, factories and commercial buildings including beams, steelwork and dust extraction.',
    icon: <Building2 className="w-5 h-5" />,
    highlights: [
      'Warehouse & factory cleaning',
      'Steelwork & beams',
      'Dust extraction',
    ],
    benefits: [
      'Improved workplace safety',
      'Reduced fire hazards from dust build-up',
      'HEPA-filtered vacuum systems',
      'Compliance with H&S regulations',
      'Out-of-hours & weekend scheduling',
      'Regular cleaning programmes available',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&auto=format&fit=crop&q=80',
    themeColor: '170 50% 32%',
  },
  {
    id: 'cladding-facade',
    title: 'Cladding & Façade Cleaning',
    summary: 'Expert cleaning and restoration for all cladding types, render, stone and brick façades using specialist techniques.',
    icon: <Layers className="w-5 h-5" />,
    highlights: [
      'Façade restoration',
      'Render & brick cleaning',
      'Protective coatings',
    ],
    benefits: [
      'Restores building appearance',
      'Extends cladding lifespan',
      'Soft wash & steam cleaning methods',
      'Heritage-approved techniques',
      'Pollution & stain removal',
      'Protective coatings available',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=80',
    themeColor: '220 55% 38%',
  },
]

function QuoteForm({ serviceName }: { serviceName?: string }) {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">Thank You!</h3>
        <p className="text-slate-600">We&apos;ve received your enquiry for {serviceName} and will get back to you within 24 hours.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your name"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
          <input
            type="tel"
            className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your phone"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">Email Address *</label>
        <input
          type="email"
          className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="your@email.com"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">Company Name</label>
        <input
          type="text"
          className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Your company (optional)"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">Message / Project Details</label>
        <textarea
          className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Tell us about your project..."
          rows={4}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-md transition-colors"
      >
        Send Enquiry
      </button>
    </form>
  )
}

export function ServicesSection() {
  const [flippedCard, setFlippedCard] = useState<string | null>(null)
  const [quoteService, setQuoteService] = useState<string | null>(null)
  const [quoteDialogOpen, setQuoteDialogOpen] = useState(false)

  const handleFlip = (serviceId: string) => {
    setFlippedCard(flippedCard === serviceId ? null : serviceId)
  }

  const handleQuote = (serviceName: string) => {
    setQuoteService(serviceName)
    setQuoteDialogOpen(true)
  }

  return (
    <section id="services" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Specialist Rope Access Solutions
          </h2>
          <p className="text-lg text-slate-600">
            From routine maintenance to emergency response, our IRATA-certified team delivers safe, professional services for all your high-level access needs.
          </p>
        </div>

        {/* Flip Card Grid — 3 per row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <ServiceFlipCard
              key={service.id}
              title={service.title}
              summary={service.summary}
              imageUrl={service.imageUrl}
              icon={service.icon}
              highlights={service.highlights}
              benefits={service.benefits}
              themeColor={service.themeColor}
              isFlipped={flippedCard === service.id}
              onFlip={() => handleFlip(service.id)}
              onQuote={() => handleQuote(service.title)}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-4">
            Not sure which service you need? Contact us for expert advice.
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                Discuss Your Requirements
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-lg">
              <DialogHeader>
                <DialogTitle>Get Your Free Quote</DialogTitle>
              </DialogHeader>
              <QuoteForm />
            </DialogContent>
          </Dialog>
        </div>

        {/* Quote Dialog (triggered from flip card back) */}
        <Dialog open={quoteDialogOpen} onOpenChange={setQuoteDialogOpen}>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>Get Your Free Quote - {quoteService}</DialogTitle>
            </DialogHeader>
            <QuoteForm serviceName={quoteService ?? undefined} />
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}

export default ServicesSection
