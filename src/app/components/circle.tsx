export default function Circle({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-light-pink rounded-[50%] w-[180px] h-[180px] flex items-center justify-center text-center">
      {children}
    </div>
  );
}
