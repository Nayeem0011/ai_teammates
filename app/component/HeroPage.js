'use client';

// import "slick-carousel/slick/slick-theme.css";
// import "slick-carousel/slick/slick.css";
// import Image from 'next/image';

const HeroPage = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div>
        <div className="flex flex-col items-center pt-[206px]">
          <div className="w-[338px] h-[46px] flex items-center gap-[8px] rounded-[50px] border border-[1px] pt-[10px] pr-[20px] pb-[10px] pl-[20px] bg-[rgba(255,255,255,1)] border border-[rgba(234,240,243,1)] shadow-[0px_0px_0px_5px_rgba(0,143,246,0.18),0px_2px_0px_0px_rgba(242,245,250,1)]">
            <span className="font-inter font-normal text-[16px] leading-[160%] tracking-[0%] bg-[linear-gradient(180deg,#0073FF_0%,#0DA2FF_100%)] bg-clip-text text-transparent"> Introducing Autonomous Workflows</span>
          </div>
          <div>
            <h1 className=" font-medium text-[80px] leading-[115%] tracking-[-1%] text-center">
              <span className="bg-[rgba(5,14,20,1)] bg-clip-text text-transparent">AI </span> 
              <span></span>
              <span className="bg-[linear-gradient(90deg,#050E14_59.62%,#67BFFF_100%)] bg-clip-text text-transparent"> Teammates.</span> <br />
              <span className="bg-[rgba(65,71,76,1)] bg-clip-text text-transparent"> Super Results.</span>
            </h1>
          </div>
          <div>
            <p className="font-inter font-medium text-[18px] leading-[160%] tracking-[0%] text-center text-[#4B4F57]">Human-like AI for interviews, customer support, and sales available 24/7, <br/> across any channel, in 50+ languages.</p>
          </div>
        </div>

        <div></div>

        <div></div>
      </div>
    </section>
  );
};

export default HeroPage;


