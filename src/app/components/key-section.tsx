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
          "flex flex-col pt-[5.13vw] gap-y-[2.5vw] " +
          "lg:flex-row lg:pt-[20px] lg:gap-y-[24px] lg:flex-wrap lg:justify-between"
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
