"use client";

import Image from "next/image";
import { useState } from "react";

export default function Carousel({
  width,
  height,
  items,
  nav,
}: {
  width: number;
  height: number;
  items: string[];
  nav?: {
    itemClassName: string;
    items: string[];
  };
}) {
  const [current, setCurrent] = useState(0);

  const handleChange = (count: number) => {
    setCurrent((prev) => {
      const next = prev + count;
      if (next > items.length - 1 || next < 0) return prev;
      return next;
    });
  };

  return (
    items && (
      <div className="space-y-7 w-full">
        <div className="flex items-center justify-between w-full">
          <div
            className="relative w-[20px] h-[36px] hover:cursor-pointer"
            onClick={() => handleChange(-1)}
          >
            <Image
              src="/icons/left.svg"
              alt="Previous"
              className={current === 0 ? "opacity-20" : ""}
              fill
            />
          </div>
          <Image
            src={items[current]}
            alt={`Image ${current + 1}`}
            width={width}
            height={height}
          />
          <div
            className="relative w-[20px] h-[36px] hover:cursor-pointer"
            onClick={() => handleChange(1)}
          >
            <Image
              src="/icons/right.svg"
              alt="Next"
              className={current === items.length - 1 ? "opacity-20" : ""}
              fill
            />
          </div>
        </div>
        {nav && (
          <div className="flex space-x-[7px] w-[800px] mx-auto">
            {nav.items.map((item, index) => (
              <div
                key={index}
                className={`relative ${nav.itemClassName} hover:cursor-pointer`}
                onClick={() => setCurrent(index)}
              >
                <Image src={item} alt={`Item ${index + 1}`} fill />
                {current !== index && (
                  <div className="absolute top-0 left-0 w-full h-full bg-overlay pointer-events-none"></div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    )
  );
}
