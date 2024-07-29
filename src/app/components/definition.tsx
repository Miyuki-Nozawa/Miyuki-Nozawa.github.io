export default function Definition({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="space-y-5 px-12 py-7 text-[26px] tracking-[.03em] rounded-2xl bg-beige">
      <h3 className="font-medium">{title}</h3>
      <p>{text}</p>
    </div>
  );
}
