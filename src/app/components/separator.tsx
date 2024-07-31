export default function Separator({
  className
}: {className: string}) {
  return (
    <div className="w-full my-24">
      <div className={`w-[1136px] h-[3px] rounded-2xl mx-auto ${className}`}></div>
    </div>
  );
}
