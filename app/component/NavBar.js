"use client";

import { useState } from "react";
import Image from "next/image";
import rectangle7 from './image/rectangle7.png';
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

import mask_group from './image/mask_group.png';
import button_bg_img from './image/button_bg_img.png';

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    // <header className="w-full backdrop-blur-[100px] bg-[linear-gradient(180deg,#FFFFFF_0%,#FFFFFF_100%)]">
    <header className="relative w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={rectangle7}
          alt="navbar bg"
          fill
          className="object-cover"
          priority
        />
      </div>
      {/* <div className="absolute inset-0 -z-10">
        <div className=" w-full h-30.25 bg-linear-to-b from-white to-white blur-[50px]"></div>
      </div> */}

      <nav className="xl:max-w-[80%] max-w-[90%] mx-auto pt-10 pb-10">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Image className="w-52.5 cursor-pointer" src={mask_group} alt="loading ..." />

          {/* Desktop Menu */}
          <div className='p-0.75 gap-2.5 rounded-[70px] border border-opacity-100 rotate-0 bg-white border-[#F2F2F2] shadow-[0px_0px_19.2px_0px_#0505051A]'>
            <div className='hidden lg:flex items-center justify-center gap-6 px-7 py-3 rounded-[50px] border border-[#F3F3F3]'>
              {["Integrations", "Pricing", "Sandbox", "Blog"].map((item) => (
                <p
                  key={item}
                  className="text-[#838789] text-[16px] cursor-pointer hover:text-[#0F74EF] transition"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* Desktop Buttons */}
          <div className='hidden lg:flex items-center gap-4'>
            <button className='text-[#0F74EF] w-26.5 h-12.5 flex items-center justify-center gap-2.5 rounded-[100px] py-3 px-5 border border-[#0F74EF] text-[16px] leading-[160%] cursor-pointer'>
              Sign in
            </button>

            <div className="border-[#E4F2FF] border-5 rounded-[72px] ">
              <button
                className="relative w-32.5 h-12 rounded-[72px] flex items-center justify-center text-white text-[16px] leading-[160%] overflow-hidden bg-[linear-gradient(180deg,#0F74EF_0%,#1994E7_100%)] cursor-pointer
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

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-3xl text-[#0F74EF]"
          >
            {open ? <HiX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.35,
                ease: "easeOut",
              }}
              className="lg:hidden mt-6 ml-auto w-[85%] max-w-[320px] rounded-2xl border border-opacity-100 rotate-0 bg-white border-[#F2F2F2] shadow-xl p-6 space-y-4">
              {["Integrations", "Pricing", "Sandbox", "Blog"].map((item) => (
                <motion.p
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-[#838789] text-[16px] cursor-pointer hover:text-[#0F74EF] transition"
                >
                  {item}
                </motion.p>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="flex flex-col gap-3 pt-4"
              >

                <button className='text-[#0F74EF] w-full flex items-center justify-center gap-2.5 rounded-[100px] py-3 px-5 border border-[#0F74EF] text-[16px] leading-[160%] cursor-pointer'>
                  Sign in
                </button>

                <div className="border-[#E4F2FF] border-5 rounded-[72px] ">
                  <button
                    className="relative w-full py-3 rounded-[72px] flex items-center justify-center text-white text-[16px] leading-[160%] overflow-hidden bg-[linear-gradient(180deg,#0F74EF_0%,#1994E7_100%)] cursor-pointer
                    shadow-[0px_3.71px_4.85px_0px_#57B1FF27,0px_10.27px_13.4px_0px_#57B1FF38,inset_0px_1px_4px_2px_#9ACDF9,inset_0px_1px_18px_2px_#9AD0FF]">
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
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </nav>
    </header>
  );
};

export default NavBar;


