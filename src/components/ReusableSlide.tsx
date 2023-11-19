import React, { useState, useEffect } from "react";
import "../app/globals.css";
import Image from "next/image";

export default function ReusableSlide(i: any) {
  console.log(i.i);

  const images = i.i;

  const [currentImage, setCurrentImage] = useState<number>(0);
  const [fade, setFade] = useState<boolean>(false);

  useEffect(() => {
    const nextImage = () => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    };

    const intervalId = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        nextImage();
        setFade(false);
      }, 500); // 이미지 변경 후 0.5초 지연 후 페이드 아웃
    }, 6000);

    return () => clearInterval(intervalId);
  }, [currentImage, images.length]);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prevImage) => (prevImage - 1 + images.length) % images.length
    );
  };

  return (
    <>
      <div
        className="w-[1770px] h-[515px]"
        style={{ backgroundImage: `url(${images[currentImage]})` }}
      ></div>
      {/* 왼쪽 화살표 버튼 */}
      <button
        className="absolute top-[50%] left-6 transform -translate-y-1/2 bg-transparent rounded-full p-2 cursor-pointer"
        onClick={prevImage}
      >
        <Image src="/main/vector-1.svg" width={80} height={80} alt="vector-1" />
      </button>

      {/* 오른쪽 화살표 버튼 */}
      <button
        className="absolute top-[50%] right-10 transform -translate-y-1/2 bg-transparent rounded-full p-2 cursor-pointer"
        onClick={nextImage}
      >
        <Image src="/main/vector-2.svg" width={80} height={80} alt="vector-2" />
      </button>
    </>
  );
}
