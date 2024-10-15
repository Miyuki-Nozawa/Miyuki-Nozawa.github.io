"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import DesignCard from "@/app/components/design-card";
import ProjectSection from "@/app/components/project-section";
import ResearchGoalCard from "@/app/components/research-goal-card";
import Competitor from "@/app/components/competitor";
import KeyCard from "@/app/components/key-card";
import QuestionResponse from "@/app/components/question-response";
import ProjectSubSection from "@/app/components/project-subsection";
import Paragraph from "@/app/components/paragraph";
import StarSection from "@/app/components/star-section";
import Figma from "@/app/components/figma";
import OutlinedCard from "@/app/components/outlined-card";
import UserNeed from "@/app/components/user-need";
import Down from "@/app/components/down";
import ColorRow from "@/app/components/color-row";
import MoodboardCard from "@/app/components/moodboard-card";
import Button from "@/app/components/button";
import TaskFlowCard from "@/app/components/task-flow-card";
import Final from "@/app/components/final";
import { handleCursorHoverStart, handleCursorHoverStop } from "@/app/cursor";

enum Section {
  RESEARCH = "RESEARCH",
  DEFINE = "DEFINE",
  IDEATE = "IDEATE",
  PROTOTYPE = "PROTOTYPE",
  TEST = "TEST",
  NEXTSTEPS = "NEXT STEPS",
}

const SECTIONS = [
  Section.RESEARCH,
  Section.DEFINE,
  Section.IDEATE,
  Section.PROTOTYPE,
  Section.TEST,
  Section.NEXTSTEPS,
];

