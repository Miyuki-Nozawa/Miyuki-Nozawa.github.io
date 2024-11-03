export default function MoodboardCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={
        "bg-white px-[5.1vw] py-[3.8vw] rounded-[10px] space-y-[5.1vw] " +
        "lg:px-[50px] lg:py-[50px] lg:rounded-[20px] lg:space-y-[30px]"
      }
    >
      <div className="text-[3.6vw] font-normal lg:text-[22px] lg:font-medium tracking-[.01em]">
        {title}
      </div>
      {children}
    </div>
  );
}
