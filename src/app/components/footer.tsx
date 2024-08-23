import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex justify-between items-center px-[20px] lg:px-16 py-[46px] lg:py-16 bg-green mt-auto">
      <div className="w-[80px] lg:w-[160px] h-[70px] lg:h-[140px] relative">
        <Image src="/icons/footer.svg" alt="miyuki nozawa" fill />
      </div>
      <div className="flex flex-col space-y-[6px] lg:space-y-7 text-right lg:text-left">
        <div className="text-[20px] lg:text-4xl text-white">Miyuki Nozawa</div>
        <div className="text-[16px] lg:text-3xl text-white">
          nozawa.myk@gmail.com
        </div>
      </div>
    </div>
  );
}
