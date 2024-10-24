"use client";

import Image from "next/image";

import Competitor from "@/app/components/competitor";
import Paragraph from "@/app/components/paragraph";
import Project from "@/app/components/project";
import TaskFlowCard from "@/app/components/task-flow-card";
import { DefineProps } from "@/app/components/define";
import { DesignProcessProps } from "@/app/components/design-process";
import { HeroProps } from "@/app/components/hero";
import { IdeateProps } from "@/app/components/ideate";
import { IntroductionProps } from "@/app/components/introduction";
import { NextStepsProps } from "@/app/components/next-steps";
import { PrototypeProps } from "@/app/components/prototype";
import { ResearchProps } from "@/app/components/research";
import { TestProps } from "@/app/components/test";

export default function KoreanAir() {
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
  title: "Korean Air",
  subtitle: "Mileage Optimizer",
  desc: "A feature that allows users to easily and effectively utilize their mileage for various options.",
  role: "UX/UI Designer",
  type: "Add a feature",
  timeline: "April - May 2024",
  url: "https://www.figma.com/proto/r91kC7CV7Rf6DdH7Dk6iQG/Capstone-1---Add-a-feature?page-id=74%3A269&node-id=97-342&node-type=frame&viewport=807%2C-264%2C0.07&t=jT6cyLgtvycuIhew-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=97%3A342&show-proto-sidebar=1",
  children: (
    <div className="py-[30px]">
      <Image
        src="/korean-air/hero.png"
        alt="Korean Air"
        width={1000}
        height={475}
      />
    </div>
  ),
};

const introduction: IntroductionProps = {
  background:
    "Korean Air, the flag carrier of South Korea, is the largest airline in the country by fleet size, international destinations, and flights. Serving 120 cities across 43 countries, Korean Air ranked among the top 10 airlines globally with a 5-star rating. In 2022, it transported over 4.7 million passengers on international flights and more than 6.2 million on domestic routes. The airline’s comprehensive mileage program allows customers to redeem points for flights, hotels, and various airport services.",
  problems:
    "The Korean Air website makes it difficult for users to navigate and use their mileage points. Mileage information is unclear and spread across multiple pages, leading to confusion about how many miles are needed and what they can be used for.",
  solutions:
    "Introducing an intuitive feature that clearly display mileage usage options and simplify the process of utilizing mileage, allowing Korean Air users to easily understand and redeem their points for flights, hotels, and services.",
};

const designProcess: DesignProcessProps = {
  research: ["Competitive Analysis", "Survey", "User Interviews"],
  define: [
    "Affinity Map",
    "User Personas",
    "Problem Statement",
    "Project Goals",
  ],
  ideate: ["Feature Ideas", "Task Flow", "User Flow"],
  prototype: ["Low-Fi Wireframes", "Mid-Fi Wireframes", "Hi-Fi Wireframes"],
  test: ["Usability Testing", "Iterations", "Final Prototype"],
  nextSteps: ["Learning", "Another Approach"],
};

