export default function Card({ text, className }: { text: string, className: string }) {
  return (
    <div
      className={
        "w-[275px] h-[200px] rounded-2xl flex items-center justify-center text-[24px] " +
        "text-center p-8 " + className
      }
    >
      {text}
    </div>
  );
}
