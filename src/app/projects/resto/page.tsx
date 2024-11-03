"use client";

import Image from "next/image";

import Button from "@/app/components/button";
import ColorRow from "@/app/components/color-row";
import Competitor from "@/app/components/competitor";
import Down from "@/app/components/down";
import MoodboardCard from "@/app/components/moodboard-card";
import Paragraph from "@/app/components/paragraph";
import Project from "@/app/components/project";
import TaskFlowCard from "@/app/components/task-flow-card";
import UserNeed from "@/app/components/user-need";
import { DefineProps } from "@/app/components/define";
import { DesignProcessProps } from "@/app/components/design-process";
import { HeroProps } from "@/app/components/hero";
import { IdeateProps } from "@/app/components/ideate";
import { IntroductionProps } from "@/app/components/introduction";
import { NextStepsProps } from "@/app/components/next-steps";
import { PrototypeProps } from "@/app/components/prototype";
import { ResearchProps } from "@/app/components/research";
import { TestProps } from "@/app/components/test";

export default function Resto() {
  return (
    <Project
      hero={hero}
      introduction={introduction}
      designProcess={designProcess}
      research={research}
      define={define}
      ideate={ideate}
      prototype={prototype}
      test={test}
      nextSteps={nextSteps}
    />
  );
}

const hero: HeroProps = {
  title: "Resto",
  subtitle: "Dining App in Japan",
  desc: "A mobile app that simplifies restaurant discovery and reservation management for travelers in Japan.",
  role: "UX/UI Designer",
  type: "End-to-end application",
  timeline: "June - Aug 2024",
  url: "https://www.figma.com/proto/LV5sMpEKJ8JlL6TBeFPdVS/Capstone-3---End-to-End-Application?page-id=493%3A4780&node-id=493-9339&node-type=canvas&viewport=284%2C360%2C0.06&t=6NVbRlngR40WJKQQ-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=493%3A9506&show-proto-sidebar=1",
  children: (
    <div className="flex justify-between items-end py-[10px]">
      <video
        className="w-[25.6vw] h-[51.2vw] lg:w-[274px] lg:h-[550px]"
        autoPlay
        muted
        loop
      >
        <source src="/resto/hero.mp4" type="video/mp4" />
      </video>
      <Image
        src="/resto/screen-1.png"
        alt="Resto"
        width={206}
        height={453}
        className="w-[20.5vw] h-[45vw] lg:w-[206px] lg:h-[453px]"
      />
      <Image
        src="/resto/screen-2.png"
        alt="Resto"
        width={206}
        height={453}
        className="w-[20.5vw] h-[45vw] lg:w-[206px] lg:h-[453px]"
      />
      <Image
        src="/resto/screen-3.png"
        alt="Resto"
        width={206}
        height={453}
        className="w-0 h-0 lg:w-[206px] lg:h-[453px]"
      />
    </div>
  ),
};

const introduction: IntroductionProps = {
  background:
    "After the pandemic, travel has become more accessible, allowing many people to explore various countries. According to a World Economic Forum report, Japan is one of the best tourist destinations for 2024, with 9.62 million foreign tourists visiting in 2023. Many people look forward to experiencing Japan's food culture, but for those unfamiliar with the language and culture, finding and booking suitable restaurants or cafes can be challenging. Additionally, organizing all the reservations and saved restaurants across different apps can be disorganized and sometimes difficult.",
  problems:
    "Travelers often face difficulties in discovering suitable restaurants in Japan and managing their reservations efficiently.",
  solutions:
    "Developing an app that allows travelers to search for restaurants that match their preferences and manage reservations easily, without being hindered by language barriers.",
};

const designProcess: DesignProcessProps = {
  research: ["Competitive Analysis", "Survey", "User Interviews"],
  define: [
    "Affinity Map",
    "User Personas",
    "Problem Statement",
    "Project Goals",
  ],
  ideate: ["Feature Ideas", "Card Sort", "Sitemap", "Task & User Flows"],
  prototype: ["Wireframes", "Branding", "Prototyping"],
  test: ["Usability Testing", "Iterations"],
  nextSteps: ["Learning", "Different Approach"],
};

