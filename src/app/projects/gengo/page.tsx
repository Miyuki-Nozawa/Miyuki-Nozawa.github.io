import ProjectHero from "@/app/components/project-hero";
import Image from "next/image";
import Link from "next/link";

export default function Gengo() {
  return (
    <div>
      {/* Case-study hero */}
      <ProjectHero
        name="Gengo"
        img="/gengo/hero.png"
        logo="/gengo/logo.svg"
        header="A language learning website"
        projectType="End-to-end mobile first website"
        role="Sole UX/UI designer"
        projectDuration="3 months"
        tools="Figma, FigJam, Optimal Workshop, maze"
      />
    </div>
  );
}
