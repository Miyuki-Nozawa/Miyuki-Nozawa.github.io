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

export default function Pibu() {
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
  title: "Pibu",
  subtitle: "Skincare Store Website",
  desc: "A website to introduce a local business and expand their business.",
  role: "UX/UI Designer",
  type: "Responsive Web Design",
  timeline: "May - June 2024",
  url: "https://www.figma.com/proto/LV5sMpEKJ8JlL6TBeFPdVS/Capstone-3---End-to-End-Application?page-id=493%3A4780&node-id=493-9339&node-type=canvas&viewport=284%2C360%2C0.06&t=6NVbRlngR40WJKQQ-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=493%3A9506&show-proto-sidebar=1",
  children: (
    <div className="flex space-x-[25px] py-[20px] pb-[50px]">
      <Image src="/pibu/desktop.png" alt="Pibu" width={775} height={454} />
      <Image
        src="/pibu/mobile.png"
        alt="Pibu"
        width={200}
        height={454}
        className="mt-auto"
      />
    </div>
  ),
};

const introduction: IntroductionProps = {
  background:
    "Pibu is a family-owned Korean skincare store located in New York City. They opened their store in December 2023, and they target individuals of all genders in their 20s to 40s and offer a variety of skincare products. Their customers are mainly local residents, and they are considering the development of a website and an e-commerce platform to expand their business. They are hoping to have a website that matches to their target customers, and their aesthetic of the store.",
  problems:
    "Pibu has a clear target audience and brand aesthetic but struggles to align these with their website design. They are uncertain about the content that will encourage purchases and wish to create a unique, user-friendly website without relying on pre-made templates, ensuring they stand out from competitors.",
  solutions:
    "Developing a website to increase brand awareness and drive online sales, focusing on e-commerce for business expansion while emphasizing a user-friendly design that aligns with Pibu’s brand identity and appeals to their target audience. ",
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
  desc: "Understanding which information is beneficial for users and what motivates them will enhance their desire to make purchases. These insights will encourage users to shop at Pibu, thereby increasing brand recognition and supporting business expansion.",
  goals: [
    "Identify what users prioritize in choosing websites",
    "Understand what kind of information users expect regarding skincare products",
    "Determine what increases user’s purchasing desire",
    "Understand the user's pain points when purchasing skincare products",
  ],
  researchCompetition: {
    desc: "First, I conducted a competitive analysis to understand the structure and features of general skincare e-commerce sites. I compared two direct competitors specializing in K-beauty with one indirect competitor focusing on general skincare. Based on each site’s brand value and target audience, I identified how they present their websites.",
    notes: [
      "While all e-commerce websites share basic functionalities, each one incorporates unique features tailored to their target users. Direct competitors have fewer products but offer a simple and very user-friendly layout. On the other hand, indirect competitors, with a broader range of brands and products, use icons and other design elements to make the vast amount of information more accessible.",
    ],
    features: [
      {
        icon: "/icons/cart.svg",
        label: "Smooth purchasing process",
      },
      {
        icon: "/icons/smile-thin.svg",
        label: "User-friendly and intuitive features",
      },
      {
        icon: "/icons/tag.svg",
        label: "Strong and impactful branding",
      },
      {
        icon: "/icons/laptop.svg",
        label: "Differentiating content from others",
      },
    ],
    children: (
      <div className="py-[20px] flex justify-between">
        <Competitor
          icon="/pibu/sentisenti.svg"
          name="sentisenti"
          pros={[
            "For people who are interested in K-beauty",
            "Competitive price",
            "Extensive skincare and healthcare products",
            "Points can be used like cash",
          ]}
          cons={["Some sections on the website are not well-functioning"]}
          pibu
        />
        <Competitor
          icon="/pibu/masksheets.svg"
          name="Masksheets"
          pros={[
            "For people who are interested in Asian beauty",
            "Offers brands that are hard to find in other shops",
            "Consistent Branding",
            "Staff picked items",
          ]}
          cons={["Unable to view all brands in a list"]}
          pibu
        />
        <Competitor
          icon="/pibu/sephora.svg"
          name="Sephora"
          pros={[
            "For people who are interested in beauty and health",
            "Wide selection of brands and products",
            "Utilization of social media",
            "Reliability",
          ]}
          cons={["There is too much information on the screen"]}
          pibu
        />
      </div>
    ),
  },
  researchExploration: {
    title: "Exploring the Experiences of Purchasing Skincare Products",
    survey: {
      desc: (
        <Paragraph>
          I conducted a survey with <b>15 participants aged 25-44</b> to
          understand their interest in skincare products, the criteria they use,
          and how they make purchase decisions.
        </Paragraph>
      ),
      questions: [
        {
          question:
            "What websites do you use when you purchase skincare products, and why did you choose those websites?",
          response:
            "“I usually use Amazon or Target because I can check for discounts, view ingredient information, and read more honest reviews.”",
          avatar: "/avatars/participant-1.svg",
          name: "Participant 1",
        },
        {
          question: "What criteria do you use to select skincare products?",
          response:
            "“I want to know if the product is effective for my skin type.”",
          avatar: "/avatars/participant-2.svg",
          name: "Participant 2",
        },
      ],
    },
    userInterview: {
      desc: (
        <Paragraph>
          In order to collect qualitative data on users’ specific thoughts and
          personal experiences, I conducted user interviews with{" "}
          <b>5 participants aged 27-37</b>. I particularly focused on users’
          motivations and challenges related to purchasing skincare products.
        </Paragraph>
      ),
      questions: [
        {
          question:
            "Have you experienced any difficulties in selecting the right skincare products?",
          response:
            "“I have had difficulties selecting the right skincare products because I didn’t know my skin type.” ",
          avatar: "/avatars/participant-3.svg",
          name: "Participant 1",
        },
        {
          question:
            "Have you ever had an experience where you were not satisfied with a skincare product you purchased?",
          response:
            "“There was a lot of trial and error in finding products that work for me.” ",
          avatar: "/avatars/participant-4.svg",
          name: "Participant 2",
        },
      ],
    },
    findings: [
      {
        icon: "/icons/sad.svg",
        label: "Lack of knowledge about one’s skin type",
        sublabel: "is common for participants",
      },
      {
        icon: "/icons/magnifying-glass-thin.svg",
        label: "Finding the right products for your skin",
        sublabel: "can be challenging",
      },
      {
        icon: "/icons/star-hollow.svg",
        label: "Trust reviews, ratings, and recommendations",
        sublabel: "are key factors when choosing skincare products",
      },
      {
        icon: "/icons/research.svg",
        label: "Texture, scent, and potential reactions",
        sublabel: "are hard to determine when purchasing products online",
      },
    ],
  },
};

