'use client';

// import "slick-carousel/slick/slick-theme.css";
// import "slick-carousel/slick/slick.css";
import Image from 'next/image';
import group1 from './image/group1.png';

const HeroPage = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div>
        <div className="flex flex-col items-center pt-[206px]">
          <div className="w-[338px] h-[46px] flex items-center gap-[8px] rounded-[50px] border border-[1px] pt-[10px] pr-[20px] pb-[10px] pl-[20px] bg-[rgba(255,255,255,1)] border border-[rgba(234,240,243,1)] shadow-[0px_0px_0px_5px_rgba(0,143,246,0.18),0px_2px_0px_0px_rgba(242,245,250,1)]">
            <span className="font-inter font-normal text-[16px] leading-[160%] tracking-[0%] bg-[linear-gradient(180deg,#0073FF_0%,#0DA2FF_100%)] bg-clip-text text-transparent"> Introducing Autonomous Workflows</span>
          </div>

          <div className='pt-4'>
            <h1 className=" font-medium text-[80px] leading-[115%] tracking-[-1%] text-center">
              <span className="bg-[rgba(5,14,20,1)] bg-clip-text text-transparent">AI </span>
              {/* <span className=' top-[7px] left-[175px] w-[60.163238571043195px] h-[60.163238571043195px] rotate-[16.91deg] rounded-[14.31px] border-[1.19px] bg-[linear-gradient(180deg,#0073FF_0%,#0DA2FF_100%)] border-[1.19px] bg-[linear-gradient(180deg,rgba(0,136,255,0.3)_0%,rgba(119,192,255,0.3)_100%),radial-gradient(63.87%_50%_at_52.08%_100%,#FFFFFF_0%,rgba(255,255,255,0)_100%)] shadow-[0px_0px_0px_5.96px_#FFFFFF,0px_0px_0px_4.77px_#E0E9F2,0px_4.43px_5.78px_0px_#57B1FF27,0px_12.25px_15.98px_0px_#57B1FF38,0px_29.49px_38.47px_0px_#57B1FF30,0px_50.09px_127.62px_0px_#57B1FF57,inset_0px_1.19px_4.77px_2.39px_#D2EAFF,inset_0px_1.19px_21.47px_2.39px_#D2EAFF]'>
                <Image className="inline-block" src={group1} alt="loading ..." />
              </span> */}
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

        <div></div>

        <div></div>
      </div>
    </section>
  );
};

export default HeroPage;


