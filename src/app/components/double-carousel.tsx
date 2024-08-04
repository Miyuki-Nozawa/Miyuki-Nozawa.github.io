"use client";

import Image from "next/image";
import { useState } from "react";

export default function DoubleCarousel({ prefix }: { prefix: string }) {
  const [current, setCurrent] = useState([1, 2]);

  const handleChange = (count: number) => {
    setCurrent(([prevOne, prevTwo]) => {
      const nextOne = prevOne + count;
      const nextTwo = prevTwo + count;
      if (nextTwo > 6 || nextOne < 1) return [prevOne, prevTwo];
      return [nextOne, nextTwo];
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
        <div className="w-[825px] flex justify-between">
          <Image
            src={`/pibu/${prefix}-${current[0]}.png`}
            alt={prefix}
            width={400}
            height={792}
          />
          <Image
            src={`/pibu/${prefix}-${current[1]}.png`}
            alt={prefix}
            width={400}
            height={792}
          />
        </div>
        <div
          className="relative w-[20px] h-[36px] hover:cursor-pointer"
          onClick={() => handleChange(1)}
        >
          <Image src="/icons/right.svg" alt="Next" fill />
        </div>
      </div>
      <div className="flex space-x-[7px] w-[825px] mx-auto">
        <div className="relative w-[133px] h-[150px]">
          <Image
            src={`/pibu/${prefix}-1-sm.png`}
            alt={prefix}
            className="hover:cursor-pointer"
            onClick={() => setCurrent(1)}
            fill
          />
          {!current.includes(1) && (
            <div className="absolute top-0 left-0 w-full h-full bg-overlay pointer-events-none"></div>
          )}
        </div>
        <div className="relative w-[133px] h-[150px]">
          <Image
            src={`/pibu/${prefix}-2-sm.png`}
            alt={prefix}
            className="hover:cursor-pointer"
            onClick={() => setCurrent(2)}
            fill
          />
          {!current.includes(2) && (
            <div className="absolute top-0 left-0 w-full h-full bg-overlay pointer-events-none"></div>
          )}
        </div>
        <div className="relative w-[133px] h-[150px]">
          <Image
            src={`/pibu/${prefix}-3-sm.png`}
            alt={prefix}
            className="hover:cursor-pointer"
            onClick={() => setCurrent(3)}
            fill
          />
          {!current.includes(3) && (
            <div className="absolute top-0 left-0 w-full h-full bg-overlay pointer-events-none"></div>
          )}
        </div>
        <div className="relative w-[133px] h-[150px]">
          <Image
            src={`/pibu/${prefix}-4-sm.png`}
            alt={prefix}
            className="hover:cursor-pointer"
            onClick={() => setCurrent(4)}
            fill
          />
          {!current.includes(4) && (
            <div className="absolute top-0 left-0 w-full h-full bg-overlay pointer-events-none"></div>
          )}
        </div>
        <div className="relative w-[133px] h-[150px]">
          <Image
            src={`/pibu/${prefix}-5-sm.png`}
            alt={prefix}
            className="hover:cursor-pointer"
            onClick={() => setCurrent(5)}
            fill
          />
          {!current.includes(5) && (
            <div className="absolute top-0 left-0 w-full h-full bg-overlay pointer-events-none"></div>
          )}
        </div>
        <div className="relative w-[133px] h-[150px]">
          <Image
            src={`/pibu/${prefix}-6-sm.png`}
            alt={prefix}
            className="hover:cursor-pointer"
            onClick={() => setCurrent(6)}
            fill
          />
          {!current.includes(6) && (
            <div className="absolute top-0 left-0 w-full h-full bg-overlay pointer-events-none"></div>
          )}
        </div>
      </div>
    </div>
  );
}
