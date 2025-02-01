"use client";

import Image from "next/image";

import Button from "@/app/components/button";
import ColorRow from "@/app/components/color-row";
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
        playsInline
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
  background: (
    <>
      After the pandemic, travel has become more accessible, allowing many
      people to explore various countries. According to a World Economic Forum
      report, <b>Japan is one of the best tourist destinations</b> for 2024,
      with <b>9.62 million foreign tourists</b> visiting in 2023. Many people
      look forward to experiencing Japan&apos;s food culture, but for those
      unfamiliar with the language and culture,{" "}
      <b>
        finding and booking suitable restaurants or cafes can be challenging
      </b>
      . Additionally, organizing all the reservations and saved restaurants
      across different apps can be disorganized and sometimes difficult.
    </>
  ),
  problems: (
    <>
      Travelers often face difficulties in discovering suitable restaurants in
      Japan and managing their reservations efficiently.
    </>
  ),
  solutions: (
    <>
      Developing an app that allows travelers to search for restaurants that
      match their preferences and manage reservations easily, without being
      hindered by language barriers.
    </>
  ),
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
  desc: (
    <>
      Understanding what users prioritize when searching for restaurants, along
      with their experiences and challenges, including issues with reservations
      despite language barriers.
    </>
  ),
  goals: [],
  researchCompetition: {
    desc: (
      <>
        Before diving into the interview, I compared two direct competitors
        (Japanese reservation apps) and one indirect competitor (a well-known
        American reservation app) to understand what features are available in
        existing apps. The Japanese apps are strong in search and details but
        have unclear reservation system, while the American app focuses on a
        smooth, modern reservation process instead of detailed descriptions.
      </>
    ),
    notes: [],
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
      <div className="flex space-x-[1.3vw]">
        {[
          { src: "/resto/gurunavi.svg", alt: "Gurunavi" },
          { src: "/resto/tabelog.svg", alt: "Tabelog" },
          { src: "/resto/resy.svg", alt: "Resy" },
        ].map(({ src, alt }, i) => (
          <Image
            key={i}
            src={src}
            alt={alt}
            width={80}
            height={80}
            className="w-[80px] h-[80px]"
          />
        ))}
      </div>
    ),
  },
  researchExploration: {
    title:
      "Exploring Travel Dining Experiences through Surveys and User Interviews",
    survey: {
      desc: (
        <Paragraph>
          To understand travelers’ interests and priorities regarding dining and
          personal experiences, I conducted <b>surveys with 17 participants</b>{" "}
          and <b>user interviews with 5 participants</b>, all of whom are
          interested in traveling to Japan or have previously visited the
          country.
        </Paragraph>
      ),
      comments: [
        {
          comment:
            "“Dining at restaurants is a priority, but I want to avoid calling them for reservations due to language barriers.”",
          avatar: "/avatars/participant-1.svg",
        },
        {
          comment:
            "“I decide restaurants based on reviews from locals or Google. I usually want to go to restaurants that are famous among both tourists and locals.”",
          avatar: "/avatars/participant-2.svg",
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
        label: "Discovering and searching for restaurants",
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
        label: "What criteria do you use when selecting restaurants?",
        map: (
          <div className="py-[5.13vw] lg:py-[20px] overflow-x-scroll">
            <div className="w-[184.30vw] h-[76.92vw] lg:w-[1422px] lg:h-[628px] relative">
              <Image src="/resto/affinity-map-2.svg" alt="affinity map" fill />
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
    desc: (
      <>
        By gaining insights through surveys, user interviews, and affinity
        mapping, I created a user persona to highlight key patterns.
      </>
    ),
    personas: ["/resto/persona-1.jpeg"],
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
};

const ideate: IdeateProps = {
  brainstorm: {
    desc: (
      <>
        I brainstormed key features that address the intersection of business
        and user goals, considering technical feasibility, and used a card sort
        to determine the site structure.
      </>
    ),
    content: (
      <>
        <div className="py-[20px] space-y-[5.1vw] lg:flex lg:space-x-[30px] lg:space-y-0">
          <div className="px-[1.4vw] lg:px-[20px] lg:space-x-[20px] flex justify-between">
            <Image
              src="/avatars/user-needs.svg"
              alt="avatar"
              width={100}
              height={100}
              className="mt-auto w-[12.8vw] h-[12.8vw] lg:w-[100px] lg:h-[100px]"
            />
            <Image
              src="/resto/speech-bubble.svg"
              alt="speech"
              width={0}
              height={0}
              className="w-[51.3vw] h-[37.7vw] lg:w-[325px] lg:h-[248px]"
            />
          </div>
          <div className="flex flex-auto justify-between lg:px-[20px]">
            <div className="space-y-[2.1vw] lg:space-y-[30px]">
              <UserNeed icon="/icons/ideate-filter.svg" title="Filter" />
              <UserNeed icon="/icons/ideate-search.svg" title="Search" />
              <UserNeed icon="/icons/ideate-map.svg" title="Map" />
              <UserNeed icon="/icons/ideate-bell.svg" title="Notification" />
            </div>
            <div className="space-y-[2.1vw] lg:space-y-[30px]">
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
      </>
    ),
  },
  sitemap: {
    desc: (
      <>
        Based on the results of the card sort and research showing that
        travelers struggle with searching for restaurants and managing
        reservations, I designed a sitemap to structure the app.
      </>
    ),
    img: "/resto/sitemap.svg",
    url: "https://www.figma.com/board/63QeyiJMgUu0SL6h2rmDcv/Capstone-3---End-to-End-Application?node-id=35-1840&t=Rh2UA7lbJbDJRhGN-1",
    className: "w-[137.95vw] h-[102.56vw] lg:w-[1000px] lg:h-[703px] relative",
  },
  map: {
    desc: (
      "To better understand user needs and identify potential pain points or confusing elements related to the " +
      "“search” and “reservation” processes, I created several user flows and task flows. This helped visualize the " +
      "user’s journey and pinpoint areas for improvement."
    ),
    label: "Discover restaurants and make a reservation",
    img: "/resto/task-flow.svg",
    className: "w-[677.80vw] h-[128.21vw] lg:w-[4626px] lg:h-[875px] relative",
    url: "https://www.figma.com/board/63QeyiJMgUu0SL6h2rmDcv/Capstone-3---End-to-End-Application?node-id=80-1978&t=Rh2UA7lbJbDJRhGN-1",
  },
};

const prototype: PrototypeProps = {
  exploring: {
    desc: (
      <>
        I created specific design layouts based on the user flow, task flow, and
        observations of how users prefer to search for and make reservations
        effectively.
      </>
    ),
    lofi: {
      images: ["/resto/lofi-1.jpg", "/resto/lofi-2.jpg", "/resto/lofi-3.jpg"],
      default: [315, 400],
      desktop: "lg:w-[315px] lg:h-[400px]",
      mobile: "w-[197px] h-[250px]",
      url: "https://www.figma.com/design/LV5sMpEKJ8JlL6TBeFPdVS/Capstone-3---End-to-End-Application?node-id=46-55&t=6g8QSShYxUqXAJml-1",
    },
  },
  tests: {
    desc: (
      <>
        After creating the mid-fidelity wireframes, I conducted a quick
        usability test to evaluate whether users understood the design layouts.
        Based on the feedback, I made iterative improvements to enhance clarity
        and usability.
      </>
    ),
    images: {
      desktop: [
        "/resto/iteration-1.svg",
        "/resto/iteration-2.svg",
        "/resto/iteration-3.svg",
      ],
      mobile: [
        "/resto/iteration-1-sm.svg",
        "/resto/iteration-2-sm.svg",
        "/resto/iteration-3-sm.svg",
      ],
    },
  },
  branding: {
    title: "Applying Japanese Branding to Hi-Fi Designs",
    images: [
      {
        src: "/resto/hifi-1.png",
        default: [220, 476],
        desktop: "lg:w-[220px] lg:h-[476px]",
        mobile: "w-[33.33vw] h-[72.05]",
      },
      {
        src: "/resto/hifi-2.png",
        default: [220, 476],
        desktop: "lg:w-[220px] lg:h-[476px]",
        mobile: "w-[33.33vw] h-[72.05]",
      },
      {
        src: "/resto/hifi-3.png",
        default: [220, 476],
        desktop: "lg:w-[220px] lg:h-[476px]",
        mobile: "w-[33.33vw] h-[72.05]",
      },
      {
        src: "/resto/hifi-4.png",
        default: [220, 476],
        desktop: "lg:w-[220px] lg:h-[476px]",
        mobile: "w-[33.33vw] h-[72.05]",
      },
    ],
    url: "https://www.figma.com/design/LV5sMpEKJ8JlL6TBeFPdVS/Capstone-3---End-to-End-Application?node-id=692-48559&t=6g8QSShYxUqXAJml-1",
  },
};

const test: TestProps = {
  iterating: {
    title: "Refining Designs through Feedback for User-Centric Solutions",
    desc: (
      <>
        To address users’ challenges with navigating the app, finding
        restaurants, and making reservations, I conducted usability testing to
        gain insights into their interactions. Based on the feedback, I iterated
        on the design to simplify the process and better meet user needs,
        ensuring a more seamless experience.
      </>
    ),
    images: [
      ["/resto/iteration-1.png", "/resto/iteration-1-sm.png"],
      ["/resto/iteration-2.png", "/resto/iteration-2-sm.png"],
      ["/resto/iteration-3.png", "/resto/iteration-3-sm.png"],
    ].map(([src, smSrc], i) => ({
      default: [1000, 512],
      desktop: {
        src,
        className: "lg:w-[1000px] lg:h-[512px]",
      },
      mobile: {
        src: smSrc,
        className: "w-[70.26vw] h-auto",
      },
    })),
  },
  final: {
    header: "Resto - Dining App in Japan",
    desc: (
      <Paragraph>
        Dining App in Japan - A mobile app that simplifies restaurant discovery
        and reservation management for travelers in Japan
      </Paragraph>
    ),
    demos: [
      {
        video: {
          src: "/resto/final-1.mp4",
          className: "w-[29.03vw] h-auto lg:w-[300px] lg:h-[600px]",
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
          className: "w-[29.03vw] h-auto lg:w-[300px] lg:h-[600px]",
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
          className: "w-[29.03vw] h-auto lg:w-[300px] lg:h-[600px]",
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
          className: "w-[29.03vw] h-auto lg:w-[300px] lg:h-[600px]",
        },
        header:
          "A seamless reservation system empowers travelers to plan smooth journeys",
        notes: [
          "Avoid overlapping reservations for a seamlessly organized trip",
        ],
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
    <div className="space-y-[5.13vw] lg:space-y-[50px]">
      <div className="space-y-[0.69vw] lg:space-y-[10px]">
        <div className="text-[3.65vw] lg:text-[22px] font-medium tracking-[.01em]">
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
      <div className="space-y-[0.69vw] lg:space-y-[10px]">
        <div className="text-[3.65vw] lg:text-[22px] font-medium tracking-[.01em]">
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
    </div>
  ),
};
