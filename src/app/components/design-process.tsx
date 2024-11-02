import ProjectSection from "@/app/components/project-section";
import ProjectSubSection from "@/app/components/project-subsection";
import DesignCard from "@/app/components/design-card";

export type DesignProcessProps = {
  research: string[];
  define: string[];
  ideate: string[];
  prototype: string[];
  test: string[];
  nextSteps: string[];
};

export default function DesignProcess({
  research,
  define,
  ideate,
  prototype,
  test,
  nextSteps,
}: DesignProcessProps) {
  return (
    <ProjectSection>
      <ProjectSubSection title="Design Process">
        <div className="space-y-[5vw] lg:grid lg:grid-rows-2 lg:grid-cols-3 lg:gap-[30px] py-[5vw] lg:py-0">
          <DesignCard
            icon="/icons/magnifying-glass.svg"
            title="RESEARCH"
            items={research}
          />
          <DesignCard icon="/icons/target.svg" title="DEFINE" items={define} />
          <DesignCard
            icon="/icons/lightbulb.svg"
            title="IDEATE"
            items={ideate}
          />
          <DesignCard
            icon="/icons/pencil.svg"
            title="PROTOTYPE"
            items={prototype}
          />
          <DesignCard icon="/icons/paper.svg" title="TEST" items={test} />
          <DesignCard
            icon="/icons/next.svg"
            title="NEXT STEPS"
            items={nextSteps}
          />
        </div>
      </ProjectSubSection>
    </ProjectSection>
  );
}
