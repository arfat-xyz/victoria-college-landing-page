import Image from 'next/image';
import React from 'react';
import { IoIosMenu } from 'react-icons/io';

const NavComponent = () => {
  return (
    <div className="mt-14! flex items-center justify-between">
      <Image alt="LOGO" src={`/nav-logo.svg`} width={184} height={69} />
      <IoIosMenu className="cursor-pointer" size={24} />
    </div>
  );
};

export default NavComponent;
