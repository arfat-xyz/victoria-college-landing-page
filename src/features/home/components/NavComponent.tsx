import Image from 'next/image';
import React from 'react';
import { IoIosMenu } from 'react-icons/io';

const NavComponent = () => {
  return (
    <div className="flex items-center justify-between px-4 lg:px-0">
      <Image alt="LOGO" src={`/nav-logo.svg`} width={184} height={69} />
      <IoIosMenu className="cursor-pointer" size={24} />
    </div>
  );
};

export default NavComponent;
