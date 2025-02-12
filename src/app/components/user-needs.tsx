import UserNeed from "@/app/components/user-need";

export default function UserNeeds({
  left,
  right,
}: {
  left: { icon: string; label: string }[];
  right: { icon: string; label: string }[];
}) {
  return (
    <div className="flex flex-auto justify-between lg:px-[20px]">
      <div className="space-y-[2.1vw] lg:space-y-[30px]">
        {left.map(({ icon, label }, i) => (
          <UserNeed key={i} icon={icon} title={label} />
        ))}
      </div>
      <div className="space-y-[2.1vw] lg:space-y-[30px]">
        {right.map(({ icon, label }, i) => (
          <UserNeed key={i} icon={icon} title={label} />
        ))}
      </div>
    </div>
  );
}
