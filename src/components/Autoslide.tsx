import { useState, useEffect } from "react";
import Image from "next/image";

export default function Autoslide() {
  const imageWidth = 3346;
  const [position, setPosition] = useState(0);
  const [forwardPosition, setForwardPosition] = useState(imageWidth);

  const step = 1;
  const interval = 50;

  useEffect(() => {
    const moveImage = () => {
      setPosition((prevPosition) => (prevPosition + step) % (imageWidth * 9));
      setForwardPosition(
        (prevPosition) =>
          (prevPosition + imageWidth * 6 - step + imageWidth * 6) % imageWidth
      );
    };

    const intervalId = setInterval(moveImage, interval);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <div
        className="flex absolute transition-transform duration-500"
        style={{
          transform: `translateX(${-position}px)`,
          width: `${imageWidth * 2}px`,
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
          <Image
            key={index}
            width={3346}
            height={218}
            src={`/main/slide01.png`}
            alt={`Slider Image ${index}`}
            className="w-full h-full object-cover"
          />
        ))}
      </div>

      <div className="absolute w-[1400px] h-[50px] top-[270px] left-[0px] [font-family:'NIXGONFONTS_v2.0-L',Helvetica] font-normal text-black text-[30px] text-center tracking-[0] leading-[30px] whitespace-nowrap border-b-[2.5px] border-solid border-gray-400">
        Daily Best
      </div>

      <div
        className="flex absolute transition-transform duration-500 top-[340px]"
        style={{
          transform: `translateX(${-forwardPosition}px)`,
          width: `${imageWidth * 4}px`,
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
          <Image
            key={index}
            width={3346}
            height={218}
            src={`/main/slide02.png`}
            alt={`Slider Image ${index}`}
            className="w-full h-full object-cover"
          />
        ))}
      </div>
    </>
  );
}
