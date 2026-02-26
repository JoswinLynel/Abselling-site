'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { CheckCircle2 } from 'lucide-react';

export interface ServiceFlipCardProps {
    title: string;
    summary: string;
    imageUrl: string;
    icon: React.ReactNode;
    highlights: string[];
    benefits: string[];
    themeColor: string;
    isFlipped: boolean;
    onFlip: () => void;
    onQuote: () => void;
}

const ServiceFlipCard = React.forwardRef<HTMLDivElement, ServiceFlipCardProps>(
    (
        {
            title,
            summary,
            imageUrl,
            icon,
            highlights,
            benefits,
            themeColor,
            isFlipped,
            onFlip,
            onQuote,
        },
        ref,
    ) => {
        return (
            <div
                ref={ref}
                style={{ '--theme-color': themeColor } as React.CSSProperties}
                className="w-full [perspective:2000px]"
            >
                <div
                    className={cn(
                        'relative w-full [transform-style:preserve-3d] transition-all duration-700 ease-in-out cursor-pointer',
                        isFlipped
                            ? '[transform:rotateY(180deg)]'
                            : '[transform:rotateY(0deg)]',
                    )}
                    onClick={onFlip}
                >
                    {/* ─── FRONT FACE ─── */}
                    <div
                        className={cn(
                            'relative w-full [backface-visibility:hidden] rounded-2xl overflow-hidden',
                            'bg-white border border-slate-200 shadow-md',
                            'transition-shadow duration-300',
                            !isFlipped && 'hover:shadow-xl',
                        )}
                    >
                        {/* Image area */}
                        <div className="relative w-full aspect-[16/10] overflow-hidden">
                            <img
                                src={imageUrl}
                                alt={title}
                                className="w-full h-full object-cover"
                            />
                            {/* Icon badge */}
                            <div
                                className="absolute top-4 left-4 w-10 h-10 rounded-lg flex items-center justify-center text-white shadow-lg"
                                style={{
                                    backgroundColor: `hsl(var(--theme-color))`,
                                }}
                            >
                                {icon}
                            </div>
                        </div>

                        {/* Content area */}
                        <div className="p-5 pb-6">
                            <h3 className="text-lg font-bold text-slate-900 mb-2">
                                {title}
                            </h3>
                            <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                {summary}
                            </p>
                            {/* Highlights with green checks */}
                            <div className="space-y-2">
                                {highlights.map((item, i) => (
                                    <div key={i} className="flex items-center gap-2 text-sm text-slate-700">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ─── BACK FACE ─── */}
                    <div
                        className={cn(
                            'absolute inset-0 w-full [backface-visibility:hidden] [transform:rotateY(180deg)]',
                            'rounded-2xl overflow-hidden',
                            'bg-white border border-slate-200 shadow-md',
                            'flex flex-col',
                        )}
                    >
                        {/* Colour strip at top */}
                        <div
                            className="w-full h-2 flex-shrink-0"
                            style={{
                                background: `linear-gradient(to right, hsl(var(--theme-color)), hsl(var(--theme-color) / 0.5))`,
                            }}
                        />

                        <div className="flex-1 flex flex-col p-5 pt-4 overflow-y-auto">
                            {/* Title row */}
                            <div className="flex items-center gap-3 mb-4">
                                <div
                                    className="w-9 h-9 rounded-lg flex items-center justify-center text-white flex-shrink-0"
                                    style={{
                                        background: `linear-gradient(135deg, hsl(var(--theme-color)), hsl(var(--theme-color) / 0.75))`,
                                    }}
                                >
                                    {icon}
                                </div>
                                <h3 className="text-base font-bold text-slate-900 leading-tight">
                                    {title}
                                </h3>
                            </div>

                            {/* Benefits list */}
                            <div className="space-y-2.5 flex-1">
                                {benefits.map((benefit, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-2.5 text-sm text-slate-700"
                                        style={{
                                            transform: isFlipped
                                                ? 'translateX(0)'
                                                : 'translateX(-10px)',
                                            opacity: isFlipped ? 1 : 0,
                                            transition: 'all 500ms ease',
                                            transitionDelay: `${index * 80 + 200}ms`,
                                        }}
                                    >
                                        <span
                                            className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                                            style={{ backgroundColor: `hsl(var(--theme-color))` }}
                                        />
                                        <span className="font-medium leading-snug">{benefit}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Quote CTA */}
                            <div className="mt-4 pt-3 border-t border-slate-200">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onQuote();
                                    }}
                                    className={cn(
                                        'w-full flex items-center justify-between rounded-lg px-4 py-2.5',
                                        'text-sm font-semibold text-white',
                                        'transition-all duration-300 hover:scale-[1.02] hover:shadow-md',
                                    )}
                                    style={{
                                        background: `linear-gradient(135deg, hsl(var(--theme-color)), hsl(var(--theme-color) / 0.8))`,
                                    }}
                                >
                                    Get a Quote
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    },
);
ServiceFlipCard.displayName = 'ServiceFlipCard';

export { ServiceFlipCard };
