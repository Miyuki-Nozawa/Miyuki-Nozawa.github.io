export default function ProjectSection({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-light-ivory py-[150px] rounded-[200px] mx-[20px]">
      <div className="max-w-default mx-auto">
        {title && (
          <div className="text-[27px] font-semibold mb-[10px]">
            {title.toUpperCase()}
          </div>
        )}
        <div className="space-y-[150px]">{children}</div>
      </div>
    </div>
  );
}
