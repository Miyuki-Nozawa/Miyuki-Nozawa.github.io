import Image from "next/image";

export type Video = {
  src: string;
  className: string;
  addressBar?: {
    src: string;
    width: number;
    height: number;
  };
};

export type Image = {
  src: string;
  width: number;
  height: number;
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
  image?: Image;
  header: string;
  notes: string[];
  mirror?: boolean;
  wide?: boolean;
  vertical?: boolean;
}) {
  const media = (
    <div
      className={`flex-shrink-0 flex justify-between ${
        vertical ? "w-full" : ""
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
        <video className={video.className} autoPlay muted loop>
          <source src={video.src} type="video/mp4" />
        </video>
      </div>
      {image && (
        <Image
          src={image.src}
          alt={header}
          width={image.width}
          height={image.height}
          className="mt-auto"
        />
      )}
    </div>
  );

  return (
    <div
      className={`flex items-center ${
        wide ? "space-x-[30px]" : vertical ? "" : "space-x-[80px]"
      } ${vertical ? "flex-col space-y-[50px]" : "flex-row"}`}
    >
      {!mirror && media}
      <div className={`${vertical ? "w-full" : ""} space-y-[30px]`}>
        <div className="text-[22px] font-medium tracking-[.01em]">{header}</div>
        <div className="space-y-[10px]">
          {notes.map((note) => (
            <div key={note} className="flex space-x-[10px]">
              <Image
                src="/icons/star-brown.svg"
                alt="note"
                width={27}
                height={27}
                className="mb-auto"
              />
              <span className="text-[18px] tracking-[.01em]">{note}</span>
            </div>
          ))}
        </div>
      </div>
      {mirror && media}
    </div>
  );
}
