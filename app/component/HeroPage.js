'use client';

// import "slick-carousel/slick/slick-theme.css";
// import "slick-carousel/slick/slick.css";
import Image from 'next/image';
import group1 from './image/group1.png';
import SparkIcon from '../svg/SparkIcon';
import GradientLine from '../svg/GradientLine';
import GradientLineRight from '../svg/GradientLineRight';
import MaskedBackground from '../svg/MaskedBackground';

const HeroPage = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div>
        <div className="flex flex-col items-center pt-30">

          <div className='flex'>
            <GradientLine className="w-24 h-1.5 mx-auto mt-5" />
            <div className="w-84.5 h-11.5 flex items-center gap-2 rounded-[50px] border py-2.5 px-5 bg-[rgba(255,255,255,1)] border-[rgba(234,240,243,1)] shadow-[0px_0px_0px_1px_rgba(0,143,246,0.18),0px_2px_0px_0px_rgba(242,245,250,1)]">
              <span className="flex items-center gap-2 font-normal text-[16px] leading-[160%] tracking-[0%] bg-[linear-gradient(180deg,#0073FF_0%,#0DA2FF_100%)] bg-clip-text text-transparent">
                <SparkIcon className="w-4 h-4" />
                Introducing Autonomous Workflows
              </span>
            </div>
            <GradientLineRight className="w-24 h-1.5 mx-auto mt-5" />
          </div>

          <div className='pt-4'>
            <h1 className=" font-medium text-[80px] leading-[115%] tracking-[-1%] text-center">
              <span className="bg-[rgba(5,14,20,1)] bg-clip-text text-transparent">AI </span>
              <span className=''>
                <Image className="inline-block" src={group1} alt="loading ..." />
              </span>
              <span className="bg-[linear-gradient(90deg,#050E14_59.62%,#67BFFF_100%)] bg-clip-text text-transparent"> Teammates.</span> <br />
              <span className="bg-[rgba(65,71,76,1)] bg-clip-text text-transparent"> Super Results.</span>
            </h1>
          </div>

          <div className='pt-6'>
            <p className="font-inter font-medium text-[18px] leading-[160%] tracking-[0%] text-center text-[#4B4F57]">Human-like AI for interviews, customer support, and sales available 24/7, <br /> across any channel, in 50+ languages.</p>
          </div>
        </div>

        <div className='flex items-center absolute bottom-0 left-1/2 -translate-x-1/2 w-[320px] h-107.5 rounded-[74px] bg-[#E4F2FF]'>
          <div className='flex items-center justify-center absolute left-1/2 -translate-x-1/2 w-75 h-102.5 rounded-[74px] bg-[#FFFFFF] shadow-[-0.5px_-0.5px_0px_0px_#0000000D,10px_10px_21.21px_-3.75px_#0000000E,5.9px_5.9px_8.35px_-3px_#00000031,2.66px_2.66px_3.76px_-2.25px_#0000003B,1.21px_1.21px_1.71px_-1.5px_#0000003F,0.44px_0.44px_0.63px_-1px_#00000042,inset_-1px_-1px_1px_0px_#00000026,inset_1px_1px_1px_0px_#FFFFFF]'>
            {/* background layer */}
            <MaskedBackground className="absolute object-cover object-center -left-2 z-0 " />

            {/* foreground content */}
            <div className="relative z-10">
              fwq
            </div>

          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default HeroPage;


