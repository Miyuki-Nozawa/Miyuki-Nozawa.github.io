import Image from "next/image";

export default function Final({
  video,
  header,
  notes,
  mirror,
  wide,
}: {
  video: string;
  header: string;
  notes: string[];
  mirror?: boolean;
  wide?: boolean;
}) {
  const videoSize = wide ? "w-[500px] h-[323px]" : "w-[300px] h-[600px]";
  const player = (
    <div className="flex-shrink-0">
      <video className={videoSize} autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );

  return (
    <div
      className={`flex items-center ${
        wide ? "space-x-[30px]" : "space-x-[80px]"
      }`}
    >
      {!mirror && player}
      <div className="space-y-[30px]">
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
      {mirror && player}
    </div>
  );
}
