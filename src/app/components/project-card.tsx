import Image from "next/image";
import { handleCursorHoverStart, handleCursorHoverStop } from "../cursor";
import Link from "next/link";

export default function ProjectCard({
  tags,
  title,
  subtitle,
  description,
  img,
  mirror,
}: {
  tags: string[];
  title: string;
  subtitle: string;
  description: string;
  img: string;
  mirror?: boolean;
}) {
  return (
    <div className="bg-light-ivory rounded-[200px] m-5 px-[60px] py-[160px] flex tracking-[.01em] space-x-5">
      <div className={`w-1/2 relative ${mirror ? "order-2" : "order-1"}`}>
        <Image src={img} alt={title} className="object-contain" fill />
      </div>
      <div
        className={`w-1/2 px-[35px] space-y-[30px] ${
          mirror ? "order-1" : "order-2"
        }`}
      >
        <div className="flex space-x-[20px]">
          {tags.map((tag) => (
            <div
              key={tag}
              className="bg-base3 px-[30px] py-[12px] text-[16px] rounded-[10px]"
            >
              {tag}
            </div>
          ))}
        </div>
        <div className="space-y-[10px]">
          <div className="text-[27px] font-medium">{title}</div>
          <div className="text-[41px] font-semibold">{subtitle}</div>
          <div className="text-[18px] py-[20px]">{description}</div>
        </div>
        <div>
          <Link href={`/projects/${title.toLowerCase()}`}>
            <button
              className="inline-block relative overflow-hidden px-[40px] py-[15px] text-[18px] font-semibold bg-dark-green text-white rounded-[32px] transition-colors duration-300 ease-in-out group"
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
  );
}
