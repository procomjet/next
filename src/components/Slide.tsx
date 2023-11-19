import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Slide() {
  const images = ["/main/green.png", "/main/blue.png", "/main/red.png"];

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
    <div
      className={`w-[1921px] h-[758px] top-[125px] bg-cover bg-center flex items-center justify-center relative transition-opacity duration-500 border-b-[2.5px] border-solid border-gray-400 ${
        fade ? "opacity-0" : "opacity-100"
      }`}
      style={{ backgroundImage: `url(${images[currentImage]})` }}
    >
      <div className="w-full h-full absolute flex items-center justify-center">
        {currentImage === 1 && (
          <>
            <Link href="/choosegame">
              <div className="absolute top-[550px] left-[260px] items-center justify-center bg-black text-gray-100 py-18">
                <button className="button button--nanuk button--round-l button--text-thick button--inverted">
                  <span className="text-[16px]">S</span>
                  <span className="text-[16px]">T</span>
                  <span className="text-[16px]">A</span>
                  <span className="text-[16px]">R</span>
                  <span className="text-[16px]">T</span>
                  <span className="text-[16px]">!</span>
                </button>
              </div>
            </Link>
          </>
        )}
      </div>

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
    </div>
  );
}
