import { forwardRef } from "react";

export default forwardRef(function Bottom(
  { visible, children }: { visible: boolean; children: React.ReactNode },
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return (
    <div
      ref={ref}
      className="bg-green rounded-t-[200px] flex flex-col items-center justify-center overflow-hidden mt-[20px]"
    >
      <div
        className={`flex flex-col items-center space-y-[60px] h-[100vh] justify-center mt-[200px] [transition:transform_1s,opacity_2s] ${
          visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
});