const research: ResearchProps = {
  desc: "Understanding what users value most when using mileage rewards so that we can change the mileage display to make it easier to understand, use, and increase user satisfaction.",
  goals: [
    "Understand what users prioritize in mileage usage",
    "Determine what goals can be achieved by using mileage",
    "Understand the purpose and process of mileage utilization",
    "Identify the confusion in mileage display and difficulty in using it",
  ],
  researchCompetition: {
    desc: "Before conducting the interviews, I performed a competitive analysis to understand the features of websites that use mileage or points systems. In addition to Korean Air, I compared Delta Air Lines, a direct competitor, and Expedia and American Express, indirect competitors with similar points systems. I analyzed target users, the characteristics of each system, and the pros and cons to identify which features meet specific needs.",
    notes: [
      "Despite the specialized mileage and points systems on each website, there can still be difficulties in redeeming mileage or points. Since each site has separate pages for checking one’s mileage or points and for viewing available redemption options, users need to navigate back and forth between various pages.",
      "Through competitive analysis, I realized the need to display the mileage or points required for redemption in a clear and specific way. By clearly showing the target items that many users want to redeem and the exact amount of mileage or points needed, I can enhance users' motivation to redeem and improve their overall satisfaction. However, displaying all items at once can be challenging, so it is necessary to find an effective method.",
    ],
    features: [
      {
        icon: "/icons/desktop.svg",
        label: "A clear display of mileage or points",
      },
      {
        icon: "/icons/fire.svg",
        label: "Boost user motivation",
      },
      {
        icon: "/icons/file.svg",
        label: "Present redemption options",
      },
    ],
    children: (
      <div className="py-[20px] flex flex-wrap justify-between gap-[30px]">
        <Competitor
          icon="/korean-air/logo-sm.svg"
          name="Korean Air"
          pros={[
            "For travelers who frequently fly from or within Korea",
            "Mileage redemption options, including excess baggage, hotel stays, and car rentals",
            "Excellent benefits for elite program members",
            "Family mileage pooling is offered",
          ]}
          cons={["The display method for accumulated mileage is unclear"]}
          wide
        />
        <Competitor
          icon="/korean-air/delta.svg"
          name="Delta"
          pros={[
            "For travelers using US-based flights",
            "Mileage redemption options include unique features such as seat selection, gift cards, and experiences available through Delta Airlines",
            "Mileage does not expire",
            "Miles can be purchased and transferred to others.",
          ]}
          cons={[
            "The mileage booking page does not indicate which seat classes are available",
          ]}
          wide
        />
        <Competitor
          icon="/korean-air/expedia.svg"
          name="Expedia"
          pros={[
            "For those who frequently use hotels and flights both domestically and internationally",
            "Points redemption options, including cruises and activities",
            "Cashback system",
            "Members-only deals",
          ]}
          cons={["The options for using rewards are limited"]}
          wide
        />
        <Competitor
          icon="/korean-air/amex.svg"
          name="American Express"
          pros={[
            "For American express cardholders",
            "Points redemption options for points, including transfers to travel partners and charity donations",
            "A variety of redemption options available",
            "Points can be redeemed for cash",
          ]}
          cons={[
            "There is no display showing the value of points in actual currency",
          ]}
          wide
        />
      </div>
    ),
  },
  researchExploration: {
    title:
      "Exploring Experience with Airline Mileage and Credit Card Point Systems",
    survey: {
      desc: (
        <Paragraph>
          To understand how people use airline mileage and credit card point
          systems, and how well they comprehend the redemption process, I
          conducted a survey to gather quantitative data from a diverse group.
          The survey included <b>12 participants, aged 18 to 68</b>, all of whom
          were familiar with airline mileage or credit card point systems.
        </Paragraph>
      ),
      questions: [
        {
          question:
            "Have you redeemed your mileage (or credit card points), and what did you use it for?",
          response:
            "“I haven’t redeemed my mileage because I’m accumulating mileage and want to exchange for a flight in the future.”",
          avatar: "/avatars/participant-1.svg",
          name: "Participant 1",
        },
        {
          question:
            "Are you aware of your mileage (or credit card points) balance?",
          response: "“I have no idea how much mileage I’ve accumulated.”",
          avatar: "/avatars/participant-2.svg",
          name: "Participant 2",
        },
      ],
    },
    userInterview: {
      desc: (
        <Paragraph>
          To better understand people’s experiences and difficulties about the
          mileage system, I conducted user interviews with{" "}
          <b>5 participants aged 33-68</b> who have joined an airline’s mileage
          program.
        </Paragraph>
      ),
      questions: [
        {
          question: "What do you want to do with your mileage?",
          response: "“I’ve accumulated miles to exchange for a flight ticket.”",
          avatar: "/avatars/participant-3.svg",
          name: "Participant 1",
        },
        {
          question:
            "Have you redeemed your mileage, and was there a time where you found redeeming your mileage to be challenging?",
          response:
            "“Redeeming mileage was a bit challenging because the website design is not good and complicates the process.”",
          avatar: "/avatars/participant-4.svg",
          name: "Participant 2",
        },
      ],
    },
    usabilityTesting: {
      desc: (
        <Paragraph>
          Lastly, I conducted a usability test on the Korean Air website with{" "}
          <b>5 participants aged 33-68</b> to understand how users navigate the
          site, identify the difficulties they encounter, and determine areas
          that need improvement.
        </Paragraph>
      ),
      questions: [
        {
          question: "Show me how to find your accumulated mileage.",
          response:
            "“I wanted to go to my page to see my mileage, but I didn't know where to click.“",
          avatar: "/avatars/participant-1.svg",
          name: "Participant 1",
        },
        {
          response:
            "“It is difficult to see where the mileage is displayed, it would be nice if it was next to the name.” ",
          avatar: "/avatars/participant-2.svg",
          name: "Participant 2",
        },
      ],
    },
    findings: [
      {
        icon: "/icons/gift.svg",
        label: "Redeeming miles for flight tickets",
        sublabel: "is the most popular way to use the mileage",
      },
      {
        icon: "/icons/book-2.svg",
        label: "Understanding the mileage system",
        sublabel: "is difficult for users",
      },
      {
        icon: "/icons/file.svg",
        label: "Mileage display on Korean Air website",
        sublabel: "can cause confusion",
      },
    ],
  },
};

