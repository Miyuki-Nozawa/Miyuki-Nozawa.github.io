export default function OutlinedCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="p-[30px] space-y-[20px] rounded-[20px] border border-dark-green">
      <div className="text-[18px] tracking-[.01em]">{title}</div>
      <div className="text-[22px] font-medium tracking-[.01em]">{children}</div>
    </div>
  );
}
