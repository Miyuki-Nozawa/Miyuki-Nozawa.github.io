import { forwardRef } from "react";

import ProjectSection from "@/app/components/project-section";

export type SectionProps = {
  title?: string;
  children: React.ReactNode;
};

export default forwardRef(function Section(
  { title, children }: SectionProps,
  ref?: React.ForwardedRef<HTMLDivElement>
) {
  return (
    <div>
      {ref && <div ref={ref}></div>}
      <ProjectSection title={title}>{children}</ProjectSection>
    </div>
  );
});
