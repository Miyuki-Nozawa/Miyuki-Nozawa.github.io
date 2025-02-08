import { forwardRef } from "react";

import Paragraph from "@/app/components/paragraph";
import ProjectSection from "@/app/components/project-section";
import Subsection from "@/app/components/subsection";

export type NextStepsProps = {
  learning?: string;
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
        {learning && (
          <Subsection title="Learning">
            <Paragraph>{learning}</Paragraph>
          </Subsection>
        )}
        <Subsection title="Opportunities for Enhancement">
          {opportunities}
        </Subsection>
      </ProjectSection>
    </div>
  );
});
