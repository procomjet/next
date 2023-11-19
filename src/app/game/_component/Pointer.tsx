import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";

export default function Pointer(e: any) {
  return (
    <div className="absolute w-[1920px] h-[123px] top-[118px]">
      <div className="w-[1920px] h-[123px] top-0 bg-white border-b border-t [border-top-style:solid] [border-bottom-style:solid] border-black absolute left-0">
        <div className="relative w-[1723px] h-[100px] top-[13px] left-[100px]">
          <div className="relative w-[783px] h-[60px] top-[20px] left-[58px]">
            <div className="left-0 [font-family:'NIXGONFONTS_V2.0-L',Helvetica] absolute w-[128px] h-[30px] top-[14px] font-normal text-black text-[18px] text-center tracking-[0] leading-[14px]">
              게임
            </div>
            <div
              onClick={e.e}
              className="left-[143px] [font-family:'NIXGONFONTS_V2.0-L',Helvetica] absolute w-[128px] h-[30px] top-[14px] font-normal text-black text-[18px] text-center tracking-[0] leading-[14px]"
            >
              상품정보
            </div>
            <Link
              href="#3"
              className="left-[286px] [font-family:'NIXGONFONTS_V2.0-L',Helvetica] absolute w-[128px] h-[30px] top-[14px] font-normal text-black text-[18px] text-center tracking-[0] leading-[14px]"
            >
              리뷰
            </Link>
            <div className="left-[429px] [font-family:'NIXGONFONTS_V2.0-L',Helvetica] absolute w-[128px] h-[30px] top-[14px] font-normal text-black text-[18px] text-center tracking-[0] leading-[14px]">
              교환/반품/품절
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
