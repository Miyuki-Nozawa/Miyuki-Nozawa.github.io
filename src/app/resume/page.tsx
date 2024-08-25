import Link from "next/link";
import Image from "next/image";

export default function Resume() {
  return (
    <main>
      <div className="space-y-3 lg:space-y-12 lg:w-[1320px] mx-auto px-5 lg:px-16 pt-[90px] lg:pt-20 pb-20 lg:pb-32">
        <Image src="/resume.png" alt="resume" width={1320} height={1844} className="border-[.265px] border-black" />
        <div className="bg-brown h-[45px] lg:px-16 lg:py-8 rounded-lg text-[18px] lg:text-[22px] font-medium tracking-widest ml-auto w-full lg:w-[314px] text-white flex items-center justify-center">
          <Link href="/resume.pdf" target="_blank">
            Download PDF
          </Link>
        </div>
      </div>
    </main>
  );
}
