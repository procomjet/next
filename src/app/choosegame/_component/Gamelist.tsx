import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Gamelist() {
  return (
    <div className="relative w-[1400px] h-[2594px] top-[160px] mx-auto">
      <div className="absolute w-[219px] h-[30px] -top-px left-[591px] [font-family:'NEXON_Lv1_Gothic_Low_OTF-Regular',Helvetica] font-normal text-black text-[30px] text-center tracking-[0] leading-[30px] whitespace-nowrap">
        Game
      </div>
      <div className="absolute w-[338px] h-[458px] top-[80px] left-0">
        <div className="w-[165px] h-[29px] top-[404px] left-[86px] absolute [font-family:'Noto_Sans_KR',Helvetica] font-bold text-black text-[16px] text-center tracking-[0] leading-[24px]">
          이상한 나라의 앨리스
        </div>
        <Link href="/game">
          <button className="absolute w-[338px] h-[400px] top-0 left-0">
            <Image
              src="/main/img/alice (1).png"
              width={338}
              height={406}
              alt="All"
            />
          </button>
        </Link>
      </div>
      <div className="top-[80px] left-[354px] absolute w-[338px] h-[458px]">
        <div className="w-[127px] h-[24px] top-[404px] left-[106px] whitespace-nowrap absolute [font-family:'Noto_Sans_KR',Helvetica] font-bold text-black text-[16px] text-center tracking-[0] leading-[24px]">
          피노키오
        </div>

        <div className="absolute w-[338px] h-[400px] top-0 left-0">
          <Image
            className="absolute w-[338px] h-[400px] top-0 left-0"
            width={338}
            height={400}
            alt="Element"
            src="/main/img/alice (2).png"
          />
        </div>
      </div>
      <div className="top-[80px] left-[708px] absolute w-[338px] h-[458px]">
        <div className="w-[163px] h-[24px] top-[404px] left-[88px] whitespace-nowrap absolute [font-family:'Noto_Sans_KR',Helvetica] font-bold text-black text-[16px] text-center tracking-[0] leading-[24px]">
          피터팬
        </div>

        <Image
          className="w-[276px] left-[31px] absolute h-[400px] top-0"
          alt="Element"
          width={300}
          height={400}
          src="/main/img/alice (3).png"
        />
      </div>
      <div className="top-[80px] left-[1062px] absolute w-[338px] h-[458px]">
        <p className="w-[247px] h-[24px] top-[404px] left-[46px] whitespace-nowrap absolute [font-family:'Noto_Sans_KR',Helvetica] font-bold text-black text-[16px] text-center tracking-[0] leading-[24px]">
          오즈의 마법사
        </p>

        <div className="absolute w-[338px] h-[400px] top-0 left-0">
          <Image
            className="w-[276px] left-[31px] absolute h-[400px] top-0"
            alt="Element"
            width={338}
            height={400}
            src="/main/img/alice (4).png"
          />
        </div>
      </div>
    </div>
  );
}