const define: DefineProps = {
  affinity: {
    desc: "I recorded key points from the surveys and user interviews on individual sticky notes and created an affinity map. Then, I categorized the information by topics and patterns.",
    maps: [
      {
        label: "What is most challenging when choosing skincare products?",
        map: (
          <div className="py-[20px] space-x-[50px] flex">
            <Image
              src="/pibu/affinity-map-1.svg"
              alt="affinity map"
              width={0}
              height={0}
              style={{ width: "auto", height: "535px" }}
            />
          </div>
        ),
      },
      {
        label: "What do you expect from online purchases?",
        map: (
          <div className="pb-[20px]">
            <Image
              src="/pibu/affinity-map-2.svg"
              alt="affinity map"
              width={0}
              height={0}
              style={{ width: "auto", height: "646px" }}
            />
          </div>
        ),
      },
    ],
    url: "https://www.figma.com/board/63QeyiJMgUu0SL6h2rmDcv/Capstone-3---End-to-End-Application?node-id=90-2022&t=Rh2UA7lbJbDJRhGN-1",
    findings: [
      {
        label: "80% of participants",
        sublabel:
          "prefer buying skincare products online rather than in person",
      },
      {
        label: "Many participants",
        sublabel:
          "expect convenience and a wide product selection for online purchases",
      },
      {
        label: "75% of participants",
        sublabel: "find choosing skincare products challenging",
      },
      {
        label: "60% of participants",
        sublabel:
          "choose skincare products based on reviews, ratings or recommendations",
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
            Peter Cho is a 34-year-old software engineer in New York who,
            influenced by his partner and friends, has recently started using
            skincare products. He seeks to find effective products and establish
            a daily routine but <b>struggles with determining his skin type</b>{" "}
            and <b>understanding the efficacy of various products</b> due to the
            overwhelming amount of information available.
          </Paragraph>
        ),
        image: "/pibu/persona-1.jpeg",
      },
      {
        name: "Persona 2",
        desc: (
          <Paragraph>
            Mary Harris is a 28-year-old kindergarten teacher from New York who
            is passionate about skincare and often seeks discounts online. She
            is currently concerned about dull skin and is eager to try new
            products, but hesitates due to the inability to test samples
            beforehand and worries about negative reviews. Her challenges
            include <b>determining product suitability without samples</b> and
            <b>dealing with limited reviews</b>.
          </Paragraph>
        ),
        image: "/pibu/persona-2.jpeg",
      },
    ],
    url: "https://www.figma.com/design/LV5sMpEKJ8JlL6TBeFPdVS/Capstone-3---End-to-End-Application?node-id=0-1&t=6g8QSShYxUqXAJml-1",
  },
  exploring: {
    desc: "To clarify the solutions needed to address specific user needs, I created three POV statements based on the personas. Among them, I selected the POV related to a skin type as it is the most crucial for achieving the personas’ goals.",
    povStatement:
      "I’d like to explore ways to help people to find and understand their skin type because choosing the right skincare products becomes challenging without knowledge of their skin type.",
    summary:
      "Then, I took the problem into a clear question that helps find creative and practical solutions.",
    hmwQuestion:
      "How might we help people to effectively choose the appropriate skincare products based on their skin type? ",
  },
  goals: {
    desc: "As a step to generate ideas to solve the personas’ problems, I mapped out project goals based on the research findings.",
    img: "/pibu/project-goals.svg",
    url: "https://www.figma.com/design/LV5sMpEKJ8JlL6TBeFPdVS/Capstone-3---End-to-End-Application?node-id=1-278&t=6g8QSShYxUqXAJml-1",
  },
};

