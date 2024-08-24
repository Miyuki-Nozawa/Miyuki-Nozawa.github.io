import Image from "next/image";
import Text from "./components/text";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col justify-between pt-[90px] p-[20px] lg:p-16 pb-24 space-y-24 bg-base">
      {/* Hero */}
      <div className="flex flex-col lg:flex-row">
        <div className="order-2 lg:order-1 lg:space-y-10 lg:pr-2 lg:pt-2 flex flex-col justify-between w-full lg:w-[480px] lg:mr-12">
          <div className="font-manrope text-[24px] lg:text-5xl	font-bold tracking-widest text-dark">
            Miyuki Nozawa
          </div>
          <div className="mt-[10px] lg:mt-0 text-[16px] lg:text-[26px] tracking-[.02em] text-dark">
            UX/UI designer based in New York. I aim to leverage my international
            background and experience across various industries to help provide
            consumers with richer experiences through websites.
          </div>
          <button
            className={
              "mt-[30px] lg:mt-0 w-full lg:w-52 h-[45px] lg:h-16 text-[16px] lg:text-xl tracking-[.02em] lg:tracking-widest font-medium rounded-md bg-light-green"
            }
          >
            <Link href="/about">Learn More</Link>
          </button>
        </div>
        <div className="order-1 min-h-[214px] lg:order-2 w-full lg:w-[785px] relative flex-auto mb-6 lg:mb-0">
          <Image
            src="/home/hero.jpg"
            alt="me"
            className="ml-auto rounded-md object-cover"
            fill
          />
        </div>
      </div>
      {/* Featured Projects */}
      <div className="space-y-[30px] lg:space-y-12">
        {/* resto */}
        <div className="flex flex-col lg:flex-row space-y-[30px] px-[30px] py-[30px] lg:px-[100px] lg:py-16 min-h-[690px] bg-beige rounded-[30px] lg:rounded-[10px] shadow-md">
          <div className="w-full lg:w-[38vw] max-w-[560px] lg:flex justify-center items-center relative">
            <div className="w-full min-h-[277px] ml-auto aspect-square bg-brown11 rounded-[50%] lg:absolute"></div>
            <div className="w-full min-h-[277px] absolute top-0 right-0 aspect-square">
              <div className="w-[183px] lg:w-[368px] h-[258px] lg:h-[522px]">
                <Image
                  src="/resto/front.png"
                  alt="resto"
                  fill
                  className="z-10 object-contain"
                />
              </div>
            </div>
          </div>
          <div className="space-y-[20px] lg:space-y-11 lg:w-[500px] lg:ml-[50px]">
            <Image
              src="/resto/logo.svg"
              alt="resto"
              width={120}
              height={120}
              className="mx-auto lg:mx-0"
            />
            <Text className="text-[16px] font-medium">
              An app where travelers can make and manage restaurant reservations
              easily in Japan
            </Text>
            <div className="text-[14px] lg:text-[22px] tracking-[.02em] space-y-[10px]">
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
            <div className="pt-[10px] lg:pt-0">
              <Link href="/projects/resto">
                <div className="bg-dark-green w-full lg:w-[310px] h-[45px] lg:h-[65px] flex justify-center items-center rounded-[40px] text-[16px] lg:text-[22px] text-white font-medium lg:font-semibold tracking-[.02em]">
                  View case study
                </div>
              </Link>
            </div>
          </div>
        </div>
        {/* korean air */}
        <div className="flex flex-col lg:flex-row py-[30px] lg:py-16 px-[30px] lg:px-[100px] min-h-[690px] bg-gray rounded-[30px] lg:rounded-[10px] shadow-lg items-center justify-center">
          <div className="order-2 lg:order-1 space-y-[20px] lg:space-y-11 lg:w-[500px] my-auto">
            <div className="w-full lg:w-[340px] min-h-[46px] lg:h-[54px] relative mt-[30px] lg:mt-0">
              <Image
                src="/korean-air/logo.png"
                alt="korean-air"
                fill
                className="object-contain"
              />
            </div>
            <Text className="text-[16px] font-medium">
              A feature that enables effective utilization of mileage
            </Text>
            <div className="text-[14px] lg:text-[22px] tracking-[.02em] space-y-[10px]">
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
            <div className="pt-[10px] lg:pt-0">
              <Link href="/projects/korean-air">
                <div className="bg-brown3 w-full lg:w-[310px] h-[46px] lg:h-[65px] flex justify-center items-center rounded-[40px] text-[18px] lg:text-[22px] font-medium lg:font-semibold tracking-[.02em]">
                  View case study
                </div>
              </Link>
            </div>
          </div>
          <div className="order-1 lg:order-2 w-full lg:w-[38vw] max-w-[560px] lg:flex justify-center items-center relative lg:ml-auto">
            <div className="w-full min-h-[168px] aspect-square bg-gray2 rounded-[50%] lg:absolute"></div>
            <div className="w-full min-h-[168px] absolute lg:relative top-0 right-0 aspect-square">
              <div className="w-[300px] lg:w-[660px] h-[168px] lg:h-[370px]">
                <Image
                  src="/korean-air/prototype-2.png"
                  alt="korean air"
                  fill
                  className="z-10 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        {/* pibu */}
        <div className="flex flex-col lg:flex-row space-y-[30px] px-[30px] py-[30px] lg:px-[100px] lg:py-16 min-h-[690px] bg-beige rounded-[30px] lg:rounded-[10px] shadow-md items-center">
          <div className="w-full lg:w-[38vw] max-w-[560px] lg:flex justify-center items-center relative">
            <div className="w-full min-h-[277px] ml-auto aspect-square bg-light-green rounded-[50%] lg:absolute"></div>
            <div className="w-full min-h-[277px] absolute lg:relative top-0 right-0 aspect-square">
              <div className="w-[302px] lg:w-[562px] h-[170px] lg:h-[316px]">
                <Image
                  src="/pibu/hero-sm.png"
                  alt="pibu"
                  fill
                  className="z-10 object-contain"
                />
              </div>
            </div>
          </div>
          <div className="space-y-[20px] lg:space-y-11 lg:w-[500px] lg:ml-[50px] my-auto">
            <Image
              src="/pibu/logo.svg"
              alt="pibu"
              width={120}
              height={120}
              className="mx-auto lg:mx-0"
            />
            <Text className="text-[16px] font-medium">
              A website to introduce a local business and expand their business
            </Text>
            <div className="text-[14px] lg:text-[22px] tracking-[.02em] space-y-[10px]">
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
            <div className="pt-[10px] lg:pt-0">
              <Link href="/projects/pibu">
                <div className="bg-brown w-full lg:w-[310px] h-[45px] lg:h-[65px] flex justify-center items-center rounded-[40px] text-[16px] lg:text-[22px] text-white font-medium lg:font-semibold tracking-[.02em]">
                  View case study
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* bottom */}
      <div className="w-full lg:w-[1016px] space-y-[20px] lg:space-y-9 mx-auto lg:py-24">
        <div className="font-manrope font-extrabold text-[20px] lg:text-4xl tracking-[.02em]">
          Let&apos;s work together!
        </div>
        <Text className="text-[16px]">
          Thank you for taking an interest in my work.
          <br />
          Let’s connect and create a product that solves real user problems
          together.
        </Text>
        <div className="space-x-[30px] lg:space-x-12 flex">
          <Link href="mailto:nozawa.myk@gmail.com" target="_blank">
            <div className="w-[34px] lg:w-[45px] h-[30px] lg:h-[40px] relative">
              <Image src="/icons/email.svg" alt="email" fill />
            </div>
          </Link>
          <Link href="https://www.linkedin.com/in/miyuki-nozawa/" target="_blank">
            <div className="w-[30px] lg:w-[40px] h-[30px] lg:h-[40px] relative">
              <Image src="/icons/linkedin.svg" alt="linkedin" fill />
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
