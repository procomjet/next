"use client";

import Image from "next/image";
export default function Home() {
    return (
        <>
          <div className="relative top-[125px]">
          <Image src="/main/audio-bg.png" width={1920} height={756} alt="audio-bg" />
          </div>
        </>
      );

}