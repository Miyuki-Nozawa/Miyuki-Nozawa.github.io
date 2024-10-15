import KeySection from "@/app/components/key-section";
import Paragraph from "@/app/components/paragraph";
import { KeyCardT } from "@/types";

export default function ResearchCompetition({
  desc,
  notes,
  features,
  children,
}: {
  desc: string;
  notes: string[];
  features: KeyCardT;
  children: React.ReactNode;
}) {
  return (
    <>
      <Paragraph>{desc}</Paragraph>
      {children}
      {notes.map((note, i) => (
        <Paragraph key={i}>{note}</Paragraph>
      ))}
      <KeySection title="Key Features" cards={features} />
    </>
  );
}
