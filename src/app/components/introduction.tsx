import Paragraph from "@/app/components/paragraph";
import ProjectSection from "@/app/components/project-section";
import ProjectSubSection from "@/app/components/project-subsection"

export default function Introduction({
  background,
  problems,
  solutions,
}: {
  background: string;
  problems: string;
  solutions: string;
}) {
  return (
    <ProjectSection title="Introduction">
      <ProjectSubSection title="Background">
        <Paragraph>
          {background}
        </Paragraph>
      </ProjectSubSection>
      <ProjectSubSection title="Problems">
        <Paragraph md>
          {problems}
        </Paragraph>
      </ProjectSubSection>
      <ProjectSubSection title="Solutions">
        <Paragraph md>
          {solutions}
        </Paragraph>
      </ProjectSubSection>
    </ProjectSection>
  );
}
