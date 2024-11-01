import Image from "next/image";
import Link from "next/link";
import { handleCursorHoverStart, handleCursorHoverStop } from "@/app/cursor";

export default function Connect() {
  return (
    <>
      <div className="text-white font-bold text-[7.25vw] lg:text-[60.75px]">
        Let&apos;s connect!
      </div>
      <div className="font-semibold text-[4vw] lg:text-[22px] flex space-x-[4vw] lg:space-x-[30px]">
        <Link
          href="mailto:nozawa.myk@gmail.com"
          target="_blank"
          onMouseEnter={handleCursorHoverStart}
          onMouseLeave={handleCursorHoverStop}
        >
          <div className="flex items-center space-x-[1.25vw] lg:space-x-[20px] bg-beige rounded-[27px] lg:rounded-[100px] px-[5vw] lg:px-[40px] py-[2.5vw] lg:py-[15px]">
            <Image
              src="/icons/email.svg"
              alt="email"
              width={37}
              height={33}
              className="w-[6.4vw] h-[6.4vw] lg:w-[37px] lg:h-[33px]"
            />
            <span>Email</span>
          </div>
        </Link>
        <Link
          href="https://linkedin.com/in/miyuki-nozawa"
          target="_blank"
          onMouseEnter={handleCursorHoverStart}
          onMouseLeave={handleCursorHoverStop}
        >
          <div className="flex items-center space-x-[1.25vw] lg:space-x-[20px] bg-beige rounded-[27px] lg:rounded-[100px] px-[5vw] lg:px-[40px] py-[2.5vw] lg:py-[15px]">
            <Image
              src="/icons/linkedin.svg"
              alt="linkedin"
              width={33}
              height={33}
              className="w-[4.5vw] h-[4.5vw] lg:w-[33px] lg:h-[33px]"
            />
            <span>LinkedIn</span>
          </div>
        </Link>
      </div>
    </>
  );
}
