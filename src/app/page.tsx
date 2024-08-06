import Image from "next/image";
import Text from "./components/text";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col justify-between p-16 pb-24 space-y-24">
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
      <div className="flex my-16 items-center w-full overflow-x-hidden h-[660px]">
        <div
          className={
            "-rotate-90 w-56 h-32 font-manrope text-[46px] font-bold tracking-widest mr-8"
          }
        >
          Featured Projects
        </div>
        <div className="flex space-x-12 overflow-scroll w-full [&>div]:flex-shrink-0 py-14">
          {/* resto feature */}
          <div className="p-12 space-x-12 bg-beige rounded-lg flex w-[656px] h-[490px]">
            <Image src="/resto/hero.png" alt="Resto" width={188} height={380} />
            <div className="flex flex-col justify-between">
              <div className="space-y-5">
                <div className="flex items-center space-x-4">
                  <Image
                    src="/resto/logo.svg"
                    alt="Resto"
                    width={58}
                    height={58}
                  />
                  <div className="text-[16px] tracking-[.02em]">
                    A restaurant reservation app
                  </div>
                </div>
                <div className="font-manrope text-xl font-extrabold tracking-[.02em]">
                  An app where travelers can make and manage restaurant
                  reservations easily in Japan
                </div>
              </div>
              <div className="text-[16px] tracking-[.02em] space-y-[10px]">
                <div>
                  <b className="font-semibold">Project type:</b> End-to-end
                  application
                </div>
                <div>
                  <b className="font-semibold">Role:</b> Sole UX/UI designer
                </div>
                <div>
                  <b className="font-semibold">Industry:</b> Restaurant
                </div>
              </div>
              <div
                className={
                  "bg-dark-green py-[10px] px-10 rounded-3xl text-[14px] " +
                  "font-semibold tracking-[.02em] w-[200px] text-white"
                }
              >
                <Link href="/projects/resto">View case study</Link>
              </div>
            </div>
          </div>
          {/* korean air feature */}
          <div className="px-8 py-16 space-y-11 bg-beige rounded-lg">
            <div className="space-y-5 px-4">
              <Image
                src="/korean-air/logo.png"
                alt="Korean Air"
                width={240}
                height={40}
              />
              <div className="font-manrope text-[20px] font-extrabold tracking-[.02em]">
                A feature that enables effective utilization of mileage
              </div>
            </div>
            <div className="flex space-x-[15px]">
              <Image
                src="/korean-air/hero.png"
                alt="Korean Air"
                width={350}
                height={197}
              />
              <div className="flex flex-col">
                <div className="my-auto space-y-[7px]">
                  <div className="text-[16px] tracking-[.02em]">
                    <b className="font-semibold">Project type:</b> Add a feature
                  </div>
                  <div className="text-[16px] tracking-[.02em]">
                    <b className="font-semibold">Role:</b> UX/UI Designer
                  </div>
                  <div className="text-[16px] tracking-[.02em]">
                    <b className="font-semibold">Industry:</b> Airline
                  </div>
                </div>
                <div
                  className={
                    "mt-auto bg-brown3 rounded-3xl px-7 py-[10px] text-[14px] " +
                    "font-semibold w-[180px]"
                  }
                >
                  <Link href="/projects/korean-air">View case study</Link>
                </div>
              </div>
            </div>
          </div>
          {/* pibu feature */}
          <div className="px-10 py-11 space-y-11 bg-beige rounded-lg w-[656px] h-[490px]">
            <div className="space-y-5">
              <Image src="/pibu/logo.svg" alt="Pibu" width={114} height={64} />
              <div className="font-manrope text-[20px] font-extrabold tracking-[.02em]">
                A website to introduce a local business and expand their
                business
              </div>
            </div>
            <div className="flex space-x-[10px]">
              <Image
                src="/pibu/hero-sm.png"
                alt="Pibu"
                width={356}
                height={220}
              />
              <div className="flex flex-col pb-5">
                <div className="my-auto space-y-[7px] text-[15px] tracking-[.02em]">
                  <div>
                    <b className="font-semibold">Project type:</b> Responsive
                    web design
                  </div>
                  <div>
                    <b className="font-semibold">Role:</b> UX/UI Designer
                  </div>
                  <div>
                    <b className="font-semibold">Industry:</b> Beauty, retail
                  </div>
                </div>
                <div
                  className={
                    "mt-auto bg-brown rounded-3xl px-7 py-[10px] text-[14px] " +
                    "font-semibold w-[180px] text-white"
                  }
                >
                  <Link href="/projects/pibu">View case study</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* bottom */}
      <div className="py-12 space-y-20">
        <div className="flex justify-between space-x-14 h-[374px]">
          <Image
            src="/home/who-i-am.jpg"
            alt="me"
            width={660}
            height={374}
            className="rounded-md"
          />
          <div className="flex flex-col justify-between flex-1">
            <div className="font-manrope text-4xl font-extrabold tracking-[.02em]">
              Who am I?
            </div>
            <Text>
              Leveraging insights from studying diverse cultures and languages,
              I create designs with deep user research and cultural nuance. I am
              passionate about crafting detailed user experiences that address
              diverse needs.
            </Text>
            <button
              className={
                "text-[22px] w-52 h-16 tracking-widest font-medium rounded-md bg-light-green"
              }
            >
              <Link href="/about">Learn More</Link>
            </button>
          </div>
        </div>
        <div className="flex justify-between space-x-14 h-[374px]">
          <div className="flex flex-col justify-between flex-1 py-[28px]">
            <div className="font-manrope text-4xl font-extrabold tracking-[.02em]">
              Let&apos;s work together!
            </div>
            <Text>
              Thank you for taking an interest in my work. Let’s connect and
              create a product that solves real user problems together.
            </Text>
            <button
              className={
                "text-[22px] w-56 h-16 tracking-widest font-medium rounded-md bg-light-pink"
              }
            >
              <Link href="/contact">Contact me</Link>
            </button>
          </div>
          <Image
            src="/home/laptop.jpg"
            alt="work"
            width={647}
            height={374}
            className="rounded-md"
          />
        </div>
      </div>
    </main>
  );
}
