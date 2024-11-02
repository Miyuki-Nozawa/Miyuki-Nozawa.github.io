export default function Paragraph({
  md,
  children,
}: {
  md?: boolean;
  children: React.ReactNode;
}) {
  const size = md ? "text-[3.6vw] lg:text-[22px] font-medium" : "text-[4vw] lg:text-[18px]";
  return <div className={`${size} tracking-[.01em]`}>{children}</div>;
}