const ideate: IdeateProps = {
  brainstorm: {
    desc: "While considering the technical aspects and input from stakeholders, I brainstormed key features that align with both business goals and user goals.  ",
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
              src="/pibu/speech-bubble.svg"
              alt="speech"
              width={0}
              height={0}
              style={{ width: "auto", height: "100%" }}
            />
          </div>
          <div className="flex px-[20px] space-x-[30px]">
            <div className="space-y-[30px]">
              <UserNeed icon="/icons/review.svg" title="Reviews" />
              <UserNeed icon="/icons/star-hollow.svg" title="Ratings" />
              <UserNeed icon="/icons/filter.svg" title="Filter" />
              <UserNeed
                icon="/icons/magnifying-glass-thin.svg"
                title="Search"
              />
            </div>
            <div className="space-y-[30px]">
              <UserNeed icon="/icons/check-2.svg" title="Skin type checker" />
              <UserNeed icon="/icons/book.svg" title="How to use the product" />
              <UserNeed
                icon="/icons/side-by-side.svg"
                title="Side by side comparison"
              />
              <UserNeed icon="/icons/info.svg" title="Detailed product info" />
            </div>
          </div>
        </div>
        <Down />
        <Paragraph>
          I conducted a card sort with <b>37 cards</b> and <b>7 participants</b>
          . Using a <b>hybrid card sort</b>, I determined how users categorized
          the cards and decided on the menu items and their associated content.
        </Paragraph>
        <Paragraph>
          As a result of the card sort, there were no new categories added by
          the users, and there was unanimous agreement on 15 out of the 37
          cards.
        </Paragraph>
        <Image
          src="/pibu/card-sort.svg"
          alt="card sort"
          width={0}
          height={0}
          style={{ width: "100%", height: "auto" }}
        />
      </>
    ),
  },
  sitemap: {
    desc: "Based on the results of the card sort, I created a sitemap for the website structure. Since users expect to see not only products but also categories like skin type and skin concerns as part of the products, the structure was designed to ensure easy access to detailed information from the shop section.",
    img: "/pibu/sitemap.svg",
    url: "https://www.figma.com/board/63QeyiJMgUu0SL6h2rmDcv/Capstone-3---End-to-End-Application?node-id=35-1840&t=Rh2UA7lbJbDJRhGN-1",
  },
  refine: {
    desc: "I created two task flows to clarify the steps necessary for users to achieve specific goals and promote a user-friendly approach.",
    flows: [
      {
        label: "Identify your skin type",
        img: "/pibu/user-flow-1.svg",
      },
      {
        label: "Purchase the right products for your skin type",
        img: "/pibu/user-flow-2.svg",
      },
    ],
    url: "https://www.figma.com/board/63QeyiJMgUu0SL6h2rmDcv/Capstone-3---End-to-End-Application?node-id=42-8803&t=Rh2UA7lbJbDJRhGN-1",
  },
  map: {
    desc: "To understand user needs and identify potential issues or confusing elements, I created a user flow.",
    label: "Purchase the right products for your skin type",
    img: (
      <div className="py-[20px] w-[4723px] h-[1113px] relative">
        <Image src="/pibu/task-flow.svg" alt="task flow" fill />
      </div>
    ),
    url: "https://www.figma.com/board/63QeyiJMgUu0SL6h2rmDcv/Capstone-3---End-to-End-Application?node-id=80-1978&t=Rh2UA7lbJbDJRhGN-1",
  },
};

