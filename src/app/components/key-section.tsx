import KeyCard from "@/app/components/key-card";
import StarSection from "@/app/components/star-section";
import { KeyCardT } from "@/types";

export default function KeyFeatures({
  title,
  cards,
}: {
  title: string;
  cards: KeyCardT;
}) {
  return (
    <StarSection title={title}>
      <div className="py-[20px] flex space-x-[20px]">
        {cards.map(({ icon, label, sublabel }, i) => (
          <KeyCard
            key={i}
            icon={icon}
            label={label}
            sublabel={sublabel}
            centered
          />
        ))}
      </div>
    </StarSection>
  );
}
