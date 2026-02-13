'use client';

// import "slick-carousel/slick/slick-theme.css";
// import "slick-carousel/slick/slick.css";
import Image from 'next/image';
import Group from './image/Group.png';
import frame122905 from './image/frame122905.png';
import button_bg_img from './image/button_bg_img.png';
import fi_99744 from './image/fi_99744.png';
import fi_5236921 from './image/fi_5236921.png';
import fi_14752390 from './image/fi_14752390.png';
import fi_15862284 from './image/fi_15862284.png';
import fi_11168291 from './image/fi_11168291.png';
import fi_1161439 from './image/fi_1161439.png';

import SparkIcon from '../svg/SparkIcon';
import GradientLine from '../svg/GradientLine';
import GradientLineRight from '../svg/GradientLineRight';
import MaskedBackground from '../svg/MaskedBackground';

const HeroPage = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* HERO WRAPPER */}
      <div>
        <div className="flex flex-col items-center pt-22">

          {/* Top Badge Row */}
          <div className='flex'>

            {/* Left gradient line */}
            <GradientLine className="w-24 h-1.5 mx-auto mt-5" />

            {/* Badge container */}
            <div className="w-84.5 h-11.5 flex items-center gap-2 rounded-[50px] border py-2.5 px-5 bg-[rgba(255,255,255,1)] border-[rgba(234,240,243,1)] shadow-[0px_0px_0px_1px_rgba(0,143,246,0.18),0px_2px_0px_0px_rgba(242,245,250,1)]">
              {/* Gradient text inside badge */}
              <span className="flex items-center gap-2 font-normal text-[16px] leading-[160%] tracking-[0%] bg-[linear-gradient(180deg,#0073FF_0%,#0DA2FF_100%)] bg-clip-text text-transparent">
                {/* Spark icon */}
                <SparkIcon className="w-4 h-4" />
                Introducing Autonomous Workflows
              </span>
            </div>
            {/* Right gradient line */}
            <GradientLineRight className="w-24 h-1.5 mx-auto mt-5" />
          </div>

          {/* Main Heading */}
          <div className="pt-4">
            <h1 className="font-medium text-[80px] leading-[115%] tracking-[-1%] text-center">

              {/* Line 1 */}
              <span className="inline-flex items-center justify-center gap-3 whitespace-nowrap">
                <span className="bg-[rgba(5,14,20,1)] bg-clip-text text-transparent">
                  AI
                </span>

                {/* Rotated icon */}
                <span className='inline-flex items-center justify-center w-[60.163238571043195px] h-[60.163238571043195px] rotate-[-16.91deg] opacity-100 rounded-[14.31px] bg-[linear-gradient(180deg,#0073FF_0%,#0DA2FF_100%)]
                border-transparent shadow-[0px_0px_0px_5.96px_#E4F2FF,0px_0px_0px_4.77px_#E0E9F2,0px_4.43px_5.78px_0px_#57B1FF27,0px_12.25px_15.98px_0px_#57B1FF38,0px_29.49px_38.47px_0px_#57B1FF30,0px_50.09px_127.62px_0px_#57B1FF57,inset_0px_1.19px_4.77px_2.39px_#D2EAFF,inset_0px_1.19px_21.47px_2.39px_#D2EAFF]'
                  style={{
                    borderImageSlice: 1,
                    borderImageSource: `
                    linear-gradient(180deg, rgba(0,136,255,0.3) 0%, rgba(119,192,255,0.3) 100%),
                   radial-gradient(63.87% 50% at 52.08% 100%, #FFFFFF 0%, rgba(255,255,255,0) 100%)`,
                  }}>

                  {/* Background image layer (opacity overlay) */}
                  <span
                    className="absolute inset-0 opacity-40 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${button_bg_img.src})`,
                    }} />
                  {/* Foreground icon */}
                  <Image className='rotate-[16.91deg]' src={Group} alt="loading ..." />
                </span>

                {/* Gradient text "Teammates" */}
                <span className="bg-[linear-gradient(90deg,#050E14_59.62%,#67BFFF_100%)] bg-clip-text text-transparent">
                  Teammates.
                </span>
              </span>
              <br />

              {/* Line 2 */}
              <span className="bg-[rgba(65,71,76,1)] bg-clip-text text-transparent">Super Results.</span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className='pt-6'>
            <p className="font-inter font-medium text-[18px] leading-[160%] tracking-[0%] text-center text-[#4B4F57]">
              Human-like AI for interviews, customer support, and sales available 24/7, <br /> across any channel, in 50+ languages.
            </p>
          </div>
        </div>

        {/* MAIN CARD AREA */}
        <div className='flex items-center justify-center pt-10'>
          {/* Left small cards */}
          <div className='flex flex-col gap-22'>

            {/* MCP Integrations */}
            <div className="flex items-center">
              <div className="relative -top-7">
                <div className='flex items-center w-55 h-14 gap-1.5 pt-4 pr-2 pb-4 pl-4 rounded-[60px] bg-white shadow-[-0.5px_-0.5px_0px_0px_#0000000D,10px_10px_21.21px_-3.75px_#0000000E,1.21px_1.21px_1.71px_-1.5px_#0000003F,0.44px_0.44px_0.63px_-1px_#00000042,inset_-1px_-1px_1px_0px_#00000026,inset_1px_1px_1px_0px_#FFFFFF]'>
                  <span className=''>
                    <Image className="inline-block" src={fi_99744} alt="loading ..." />
                  </span>
                  <button className="text-[#050E14] font-normal text-[20px] leading-[115%] tracking-[-1%]">
                    MCP Integrations
                  </button>
                </div>
              </div>
              <div>
                <svg width="170" height="61" viewBox="0 0 170 61" fill="none" xmlns="http://www.w3.org/2000/svg" className="block" >
                  <path d="M170 59.5H107.5C95.3497 59.5 85.5 49.6503 85.5 37.5V23C85.5 10.8497 75.6503 1 63.5 1H0" stroke="#DEE1E4" strokeWidth="2" />
                </svg>
              </div>
            </div>

            {/* Workflows */}
            <div className='flex items-center ml-12'>
              <div className="relative">
                <div className='w-55 h-14 flex items-center gap-1.5 rounded-[60px] pt-4 pr-2 pb-4 pl-4 bg-white shadow-[-0.5px_-0.5px_0px_0px_#0000000D,10px_10px_21.21px_-3.75px_#0000000E,1.21px_1.21px_1.71px_-1.5px_#0000003F,0.44px_0.44px_0.63px_-1px_#00000042,inset_-1px_-1px_1px_0px_#00000026,inset_1px_1px_1px_0px_#FFFFFF]'>
                  <span className=''>
                    <Image className="inline-block" src={fi_5236921} alt="loading ..." />
                  </span>
                  <button className="text-[#050E14] font-normal text-[20px] leading-[115%] tracking-[-1%]">
                    Workflows
                  </button>
                </div>
              </div>
              <svg width="120" height="1" viewBox="0 0 120 1" fill="none" xmlns="http://www.w3.org/2000/svg" className="block" >
                <line x1="0" y1="0.5" x2="120" y2="0.5" stroke="#CCCCCC" strokeDasharray="4 4" />
              </svg>
            </div>

            {/* Company Brain */}
            <div className='flex items-center'>
              <div className="relative -bottom-7">
                <div className='w-55 h-14 flex items-center gap-1.5 rounded-[60px] pt-4 pr-2 pb-4 pl-4 bg-white shadow-[-0.5px_-0.5px_0px_0px_#0000000D,10px_10px_21.21px_-3.75px_#0000000E,1.21px_1.21px_1.71px_-1.5px_#0000003F,0.44px_0.44px_0.63px_-1px_#00000042,inset_-1px_-1px_1px_0px_#00000026,inset_1px_1px_1px_0px_#FFFFFF]'>
                  <span className=''>
                    <Image className="inline-block" src={fi_14752390} alt="loading ..." />
                  </span>
                  <button className="text-[#050E14] font-normal text-[20px] leading-[115%] tracking-[-1%]">
                    Company Brain
                  </button>
                </div>
              </div>
              <svg width="170" height="61" viewBox="0 0 170 61" fill="none" xmlns="http://www.w3.org/2000/svg" className="block" >
                <path d="M0 59.5H62.5C74.6503 59.5 84.5 49.6503 84.5 37.5V23C84.5 10.8497 94.3497 1 106.5 1H170" stroke="#DEE1E4" strokeWidth="2" fill="none" />
              </svg>
            </div>
          </div>

          {/* Main card (AI teammate) */}
          <div className='relative'>
            <div className='flex items-center w-[320px] h-107.5 rounded-[74px] bg-[#E4F2FF]'>
              <div className='flex items-center justify-center absolute left-1/2 -translate-x-1/2 w-75 h-102.5 rounded-[74px] bg-[#FFFFFF] shadow-[-0.5px_-0.5px_0px_0px_#0000000D,10px_10px_21.21px_-3.75px_#0000000E,5.9px_5.9px_8.35px_-3px_#00000031,2.66px_2.66px_3.76px_-2.25px_#0000003B,1.21px_1.21px_1.71px_-1.5px_#0000003F,0.44px_0.44px_0.63px_-1px_#00000042,inset_-1px_-1px_1px_0px_#00000026,inset_1px_1px_1px_0px_#FFFFFF]'>
                {/* background layer */}
                <MaskedBackground className="absolute object-cover object-center -left-2 z-0 " />

                {/* foreground content */}
                <div className="relative z-10">
                  <Image className="" src={frame122905} alt="loading ..." />

                  <div className='pt-12'>
                    <div className="border-[#E4F2FF] border-5 rounded-[72px]">
                      <button
                        className="relative w-[177.853759765625px] h-12 rounded-[72px] flex items-center justify-center text-white text-[16px] leading-[160%] overflow-hidden bg-[linear-gradient(180deg,#0F74EF_0%,#1994E7_100%)] cursor-pointer
                        shadow-[0px_3.71px_4.85px_0px_#57B1FF27,0px_10.27px_13.4px_0px_#57B1FF38,0px_24.72px_32.26px_0px_#57B1FF30,0px_42px_107px_0px_#57B1FF57,inset_0px_1px_4px_2px_#9ACDF9,inset_0px_1px_18px_2px_#9AD0FF]">
                        {/* Image layer (opacity 40%) */}
                        <span
                          className="absolute inset-0 opacity-40 bg-cover bg-center"
                          style={{
                            backgroundImage: `url(${button_bg_img.src})`,
                          }} />

                        {/* Text layer */}
                        <span className="relative z-10">
                          AI teammate
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right small cards */}
          <div className='flex flex-col gap-22'>

            {/* Omni-channel */}
            <div className='flex items-center'>
              <div>
                <svg width="170" height="61" viewBox="0 0 170 61" fill="none" xmlns="http://www.w3.org/2000/svg" className="block" >
                  <path d="M0 59.5H62.5C74.6503 59.5 84.5 49.6503 84.5 37.5V23C84.5 10.8497 94.3497 1 106.5 1H170" stroke="#DEE1E4" strokeWidth="2" fill="none" />
                </svg>
              </div>
              <div className="relative -top-7">
                <div className='w-55 h-14 flex items-center gap-1.5 rounded-[60px] pt-4 pr-2 pb-4 pl-4 bg-white shadow-[-0.5px_-0.5px_0px_0px_#0000000D,10px_10px_21.21px_-3.75px_#0000000E,1.21px_1.21px_1.71px_-1.5px_#0000003F,0.44px_0.44px_0.63px_-1px_#00000042,inset_-1px_-1px_1px_0px_#00000026,inset_1px_1px_1px_0px_#FFFFFF]'>
                  <span className=''>
                    <Image className="inline-block" src={fi_15862284} alt="loading ..." />
                  </span>
                  <button className="text-[#050E14] font-normal text-[20px] leading-[115%] tracking-[-1%]">
                    Omni-channel
                  </button>
                </div>
              </div>
            </div>

            {/* Policies & Approval */}
            <div className='flex items-center'>
              <div>
                <svg width="120" height="1" viewBox="0 0 120 1" fill="none" xmlns="http://www.w3.org/2000/svg" className="block" >
                  <line x1="0" y1="0.5" x2="120" y2="0.5" stroke="#CCCCCC" strokeDasharray="4 4" />
                </svg>
              </div>
              <div className="relative">
                <div className='w-58.25 h-14 flex items-center gap-1.5 rounded-[60px] pt-4 pr-2 pb-4 pl-4 bg-white shadow-[-0.5px_-0.5px_0px_0px_#0000000D,10px_10px_21.21px_-3.75px_#0000000E,1.21px_1.21px_1.71px_-1.5px_#0000003F,0.44px_0.44px_0.63px_-1px_#00000042,inset_-1px_-1px_1px_0px_#00000026,inset_1px_1px_1px_0px_#FFFFFF]'>
                  <span className=''>
                    <Image className="inline-block" src={fi_11168291} alt="loading ..." />
                  </span>
                  <button className="text-[#050E14] font-normal text-[20px] leading-[115%] tracking-[-1%]">
                    Policies & Approval
                  </button>
                </div>
              </div>
            </div>

            {/* Audit Trail  */}
            <div className="flex items-center">
              <div>
                <svg width="170" height="61" viewBox="0 0 170 61" fill="none" xmlns="http://www.w3.org/2000/svg" className="block" >
                  <path d="M170 59.5H107.5C95.3497 59.5 85.5 49.6503 85.5 37.5V23C85.5 10.8497 75.6503 1 63.5 1H0" stroke="#DEE1E4" strokeWidth="2" />
                </svg>
              </div>
              <div className="relative -bottom-7">
                <div className='w-55 h-14 flex items-center gap-1.5 rounded-[60px] pt-4 pr-2 pb-4 pl-4 bg-white shadow-[-0.5px_-0.5px_0px_0px_#0000000D,10px_10px_21.21px_-3.75px_#0000000E,1.21px_1.21px_1.71px_-1.5px_#0000003F,0.44px_0.44px_0.63px_-1px_#00000042,inset_-1px_-1px_1px_0px_#00000026,inset_1px_1px_1px_0px_#FFFFFF]'>
                  <span className=''>
                    <Image className="inline-block" src={fi_1161439} alt="loading ..." />
                  </span>
                  <button className="text-[#050E14] font-normal text-[20px] leading-[115%] tracking-[-1%]">
                    Audit Trail
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPage;


