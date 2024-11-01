import Image from "next/image";
import { handleCursorHoverStart, handleCursorHoverStop } from "../cursor";
import Link from "next/link";

export default function ProjectCard({
  tags,
  title,
  subtitle,
  description,
  img,
  page,
  mirror,
}: {
  tags: string[];
  title: string;
  subtitle: string;
  description: string;
  img: string;
  page: string;
  mirror?: boolean;
}) {
  return (
    <div className="bg-light-ivory rounded-[60px] lg:rounded-[200px] m-[8px] lg:m-5 px-[60px] py-[50px] lg:py-[160px]">
      <div className="flex flex-col lg:flex-row tracking-[.01em] space-y-[30px] lg:space-y-0 lg:space-x-5 lg:max-w-[1280px] mx-auto">
        <div
          className={`px-[10px] lg:px-0 mx-auto w-[254px] min-h-[200px] lg:w-1/2 relative ${
            mirror ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <Image src={img} alt={title} className="object-contain" fill />
        </div>
        <div
          className={`w-full lg:w-1/2 px-0 lg:px-[35px] space-y-[20px] lg:space-y-[30px] ${
            mirror ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <div className="flex space-x-[6px] lg:space-x-[20px]">
            {tags.map((tag) => (
              <div
                key={tag}
                className="bg-base3 px-[10px] lg:px-[30px] py-[7px] lg:py-[12px] text-[10px] lg:text-[16px] tracking-[.01em] rounded-[5px] lg:rounded-[10px] flex"
              >
                {tag}
              </div>
            ))}
          </div>
          <div className="space-y-[8px] lg:space-y-[10px]">
            <div className="text-[18px] lg:text-[27px] tracking-[.01em] font-semibold lg:font-medium">
              {title}
            </div>
            <div className="text-[22px] lg:text-[41px] tracking-[.01em] font-semibold">
              {subtitle}
            </div>
            <div className="text-[16px] lg:text-[18px] font-normal tracking-[.01em] pt-[12px] lg:py-[20px]">
              {description}
            </div>
          </div>
          <div className="pt-[10px] lg:pt-0">
            <Link href={page}>
              <button
                className="w-full lg:w-auto inline-block relative overflow-hidden px-[11px] lg:px-[40px] py-[10px] lg:py-[15px] text-[16px] lg:text-[20px] font-semibold bg-dark-green text-white rounded-[22px] lg:rounded-[32px] transition-colors duration-300 ease-in-out group tracking-[.01em]"
                onMouseEnter={handleCursorHoverStart}
                onMouseLeave={handleCursorHoverStop}
              >
                <span className="relative z-10 group-hover:text-black transition-all duration-500">
                  View Case Study
                </span>
                <span className="absolute w-[250px] h-[250px] inset-0 bg-projectCardButtonHover rounded-full translate-y-[20%] group-hover:translate-y-0 scale-0 group-hover:scale-125 transition-transform duration-500 ease-out origin-bottom"></span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
