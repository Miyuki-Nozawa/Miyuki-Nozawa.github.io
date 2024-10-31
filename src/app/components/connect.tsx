import Image from "next/image";
import Link from "next/link";
import { handleCursorHoverStart, handleCursorHoverStop } from "@/app/cursor";

export default function Connect() {
  return (
    <>
      <div className="text-white font-bold text-[60.75px]">
        Let&apos;s connect!
      </div>
      <div className="font-semibold text-[22px] flex space-x-[30px]">
        <Link
          href="mailto:nozawa.myk@gmail.com"
          target="_blank"
          onMouseEnter={handleCursorHoverStart}
          onMouseLeave={handleCursorHoverStop}
        >
          <div className="flex items-center space-x-[20px] bg-beige rounded-[100px] px-[40px] py-[15px]">
            <Image src="/icons/email.svg" alt="email" width={37} height={33} />
            <span>Email</span>
          </div>
        </Link>
        <Link
          href="https://linkedin.com/in/miyuki-nozawa"
          target="_blank"
          onMouseEnter={handleCursorHoverStart}
          onMouseLeave={handleCursorHoverStop}
        >
          <div className="flex items-center space-x-[20px] bg-beige rounded-[100px] px-[40px] py-[15px]">
            <Image
              src="/icons/linkedin.svg"
              alt="linkedin"
              width={33}
              height={33}
            />
            <span>LinkedIn</span>
          </div>
        </Link>
      </div>
    </>
  );
}
