import { Tag } from '@/features/home/components/Tag';
import Image from 'next/image';

const Campuses = () => {
  return (
    <div className="bg-navy relative mt-0 py-25 md:mt-50 lg:mt-77.5">
      <div className="mx-auto w-full lg:w-6/7">
        {/* Image grid */}
        <div className="mx-auto grid grid-cols-3 items-center lg:w-1/2">
          <div className="relative aspect-[245/485] w-full lg:-mt-70">
            <Image
              alt="Image"
              fill
              className="object-cover"
              src="/img/img-7.jpg"
            />
          </div>
          <div className="relative aspect-[245/485] w-full lg:-mt-70">
            <Image
              alt="Image"
              fill
              className="object-cover"
              src="/img/img-8.jpg"
            />
          </div>
          <div className="relative aspect-[245/485] w-full lg:-mt-70">
            <Image
              alt="Image"
              fill
              className="object-cover"
              src="/img/img-9.jpg"
            />
          </div>
        </div>

        {/* Title with underline highlight */}
        <div className="relative z-0 mt-7.5 flex justify-center">
          <h1 className="relative z-10 inline-block text-[64px] font-extrabold text-white uppercase before:absolute before:top-1/2 before:left-0 before:z-[-1] before:h-[20px] before:w-full before:translate-y-1/2 before:bg-[#8ec8ee]">
            campuses
          </h1>
        </div>

        {/* Paragraph */}
        <div className="mt-6 flex items-center justify-center">
          <p className="w-1/2 text-center text-white">
            We have multiple locations across the UK, all strategically situated
            in vibrant city centers and easily accessible by public transport.
          </p>
        </div>
      </div>
      <div className="">
        <Tag
          color="bg-pink"
          left="20%"
          top="30%"
          rotate="-15"
          text="Canary Wharf"
          textColor="white"
        />
        <Tag
          color="bg-blue"
          left="20%"
          top="80%"
          rotate="15"
          text="Manchester"
          textColor="text-navy"
        />
        <Tag
          color="bg-cyan"
          left="70%"
          top="60%"
          rotate="-15"
          text="Borough"
          textColor="text-navy"
        />
      </div>
    </div>
  );
};

export default Campuses;
