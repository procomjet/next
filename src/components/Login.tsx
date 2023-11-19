// import { Button } from "@nextui-org/react";

export default function login() {
  return (
    <div className="absolute w-[1920px] h-[35px] bg-[#000000]">
      <p className="w-[240px] h-[19px] top-[10px] left-[1270px] [font-family:'NIXGONFONTS_v2.0-L',Helvetica] font-light text-[13px] leading-[13px] absolute text-white tracking-[0]">
        로그인하고 더 많은 컨텐츠를 즐겨보세요!
      </p>
      <div className="absolute w-[62px] h-[20px] top-[8px] left-[1518px]">
        <div className="relative w-[60px] h-[20px] rounded-[50px] border border-solid border-white hover:border-gray-500 cursor-pointer">
          <div className="w-[25px] top-[3px] left-[18px] [font-family:'NEXON_Lv1_Gothic_Low_OTF-Regular',Helvetica] font-normal text-[8px] leading-[12.1px] whitespace-nowrap absolute text-white tracking-[0] transition duration-300 ease-in-out hover:text-gray-500">
            로그인
          </div>
          {/* <Button
            size="sm"
            radius="full"
            className="bg-black border border-white text-white font-semibold w-[25px] h-[20px]"
          >
            로그인
          </Button> */}
        </div>
      </div>
    </div>
  );
}
