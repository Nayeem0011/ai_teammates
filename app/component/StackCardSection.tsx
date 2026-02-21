'use client';

import { useState } from 'react';
import Image from 'next/image';
import cardImg from './image/cardImg.png';

export default function StackCardSection() {
    const [active, setActive] = useState(0);

    const slides = [0, 1, 2, 3, 4, 5, 6, 7];

    const next = () =>
        setActive((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

    const prev = () =>
        setActive((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

    return (
        <section className="relative  flex justify-center py-24 bg-[#F5F7FA] overflow-hidden">

            {/* LEFT vertical slider indicator */}
            <div className="absolute left-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-20">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setActive(i)}
                        className={`w-2 rounded-full transition-all duration-300 ${active === i ? 'w-2.5 h-16.75 bg-blue-600' : 'h-2.5 w-2.5 bg-[#D9D9D9]'
                            }`}
                    />
                ))}
            </div>

            {/* Card Stack Container */}
            <div className="relative h-74 w-136.25 flex items-center justify-center">

                {/* Back card 2 */}
                {/* <div className="absolute h-74 w-136.25 rounded-[30px] bg-white opacity-30 scale-95 translate-y-6 shadow-lg" /> */}

                {/* Back card 1 */}
                {/* <div className="absolute h-74 w-136.25 rounded-[30px] bg-white opacity-60 scale-97 translate-y-3 shadow-lg" /> */}

                {/* Main Card */}
                <div className="relative h-74 w-136.25 rounded-[30px] bg-white shadow-[0_30px_80px_rgba(0,0,0,0.08)] overflow-hidden">

                    {/* Image */}
                    <Image
                        src={cardImg}
                        alt="Team Section"
                        fill
                        className="object-cover h-74 w-136.25"
                        priority
                    />

                    {/* Text bottom */}
                    {/* <div className="absolute bottom-14 left-16 max-w-xl">
            <h2 className="text-[32px] font-semibold text-black">
              Always Learning
            </h2>
            <p className="mt-4 text-gray-600 text-[16px] leading-relaxed">
              Transform raw data into clear insights in seconds. Empower smarter
              decisions with real-time, always-learning intelligence.
            </p>
          </div> */}
                </div>

                <div className="relative h-full">

                    <div className="absolute right-[-60px] top-1/2 -translate-y-1/2 flex flex-col gap-4">

                        <button
                            onClick={prev}
                            className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center hover:scale-105 transition"
                        >
                            ↑
                        </button>

                        <button
                            onClick={next}
                            className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center hover:scale-105 transition"
                        >
                            ↓
                        </button>

                    </div>
                </div>
            </div>
        </section>
    );
}