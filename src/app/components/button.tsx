import { useRouter } from "next/navigation";
import { handleCursorHoverStart, handleCursorHoverStop } from "@/app/cursor";

export default function Button({
  url,
  disabled,
  action,
  children,
}: {
  url?: string;
  disabled?: boolean;
  action?: () => void;
  children: React.ReactNode;
}) {
  const router = useRouter();

  if (disabled) {
    return (
      <div
        className={
          "w-full lg:w-auto inline-block relative overflow-hidden px-[2.75vw] lg:px-[40px] py-[2.5vw] " +
          "lg:py-[15px] text-[4vw] lg:text-[20px] font-semibold bg-dark-green text-white rounded-[22px] " +
          "lg:rounded-[32px] transition-colors duration-300 ease-in-out group tracking-[.01em] opacity-50"
        }
      >
        {children}
      </div>
    );
  }

  const handler = action
    ? () => {
        handleCursorHoverStop();
        action();
      }
    : () => {
        handleCursorHoverStop();
        if (url) {
          router.push(url);
        }
      };

  return (
    <button
      className={
        "w-full lg:w-auto inline-block relative overflow-hidden px-[2.75vw] lg:px-[40px] " +
        "py-[2.5vw] lg:py-[15px] text-[4vw] lg:text-[20px] font-semibold bg-dark-green " +
        "text-white rounded-[22px] lg:rounded-[32px] transition-colors duration-300 " +
        "ease-in-out group tracking-[.01em] "
      }
      onMouseEnter={handleCursorHoverStart}
      onMouseLeave={handleCursorHoverStop}
      onClick={handler}
    >
      <span className="relative z-10 group-hover:text-black transition-all duration-500">
        {children}
      </span>
      <span
        className={
          "absolute w-[250px] h-[250px] inset-0 bg-projectCardButtonHover rounded-full " +
          "translate-y-[20%] group-hover:translate-y-0 scale-0 group-hover:scale-125 " +
          "transition-transform duration-500 ease-out origin-bottom "
        }
      ></span>
    </button>
  );
}
