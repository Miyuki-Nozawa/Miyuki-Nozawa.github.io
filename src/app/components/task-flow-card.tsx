import Image from "next/image";
import Down from "./down";

export type Participant = {
  name: string;
  avatar: string;
  comment: string;
};

export default function TaskFlowCard({
  title,
  subtitle,
  image,
  participants,
  conclusions,
  mirror,
  horizontal,
}: {
  title: string;
  subtitle: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
  participants: Participant[];
  conclusions: string[];
  mirror?: boolean;
  horizontal?: boolean;
}) {
  const header = (
    <div className="space-y-[10px]">
      <div className="text-[18px] tracking-[.01em]">{title}</div>
      <div className="text-[22px] font-medium tracking-[.01em]">{subtitle}</div>
    </div>
  );

  const body = (
    <>
      <div className="space-y-[30px]">
        {participants.map((participant) => (
          <div
            key={participant.name}
            className="flex space-x-[20px] items-center"
          >
            <div className="flex-shrink-0 text-center p-[2px]">
              <div className="w-[68px] h-[68px] relative">
                <Image src={participant.avatar} alt="participant" fill />
              </div>
              <div className="text-[11px] tracking-[.01em]">
                {participant.name}
              </div>
            </div>
            <div className="text-[14px] px-[22px] py-[22px] bg-beige rounded-[10px] flex items-center justify-center tracking-[.01em]">
              {participant.comment}
            </div>
          </div>
        ))}
      </div>
      <Down sm />
      <div className="space-y-[10px] mx-auto">
        {conclusions.map((conclusion) => (
          <div
            key={conclusion}
            className="flex space-x-[10px] mx-auto"
          >
            <Image
              alt="star"
              src="/icons/star-filled.svg"
              width={27}
              height={27}
              className="mb-auto"
            />
            <span className="text-[18px] tracking-[.01em]">{conclusion}</span>
          </div>
        ))}
      </div>
    </>
  );

  const flow = (
    <Image
      src={image.src}
      alt="task flow"
      width={image.width}
      height={image.height}
    />
  );

  return (
    <div className="bg-white rounded-[20px] p-[30px] shadow-[2px_2px_2px_0px_rgba(0,0,0,0.10)] flex space-x-[50px]">
      {horizontal ? (
        <div className="space-y-[30px]">
          {header}
          <div className="flex space-x-[40px]">
            <div className="flex flex-col justify-between">{body}</div>
            {flow}
          </div>
        </div>
      ) : mirror ? (
        <>
          {flow}
          <div className="flex flex-col justify-between">
            {header}
            {body}
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col justify-between">
            {header}
            {body}
          </div>
          {flow}
        </>
      )}
    </div>
  );
}