const prototype: PrototypeProps = {
  exploring: {
    alternateTitle: "Sketching Out Ideas",
    desc: "I created the page layouts needed for users to complete tasks based on the user flow and task flow. ",
    lofi: {
      images: ["/pibu/lofi-1.jpg", "/pibu/lofi-2.jpg", "/pibu/lofi-3.jpg"],
      width: 315,
      height: 400,
      url: "https://www.figma.com/design/LV5sMpEKJ8JlL6TBeFPdVS/Capstone-3---End-to-End-Application?node-id=46-55&t=6g8QSShYxUqXAJml-1",
    },
  },
  adding: {
    desc: "Based on the low-fidelity sketches, I considered more detailed layouts and digitalized them to create mid-fidelity wireframes, making the detailed layout more tangible. Although users will most likely engage with the product from a desktop, I wanted to make sure that all of the features would also work on a mobile screen.",
    images: ["/pibu/midfi-1.svg", "/pibu/midfi-2.svg"],
    imagesSm: ["/pibu/midfi-3.svg", "/pibu/midfi-4.svg"],
    url: "https://www.figma.com/design/RbkCKTmRORmmiispxyOpXz/Capstone-2---Responsive-Web-Design?node-id=1526-34763&t=Ezlc7eUJ1xCvo01W-1",
  },
  tests: {
    desc: (
      <Paragraph>
        After creating the mid-fidelity wireframes, I conducted a quick{" "}
        <b>usability test</b> with <b>5 participants</b> to check if users
        understood the design layouts and if they found the interface
        user-friendly.
      </Paragraph>
    ),
    images: ["/pibu/test-1.svg", "/pibu/test-2.svg"],
  },
  refining: {
    desc: "Based on the results of the mid-fi usability test, I improved the designs to make them more user-friendly and easier for users to navigate.",
    images: ["/pibu/iteration-1.svg", "/pibu/iteration-2.svg"],
  },
  building: {
    desc: "Pibu already has a developed store image, including a logo and aesthetic. To confirm the website’s tone and direction with the stakeholders, I created two style tiles based on their brand values: one with a blue theme and one with a green theme. The stakeholder selected the blue style tile as the one that best aligns with the brand image.'s essential to build a brand image that attracts users. I established brand values that align with my vision of making searching for and booking restaurants less difficult.",
    content: (
      <div className="bg-white rounded-[20px] p-[10px]">
        <Image
          src="/pibu/moodboard.png"
          alt="moodboard"
          width={1000}
          height={711}
        />
      </div>
    ),
  },
  branding: {
    desc: "I incorporated all branding elements into the wireframes to create high-fidelity designs.",
    images: [
      {
        src: "/pibu/hifi-1.png",
        width: 480,
        height: 595,
      },
      {
        src: "/pibu/hifi-2.png",
        width: 200,
        height: 540,
      },
      {
        src: "/pibu/hifi-3.png",
        width: 200,
        height: 540,
      },
    ],
    url: "https://www.figma.com/design/RbkCKTmRORmmiispxyOpXz/Capstone-2---Responsive-Web-Design?node-id=931-7844&t=Ezlc7eUJ1xCvo01W-1",
  },
};

