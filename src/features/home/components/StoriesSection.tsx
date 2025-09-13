import Image from 'next/image';
import React from 'react';

const StoriesSection = () => {
  return (
    <div className="mx-auto my-10 p-4 lg:w-9/10 lg:p-0">
      <h1 className="mt-0 mb-10 text-[64px] font-extrabold text-white uppercase lg:mt-50">
        stories
      </h1>
      <div className="grid grid-cols-1 gap-8">
        <div className="grid gap-10 overflow-hidden lg:grid-cols-2">
          <Image
            alt="Story image"
            src={`/img/p-5.jpg`}
            className="h-180 w-full lg:pr-20"
            width={677}
            height={709}
          />
          <div className="pr-16">
            <h3 className="mb-6 text-4xl font-extrabold uppercase md:text-[40px] lg:text-[64px]">
              Induction in VCAD Canary Wharf campus
            </h3>
            <p className="text-2xl font-normal">
              If you join Victoria College of Arts and Design, you can expect
              the highest calibre of teaching, cutting-edge facilities, and
              exceptional industry connections, which will help to prepare you
              for a rewarding career in the creative and tech industries.
            </p>
            <div className="mt-10 flex gap-5.5">
              <button
                type="button"
                className="bg-blue text-navy hover:text-blue hover:border-blue w-max cursor-pointer border px-8 py-4 text-xl font-extrabold transition-colors duration-300 hover:bg-transparent"
              >
                Read article
              </button>
              <button
                type="button"
                className="text-blue border-blue hover:bg-blue hover:text-navy w-max cursor-pointer border bg-transparent px-8 py-4 text-xl font-extrabold transition-colors duration-300"
              >
                View full gallery
              </button>
            </div>
          </div>
        </div>
        <div className="grid gap-10 lg:grid-cols-2">
          <Image
            alt="Story image"
            src={`/img/p-6.jpg`}
            className="h-180 w-full lg:pr-20"
            width={677}
            height={709}
          />
          <div className="">
            <h3 className="mb-6 text-4xl font-extrabold uppercase md:text-[40px] lg:text-[64px]">
              Be ready for applying! Five tips to <br />
              <span className="text-pink">build your portfolio</span>
            </h3>
            <p className="text-2xl font-normal">
              If you join Victoria College of Arts and Design, you can expect
              the highest calibre of teaching, cutting-edge facilities, and
              exceptional industry connections, which will help to prepare you
              for a rewarding career in the creative and tech industries.
            </p>
            <div className="mt-10 flex gap-5.5">
              <button
                type="button"
                className="bg-blue text-navy hover:text-blue hover:border-blue w-max cursor-pointer border px-8 py-4 text-xl font-extrabold transition-colors duration-300 hover:bg-transparent"
              >
                Read article
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoriesSection;
