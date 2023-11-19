import React, { useState, useEffect } from "react";
import Autoslide from "@/components/Autoslide";
import Movie from "./Movie";

export default function MonthlyBest() {
  return (
    <>
      <div className="relative w-[1400px] h-[2594px] top-[180px] mx-auto">
        <div className="absolute w-[1400px] h-[50px] top-[0px] left-[0px] [font-family:'NIXGONFONTS_v2.0-L',Helvetica] font-normal text-black text-[30px] text-center tracking-[0] leading-[30px] whitespace-nowrap border-b-[2.5px] border-solid border-gray-400">
          New Book
        </div>
        <div className="relative overflow-hidden w-[1400px] h-[600px] top-[80px] left-0">
          <Autoslide />
        </div>
        <Movie />
      </div>
    </>
  );
}
