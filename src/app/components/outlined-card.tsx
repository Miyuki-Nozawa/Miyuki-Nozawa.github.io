export default function OutlinedCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={
        "px-[5.1vw] py-[3.8vw] lg:px-[30px] lg:py-[30px] space-y-[2.6vw] lg:space-y-[20px] " +
        "rounded-[10px] lg:rounded-[20px] bg-[rgba(70,96,31,0.2)]"
      }
    >
      <div className="text-[4.1vw] lg:text-[18px] font-normal tracking-[.01em]">
        {title}
      </div>
      <div className="text-[3.6vw] lg:text-[22px] font-medium tracking-[.01em]">
        {children}
      </div>
    </div>
  );
}
