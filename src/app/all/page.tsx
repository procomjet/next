"use client";

import Image from "next/image";
import ReusableSlide from "@/components/ReusableSlide";

export default function Home() {
  const title = "All";

  const img = [
    "/main/all-slide-1.png",
    "/main/all-slide-2.png",
    "/main/all-slide-3.png",
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
        <div className="w-[1920px] h-[1022px] bg-cover bg-center flex items-center justify-center relative transition-opacity duration-500">
          <Image
            src="/main/all-main.png"
            width={1920}
            height={1021}
            alt="All"
          />
        </div>
      </div>
    </>
  );
}
