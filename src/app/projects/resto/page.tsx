import Image from "next/image";
import DesignCard from "@/app/components/design-card";
import ProjectSection from "@/app/components/project-section";
import ResearchGoalCard from "@/app/components/research-goal-card";
import Competitor from "@/app/components/competitor";
import KeyCard from "@/app/components/key-card";
import QuestionResponse from "@/app/components/question-response";
import ProjectSubSection from "@/app/components/project-subsection";
import Paragraph from "@/app/components/paragraph";
import Link from "next/link";
import StarSection from "@/app/components/star-section";

export default function Resto() {
  return (
    <div className="space-y-[20px] tracking-[.01em]">
      {/* Hero */}
      <div className="bg-base pt-[100px] pb-[130px] rounded-b-[200px]">
        <div className="max-w-default mx-auto">
          <div className="text-[40px] font-bold tracking-[.01em]">Resto</div>
          <div className="text-[60px] font-bold tracking-[.01em]">
            Dining App in Japan
          </div>
          <div className="text-[27px] font-semibold my-[30px] tracking-[.01em]">
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
            <div className="space-y-[20px] text-[22px] font-medium tracking-[.01em]">
              <div>Role: UX/UI Designer</div>
              <div>Type: End-to-end-application</div>
              <div>Timeline: June - Aug 2024</div>
            </div>
            <div className="self-end flex bg-brown3 rounded-[75px] px-[60px] py-[15px] justify-center items-center text-black text-[20px] font-semibold tracking-[.01em]">
              View Hi-fi prototype
            </div>
          </div>
        </div>
      </div>
      {/* introduction */}
      <ProjectSection title="Introduction">
        <ProjectSubSection title="Background">
          <Paragraph>
            After the pandemic, travel has become more accessible, allowing many
            people to explore various countries. According to a World Economic
            Forum report, Japan is one of the best tourist destinations for
            2024, with 9.62 million foreign tourists visiting in 2023. Many
            people look forward to experiencing Japan&apos;s food culture, but
            for those unfamiliar with the language and culture, finding and
            booking suitable restaurants or cafes can be challenging.
            Additionally, organizing all the reservations and saved restaurants
            across different apps can be disorganized and sometimes difficult.
          </Paragraph>
        </ProjectSubSection>
        <ProjectSubSection title="Problems">
          <Paragraph md>
            Travelers often face difficulties in discovering suitable
            restaurants in Japan and managing their reservations efficiently.
          </Paragraph>
        </ProjectSubSection>
        <ProjectSubSection title="Solutions">
          <Paragraph md>
            Developing an app that allows travelers to search for restaurants
            that match their preferences and manage reservations easily, without
            being hindered by language barriers.
          </Paragraph>
        </ProjectSubSection>
      </ProjectSection>
      {/* design process */}
      <ProjectSection>
        <ProjectSubSection title="Design Process">
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
        </ProjectSubSection>
      </ProjectSection>
      {/* research */}
      <ProjectSection title="Research">
        <ProjectSubSection title="Research Goal">
          <Paragraph md>
            Understanding what users prioritize when searching for restaurants
            as well as their experiences and issues with reservations despite
            language barriers.
          </Paragraph>
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
        </ProjectSubSection>
        <ProjectSubSection title="Understanding the Competition">
          <Paragraph>
            Before diving into the interview, I compared two direct competitors
            (Japanese reservation apps) and one indirect competitor (a
            well-known American reservation app) to understand what features are
            available in existing apps. I compared their target users, focus,
            and trends to identify which features address specific needs.
          </Paragraph>
          <div className="py-[20px] flex justify-between">
            <Competitor
              icon="/resto/gurunavi.svg"
              name="Gurunavi"
              desc="A reservation app in Japan"
              pros={[
                "For people who are looking for casual restaurants",
                "Points system",
                "COVID-19 safety display",
                "No cancellation fee",
                "Introduces food-related culture",
              ]}
              cons={[
                "Multiple steps are required to modify reservations",
                "Only partial English support",
              ]}
            />
            <Competitor
              icon="/resto/tabelog.svg"
              name="Tabelog"
              desc="A reservation app in Japan"
              pros={[
                "For people who want to discover new places and want to see reviews",
                "Occasion suggestion",
                "Incorporating of user reviews",
                "Nationwide restaurant listings",
              ]}
              cons={[
                "Only allowing booking of course menus",
                "Multiple steps are required to modify reservations",
              ]}
            />
            <Competitor
              icon="/resto/resy.svg"
              name="Resy"
              desc="A reservation app in the United States"
              pros={[
                "For people who want to make reservations and discover new places",
                "Waiting list (Notification)",
                "Introducing trendy spots",
                "Available to send special requests to restaurants",
              ]}
              cons={["Cannot make more than one reservation at the same time"]}
            />
          </div>
          <Paragraph>
            The direct competitor excels in search and restaurant details but
            has not focused on the reservation system, making it confusing for
            users who are not familiar with it. On the other hand, the indirect
            competitor, an American site, does not provide as detailed
            restaurant descriptions but has an excellent reservation system and
            incorporates the latest trends.
          </Paragraph>
          <StarSection title="Key Features">
            <div className="py-[20px] flex space-x-[20px]">
              <KeyCard
                icon="/icons/calendar.svg"
                label="Simple reservation system"
                centered
              />
              <KeyCard
                icon="/icons/magnifying-glass-thin.svg"
                label="Easy search function"
                centered
              />
              <KeyCard
                icon="/icons/book.svg"
                label="Introduces trendy spots and culture"
                centered
              />
            </div>
          </StarSection>
        </ProjectSubSection>
        <ProjectSubSection title="Exploring Travel Dining Experiences">
          <div className="space-y-[50px]">
            {/* survey */}
            <div className="space-y-[30px]">
              <div className="space-y-[10px]">
                <div className="text-[27px] font-semibold tracking-[.01em]">
                  Survey
                </div>
                <Paragraph>
                  To understand travelers' interests and priorities regarding
                  the importance of dining and travel planning, I conducted a
                  survey to gather quantitative data from a diverse group of
                  travelers. The survey included{" "}
                  <b className="font-semibold">17 participants aged 18-34</b>,
                  all of whom had travel experience, with{" "}
                  <b className="font-semibold">12 having traveled to Japan</b>.
                </Paragraph>
              </div>
              <div className="py-[50px] space-y-[30px]">
                <QuestionResponse
                  question="How important is dining out while traveling to you?"
                  response="“Dining at restaurants is a priority, but I want to avoid calling them for reservations due to language barriers.”"
                  avatar="/avatars/participant-1.svg"
                  name="Participant 1"
                />
                <QuestionResponse
                  question="How important is dining out while traveling to you?"
                  response="“I decide restaurants based on reviews from locals or Google. I usually want to go to restaurants that are famous among both tourists and locals.”"
                  avatar="/avatars/participant-2.svg"
                  name="Participant 2"
                />
              </div>
            </div>
            {/* user interview */}
            <div className="space-y-[30px]">
              <div className="space-y-[10px]">
                <div className="text-[27px] font-semibold tracking-[.01em]">
                  User Interview
                </div>
                <Paragraph>
                  Then, in order to collect qualitative data on users' specific
                  thoughts and personal experiences, I conducted user interviews
                  with{" "}
                  <b className="font-semibold">5 participants aged 23-68</b>. To
                  better understand their experiences traveling to Japan and the
                  unique aspects of Japanese culture, I interviewed{" "}
                  <b className="font-semibold">
                    4 participants who had visited Japan
                  </b>{" "}
                  and <b className="font-semibold">1 Japanese participant</b>.
                </Paragraph>
              </div>
              <div className="py-[50px] space-y-[30px]">
                <QuestionResponse
                  question="How was your experience when searching for and deciding on restaurants while traveling in Japan?"
                  response="“It was difficult because there were too many choices, and I didn’t know how to choose the right one.” "
                  avatar="/avatars/participant-3.svg"
                  name="Participant 1"
                />
                <QuestionResponse
                  question="Are there any struggles or difficulties you encounter when managing your restaurant list?"
                  response="“I wish Google Maps had a filter for location, showing food types or price ranges”"
                  avatar="/avatars/participant-4.svg"
                  name="Participant 2"
                />
              </div>
              <StarSection title="Key Findings">
                <div className="py-[20px] flex space-x-[20px]">
                  <KeyCard
                    icon="/icons/star-hollow.svg"
                    label="Local tips & reviews"
                    sublabel="can make dining at restaurants challenging"
                  />
                  <KeyCard
                    icon="/icons/a.svg"
                    label="Language barriers"
                    sublabel="can make dining at restaurants challenging"
                  />
                  <KeyCard
                    icon="/icons/find.svg"
                    label="Finding restaurants & managing reservations"
                    sublabel="can be difficult"
                  />
                </div>
              </StarSection>
            </div>
          </div>
        </ProjectSubSection>
      </ProjectSection>
      <ProjectSection title="Define">
        <ProjectSubSection title="Gaining a Deeper Understanding of User Needs and Pain Points">
          <Paragraph>
            After implementing the secondary research methods, I recorded all
            data points and ideas on individual sticky notes. I grouped them
            based on interview topics and further categorized them into
            patterns.
          </Paragraph>
          <div className="py-[20px] space-y-[30px]">
            <div className="w-full h-[700px] px-[30px] py-[50px] space-y-[30px] bg-white rounded-[20px]">
              <div className="text-[22px] font-medium tracking-[.01em]">
                How was your experience when finding restaurants or cafes?
              </div>
              <div className="py-[20px] space-x-[50px] flex">
                <Image
                  src="/resto/affinity-map-1-1.svg"
                  alt="affinity map"
                  width={0}
                  height={0}
                  style={{ width: "auto", height: "500px" }}
                />
                <Image
                  src="/resto/affinity-map-1-2.svg"
                  alt="affinity map"
                  width={0}
                  height={0}
                  style={{ width: "auto", height: "500px" }}
                />
              </div>
            </div>
            <div className="w-full h-[700px] px-[30px] py-[50px] space-y-[30px] bg-white rounded-[20px]">
              <div className="text-[22px] font-medium tracking-[.01em]">
                What criteria do you use when selecting restaurants?{" "}
              </div>
              <div className="py-[20px] space-x-[25px] flex overflow-x-scroll">
                <Image
                  src="/resto/affinity-map-2-1.svg"
                  alt="affinity map"
                  width={0}
                  height={0}
                  style={{ width: "auto", height: "500px" }}
                />
                <Image
                  src="/resto/affinity-map-2-2.svg"
                  alt="affinity map"
                  width={0}
                  height={0}
                  style={{ width: "auto", height: "500px" }}
                />
                <Image
                  src="/resto/affinity-map-2-3.svg"
                  alt="affinity map"
                  width={0}
                  height={0}
                  style={{ width: "auto", height: "500px" }}
                />
              </div>
            </div>
            <div className="space-x-[20px] flex items-center">
              <Image
                src="/icons/figma.svg"
                alt="figma"
                width={20}
                height={27}
              />
              <span className="text-[18px] text-blueLink tracking-[.01em] underline">
                <Link href="/resto/affinity-map">View the Affinity Map</Link>
              </span>
            </div>
          </div>
          <StarSection title="Key Findings">
            <div className="py-[20px] flex space-x-[20px]">
              <KeyCard
                label="62% of participants"
                sublabel="decide on a restaurant based on reviews or ratings"
              />
              <KeyCard
                label="59% of participants"
                sublabel="find it hard to choose a restaurant due to search challenges, despite considering dining important for their trip"
              />
              <KeyCard
                label="Many participants"
                sublabel="find the language barrier to be the biggest challenge when making or changing reservations"
              />
            </div>
          </StarSection>
        </ProjectSubSection>
      </ProjectSection>
    </div>
  );
}
