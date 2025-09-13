import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <div>
      <Image
        alt="Footer logo"
        src={`/logo-white.svg`}
        width={184}
        height={69}
      />
    </div>
  );
};

export default Footer;
