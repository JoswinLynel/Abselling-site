import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { Droplets, Bug, Sparkles, CloudRain, Building2, Layers, ChevronLeft, ChevronRight, Star, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { FlippingCard } from '@/components/ui/flipping-card'
import { QuoteForm } from '@/components/QuoteForm'
import { cn } from '@/lib/utils'

interface Service {
  id: string
  title: string
  summary: string
  icon: React.ReactNode
  highlights: string[]
  benefits: string[]
  images: string[]
  rating: number
  themeColor: string
}

const services: Service[] = [
  {
    id: 'pressure-washing',
    title: 'Pressure Washing',
    summary: 'Professional high-pressure cleaning for driveways, patios, commercial premises and building exteriors.',
    icon: <Droplets className="w-5 h-5" />,
    highlights: ['Driveways & patios', 'Commercial', 'Graffiti'],
    benefits: [
      'Removes stubborn dirt & grime',
      'Restores surfaces to like-new',
      'Eco-friendly cleaning agents',
    ],
    images: [
      '/images/services/pressure_washing_hero_1772223121820.png',
      'https://images.unsplash.com/photo-1596622247990-84877175438a?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1543332164-6e82f355badc?w=800&auto=format&fit=crop&q=80',
    ],
    rating: 4.9,
    themeColor: '210 70% 45%',
  },
  {
    id: 'pest-control',
    title: 'Pest Control',
    summary: 'Comprehensive pest management for birds, rodents and insects including proofing, deterrents and removal.',
    icon: <Bug className="w-5 h-5" />,
    highlights: ['Bird proofing', 'Rodents', 'Insects'],
    benefits: [
      'Humane bird proofing',
      'Rodent & insect eradication',
      'Long-lasting protection',
    ],
    images: [
      '/images/services/pest_control_hero_1772223139862.png',
      'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1596622247990-84877175438a?w=800&auto=format&fit=crop&q=80',
    ],
    rating: 4.8,
    themeColor: '140 50% 35%',
  },
  {
    id: 'window-cleaning',
    title: 'Window Cleaning',
    summary: 'Professional window cleaning for high-rise and commercial buildings using rope access and water-fed pole systems.',
    icon: <Sparkles className="w-5 h-5" />,
    highlights: ['High-rise', 'Water-fed pole', 'Restoration'],
    benefits: [
      'Streak-free results every time',
      'Safe rope access to all heights',
      'Regular maintenance contracts',
    ],
    images: [
      '/images/services/card_window_cleaning_1772222729322.png',
      'https://images.unsplash.com/photo-1594818379496-da1e345b0ded?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1621255743419-4cb297ab5dca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    rating: 5.0,
    themeColor: '200 65% 42%',
  },
  {
    id: 'gutter-drainage',
    title: 'Gutter & Drainage Maintenance',
    summary: 'Complete gutter cleaning, downpipe clearance, drainage inspection and preventative maintenance programmes.',
    icon: <CloudRain className="w-5 h-5" />,
    highlights: ['Blockage removal', 'CCTV surveys', 'Jetting'],
    benefits: [
      'Prevents water damage',
      'Eliminates damp & mould',
      '24/7 emergency service',
    ],
    images: [
      '/images/services/card_gutter_cleaning_1772222743163.png',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop&q=80',
    ],
    rating: 4.7,
    themeColor: '195 55% 38%',
  },
  {
    id: 'high-level-cleaning',
    title: 'High Level Cleaning',
    summary: 'Specialist cleaning for warehouses, factories and commercial buildings including beams, steelwork and dust extraction.',
    icon: <Building2 className="w-5 h-5" />,
    highlights: ['Warehouses', 'Steelwork', 'Dust extraction'],
    benefits: [
      'Improved workplace safety',
      'Reduced fire hazards',
      'HEPA-filtered vacuuming',
    ],
    images: [
      '/images/services/card_high_level_1772222756607.png',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&auto=format&fit=crop&q=80',
    ],
    rating: 4.9,
    themeColor: '170 50% 32%',
  },
  {
    id: 'cladding-facade',
    title: 'Cladding & Façade Cleaning',
    summary: 'Expert cleaning and restoration for all cladding types, render, stone and brick façades using specialist techniques.',
    icon: <Layers className="w-5 h-5" />,
    highlights: ['Restoration', 'Soft wash', 'Protective seals'],
    benefits: [
      'Restores building appearance',
      'Extends cladding lifespan',
      'Heritage-approved techniques',
    ],
    images: [
      '/images/services/card_facade_cleaning_1772222768918.png',
      'https://images.unsplash.com/photo-1626245084931-d8f89cda69cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1616423640778-28d1b53229b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    rating: 4.8,
    themeColor: '220 55% 38%',
  },
]

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
      staggerChildren: 0.15
    }
  }
}

