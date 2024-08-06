import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex justify-between items-center p-16 bg-green mt-auto">
      <Image
        src="/icons/footer.svg"
        alt="miyuki nozawa"
        width={160}
        height={140}
      />
      <div className="flex flex-col space-y-7">
        <div className="text-4xl text-white">Miyuki Nozawa</div>
        <div className="text-3xl text-white">nozawa.myk@gmail.com</div>
      </div>
    </div>
  );
}
