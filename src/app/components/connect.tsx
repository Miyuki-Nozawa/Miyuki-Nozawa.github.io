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
          <div
            className={
              "flex items-center space-x-[1.25vw] lg:space-x-[10px] text-white"
            }
          >
            <Image
              src="/icons/email-white.svg"
              alt="email"
              width={37}
              height={33}
              className="w-[6.4vw] h-[6.4vw] lg:w-[37px] lg:h-[33px]"
            />
            <span>nozawa.myk@gmail.com</span>
          </div>
        </Link>
      </div>
    </>
  );
}