const research: ResearchProps = {
  desc: "Understanding what users prioritize when searching for restaurants as well as their experiences and issues with reservations despite language barriers.",
  goals: [
    "Identify what users prioritize in choosing restaurants when traveling",
    "Understand how people plan their trips and what kind of information is required for them",
    "Discover the key factors and challenges users face when searching for and selecting restaurants",
    "Understand how users manage their desired destinations and planned locations",
  ],
  researchCompetition: {
    desc: "Before diving into the interview, I compared two direct competitors (Japanese reservation apps) and one indirect competitor (a well-known American reservation app) to understand what features are available in existing apps. I compared their target users, focus, and trends to identify which features address specific needs.",
    notes: [
      "The direct competitors excel in search and restaurant details but has not focused on the reservation system, making it confusing for users who are not familiar with it. On the other hand, the indirect competitor, an American site, does not provide as detailed restaurant descriptions but has an excellent reservation system and incorporates the latest trends.",
    ],
    features: [
      {
        icon: "/icons/calendar.svg",
        label: "Simple reservation system",
        centered: true,
      },
      {
        icon: "/icons/gear.svg",
        label: "Flexible reservation methods",
        centered: true,
      },
      {
        icon: "/icons/magnifying-glass-thin.svg",
        label: "User-friendly search function",
        centered: true,
      },
      {
        icon: "/icons/book.svg",
        label: "Guide to popular spots and culture",
        centered: true,
      },
    ],
    children: (
      <div className="py-[2.5vw] lg:py-[20px] space-y-[2.5vw] lg:space-y-0 lg:flex justify-between">
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
            "Occasion based suggestion",
            "Incorporates user reviews",
            "Nationwide restaurant listings",
          ]}
          cons={[
            "Only allows booking of course menus",
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
            "Able to send special requests to restaurants",
          ]}
          cons={["Cannot make more than one reservation at the same time"]}
        />
      </div>
    ),
  },
  researchExploration: {
    title: "Exploring Travel Dining Experiences",
    survey: {
      desc: (
        <Paragraph>
          To understand travelers&apos; interests and priorities regarding the
          importance of dining and travel planning, I conducted a survey to
          gather quantitative data from a diverse group of travelers. The survey
          included <b>17 participants aged 18-34</b>, all of whom had travel
          experience, with <b>12 having traveled to Japan</b>.
        </Paragraph>
      ),
      questions: [
        {
          question: "How important is dining out while traveling to you?",
          response:
            "“Dining at restaurants is a priority, but I want to avoid calling them for reservations due to language barriers.”",
          avatar: "/avatars/participant-1.svg",
          name: "Participant 1",
        },
        {
          question: "How do you search for restaurants during your travels?",
          response:
            "“I decide restaurants based on reviews from locals or Google. I usually want to go to restaurants that are famous among both tourists and locals.”",
          avatar: "/avatars/participant-2.svg",
          name: "Participant 2",
          mirror: true,
        },
      ],
    },
    userInterview: {
      desc: (
        <Paragraph>
          Then, in order to collect qualitative data on users&apos; specific
          thoughts and personal experiences, I conducted user interviews with{" "}
          <b>5 participants aged 23-68</b>. To better understand their
          experiences traveling to Japan and the unique aspects of Japanese
          culture, I interviewed <b>4 participants who had visited Japan</b> and{" "}
          <b>1 Japanese participant</b>.
        </Paragraph>
      ),
      questions: [
        {
          question:
            "How was your experience when searching for and deciding on restaurants while traveling in Japan?",
          response:
            "“It was difficult because there were too many choices, and I didn’t know how to choose the right one.” ",
          avatar: "/avatars/participant-3.svg",
          name: "Participant 1",
        },
        {
          question:
            "Are there any struggles or difficulties you encounter when managing your restaurant list?",
          response:
            "“I wish Google Maps had a filter for location, showing food types or price ranges.”",
          avatar: "/avatars/participant-4.svg",
          name: "Participant 2",
          mirror: true,
        },
      ],
    },
    findings: [
      {
        icon: "/icons/star-hollow.svg",
        label: "Local tips & reviews",
        sublabel: "can be the deciding factor when choosing a restaurant",
      },
      {
        icon: "/icons/a.svg",
        label: "Language barriers",
        sublabel: "can make dining at restaurants challenging",
      },
      {
        icon: "/icons/find.svg",
        label: "Restaurant discovery",
        sublabel: "can be difficult",
      },
      {
        icon: "/icons/pencil-2.svg",
        label: "Reviewing & managing bookings",
        sublabel: "can be a struggle",
      },
    ],
  },
};

