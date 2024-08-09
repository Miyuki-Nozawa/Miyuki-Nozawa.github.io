import Text from "@/app/components/text";

export default function Section({
  title,
  underline,
  className = "",
  bg = "",
  relaxed = false,
  text = "",
  children,
}: Readonly<{
  title: string;
  underline: string;
  className?: string;
  bg?: string;
  relaxed?: boolean;
  text?: string;
  children: React.ReactNode;
}>) {
  const bgColor = bg || "bg-white";

  return (
    <div
      id={title.toLowerCase()}
      className={`pt-24 space-y-24 ${bgColor} ${className}`}
    >
      <div className="mx-auto text-center">
        <div className="text-3xl tracking-.02em px-2 mb-2">{title}</div>
        <div
          className={`h-[5px] w-[200px] mx-auto rounded-xl ${underline}`}
        ></div>
      </div>
      {text && <Text>{text}</Text>}
      {relaxed ? (
        <div className={`space-y-[150px] ${bgColor}`}>{children}</div>
      ) : (
        children
      )}
      {/* {children} */}
    </div>
  );
}
