"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Gamelist from "./_component/Gamelist";

export default function Home() {
  const [isImageVisible, setIsImageVisible] = useState(false);

  useEffect(() => {
    // 페이지 로드 후 500ms 뒤에 이미지가 페이드인되도록 설정
    const timeoutId = setTimeout(() => {
      setIsImageVisible(true);
    }, 500);

    // 컴포넌트가 unmount되면 타이머를 정리
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <div
        className={`w-[1921px] h-[758px] top-[105px] bg-cover bg-center flex items-center justify-center relative transition-opacity duration-500 ${
          isImageVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image
          src="/main/blue.png"
          width={1920}
          height={759}
          alt="Blue"
          className="opacity-0 transition-opacity duration-500"
          style={{ opacity: isImageVisible ? 1 : 0 }}
        />
      </div>
      <div>
        <Gamelist />
      </div>
    </>
  );
}
