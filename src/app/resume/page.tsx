import Link from "next/link";
import Image from "next/image";

export default function Resume() {
  return (
    <main>
      <div className="space-y-12 w-[1320px] mx-auto pt-20 pb-32">
        <Image src="/resume.png" alt="resume" width={1320} height={1844} />
        <div
          className={
            "bg-brown px-16 py-8 rounded-lg text-[22px] font-medium tracking-widest " +
            "ml-auto w-[314px] text-white"
          }
        >
          <Link href="/resume.pdf" target="_blank">
            Download PDF
          </Link>
        </div>
      </div>
    </main>
  );
}
