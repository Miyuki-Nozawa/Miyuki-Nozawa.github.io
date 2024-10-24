import Image from "next/image";

export default function QuestionResponse({
  question,
  response,
  avatar,
  name,
}: {
  question?: string;
  response: string;
  avatar: string;
  name: string;
}) {
  return (
    <div className="space-y-[30px]">
      {question && (
        <div className="px-[30px] py-[20px] rounded-[20px] bg-white space-y-[10px] w-[600px]">
          <div className="text-[14px] tracking-[.01em]">Key question</div>
          <div className="text-[18px] tracking-[.01em]">{question}</div>
        </div>
      )}
      <div className="space-x-[30px] ml-auto flex items-center justify-end">
        <div className="px-[30px] py-[20px] rounded-[20px] bg-beige space-y-[10px] w-[600px]">
          <div className="text-[14px] tracking-[.01em]">Response</div>
          <div className="text-[18px] tracking-[.01em]">{response}</div>
        </div>
        <div>
          <div className="mx-auto px-[13px] py-[10px]">
            <Image src={avatar} alt="avatar" width={74} height={80} />
          </div>
          <div>{name}</div>
        </div>
      </div>
    </div>
  );
}
