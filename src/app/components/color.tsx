export default function Color({
  color,
  className,
}: {
  color: string;
  className: string;
}) {
  return (
    <div className="flex space-x-[10px]">
      <div
        className={
          "w-[100px] h-[100px] px-[10px] py-[3px] rounded-[3px] text-center flex flex-col " +
          className
        }
      >
        <div className="mt-auto">{color}</div>
      </div>
    </div>
  );
}
