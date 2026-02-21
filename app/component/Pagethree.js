'use client';

import { useState } from 'react';
import Image from 'next/image';
import cardImg from './image/cardImg.png';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { HiPause } from "react-icons/hi2";

const Pagethree = () => {
  const [active, setActive] = useState(0);

  const slides = [0, 1, 2, 3, 4, 5, 6, 7];

  const next = () =>
    setActive((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prev = () =>
    setActive((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <section className="w-full mb-20">
      <div className="flex items-center justify-center gap-8">

        <div className="relative w-166.75 h-125 rounded-[19.83px] bg-white shadow-[0px_10.48px_10.48px_0px_#00000017] overflow-hidden">
          <div className='flex flex-col'>
            {/* Card Stack Container */}
            <div className="relative flex items-center justify-center w-full h-full pt-10">
              {/* LEFT vertical slider indicator */}
              <div className="absolute left-5 flex flex-col gap-3 z-20">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`rounded-full transition-all duration-300 ${active === i
                      ? 'w-2.5 h-16.75 bg-blue-600'
                      : 'w-2.5 h-2.5 bg-[#D9D9D9]'
                      }`}
                  />
                ))}
              </div>

              {/* Inner stack wrapper */}
              <div className="relative h-74 w-136.25 flex items-center justify-center">
                {/* Back card 2 */}
                <div className="absolute h-74 w-136.25 rounded-[30px] bg-white opacity-30 scale-95 translate-y-6 shadow-lg" />
                {/* Back card 1 */}
                <div className="absolute h-74 w-136.25 rounded-[30px] bg-white opacity-60 scale-97 translate-y-3 shadow-lg" />
                {/* Main Card */}
                <div className="relative h-74 w-136.25 rounded-[30px] bg-white overflow-hidden">
                  <Image
                    src={cardImg}
                    alt="Team Section"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

              </div>

              {/* RIGHT vertical arrows */}
              <div className="absolute right-6 flex flex-col gap-18">
                <button
                  onClick={prev}
                  className="flex items-center justify-center w-6 h-6 border-2 border-[#B4B7B9] rounded-full hover:scale-105 transition cursor-pointer">
                  <IoIosArrowUp />
                </button>

                <button className="flex items-center justify-center w-6 h-6 border-2 border-[#B4B7B9] rounded-full hover:scale-105 transition cursor-pointer">
                  <HiPause />
                </button>

                <button
                  onClick={next}
                  className="flex items-center justify-center w-6 h-6 border-2 border-[#B4B7B9] rounded-full hover:scale-105 transition cursor-pointer">
                  <IoIosArrowDown />
                </button>
              </div>
            </div>

            <div className='pt-10 pl-8'>
              <h1 className='text-[#050E14] font-medium text-[24px] leading-[115%] tracking-[-1%]'>
                Seamless Integrations
              </h1>
              <p className='text-[#4B4F57] font-normal text-[16px] leading-[160%] tracking-[0%] pt-3'>
                Deliver natural, context-aware responses across every channel, ensuring a <br /> personal touch in every conversation.
              </p>
            </div>
          </div>
        </div>

        <div className="w-125.75 h-125 rounded-[19.83px] bg-white shadow-[0px_10.48px_10.48px_0px_#00000017]">

        </div>
      </div>
    </section>
  );
};

export default Pagethree;