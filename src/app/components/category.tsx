export default function Category({ text }: { text: string }) {
  return (
    <div
      className={
        "w-[200px] h-[200px] bg-light-green flex items-center " +
        "justify-center text-[24px] text-center p-8 rounded-[50%]"
      }
    >
      {text}
    </div>
  );
}