export default function KoreanAir() {
  const researchRef = useRef<HTMLDivElement>(null);
  const defineRef = useRef<HTMLDivElement>(null);
  const ideateRef = useRef<HTMLDivElement>(null);
  const prototypeRef = useRef<HTMLDivElement>(null);
  const testRef = useRef<HTMLDivElement>(null);
  const nextStepsRef = useRef<HTMLDivElement>(null);
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const refs = useMemo(
    () => ({
      [Section.RESEARCH]: researchRef,
      [Section.DEFINE]: defineRef,
      [Section.IDEATE]: ideateRef,
      [Section.PROTOTYPE]: prototypeRef,
      [Section.TEST]: testRef,
      [Section.NEXTSTEPS]: nextStepsRef,
    }),
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      let current = activeSection;
      let isVisible = false;

      for (const [name, ref] of Object.entries(refs)) {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          const middleOfViewport = viewportHeight / 2;

          if (rect.bottom < middleOfViewport) {
            isVisible = true;
            current = name;
          }
        }
      }

      setIsNavVisible(isVisible);
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection, refs]);

  const handleNav = (section: Section) => {
    if (refs[section].current) {
      refs[section].current.scrollIntoView();
    }
  };

  return (
    <div className="relative">
      <div
        className={`w-[150px] h-[500px] fixed top-20 right-0 transition-all duration-500 space-y-[20px] text-[18px] ${
          isNavVisible
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-[100%]"
        }`}
      >
        {SECTIONS.map((section) => (
          <div
            key={section}
            className={`${
              activeSection === section ? "text-green2" : "text-[#A9A497]"
            }`}
            onClick={() => handleNav(section)}
            onMouseEnter={handleCursorHoverStart}
            onMouseLeave={handleCursorHoverStop}
          >
            {section}
          </div>
        ))}
      </div>
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
              <div className="flex items-end">
                <Link
                  href="https://www.figma.com/proto/LV5sMpEKJ8JlL6TBeFPdVS/Capstone-3---End-to-End-Application?page-id=493%3A4780&node-id=493-9339&node-type=canvas&viewport=284%2C360%2C0.06&t=6NVbRlngR40WJKQQ-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=493%3A9506&show-proto-sidebar=1"
                  target="_blank"
                  onMouseEnter={handleCursorHoverStart}
                  onMouseLeave={handleCursorHoverStop}
                >
                  <div className="self-end flex bg-brown3 rounded-[75px] px-[60px] py-[15px] justify-center items-center text-black text-[20px] font-semibold tracking-[.01em]">
                    View Hi-fi prototype
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* introduction */}
        <ProjectSection title="Introduction">
          <ProjectSubSection title="Background">
            <Paragraph>
              After the pandemic, travel has become more accessible, allowing
              many people to explore various countries. According to a World
              Economic Forum report, Japan is one of the best tourist
              destinations for 2024, with 9.62 million foreign tourists visiting
              in 2023. Many people look forward to experiencing Japan&apos;s
              food culture, but for those unfamiliar with the language and
              culture, finding and booking suitable restaurants or cafes can be
              challenging. Additionally, organizing all the reservations and
              saved restaurants across different apps can be disorganized and
              sometimes difficult.
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
              that match their preferences and manage reservations easily,
              without being hindered by language barriers.
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
        <div>
          <div ref={researchRef}></div>
          <ProjectSection title="Research">
            <ProjectSubSection title="Research Goal">
              <Paragraph md>
                Understanding what users prioritize when searching for
                restaurants as well as their experiences and issues with
                reservations despite language barriers.
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
                  Discover the key factors and challenges users face when
                  searching for and selecting restaurants
                </ResearchGoalCard>
                <ResearchGoalCard>
                  Understand how users manage their desired destinations and
                  planned locations
                </ResearchGoalCard>
              </div>
            </ProjectSubSection>
            <ProjectSubSection title="Understanding the Competition">
              <Paragraph>
                Before diving into the interview, I compared two direct
                competitors (Japanese reservation apps) and one indirect
                competitor (a well-known American reservation app) to understand
                what features are available in existing apps. I compared their
                target users, focus, and trends to identify which features
                address specific needs.
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
                  cons={[
                    "Cannot make more than one reservation at the same time",
                  ]}
                />
              </div>
              <Paragraph>
                The direct competitor excels in search and restaurant details
                but has not focused on the reservation system, making it
                confusing for users who are not familiar with it. On the other
                hand, the indirect competitor, an American site, does not
                provide as detailed restaurant descriptions but has an excellent
                reservation system and incorporates the latest trends.
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
                      To understand travelers&apos; interests and priorities
                      regarding the importance of dining and travel planning, I
                      conducted a survey to gather quantitative data from a
                      diverse group of travelers. The survey included{" "}
                      <b>17 participants aged 18-34</b>, all of whom had travel
                      experience, with <b>12 having traveled to Japan</b>.
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
                      Then, in order to collect qualitative data on users&apos;
                      specific thoughts and personal experiences, I conducted
                      user interviews with <b>5 participants aged 23-68</b>. To
                      better understand their experiences traveling to Japan and
                      the unique aspects of Japanese culture, I interviewed{" "}
                      <b>4 participants who had visited Japan</b> and{" "}
                      <b>1 Japanese participant</b>.
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
                        sublabel="can be the deciding factor when choosing a restaurant"
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
        </div>
        {/* define */}
        <div>
          <div ref={defineRef}></div>
          <ProjectSection title="Define">
            <ProjectSubSection title="Gaining a Deeper Understanding of User Needs and Pain Points">
              <Paragraph>
                After implementing the secondary research methods, I recorded
                all data points and ideas on individual sticky notes. I grouped
                them based on interview topics and further categorized them into
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
                  <div className="pb-[20px]">
                    <div className="pt-[20px] pb-[40px] space-x-[25px] flex overflow-x-scroll">
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
                </div>
                <Figma href="https://www.figma.com/board/63QeyiJMgUu0SL6h2rmDcv/Capstone-3---End-to-End-Application?node-id=90-2022&t=Rh2UA7lbJbDJRhGN-1">
                  View the Affinity Map
                </Figma>
              </div>
              <StarSection title="Key Findings">
                <div className="py-[20px] flex space-x-[20px]">
                  <KeyCard
                    label="62% of participants"
                    sublabel="decide on a restaurant based on reviews or ratings"
                  />
                  <KeyCard
                    label="59% of participants"
                    sublabel="struggle to choose a restaurant due to search challenges, despite valuing dining on their trip."
                  />
                  <KeyCard
                    label="Many participants"
                    sublabel="find the language barrier to be the biggest challenge when making or changing reservations"
                  />
                </div>
              </StarSection>
            </ProjectSubSection>
            <ProjectSubSection title="Transforming Insights into Personas">
              <Paragraph>
                After conducting research, reviewing the findings, and
                organizing the data, I created two personas in the early stages
                of the design process to deepen my understanding of specific
                users and user needs.
              </Paragraph>
              <div className="space-y-[30px] pb-[20px]">
                <div className="space-y-[10px]">
                  <div className="text-[22px] font-medium tracking-[.01em]">
                    Persona 1
                  </div>
                  <Paragraph>
                    Matt Kim, a 30-year-old product manager from San Francisco,
                    loves traveling to Japan and exploring local dining spots.
                    He faces challenges due to <b>the language barrier</b>,
                    making it difficult to find and reserve restaurants popular
                    among locals. His main frustrations include{" "}
                    <b>
                      the time-consuming process of translating Japanese
                      information
                    </b>{" "}
                    and <b>the difficulty of making phone reservations</b>.
                  </Paragraph>
                </div>
                <Image
                  src="/resto/persona-1.jpeg"
                  alt="persona"
                  width={1000}
                  height={984}
                  className="rounded-[20px]"
                />
              </div>
              <div className="space-y-[30px]">
                <div className="space-y-[10px]">
                  <div className="text-[22px] font-medium tracking-[.01em]">
                    Persona 2
                  </div>
                  <Paragraph>
                    Sarah Laine, a 26-year-old interior designer from New York,
                    is planning her first trip to Japan with friends and is
                    excited to explore Japanese cuisine. She faces challenges{" "}
                    <b>
                      managing and sharing restaurant reservations among her
                      group
                    </b>{" "}
                    and is worried about{" "}
                    <b>keeping track of them amidst a packed schedule</b>. Her
                    goals include{" "}
                    <b>
                      visiting many tourist spots and sticking to their travel
                      plan
                    </b>
                    .
                  </Paragraph>
                </div>
                <Image
                  src="/resto/persona-2.jpeg"
                  alt="persona"
                  width={1000}
                  height={984}
                  className="rounded-[20px]"
                />
              </div>
              <Figma href="https://www.figma.com/design/LV5sMpEKJ8JlL6TBeFPdVS/Capstone-3---End-to-End-Application?node-id=0-1&t=6g8QSShYxUqXAJml-1">
                View the Personas
              </Figma>
            </ProjectSubSection>
            <ProjectSubSection title="Exploring and Clarifying Solutions for User Needs">
              <Paragraph>
                To clarify the solutions needed to address specific user needs,
                I created two POV statements based on the personas. Among them,
                I selected the POV focusing on the language barrier and managing
                restaurant lists, as these were identified as significant
                challenges for many users.
              </Paragraph>
              <OutlinedCard title="POV (Point Of View) statement">
                I’d like to explore ways to propose a streamlined and functional
                reservation system catering to travelers who face challenges
                with language barriers during restaurant booking or encounter
                issues managing reservations.
              </OutlinedCard>
              <Down />
              <Paragraph>
                Then, I took the problems into clear questions that help find
                creative and practical solutions.
              </Paragraph>
              <OutlinedCard title="HMW (How Might We) question">
                How might we design a reservation system that easily
                accommodates people facing language barriers, ensuring smooth
                booking experiences?
              </OutlinedCard>
            </ProjectSubSection>
            <ProjectSubSection title="Establishing Balanced Goals for Project Success">
              <Paragraph>
                As a step to generate ideas to solve the personas&apos;
                problems, I mapped out project goals based on the research
                findings.
              </Paragraph>
              <div className="py-[20px] space-y-[30px]">
                <Image
                  src="/resto/project-goals.svg"
                  alt="project goals"
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                />
                <Figma href="https://www.figma.com/design/LV5sMpEKJ8JlL6TBeFPdVS/Capstone-3---End-to-End-Application?node-id=1-278&t=6g8QSShYxUqXAJml-1">
                  View the Project Goals
                </Figma>
              </div>
            </ProjectSubSection>
          </ProjectSection>
        </div>
        {/* ideate */}
        <div>
          <div ref={ideateRef}></div>
          <ProjectSection title="Ideate">
            <ProjectSubSection title="Prioritizing Features that Align Business and User Needs">
              <Paragraph>
                I brainstormed key features that address the intersection of
                business and user goals, while also considering technical
                feasibility to ensure both are met.
              </Paragraph>
              <div className="py-[20px] flex justify-between">
                <div className="px-[20px] space-x-[20px] flex">
                  <Image
                    src="/avatars/user-needs.svg"
                    alt="avatar"
                    width={100}
                    height={100}
                    className="mt-auto"
                  />
                  <Image
                    src="/resto/speech-bubble.svg"
                    alt="speech"
                    width={0}
                    height={0}
                    style={{ width: "auto", height: "100%" }}
                  />
                </div>
                <div className="flex px-[20px] space-x-[30px]">
                  <div className="space-y-[30px]">
                    <UserNeed icon="/icons/filter.svg" title="Filter" />
                    <UserNeed
                      icon="/icons/magnifying-glass-thin.svg"
                      title="Search"
                    />
                    <UserNeed icon="/icons/map.svg" title="Map" />
                    <UserNeed icon="/icons/bell.svg" title="Notification" />
                  </div>
                  <div className="space-y-[30px]">
                    <UserNeed
                      icon="/icons/star-hollow.svg"
                      title="Reviews & Ratings"
                    />
                    <UserNeed
                      icon="/icons/smile.svg"
                      title="Utilization of icons"
                    />
                    <UserNeed icon="/icons/a.svg" title="Language Option" />
                    <UserNeed
                      icon="/icons/calendar.svg"
                      title="Simple Reservation"
                    />
                  </div>
                </div>
              </div>
              <Down />
              <Paragraph>
                I conducted an <b>open card sort</b> using feature keywords with{" "}
                <b>28 cards</b>, targeting <b>8 participants</b>, to identify
                how users categorize them. When the participants categorized the
                cards freely, most of them fell into <b>6 categories</b>. This
                helped us understand which content people want to see under each
                menu.
              </Paragraph>
              <Image
                src="/resto/card-sort.svg"
                alt="card sort"
                width={0}
                height={0}
                style={{ width: "100%", height: "auto" }}
              />
            </ProjectSubSection>
            <ProjectSubSection title="Designing the App Structure with a Sitemap">
              <Paragraph>
                Based on the results of the card sort, I designed the app&apos;s
                structure and created a sitemap. Referring to the research,
                which showed that travelers tend to struggle with searching for
                restaurants and managing reservations.
              </Paragraph>
              <div className="space-y-[30px]">
                <Image
                  src="/resto/sitemap.svg"
                  alt="sitemap"
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                />
                <Figma href="https://www.figma.com/board/63QeyiJMgUu0SL6h2rmDcv/Capstone-3---End-to-End-Application?node-id=35-1840&t=Rh2UA7lbJbDJRhGN-1">
                  View the Sitemap
                </Figma>
              </div>
            </ProjectSubSection>
            <ProjectSubSection title="Refining Key Design Decisions">
              <Paragraph>
                I created two task flows to clarify the steps necessary for
                users to achieve specific goals and promote a user-friendly
                approach.
              </Paragraph>
              <div className="py-[20px] space-y-[30px]">
                <div className="space-y-[50px]">
                  <div className="py-[20px] space-y-[30px]">
                    <div className="flex space-x-[10px]">
                      <Image
                        src="/icons/star-brown.svg"
                        alt="star"
                        width={33}
                        height={33}
                        className="mb-auto"
                      />
                      <span className="text-[22px] font-medium tracking-[.01em]">
                        Discover restaurants or cafes and make reservations
                        those tailored to your preferences
                      </span>
                    </div>
                    <div className="py-[20px]">
                      <Image
                        src="/resto/user-flow-1.svg"
                        alt="user flow"
                        width={0}
                        height={0}
                        style={{ width: "100%", height: "auto" }}
                      />
                    </div>
                  </div>
                  <div className="py-[20px] space-y-[30px]">
                    <div className="flex space-x-[10px]">
                      <Image
                        src="/icons/star-brown.svg"
                        alt="star"
                        width={33}
                        height={33}
                        className="mb-auto"
                      />
                      <span className="text-[22px] font-medium tracking-[.01em]">
                        Check the reservations and the saved restaurants to plan
                        your dining schedule during the trip
                      </span>
                    </div>
                    <div className="py-[20px]">
                      <Image
                        src="/resto/user-flow-2.svg"
                        alt="user flow"
                        width={0}
                        height={0}
                        style={{ width: "100%", height: "auto" }}
                      />
                    </div>
                  </div>
                </div>
                <Figma href="https://www.figma.com/board/63QeyiJMgUu0SL6h2rmDcv/Capstone-3---End-to-End-Application?node-id=42-8803&t=Rh2UA7lbJbDJRhGN-1">
                  View the Task Flows
                </Figma>
              </div>
            </ProjectSubSection>
            <ProjectSubSection title="Mapping out User Needs and Goals">
              <Paragraph>
                I created a user flow to understand user needs and identify
                potential issues or confusing elements that are related to
                “search” and “reservations”.
              </Paragraph>
              <div className="py-[20px] space-y-[30px]">
                <div className="py-[20px] space-y-[30px]">
                  <div className="flex space-x-[10px]">
                    <Image
                      src="/icons/star-brown.svg"
                      alt="star"
                      width={33}
                      height={33}
                      className="mb-auto"
                    />
                    <span className="text-[22px] font-medium tracking-[.01em]">
                      Discover restaurants or cafes and make reservations
                    </span>
                  </div>
                  <div className="pb-[30px] overflow-x-scroll">
                    <div className="py-[20px] w-[4626px] h-[875px] relative">
                      <Image src="/resto/task-flow.svg" alt="task flow" fill />
                    </div>
                  </div>
                </div>
                <Figma href="https://www.figma.com/board/63QeyiJMgUu0SL6h2rmDcv/Capstone-3---End-to-End-Application?node-id=80-1978&t=Rh2UA7lbJbDJRhGN-1">
                  View the User Flow
                </Figma>
              </div>
            </ProjectSubSection>
          </ProjectSection>
        </div>
        {/* prototype */}
        <div>
          <div ref={prototypeRef}></div>
          <ProjectSection title="Prototype">
            <ProjectSubSection title="Exploring Ideas from Low-Fi to Mid-Fi">
              <Paragraph>
                I created specific design layouts based on user flows, task
                flows, and observations of how users prefer to search and
                prevent duplicate reservations. Starting from low-fidelity
                sketches, I developed more detailed layouts, digitizing them
                into mid-fidelity wireframes to make the designs more tangible.
              </Paragraph>
              <div className="py-[20px] space-y-[30px]">
                <div className="flex justify-between">
                  <Image
                    src="/resto/lofi-1.jpg"
                    alt="lofi"
                    width={315}
                    height={400}
                    className="rounded-[10px]"
                  />
                  <Image
                    src="/resto/lofi-2.jpg"
                    alt="lofi"
                    width={315}
                    height={400}
                    className="rounded-[10px]"
                  />
                  <Image
                    src="/resto/lofi-3.jpg"
                    alt="lofi"
                    width={315}
                    height={400}
                    className="rounded-[10px]"
                  />
                </div>
                <Figma href="https://www.figma.com/design/LV5sMpEKJ8JlL6TBeFPdVS/Capstone-3---End-to-End-Application?node-id=46-55&t=6g8QSShYxUqXAJml-1">
                  View the Low-Fi Wireframes
                </Figma>
              </div>
              <div className="py-[20px] space-y-[30px]">
                <div className="flex justify-between">
                  <Image
                    src="/resto/midfi-1.svg"
                    alt="midfi"
                    width={220}
                    height={600}
                    className="rounded-[10px]"
                  />
                  <Image
                    src="/resto/midfi-2.svg"
                    alt="midfi"
                    width={220}
                    height={600}
                    className="rounded-[10px]"
                  />
                  <Image
                    src="/resto/midfi-3.svg"
                    alt="midfi"
                    width={220}
                    height={600}
                    className="rounded-[10px]"
                  />
                  <Image
                    src="/resto/midfi-4.svg"
                    alt="midfi"
                    width={220}
                    height={600}
                    className="rounded-[10px]"
                  />
                </div>
                <Figma href="https://www.figma.com/design/LV5sMpEKJ8JlL6TBeFPdVS/Capstone-3---End-to-End-Application?node-id=1043-37036&t=6g8QSShYxUqXAJml-1">
                  View the Mid-Fi Wireframes
                </Figma>
              </div>
            </ProjectSubSection>
            <ProjectSubSection title="Ensuring Users Understand the Design Layouts">
              <Paragraph>
                After creating the mid-fidelity wireframes, I conducted a quick
                usability test with 6 participants to check if users understood
                my design layout and if they found the interface user-friendly.
              </Paragraph>
              <div className="py-[20px] space-y-[50px]">
                <Image
                  src="/resto/test-1.svg"
                  alt="test"
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                />
                <Image
                  src="/resto/test-2.svg"
                  alt="test"
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                />
                <Image
                  src="/resto/test-3.svg"
                  alt="test"
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </ProjectSubSection>
            <ProjectSubSection title="Refining Designs through Iterated Mid-Fi Wireframes">
              <Paragraph>
                Based on the results of the mid-fi usability test, I iterated on
                the design to make it more user-friendly and help users achieve
                their goals.
              </Paragraph>
              <div className="py-[20px] space-y-[50px]">
                <Image
                  src="/resto/iteration-1.svg"
                  alt="iteration"
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                />
                <Image
                  src="/resto/iteration-2.svg"
                  alt="iteration"
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                />
                <Image
                  src="/resto/iteration-3.svg"
                  alt="iteration"
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                />
                <Image
                  src="/resto/iteration-4.svg"
                  alt="iteration"
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </ProjectSubSection>
            <ProjectSubSection title="Building a Strong Brand">
              <Paragraph>
                To create a user-centered product, it&apos;s essential to build
                a brand image that attracts users. I established brand values to
                ensure that searching for and booking restaurants does not feel
                difficult.
              </Paragraph>
              <div className="bg-white rounded-[20px] p-[10px]">
                <Image
                  src="/resto/moodboard.png"
                  alt="moodboard"
                  width={980}
                  height={637}
                />
              </div>
              <div className="flex space-x-[30px]">
                <MoodboardCard title="Colors">
                  <ColorRow
                    title="Primary"
                    colors={["EE722B", "C65310", "953B1D"]}
                  />
                  <ColorRow
                    title="Secondary"
                    colors={["B8AE94", "F4F0E0", "DFD5BD"]}
                  />
                  <ColorRow
                    title="Neutral"
                    colors={["F9F9F7", "FFFFFF"]}
                    border
                  />
                </MoodboardCard>
                <div className="flex-1 flex flex-col justify-between">
                  <MoodboardCard title="Logo">
                    <div className="flex justify-between">
                      <Image
                        src="/resto/logo-lg.svg"
                        alt="logo"
                        width={168}
                        height={158}
                      />
                      <div className="flex flex-col justify-between items-center">
                        <Image
                          src="/resto/logo-md.svg"
                          alt="logo"
                          width={100}
                          height={60}
                        />
                        <div className="flex space-x-[30px] px-[15px]">
                          <Image
                            src="/resto/logo-sm-1.svg"
                            alt="logo"
                            width={60}
                            height={60}
                          />
                          <Image
                            src="/resto/logo-sm-2.svg"
                            alt="logo"
                            width={60}
                            height={60}
                          />
                        </div>
                      </div>
                    </div>
                  </MoodboardCard>
                  <MoodboardCard title="Icons">
                    <div className="gap-[18px] flex flex-wrap">
                      {[...Array(16)].map((_, i) => (
                        <Image
                          src={`/resto/icon-${i + 1}.svg`}
                          alt="icon"
                          width={35}
                          height={35}
                          key={i}
                        />
                      ))}
                    </div>
                  </MoodboardCard>
                </div>
              </div>
              <div className="flex space-x-[30px]">
                <MoodboardCard title="Typography">
                  <div className="space-y-[15px] px-[10px]">
                    <div className="font-manrope text-[24px] font-semibold tracking-[.03em]">
                      H1 - Manrope SemiBold 24px
                    </div>
                    <div className="font-manrope text-[20px] font-medium tracking-[.03em]">
                      H2 - Manrope Medium 20px
                    </div>
                    <div className="font-manrope text-[18px] font-medium tracking-[.03em]">
                      H3 - Manrope Medium 18px
                    </div>
                    <div className="font-manrope text-[16px] tracking-[.03em]">
                      B1 - Manrope Regular 16px
                    </div>
                    <div className="font-manrope text-[14px] tracking-[.03em]">
                      B2 - Manrope Regular 14px
                    </div>
                    <div className="font-manrope text-[16px] font-medium tracking-[.03em]">
                      Button Text M - Manrope Medium 16px
                    </div>
                  </div>
                </MoodboardCard>
                <MoodboardCard title="Buttons">
                  <div className="flex space-x-[20px]">
                    <div className="space-y-[12px]">
                      <div className="text-[14px] tracking-[.01em]">
                        Default
                      </div>
                      <div className="space-y-[30px]">
                        <Button className="bg-cream text-[#303030]">
                          Search
                        </Button>
                        <Button className="bg-dark-orange text-[#FEFEFE]">
                          Reserve Now
                        </Button>
                        <Button className="bg-[#E8DFBA] text-[#303030] shadow-[0px_1.9px_1.9px_0px_rgba(0,0,0,0.25)_inset]">
                          Add filters
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-[12px]">
                      <div className="text-[14px] tracking-[.01em]">
                        Disabled
                      </div>
                      <div className="space-y-[30px]">
                        <Button className="bg-[rgba(223,213,189,0.50)] text-[rgba(48,48,48,0.50)]">
                          Search
                        </Button>
                        <Button className="bg-[rgba(198,83,16,0.50)] text-white">
                          Reserve Now
                        </Button>
                        <Button className="bg-[rgba(244,240,224,0.50)] text-[rgba(48,48,48,0.50)]">
                          Add filters
                        </Button>
                      </div>
                    </div>
                  </div>
                </MoodboardCard>
              </div>
            </ProjectSubSection>
            <ProjectSubSection title="Applying Branding in Hi-Fi Wireframes">
              <Paragraph>
                I incorporated all branding elements into the wireframes to
                create high-fidelity designs.
              </Paragraph>
              <div className="py-[20px] space-y-[30px]">
                <div className="flex justify-between">
                  <Image
                    src="/resto/hifi-1.png"
                    alt="hifi"
                    width={220}
                    height={476}
                  />
                  <Image
                    src="/resto/hifi-2.png"
                    alt="hifi"
                    width={220}
                    height={476}
                  />
                  <Image
                    src="/resto/hifi-3.png"
                    alt="hifi"
                    width={220}
                    height={476}
                  />
                  <Image
                    src="/resto/hifi-4.png"
                    alt="hifi"
                    width={220}
                    height={476}
                  />
                </div>
                <Figma href="https://www.figma.com/design/LV5sMpEKJ8JlL6TBeFPdVS/Capstone-3---End-to-End-Application?node-id=692-48559&t=6g8QSShYxUqXAJml-1">
                  View the Hi-Fi Wireframes
                </Figma>
              </div>
            </ProjectSubSection>
          </ProjectSection>
        </div>
        {/* test */}
        <div>
          <div ref={testRef}></div>
          <ProjectSection title="Test">
            <ProjectSubSection title="Enhancing Design for Better Usability">
              <Paragraph>
                To confirm whether high-fidelity wireframes can actually achieve
                user goals, I conducted <b>usability testing</b> with{" "}
                <b>5 participants</b>, including men and women in their 20s to
                60s.
              </Paragraph>
              <div className="py-[20px] space-y-[50px]">
                <TaskFlowCard
                  title="Task Flow 1"
                  subtitle="Search for restaurants that have an English menu"
                  participants={[
                    {
                      name: "Participant 1",
                      avatar: "/resto/task-flow-1-1.svg",
                      comment:
                        "“I like filtering and narrowing down the options if there are many displayed on the map.”",
                    },
                    {
                      name: "Participant 3",
                      avatar: "/resto/task-flow-1-2.svg",
                      comment:
                        "“The only thing that slowed me down in the process was finding the right tag. I guess I would like to type it if that’s possible.”",
                    },
                  ]}
                  conclusions={["4/5 were able to complete the task easily"]}
                  image="/resto/task-flow-1.svg"
                />
                <TaskFlowCard
                  title="Task Flow 2"
                  subtitle="Choose a restaurant that is popular among locals"
                  participants={[
                    {
                      name: "Participant 2",
                      avatar: "/resto/task-flow-2-1.svg",
                      comment:
                        "“Location icon colors look similar and I didn’t realize that they are different colors and have different meanings.”",
                    },
                    {
                      name: "Participant 5",
                      avatar: "/resto/task-flow-2-2.svg",
                      comment:
                        "“I want to see a list of restaurants instead of checking everything on the map.”",
                    },
                  ]}
                  conclusions={[
                    "3/5 had difficulties to find out which one is popular",
                    "2/5 didn’t use the filter function to narrow down the options",
                  ]}
                  image="/resto/task-flow-2.svg"
                  mirror
                />
                <TaskFlowCard
                  title="Task Flow 3"
                  subtitle="Search for restaurants near a famous landmark"
                  participants={[
                    {
                      name: "Participant 3",
                      avatar: "/resto/task-flow-3-1.svg",
                      comment:
                        "“I think this was pretty straightforward and a great feature.”",
                    },
                    {
                      name: "Participant 4",
                      avatar: "/resto/task-flow-3-2.svg",
                      comment:
                        "“This was very easy, and it’s helpful for finding restaurants when my schedule is packed.”",
                    },
                  ]}
                  conclusions={[
                    "5/5 were able to complete the task without any issues",
                  ]}
                  image="/resto/task-flow-3.svg"
                />
                <TaskFlowCard
                  title="Task Flow 4"
                  subtitle="Make a reservation without scheduling conflicts"
                  participants={[
                    {
                      name: "Participant 1",
                      avatar: "/resto/task-flow-4-1.svg",
                      comment:
                        "“I want to see the notification before the completion page. Otherwise I have to go back to the previous page to select a different time again.”",
                    },
                    {
                      name: "Participant 5",
                      avatar: "/resto/task-flow-4-2.svg",
                      comment:
                        "“It would be better if a notification appears when clicking on an available time slot if there is already another reservation.”",
                    },
                  ]}
                  conclusions={[
                    "4/5 were unsure about another reservation until the end",
                    "3/5 wanted to see the notification when choosing the time slot",
                  ]}
                  image="/resto/task-flow-4.svg"
                  mirror
                />
              </div>
            </ProjectSubSection>
            <ProjectSubSection title="Iterating Designs for User-Centric Solutions">
              <Paragraph>
                Based on the usability testing, I refined the design of the app
                that makes it easy for travelers to book and manage restaurant
                reservations.
              </Paragraph>
              <div className="py-[20px] space-y-[50px]">
                <Image
                  src="/resto/iteration-1.png"
                  alt="iteration"
                  width={1000}
                  height={531}
                />
                <Image
                  src="/resto/iteration-2.png"
                  alt="iteration"
                  width={1000}
                  height={531}
                />
                <Image
                  src="/resto/iteration-3.png"
                  alt="iteration"
                  width={1000}
                  height={531}
                />
                <Image
                  src="/resto/iteration-4.png"
                  alt="iteration"
                  width={1000}
                  height={531}
                />
              </div>
            </ProjectSubSection>
            <ProjectSubSection title="Final Prototype">
              <div className="py-[20px]">
                <div className="bg-white rounded-[20px] px-[30px] py-[60px] space-y-[10px]">
                  <div className="text-[22px] tracking-[.01em] font-medium">
                    Resto - Dining App in Japan
                  </div>
                  <div className="text-[18px] tracking-[.01em]">
                    A mobile app that simplifies restaurant discovery and
                    reservation management for travelers in Japan.
                  </div>
                </div>
              </div>
              <div className="space-y-[50px] py-[20px]">
                <Final
                  video="/resto/final-1.mp4"
                  header="A search function that allows users to search based on their needs"
                  notes={[
                    "Reduce the difficulty of making reservations due to language barriers",
                    "Make restaurant selection smooth and easy",
                  ]}
                />
                <Final
                  video="/resto/final-2.mp4"
                  header="Clear and trustworthy reviews help users effortlessly choose their ideal restaurant"
                  notes={[
                    "Offer a more authentic local experience",
                    "Assist in the discovery of hidden local gems",
                  ]}
                  mirror
                />
                <Final
                  video="/resto/final-3.mp4"
                  header="Searching for restaurants near landmarks helps users quickly find dining options"
                  notes={[
                    "Make trip planning easier",
                    "Choose restaurants based on sightseeing locations",
                  ]}
                />
                <Final
                  video="/resto/final-4.mp4"
                  header="A seamless reservation system empowers travelers to plan smooth journeys"
                  notes={[
                    "Eliminate double bookings for a perfectly organized trip",
                  ]}
                  mirror
                />
                <div>
                  <Link
                    href="https://www.figma.com/proto/LV5sMpEKJ8JlL6TBeFPdVS/Capstone-3---End-to-End-Application?page-id=493%3A4780&node-id=493-9339&node-type=canvas&viewport=284%2C360%2C0.06&t=6NVbRlngR40WJKQQ-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=493%3A9506&show-proto-sidebar=1"
                    target="_blank"
                    onMouseEnter={handleCursorHoverStart}
                    onMouseLeave={handleCursorHoverStop}
                  >
                    <div className="px-[60px] py-[15px] rounded-[75px] bg-brown3 text-[20px] font-semibold tracking-[.01em] inline-block">
                      View Hi-fi Prototype
                    </div>
                  </Link>
                </div>
              </div>
            </ProjectSubSection>
          </ProjectSection>
        </div>
        {/* next steps */}
        <div>
          <div ref={nextStepsRef}></div>
          <ProjectSection title="Next Steps">
            <ProjectSubSection title="Learning">
              <Paragraph>
                Throughout the process, from research to design, it is essential
                to understand users&apos; pain points and consider how to
                enhance the user experience in order to create a better product.
                Since everyone has different travel purposes and preferences
                when choosing a restaurant, it was crucial to identify the
                problems that diverse users face and what they desire.
                Throughout this project, I came to understand the importance of
                user feedback and the necessity of collecting valuable insights
                through research.
              </Paragraph>
            </ProjectSubSection>
            <ProjectSubSection title="Opportunities for Enhancement">
              <div className="space-y-[10px]">
                <div className="text-[22px] font-medium tracking-[.01em]">
                  Search Function
                </div>
                <Paragraph>
                  While RESTO&apos;s current search function allows users to
                  explore restaurants from multiple angles, there is room for
                  improvement by incorporating an AI-powered recommendation
                  system. This could suggest restaurants based on users’ search
                  history, favorite lists, or automatically find similar
                  options, leading to a more tailored and efficient search
                  experience.
                </Paragraph>
              </div>
              <div className="space-y-[10px]">
                <div className="text-[22px] font-medium tracking-[.01em]">
                  Multilingual Support
                </div>
                <Paragraph>
                  Currently, users can find restaurants with English support and
                  make reservations without worrying about language barriers.
                  However, by expanding language support and incorporating
                  translation features, RESTO could offer a more inclusive
                  experience, making it easier for non-English speakers to
                  navigate the platform and make reservations seamlessly.
                </Paragraph>
              </div>
            </ProjectSubSection>
          </ProjectSection>
        </div>
      </div>
    </div>
  );
}
