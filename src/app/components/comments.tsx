import Image from "next/image";

export default function Comments({
  comment,
  avatar,
  mirror,
}: {
  comment: string;
  avatar: string;
  mirror?: boolean;
}) {
  return (
    <div className="py-[2.5vw] lg:py-0 space-y-[2.5vw] lg:space-y-[30px]">
      <div
        className={`gap-x-[2vw] lg:gap-x-[30px] ml-auto flex items-center ${
          mirror ? "justify-start" : "justify-end"
        }`}
      >
        <div
          className={
            (mirror ? "order-2" : "order-1") +
            " px-[5vw] py-[3.8vw] lg:px-[30px] lg:py-[20px] rounded-[10px] " +
            "lg:rounded-[20px] bg-beige space-y-[2vw] lg:space-y-[10px] w-[51.5vw] lg:w-[600px]"
          }
        >
          <div className="text-[2.8vw] lg:text-[18px] tracking-[.01em] font-medium">
            {comment}
          </div>
        </div>
        <div className={`${mirror ? "order-1" : "order-2"} mt-auto`}>
          <div className="mx-auto px-[1.7vw] py-[1.2vw] lg:px-[13px] lg:py-[10px]">
            <Image
              src={avatar}
              alt="avatar"
              width={50}
              height={50}
              className={
                "lg:w-[100px] lg:h-[100px] mx-auto " +
                (mirror ? "scale-x-[-1]" : "")
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
