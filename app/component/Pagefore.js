'use client';

import GradientLine from "../svg/GradientLine";
import GradientLineRight from "../svg/GradientLineRight";
import GridBackground from "../svg/GridBackground";
import SparkIcon from "../svg/SparkIcon";
import button_bg_img from './image/button_bg_img.png';

import Image from 'next/image';
import Group from './image/Group 11.png';

const Pagefore = () => {

  return (
    <section className="relative w-full h-screen">
      <GridBackground />

      <div className="flex flex-col items-center justify-center gap-6">
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

      <div className="flex items-center justify-center gap-30 mt-10">
        <div className="flex items-center justify-center ">
          <div className="">
            <div className="pl-18">
              <svg width="144" height="121" viewBox="0 0 144 121" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.67334 0.122314C7.06084 35.2536 44.4733 110.58 143.023 119.888" stroke="#DEE2E8" stroke-width="1.36875" />
              </svg>
            </div>
            <div>
              <svg width="219" height="28" viewBox="0 0 219 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.581543 0.36084C12.9003 20.2077 153.197 21.9868 218.897 26.3668" stroke="#DEE2E8" stroke-width="1.36875" />
              </svg>
            </div>
            <div className="pl-1">
              <svg width="214" height="30" viewBox="0 0 214 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.233398 29.3296C31.0303 18.1515 147.374 -3.11002 213.074 1.26998" stroke="#DEE2E8" stroke-width="1.36875" />
              </svg>
            </div>
            <div className="pl-19">
              <svg width="134" height="113" viewBox="0 0 134 113" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.656738 112.225C8.41299 85.7623 32.138 20.5185 133.425 0.671631" stroke="#DEE2E8" stroke-width="1.36875" />
              </svg>
            </div>
          </div>
          <div className="border-[#E4F2FF] border-7 rounded-[72px] ">
            <button
              className="relative w-[225.84375px] h-[65.69999694824219px] rounded-[72px] flex items-center justify-center text-white text-[16px] leading-[160%] overflow-hidden bg-[linear-gradient(180deg,#0F74EF_0%,#1994E7_100%)] cursor-pointer
                shadow-[0px_3.71px_4.85px_0px_#57B1FF27,0px_10.27px_13.4px_0px_#57B1FF38,0px_24.72px_32.26px_0px_#57B1FF30,0px_42px_107px_0px_#57B1FF57,inset_0px_1px_4px_2px_#9ACDF9,inset_0px_1px_18px_2px_#9AD0FF]">
              {/* Image layer (opacity 40%) */}
              <span
                className="absolute inset-0 opacity-40 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${button_bg_img.src})`,
                }} />

              {/* Text layer */}
              <span className="relative z-10 text-[#FFFFFF] font-normal text-[21.9px] leading-[160%] tracking-[0em] text-center">
                Configure
              </span>
            </button>
          </div>
        </div>

        <div className="relative">
          <Image src={Group} alt="Group 11" className="h-118 w-118" />
        </div>
      </div>
    </section>
  );
};

export default Pagefore;


