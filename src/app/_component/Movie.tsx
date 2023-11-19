export default function Movie() {
  return (
    <div className="relative w-[1400px] h-[850px] top-[100px] bg-[#e2e2e2] ">
      <div className="flex flex-col items-start gap-[15px] relative w-[706px] h-[211px] top-[42px] left-[607px]">
        <p className="relative self-stretch top-[20px] left-[-250px] [font-family:'NIXGONFONTS_V2.0-R',Helvetica] font-normal text-black text-[50px] text-center tracking-[0] leading-[normal]">
          <span className="[font-family:'NIXGONFONTS_V2.0-R',Helvetica] font-normal text-black text-[38px] tracking-[0]">
            어려운 독서 게임을 통해
            <br />
          </span>
        </p>
        <p className="relative self-stretch left-[-250px] [font-family:'NIXGONFONTS_V2.0-R',Helvetica] font-normal text-black text-[50px] text-center tracking-[0] leading-[normal]">
          <span className=" [font-family:'NIXGONFONTS_V2.0-R',Helvetica] font-normal text-black text-[38px] tracking-[0]">
            독서에 재미를 붙여보세요
            <br />
          </span>
        </p>
      </div>
      <div className="flex justify-center items-center">
        <video width="900" height="506" controls>
          <source src="/main/main-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
