'use client';

import GradientLine from '../svg/GradientLine';
import GradientLineRight from '../svg/GradientLineRight';
import SparkIcon from '../svg/SparkIcon';

import Image from 'next/image';
import fi_4269808 from './image/fi_4269808.png';
import button_bg_img from './image/button_bg_img.png';
import fi_17274286 from './image/fi_17274286.png';
import fi_14752390 from './image/fi_14752390.png';
import logo_01 from './image/logo_01.png';
import logo_02 from './image/logo_02.png';
import logo_03 from './image/logo_03.png';
import logo_04 from './image/logo_04.png';
import logo_05 from './image/logo_05.png';
import logo_06 from './image/logo_06.png';
import logo_07 from './image/logo_07.png';
import logo_08 from './image/logo_08.png';
import logo_09 from './image/logo_09.png';
import logo_10 from './image/logo_10.png';
import maskgroup from './image/Mask group.png';
import frame122905 from './image/frame122905.png';
import { RiSendPlane2Fill } from 'react-icons/ri';

const Pagetwo = () => {
  const logos = [logo_01, logo_02, logo_03, logo_04, logo_05];
  const logos2 = [logo_06, logo_07, logo_08, logo_09, logo_10];

  return (
    <section className='w-full h-screen'>
      <div>
        <div className='flex flex-col gap-6 mt-20'>
          {/* Top Badge Row */}
          <div className='flex justify-center'>
            {/* Left gradient line */}
            <GradientLine className="w-24 h-1.5 mt-5" />
            {/* Badge container */}
            <div className="w-76.25 h-11.5 flex items-center gap-2 rounded-[50px] border py-2.5 px-5 bg-[rgba(255,255,255,1)] border-[rgba(234,240,243,1)] shadow-[0px_0px_0px_1px_rgba(0,143,246,0.18),0px_2px_0px_0px_rgba(242,245,250,1)]">
              {/* Gradient text inside badge */}
              <span className="flex items-center gap-2 font-normal text-[16px] leading-[160%] tracking-[0%] bg-[linear-gradient(180deg,#0073FF_0%,#0DA2FF_100%)] bg-clip-text text-transparent">
                {/* Spark icon */}
                <SparkIcon className="w-4 h-4" />
                Empower Your Workflow with AI
              </span>
            </div>
            {/* Right gradient line */}
            <GradientLineRight className="w-24 h-1.5 mt-5" />
          </div>

          <div className='flex justify-center'>
            {/* Main Heading */}
            <h1 className='font-medium text-[60px] leading-[115%] tracking-[-1%] text-center text-[#050E14]'>
              <span>Transform </span>
              <span className='relative inline-flex items-center justify-center w-[44.88309685607078px] h-[44.88309685607078px] opacity-100 rounded-[10.68px] bg-[linear-gradient(180deg,#0073FF_0%,#0DA2FF_100%)] border-transparent
                shadow-[0px_0px_0px_4.45px_#E4F2FF,0px_0px_0px_3.56px_#E0E9F2,0px_3.3px_4.31px_0px_#57B1FF27,0px_9.14px_11.92px_0px_#57B1FF38,0px_22px_28.7px_0px_#57B1FF30,0px_37.37px_95.21px_0px_#57B1FF57,inset_0px_0.89px_3.56px_1.78px_#D2EAFF,inset_0px_0.89px_16.02px_1.78px_#D2EAFF]'
                style={{
                  borderImageSlice: 1,
                  borderImageSource: `
                    linear-gradient(180deg, rgba(0,136,255,0.3) 0%, rgba(119,192,255,0.3) 100%),
                    radial-gradient(63.87% 50% at 52.08% 100%, #FFFFFF 0%, rgba(255,255,255,0) 100%)`,
                }}>

                {/* Background Image Layer */}
                <span
                  className="absolute inset-0 opacity-40 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${button_bg_img.src})`,
                  }} />

                {/* Foreground Icon */}
                <Image className='relative z-10' src={fi_4269808} alt="loading ..." />
              </span>
              <span> your operations </span>
              <br />
              <span className="text-[#41474C]">with the AI </span>
              <span>Workf</span>
              <span className=" relative inline-flex items-center w-13.25 h-8.5 rounded-[22px] border-[5px] border-[#0088FF] bg-white">
                <span className='flex items-center justify-center absolute w-7 h-7 bg-[#0088FF] rounded-full -left-1'>
                  <Image className='relative z-10' src={fi_17274286} alt="loading ..." />
                </span>
              </span>
              <span>rce</span>
            </h1>
          </div>

          <div className=''>
            <p className='text-[#4B4F57] font-normal text-[16px] leading-[160%] tracking-[0%] text-center'>
              Empower your business with AI Teammates — autonomous AI agents that <br /> revolutionize customer service, sales, and lead generation.
            </p>
          </div>
        </div>

        {/* Company Brain Button */}
        <div className='flex items-center justify-center mt-6'>
          <div className='w-55 h-14 flex items-center gap-1.5 rounded-[60px] pt-4 pr-2 pb-4 pl-4 bg-white shadow-[-0.5px_-0.5px_0px_0px_#0000000D,10px_10px_21.21px_-3.75px_#0000000E,1.21px_1.21px_1.71px_-1.5px_#0000003F,0.44px_0.44px_0.63px_-1px_#00000042,inset_-1px_-1px_1px_0px_#00000026,inset_1px_1px_1px_0px_#FFFFFF]'>
            <span className=''>
              <Image className="inline-block" src={fi_14752390} alt="loading ..." />
            </span>
            <button className="text-[#050E14] font-normal text-[20px] leading-[115%] tracking-[-1%]">
              Company Brain
            </button>
          </div>
        </div>

        {/* Main Cards */}
        <div className='flex items-center justify-center mt-1 gap-8'>
          {/* Left Card */}
          <div className='relative overflow-hidden w-125.75 h-110 rounded-[19.83px] bg-white shadow-[0px_10.48px_10.48px_0px_#00000017]'>
            <div className='flex flex-col items-center justify-center gap-6'>
              {/* Chat Card */}
              <div className='relative z-10 bg-[#F8FCFF] w-113.75 h-[216.00003051757812px] flex flex-col gap-5 p-4 rounded-[20px] border border-transparent -mt-5.5'>
                <p className='font-normal text-[15px] leading-[160%] tracking-[0%] bg-[linear-gradient(180deg,#F8FCFF_15.63%,#4B4C4D_82.85%)] bg-clip-text text-transparent'>
                  I received the wrong item in my order
                  and need help with a return. Can you
                  assist?
                </p>
                <p className='w-105.75 h-0 border border-[#E0E0E0]'></p>
                <p className='text-[#4B4C4D] font-normal text-[15px] leading-[160%] tracking-[0%]'>
                  I've located your order #4829 and initiated a return label which is being sent to your email now. A replacement has been shipped via priority delivery, and I've added a 15% discount to your account for the inconvenience.
                </p>
              </div>

              {/* Ask Input */}
              <div className='relative w-113.75 h-15.5'>
                {/* Glow background */}
                <div className="absolute inset-0  rounded-[31px] bg-white overflow-hidden border border-[#EDEDED]">
                  {/* Blue glow bottom-left */}
                  <div className="absolute left-1.25 top-8 w-37.5 h-8.5 bg-[#0088FF] opacity-50 blur-[12.4px] rounded-full" />
                  {/* Pink glow top-right */}
                  <div className="absolute right-13.75 -top-2.5 w-76.25 h-7.25 bg-[#FF82CA] opacity-10 blur-[12.4px] rounded-full" />
                  {/* Small pink glow top-left */}
                  <div className="absolute left-18.5 -top-6 w-22.5 h-7.25 bg-[#FF82CA] opacity-50 blur-[12.4px] rounded-full" />
                  {/* Gradient glow bottom-right */}
                  <div
                    className="absolute -right-12.5 -bottom-2.5 w-76.25 h-7.25 opacity-20 blur-[12.4px] rounded-full"
                    style={{
                      background: "linear-gradient(90deg, #0088FF 0%, #994E79 100%)",
                    }}
                  />
                  {/* Extra blue glow left outside */}
                  <div className="absolute -left-15.75 -top-17 w-24 h-24 bg-[#0088FF] blur-[12.4px] rounded-full" />
                  {/* Extra pink glow right outside */}
                  <div className="absolute -right-15.75 -top-14 w-24 h-24 bg-[#F386B8] blur-[12.4px] rounded-full" />
                </div>

                {/* TOP SMALL CARD */}
                <div className="">
                  <input className='w-108.75 h-10.5 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pr-10 pl-4 rounded-[46px] bg-white border border-[#EDEDED] shadow-[0px_0px_17.9px_0px_#00000026] text-[#CECECE] font-normal text-[16px] leading-[160%] tracking-[0%] outline-none'
                    placeholder='Ask me anything......' />
                  {/* Right action (example icon / button) */}
                  <RiSendPlane2Fill className="absolute right-4 top-1/2 -translate-y-1/2 text-[#0088FF] w-5 h-5 cursor-pointer" />
                </div>
              </div>

              {/* Info Section */}
              <div className='ml-6'>
                <h1 className='text-[#050E14] font-medium text-[24px] leading-[115%] tracking-[-1%]'>
                  Surprisingly Human
                </h1>
                <p className='text-[#4B4F57] font-normal text-[16px] leading-[160%] tracking-[0%] pt-3'>
                  Deliver natural, context-aware responses across every channel, ensuring a personal touch in every conversation.
                </p>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div>
            <div className='w-166.75 h-110 rounded-[19.83px] bg-white shadow-[0px_10.48px_10.48px_0px_#00000017]'>
              <div className='flex items-center justify-center mt-3'>
                {/* Left Logos */}
                <div className="flex flex-col items-center justify-center gap-5">
                  {logos.map((logo, index) => (
                    <p
                      key={index}
                      className="w-8.5 h-8.5 flex items-center justify-center gap-2.5 p-1.75 rounded-[19.83px] bg-white border border-[#EFEFEF] shadow-[0px_10.48px_10.48px_0px_#00000017]"
                    >
                      <Image
                        src={logo}
                        alt={`logo-${index + 1}`}
                        className="h-5 w-5"
                      />
                    </p>
                  ))}
                </div>

                {/* Middle Connector */}
                <div className='flex pl-5'>
                  <div className=''>
                    <div className="relative w-1.5 h-69.5 flex justify-center">
                      {/* Vertical Line */}
                      <div className="w-px h-full bg-[#E6E6E6]" />
                      {/* Top Dot */}
                      <div className="absolute top-0 w-1.5 h-1.5 bg-[#E6E6E6] rounded-full" />
                      {/* Bottom Dot */}
                      <div className="absolute bottom-0 w-1.5 h-1.5 bg-[#E6E6E6] rounded-full" />
                    </div>
                  </div>

                  <div className='-ml-1'>
                    <div className='pt-10'>
                      <svg width="91" height="29" viewBox="0 0 91 29" fill="none" xmlns="http://www.w3.org/2000/svg" className="block" >
                        <path d="M90.5 28.5V14.5C90.5 6.768 84.232 0.5 76.5 0.5H0" stroke="#E6E6E6" fill="none" />
                      </svg>
                    </div>

                    <div className='pt-28'>
                      <div className="w-15 h-px bg-[#E6E6E6]" />
                    </div>
                  </div>
                </div>

                <div className=''>
                  <div className='pl-16'>
                    <svg width="58" height="74" viewBox="0 0 58 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M51.8333 2.66663C51.8333 4.13939 53.0272 5.33329 54.5 5.33329C55.9728 5.33329 57.1667 4.13939 57.1667 2.66663C57.1667 1.19387 55.9728 -4.07696e-05 54.5 -4.07696e-05C53.0272 -4.07696e-05 51.8333 1.19387 51.8333 2.66663ZM0.5 73.6666H1V59.3565H0.5H0V73.6666H0.5ZM14.5 45.3565V45.8565H40.5V45.3565V44.8565H14.5V45.3565ZM54.5 31.3565H55V2.66663H54.5H54V31.3565H54.5ZM40.5 45.3565V45.8565C48.5081 45.8565 55 39.3646 55 31.3565H54.5H54C54 38.8123 47.9558 44.8565 40.5 44.8565V45.3565ZM0.5 59.3565H1C1 51.9007 7.04416 45.8565 14.5 45.8565V45.3565V44.8565C6.49187 44.8565 0 51.3484 0 59.3565H0.5Z" fill="#E6E6E6" />
                    </svg>
                  </div>

                  <div className="relative -pt-10 -ml-8 w-fit">
                    <div className='absolute'>
                      <div className="relative w-5 h-7 mt-2 ml-2">
                        {/* Bottom horizontal line */}
                        <div className="absolute bottom-0 left-0 w-1.25 h-px bg-[#E6E6E6]" />
                        {/* Curved corner + vertical line */}
                        <div className="absolute right-0 bottom-0 w-4.75 h-6.75 border-r border-b border-[#E6E6E6] rounded-br-[14px]" />
                      </div>
                    </div>

                    <div>
                      {/* Background image */}
                      <Image
                        src={maskgroup}
                        alt="loading..."
                        className="block"
                      />

                      {/* Center overlay image */}
                      <Image
                        src={frame122905}
                        alt="loading..."
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[69.40px] h-[89.81px]"
                      />
                    </div>

                    <div className='absolute ml-27 -mt-6 '>
                      <svg width="39" height="15" viewBox="0 0 39 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.5 15V14.5C0.5 6.76801 6.76801 0.5 14.5 0.5H38.5" stroke="#E6E6E6" />
                      </svg>
                    </div>
                  </div>

                  <div className="relative w-1.5 h-16">
                    {/* Vertical Line */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-15.25 bg-[#E6E6E6]" />
                    {/* Bottom Dot */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#E6E6E6]" />
                  </div>
                </div>

                <div className='flex'>
                  <div className='flex'>
                    <div className='-mr-1 mt-56 -ml-8'>
                      <svg width="92" height="30" viewBox="0 0 92 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="block" >
                        <path d="M0.5 0V15C0.5 22.732 6.768 29 14.5 29H91.5" stroke="#E6E6E6" fill="none" />
                      </svg>
                    </div>

                    <div className='pr-5'>
                      <div className="relative w-1.5 h-69.5 flex justify-center">
                        {/* Vertical Line */}
                        <div className="w-px h-full bg-[#E6E6E6]" />
                        {/* Top Dot */}
                        <div className="absolute top-0 w-1.5 h-1.5 bg-[#E6E6E6] rounded-full" />
                        {/* Bottom Dot */}
                        <div className="absolute bottom-0 w-1.5 h-1.5 bg-[#E6E6E6] rounded-full" />
                      </div>
                    </div>
                  </div>

                  {/* Right Logos */}
                  <div className="flex flex-col items-center justify-center gap-5">
                    {logos2.map((logos2, index) => (
                      <p
                        key={index}
                        className="w-8.5 h-8.5 flex items-center justify-center gap-2.5 p-1.75 rounded-[19.83px] bg-white border border-[#EFEFEF] shadow-[0px_10.48px_10.48px_0px_#00000017]"
                      >
                        <Image
                          src={logos2}
                          alt={`logos2-${index + 1}`}
                          className="h-5 w-5"
                        />
                      </p>
                    ))}
                  </div>
                </div>

              </div>

              {/* Info Section */}
              <div className='ml-6 mt-4'>
                <h1 className='text-[#050E14] font-medium text-[24px] leading-[115%] tracking-[-1%]'>
                  Seamless Integrations
                </h1>
                <p className='text-[#4B4F57] font-normal text-[16px] leading-[160%] tracking-[0%] pt-3'>
                  Deliver natural, context-aware responses across every channel, ensuring a <br /> personal touch in every conversation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pagetwo;