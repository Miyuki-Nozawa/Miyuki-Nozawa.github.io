import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <main>
      {/* hero */}
      <div className="min-h-[854px]">
        <Image
          src="/contact/hero.jpg"
          alt="hero"
          width={1440}
          height={854}
          className="absolute top-0 opacity-80 z-0"
        />
        <div className="flex items-center h-[662px] absolute top-[192px] z-10 pl-[188px]">
          <div className="font-manrope font-extrabold tracking-widest text-[80px]">
            Contact
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center h-[746px]">
        <div className="space-y-12 text-[22px]">
          <div className="flex items-center space-x-12">
            <Image src="/icons/email.svg" alt="email" width={45} height={45} />
            <div>
              <Link href="mailto:nozawa.myk@gmail.com" target="_blank">
                nozawa.myk@gmail.com
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-12">
            <Image
              src="/icons/linkedin.svg"
              alt="linkedin"
              width={45}
              height={45}
            />
            <div>
              <Link
                href="https://www.linkedin.com/in/miyuki-nozawa/"
                target="_blank"
              >
                https://www.linkedin.com/in/miyuki-nozawa/
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-12">
            <Image
              src="/icons/dribbble.svg"
              alt="dribbble"
              width={45}
              height={45}
            />
            <div>
              <Link href="https://dribbble.com/MiyukiN" target="_blank">
                https://dribbble.com/MiyukiN
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
