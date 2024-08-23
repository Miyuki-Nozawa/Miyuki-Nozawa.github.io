import Avatar from "@/app/components/avatar";
import BrandSection from "@/app/components/brand-section";
import Card from "@/app/components/card";
import Carousel from "@/app/components/carousel";
import Category from "@/app/components/category";
import Color from "@/app/components/color";
import Definition from "@/app/components/definition";
import DiamondHeadedList from "@/app/components/diamond-headed-list";
import DiamondHeader from "@/app/components/diamond-header";
import DoubleCarousel from "@/app/components/double-carousel";
import DownArrow from "@/app/components/down-arrow";
import FigmaLink from "@/app/components/figma-link";
import KeyQuestions from "@/app/components/key-questions";
import ParticpantResponses from "@/app/components/participant-responses";
import Participants from "@/app/components/participants";
import Persona from "@/app/components/persona";
import ProjectContents from "@/app/components/project-contents";
import ProjectHero from "@/app/components/project-hero";
import ProjectStatement from "@/app/components/project-statement";
import ResearchGoal from "@/app/components/research-goal";
import ResearchGoalSummary from "@/app/components/research-goal-summary";
import ResearchMethod from "@/app/components/research-method";
import ResearchObjectives from "@/app/components/research-objectives";
import ResearchSubsection from "@/app/components/research-subsection";
import Section from "@/app/components/section";
import Separator from "@/app/components/separator";
import SubSection from "@/app/components/sub-section";
import TaskFlow from "@/app/components/task-flow";
import TestCard from "@/app/components/test-card";
import Text from "@/app/components/text";
import Transition from "@/app/components/transition";
import UserFlow from "@/app/components/user-flow";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";

const avenir = localFont({
  src: [
    {
      path: "./fonts/AvenirNext-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/AvenirNext-Medium.otf",
      weight: "500",
      style: "medium",
    },
  ],
});

