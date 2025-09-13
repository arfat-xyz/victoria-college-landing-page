import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="mx-auto mt-20 flex flex-col items-start justify-between gap-5 p-4 lg:w-9/10 lg:flex-row lg:items-center lg:p-0">
      <div className="flex flex-col gap-5">
        {' '}
        <Image
          alt="Footer logo"
          src={`/logo-white.svg`}
          width={184}
          height={69}
        />
        <p className="text-[16px]">
          {`© 2025 Victoria College of Arts and Design, All rights reserved.`}
        </p>
      </div>
      <div className="border-blue flex items-center gap-7.5 border px-9 py-2">
        <Link href={`#`}>Policies</Link>
        <Link href={`#`}>Contact us</Link>
        <Link href={`#`}>Meet the Teem</Link>
        <div className="flex gap-3">
          <FaFacebook className="cursor-pointer transition hover:text-blue-500" />
          <FaInstagram className="cursor-pointer transition hover:text-pink-500" />
          <FaLinkedin className="cursor-pointer transition hover:text-blue-700" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
