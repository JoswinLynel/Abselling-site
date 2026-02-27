import React, { useState } from 'react'
import { CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'

export function QuoteForm({ serviceName, theme = 'light' }: { serviceName?: string, theme?: 'light' | 'glass' }) {
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setSubmitted(true)
    }

    if (submitted) {
        return (
            <div className="text-center py-12">
                <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${theme === 'glass' ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-600'}`}>
                    <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className={`text-2xl font-bold mb-3 ${theme === 'glass' ? 'text-white' : 'text-slate-900'}`}>Thank You!</h3>
                <p className={theme === 'glass' ? 'text-slate-300' : 'text-slate-600'}>
                    We've received your enquiry {serviceName ? `for ${serviceName}` : ''} and will get back to you within 24 hours.
                </p>
            </div>
        )
    }

    const labelClass = theme === 'glass' ? 'text-slate-200 font-medium' : 'text-slate-700 font-semibold'
    const inputClass = theme === 'glass'
        ? 'bg-white/5 border-white/10 text-white placeholder:text-slate-400 focus-visible:ring-blue-400/50 focus-visible:border-blue-400/50 shadow-inner rounded-xl backdrop-blur-sm transition-all h-10'
        : 'bg-slate-50 border-slate-200 focus-visible:ring-blue-500 shadow-sm rounded-lg h-10'

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="name" className={labelClass}>Full Name *</Label>
                    <Input id="name" placeholder="Your name" required className={inputClass} />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="phone" className={labelClass}>Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="Your phone" className={inputClass} />
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="email" className={labelClass}>Email Address *</Label>
                <Input id="email" type="email" placeholder="your@email.com" required className={inputClass} />
            </div>

            <div className="space-y-2">
                <Label htmlFor="company" className={labelClass}>Company Name</Label>
                <Input id="company" placeholder="Your company (optional)" className={inputClass} />
            </div>

            <div className="space-y-2">
                <Label htmlFor="service" className={labelClass}>Service Required</Label>
                <Select defaultValue={serviceName}>
                    <SelectTrigger className={inputClass}>
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

            <div className="space-y-2">
                <Label htmlFor="message" className={labelClass}>Message / Project Details</Label>
                <Textarea id="message" placeholder="Tell us about your project..." rows={3} className={`${inputClass} resize-none min-h-[100px] py-2`} />
            </div>

            <Button
                type="submit"
                size="lg"
                className={`w-full font-semibold rounded-xl transition-all active:scale-[0.98] h-11 text-base ${theme === 'glass'
                    ? 'bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 text-white shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] border-0'
                    : 'bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg'
                    }`}
            >
                Send Enquiry
            </Button>
        </form>
    )
}
