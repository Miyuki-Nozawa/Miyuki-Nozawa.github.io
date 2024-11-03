import Image from "next/image";

export default function QuestionResponse({
  question,
  response,
  avatar,
  name,
  mirror,
}: {
  question?: string;
  response: string;
  avatar: string;
  name: string;
  mirror?: boolean;
}) {
  return (
    <div className="py-[2.5vw] lg:py-0 space-y-[2.5vw] lg:space-y-[30px]">
      {question && (
        <div
          className={
            (mirror ? "ml-auto" : "") +
            " lg:ml-0 lg:mr-auto px-[5vw] py-[3.8vw] lg:px-[30px] lg:py-[20px] rounded-[10px] " +
            "lg:rounded-[20px] bg-white space-y-[2vw] lg:space-y-[10px] w-[51.5vw] lg:w-[600px]"
          }
        >
          <div className="text-[2.6vw] lg:text-[14px] font-normal lg:font-medium tracking-[.01em]">
            Key question
          </div>
          <div className="text-[2.8vw] lg:text-[18px] tracking-[.01em]">
            {question}
          </div>
        </div>
      )}
      <div className="gap-x-[2vw] lg:gap-x-[30px] ml-auto flex items-center justify-end">
        <div
          className={
            (mirror ? "order-2" : "order-1") +
            " lg:order-1 px-[5vw] py-[3.8vw] lg:px-[30px] lg:py-[20px] rounded-[10px] " +
            "lg:rounded-[20px] bg-beige space-y-[2vw] lg:space-y-[10px] w-[51.5vw] lg:w-[600px]"
          }
        >
          <div className="text-[2.6vw] lg:text-[14px] font-normal lg:font-medium tracking-[.01em]">
            Response
          </div>
          <div className="text-[2.8vw] lg:text-[18px] tracking-[.01em]">
            {response}
          </div>
        </div>
        <div className={`${mirror ? "order-1" : "order-2"} mt-auto`}>
          <div className="mx-auto px-[1.7vw] py-[1.2vw] lg:px-[13px] lg:py-[10px]">
            <Image
              src={avatar}
              alt="avatar"
              width={37}
              height={40}
              className="lg:w-[74px] lg:h-[80px] mx-auto"
            />
          </div>
          <div className="text-[2.6vw] lg:text-[14px] font-normal tracking-[.01em] whitespace-nowrap">
            {name}
          </div>
        </div>
      </div>
    </div>
  );
}
