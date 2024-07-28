import ProjectContents from "@/app/components/project-contents";
import ProjectHero from "@/app/components/project-hero";
import ProjectStatement from "@/app/components/project-statement";
import Section from "@/app/components/section";
import Text from "@/app/components/text";
import Image from "next/image";

export default function Gengo() {
  const problemStatement =
    "\
    Currently, 43% of the world is bilingual, and 17% can fluently speak \
    two or more languages. Also, 7 out of 10 individuals express a desire \
    to begin studying a foreign language right now. The reasons for \
    learning a new language are diverse. Usually, people start learning \
    with some degree of motivation. However, people often give up on \
    learning before reaching their satisfied level.\
  ";
  const solution =
    "\
    Developing a language learning product to help people stay motivated \
    and learn languages efficiently.\
  ";
  return (
    <div>
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
      <ProjectStatement statement={problemStatement} solution={solution} />
      <ProjectContents />
      <Section title="Introduction">
        <Text className="mx-64">
          Many people have experienced learning a foreign language or aspire to
          do so. They’re motivated when they start learning, but they may
          stumble in their learning journey or realize that they lack enough
          time. These hurdles lead them to give up on learning the new language
          before reaching a level of satisfaction with their language
          proficiency.
        </Text>
        <Image
          src="/gengo/comments.png"
          alt="comments"
          width={984}
          height={640}
        />
        <Text className="mx-64">
          I&apos;ve learned several foreign languages, and I know many
          multilingual people. I&apos;ve also seen friends give up on learning
          new languages despite starting with clear goals. I wish there was a
          product to help them stay motivated and learn efficiently.
        </Text>
        {/* transition */}
        <div>
          <div className="flex items-center space-x-8 w-[72%] ml-auto my-9">
            <Image
              src="/icons/down-arrow.svg"
              alt="down arrow"
              width={75}
              height={100}
            />
            <Text>
              How can we create a language learning website that delights
              people?
            </Text>
          </div>
        </div>
      </Section>
    </div>
  );
}
