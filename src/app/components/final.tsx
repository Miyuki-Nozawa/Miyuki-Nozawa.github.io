import Image from "next/image";
import type { ImageT } from "./test";

export type Video = {
  src: string;
  className: string;
  addressBar?: {
    src: string;
    width: number;
    height: number;
  };
};

export default function Final({
  video,
  image,
  header,
  notes,
  mirror,
  wide,
  vertical,
}: {
  video: Video;
  image?: ImageT;
  header: string;
  notes: string[];
  mirror?: boolean;
  wide?: boolean;
  vertical?: boolean;
}) {
  const media = (
    <div
      className={`mx-auto lg:flex-shrink-0 lg:flex lg:justify-between ${
        vertical ? "lg:w-full" : ""
      }`}
    >
      <div className="flex flex-col items-center">
        {video.addressBar && (
          <Image
            src={video.addressBar.src}
            alt="address bar"
            width={video.addressBar.width}
            height={video.addressBar.height}
          />
        )}
        <video
          className={`${video.className} object-cover`}
          autoPlay
          muted
          loop
        >
          <source src={video.src} type="video/mp4" />
        </video>
      </div>
      {image && (
        <Image
          src={image.desktop.src}
          alt={header}
          width={image.default[0]}
          height={image.default[1]}
          className={`mt-auto ${image.desktop.className}`}
        />
      )}
    </div>
  );

  const mobileClass = "space-y-[5.12vw]";

  const lgClass =
    "lg:flex lg:items-center lg:space-y-0 " +
    (wide ? "lg:space-x-[30px] " : vertical ? "" : "lg:space-x-[80px] ") +
    (vertical ? "lg:flex-col lg:space-y-[50px] " : "lg:flex-row");

  return (
    <div className={`${mobileClass} ${lgClass}`}>
      <div className="lg:hidden">{media}</div>
      <div className="hidden lg:block lg:flex-shrink-0">{!mirror && media}</div>
      <div
        className={`${
          vertical ? "w-full" : ""
        } space-y-[2.56vw] lg:space-y-[30px]`}
      >
        <div className="text-[3.65vw] lg:text-[22px] font-medium tracking-[.01em]">
          {header}
        </div>
        <div className="space-y-[10px]">
          {notes.map((note) => (
            <div key={note} className="flex space-x-[0.69vw] lg:space-x-[10px]">
              <Image
                src="/icons/star-brown.svg"
                alt="note"
                width={27}
                height={27}
                className="mb-auto w-[4.62vw] h-[4.62vw] lg:w-[27px] lg:h-[27px]"
              />
              <span className="text-[3.08vw] lg:text-[18px] tracking-[.01em]">
                {note}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="hidden lg:block lg:flex-shrink-0">{mirror && media}</div>
    </div>
  );
}
