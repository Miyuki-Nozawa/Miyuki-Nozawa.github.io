export default function MoodboardCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="p-[50px] bg-white rounded-[20px] space-y-[30px]">
      <div className="text-[22px] font-medium tracking-[.01em]">{title}</div>
      {children}
    </div>
  );
}
