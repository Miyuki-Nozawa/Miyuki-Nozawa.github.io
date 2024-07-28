import Image from "next/image";
import ProjectContents from "@/app/components/project-contents";
import ProjectHero from "@/app/components/project-hero";
import ProjectStatement from "@/app/components/project-statement";
import Section from "@/app/components/section";
import Text from "@/app/components/text";
import Transition from "@/app/components/transition";
import ResearchGoal from "@/app/components/research-goal";
import DiamondHeader from "@/app/components/diamond-header";
import Link from "next/link";
import SimpleSection from "@/app/components/simple-section";

export default function Gengo() {
  const problemStatement = `
    After the pandemic, travel has become more accessible, allowing many people to explore various countries.
    According to a World Economic Forum report, Japan is one of the best tourist destinations for 2024, with 9.62
    million foreign tourists visiting in 2023. Many people look forward to experiencing Japan's food culture, but
    for those unfamiliar with the language and culture, finding and booking suitable restaurants or cafes can be
    challenging. Additionally, organizing all the reservations and saved restaurants across different apps can be
    disorganized and sometimes difficult.
  `;
  const solution = `
    Developing an app that allows travelers to easily make and manage restaurant reservations without being hindered
    by language barriers, and to search for restaurants that meet their specific needs.
  `;

  return (
    <div>
      <ProjectHero
        name="Resto"
        img="/resto/hero.png"
        logo="/resto/logo.svg"
        logoWidth={90}
        logoHeight={80}
        subtitle="A restaurant reservation app"
        header="An app where travelers can make and manage restaurant reservations easily in Japan"
        projectType="End-to-end application"
        role="Sole UX/UI designer"
        projectDuration="1 month"
        industry="Restaurant"
      />
      <ProjectStatement
        statement={problemStatement}
        solution={solution}
        className="bg-light-pink"
      />
      <ProjectContents />
      <Section title="Introduction" underline="bg-brown" className="px-52">
        <Text>
          Tourists often rely on platforms like Google Maps and social media to
          discover and bookmark places to visit. However, managing
          recommendations across multiple platforms can complicate travel
          planning. Although Google Maps is useful for discovering restaurants,
          the information is not always up-to-date. In Japan, there are
          typically fewer reviews from locals, which can affect reliability.
          Additionally, making or changing reservations often requires direct
          communication with restaurants, which can be challenging due to
          language barriers.
          <div className="h-8"></div>
          Many people have traveled to Japan and wish to visit again. While many
          visitors look forward to enjoying the food in Japan, language barriers
          and the confusion of managing reservations can sometimes prevent a
          smooth dining experience.
        </Text>
        <Transition text="How can we build an app that helps travelers have a stress-free dining experience?" />
      </Section>
      <Section title="Research" underline="bg-dark-green" className="px-52">
        <ResearchGoal className="bg-olive">
          <span className="font-bold">
            Understanding what users prioritize when searching for restaurants
            as well as their experiences and issues with reservations amidst
            language barriers
          </span>{" "}
          so that we can build an app that provides users with a better
          experience when traveling.
        </ResearchGoal>
        {/* research 1 */}
        <div className="w-full space-y-20">
          <div className="text-3xl tracking-[0.02em] pl-2 font-medium">
            1. Getting to know what competitors are focusing on
          </div>
          <Text>
            Before diving into the interview, I conducted a competitive analysis
            to understand what features are available in existing apps. I
            compared their target users, focus, and trends to identify which
            features address specific needs.
          </Text>
          <div className="space-y-12">
            <DiamondHeader title="Competitive Analysis" />
            <Text>
              I compared two direct competitors (Japanese reservation apps) and
              one indirect competitor (a well-known American reservation app) to
              understand where each app excels and where there is room for
              improvement.
            </Text>
            <div className="relative w-full h-[443px]">
              <Image
                src="/resto/competitor-table.png"
                alt="Competitor table"
                fill={true}
                className="object-contain"
              />
            </div>
            <Text>
              The direct competitor excels in search and restaurant details but
              has not focused on the reservation system, making it confusing for
              users who are not familiar with it. On the other hand, the
              indirect competitor, an American site, does not provide as
              detailed restaurant descriptions but has an excellent reservation
              system and incorporates the latest trends.
            </Text>
            <Link href="">
              <div className="px-8 py-5 mt-12 border-2 border-dark-green rounded-[5rem] inline-block text-dark-green text-xl font-semibold">
                View the competitive analysis
              </div>
            </Link>
          </div>
        </div>
        {/* research 2 */}
        <div className="w-full space-y-20">
          <div className="text-3xl tracking-[0.02em] pl-2 font-medium">
            2. Getting to know how people approach dining during their travels
          </div>
          {/* research objectives */}
          <div className="space-y-12">
            <div className="font-manrope text-[1.75rem] font-extrabold tracking-[0.02em] text-dark-green underline">
              Research objectives
            </div>
            <ul className="list-disc list-outside text-[1.6rem] font-medium tracing-[0.02em] space-y-6 pl-5">
              <li>
                Identify what users prioritize in choosing restaurants when
                traveling
              </li>
              <li>
                Understand how people plan their trips and what kind of
                information is required for them
              </li>
              <li>
                Understand the deciding factors and challenges users encounter
                when searching for and choosing restaurants
              </li>
              <li>
                Understand how users manage their desired destinations and
                planned locations
              </li>
            </ul>
          </div>
          {/* research methods */}
          <div className="space-y-12">
            <div className="font-manrope text-[1.75rem] font-extrabold tracking-[0.02em] text-dark-green underline">
              Research methods
            </div>
            <Text>
              In order to collect a large amount of qualitative data, I
              conducted two different research methods.
            </Text>
            <div className="space-y-20">
              <div className="space-y-7">
                <DiamondHeader title="Survey" />
                <Text>
                  The first research method I used was a survey. Surveys are
                  used to gather quantitative data from a wide range of
                  travelers to help understand their travel styles, the
                  importance of exploring foods during their trips, and their
                  dining experiences.
                </Text>
              </div>
              {/* simple section */}
              <SimpleSection title="Survey participants">
                <Text>
                  17 people age between 18-34
                  <br />
                  (12 out of 17 people have traveled to Japan)
                </Text>
              </SimpleSection>
              <SimpleSection title="Key questions">
                <ul className="list-disc list-outside text-[1.6rem] tracing-[0.02em] space-y-6 pl-5">
                  <li>
                    How do you search for restaurants or cafes when dining out
                    during your travels?
                  </li>
                  <li>
                    How was your experience when searching for and deciding on
                    restaurants while traveling?
                  </li>
                  <li>
                    Are there any struggles or difficulties you encounter when
                    managing your restaurant list?
                  </li>
                </ul>
              </SimpleSection>
              <SimpleSection title="Responses from participants">
                <div className="relative w-full h-[532px]">
                  <Image
                    src="/resto/survey-responses.png"
                    alt="Survey responses"
                    fill={true}
                    className="object-contain"
                  />
                </div>
              </SimpleSection>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
