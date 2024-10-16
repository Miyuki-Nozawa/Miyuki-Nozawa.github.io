import { forwardRef } from "react";

import Paragraph from "@/app/components/paragraph";
import ProjectSection from "@/app/components/project-section";
import ProjectSubSection from "@/app/components/project-subsection";
import ResearchGoalCard from "@/app/components/research-goal-card";

export default forwardRef(function Research(
  {
    desc,
    goals,
    researchCompetition,
    researchExplorationTitle,
    researchExploration,
  }: {
    desc: string;
    goals: string[];
    researchCompetition: React.ReactNode;
    researchExplorationTitle: string;
    researchExploration: React.ReactNode;
  },
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return (
    <div>
      <div ref={ref}></div>
      <ProjectSection title="Research">
        <ProjectSubSection title="Research Goal">
          <Paragraph md>{desc}</Paragraph>
          <div className="grid grid-cols-2 gap-[30px] py-[20px]">
            {goals.map((goal, i) => (
              <ResearchGoalCard key={i}>{goal}</ResearchGoalCard>
            ))}
          </div>
        </ProjectSubSection>
        <ProjectSubSection title="Understanding the Competition">
          {researchCompetition}
        </ProjectSubSection>
        <ProjectSubSection title={researchExplorationTitle}>
          {researchExploration}
        </ProjectSubSection>
      </ProjectSection>
    </div>
  );
});
