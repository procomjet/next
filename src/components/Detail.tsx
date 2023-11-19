"use client";

import DetailBook from "./_detail/DetailBook";
import DetailContext from "./_detail/DetailContext";
import DetailIndex from "./_detail/DetailIndex";
import DetailIntro from "./_detail/DetailIntro";

export default function Detail(e: any) {
  return (
    <div className="h-[2288px] pr-px pb-[202px] left-0 top-[1184px] absolute bg-white border-t border-black flex-col justify-start items-center inline-flex">
      <div className="absolute w-[1920px] h-[2288px] top-0 left-0 bg-white border-t [border-top-style:solid] border-black">
        <div className="absolute w-[1919px] h-[968px] top-0 left-0 bg-white">
          <DetailBook />
          <DetailContext e={e.e} />
        </div>
      </div>
      <div className="absolute w-[1722px] h-[1118px] top-[968px] left-[100px]">
        <DetailIntro />
        <DetailIndex />
      </div>
    </div>
  );
}
