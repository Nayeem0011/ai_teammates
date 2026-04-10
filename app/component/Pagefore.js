'use client';

import GradientLine from "../svg/GradientLine";
import GradientLineRight from "../svg/GradientLineRight";
import GridBackground from "../svg/GridBackground";
import SparkIcon from "../svg/SparkIcon";

// import Image from 'next/image';
// import image49 from './image/image49.svg';

const Pagefore = () => {

  return (
    <section className="relative  w-full h-screen">
      <GridBackground />

      <div className="flex flex-col items-center justify-center gap-6 pt-20">
        <div className='flex justify-center'>
          {/* Left gradient line */}
          <GradientLine className="w-24 h-1.5 mt-5" />
          {/* Badge container */}
          <div className="w-41.25 h-11.5 flex items-center gap-2 rounded-[50px] border py-2.5 px-5 bg-[rgba(255,255,255,1)] border-[rgba(234,240,243,1)] shadow-[0px_0px_0px_1px_rgba(0,143,246,0.18),0px_2px_0px_0px_rgba(242,245,250,1)]">
            {/* Gradient text inside badge */}
            <span className="flex items-center gap-2 font-normal text-[16px] leading-[160%] tracking-[0%] bg-[linear-gradient(180deg,#0073FF_0%,#0DA2FF_100%)] bg-clip-text text-transparent">
              {/* Spark icon */}
              <SparkIcon className="w-4 h-4" />
              How It Works
            </span>
          </div>
          {/* Right gradient line */}
          <GradientLineRight className="w-24 h-1.5 mt-5" />
        </div>
        <div>
          <h1 className="text-[#050E14] font-medium text-[60px] leading-[115%] tracking-[-0.01em] text-center">How It Works</h1>
        </div>
        <div>
          <p className="text-[#4B4F57] font-normal text-[16px] leading-[160%] tracking-[0em] text-center">Discover how Teammates transforms your commands into action in three easy steps</p>
        </div>
      </div>

      <div></div>
    </section>
  );
};

export default Pagefore;