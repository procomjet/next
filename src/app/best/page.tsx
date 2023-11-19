"use client";

import ReusableSlide from "@/components/ReusableSlide";
import Image from "next/image";

export default function Home() {
  const title = "Best";

  const img = [
    "/main/all-slide-2.png",
    "/main/all-slide-3.png",
    "/main/all-slide-1.png",
  ];

  return (
    <>
      <div className="relative top-[125px]">
        <div
          className={`w-[1920px] h-[758px] top-[0px] bg-cover bg-center flex items-center justify-center relative transition-opacity duration-500 border-b-[2.5px] border-solid border-gray-400 `}
        >
          <div className="w-[194px] top-[40px] left-[75px] text-[60px] absolute [font-family:'NIXGONFONTS_V2.0-L',Helvetica] font-normal text-black tracking-[0] leading-[normal]">
            {title}
          </div>
          <ReusableSlide i={img} />
        </div>
        <Image
          src="/main/best-detail.png"
          width={1920}
          height={1915}
          alt="best-detail"
        />
        <div className="w-[1920px] h-[1022px] bg-cover bg-center flex items-center justify-center relative transition-opacity duration-500" />
      </div>
    </>
  );
}
