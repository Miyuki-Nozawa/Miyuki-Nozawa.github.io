import KeySection from "@/app/components/key-section";
import Paragraph from "@/app/components/paragraph";
import { KeyCardT } from "@/types";

export type ResearchCompetitionProps = {
  desc: string | React.ReactNode;
  notes: string[] | React.ReactNode[];
  features: KeyCardT;
  children: React.ReactNode;
};

export default function ResearchCompetition({
  desc,
  notes,
  features,
  children,
}: ResearchCompetitionProps) {
  return (
    <div className="space-y-[5.1vw] lg:space-y-[30px]">
      <Paragraph>{desc}</Paragraph>
      {children}
      {notes.map((note, i) => (
        <Paragraph key={i}>{note}</Paragraph>
      ))}
      <KeySection title="Key Features" cards={features} />
    </div>
  );
}
