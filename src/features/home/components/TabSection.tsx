'use client';
import { tabs } from '@/features/home/constant';
import { cn } from '@/utils';
import Image from 'next/image';
import React, { useState } from 'react';

const TabSection = () => {
  const [activeTabName, setActiveTabName] = useState(tabs[0].value);

  return (
    <div className="">
      <div className="flex items-center justify-center">
        {/* tabs header  */}
        <div className="border-pink flex gap-3.5 border p-7.5">
          {tabs.map((t, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActiveTabName(t.value)}
              className={cn(
                `text-16 cursor-pointer uppercase`,
                activeTabName === t.value ? 'font-extrabold!' : '',
              )}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-30 grid grid-cols-1 md:gap-8 lg:grid-cols-2 lg:gap-15 2xl:gap-37.5">
        <Image
          alt="Tab section image"
          src={`/img/img-5.jpg`}
          className="h-4/5 w-full text-center"
          width={677}
          height={709}
        />
        <div className="flex flex-col gap-10 p-4 lg:p-0">
          <h3 className="lg:text-56 text-2xl md:text-4xl">
            What will you study?
          </h3>
          <p className="text-25">
            If you join Victoria College of Arts and Design, you can expect the
            highest calibre of teaching, cutting-edge facilities, and
            exceptional industry connections, which will help to prepare you for
            a rewarding career in the creative and tech industries.
          </p>{' '}
          <div className="flex gap-5.5">
            <button
              type="button"
              className="bg-blue text-navy hover:text-blue hover:border-blue w-max cursor-pointer border py-4 text-xl font-extrabold transition-colors duration-300 hover:bg-transparent lg:px-4 xl:px-6 2xl:px-8"
            >
              View Courses
            </button>
            <button
              type="button"
              className="text-blue border-blue hover:bg-blue hover:text-navy w-max cursor-pointer border bg-transparent py-4 text-xl font-extrabold transition-colors duration-300 lg:px-4 xl:px-6 2xl:px-8"
            >
              Download Prospectus
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabSection;
