'use client';

import HeroPage from './HeroPage';
import NavBar from './NavBar';
import Image from "next/image";
import vector from './image/vector.png';

const Header = () => {
  return (
    <div className="relative w-full overflow-hidden h-auto "> {/* height important */}

      {/* Background */}
      {/* <div className="absolute w-full h-full overflow-hidden">
        <Image
          src={group5}
          alt="loading..."
          fill
          className="object-cover scale-120 -translate-x-12.5"
        />
      </div> */}

      {/* Blurred gradient stroke circle */}
      <div className="absolute top-[30%] left-[50%] w-270 h-270 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[135px] mix-blend-plus-darker border-20 border-solid bg-[linear-gradient(270deg,#2E8EF4_0%,#F6AEB1_100%)]"></div>

      {/* Background blur div mimicking foreignObject */}
      {/* Blue blurred circle */}
      <div className="absolute top-[417.5px] left-328.75 w-68.5 h-68.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#65AAF5] blur-[120px] mix-blend-plus-darker"></div>
      {/* Pink gradient blurred circle */}
      <div className="absolute top-[417.5px] left-[517.5px] w-113.75 h-113.75 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[145px] mix-blend-plus-darker"
        style={{ background: "linear-gradient(90deg, #E3C2D5 0%, #FBC9C8 100%)" }}>
      </div>


      {/* Main blurred white circle */}
      <div className="absolute -top-56.25 left-0 w-275 h-275 backdrop-blur-[9.5px] rounded-full"></div>
      <div className="absolute -top-51.25 left-[50%] w-265 h-265 -translate-x-1/2 rounded-full bg-white/95 blur-[10px]"></div>
     
      {/* Background image */}
      <div className="flex justify-center -top-13 absolute inset-0 z-10 pointer-events-none ">
        <Image
          src={vector}
          alt="background"
          className=" opacity-50 w-400 h-262.25"
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-30">
        <NavBar />
        <HeroPage />
      </div>

    </div>
  );
};

export default Header;
