import Image from "next/image";

export default function Final({
  video,
  header,
  notes,
  mirror,
}: {
  video: string;
  header: string;
  notes: string[];
  mirror?: boolean;
}) {
  return (
    <div className="flex items-center space-x-[80px]">
      {!mirror && (
        <div className="flex-shrink-0">
          <video className="w-[300px] h-[600px]" autoPlay muted loop>
            <source src={video} type="video/mp4" />
          </video>
        </div>
      )}
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
      {mirror && (
        <div className="flex-shrink-0">
          <video className="w-[300px] h-[600px]" autoPlay muted loop>
            <source src={video} type="video/mp4" />
          </video>
        </div>
      )}
    </div>
  );
}
