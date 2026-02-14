'use client';

import Marquee from "react-fast-marquee";
import Image from "next/image";

import company_logo from "./image/company_logo.png";
import company_logo1 from "./image/company_logo1.png";
import company_logo2 from "./image/company_logo2.png";
import company_logo3 from "./image/company_logo3.png";
import company_logo4 from "./image/company_logo4.png";
import company_logo5 from "./image/company_logo5.png";

const Pageone = () => {

  return (
    <section>
      <div className="">
        <p className="text-[#050E14] font-medium text-[18px] leading-[160%] tracking-[0%] text-center">
          Trusted by leading organizations around the world
        </p>
      </div>
      <div className="w-210.75 h-10 flex items-center gap-10 mx-auto mt-8 mb-4">
        <Marquee speed={60} gradient={false} autoFill={false}>
          <div className="flex items-center justify-center gap-10">
            <Image src={company_logo} alt="company_logo" className="h-10 w-25.75" />
            <Image src={company_logo1} alt="company_logo1" className="h-10 w-25.75" />
            <Image src={company_logo2} alt="company_logo2" className="h-10 w-25.75" />
            <Image src={company_logo3} alt="company_logo3" className="h-10 w-25.75" />
            <Image src={company_logo4} alt="company_logo4" className="h-10 w-25.75" />
            <Image src={company_logo5} alt="company_logo5" className="h-10 w-25.75" />
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default Pageone;