export default function Pibu() {
  return (
    <div>
      <ProjectHero
        name="Pibu"
        video="/pibu/hero.mp4"
        logo="/pibu/logo.svg"
        logoWidth={136}
        logoHeight={75}
        header="A website to introduce a local business and expand their business"
        projectType="Responsive web design"
        role="UX/UI designer"
        projectDuration="1 month"
        industry="Beauty, personal care"
        href="https://www.figma.com/proto/RbkCKTmRORmmiispxyOpXz/Capstone-2---Responsive-Web-Design?page-id=597%3A7713&node-id=807-7005&viewport=341%2C-827%2C0.03&t=WZCKh2jkLMYF6wKx-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=807%3A7005&show-proto-sidebar=1"
        headerClassName="text-[28px] font-manrope font-bold"
        className="px-24 space-x-12 w-full"
        classNameLeft="w-[646px] h-[500px]"
        classNameRight="w-[520px] h-[500px]"
        classNameButton="bg-brown text-white"
      />
      <ProjectStatement
        statement={
          "Pibu, a local Korean skincare store in NY wants to create an e-commerce " +
          "website to expand their business. While they have a defined target " +
          "audience and brand theme, they are unsure how to align the website with " +
          "these aspects effectively. They are also uncertain about the type of " +
          "content they should include to enhance customers' desire to make " +
          "purchases. Additionally, Pibu aims to build an original website without " +
          "relying on SquareSpace templates. It's crucial to develop a uniquely " +
          "designed, user-friendly website that stands out from competitors."
        }
        solution={
          "Developing a website to increase awareness of Pibu, focusing on e-commerce " +
          "for business expansion and emphasizing user-friendliness."
        }
        className="bg-light-green"
        underline="border-black"
      />
      <ProjectContents />
      {/* INTRODUCTION */}
      <Section title="Introduction" underline="bg-brown" className="px-52">
        <Text>
          Pibu is a family-owned Korean skincare store located in New York City.
          They target individuals of all genders in their 20s to 40s and offer a
          variety of skincare products. Since opening their store just 6 months
          ago, they have not become widely known yet. Their customers are mainly
          local residents, and they are considering the development of a website
          and an e-commerce platform to expand their business. They are hoping
          to have a website that matches their target customers and the
          aesthetic of their store.
          <Transition
            text={
              "How can we build an e-commerce centric website to increase the recognition " +
              "of Pibu and assist in its business expansion?"
            }
            className="pt-12"
          />
        </Text>
      </Section>
      {/* RESEARCH */}
      <Section
        title="Research"
        underline="bg-light-pink"
        className="px-52 pb-12"
      >
        <ResearchGoalSummary className="bg-light-pink">
          <div className="text-[28px]">
            <span className="font-bold">
              Understand which information is beneficial for users and what
              motivates them to increase their desire to make purchases.
            </span>{" "}
            This will help us encourage users to shop at Pibu, thereby
            increasing its recognition and contributing to business expansion.
          </div>
        </ResearchGoalSummary>
        {/* research 1 */}
        <ResearchGoal
          title={
            "Getting to know what services competitors are offering and how they are acquiring users"
          }
          start={1}
        >
          <Text>
            First, I conducted a competitive analysis to understand the
            structure and features of general skincare e-commerce sites. I
            examined how competitors are providing their e-commerce sites, how
            they enhance user purchasing intent, and whether they have features
            that attract users.
          </Text>
          <ResearchSubsection title="Competitive Analysis" color="light-pink">
            <Text>
              I compared two direct websites specializing in K-beauty and one
              indirect website focusing on general skincare. Based on each
              site&apos;s brand value and target users, I identified how they
              are presenting their websites.
            </Text>
            <div className="relative w-full h-[443px]">
              <Image
                src="/pibu/competitor-table.svg"
                alt="Competitor table"
                className="object-contain"
                fill
              />
            </div>
            <div className="space-y-7">
              <Text>
                While all e-commerce websites share basic functionalities, each
                one incorporates unique features tailored to their target users.
                Direct competitors have fewer products but offer a simple and
                very user-friendly layout. On the other hand, indirect
                competitors, with a broader range of brands and products, use
                icons and other design elements to make the vast amount of
                information more accessible.
              </Text>
              <Text>
                Through competitive analysis, I learned that understanding the
                information users need and how to present it is crucial. With
                many competitors in the market, unique features and content are
                essential for differentiating ourselves from others.
                Additionally, it&apos;s important to consider the functionality
                of the website to enhance users&apos; purchase motivation.
              </Text>
            </div>
            <Link
              href="https://docs.google.com/spreadsheets/d/1gXhtSzPpXVYKsOGuF8s_V30XgVSgRQyaChlTCKN0HSg"
              target="_blank"
            >
              <div className="px-8 py-5 mt-12 border-2 border-brown9 rounded-[5rem] inline-block text-brown9 text-xl font-semibold">
                View the competitive analysis
              </div>
            </Link>
          </ResearchSubsection>
          {/* research objectives */}
          <ResearchObjectives
            questions={[
              "Identify what users prioritize in choosing websites",
              "Understand what kind of information users expect regarding skincare products",
              "Determine what increases user’s purchasing desire",
              "Understand what motivates users to buy skincare products",
              "Understand the user's pain points when purchasing skincare products",
            ]}
            className="text-brown9"
          />
          {/* research methods */}
          <div className="space-y-12">
            <div className="font-manrope text-[1.75rem] font-extrabold tracking-[.02em] text-brown9 underline">
              Research methods
            </div>
            <Text>
              I conducted two different research methods to obtain quantitative
              data on skincare product purchases and qualitative data based on
              users&apos; specific experiences.
            </Text>
            <div className="space-y-24">
              {/* survey */}
              <ResearchMethod
                title="Survey"
                desc={
                  "The first research method I used was a survey. The survey was " +
                  "conducted to collect quantitative data from a wide range of " +
                  "people to understand how interested people are in skincare " +
                  "products, and what criteria they use and how they make their " +
                  "purchase decisions."
                }
                color="light-pink"
              >
                <Participants
                  title="Survey participants"
                  desc1="15 people, age between 25-44"
                  className="text-brown"
                />
                <KeyQuestions
                  className="text-brown"
                  questions={[
                    "How often do you purchase skincare products?",
                    "What websites do you use when you purchase skincare products, " +
                      "and why did you choose those websites?",
                    "What criteria do you use to select skincare products?",
                  ]}
                />
                <ParticpantResponses
                  className="text-brown"
                  img="/pibu/survey-responses.svg"
                  alt="Survey responses"
                />
              </ResearchMethod>
              {/* user interview */}
              <ResearchMethod
                title="User interview"
                desc={
                  "The second research method I conducted was user interviews. I " +
                  "gathered qualitative data on users' specific thoughts and " +
                  "personal experiences. I particularly focused on users' " +
                  "motivations and challenges related to purchasing skincare " +
                  "products."
                }
                color="light-pink"
              >
                <Participants
                  title="Interview participants"
                  desc1="5 people who are interested in skincare products"
                  desc2="Age between 27-37"
                  className="text-brown"
                />
                <KeyQuestions
                  className="text-brown"
                  questions={[
                    "Have you experienced any difficulties in selecting the right " +
                      "skincare products?",
                    "Have you ever had an experience where you were not satisfied " +
                      "with a skincare product you purchased?",
                    "If you have an opportunity to learn more about skincare, what " +
                      "specific aspects would you like to know about?",
                  ]}
                />
                <ParticpantResponses
                  className="text-brown"
                  img="/pibu/interview-responses.svg"
                  alt="Interview responses"
                />
              </ResearchMethod>
            </div>
          </div>
          {/* results */}
          <div className="space-y-12">
            <div className="font-manrope text-[1.75rem] font-extrabold tracking-[.02em] text-brown9 underline">
              Results
            </div>
            <Text>
              Through surveys and interviews, I was able to understand how
              interested people are in skincare and what criteria they use to
              select products. I also gained insights into the difficulties they
              encounter and the information they expect when purchasing products
              online. I recorded these key points on individual sticky notes and
              created an affinity map, and and categorized the information by
              topics and patterns.
            </Text>
            <div className="space-y-24">
              <div className="space-y-7">
                <div className="text-[26px] font-medium tracking-[.02em]">
                  What is the biggest challenge when choosing skincare products?
                </div>
                <div className="relative w-full h-[578px]">
                  <Image
                    src="/pibu/affinity-map-1.svg"
                    alt="Affinity map"
                    fill
                  />
                </div>
              </div>
              <div className="space-y-7">
                <div className="text-[26px] font-medium tracking-[.02em]">
                  What do you expect from online purchases?
                </div>
                <div className="relative w-full h-[723px]">
                  <Image
                    src="/pibu/affinity-map-2.svg"
                    alt="Affinity map"
                    fill
                  />
                </div>
                <FigmaLink href="https://www.figma.com/board/O6slDgrnsFVZaBVJnSHu3k/Capstone-2---Responsive-Web-Design?node-id=174-1452">
                  View the full affinity map
                </FigmaLink>
              </div>
              <Text>
                By categorizing the points into topics and categories on the
                affinity map, I was able to gain a deeper understanding of
                users&apos; needs, the information they expect when purchasing
                products, and the essential elements required for the pibu
                website.
              </Text>
              {/* paper */}
              <div className="rounded-3xl bg-light-ivory px-20 py-12 space-y-12">
                <DiamondHeadedList
                  color="brown9"
                  title="Challenges when selecting skincare products"
                  items={[
                    "Find the right products",
                    "Know the texture, scent, and potential for allergic reactions",
                    "Understand skin type",
                    "Trust reviews",
                  ]}
                />
                <DiamondHeadedList
                  color="brown9"
                  title="Key factors when choosing skincare products"
                  items={[
                    "Other people’s opinions (reviews, ratings, recommendations)",
                    "Personal opinions (skin concerns, skin type, preferences)",
                    "Product details (ingredients, texture, scent, effectiveness, price)",
                  ]}
                />
                <DiamondHeadedList
                  color="brown9"
                  title="Difficulties when purchasing products online"
                  items={[
                    "Can’t test samples",
                    "Can’t see the product",
                    "Lack of reviews",
                  ]}
                />
              </div>
              <Text>
                Through the entire research process, I was able to identify key
                points that enhance users&apos; purchase motivation. I also
                gained a clear understanding of what is needed to meet
                users&apos; needs.
              </Text>
              <DownArrow />
              {/* key findings */}
              <div className="px-24 py-12 space-y-7 rounded-3xl border-brown9 border-2">
                <div className="text-3xl font-bold tracking-[.02em]">
                  Key findings
                </div>
                <ul className="list-disc list-outside text-[26px] tracking-[.02em] pl-6 space-y-1">
                  <li>Display trustworthy reviews and ratings</li>
                  <li>
                    Provide detailed product descriptions (ingredients, texture,
                    scent, allergy reactions)
                  </li>
                  <li>
                    Identify skin type & recommend products based on skin type
                  </li>
                  <li>Highlight expected benefits</li>
                  <li>Offer competitive pricing</li>
                </ul>
              </div>
            </div>
          </div>
        </ResearchGoal>
      </Section>
      {/* DEFINE */}
      <Section title="Define" underline="bg-green3" className="px-52">
        <Text>
          After conducting research, reviewing the findings, and organizing the
          data, I created two personas in the early stages of the design process
          to deepen my understanding of specific users.
        </Text>
        <Persona
          title="Persona 1"
          desc={
            "Peter Cho is a 34-year-old software engineer in New York who, influenced " +
            "by his partner and friends, has recently started using skincare " +
            "products. He seeks to find effective products and establish a daily " +
            "routine but struggles with determining his skin type and understanding " +
            "the efficacy of various products due to the overwhelming amount of " +
            "information available."
          }
          img="/pibu/persona-1.jpeg"
          className="text-dark-green"
        />
        <Persona
          title="Persona 2"
          desc={
            "Mary Harris is a 28-year-old kindergarten teacher from New York who is " +
            "passionate about skincare and often seeks discounts online. She is " +
            "currently concerned about dull skin and is eager to try new products, " +
            "but hesitates due to the inability to test samples beforehand and " +
            "worries about negative reviews. Her challenges include determining " +
            "product suitability without samples and dealing with limited reviews."
          }
          img="/pibu/persona-2.jpeg"
          className="text-dark-green"
        />
        <div className="w-full">
          <FigmaLink href="https://www.figma.com/design/RbkCKTmRORmmiispxyOpXz/Capstone-2---Responsive-Web-Design?node-id=0-1">
            View the personas
          </FigmaLink>
        </div>
        <div className="space-y-12">
          <Text>
            To clarify the solutions needed to address specific user needs, I
            created three POV statements based on the personas. Among them, I
            selected the POV related to skin type as it is the most crucial for
            achieving the personas&apos; goals.
          </Text>
          <Definition
            title="POV (Point Of View) statement"
            text={
              "I'd like to explore ways to help people to find and understand their " +
              "skin type because choosing the right skincare products becomes " +
              "challenging without knowledge of their skin type."
            }
            className="bg-olive"
          />
        </div>
        <div className="space-y-12">
          <Text>
            Then, I took the problems into clear questions that help find
            creative and practical solutions.
          </Text>
          <Definition
            title="HMW (How Might We) question"
            text={
              "How might we help people to effectively choose the appropriate skincare " +
              "products based on their skin type?"
            }
            className="bg-olive"
          />
        </div>
        <DownArrow />
      </Section>
      {/* DESIGN */}
      <Section
        title="Design"
        underline="bg-dark-green"
        className="px-52"
        relaxed
      >
        <Text>
          As a step to generate ideas to solve the persona&apos;s problems, I
          set project goals based on the POV and brainstormed feature ideas to
          address them.
        </Text>
        {/* project goals */}
        <SubSection title="Project goals" color="text-dark-green">
          <div className="relative w-[1040px] h-[950px]">
            <Image src="/pibu/project-goals.svg" alt="Project goals" fill />
          </div>
          <FigmaLink href="https://www.figma.com/design/RbkCKTmRORmmiispxyOpXz/Capstone-2---Responsive-Web-Design?node-id=1-219">
            View the project goals
          </FigmaLink>
        </SubSection>
        {/* feature ideas */}
        <SubSection title="Feature ideas" color="text-dark-green">
          <Text>
            While considering the technical aspects and input from stakeholders,
            I brainstormed key features that align with both business goals and
            user goals, with a particular focus on overlapping objectives to
            build a website that effectively achieves these goals.
          </Text>
          <Image
            src="/pibu/feature-ideas.svg"
            alt="Feature ideas"
            width={867}
            height={604}
            className="mx-auto"
          />
          <Transition
            text={
              "To design the structure of the website, I conducted a card sort based on these feature keywords"
            }
          />
          <div className="space-y-12 pt-8">
            <DiamondHeader
              title="Card Sort"
              color="dark-green"
              className="space-x-7"
            />
            <Text>
              I conducted a card sort with{" "}
              <b className="font-semibold">37 cards</b> and 7 participants.
              Using a <b className="font-semibold">hybrid card sort</b>, I
              determined how users categorized the cards and decided on the menu
              items and their associated content.
            </Text>
            <div className="text-[24px] tracking-[.02em]">Categories</div>
            <div className="flex flex-wrap justify-around gap-[75px]">
              <Category text="Shop" />
              <Category text="Account" />
              <Category text="Categories" />
              <Category text="Blog" />
              <Category text="Skin type" />
              <Category text="Sales/Offers" />
              <Category text="Cart" />
              <Category text="Skin concerns" />
              <Category text="About us" />
            </div>
            <div className="text-[24px] tracking-[.02em]">Card examples</div>
            {/* cards */}
            <div className="flex flex-wrap justify-between gap-[75px]">
              <Card text="New arrivals" className="bg-light-olive" />
              <Card text="Oily skin" className="bg-light-olive" />
              <Card text="Check your skin type" className="bg-light-olive" />
              <Card text="Shop all" className="bg-light-olive" />
              <Card text="Toners" className="bg-light-olive" />
              <Card text="Key ingredients" className="bg-light-olive" />
              <Card text="Check out" className="bg-light-olive" />
              <Card text="Anti-aging" className="bg-light-olive" />
              <Card text="How to use" className="bg-light-olive" />
            </div>
          </div>
          <Text className="py-12">
            As a result of the card sort, there were no new categories added by
            the users, and there was unanimous agreement on 15 out of the 37
            cards. The results provided insights into how users want to access
            information and helped in creating a design based on their
            perspective.
          </Text>
        </SubSection>
        {/* sitemap */}
        <SubSection title="Sitemap" color="text-dark-green">
          <Text>
            Based on the results of the card sort, I created a sitemap for the
            website structure. Since users expect to see not only products but
            also categories like skin type and skin concerns as part of the
            products, the structure was designed to ensure easy access to
            detailed information from the shop section.
          </Text>
          <div className="relative w-[1040px] h-[523px]">
            <Image src="/pibu/sitemap.svg" alt="Sitemap" fill />
          </div>
          <div className="ml-auto">
            <FigmaLink href="https://www.figma.com/board/O6slDgrnsFVZaBVJnSHu3k/Capstone-2---Responsive-Web-Design?node-id=86-5125">
              View the sitemap
            </FigmaLink>
          </div>
        </SubSection>
        <SubSection title="Task Flow" color="text-dark-green">
          <Text>
            To clarify the steps necessary for the personas to achieve their
            goals and ensure a user-friendly experience, I developed two task
            flows.
          </Text>
          <TaskFlow
            title="Identify your skin type"
            img="/pibu/task-flow-1.svg"
            width={1495}
            height={80}
            className="w-[1495px]"
          />
          <TaskFlow
            title="Purchase the right products for your skin type"
            img="/pibu/task-flow-2.svg"
            width={2815}
            height={80}
            className="w-[2815px]"
          />
          <div>
            <FigmaLink href="https://www.figma.com/board/O6slDgrnsFVZaBVJnSHu3k/Capstone-2---Responsive-Web-Design?node-id=98-7778">
              View the task flows
            </FigmaLink>
          </div>
        </SubSection>
        <SubSection
          title="User Flow"
          color="text-dark-green"
          subtitle={
            "I created a user flow to understand user needs and identify potential " +
            "issues or confusing elements."
          }
          spacing="space-y-20"
        >
          <UserFlow
            title="Purchase the right products for your skin type"
            img="/pibu/user-flow.svg"
            width={5330}
            height={900}
            className="w-[5330px] h-[1000px]"
          />
          <FigmaLink href="https://www.figma.com/board/O6slDgrnsFVZaBVJnSHu3k/Capstone-2---Responsive-Web-Design?node-id=70-2700">
            View the user flow
          </FigmaLink>
        </SubSection>
        <DownArrow />
        <SubSection
          title="Low-fidelity"
          color="text-dark-green"
          textAbove={
            "I created the page layouts needed for users to complete tasks based on " +
            "the user flow and task flow. Through interviews, I found that many " +
            "people preferred using desktops when purchasing skincare products " +
            "online, so I focused on the desktop design."
          }
        >
          <div className="h-[486px] flex space-x-6">
            <div className="flex flex-col w-1/3 space-y-2 text-center">
              <div className="flex-none text-2xl tracking-[.02em]">Home</div>
              <div className="relative flex-auto">
                <Image src="/pibu/lofi-1.jpg" alt="Home" fill />
              </div>
            </div>
            <div className="flex flex-col w-1/3 space-y-2 text-center">
              <div className="flex-none text-2xl tracking-[.02em]">
                How to check skin type
              </div>
              <div className="relative flex-auto">
                <Image
                  src="/pibu/lofi-2.jpg"
                  alt="How to check skin type"
                  fill
                />
              </div>
            </div>
            <div className="flex flex-col w-1/3 space-y-2 text-center">
              <div className="flex-none text-2xl tracking-[.02em]">
                How to check skin type
              </div>
              <div className="relative flex-auto">
                <Image
                  src="/pibu/lofi-3.jpg"
                  alt="How to check skin type"
                  fill
                />
              </div>
            </div>
          </div>
          <FigmaLink href="https://www.figma.com/design/RbkCKTmRORmmiispxyOpXz/Capstone-2---Responsive-Web-Design?node-id=100-1673">
            View the full low-fidelity
          </FigmaLink>
        </SubSection>
        <SubSection
          title="Mid-fidelity"
          color="text-dark-green"
          textAbove={
            "Based on the low-fidelity sketches, I considered more detailed layouts " +
            "and digitalized them to create mid-fidelity wireframes, making the " +
            "detailed layout more tangible."
          }
        >
          <div className="flex space-x-5">
            <Carousel
              width={500}
              height={940}
              items={[
                "/pibu/midfi-1.svg",
                "/pibu/midfi-2.svg",
                "/pibu/midfi-3.svg",
                "/pibu/midfi-4.svg",
              ]}
            />
          </div>
          <FigmaLink href="https://www.figma.com/design/RbkCKTmRORmmiispxyOpXz/Capstone-2---Responsive-Web-Design?node-id=1526-34763">
            View the full mid-fidelity
          </FigmaLink>
        </SubSection>
        {/* mid-fidelity test */}
        <TestCard
          title="Mid-fidelity test"
          className="border-light-green"
          textAbove={
            "After creating the mid-fidelity wireframes, I conducted a quick test " +
            "to check if users understood my design layout and if they found the " +
            "interface user-friendly."
          }
        >
          <Text>5 people (in person & online)</Text>
          <div className="pt-7 space-y-20">
            {/* test 1 */}
            <div className="space-y-7">
              <div className="text-[24px] tracking-[.02em]">
                Determine and save your skin type
              </div>
              <Text sm>
                → People were able to determine their skin type by looking at
                the table, but they found it somewhat difficult to save their
                skin type. The sections for each skin type weren’t clearly
                defined, so some people ended up saving the wrong skin type.
              </Text>
              <Image
                src="/pibu/midfi-test-1.svg"
                alt="Determine and save your skin type"
                width={940}
                height={1338}
              />
            </div>
            {/* test 2 */}
            <div className="space-y-7">
              <div className="text-[24px] tracking-[.02em]">
                Compare products and purchase the one that best suits you
              </div>
              <Text sm>
                → The comparison function was the biggest challenge. Because the
                compare button was not clearly visible, people were unsure how
                to compare products and were confused about what steps to take
                next. It&apos;s essential to make it clear that a comparison
                function exists and to ensure it&apos;s displayed in a way
                that&apos;s easy to use.
              </Text>
              <Image
                src="/pibu/midfi-test-2.svg"
                alt="Compare products and purchase the one that best suits you"
                width={940}
                height={920}
              />
              <Image
                src="/pibu/midfi-test-3.svg"
                alt="Test"
                width={940}
                height={920}
              />
            </div>
          </div>
        </TestCard>
        <Transition
          text={
            "Based on the results of the mid-fi test, I iterated on the design to " +
            "make it more user-friendly and help users achieve their goals."
          }
          noPadding
        />
        <SubSection title="Mid-fidelity (iterations)" color="text-dark-green">
          <div className="space-y-20 pb-8">
            <Image
              src="/pibu/midfi-iterations-1.svg"
              alt="Mid-fidelity iterations"
              width={1040}
              height={1416}
            />
            <Separator className="bg-light-green" />
            <Image
              src="/pibu/midfi-iterations-2.svg"
              alt="Mid-fidelity iterations"
              width={1040}
              height={1416}
            />
          </div>
          <FigmaLink href="https://www.figma.com/design/RbkCKTmRORmmiispxyOpXz/Capstone-2---Responsive-Web-Design?node-id=1526-34765">
            View the iterated mid-fidelity
          </FigmaLink>
        </SubSection>
      </Section>
      <Separator className="bg-brown" />
      {/* BRANDING */}
      <div className="space-y-12 w-[1040px] mx-auto">
        {/* header */}
        <div className="text-3xl font-bold tracking-[.02em]">Branding</div>
        <Text>
          Pibu already has a developed store image, including the logo and
          aesthetic. Based on the brand image the stakeholders aim for, I chose
          typography and colors to attract users.
        </Text>
        <div className="space-y-24 pb-24">
          {/* brand value */}
          <BrandSection
            title="Style Tile"
            className="space-y-8"
            color="text-brown10"
          >
            <Text>
              Based on Pibu’s brand values of clean, young, modern, and
              refreshing, I created two style tiles: one with a blue theme and
              one with a green theme. The blue style tile was selected by the
              stakeholder as the one that best aligns with the brand image.
            </Text>
            <div className="text-[26px] font-medium tracking-[.02em]">
              Clean / Young / Modern / Refreshing
            </div>
            <Image
              src="/pibu/style-tile.png"
              alt="Style Tile"
              width={1040}
              height={740}
            />
          </BrandSection>
          <BrandSection
            title="Typography"
            className="space-y-12"
            color="text-brown10"
          >
            <div className="flex">
              <div className={`space-y-4 ${avenir.className}`}>
                <div className="tracking-[.02em] text-[40px] font-medium">
                  H1 - Avenir Next 40px
                </div>
                <div className="tracking-[.02em] text-[36px] font-medium">
                  H2 - Avenir Next 36px
                </div>
                <div className="tracking-[.02em] text-[30px] font-medium">
                  H3 - Avenir Next 30px
                </div>
                <div className="tracking-[.02em] text-[26px] font-normal">
                  B1 - Avenir Next 26px
                </div>
                <div className="tracking-[.02em] text-[20px] font-normal">
                  B2 - Avenir Next 20px
                </div>
                <div className="tracking-[.02em] text-[16px] font-normal">
                  Function S- Avenir Next 16px
                </div>
                <div className="tracking-[.02em] text-[18px] font-medium">
                  Function M- Avenir Next 18px
                </div>
              </div>
              <Text className="w-[550px] ml-auto mt-auto" sm>
                I chose Avenir Next because it offers a clean and modern look
                that aligns perfectly with Pibu’s brand image. Its readability
                and elegant design enhance the aesthetic of a skincare brand.
              </Text>
            </div>
          </BrandSection>
          <BrandSection
            title="Colors"
            className="space-y-12"
            color="text-brown10"
          >
            <div className="flex">
              <div className="space-y-5">
                <div className="space-y-[10px]">
                  <div className="font-manrope text-[20px] font-normal tracking-[.01em]">
                    Primary
                  </div>
                  <div className="flex space-x-[10px]">
                    <Color color="CCDBDE" className="bg-[#CCDBDE]" />
                    <Color color="9ABBC2" className="bg-[#9ABBC2]" />
                    <Color color="85999D" className="bg-[#85999D]" />
                  </div>
                </div>
                <div className="space-y-[10px]">
                  <div className="font-manrope text-[20px] font-normal tracking-[.01em]">
                    Secondary
                  </div>
                  <div className="flex space-x-[10px]">
                    <Color color="F0EAE3" className="bg-[#F0EAE3]" />
                    <Color color="DBCFBF" className="bg-[#DBCFBF]" />
                    <Color color="C3B29C" className="bg-[#C3B29C]" />
                  </div>
                </div>
                <div className="space-y-[10px]">
                  <div className="font-manrope text-[20px] font-normal tracking-[.01em]">
                    Neutral
                  </div>
                  <div className="flex space-x-[10px]">
                    <Color
                      color="EFEFEF"
                      className="bg-[#EFEFEF] border-[#5F4C35] border-[0.5px]"
                    />
                    <Color
                      color="FFFFFF"
                      className="bg-[#FFFFFF] border-[#5F4C35] border-[0.5px]"
                    />
                  </div>
                </div>
              </div>
              <div className="w-[550px] ml-auto pt-8">
                <Text sm>
                  For the main color, I chose a blue hue that conveys a clean
                  and refreshing feel. Among these, a slightly muted blue
                  provides a modern impression. For the secondary color, I
                  selected earth tones that give a modern and minimal look,
                  which closely aligns with the store’s image.
                  <br />
                  <br />
                  In order to make a user-friendly website, I conducted an
                  accessibility check to consider color contrast and
                  color-blindness.
                </Text>
              </div>
            </div>
          </BrandSection>
        </div>
        <Separator className="bg-brown" />
        <div className="py-5">
          <Transition text="I applied all branding elements to the wireframes and created high-fidelity wireframes" />
        </div>
        <SubSection title="Hi-fidelity" color="text-dark-green">
          <DoubleCarousel
            itemClassName="relative w-[400px] h-[792px]"
            items={[
              "/pibu/hifi-1.png",
              "/pibu/hifi-2.png",
              "/pibu/hifi-3.png",
              "/pibu/hifi-4.png",
              "/pibu/hifi-5.png",
              "/pibu/hifi-6.png",
            ]}
            nav={{
              className: "relative w-[133px] h-[150px] hover:cursor-pointer",
              items: [
                "/pibu/hifi-1-sm.png",
                "/pibu/hifi-2-sm.png",
                "/pibu/hifi-3-sm.png",
                "/pibu/hifi-4-sm.png",
                "/pibu/hifi-5-sm.png",
                "/pibu/hifi-6-sm.png",
              ],
            }}
          />
          <FigmaLink href="https://www.figma.com/design/RbkCKTmRORmmiispxyOpXz/Capstone-2---Responsive-Web-Design?node-id=931-7844">
            View the full hi-fidelity
          </FigmaLink>
        </SubSection>
      </div>
      {/* TEST */}
      <Section title="Test" underline="bg-brown3" className="px-52 pb-24">
        <Text>
          To confirm whether high-fidelity wireframes can actually achieve user
          goals, I conducted usability testing.
        </Text>
        {/* usability test */}
        <TestCard title="Usability test" className="border-brown3">
          <div className="text-[24px] tracking-[.02em]">
            6 people (in person & online)
          </div>
          <ul className="list-disc list-outside text-[26px] tracking-[.02em] font-medium pl-6 space-y-7">
            <li>Find out where you can determine your skin type</li>
            <li>
              Save your skin type and find a list of items that are good for
              your skin type
            </li>
            <li>Compare products and purchase the one that best suits you</li>
          </ul>
        </TestCard>
        <SubSection
          title="Test results"
          color="text-brown8"
          spacing="space-y-24"
        >
          <div className="flex flex-wrap gap-y-[55px] justify-evenly">
            <Avatar
              name="Grace"
              pronouns="she/her"
              desc={
                "She thought she could just click item images (instead of the check " +
                "button) to compare products"
              }
            />
            <Avatar
              name="Peter"
              pronouns="he/him"
              desc={
                "He was able to finish all tasks but the process of comparing the " +
                "products was a little bit challenging for him"
              }
            />
            <Avatar
              name="Mayuri"
              pronouns="she/her"
              desc="She seemed unsure about where to click for each of the tasks"
            />
            <Avatar
              name="Yingyang"
              pronouns="she/her"
              desc="She tried to click many different items to compare"
            />
            <Avatar
              name="Natasha"
              pronouns="she/her"
              desc="She expected to complete the tasks in a different way"
            />
            <Avatar
              name="Alexa"
              pronouns="she/her"
              desc="It wasn’t difficult for her to finish the tasks"
            />
          </div>
          <Text>
            The users found it easy to determine their skin type and view
            product lists tailored to their skin type, but they struggled with
            comparing and finding the items that suited them best. Even after
            revising the item comparison process in the mid-fi prototype, they
            encountered new difficulties and found the process unclear.
          </Text>
        </SubSection>
        <SubSection title="Iterations" color="text-brown8" spacing="space-y-24">
          <div className="space-y-7">
            <div className="text-[24px] font-medium tracking-[.02em]">Home</div>
            <div className="relative w-[1040px] h-[450px]">
              <Image src="/pibu/iterations-1.png" alt="Home" fill />
            </div>
          </div>
          <div className="space-y-7">
            <div className="text-[24px] font-medium tracking-[.02em]">
              Item list
            </div>
            <div className="relative w-[1040px] h-[450px]">
              <Image src="/pibu/iterations-2.png" alt="Item list" fill />
            </div>
          </div>
          <div className="space-y-7">
            <div className="text-[24px] font-medium tracking-[.02em]">
              Item list - choose items to compare
            </div>
            <div className="relative w-[1040px] h-[450px]">
              <Image
                src="/pibu/iterations-3.png"
                alt="Item list - choose items to compare"
                fill
              />
            </div>
          </div>
          <div className="space-y-7">
            <div className="text-[24px] font-medium tracking-[.02em]">
              Comparison
            </div>
            <div className="relative w-[1040px] h-[450px]">
              <Image src="/pibu/iterations-4.png" alt="Comparison" fill />
            </div>
          </div>
        </SubSection>
        <Transition
          text={
            "After three iterations, I improved the design to prioritize usability, " +
            "and users were able to finish the tasks easily."
          }
        />
        <Image
          src="/pibu/prototype.png"
          alt="prototype"
          width={1040}
          height={630}
        />
        <div className="w-full flex justify-around items-center">
          <Link
            href="https://www.figma.com/proto/RbkCKTmRORmmiispxyOpXz/Capstone-2---Responsive-Web-Design?page-id=597%3A7713&node-id=807-7005&viewport=341%2C-827%2C0.03&t=WZCKh2jkLMYF6wKx-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=807%3A7005&show-proto-sidebar=1"
            target="_blank"
          >
            <div
              className={
                "h-[70px] px-16 rounded-[64px] bg-brown text-white text-[22px] font-medium " +
                "tracking-[.02em] flex items-center justify-center"
              }
            >
              View the desktop prototype
            </div>
          </Link>
          <Link
            href="https://www.figma.com/proto/RbkCKTmRORmmiispxyOpXz/Capstone-2---Responsive-Web-Design?page-id=1270%3A16466&node-id=1270-16467&viewport=275%2C469%2C0.08&t=CHEsspLqyjlv47Dm-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1270%3A16467&show-proto-sidebar=1"
            target="_blank"
          >
            <div
              className={
                "h-[70px] px-16 rounded-[64px] bg-brown text-white text-[22px] font-medium " +
                "tracking-[.02em] flex items-center justify-center"
              }
            >
              View the mobile prototype
            </div>
          </Link>
        </div>
      </Section>
      {/* CONCLUSION */}
      <Section
        title="Conclusion"
        underline="bg-brown"
        className="px-52 pb-24"
        bg="bg-base"
      >
        <Text>
          Through this project, I gained valuable, realistic experience by
          working directly with stakeholders to design the website. A key
          achievement was developing a website that allows users to address
          their primary challenge: identifying their skin type, based on
          research findings and stakeholder requirements. The biggest challenge
          was balancing research-based design decisions with stakeholder
          feedback. Despite working within a limited timeframe, the fast-paced
          changes in the cosmetics market emphasize the need for continuous
          updates to keep the website user-friendly and support business growth.
        </Text>
      </Section>
    </div>
  );
}