export function ServicesSection() {
  const [quoteService, setQuoteService] = useState<string | null>(null)
  const [quoteDialogOpen, setQuoteDialogOpen] = useState(false)

  const handleQuote = (serviceName: string) => {
    setQuoteService(serviceName)
    setQuoteDialogOpen(true)
  }

  return (
    <section id="services" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Specialist Rope Access Solutions
          </h2>
          <p className="text-lg text-slate-600">
            From routine maintenance to emergency response, our IRATA-certified team delivers safe, professional services for all your high-level access needs.
          </p>
        </motion.div>

        {/* Flip Card Grid — 3 per row */}
        <motion.div
          className="flex flex-wrap gap-6 md:gap-8 justify-center items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={fadeInUp} className="flex justify-center">
              <FlippingCard
                width={350}
                height={460}
                className="w-full max-w-[350px]"
                frontContent={<GenericCardFront service={service} />}
                backContent={
                  <GenericCardBack
                    service={service}
                    onQuote={() => handleQuote(service.title)}
                  />
                }
              />
            </motion.div>
          ))}
        </motion.div>

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

function GenericCardFront({ service }: { service: Service }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const changeImage = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) return service.images.length - 1;
      if (nextIndex >= service.images.length) return 0;
      return nextIndex;
    });
  };

  const carouselVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  return (
    <div className="flex flex-col h-full w-full bg-white rounded-2xl overflow-hidden shadow-sm">
      {/* Image Carousel Section */}
      <div className="relative group h-[55%] min-h-[200px] w-full overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={currentIndex}
            src={service.images[currentIndex]}
            alt={service.title}
            custom={direction}
            variants={carouselVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute h-full w-full object-cover"
          />
        </AnimatePresence>

        {/* Carousel Navigation */}
        <div className="absolute inset-0 flex items-center justify-between p-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full bg-black/30 hover:bg-black/50 text-white"
            onClick={(e) => { e.stopPropagation(); changeImage(-1); }}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full bg-black/30 hover:bg-black/50 text-white"
            onClick={(e) => { e.stopPropagation(); changeImage(1); }}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Top Badges and Rating */}
        <div className="absolute top-3 left-3 flex gap-2 z-10">
          {service.highlights.slice(0, 1).map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-background/80 backdrop-blur-sm text-xs px-2.5 py-0.5 min-w-0 font-medium">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="absolute top-3 right-3 z-10">
          <Badge variant="secondary" className="flex items-center gap-1.5 bg-background/80 backdrop-blur-sm text-xs px-2.5 py-0.5 font-medium">
            <Star className="h-3.5 w-3.5 text-yellow-500 fill-yellow-500" /> {service.rating}
          </Badge>
        </div>

        {/* Pagination Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {service.images.map((_, index) => (
            <div
              key={index}
              className={cn(
                'h-1.5 rounded-full transition-all',
                currentIndex === index ? 'w-4 bg-white' : 'w-1.5 bg-white/50'
              )}
            />
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 flex-grow flex flex-col justify-between bg-white text-slate-900">
        <div className="space-y-3">
          <h3 className="text-xl font-bold leading-tight">{service.title}</h3>
          <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">
            {service.summary}
          </p>
        </div>

        <div className="flex justify-between items-center pt-4 mt-auto border-t border-slate-100">
          <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
            Safe & Certified
          </p>
          <div className="flex items-center text-xs text-slate-400 font-medium tracking-wide">
            Hover to flip <ArrowRight className="h-4 w-4 ml-1" />
          </div>
        </div>
      </div>
    </div>
  )
}

function GenericCardBack({ service, onQuote }: { service: Service; onQuote: () => void }) {
  return (
    <div className="flex flex-col h-full w-full bg-slate-50 p-6 rounded-2xl overflow-hidden shadow-sm">
      <div className="flex items-center gap-4 mb-5">
        <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
          {service.icon}
        </div>
        <h3 className="text-xl font-bold text-slate-900 leading-tight">{service.title}</h3>
      </div>

      <p className="text-sm text-slate-600 mb-6 leading-relaxed">
        Expert {service.title.toLowerCase()} solutions tailored for safe, efficient high-level access.
      </p>

      <div className="space-y-4 mb-6 flex-grow">
        {service.benefits.map((benefit, i) => (
          <div key={i} className="flex items-start gap-3 text-sm text-slate-700">
            <div className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
            <span className="leading-snug">{benefit}</span>
          </div>
        ))}
      </div>

      <div className="mt-auto pt-2">
        <Button
          onClick={(e) => {
            e.stopPropagation()
            onQuote()
          }}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold group text-sm h-12 shadow-sm"
        >
          Get a Quote
          <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  )
}
