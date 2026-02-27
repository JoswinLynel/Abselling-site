import React from "react";
import { cn } from "@/lib/utils";

interface FlippingCardProps {
    className?: string;
    height?: number | string;
    width?: number | string;
    frontContent?: React.ReactNode;
    backContent?: React.ReactNode;
}

export function FlippingCard({
    className,
    frontContent,
    backContent,
    height = 400,
    width = 350,
}: FlippingCardProps) {
    return (
        <div className="group/flipping-card [perspective:1000px] flex justify-center w-full">
            <div
                className={cn(
                    "relative rounded-2xl border border-neutral-200 bg-white shadow-lg transition-all duration-700 [transform-style:preserve-3d] group-hover/flipping-card:[transform:rotateY(180deg)] dark:border-neutral-800 dark:bg-neutral-950",
                    className
                )}
                style={{ height, width: width || '100%', maxWidth: '100%' }}
            >
                {/* Front Face */}
                <div className="absolute inset-0 h-full w-full rounded-[inherit] bg-white [transform-style:preserve-3d] [backface-visibility:hidden] [transform:rotateY(0deg)] dark:bg-zinc-950">
                    <div className="[transform:translateZ(50px)] h-full w-full">
                        {frontContent}
                    </div>
                </div>
                {/* Back Face */}
                <div className="absolute inset-0 h-full w-full rounded-[inherit] bg-slate-50 [transform-style:preserve-3d] [backface-visibility:hidden] [transform:rotateY(180deg)] dark:bg-zinc-950">
                    <div className="[transform:translateZ(50px)] h-full w-full">
                        {backContent}
                    </div>
                </div>
            </div>
        </div>
    );
}
