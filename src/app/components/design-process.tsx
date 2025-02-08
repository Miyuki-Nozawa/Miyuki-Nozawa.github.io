import ProjectSection from "@/app/components/project-section";
import Subsection from "@/app/components/subsection";
import DesignCard from "@/app/components/design-card";

export type DesignProcessProps = {
  research: string[];
  define: string[];
  ideate: string[];
  design: string[];
  test?: string[];
  nextSteps: string[];
};

export default function DesignProcess({
  research,
  define,
  ideate,
  design,
  test,
  nextSteps,
}: DesignProcessProps) {
  return (
    <div
      className={
        "space-y-[5vw] py-[5vw] " +
        "lg:space-y-0 lg:grid lg:grid-rows-2 lg:grid-cols-3 lg:gap-[30px] lg:py-0"
      }
    >
      <DesignCard
        icon="/icons/magnifying-glass.svg"
        title="RESEARCH"
        items={research}
      />
      <DesignCard icon="/icons/target.svg" title="DEFINE" items={define} />
      <DesignCard icon="/icons/lightbulb.svg" title="IDEATE" items={ideate} />
      <DesignCard icon="/icons/pencil.svg" title="DESIGN" items={design} />
      {test && <DesignCard icon="/icons/paper.svg" title="TEST" items={test} />}
      <DesignCard icon="/icons/next.svg" title="NEXT STEPS" items={nextSteps} />
    </div>
  );
}
