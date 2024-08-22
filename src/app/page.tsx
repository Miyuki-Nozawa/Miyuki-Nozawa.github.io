import Image from "next/image";
import Text from "./components/text";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col justify-between p-16 pb-24 space-y-24 bg-base">
      {/* Hero */}
      <div className="flex">
        <div className="flex-1 space-y-10 pr-2 pt-2 flex flex-col justify-between">
          <div className="font-manrope text-5xl	font-bold tracking-widest text-dark">
            Miyuki Nozawa
          </div>
          <div className="text-[26px] tracking-[.02em] text-dark">
            UX/UI designer based in New York. I aim to leverage my international
            background and experience across various industries to help provide
            consumers with richer experiences through websites.
          </div>
          <button
            className={
              "w-52 h-16 text-xl tracking-widest font-medium rounded-md bg-light-green"
            }
          >
            <Link href="/about">Learn More</Link>
          </button>
        </div>
        <div className="flex-none w-[785px] h-[480px] relative">
          <Image
            src="/home/hero.jpg"
            alt="me"
            className="ml-auto rounded-md"
            fill
          />
        </div>
      </div>
      {/* Featured Projects */}
      <div className="space-y-12">
        {/* resto */}
        <div className="py-16 px-[100px] flex bg-beige rounded-[10px] shadow-md">
          <div className="w-[560px] h-[560px] bg-brown11 rounded-[50%] flex justify-center items-center">
            <Image
              src="/resto/front.png"
              alt="resto"
              height={560}
              width={405}
            />
          </div>
          <div className="space-y-11 w-[500px] ml-[50px]">
            <Image src="/resto/logo.svg" alt="resto" width={120} height={120} />
            <Text className="font-medium">
              An app where travelers can make and manage restaurant reservations
              easily in Japan
            </Text>
            <div className="text-[22px] tracking-[.02em] space-y-[10px]">
              <div>
                <span className="font-medium">Project type:</span> End-to-end
                application
              </div>
              <div>
                <span className="font-medium">Role:</span> UX/UI designer
              </div>
              <div>
                <span className="font-medium">Industry:</span> Restaurant
              </div>
            </div>
            <div>
              <Link href="/projects/resto">
                <div
                  className={
                    "bg-dark-green w-[310px] h-[65px] flex justify-center items-center " +
                    "rounded-[40px] text-[22px] text-white font-semibold tracking-[.02em]"
                  }
                >
                  View case study
                </div>
              </Link>
            </div>
          </div>
        </div>
        {/* korean air */}
        <div className="py-16 px-[100px] flex bg-gray rounded-[10px] shadow-md">
          <div className="space-y-11 w-[500px] my-auto">
            <Image
              src="/korean-air/logo.png"
              alt="korean-air"
              width={340}
              height={54}
            />
            <Text className="font-medium">
              A feature that enables effective utilization of mileage
            </Text>
            <div className="text-[22px] tracking-[.02em] space-y-[10px]">
              <div>
                <span className="font-medium">Project type:</span> Add a feature
              </div>
              <div>
                <span className="font-medium">Role:</span> UX/UI designer
              </div>
              <div>
                <span className="font-medium">Industry:</span> Airline
              </div>
            </div>
            <div>
              <Link href="/projects/korean-air">
                <div
                  className={
                    "bg-brown3 w-[310px] h-[65px] flex justify-center items-center " +
                    "rounded-[40px] text-[22px] font-semibold tracking-[.02em]"
                  }
                >
                  View case study
                </div>
              </Link>
            </div>
          </div>
          <div className="w-[560px] h-[560px] bg-gray2 rounded-[50%] flex justify-center items-center">
            <Image
              src="/korean-air/prototype-2.png"
              alt="korean air"
              height={660}
              width={370}
            />
          </div>
        </div>
        {/* pibu */}
        <div className="py-16 px-[100px] flex bg-beige rounded-[10px] shadow-md">
          <div className="w-[560px] h-[560px] bg-light-green rounded-[50%] flex justify-center items-center">
            <Image
              src="/pibu/hero-sm.png"
              alt="pibu"
              height={316}
              width={560}
            />
          </div>
          <div className="space-y-11 w-[500px] ml-[50px] my-auto">
            <Image src="/pibu/logo.svg" alt="pibu" width={120} height={120} />
            <Text className="font-medium">
              A website to introduce a local business and expand their business
            </Text>
            <div className="text-[22px] tracking-[.02em] space-y-[10px]">
              <div>
                <span className="font-medium">Project type:</span> Responsive
                web design
              </div>
              <div>
                <span className="font-medium">Role:</span> UX/UI designer
              </div>
              <div>
                <span className="font-medium">Industry:</span> Beauty,
                e-commerce
              </div>
            </div>
            <div>
              <Link href="/projects/pibu">
                <div
                  className={
                    "bg-brown w-[310px] h-[65px] flex justify-center items-center " +
                    "rounded-[40px] text-[22px] text-white font-semibold tracking-[.02em]"
                  }
                >
                  View case study
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* bottom */}
      <div className="w-[1016px] space-y-9 mx-auto py-24">
        <div className="font-manrope font-extrabold text-4xl tracking-[.02em]">
          Let&apos;s work together!
        </div>
        <Text>
          Thank you for taking an interest in my work.
          <br />
          Let’s connect and create a product that solves real user problems
          together.
        </Text>
        <div className="space-x-12 flex">
          <Link href="mailto:nozawa.myk@gmail.com" target="_blank">
            <Image src="/icons/email.svg" alt="email" width={45} height={40} />
          </Link>
          <Link href="https://www.linkedin.com/in/miyuki-nozawa/">
            <Image
              src="/icons/linkedin.svg"
              alt="linkedin"
              width={40}
              height={40}
            />
          </Link>
        </div>
      </div>
    </main>
  );
}