const define: DefineProps = {
  affinity: {
    desc: "I recorded the points and ideas obtained from the surveys and user interviews on individual sticky notes. Then I grouped them by interview topics, further categorized them into patterns, and created an affinity map.",
    maps: [
      {
        label: "How was your experience when finding restaurants or cafes?",
        map: (
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
        ),
      },
      {
        label: "What criteria do you use when selecting restaurants?",
        map: (
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
        ),
      },
    ],
    url: "https://www.figma.com/board/63QeyiJMgUu0SL6h2rmDcv/Capstone-3---End-to-End-Application?node-id=90-2022&t=Rh2UA7lbJbDJRhGN-1",
    findings: [
      {
        label: "72% of participants",
        sublabel:
          "believe that choosing dining options is important during travel",
      },
      {
        label: "62% of participants",
        sublabel: "decide on a restaurant based on reviews or ratings",
      },
      {
        label: "59% of participants",
        sublabel:
          "faced challenges in choosing a restaurant, even though they valued dining on their trip",
      },
      {
        label: "Many participants",
        sublabel:
          "find that the language barrier is the biggest challenge when making reservations",
      },
    ],
  },
  personas: {
    desc: "After conducting research, reviewing the findings, and organizing the data, I created two personas in the early stages of the design process to deepen my understanding of specific users and user needs.",
    personas: [
      {
        name: "Persona 1",
        desc: (
          <Paragraph>
            Matt Kim, a 30-year-old product manager from San Francisco, loves
            traveling to Japan and exploring local dining spots. He faces
            challenges due to the <b>language barrier</b>, making it difficult
            to find and reserve restaurants popular among locals. His main
            frustrations include the{" "}
            <b>time-consuming process of translating Japanese information</b>{" "}
            and the <b>difficulty of making phone reservations</b>.
          </Paragraph>
        ),
        image: "/resto/persona-1.jpeg",
      },
      {
        name: "Persona 2",
        desc: (
          <Paragraph>
            Sarah Laine, a 26-year-old interior designer from New York, is
            planning her first trip to Japan with friends and is excited to
            explore Japanese cuisine. She faces challenges{" "}
            <b>managing and sharing restaurant reservations among her group</b>{" "}
            and is worried about{" "}
            <b>keeping track of them amidst a packed schedule</b>. Her goals
            include{" "}
            <b>visiting many tourist spots and sticking to their travel plan</b>
            .
          </Paragraph>
        ),
        image: "/resto/persona-2.jpeg",
      },
    ],
    url: "https://www.figma.com/design/LV5sMpEKJ8JlL6TBeFPdVS/Capstone-3---End-to-End-Application?node-id=0-1&t=6g8QSShYxUqXAJml-1",
  },
  exploring: {
    desc: "To clarify the solutions needed to address specific user needs, I created two POV statements based on the personas. Among them, I selected the POV focusing on the language barrier and managing restaurant lists, as these were identified as significant challenges for many users.",
    povStatement:
      "I’d like to explore ways to propose a streamlined and functional reservation system catering to travelers who face challenges with language barriers during restaurant booking or encounter issues managing reservations.",
    summary:
      "Then, I took the problems into clear questions that help find creative and practical solutions.",
    hmwQuestion:
      "How might we design a reservation system that easily accommodates people facing language barriers, ensuring smooth booking experiences?",
  },
  goals: {
    desc: "As a step to generate ideas to solve the personas' problems, I mapped out project goals based on the research findings.",
    img: "/resto/project-goals.svg",
    url: "https://www.figma.com/design/LV5sMpEKJ8JlL6TBeFPdVS/Capstone-3---End-to-End-Application?node-id=1-278&t=6g8QSShYxUqXAJml-1",
  },
};

