import { forwardRef } from "react";

import Paragraph from "@/app/components/paragraph";
import ProjectSection from "@/app/components/project-section";
import ProjectSubSection from "@/app/components/project-subsection";

export type NextStepsProps = {
  learning: string;
  opportunities: React.ReactNode;
};

export default forwardRef(function NextSteps(
  { learning, opportunities }: NextStepsProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return (
    <div>
      <div ref={ref}></div>
      <ProjectSection title="Next Steps">
        <ProjectSubSection title="Learning">
          <Paragraph>{learning}</Paragraph>
        </ProjectSubSection>
        <ProjectSubSection title="Opportunities for Enhancement">
          {opportunities}
        </ProjectSubSection>
      </ProjectSection>
    </div>
  );
});
