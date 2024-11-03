export default function ProjectSection({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={
        "bg-light-ivory py-[12.8vw] rounded-[54px] mx-[2vw] " +
        "lg:py-[150px] lg:mx-[20px] lg:rounded-[200px]"
      }
    >
      <div className="max-w-[70vw] lg:max-w-default mx-auto space-y-[10px]">
        {title && (
          <div className="text-[4vw] lg:text-[27px] font-semibold lg:mb-[10px]">
            {title.toUpperCase()}
          </div>
        )}
        <div className="space-y-[20vw] lg:space-y-[150px]">{children}</div>
      </div>
    </div>
  );
}
