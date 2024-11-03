import Image from "next/image";
import Down from "./down";

export type Participant = {
  name: string;
  avatar: string;
  comment: string;
  mirror?: boolean;
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
    default: [number, number];
    desktop: string;
    mobile: string;
  };
  participants: Participant[];
  conclusions: string[];
  mirror?: boolean;
  horizontal?: boolean;
}) {
  const header = (
    <div className="space-y-[2.05vw] lg:space-y-[10px]">
      <div className="text-[3.08vw] lg:text-[18px] tracking-[.01em]">
        {title}
      </div>
      <div className="text-[3.65vw] lg:text-[22px] font-medium tracking-[.01em]">
        {subtitle}
      </div>
    </div>
  );

  const body = (
    <>
      <div className="space-y-[2.05vw] lg:space-y-[30px]">
        {participants.map((participant) => (
          <div
            key={participant.name}
            className="flex gap-x-[2.05vw] lg:gap-x-[20px] items-center"
          >
            <div
              className={`flex-shrink-0 text-center lg:p-[2px] mt-auto ${
                participant.mirror ? "order-last lg:order-first" : ""
              }`}
            >
              <div className="w-[12.82vw] h-[12.82vw] lg:w-[68px] lg:h-[68px] relative">
                <Image src={participant.avatar} alt="participant" fill />
              </div>
              <div className="text-[2.56vw] lg:text-[11px] tracking-[.01em]">
                {participant.name}
              </div>
            </div>
            <div
              className={
                "bg-beige items-center justify-center tracking-[.01em] flex" +
                "text-[2.82vw] px-[5.13vw] py-[3.85vw] rounded-[10px] " +
                "lg:text-[14px] lg:px-[22px] lg:py-[22px] lg:rounded-[10px] "
              }
            >
              {participant.comment}
            </div>
          </div>
        ))}
      </div>
      <Down sm />
      <div className="space-y-[2.05vw] lg:space-y-[10px] mx-auto">
        {conclusions.map((conclusion) => (
          <div
            key={conclusion}
            className="flex space-x-[2.05vw] lg:space-x-[10px] mx-auto"
          >
            <Image
              alt="star"
              src="/icons/star-filled.svg"
              width={27}
              height={27}
              className="mb-auto w-[5.38vw] h-[5.38vw] lg:w-[27px] lg:h-[27px]"
            />
            <span className="text-[3.65vw] lg:text-[18px] tracking-[.01em]">
              {conclusion}
            </span>
          </div>
        ))}
      </div>
    </>
  );

  const flow = (
    <div
      className={`relative mx-auto flex-shrink-0 ${image.mobile} ${image.desktop}`}
    >
      <Image
        src={image.src}
        alt="task flow"
        fill
        className="py-[2.56vw] lg:py-0 "
      />
    </div>
  );

  return (
    <div
      className={
        "bg-white py-[5.13vw] px-[3.85vw] rounded-[10px] shadow-[0.54px_0.54px_0.54px_0px_rgba(0,0,0,0.10)] " +
        "lg:flex lg:rounded-[20px] lg:p-[30px] lg:space-x-[50px] lg:shadow-[2px_2px_2px_0px_rgba(0,0,0,0.10)]"
      }
    >
      {horizontal ? (
        <div className="space-y-[30px]">
          {header}
          <div className="flex space-x-[40px]">
            <div className="flex flex-col justify-between">{body}</div>
            <div className="hidden lg:block">{flow}</div>
          </div>
        </div>
      ) : mirror ? (
        <>
          <div className="hidden lg:block">{flow}</div>
          <div className="py-[2.56vw] lg:py-0 space-y-[2.56vw] lg:space-y-0 lg:flex lg:flex-col lg:justify-between">
            {header}
            <div className="lg:hidden">{flow}</div>
            {body}
          </div>
        </>
      ) : (
        <>
          <div className="py-[2.56vw] lg:py-0 space-y-[2.56vw] lg:space-y-0 lg:flex lg:flex-col lg:justify-between">
            {header}
            <div className="lg:hidden">{flow}</div>
            {body}
          </div>
          <div className="hidden lg:block">{flow}</div>
        </>
      )}
    </div>
  );
}
