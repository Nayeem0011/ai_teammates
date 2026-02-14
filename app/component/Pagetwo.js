'use client';

import GradientLine from '../svg/GradientLine';
import GradientLineRight from '../svg/GradientLineRight';
import SparkIcon from '../svg/SparkIcon';

import Image from 'next/image';
import fi_4269808 from './image/fi_4269808.png';
import button_bg_img from './image/button_bg_img.png';
import fi_17274286 from './image/fi_17274286.png';
import fi_14752390 from './image/fi_14752390.png';

const Pagetwo = () => {
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

        <div className='flex items-center justify-center mt-1 gap-8'>
          <div className='relative overflow-hidden w-125.75 h-110 rounded-[19.83px] bg-white shadow-[0px_10.48px_10.48px_0px_#00000017]'>
            <div className='flex items-center justify-center'>
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

              <div></div>

              <div></div>
            </div>
          </div>

          <div className='w-166.75 h-110 rounded-[19.83px] bg-white shadow-[0px_10.48px_10.48px_0px_#00000017]'></div>
        </div>
      </div>
    </section>
  );
};

export default Pagetwo;