export default function Definition({
  title,
  text,
  className,
}: {
  title: string;
  text: string;
  className: string;
}) {
  return (
    <div
      className={`space-y-5 px-12 py-7 text-[26px] tracking-[.02em] rounded-2xl ${className}`}
    >
      <h3 className="font-medium">{title}</h3>
      <p>{text}</p>
    </div>
  );
}
