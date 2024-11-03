export default function ColorRow({
  title,
  colors,
  border,
}: {
  title: string;
  colors: string[];
  border?: boolean;
}) {
  return (
    <div className="space-y-[2.1vw] lg:space-y-[10px]">
      <div className="text-[2.6vw] lg:text-[14px] tracking-[.01em]">
        {title}
      </div>
      <div className="flex space-x-[2.1vw] lg:space-x-[30px]">
        {colors.map((color) => (
          <div
            key={color}
            className={
              "flex items-end justify-center " +
              "rounded-[3.5px] p-[2vw] w-[17.9vw] h-[17.9vw] " +
              "lg:rounded-[8px] lg:p-[3px] lg:w-[100px] lg:h-[100px] " +
              (border ? "border-[0.5px] border-[#5F4C35]" : "")
            }
            style={{ backgroundColor: `#${color}` }}
          >
            <span className="text-[2.6vw] font-medium lg:text-[14px] lg:font-normal">
              {color}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