const ideate: IdeateProps = {
  brainstorm: {
    desc: "I brainstormed key features that address the intersection of business and user goals, while also considering technical feasibility to ensure both are met.",
    content: (
      <>
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
              <UserNeed icon="/icons/ideate-filter.svg" title="Filter" />
              <UserNeed icon="/icons/ideate-search.svg" title="Search" />
              <UserNeed icon="/icons/ideate-map.svg" title="Map" />
              <UserNeed icon="/icons/ideate-bell.svg" title="Notification" />
            </div>
            <div className="space-y-[30px]">
              <UserNeed
                icon="/icons/ideate-star.svg"
                title="Reviews & Ratings"
              />
              <UserNeed
                icon="/icons/ideate-smile.svg"
                title="Utilization of icons"
              />
              <UserNeed icon="/icons/ideate-a.svg" title="Language Option" />
              <UserNeed
                icon="/icons/ideate-calendar.svg"
                title="Simple Reservation"
              />
            </div>
          </div>
        </div>
        <Down />
        <Paragraph>
          I conducted an <b>open card sort</b> using feature keywords with{" "}
          <b>28 cards</b>, targeting <b>8 participants</b>, to identify how
          users categorize them. When the participants categorized the cards
          freely, most of them fell into <b>6 categories</b>. This helped us
          understand which content people want to see under each menu.
        </Paragraph>
        <Image
          src="/resto/card-sort.svg"
          alt="card sort"
          width={0}
          height={0}
          style={{ width: "100%", height: "auto" }}
        />
      </>
    ),
  },
  sitemap: {
    desc: "Based on the results of the card sort, I designed the app's structure and created a sitemap while referring to the research, which showed that travelers tend to struggle with searching for restaurants and managing reservations.",
    img: "/resto/sitemap.svg",
    url: "https://www.figma.com/board/63QeyiJMgUu0SL6h2rmDcv/Capstone-3---End-to-End-Application?node-id=35-1840&t=Rh2UA7lbJbDJRhGN-1",
  },
  refine: {
    desc: "I created two task flows to clarify the steps necessary for users to achieve specific goals and promote a user-friendly approach.",
    flows: [
      {
        label:
          "Discover restaurants or cafes and make reservations those tailored to your preferences",
        img: "/resto/user-flow-1.svg",
      },
      {
        label:
          "Check the reservations and the saved restaurants to plan your dining schedule during the trip",
        img: "/resto/user-flow-2.svg",
      },
    ],
    url: "https://www.figma.com/board/63QeyiJMgUu0SL6h2rmDcv/Capstone-3---End-to-End-Application?node-id=42-8803&t=Rh2UA7lbJbDJRhGN-1",
  },
  map: {
    desc: "I created a user flow to understand user needs and identify potential issues or confusing elements that are related to “search” and “reservations”.",
    label: "Discover restaurants or cafes and make reservations",
    img: (
      <div className="py-[20px] w-[4626px] h-[875px] relative">
        <Image src="/resto/task-flow.svg" alt="task flow" fill />
      </div>
    ),
    url: "https://www.figma.com/board/63QeyiJMgUu0SL6h2rmDcv/Capstone-3---End-to-End-Application?node-id=80-1978&t=Rh2UA7lbJbDJRhGN-1",
  },
};

const prototype: PrototypeProps = {
  exploring: {
    desc: "I created specific design layouts based on the user flow, the task flow, and observations of how users prefer to search and prevent duplicate reservations. Starting from low-fidelity sketches, I developed more detailed layouts, digitizing them into mid-fidelity wireframes to make the designs more tangible.",
    lofi: {
      images: ["/resto/lofi-1.jpg", "/resto/lofi-2.jpg", "/resto/lofi-3.jpg"],
      width: 315,
      height: 400,
      url: "https://www.figma.com/design/LV5sMpEKJ8JlL6TBeFPdVS/Capstone-3---End-to-End-Application?node-id=46-55&t=6g8QSShYxUqXAJml-1",
    },
    midfi: {
      images: [
        "/resto/midfi-1.svg",
        "/resto/midfi-2.svg",
        "/resto/midfi-3.svg",
        "/resto/midfi-4.svg",
      ],
      width: 220,
      height: 600,
      url: "https://www.figma.com/design/LV5sMpEKJ8JlL6TBeFPdVS/Capstone-3---End-to-End-Application?node-id=1043-37036&t=6g8QSShYxUqXAJml-1",
    },
  },
  tests: {
    desc: (
      <Paragraph>
        After creating the mid-fidelity wireframes, I conducted a quick{" "}
        <b>usability test</b> with <b>6 participants</b> to check if users
        understood the design layouts and if they found the interface
        user-friendly.
      </Paragraph>
    ),
    images: ["/resto/test-1.svg", "/resto/test-2.svg", "/resto/test-3.svg"],
  },
  refining: {
    desc: "Based on the results of the mid-fi usability test, I iterated on the design to make it more user-friendly and help users achieve their goals.",
    images: [
      "/resto/iteration-1.svg",
      "/resto/iteration-2.svg",
      "/resto/iteration-3.svg",
      "/resto/iteration-4.svg",
    ],
  },
  building: {
    desc: "To create a user-centered product, it's essential to build a brand image that attracts users. I established brand values that align with my vision of making searching for and booking restaurants less difficult.",
    content: (
      <>
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
            <ColorRow title="Primary" colors={["EE722B", "C65310", "953B1D"]} />
            <ColorRow
              title="Secondary"
              colors={["B8AE94", "F4F0E0", "DFD5BD"]}
            />
            <ColorRow title="Neutral" colors={["F9F9F7", "FFFFFF"]} border />
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
                <div className="text-[14px] tracking-[.01em]">Default</div>
                <div className="space-y-[30px]">
                  <Button className="bg-cream text-[#303030]">Search</Button>
                  <Button className="bg-dark-orange text-[#FEFEFE]">
                    Reserve Now
                  </Button>
                  <Button className="bg-[#E8DFBA] text-[#303030] shadow-[0px_1.9px_1.9px_0px_rgba(0,0,0,0.25)_inset]">
                    Add filters
                  </Button>
                </div>
              </div>
              <div className="space-y-[12px]">
                <div className="text-[14px] tracking-[.01em]">Disabled</div>
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
      </>
    ),
  },
  branding: {
    desc: "I incorporated all branding elements into the wireframes to create high-fidelity designs.",
    images: [
      {
        src: "/resto/hifi-1.png",
        width: 220,
        height: 476,
      },
      {
        src: "/resto/hifi-2.png",
        width: 220,
        height: 476,
      },
      {
        src: "/resto/hifi-3.png",
        width: 220,
        height: 476,
      },
      {
        src: "/resto/hifi-4.png",
        width: 220,
        height: 476,
      },
    ],
    url: "https://www.figma.com/design/LV5sMpEKJ8JlL6TBeFPdVS/Capstone-3---End-to-End-Application?node-id=692-48559&t=6g8QSShYxUqXAJml-1",
  },
};

