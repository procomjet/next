"use client";

import { Button } from "@nextui-org/react";

export default function DetailContext(e: any) {
  return (
    <div className="relative w-[1111px] left-[708px] h-[768px] top-[100px]">
      <div
        ref={e.e}
        className="w-[518px] h-[98px] top-[49px] left-[90px] [font-family:'NIXGONFONTS_V2.0-L',Helvetica] text-black text-[50px] text-center tracking-[0] leading-[12.8px] absolute font-normal"
      >
        이상한 나라의 앨리스
      </div>

      <div className=" top-[140px] left-[100px] [font-family:'NIXGONFONTS_V2.0-L',Helvetica] text-black text-[30px]  leading-[12.8px]  absolute font-normal">
        판매가 : 18,000
      </div>

      <p className="w-[957px] h-[120px] top-[244px] left-[103px] [font-family:'NIXGONFONTS_V2.0-L',Helvetica] text-black text-[20px] tracking-[0] leading-[30px] absolute font-normal">
        심심하고 따분했던 날을 보내던 앨리스는 어느 날 흰 토끼를 쫓아 이상한
        나라로 들어간다. 그곳에서 앨리스는기묘하고 놀라운 일들을 체험한다.
        거인처럼 키가 커지거나 작아져서 당혹스러운 상황에 처하곤 한다. 뿐만
        아니라 담배 피우는 애벌레, 체셔 고양이 등 희한한 동물들과 만나 이야기를
        나눈다. 이상한 나라에서 이상한 경험들을 한 앨리스는 과연 무사히 집으로
        돌아갈 수 있을까?
      </p>
      <div className="absolute w-[402px] h-[60px] top-[462px] left-[145px]">
        <div className="relative w-[400px] h-[60px] ">
          <Button
            size="lg"
            radius="full"
            className="bg-white border border-black text-black font-semibold px-24 py-2"
          >
            Buy It Now
          </Button>
        </div>
      </div>
      <div className="absolute w-[402px] h-[60px] top-[462px] left-[611px]">
        <div className="relative w-[400px] h-[60px] ">
          <Button
            size="lg"
            radius="full"
            className="bg-black text-white font-semibold px-32 py-2"
          >
            Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
