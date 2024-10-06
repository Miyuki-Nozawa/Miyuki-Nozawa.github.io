"use client";

import Image from "next/image";
import { useState } from "react";

export default function DoubleCarousel({
  itemClassName,
  items,
  nav,
}: {
  itemClassName: string;
  items: string[];
  nav?: {
    className: string;
    items: string[];
  };
}) {
  const [current, setCurrent] = useState([0, 1]);

  const handleChange = (count: number) => {
    setCurrent((prev) => {
      const next = [prev[0] + count, prev[1] + count];
      if (next[1] > items.length - 1 || next[0] < 1) {
        return prev;
      }
      return next;
    });
  };

  const handleNav = (index: number) => {
    if (current.includes(index)) {
      return;
    }

    if (current[0] > index) {
      setCurrent([index, index + 1]);
    } else {
      setCurrent([index - 1, index]);
    }
  };

  return (
    <div className="space-y-7">
      <div className="flex items-center justify-between w-full">
        <div
          className={`relative w-[20px] h-[36px] ${
            current[0] === 0 ? "opacity-20" : "cursor-default"
          }`}
          onClick={() => handleChange(-1)}
        >
          <Image src="/icons/left.svg" alt="Previous" fill />
        </div>
        <div className="w-[825px] flex justify-between">
          <div className={itemClassName}>
            <Image
              src={items[current[0]]}
              alt={`Item ${current[0]}`}
              className="object-cover object-top"
              fill
            />
          </div>
          <div className={itemClassName}>
            <Image
              src={items[current[1]]}
              alt={`Item ${current[1]}`}
              className="object-cover object-top"
              fill
            />
          </div>
        </div>
        <div
          className={`relative w-[20px] h-[36px] ${
            current[1] === items.length - 1
              ? "opacity-20"
              : "cursor-default"
          }`}
          onClick={() => handleChange(1)}
        >
          <Image src="/icons/right.svg" alt="Next" fill />
        </div>
      </div>
      {nav && (
        <div className="flex space-x-[7px] w-[825px] mx-auto">
          {nav.items.map((item, index) => (
            <div
              key={index}
              className={nav.className}
              onClick={() => handleNav(index)}
            >
              <Image src={item} alt={`Item ${index + 1}`} fill />
              {current.includes(index) && (
                <div className="absolute top-0 left-0 w-full h-full bg-overlay pointer-events-none"></div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
