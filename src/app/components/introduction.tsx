import Paragraph from "@/app/components/paragraph";
import ProjectSection from "@/app/components/project-section";
import Subsection from "@/app/components/subsection";

export type IntroductionProps = {
  background: string | React.ReactNode;
  problems: string | React.ReactNode;
  solutions: string | React.ReactNode;
};

export default function Introduction({
  background,
  problems,
  solutions,
}: IntroductionProps) {
  return (
    <ProjectSection title="Introduction">
      <Subsection title="Background">
        <Paragraph>{background}</Paragraph>
      </Subsection>
      <Subsection title="Problems">
        <Paragraph md>{problems}</Paragraph>
      </Subsection>
      <Subsection title="Solutions">
        <Paragraph md>{solutions}</Paragraph>
      </Subsection>
    </ProjectSection>
  );
}
