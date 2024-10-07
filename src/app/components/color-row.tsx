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
    <div className="space-y-[10px]">
      <div className="text-[14px] tracking-[.01em]">{title}</div>
      <div className="flex space-x-[30px]">
        {colors.map((color) => (
          <div
            key={color}
            className={`rounded-[8px] pb-[3px] w-[100px] h-[100px] flex items-end justify-center ${
              border ? "border-[0.5px] border-[#5F4C35]" : ""
            }`}
            style={{ backgroundColor: `#${color}` }}
          >
            <span>{color}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
