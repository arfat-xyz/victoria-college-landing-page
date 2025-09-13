import Image from 'next/image';
import React from 'react';

const PartnerSection = () => {
  return (
    <div className="mx-auto mt-50 grid grid-cols-2 gap-37 lg:w-9/10">
      <div className="">
        <div className="relative z-0 mt-7.5 flex w-8/10">
          <p className="relative z-10 inline-block text-[64px] font-extrabold text-white uppercase before:absolute before:bottom-6 before:left-0 before:z-[-1] before:h-[20px] before:w-full before:bg-[#e018e0]">
            Partner <br /> Institutions
          </p>
        </div>
        <p className="mt-25">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
          sequi libero eius tenetur necessitatibus accusantium error omnis, quo
          perferendis est, voluptas tempore cumque eligendi impedit rem numquam
          quaerat quisquam. Iure sed possimus sunt asperiores, consectetur qui
          aliquam quasi officiis tempora id nemo, non est obcaecati odio nihil
          fuga esse alias facilis et. In vitae debitis atque architecto facilis
          harum labore laudantium corporis, magni totam nostrum aliquid eligendi
          corrupti
        </p>
      </div>
      <div className="grid grid-cols-1 gap-14">
        <Image
          alt="Partner image"
          src={`/img/img-10.png`}
          width={685}
          height={167}
        />
        <Image
          alt="Partner image"
          src={`/img/img-11.png`}
          width={685}
          height={167}
          className="h-35 w-3/5"
        />
      </div>
    </div>
  );
};

export default PartnerSection;
