import { Tag } from '@/features/home/components/Tag';
import { images, tags } from '@/features/home/constant';
import Image from 'next/image';
import React from 'react';

// Tag component with default style and animations

const HeroSection = () => {
  return (
    <section className="grid w-full grid-cols-1 gap-10 overflow-hidden px-4 py-10 lg:grid-cols-2 lg:p-10 lg:py-20">
      {/* Text Section */}
      <div className="flex flex-col justify-center space-y-6">
        <h1 className="text-5xl leading-tight font-extrabold uppercase md:text-[100px] lg:text-[80px] xl:text-[100px] 2xl:text-[130px]">
          Welcome to VCAD
        </h1>
        <p className="text-lg text-gray-100 md:text-2xl">
          {`Our team at Victoria College of Arts and Design is passionate about
          creating innovative projects and generating new ideas. We work with a
          variety of experts and esteemed companies using a collaborative
          approach. Located in London's Design District, we have valuable
          connections within our industry. Search our latest courses.`}
        </p>
        <button
          type="button"
          className="bg-blue hover:bg-blue text-navy w-max px-8 py-4 text-xl font-extrabold transition"
        >
          Apply Now
        </button>
      </div>

      {/* Image & Tags Section */}
      <div className="relative flex h-[500px] w-full items-center justify-center md:h-[600px]">
        {/* Tags */}
        {tags.map((tag, idx) => (
          <Tag key={idx} {...tag} />
        ))}

        {/* Images */}
        {images.map((img, idx) => (
          <Image
            key={idx}
            src={img.src}
            alt={img.alt}
            className={img.className}
            width={img.width}
            height={img.height}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
