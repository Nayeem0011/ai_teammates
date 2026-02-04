'use client';

import HeroPage from './HeroPage';
import NavBar from './NavBar';
import Image from "next/image";
import group5 from './image/group5.png';

const Header = () => {
  return (
    <div className="relative w-full overflow-hidden h-auto"> {/* height important */}

      {/* Background */}
      <div className="absolute w-full h-full overflow-hidden">
        <Image
          src={group5}
          alt="loading..."
          fill
          className="object-cover scale-120 -translate-x-12.5"
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
