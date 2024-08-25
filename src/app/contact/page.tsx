import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <main className="pt-[90px] lg:pt-0 space-y-[75px] lg:space-y-0">
      {/* hero */}
      <div className="lg:min-h-[662px]">
        <Image
          src="/contact/hero.jpg"
          alt="hero"
          width={1440}
          height={854}
          className="lg:absolute lg:top-0 lg:opacity-80 lg:z-0"
        />
        <div className="flex items-center lg:h-[662px] absolute top-[222px] lg:top-[192px] z-10 pl-[30px] lg:pl-[188px]">
          <div className="font-manrope font-extrabold tracking-widest text-[30px] lg:text-[80px]">
            Contact
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center lg:h-[746px] pb-[100px] lg:pb-0 pl-[50px]">
        <div className="space-y-12 lg:text-[22px]">
          <div className="flex items-center space-x-5 lg:space-x-12">
            <div className="w-[35px] lg:w-[45px] h-[30px] lg:h-[45px] relative">
              <Image src="/icons/email.svg" alt="email" fill />
            </div>
            <div>
              <Link
                href="mailto:nozawa.myk@gmail.com"
                target="_blank"
                className="text-[14px]"
              >
                nozawa.myk@gmail.com
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-5 lg:space-x-12">
            <div className="w-[30px] lg:w-[45px] h-[30px] lg:h-[45px] relative">
              <Image src="/icons/linkedin.svg" alt="linkedin" fill />
            </div>
            <div>
              <Link
                href="https://www.linkedin.com/in/miyuki-nozawa/"
                target="_blank"
                className="text-[14px]"
              >
                https://www.linkedin.com/in/miyuki-nozawa/
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
