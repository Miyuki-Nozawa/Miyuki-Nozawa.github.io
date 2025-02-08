import Image from "next/image";
import { handleCursorHoverStart, handleCursorHoverStop } from "../cursor";
import Link from "next/link";
import Button from "./button";

export default function ProjectCard({
  tags,
  title,
  subtitle,
  description,
  img,
  page,
  mirror,
  disabled,
  locked,
  action,
}: {
  tags: string[];
  title: string;
  subtitle: string;
  description: string;
  img: string;
  page: string;
  mirror?: boolean;
  disabled?: boolean;
  locked?: boolean;
  action?: () => void;
}) {
  return (
    <div
      className={
        "bg-light-ivory rounded-[60px] lg:rounded-[200px] m-[8px] lg:m-5 " +
        "px-[60px] py-[50px] lg:py-[160px]"
      }
    >
      <div
        className={
          "flex flex-col lg:flex-row tracking-[.01em] space-y-[30px] " +
          "lg:space-y-0 lg:space-x-5 lg:max-w-[1280px] mx-auto "
        }
      >
        <div
          className={
            "px-[10px] lg:px-0 mx-auto w-[65vw] min-h-[200px] lg:w-1/2 relative " +
            (mirror ? "lg:order-2" : "lg:order-1")
          }
        >
          <Image src={img} alt={title} className="object-contain" fill />
        </div>
        <div
          className={
            "w-full lg:w-1/2 px-0 lg:px-[35px] space-y-[4vw] lg:space-y-[30px] " +
            (mirror ? "lg:order-1" : "lg:order-2")
          }
        >
          <div className="flex flex-wrap gap-[1.5vw] lg:gap-[20px]">
            {tags.map((tag) => (
              <div
                key={tag}
                className={
                  "bg-[rgba(210,211,196,0.60)] px-[2.5vw] lg:px-[30px] py-[1.75vw] lg:py-[12px] text-[#364922] " +
                  "text-[10px] lg:text-[16px] tracking-[.01em] rounded-[5px] lg:rounded-[10px] flex"
                }
              >
                {tag}
              </div>
            ))}
          </div>
          <div className="space-y-[2vw] lg:space-y-[10px]">
            <div className="text-[4.5vw] lg:text-[27px] tracking-[.01em] font-semibold lg:font-medium">
              {title}
            </div>
            <div className="text-[6vw] lg:text-[41px] tracking-[.01em] font-semibold">
              {subtitle}
            </div>
            <div className="text-[4vw] lg:text-[18px] font-normal tracking-[.01em] pt-[12px] lg:py-[20px]">
              {description}
            </div>
          </div>
          <div className="flex space-x-[20px]">
            <div className="pt-[2vw] lg:pt-0">
              {disabled ? (
                <Button disabled>Coming Soon!</Button>
              ) : locked ? (
                <Button action={action}>View Case Study</Button>
              ) : (
                <Button url={page}>View Case Study</Button>
              )}
            </div>
            {locked && (
              <div className="flex items-center space-x-[8px]">
                <Image
                  src="/icons/lock.svg"
                  alt="lock"
                  width={30}
                  height={30}
                />
                <span className="text-[18px] font-medium tracking-[.01em]">
                  Password Required
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
