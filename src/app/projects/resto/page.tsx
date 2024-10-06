import Image from "next/image";

export default function Resto() {
  return (
    <div className="space-y-[20px] tracking-[.01em]">
      {/* Hero */}
      <div className="bg-base pt-[100px] pb-[130px] rounded-b-[200px]">
        <div className="max-w-default mx-auto">
          <div className="text-[40px] font-bold">Resto</div>
          <div className="text-[60px] font-bold">Dining App in Japan</div>
          <div className="text-[27px] font-semibold my-[30px]">
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
            <div className="space-y-[20px] text-[22px] font-medium">
              <div>Role: UX/UI Designer</div>
              <div>Type: End-to-end-application</div>
              <div>Timeline: June - Aug 2024</div>
            </div>
            <div className="self-end flex bg-brown3 rounded-[75px] px-[60px] py-[15px] justify-center items-center text-black text-[20px] font-semibold">
              View Hi-fi prototype
            </div>
          </div>
        </div>
      </div>
      {/* introduction */}
      <div className="bg-light-ivory py-[150px] rounded-[200px] mx-[20px]">
        <div className="max-w-default mx-auto">
          <div className="text-[27px]">Introduction</div>
          <div className="space-y-[150px]">
            <div className="space-y-[30px]">
              <div className="text-[40px] font-bold">Background</div>
              <div className="text-[18px]">
                After the pandemic, travel has become more accessible, allowing
                many people to explore various countries. According to a World
                Economic Forum report, Japan is one of the best tourist
                destinations for 2024, with 9.62 million foreign tourists
                visiting in 2023. Many people look forward to experiencing
                Japan&apos;s food culture, but for those unfamiliar with the
                language and culture, finding and booking suitable restaurants
                or cafes can be challenging. Additionally, organizing all the
                reservations and saved restaurants across different apps can be
                disorganized and sometimes difficult.
              </div>
            </div>
            <div className="space-y-[30px]">
              <div className="text-[40px] font-bold">Problems</div>
              <div className="text-[22px] font-medium">
                Travelers often face difficulties in discovering suitable
                restaurants in Japan and managing their reservations
                efficiently.
              </div>
            </div>
            <div className="space-y-[30px]">
              <div className="text-[40px] font-bold">Solutions</div>
              <div className="text-[22px] font-medium">
                Developing an app that allows travelers to search for
                restaurants that match their preferences and manage reservations
                easily, without being hindered by language barriers.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