const define: DefineProps = {
  affinity: {
    desc: "Through surveys and interviews, I was able to gather statistics on how enthusiastic people are about exchanging miles and points, and how well they understand the system. I recorded the key points from the surveys and interviews on individual sticky notes, grouped them based on interview topics, and further categorized them into patterns to create an affinity map.",
    maps: [
      {
        label: "What do you want to do with your mileage or points?",
        map: (
          <div className="py-[20px] space-x-[50px] flex">
            <Image
              src="/korean-air/affinity-map-1-1.svg"
              alt="affinity map"
              width={0}
              height={0}
              style={{ width: "auto", height: "455px" }}
            />
            <Image
              src="/korean-air/affinity-map-1-2.svg"
              alt="affinity map"
              width={0}
              height={0}
              style={{ width: "auto", height: "455px" }}
            />
            <Image
              src="/korean-air/affinity-map-1-3.svg"
              alt="affinity map"
              width={0}
              height={0}
              style={{ width: "auto", height: "455px" }}
            />
          </div>
        ),
      },
      {
        label: "Pain points when using the Korean Air website",
        map: (
          <div className="pb-[20px]">
            <div className="py-[20px] space-x-[50px] flex">
              <Image
                src="/korean-air/affinity-map-2-1.svg"
                alt="affinity map"
                width={0}
                height={0}
                style={{ width: "auto", height: "560px" }}
              />
              <Image
                src="/korean-air/affinity-map-2-2.svg"
                alt="affinity map"
                width={0}
                height={0}
                style={{ width: "auto", height: "560px" }}
              />
              <Image
                src="/korean-air/affinity-map-2-3.svg"
                alt="affinity map"
                width={0}
                height={0}
                style={{ width: "auto", height: "560px" }}
              />
              <Image
                src="/korean-air/affinity-map-2-4.svg"
                alt="affinity map"
                width={0}
                height={0}
                style={{ width: "auto", height: "560px" }}
              />
            </div>
          </div>
        ),
      },
    ],
    url: "https://www.figma.com/board/reZSsCdxDbS1QbXJlNEqFR/Capstone-1---Adding-a-Feature?node-id=112-726&t=kbOQafEoUowSmyvq-1",
    findings: [
      {
        label: "66% of participants",
        sublabel: "prefer to redeem their mileage for flight tickets",
      },
      {
        label: "41% of participants",
        sublabel: "are not aware of required mileage for redemption",
      },
      {
        label: "Many participants",
        sublabel:
          "had difficulty navigating the Korean Air website to locate the mileage redemption options",
      },
    ],
  },
  personas: {
    desc: "After completing all the research, I created a persona in the early stages of the design process to deepen my understanding of specific users and user needs.",
    personas: [
      {
        name: "Persona",
        desc: (
          <Paragraph>
            Lina Kim is a 30-year-old product manager living in Los Angeles who
            frequently flies with Korean Air to visit her family in Korea.
            Although she accumulates mileage with Korean Air’s SKYPASS program,
            she finds the process of redeeming miles for tickets complicated and
            has never used them. Her main goals are to understand how to redeem
            her mileage and to save costs on her trips to Korea, but she is
            frustrated by the complexity of the website and the time it takes to
            find the necessary information.
          </Paragraph>
        ),
        image: "/korean-air/persona.jpeg",
      },
    ],
    url: "https://www.figma.com/design/r91kC7CV7Rf6DdH7Dk6iQG/Capstone-1---Add-a-feature?node-id=1-128&t=7ZhVcoHfPaWSlAut-1",
  },
  exploring: {
    desc: "To clarify the solutions needed to address specific user needs, I created two POV statements based on the personas. I chose one that focuses on confirming the mileage required for redemption, as it is the most crucial for achieving the personas’ goals.",
    povStatement:
      "I’d like to explore ways for people joining the Korean Air mileage program (SKYPASS) to understand at a glance what they can redeem their mileage for because many people may not know how many miles are needed for redemption, leading to a lack of motivation to accumulate mileage.",
    summary:
      "Then, I took the problems into clear questions that help find creative and practical solutions.",
    hmwQuestion:
      "How might we allow SKYPASS members to check their accumulated mileage against the required mileage at once?",
  },
  goals: {
    desc: "As a step to generate ideas to solve the personas’ problems, I mapped out project goals based on the research findings.' problems, I mapped out project goals based on the research findings.",
    img: "/korean-air/project-goals.svg",
    url: "https://www.figma.com/design/r91kC7CV7Rf6DdH7Dk6iQG/Capstone-1---Add-a-feature?node-id=5-19&t=7ZhVcoHfPaWSlAut-1",
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
              src="/korean-air/speech-bubble.svg"
              alt="speech"
              width={0}
              height={0}
              style={{ width: "auto", height: "100%" }}
            />
          </div>
          <div className="py-[20px] space-y-[30px] max-w-[462px]">
            {[
              "Simplify the explanation about the mileage program",
              "Category icons for redemption options",
              "Mileage redemption info in my page",
              "Display mileage count on a booking calendar",
            ].map((label, i) => (
              <div key={i} className="flex space-x-[10px]">
                <Image
                  alt="feature"
                  src="/icons/brown-diamond.svg"
                  width={27}
                  height={27}
                  className="mb-auto"
                />
                <span className="text-[18px] tracking-[.01em]">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </>
    ),
  },
  taskFlow: {
    desc: "I created a task flow to clarify the steps necessary for the personas to achieve their goals and ensure a user-friendly experience.",
    label: "Check the required mileage for exchanging award tickets",
    img: "/korean-air/task-flow.svg",
    url: "https://www.figma.com/board/reZSsCdxDbS1QbXJlNEqFR/Capstone-1---Adding-a-Feature?node-id=78-2052&t=kbOQafEoUowSmyvq-1",
  },
  userFlow: {
    desc: "To understand user needs and identify potential issues or confusing elements, I created a task flow.",
    label: "Check the required mileage for exchanging award tickets",
    img: "/korean-air/user-flow.svg",
    url: "https://www.figma.com/board/reZSsCdxDbS1QbXJlNEqFR/Capstone-1---Adding-a-Feature?node-id=30-430&t=kbOQafEoUowSmyvq-1",
  },
};

const prototype: PrototypeProps = {
  exploring: {
    desc: "Based on user flows, task flows, and observations of how users want to check their mileage, I sketched features that can solve user’s problems. Then I developed more detailed layouts, digitizing them into mid-fidelity wireframes to make the designs more tangible.",
    lofi: {
      images: [
        "/korean-air/lofi-1.png",
        "/korean-air/lofi-2.png",
        "/korean-air/lofi-3.png",
      ],
      descs: [
        "Display the accumulated mileage number under the my page icon",
        "Display what the miles can be redeemed for and how many miles are needed in graphs",
        "Below the accumulated mileage number, display mileage redemption options",
      ],
      descClass: "max-w-[300px]",
      width: 300,
      height: 215,
      url: "https://www.figma.com/design/r91kC7CV7Rf6DdH7Dk6iQG/Capstone-1---Add-a-feature?node-id=23-41&t=7ZhVcoHfPaWSlAut-1",
    },
    midfi: {
      images: [
        "/korean-air/midfi-1.png",
        "/korean-air/midfi-2.png",
        "/korean-air/midfi-3.png",
      ],
      width: 300,
      height: 215,
      url: "https://www.figma.com/design/r91kC7CV7Rf6DdH7Dk6iQG/Capstone-1---Add-a-feature?node-id=539-3691&t=7ZhVcoHfPaWSlAut-1",
    },
  },
  tests: {
    desc: (
      <Paragraph>
        After creating the mid-fidelity wireframes, I conducted a quick
        <b>usability test</b> with <b>3 participants</b> to check if users
        understood the design layout and whether they found the interface easier
        to use than the original Korean Air design.
      </Paragraph>
    ),
    images: [
      "/korean-air/test-1.svg",
      "/korean-air/test-2.svg",
      "/korean-air/test-3.svg",
    ],
  },
  refining: {
    desc: "Based on the results of the mid-fi usability test, I iterated on the design to make it more user-friendly and help users achieve their goals.",
    images: ["/korean-air/iteration-1.svg", "/korean-air/iteration-2.svg"],
  },
  final: {
    desc: "Considering Korean Air's image colors and existing design, I applied the brand colors to the added features.",
    images: [
      "/korean-air/hifi-1.png",
      "/korean-air/hifi-2.png",
      "/korean-air/hifi-3.png",
      "/korean-air/hifi-4.png",
    ],
    url: "https://www.figma.com/design/r91kC7CV7Rf6DdH7Dk6iQG/Capstone-1---Add-a-feature?node-id=539-3694&t=7ZhVcoHfPaWSlAut-1",
  },
};

const test: TestProps = {
  enhancing: {
    desc: (
      <Paragraph>
        To confirm whether high-fidelity wireframes can actually achieve user
        goals, I conducted <b>usability testing</b> with{" "}
        <b>5 participants aged between 27-68</b>.
      </Paragraph>
    ),
    taskFlows: (
      <div className="py-[20px] space-y-[50px]">
        <TaskFlowCard
          title="Task Flow 1"
          subtitle="Check the accumulated mileage"
          participants={[
            {
              name: "Participant 1",
              avatar: "/avatars/task-flow-1-1.svg",
              comment:
                "“Since the mileage number is displayed underneath the icon, it’s easy to check.”",
            },
            {
              name: "Participant 3",
              avatar: "/avatars/task-flow-1-2.svg",
              comment:
                "“This is straightforward and easy to find the accumulated mileage.”",
            },
          ]}
          conclusions={["5/5 were able to complete the task easily"]}
          image={{
            src: "/korean-air/task-flow-1.png",
            width: 500,
            height: 355,
          }}
          horizontal
        />
        <TaskFlowCard
          title="Task Flow 2"
          subtitle="Check if users are eligible to book an award ticket for their frequently used flight route using their accumulated mileage"
          participants={[
            {
              name: "Participant 2",
              avatar: "/avatars/task-flow-2-1.svg",
              comment:
                "“People might not understand what the award flight mean.”",
            },
            {
              name: "Participant 5",
              avatar: "/avatars/task-flow-2-2.svg",
              comment:
                "“For the Award flight ticket to ICN, Seoul, where is the departure location?”",
            },
          ]}
          conclusions={[
            "4/5 felt that the display of the frequently used flight was not clear ",
          ]}
          image={{
            src: "/korean-air/task-flow-2.png",
            width: 500,
            height: 355,
          }}
          horizontal
        />
        <TaskFlowCard
          title="Task Flow 3"
          subtitle="Find out the mileage redemption options"
          participants={[
            {
              name: "Participant 3",
              avatar: "/avatars/task-flow-3-1.svg",
              comment:
                "“It’s better to write clearer phrases to indicate the redemption options.” ",
            },
            {
              name: "Participant 4",
              avatar: "/avatars/task-flow-3-2.svg",
              comment:
                "“It might be clearer to specify as ICN-JFK, as indicated in the flight history.”",
            },
          ]}
          conclusions={[
            "4/5 struggled to understand the concept of mileage display and find additional redemption options",
          ]}
          image={{
            src: "/korean-air/task-flow-3.png",
            width: 500,
            height: 355,
          }}
          horizontal
        />
      </div>
    ),
  },
  iterating: {
    desc: "Based on the usability testing, I refined the design of the feature that makes it easy for users to see their accumulated mileage and redemption options.",
    images: [
      "/korean-air/iteration-1.png",
      "/korean-air/iteration-2.png",
      "/korean-air/iteration-3.png",
    ],
  },
  final: {
    header: "Mileage Optimizer",
    desc: "A feature that allows users to easily and effectively utilize their mileage for various options.",
    demos: [
      {
        video: "/korean-air/final-1.mp4",
        header: "A mileage display under the account icon",
        notes: [
          "Easily check your mileage at a glance",
          "Clearly show that mileage actions can be done from the account page",
        ],
        wide: true,
      },
      {
        video: "/korean-air/final-2.mp4",
        header:
          "Show the miles needed to exchange for tickets of frequently used flights on the homepage",
        notes: ["Make it easy to check the miles needed for ticket exchanges"],
        mirror: true,
        wide: true,
      },
      {
        video: "/korean-air/final-3.mp4",
        header: "Display of mileage redemption options",
        notes: [
          "Display what the mileage can be used for and how much more is needed",
          "Increase user motivation to save or use mileage",
        ],
        wide: true,
      },
    ],
    url: "https://www.figma.com/proto/r91kC7CV7Rf6DdH7Dk6iQG/Capstone-1---Add-a-feature?page-id=74%3A269&node-id=97-342&node-type=frame&viewport=807%2C-264%2C0.07&t=jT6cyLgtvycuIhew-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=97%3A342&show-proto-sidebar=1",
  },
};

const nextSteps: NextStepsProps = {
  learning:
    "The goal of this project was to help Korean Air users understand and effectively utilize their mileage. Since the research participants were not necessarily Korean Air users, I aimed to address the needs of both current and potential users. The most challenging part of the process was designing new features without disrupting the existing website’s design and functionality. Through repeated usability testing, I was able to gradually align with user goals, enabling them to more easily see how they could use their mileage compared to the existing website. This iterative usability testing process was crucial in refining my approach and ensuring that the final product effectively met user needs. It became clear that reflecting the users’ voices is essential for designing user-friendly features, leading to the creation of better products.' pain points and consider how to enhance the user experience in order to create a better product. Since everyone has different travel purposes and preferences when choosing a restaurant, it was crucial to identify the problems that diverse users face and what they desire. Throughout this project, I came to understand the importance of user feedback and the necessity of collecting valuable insights through research.",
  opportunities: (
    <Paragraph>
      On the Korean Air website, it is possible to book flights using mileage.
      However the number of miles required may vary depending on the date, and
      users need to check these mile amounts on a separate page, making smooth
      mileage reservations difficult. To avoid lowering user motivation, it is
      key to check the availability of mileage bookings and the required miles
      at the same time. These issues need to be addressed to design more
      user-centric features.
    </Paragraph>
  ),
};
