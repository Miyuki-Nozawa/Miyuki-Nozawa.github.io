export default function Card({ text }: { text: string }) {
  return (
    <div
      className={
        "w-[275px] h-[200px] bg-light-pink rounded-2xl flex items-center " +
        "justify-center text-[24px] text-center p-8"
      }
    >
      {text}
    </div>
  );
}
