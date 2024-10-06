import Image from "next/image";
import DesignCard from "@/app/components/design-card";
import ProjectSection from "@/app/components/project-section";
import ResearchGoalCard from "@/app/components/research-goal-card";

export default function Resto() {
  return (
    <div className="space-y-[20px] tracking-[.01em]">
      {/* Hero */}
      <div className="bg-base pt-[100px] pb-[130px] rounded-b-[200px]">
        <div className="max-w-default mx-auto">
          <div className="text-[40px] font-bold">Resto</div>
          <div className="text-[60px] font-bold">Dining App in Japan</div>
          <div className="text-[27px] font-semibold my-[30px]">
            A mobile app that simplifies restaurant discovery and reservation
            management for travelers in Japan.
          </div>
          <div className="flex justify-between items-end my-[50px]">
            <video className="w-[274px] h-[550px]" autoPlay muted loop>
              <source src="/resto/hero.mp4" type="video/mp4" />
            </video>
            <Image
              src="/resto/screen-1.png"
              alt="Resto"
              width={206}
              height={453}
            />
            <Image
              src="/resto/screen-2.png"
              alt="Resto"
              width={206}
              height={453}
            />
            <Image
              src="/resto/screen-3.png"
              alt="Resto"
              width={206}
              height={453}
            />
          </div>
          <div className="flex justify-between">
            <div className="space-y-[20px] text-[22px] font-medium">
              <div>Role: UX/UI Designer</div>
              <div>Type: End-to-end-application</div>
              <div>Timeline: June - Aug 2024</div>
            </div>
            <div className="self-end flex bg-brown3 rounded-[75px] px-[60px] py-[15px] justify-center items-center text-black text-[20px] font-semibold">
              View Hi-fi prototype
            </div>
          </div>
        </div>
      </div>
      {/* introduction */}
      <ProjectSection title="Introduction">
        <div className="space-y-[30px]">
          <div className="text-[40px] font-bold">Background</div>
          <div className="text-[18px]">
            After the pandemic, travel has become more accessible, allowing many
            people to explore various countries. According to a World Economic
            Forum report, Japan is one of the best tourist destinations for
            2024, with 9.62 million foreign tourists visiting in 2023. Many
            people look forward to experiencing Japan&apos;s food culture, but
            for those unfamiliar with the language and culture, finding and
            booking suitable restaurants or cafes can be challenging.
            Additionally, organizing all the reservations and saved restaurants
            across different apps can be disorganized and sometimes difficult.
          </div>
        </div>
        <div className="space-y-[30px]">
          <div className="text-[40px] font-bold">Problems</div>
          <div className="text-[22px] font-medium">
            Travelers often face difficulties in discovering suitable
            restaurants in Japan and managing their reservations efficiently.
          </div>
        </div>
        <div className="space-y-[30px]">
          <div className="text-[40px] font-bold">Solutions</div>
          <div className="text-[22px] font-medium">
            Developing an app that allows travelers to search for restaurants
            that match their preferences and manage reservations easily, without
            being hindered by language barriers.
          </div>
        </div>
      </ProjectSection>
      {/* design process */}
      <ProjectSection>
        <div className="space-y-[30px]">
          <div className="text-[40px] font-bold">Design Process</div>
          <div className="grid grid-rows-2 grid-cols-3 gap-[30px]">
            <DesignCard
              icon="/icons/magnifying-glass.svg"
              title="RESEARCH"
              items={["Competitive Analysis", "Survey", "User Interviews"]}
            />
            <DesignCard
              icon="/icons/target.svg"
              title="DEFINE"
              items={[
                "Affinity Map",
                "User Personas",
                "Problem Statement",
                "Project Goals",
              ]}
            />
            <DesignCard
              icon="/icons/lightbulb.svg"
              title="IDEATE"
              items={[
                "Feature Ideas",
                "Card Sort",
                "Sitemap",
                "Task & User Flows",
              ]}
            />
            <DesignCard
              icon="/icons/pencil.svg"
              title="PROTOTYPE"
              items={["Wireframes", "Branding", "Prototyping"]}
            />
            <DesignCard
              icon="/icons/paper.svg"
              title="TEST"
              items={["Usability Testing", "Iterations"]}
            />
            <DesignCard
              icon="/icons/next.svg"
              title="NEXT STEPS"
              items={["Learning", "Different Approach"]}
            />
          </div>
        </div>
      </ProjectSection>
      {/* research */}
      <ProjectSection title="Research">
        <div className="space-y-[30px]">
          <div className="text-[40px] font-bold">Research Goal</div>
          <div className="text-[22px] font-medium">
            Understanding what users prioritize when searching for restaurants
            as well as their experiences and issues with reservations despite
            language barriers.
          </div>
          <div className="grid grid-cols-2 gap-[30px] py-[20px]">
            <ResearchGoalCard>
              Identify what users prioritize in choosing restaurants when
              traveling
            </ResearchGoalCard>
            <ResearchGoalCard>
              Understand how people plan their trips and what kind of
              information is required for them
            </ResearchGoalCard>
            <ResearchGoalCard>
              Discover the key factors and challenges users face when searching
              for and selecting restaurants
            </ResearchGoalCard>
            <ResearchGoalCard>
              Understand how users manage their desired destinations and planned
              locations
            </ResearchGoalCard>
          </div>
        </div>
      </ProjectSection>
    </div>
  );
}
