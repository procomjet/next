import Link from "next/link";

export default function NavBar() {
  return (
    <div className="relative w-[1200px] h-[82px] top-[32px] left-[100px]">
      <div className="absolute w-[121px] h-[17px] top-[37px] left-0">
        <Link href="/">
          <button className="absolute w-[122px] h-[25px] top-[-5px] left-0 [font-family:'NIXGONFONTS_v2.0-B',Helvetica] font-bold text-black text-[26px] tracking-[0] leading-[17px]">
            bookly
          </button>
        </Link>
      </div>
      <div className="absolute w-[374px] h-[14px] top-[37px] left-[508px]">
        <Link href="/all">
          <button className="absolute w-[17px] h-[14px] -top-px left-[30px] [font-family:'NIXGONFONTS_v2.0-L',Helvetica] font-normal text-black text-[18px] tracking-[0] leading-[14px] whitespace-nowrap transition duration-300 ease-in-out hover:text-gray-500">
            All
          </button>
        </Link>
        <Link href="/best">
          <button className="absolute w-[17px] h-[14px] -top-px left-[230px] [font-family:'NIXGONFONTS_v2.0-L',Helvetica] font-normal text-black text-[18px] tracking-[0] leading-[14px] whitespace-nowrap transition duration-300 ease-in-out hover:text-gray-500">
            Best
          </button>
        </Link>
        <Link href="/audio">
          <button className="absolute w-[17px] h-[14px] -top-px left-[430px] [font-family:'NIXGONFONTS_v2.0-L',Helvetica] font-normal text-black text-[18px] tracking-[0] leading-[14px] whitespace-nowrap transition duration-300 ease-in-out hover:text-gray-500">
            Audio
          </button>
        </Link>
        <Link href="/event">
          <button className="absolute w-[17px] h-[14px] -top-px left-[630px] [font-family:'NIXGONFONTS_v2.0-L',Helvetica] font-normal text-black text-[18px] tracking-[0] leading-[14px] whitespace-nowrap transition duration-300 ease-in-out hover:text-gray-500">
            Event
          </button>
        </Link>
      </div>
      <div className="absolute w-[72px] h-[22px] top-[30px] left-[1628px] all-[unset] box-border">
        <button className="absolute w-[66px] h-[20px] top-0 left-0 [font-family:'NIXGONFONTS_v2.0-L',Helvetica] font-normal text-black text-[18px] tracking-[0] leading-[14px] whitespace-nowrap transition duration-300 ease-in-out hover:text-gray-500">
          Search
        </button>
      </div>
    </div>
  );
}
