import { forwardRef, useEffect } from "react";

export default forwardRef(function Bottom(
  { visible, children }: { visible: boolean; children: React.ReactNode },
  ref: React.ForwardedRef<HTMLDivElement>
) {
  useEffect(() => {
    if (visible) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [visible]);

  return (
    <div
      ref={ref}
      className={
        "flex flex-col items-center bg-green justify-center overflow-hidden " +
        "rounded-t-[60px] mt-[8px] lg:rounded-t-[200px] lg:mt-[20px]"
      }
    >
      <div
        className={
          "flex flex-col items-center space-y-[60px] h-[100vh] justify-center lg:mt-[200px] " +
          "px-[60px] [transition:transform_1s,opacity_2s] " +
          (visible
            ? "translate-y-0 opacity-100 "
            : "translate-y-full opacity-0 ")
        }
      >
        {children}
      </div>
    </div>
  );
});
