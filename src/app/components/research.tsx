import { forwardRef } from "react";

import Paragraph from "@/app/components/paragraph";
import ProjectSection from "@/app/components/project-section";
import ProjectSubSection from "@/app/components/project-subsection";
import ResearchGoalCard from "@/app/components/research-goal-card";
import ResearchCompetition, {
  ResearchCompetitionProps,
} from "@/app/components/research-competition";
import ResearchExploration, {
  ResearchExplorationProps,
} from "@/app/components/research-exploration";

export type ResearchProps = {
  desc: string;
  goals: string[];
  researchCompetition: ResearchCompetitionProps & {
    children: React.ReactNode;
  };
  researchExploration: ResearchExplorationProps & {
    title: string;
  };
};

export default forwardRef(function Research(
  { desc, goals, researchCompetition, researchExploration }: ResearchProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return (
    <div>
      <div ref={ref}></div>
      <ProjectSection title="Research">
        <ProjectSubSection title="Research Goal">
          <Paragraph md>{desc}</Paragraph>
          <div className="space-y-[2.5vw] lg:grid lg:grid-cols-2 lg:gap-[30px] py-[2.5vw] lg:py-[20px]">
            {goals.map((goal, i) => (
              <ResearchGoalCard key={i}>{goal}</ResearchGoalCard>
            ))}
          </div>
        </ProjectSubSection>
        <ProjectSubSection title="Understanding the Competition">
          <ResearchCompetition
            desc={researchCompetition.desc}
            notes={researchCompetition.notes}
            features={researchCompetition.features}
          >
            {researchCompetition.children}
          </ResearchCompetition>
        </ProjectSubSection>
        <ProjectSubSection title={researchExploration.title}>
          <ResearchExploration
            survey={researchExploration.survey}
            userInterview={researchExploration.userInterview}
            usabilityTesting={researchExploration.usabilityTesting}
            findings={researchExploration.findings}
          />
        </ProjectSubSection>
      </ProjectSection>
    </div>
  );
});