const test: TestProps = {
  enhancing: {
    desc: (
      <Paragraph>
        To confirm whether my high-fidelity wireframes can achieve my user
        goals, I conducted <b>usability testing</b> with <b>5 participants</b>,
        including men and women in their 20s to 60s.
      </Paragraph>
    ),
    taskFlows: (
      <div className="py-[20px] space-y-[50px]">
        <TaskFlowCard
          title="Task Flow 1"
          subtitle="Search for restaurants that have an English menu"
          participants={[
            {
              name: "Participant 1",
              avatar: "/avatars/task-flow-1-1.svg",
              comment:
                "“I like filtering and narrowing down the options if there are many displayed on the map.”",
            },
            {
              name: "Participant 3",
              avatar: "/avatars/task-flow-1-2.svg",
              comment:
                "“The only thing that slowed me down in the process was finding the right tag. I guess I would like to type it if that’s possible.”",
            },
          ]}
          conclusions={["4/5 were able to complete the task easily."]}
          image={{
            src: "/resto/task-flow-1.svg",
            width: 220,
            height: 440,
          }}
        />
        <TaskFlowCard
          title="Task Flow 2"
          subtitle="Choose a restaurant that is popular among locals"
          participants={[
            {
              name: "Participant 2",
              avatar: "/avatars/task-flow-2-1.svg",
              comment:
                "“Location icon colors look similar and I didn’t realize that they are different colors and have different meanings.”",
            },
            {
              name: "Participant 5",
              avatar: "/avatars/task-flow-2-2.svg",
              comment:
                "“I want to see a list of restaurants instead of checking everything on the map.”",
            },
          ]}
          conclusions={[
            "3/5 had difficulties to find out which one is popular.",
            "2/5 didn’t use the filter function to narrow down the options.",
          ]}
          image={{
            src: "/resto/task-flow-2.svg",
            width: 220,
            height: 440,
          }}
          mirror
        />
        <TaskFlowCard
          title="Task Flow 3"
          subtitle="Search for restaurants near a famous landmark"
          participants={[
            {
              name: "Participant 3",
              avatar: "/avatars/task-flow-3-1.svg",
              comment:
                "“I think this was pretty straightforward and a great feature.”",
            },
            {
              name: "Participant 4",
              avatar: "/avatars/task-flow-3-2.svg",
              comment:
                "“This was very easy, and it’s helpful for finding restaurants when my schedule is packed.”",
            },
          ]}
          conclusions={[
            "5/5 were able to complete the task without any issues.",
          ]}
          image={{
            src: "/resto/task-flow-3.svg",
            width: 220,
            height: 440,
          }}
        />
        <TaskFlowCard
          title="Task Flow 4"
          subtitle="Make a reservation without scheduling conflicts"
          participants={[
            {
              name: "Participant 1",
              avatar: "/avatars/task-flow-4-1.svg",
              comment:
                "“I want to see the notification before the completion page. Otherwise I have to go back to the previous page to select a different time again.”",
            },
            {
              name: "Participant 5",
              avatar: "/avatars/task-flow-4-2.svg",
              comment:
                "“It would be better if a notification appears when clicking on an available time slot if there is already another reservation.”",
            },
          ]}
          conclusions={[
            "4/5 were unsure about another reservation until the end.",
            "3/5 wanted to see the notification when choosing the time slot.",
          ]}
          image={{
            src: "/resto/task-flow-4.svg",
            width: 220,
            height: 440,
          }}
          mirror
        />
      </div>
    ),
  },
  iterating: {
    desc: "Based on the usability testing, I refined the design of the app to make it easier for travelers to book and manage restaurant reservations.",
    images: [
      {
        src: "/resto/iteration-1.png",
        width: 1000,
        height: 512,
      },
      {
        src: "/resto/iteration-2.png",
        width: 1000,
        height: 512,
      },
      {
        src: "/resto/iteration-3.png",
        width: 1000,
        height: 512,
      },
      {
        src: "/resto/iteration-4.png",
        width: 1000,
        height: 512,
      },
    ],
  },
  final: {
    header: "Resto - Dining App in Japan",
    desc: "A mobile app that simplifies restaurant discovery and reservation management for travelers in Japan.",
    demos: [
      {
        video: {
          src: "/resto/final-1.mp4",
          className: "w-[300px] h-[600px]",
        },
        header:
          "A search function that allows users to search based on their needs",
        notes: [
          "Reduce the difficulty of making reservations due to language barriers",
          "Make restaurant selection smooth and easy",
        ],
      },
      {
        video: {
          src: "/resto/final-2.mp4",
          className: "w-[300px] h-[600px]",
        },
        header:
          "Clear and trustworthy reviews help users effortlessly choose their ideal restaurant",
        notes: [
          "Offer a more authentic local experience",
          "Assist in the discovery of hidden local gems",
        ],
        mirror: true,
      },
      {
        video: {
          src: "/resto/final-3.mp4",
          className: "w-[300px] h-[600px]",
        },
        header:
          "Searching for restaurants near landmarks helps users quickly find dining options",
        notes: [
          "Make trip planning easier",
          "Choose restaurants based on sightseeing locations",
        ],
      },
      {
        video: {
          src: "/resto/final-4.mp4",
          className: "w-[300px] h-[600px]",
        },
        header:
          "A seamless reservation system empowers travelers to plan smooth journeys",
        notes: ["Eliminate double bookings for a perfectly organized trip"],
        mirror: true,
      },
    ],
    url: "https://www.figma.com/proto/LV5sMpEKJ8JlL6TBeFPdVS/Capstone-3---End-to-End-Application?page-id=493%3A4780&node-id=493-9339&node-type=canvas&viewport=284%2C360%2C0.06&t=6NVbRlngR40WJKQQ-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=493%3A9506&show-proto-sidebar=1",
  },
};

