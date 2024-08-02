import Image from "next/image";
import { useState } from "react";

export default function Carousel({ prefix }: { prefix: string }) {
  const [current, setCurrent] = useState(1);

  const handleChange = (count: number) => {
    setCurrent((prev) => {
      const next = prev + count;
      if (next > 4 || next < 1) return prev;
      return next;
    });
  };

  return (
    <div className="space-y-7">
      <div className="flex items-center justify-between w-full">
        <div
          className="relative w-[20px] h-[36px] hover:cursor-pointer"
          onClick={() => handleChange(-1)}
        >
          <Image src="/icons/left.svg" alt="Previous" fill />
        </div>
        <Image
          src={`/korean-air/${prefix}-${current}.png`}
          alt={prefix}
          width={800}
          height={568}
        />
        <div
          className="relative w-[20px] h-[36px] hover:cursor-pointer"
          onClick={() => handleChange(1)}
        >
          <Image src="/icons/right.svg" alt="Next" fill />
        </div>
      </div>
      <div className="flex space-x-[7px] w-[800px] mx-auto">
        <div className="relative w-[194px] h-[138px]">
          <Image
            src={`/korean-air/${prefix}-1-sm.png`}
            alt={prefix}
            className="hover:cursor-pointer"
            onClick={() => setCurrent(1)}
            fill
          />
          {current !== 1 && (
            <div className="absolute top-0 left-0 w-full h-full bg-overlay pointer-events-none"></div>
          )}
        </div>
        <div className="relative w-[194px] h-[138px]">
          <Image
            src={`/korean-air/${prefix}-2-sm.png`}
            alt={prefix}
            className="hover:cursor-pointer"
            onClick={() => setCurrent(2)}
            fill
          />
          {current !== 2 && (
            <div className="absolute top-0 left-0 w-full h-full bg-overlay pointer-events-none"></div>
          )}
        </div>
        <div className="relative w-[194px] h-[138px]">
          <Image
            src={`/korean-air/${prefix}-3-sm.png`}
            alt={prefix}
            className="hover:cursor-pointer"
            onClick={() => setCurrent(3)}
            fill
          />
          {current !== 3 && (
            <div className="absolute top-0 left-0 w-full h-full bg-overlay pointer-events-none"></div>
          )}
        </div>
        <div className="relative w-[194px] h-[138px]">
          <Image
            src={`/korean-air/${prefix}-4-sm.png`}
            alt={prefix}
            className="hover:cursor-pointer"
            onClick={() => setCurrent(4)}
            fill
          />
          {current !== 4 && (
            <div className="absolute top-0 left-0 w-full h-full bg-overlay pointer-events-none"></div>
          )}
        </div>
      </div>
    </div>
  );
}
