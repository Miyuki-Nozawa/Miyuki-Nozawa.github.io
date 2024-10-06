import Image from "next/image";

export default function Resto() {
  return (
    <div>
      {/* Hero */}
      <div className="bg-light-ivory py-[100px]">
        <div className="max-w-[1052px] mx-auto">
          <div className="text-[40px] font-bold tracking-[.01em]">Resto</div>
          <div className="text-[60px] font-bold tracking-[.01em]">
            Dining App in Japan
          </div>
          <div className="text-[27px] font-semibold tracking-[.01em] my-[30px]">
            A mobile app that simplifies restaurant discovery and reservation
            management for travelers in Japan.
          </div>
          <div className="flex justify-between items-end my-[50px]">
            <video className="w-[274px] h-[550px]" autoPlay muted loop>
              <source src="/resto/hero.mp4" type="video/mp4" />
            </video>
            <Image
              src="/resto/screen-1.png"
              alt="Resto"
              width={206}
              height={453}
            />
            <Image
              src="/resto/screen-2.png"
              alt="Resto"
              width={206}
              height={453}
            />
            <Image
              src="/resto/screen-3.png"
              alt="Resto"
              width={206}
              height={453}
            />
          </div>
          <div className="flex justify-between">
            <div className="space-y-[20px]">
              <div>Role: UX/UI Designer</div>
              <div>Type: End-to-end-application</div>
              <div>Timeline: June - Aug 2024</div>
            </div>
            <div className="self-end flex bg-brown3 rounded-[75px] px-[60px] py-[15px] justify-center items-center text-black text-[20px] font-semibold tracking-[.02em]">
              View Hi-fi prototype
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