const nextSteps: NextStepsProps = {
  learning:
    "Throughout the process, from research to design, it is essential to understand users' pain points and consider how to enhance the user experience in order to create a better product. Since everyone has different travel purposes and preferences when choosing a restaurant, it was crucial to identify the problems that diverse users face and what they desire. Throughout this project, I came to understand the importance of user feedback and the necessity of collecting valuable insights through research.",
  opportunities: (
    <>
      <div className="space-y-[10px]">
        <div className="text-[22px] font-medium tracking-[.01em]">
          Search Function
        </div>
        <Paragraph>
          While RESTO&apos;s current search function allows users to explore
          restaurants from multiple angles, there is room for improvement by
          incorporating an AI-powered recommendation system. This could suggest
          restaurants based on users’ search history, favorite lists, or
          automatically find similar options, leading to a more tailored and
          efficient search experience.
        </Paragraph>
      </div>
      <div className="space-y-[10px]">
        <div className="text-[22px] font-medium tracking-[.01em]">
          Multilingual Support
        </div>
        <Paragraph>
          Currently, users can find restaurants with English support and make
          reservations without worrying about language barriers. However, by
          expanding language support and incorporating translation features,
          RESTO could offer a more inclusive experience, making it easier for
          non-English speakers to navigate the platform and make reservations
          seamlessly.
        </Paragraph>
      </div>
    </>
  ),
};