const test: TestProps = {
  enhancing: {
    desc: (
      <Paragraph>
        To confirm whether high-fidelity wireframes can actually achieve user
        goals, I conducted <b>usability testing</b> with <b>6 participants</b>.
      </Paragraph>
    ),
    taskFlows: (
      <div className="py-[20px] space-y-[50px]">
        <TaskFlowCard
          title="Task Flow 1"
          subtitle="Find out where you can determine your skin type"
          participants={[
            {
              name: "Participant 1",
              avatar: "/avatars/task-flow-1-1.svg",
              comment:
                "“Maybe a pop up on the bottom of the screen might help to find the skin type page.”",
            },
            {
              name: "Participant 3",
              avatar: "/avatars/task-flow-1-2.svg",
              comment:
                "“This was straight forward and I could find the page easily.”",
            },
          ]}
          conclusions={["5/6 were able to complete the task easily"]}
          image={{
            src: "/pibu/task-flow-1.png",
            width: 500,
            height: 355,
          }}
        />
        <TaskFlowCard
          title="Task Flow 2"
          subtitle="Save your skin type and find a list of items that are good for your skin type"
          participants={[
            {
              name: "Participant 2",
              avatar: "/avatars/task-flow-2-1.svg",
              comment: "“It wasn’t obvious that I can save my skin type.”",
            },
            {
              name: "Participant 5",
              avatar: "/avatars/task-flow-2-2.svg",
              comment:
                "“Having an instruction how to save the skin type might help for people to understand well.”",
            },
          ]}
          conclusions={[
            "3/6 were confused about how to save the skin type, even though they were able to complete the task.",
          ]}
          image={{
            src: "/pibu/task-flow-2.png",
            width: 500,
            height: 355,
          }}
        />
        <TaskFlowCard
          title="Task Flow 3"
          subtitle="Compare products and purchase the one that best suits you"
          participants={[
            {
              name: "Participant 3",
              avatar: "/avatars/task-flow-3-1.svg",
              comment:
                "“I had to click and scroll too much when comparing products.”",
            },
            {
              name: "Participant 4",
              avatar: "/avatars/task-flow-3-2.svg",
              comment:
                "“The compare button can stay fixed, so you don’t need to scroll back to click it.”",
            },
          ]}
          conclusions={[
            "4/6 struggled to choose products for comparison and expressed a desire for a simplified comparison feature.",
          ]}
          image={{
            src: "/pibu/task-flow-3.png",
            width: 500,
            height: 355,
          }}
        />
      </div>
    ),
  },
  iterating: {
    desc: "I conducted repeated testing and iterations to ensure the feature works smoothly on both desktop and mobile screens, refining the design to make it more user-friendly.",
    images: [
      {
        src: "/pibu/iteration-1.png",
        width: 1000,
        height: 400,
      },
      {
        src: "/pibu/iteration-2.png",
        width: 1000,
        height: 400,
      },
      {
        src: "/pibu/iteration-3.png",
        width: 1000,
        height: 400,
      },
      {
        src: "/pibu/iteration-4.png",
        width: 1000,
        height: 400,
      },
    ],
  },
  final: {
    header: "Skincare Store Website",
    desc: "A website to introduce a local business and expand their business.",
    wideSpace: true,
    demos: [
      {
        video: {
          src: "/pibu/final-1.mp4",
          className: "w-[750px] h-[472px]",
          addressBar: {
            src: "/pibu/address-bar.png",
            width: 750,
            height: 27,
          },
        },
        image: {
          src: "/pibu/final-1.png",
          width: 196,
          height: 400,
        },
        header:
          "Navigation to the skin type check page helps users choose products",
        notes: [
          "Assist users who are unsure about what to purchase",
          "A unique feature that sets the Pibu’s website apart from others",
        ],
        vertical: true,
      },
      {
        video: {
          src: "/pibu/final-2.mp4",
          className: "w-[750px] h-[472px]",
          addressBar: {
            src: "/pibu/address-bar.png",
            width: 750,
            height: 27,
          },
        },
        image: {
          src: "/pibu/final-2.png",
          width: 196,
          height: 400,
        },
        header:
          "A skin type checker and saving function allow users to search for suitable products",
        notes: [
          "Users can find the right products by knowing their skin type",
          "Reduce the stress of trial and error",
        ],
        vertical: true,
      },
      {
        video: {
          src: "/pibu/final-3.mp4",
          className: "w-[750px] h-[472px]",
          addressBar: {
            src: "/pibu/address-bar.png",
            width: 750,
            height: 27,
          },
        },
        image: {
          src: "/pibu/final-3.png",
          width: 196,
          height: 400,
        },
        header: "A comparison feature simplifies product selection for users",
        notes: [
          "Enable better product choices",
          "Easily see the differences between each item at a glance",
        ],
        vertical: true,
      },
    ],
    urls: {
      desktop:
        "https://www.figma.com/proto/RbkCKTmRORmmiispxyOpXz/Capstone-2---Responsive-Web-Design?page-id=597%3A7713&node-id=807-7005&node-type=canvas&viewport=373%2C-836%2C0.03&t=gMvi3WuZgZoYEoEd-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=807%3A7005&show-proto-sidebar=1",
      mobile:
        "https://www.figma.com/proto/RbkCKTmRORmmiispxyOpXz/Capstone-2---Responsive-Web-Design?page-id=1270%3A16466&node-id=1270-16467&node-type=canvas&viewport=182%2C302%2C0.02&t=N8ufLRQptDTfWbhu-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1270%3A16467&show-proto-sidebar=1",
    },
  },
};

const nextSteps: NextStepsProps = {
  learning:
    "Through this project, I gained valuable, practical experience by collaborating directly with stakeholders to design the website. A key achievement was creating a site that enables users to identify their skin type, which addresses their primary challenge based on research findings and stakeholder requirements. The biggest challenge lay in balancing research-driven design decisions with stakeholder feedback. Despite the limited timeframe, the fast-paced changes in the cosmetics market highlight the need for ongoing updates to keep the website user-friendly and support business growth.' pain points and consider how to enhance the user experience in order to create a better product. Since everyone has different travel purposes and preferences when choosing a restaurant, it was crucial to identify the problems that diverse users face and what they desire. Throughout this project, I came to understand the importance of user feedback and the necessity of collecting valuable insights through research.",
  opportunities: (
    <Paragraph>
      Since many people seek convenience when purchasing skincare products
      online, the search function and checkout process need improvement. By
      enabling customers to quickly find the products they are looking for and
      reducing the hassle of entering information through card history, I can
      enhance customer satisfaction.
    </Paragraph>
  ),
};
