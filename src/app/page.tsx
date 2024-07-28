import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col justify-between p-16">
      {/* Hero */}
      <div className="flex mb-16">
        <div className="flex-1 space-y-10 pr-2 pt-2 flex flex-col justify-between">
          <div className="font-manrope text-5xl	font-bold tracking-widest text-dark">
            Miyuki Nozawa
          </div>
          <div className="text-2xl tracking-widest text-dark font-light leading-relaxed">
            UX/UI designer based in New York. I aim to leverage my international
            background and experience across various industries to help provide
            consumers with richer experiences through websites.
          </div>
          <button className="w-52 h-20 text-xl tracking-widest border font-light border-black rounded-md">
            Learn More
          </button>
        </div>
        <div className="flex-none w-2/3 relative">
          <Image
            src="/stock/hero-right.png"
            alt=""
            className="ml-auto"
            width={785}
            height={480}
          />
        </div>
      </div>
      {/* Featured Projects */}
      <div className="flex my-16 items-center w-full overflow-x-hidden">
        <div className="-rotate-90 w-56 h-32 font-manrope text-4xl font-bold tracking-widest leading-relaxed mr-8">
          Featured Projects
        </div>
        <div className="flex space-x-12 overflow-scroll w-full [&>div]:flex-shrink-0 py-14">
          <div className="relative w-[41rem] h-[30rem]">
            <Image src="/stock/project-placeholder.png" alt="project" fill />
          </div>
          <div className="relative w-[41rem] h-[30rem]">
            <Image src="/stock/project-placeholder.png" alt="project" fill />
          </div>
          <div className="relative w-[41rem] h-[30rem]">
            <Image src="/stock/project-placeholder.png" alt="project" fill />
          </div>
          <div className="relative w-[41rem] h-[30rem]">
            <Image src="/stock/project-placeholder.png" alt="project" fill />
          </div>
        </div>
      </div>
    </main>
  );
}
