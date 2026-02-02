"use client";

import Image from 'next/image';
import mask_group from './image/mask_group.png';

const NavBar = () => {

  return (
    <section className="w-full max-w-[80%] mx-auto">
      <div className="flex items-center justify-between pt-[40px]">
        {/* Logo */}
        <Image className="w-52.5" src={mask_group} alt="loading ..." />
        <div className='w-[364px] h-[54px] p-[3px] gap-[10px] rounded-[70px] border border-opacity-100 rotate-0 bg-white border-[#F2F2F2] shadow-[0px_0px_19.2px_0px_#0505051A]'>
          <div className='flex items-center justify-center gap-6 w-[356px] h-[46px] rounded-[50px] border border-[#F3F3F3]'>
            <p className='text-[#838789] text-[16px] leading-[160%] tracking-[0%]'>Integrations</p>
            <p className='text-[#838789] text-[16px] leading-[160%] tracking-[0%]'>Pricing</p>
            <p className='text-[#838789] text-[16px] leading-[160%] tracking-[0%]'>Sandbox</p>
            <p className='text-[#838789] text-[16px] leading-[160%] tracking-[0%]'>Blog</p>
          </div>
        </div>
        <div className='flex gap-[16px]'>
          <button className='text-[#0F74EF] w-[106px] h-[50px] flex items-center justify-center gap-[10px] rounded-[100px] pt-[12px] pr-[20px] pb-[12px] pl-[20px] border border-[#0F74EF] text-[16px] leading-[160%] tracking-[0%]'>
            Sign in
          </button>
          {/* <div className='w-[130px] h-[48px] rounded-[72px] p-[1px] shadow-[0px_10px_24px_0px_#0D509670]
bg-[linear-gradient(180deg,rgba(0,136,255,0.3)_0%,rgba(119,192,255,0.3)_100%),radial-gradient(63.87%_50%_at_52.08%_100%,#FFFFFF_0%,rgba(255,255,255,0)_100%)]'>
            <button className='top-[1px] left-[122px] rounded-[72px] p-[1px]
bg-[linear-gradient(180deg,rgba(0,136,255,0.3)_0%,rgba(119,192,255,0.3)_100%),radial-gradient(63.87%_50%_at_52.08%_100%,#FFFFFF_0%,rgba(255,255,255,0)_100%)]
shadow-[0px_0px_0px_5px_#FFFFFF,0px_0px_0px_4px_#E0E9F2,0px_3.71px_4.85px_0px_#57B1FF27,0px_10.27px_13.4px_0px_#57B1FF38,0px_24.72px_32.26px_0px_#57B1FF30,0px_42px_107px_0px_#57B1FF57]'>
              Al teammate
            </button>
          </div> */}

          <div className="p-[2px] rounded-[72px] bg-[linear-gradient(180deg, rgba(0,136,255,0.3)_0%, rgba(119,192,255,0.3)_100%), radial-gradient(63.87%_50%_at_52.08%_100%, #0F74EF_40%, rgba(255,255,255,0)_100%)]">
            <button className="w-[130px] h-[48px] rounded-[72px] flex items-center justify-center">
              AI teammate
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavBar;

