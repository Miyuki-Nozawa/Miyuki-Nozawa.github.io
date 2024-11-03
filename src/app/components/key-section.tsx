import KeyCard from "@/app/components/key-card";
import StarSection from "@/app/components/star-section";
import { KeyCardT } from "@/types";

export default function KeySection({
  title,
  cards,
}: {
  title: string;
  cards: KeyCardT;
}) {
  return (
    <StarSection title={title}>
      <div
        className={
          "py-[2.5vw] lg:py-[20px] flex flex-col lg:flex-row lg:flex-wrap gap-y-[2.5vw] " +
          "lg:gap-y-[24px] lg:justify-between"
        }
      >
        {cards.map(({ icon, label, sublabel, centered }, i) => (
          <KeyCard
            key={i}
            icon={icon}
            label={label}
            sublabel={sublabel}
            centered={centered}
          />
        ))}
      </div>
    </StarSection>
  );
}
