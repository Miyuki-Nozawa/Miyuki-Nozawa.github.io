import Avatar from "@/app/components/avatar";
import BrandSection from "@/app/components/brand-section";
import Card from "@/app/components/card";
import Color from "@/app/components/color";
import Definition from "@/app/components/definition";
import DiamondHeadedList from "@/app/components/diamond-headed-list";
import DiamondHeader from "@/app/components/diamond-header";
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
import Image from "next/image";
import Link from "next/link";

export default function Pibu() {
  return (
    <div>
      <ProjectHero
        name="Pibu"
        img="/pibu/hero.png"
        logo="/pibu/logo.svg"
        logoWidth={136}
        logoHeight={75}
        header="A website to introduce a local business and expand their business"
        projectType="Responsive web design"
        role="UX/UI designer"
        projectDuration="1 month"
        industry="Beauty and personal care, Retail"
        href="https://www.figma.com/proto/LV5sMpEKJ8JlL6TBeFPdVS/Capstone-3---End-to-End-Application?page-id=493%3A4780&node-id=493-9339&viewport=927%2C821%2C0.1&t=x4PyBZiBp9vuODCP-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=493%3A9506&show-proto-sidebar=1"
        className="px-28 space-x-12"
        classNameLeft="w-[646px] h-[500px]"
        classNameRight="w-[520px] h-[500px]"
        classNameButton="bg-dark-brown text-white"
      />
      <ProjectStatement
        statement={
          "Pibu, a local Korean skincare store in NY wants to create an e-commerce " +
          "website to expand their business. While they have a defined target " +
          "audience and brand theme, they are unsure how to align the website with " +
          "these aspects effectively. They are also uncertain about the type of " +
          "content they should include to enhance customers' desire to make " +
          "purchases. Additionally, pibu aims to build an original website without " +
          "relying on SquareSpace templates. It's crucial to develop a uniquely " +
          "designed, user-friendly website that stands out from competitors."
        }
        solution={
          "Developing a website to increase awareness of pibu, focusing on e-commerce " +
          "for business expansion and emphasizing user-friendliness."
        }
        className="bg-olive"
        underline="border-black"
      />
      <ProjectContents />
      {/* introduction */}
      <Section title="Introduction" underline="bg-dark-brown" className="px-52">
        <Text>
          Pibu is a family-owned Korean skincare store located in New York city.
          They target individuals of all genders in their 20s to 40s and offer a
          variety of skincare products. Since opening their store just 6 months
          ago, they are not widely known yet. Their customers are mainly local
          residents, and they are considering the development of a website and
          an e-commerce platform to expand their business. They are hoping to
          have a website that matches to their target customers, and their
          aesthetic of the store.
        </Text>
        <Transition
          text={
            "How can we build an e-commerce-centric website to increase the recognition " +
            "of pibu and assist in its business expansion?"
          }
        />
      </Section>
      {/* research */}
      <Section
        title="Research"
        underline="bg-light-pink"
        className="px-52 pb-12"
      >
        <ResearchGoalSummary className="bg-light-pink">
          <span className="font-bold">
            Understand which information is beneficial for users and what
            motivates them to increase their desire to make purchases.
          </span>{" "}
          This will help us encourage users to shop at Pibu, thereby increasing
          its recognition and contributing to business expansion.
        </ResearchGoalSummary>
        {/* research 1 */}
        <ResearchGoal
          title={
            "1. Getting know what services competitors are offering and how they are acquiring users"
          }
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
              href="https://docs.google.com/spreadsheets/d/1miVsV3Eom-ll49Xt5AYETFDtCdXirI7YNvXDjhCpKA8/edit?gid=0#gid=0"
              target="_blank"
            >
              <div
                className={
                  "px-8 py-5 mt-12 border-2 border-brown9 rounded-[5rem] inline-block " +
                  "text-brown9 text-xl font-semibold"
                }
              >
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
                  className="text-dark-brown"
                />
                <KeyQuestions
                  className="text-dark-brown"
                  questions={[
                    "How often do you purchase skincare products?",
                    "What websites do you use when you purchase skincare products, " +
                      "and why did you choose those websites?",
                    "What criteria do you use to select skincare products?",
                  ]}
                />
                <ParticpantResponses
                  className="text-dark-brown"
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
                  className="text-dark-brown"
                />
                <KeyQuestions
                  className="text-dark-brown"
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
                  className="text-dark-brown"
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
                <FigmaLink href="">View the full affinity map</FigmaLink>
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
      {/* define */}
      <Section title="Define" underline="bg-brown3" className="px-52">
        <Text>
          After conducting research, reviewing the findings, and organizing the
          data, I created two personas in the early stages of the design process
          to deepen my understanding of specific users and user needs.
        </Text>
        <Persona
          title="Persona 1"
          desc={
            "Matt Kim, a 30-year-old product manager from San Francisco, loves traveling to Japan and exploring " +
            "local dining spots. He faces challenges due to the language barrier, making it difficult to find and " +
            "reserve restaurants popular among locals. His main frustrations include the time-consuming process of " +
            "translating Japanese information and the difficulty of making phone reservations."
          }
          img="/resto/persona-1.jpeg"
          className="text-dark-brown"
        />
        <Persona
          title="Persona 2"
          desc={
            "Sarah Laine, a 26-year-old interior designer from New York, is planning her first trip to Japan with " +
            "friends and is excited to explore Japanese cuisine. She faces challenges managing and sharing " +
            "restaurant reservations among her group and is worried about keeping track of them amidst a packed " +
            "schedule. Her goals include visiting many tourist spots and sticking to their travel plan."
          }
          img="/resto/persona-2.jpeg"
          className="text-dark-brown"
        />
        <div className="w-full">
          <FigmaLink href="https://www.figma.com/design/LV5sMpEKJ8JlL6TBeFPdVS/Capstone-3---End-to-End-Application?node-id=0-1">
            View the personas
          </FigmaLink>
        </div>
        <Text>
          To clarify the solutions needed to address specific user needs, I
          created two POV statements based on the personas. Among them, I
          selected the POV focusing on the language barrier and managing
          restaurant lists, as these were identified as significant challenges
          for many users.
        </Text>
        <Definition
          title="POV (Point Of View) statement"
          text={
            "I’d like to explore ways to propose a streamlined and functional reservation system catering to " +
            "travelers who face challenges with language barriers during restaurant booking or encounter issues " +
            "managing reservations."
          }
          className="bg-beige"
        />
        <Text>
          Then, I took the problems into clear questions that help find creative
          and practical solutions.
        </Text>
        <Definition
          title="HMW (How Might We) question"
          text={
            "How might we design a reservation system that easily accommodates people facing language barriers, " +
            "ensuring smooth booking experiences?"
          }
          className="bg-beige"
        />
        <DownArrow />
      </Section>
      {/* design */}
      <Section title="Design" underline="bg-orange" className="px-52">
        <Text>
          As a step to generate ideas to solve the personas&apos; problems, I
          set project goals and brainstormed feature ideas to address them.
        </Text>
        {/* project goals */}
        <SubSection title="Project goals" color="text-brown4">
          <div className="relative w-[1040px] h-[950px]">
            <Image src="/resto/project-goals.jpeg" alt="Project goals" fill />
          </div>
          <FigmaLink href="https://www.figma.com/design/LV5sMpEKJ8JlL6TBeFPdVS/Capstone-3---End-to-End-Application?node-id=1-278">
            View the project goals
          </FigmaLink>
        </SubSection>
        {/* feature ideas */}
        <SubSection title="Feature ideas" color="text-brown4">
          <Text>
            While considering the technical aspects, I brainstormed key features
            that align with both business goals and user goals, focusing
            especially on the overlapping goals to build an app that can achieve
            these objectives.
          </Text>
          <Image
            src="/resto/feature-ideas.png"
            alt="Feature ideas"
            width={867}
            height={604}
            className="mx-auto"
          />
          <Transition
            text={
              "To design the structure of the app, I conducted a card sort based on these feature keywords"
            }
          />
          <div className="space-y-12 pt-8">
            <DiamondHeader
              title="Card Sort"
              color="light-pink"
              className="space-x-7"
            />
            <Text>
              I conducted a card sort with{" "}
              <b className="font-semibold">28 cards</b> and 8 participants.
              Using an <b className="font-semibold">open card sort</b>, we aimed
              to understand how users categorize the cards in order to determine
              the app&apos;s structure, especially the naming of the navbar and
              the content included in each menu.
            </Text>
            <div className="text-[24px] tracking-[.02em]">Card examples</div>
            {/* cards */}
            <div className="flex flex-wrap justify-between gap-[75px]">
              <Card text="Type of cuisine" />
              <Card text="English / Japanese menu" />
              <Card text="Dress code" />
              <Card text="Sound restriction" />
              <Card text="Map" />
              <Card text="List of restaurants" />
              <Card text="Upcoming reservations" />
              <Card text="Reservation reminder" />
              <Card text="Share with friends" />
            </div>
          </div>
          <Text className="py-12">
            When participants freely categorized the cards, most of them fell
            into six key categories. This helped to understand which content
            people want to see under each menu.
          </Text>
        </SubSection>
        {/* sitemap */}
        <SubSection title="Sitemap" color="text-brown4">
          <Text>
            Based on the results of the card sort, I designed the app&apos;s
            structure and created a sitemap. Referring to the research, which
            showed that travelers tend to struggle with searching for
            restaurants and managing reservations, I decided to focus on search
            and reservations, highlighted by dotted lines.
          </Text>
          <div className="relative w-[1040px] h-[523px]">
            <Image src="/resto/sitemap.png" alt="Sitemap" fill />
            <div className="text-dark-orange text-[22px] tracking-[.02em] absolute bottom-0 w-[438px] right-[44px]">
              *The outlined items are where I am focusing to help solve the
              problems identified by users
            </div>
          </div>
          <div className="ml-auto">
            <FigmaLink href="https://www.figma.com/board/63QeyiJMgUu0SL6h2rmDcv/Capstone-3---End-to-End-Application?node-id=35-1840">
              View the sitemap
            </FigmaLink>
          </div>
          <div className="space-y-7 pt-9">
            <div className="text-[26px] font-semibold tracking-[.02em]">
              Key categories
            </div>
            <div
              className={
                "text-2xl font-medium tracking-[.02em] flex flex-wrap px-24 py-16 justify-between gap-y-7 border-2 " +
                "rounded-3xl border-dark-brown"
              }
            >
              <div className="w-1/3">Reservations</div>
              <div className="w-1/3">Settings</div>
              <div className="w-1/3">Search/Find</div>
              <div className="w-1/3">Restaurant</div>
              <div className="w-1/3">Discover</div>
              <div className="w-1/3">My page/Account</div>
            </div>
          </div>
        </SubSection>
        <SubSection title="Task Flow" color="text-brown4">
          <Text>
            I created two task flows to clarify the steps necessary for users to
            achieve specific goals and promote a user-friendly approach.
          </Text>
          <TaskFlow
            title="Discover restaurants or cafes and make a reservations"
            img="/resto/task-flow-1.png"
            width={1800}
            height={168}
            className="w-[1800px]"
          />
          <TaskFlow
            title="Check the reservations and the saved restaurants to plan your dining schedule during the trip"
            img="/resto/task-flow-2.png"
            width={1312}
            height={168}
            className="w-[1312px]"
          />
          <div>
            <FigmaLink href="https://www.figma.com/board/63QeyiJMgUu0SL6h2rmDcv/Capstone-3---End-to-End-Application?node-id=42-8803">
              View the task flows
            </FigmaLink>
          </div>
        </SubSection>
        <SubSection title="User Flow" color="text-brown4">
          <Text>
            I created a user flow to understand user needs and identify
            potential issues or confusing elements that are related to “search”
            and “reservations”.
          </Text>
          <UserFlow
            title="Discover restaurants or cafes and make reservations tailored to your preferences"
            img="/resto/user-flow.svg"
            width={4096}
            height={875}
          />
          <FigmaLink href="https://www.figma.com/board/63QeyiJMgUu0SL6h2rmDcv/Capstone-3---End-to-End-Application?node-id=80-1978">
            View the user flow
          </FigmaLink>
        </SubSection>
        <DownArrow />
        <Text>
          Based on user flows, task flows, and general observations of how users
          want to search and prevent duplicate reservations, I created specific
          design layouts.
        </Text>
        <SubSection title="Low-fidelity" color="text-brown4">
          <div className="h-[486px] flex space-x-6">
            <div className="flex flex-col w-1/3 space-y-2 text-center">
              <div className="flex-none text-2xl tracking-[.02em]">Home</div>
              <div className="relative flex-auto">
                <Image src="/resto/lofi-1.jpg" alt="Home" fill />
              </div>
            </div>
            <div className="flex flex-col w-1/3 space-y-2 text-center">
              <div className="flex-none text-2xl tracking-[.02em]">Search</div>
              <div className="relative flex-auto">
                <Image src="/resto/lofi-2.jpg" alt="Home" fill />
              </div>
            </div>
            <div className="flex flex-col w-1/3 space-y-2 text-center">
              <div className="flex-none text-2xl tracking-[.02em]">
                Make a reservation
              </div>
              <div className="relative flex-auto">
                <Image src="/resto/lofi-3.jpg" alt="Home" fill />
              </div>
            </div>
          </div>
          <FigmaLink href="https://www.figma.com/design/LV5sMpEKJ8JlL6TBeFPdVS/Capstone-3---End-to-End-Application?node-id=46-55">
            View the full low-fidelity
          </FigmaLink>
        </SubSection>
        <Text>
          Based on the low-fidelity sketches, I considered more detailed layouts
          and digitalized them to create mid-fidelity wireframes, making the
          detailed layout more tangible.
        </Text>
        <SubSection title="Mid-fidelity" color="text-brown4">
          <div className="h-[675px] flex space-x-5">
            <div className="w-1/4 relative">
              <Image src="/resto/midfi-1.png" alt="Discover" fill />
            </div>
            <div className="w-1/4 relative">
              <Image src="/resto/midfi-2.png" alt="Search" fill />
            </div>
            <div className="w-1/4 relative">
              <Image src="/resto/midfi-3.png" alt="Selected Restaurant" fill />
            </div>
            <div className="w-1/4 relative">
              <Image src="/resto/midfi-4.png" alt="Reservation" fill />
            </div>
          </div>
          <FigmaLink href="https://www.figma.com/design/LV5sMpEKJ8JlL6TBeFPdVS/Capstone-3---End-to-End-Application?node-id=1043-37036">
            View the full mid-fidelity
          </FigmaLink>
        </SubSection>
        <Text>
          After creating the mid-fidelity wireframes, I conducted a quick test
          to check if users understood my design layout and if they found the
          interface user-friendly.
        </Text>
        {/* mid-fidelity test */}
        <TestCard title="Mid-fidelity test" className="border-brown5">
          <Text>6 people (in person & online)</Text>
          <div className="pt-7 space-y-20">
            {/* test 1 */}
            <div className="space-y-7">
              <ul className="list-disc list-outside text-[24px] tracking-[.02em] pl-6">
                <li>Explore an app and try to search for restaurants</li>
              </ul>
              <Text sm>
                → People want to explore restaurants in various ways, so I need
                to consider different approaches.
              </Text>
              <Image
                src="/resto/midfi-test-1.png"
                alt="Test"
                width={940}
                height={435}
              />
            </div>
            {/* test 2 */}
            <div className="space-y-7">
              <ul className="list-disc list-outside text-[24px] tracking-[.02em] pl-6">
                <li>Check the details of a restaurant</li>
              </ul>
              <Text sm>
                → When there are too many restaurants displayed on the map, it
                can be difficult to choose, so a display method that clearly
                shows the differences is needed.
              </Text>
              <Image
                src="/resto/midfi-test-2.png"
                alt="Test"
                width={940}
                height={895}
              />
            </div>
            {/* test 3 */}
            <div className="space-y-7">
              <ul className="list-disc list-outside text-[24px] tracking-[.02em] pl-6">
                <li>Make a reservation</li>
              </ul>
              <Text sm>
                → While the process for making reservations should be smooth, we
                also need to find a way to prevent duplicate bookings.
              </Text>
              <Image
                src="/resto/midfi-test-3.png"
                alt="Test"
                width={940}
                height={437}
              />
            </div>
          </div>
        </TestCard>
        <DownArrow />
        <SubSection title="Mid-fidelity (iterations)" color="text-brown4">
          <Image
            src="/resto/iterations.png"
            alt="Mid-fidelity iterations"
            width={1040}
            height={1874}
          />
          <FigmaLink href="https://www.figma.com/design/LV5sMpEKJ8JlL6TBeFPdVS/Capstone-3---End-to-End-Application?node-id=1043-21730">
            View the iterated mid-fidelity
          </FigmaLink>
        </SubSection>
      </Section>
      <Separator className="bg-brown6" />
      {/* branding */}
      <div className="space-y-12 w-[1040px] mx-auto">
        {/* header */}
        <div className="text-3xl font-bold tracking-[.02em]">Branding</div>
        <Text>
          To create a user-centered product, it&apos;s essential to build a
          brand image that attracts users. I established brand values to ensure
          that searching for and booking restaurants does not feel difficult.
        </Text>
        <div className="space-y-24 pb-24">
          {/* brand value */}
          <BrandSection title="Brand Value" className="space-y-8">
            <div className="text-[26px] font-medium tracking-[.02em]">
              Clean / Modern / Joyful / Friendly / Vibrant
            </div>
            <Image
              src="/resto/moodboard.png"
              alt="Moodboard"
              width={1040}
              height={669}
            />
          </BrandSection>
          {/* brand logos */}
          <BrandSection title="Brand Logos" className="space-y-12">
            <div className="text-[26px] font-medium tracking-[.02em] flex space-x-16">
              {/* logo 1 */}
              <div className="space-y-12 w-[300px]">
                <div className="relative h-[200px] w-[193px] mx-auto">
                  <Image
                    src="/resto/logo-1.svg"
                    alt="Logo 1"
                    className="object-cover"
                    fill
                  />
                </div>
                <div className="relative h-[80px] w-full">
                  <Image
                    src="/resto/logo-1-sm.svg"
                    alt="Logo 1 small"
                    className="object-contain"
                    fill
                  />
                </div>
                <div className="text-[20px] font-normal">
                  The bowl and chopsticks represent essential elements of
                  Japanese cuisine, and the font reflects the subtlety of
                  Japanese cuisine.
                </div>
              </div>
              {/* logo 2 */}
              <div className="space-y-12 w-[300px]">
                <div className="relative h-[200px] w-[193px] mx-auto">
                  <Image
                    src="/resto/logo-2.svg"
                    alt="Logo 2"
                    className="object-cover"
                    fill
                  />
                </div>
                <div className="relative h-[80px] w-full">
                  <Image
                    src="/resto/logo-2-sm.svg"
                    alt="Logo 2 small"
                    className="object-contain"
                    fill
                  />
                </div>
                <div className="text-[20px] font-normal">
                  The rounded cutlery and font convey a sense of friendliness
                  and make it easy to imagine a restaurant.
                </div>
              </div>
              {/* logo 3 */}
              <div className="space-y-12 w-[300px]">
                <div className="relative h-[200px] w-[240px] mx-auto">
                  <Image
                    src="/resto/logo-3.svg"
                    alt="Logo 3"
                    className="object-cover"
                    fill
                  />
                </div>
                <div className="relative h-[80px] w-full">
                  <Image
                    src="/resto/logo-3-sm.svg"
                    alt="Logo 3 small"
                    className="object-contain"
                    fill
                  />
                </div>
                <div className="text-[20px] font-normal">
                  The &quot;O&quot; in resto matches the search icon, indicating
                  that searching is easy.
                </div>
              </div>
            </div>
          </BrandSection>
          <BrandSection title="Typography" className="space-y-12">
            <div className="flex">
              <div className="space-y-4">
                <div className="font-manrope tracking-[.02em] text-[24px] font-semibold">
                  H1 - Manrope 24px
                </div>
                <div className="font-manrope tracking-[.02em] text-[20px] font-medium">
                  H2 - Manrope 20px
                </div>
                <div className="font-manrope tracking-[.02em] text-[18px] font-medium">
                  H3 - Manrope 18px
                </div>
                <div className="font-manrope tracking-[.02em] text-[16px] font-medium">
                  B1 - Manrope 16px
                </div>
                <div className="font-manrope tracking-[.02em] text-[14px] font-medium">
                  B2 - Manrope 14px
                </div>
                <div className="font-manrope tracking-[.02em] text-[10px] font-normal">
                  Function S- Manrope 10px
                </div>
                <div className="font-manrope tracking-[.02em] text-[16px] font-medium">
                  Function M- Manrope 16px
                </div>
              </div>
              <Text className="w-[550px] ml-auto mt-auto" sm>
                The Manrope font has a clean and simple design, making it
                effective for smoothly navigating restaurant and reservation
                information. Additionally, its modern and minimalist style
                provides a professional and up-to-date image.
              </Text>
            </div>
          </BrandSection>
          <BrandSection title="Colors" className="space-y-12">
            <div className="flex">
              <div className="space-y-5">
                <div className="space-y-[10px]">
                  <div className="font-manrope text-[20px] font-normal tracking-[.01em]">
                    Primary
                  </div>
                  <div className="flex space-x-[10px]">
                    <Color color="EE722B" className="bg-[#EE722B]" />
                    <Color color="C65310" className="bg-[#C65310]" />
                    <Color color="953B1D" className="bg-[#953B1D]" />
                  </div>
                </div>
                <div className="space-y-[10px]">
                  <div className="font-manrope text-[20px] font-normal tracking-[.01em]">
                    Secondary
                  </div>
                  <div className="flex space-x-[10px]">
                    <Color color="F4F0E0" className="bg-[#F4F0E0]" />
                    <Color color="DFD5BD" className="bg-[#DFD5BD]" />
                    <Color color="B8AE94" className="bg-[#B8AE94]" />
                  </div>
                </div>
                <div className="space-y-[10px]">
                  <div className="font-manrope text-[20px] font-normal tracking-[.01em]">
                    Neutral
                  </div>
                  <div className="flex space-x-[10px]">
                    <Color
                      color="F9F9F7"
                      className="bg-[#F9F9F7] border-[#5F4C35] border-[0.5px]"
                    />
                    <Color
                      color="FFFFFF"
                      className="bg-[#FFFFFF] border-[#5F4C35] border-[0.5px]"
                    />
                  </div>
                </div>
              </div>
              <div className="w-[550px] ml-auto">
                <Text>
                  I chose a bright and vibrant orange as the primary color to
                  convey friendliness and stimulate appetite. Additionally,
                  using colors close to red and white, which are featured in the
                  Japanese flag, enhances the Japanese theme. For the secondary
                  color, we selected earthy tones to provide a modern and
                  minimalist impression.
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
        <Separator className="bg-brown6" />
        <div className="py-5">
          <Transition text="I applied all branding elements to the wireframes and created high-fidelity wireframes" />
        </div>
        <SubSection title="Hi-fidelity" color="text-brown4">
          <Image
            src="/resto/hifi.png"
            alt="Hi-fidelity"
            width={1040}
            height={602}
          />
          <FigmaLink href="https://www.figma.com/design/LV5sMpEKJ8JlL6TBeFPdVS/Capstone-3---End-to-End-Application?node-id=692-48559">
            View the full hi-fidelity
          </FigmaLink>
        </SubSection>
      </div>
      {/* test */}
      <Section title="Test" underline="bg-green3" className="px-52 pb-24">
        <Text>
          To confirm whether high-fidelity wireframes can actually achieve user
          goals, I conducted usability testing.
        </Text>
        {/* usability test */}
        <TestCard title="Usability test" className="border-brown5">
          <div className="text-[24px] tracking-[.02em]">
            5 people (in person & online)
          </div>
          <ul className="list-disc list-outside text-[26px] tracking-[.02em] font-medium pl-6 space-y-7">
            <li>Search for restaurants that have an English menu</li>
            <li>Choose a restaurant that is popular among locals</li>
            <li>Search for restaurants near a famous landmark</li>
            <li>Make a reservation without scheduling conflicts</li>
          </ul>
        </TestCard>
        <SubSection title="Test results" color="text-green4" relaxed>
          <div className="flex flex-wrap gap-y-[55px] justify-evenly">
            <Avatar
              name="Peter"
              age="34"
              desc="He had difficulty finding reviews from locals"
            />
            <Avatar
              name="Clare"
              age="26"
              desc="She was a little confused about the process of checking reservation conflicts"
            />
            <Avatar
              name="Alex"
              age="32"
              desc="He wanted to see a list of restaurants and more distinct location icon colors"
            />
            <Avatar
              name="Taylor"
              age="30"
              desc="He finished all tasks without any issues"
            />
            <Avatar
              name="Minoru"
              age="68"
              desc="He expected to see a reservation conflict notification before going to the reservation page"
            />
          </div>
          <Text>
            Most users were able to complete the general flow of tasks, but they
            seemed a bit confused by some details. Specifically, the methods for
            finding popular local restaurants and confirming to avoid duplicate
            reservations differed from what they expected, causing them to take
            longer to complete the tasks.
          </Text>
        </SubSection>
        <SubSection title="Iterations" color="text-green4" relaxed>
          <div className="space-y-7">
            <div className="text-[24px] font-medium tracking-[.02em]">
              Search - Restaurant list
            </div>
            <Image
              src="/resto/iterations-1.png"
              alt="Search - Restaurant list"
              width={1040}
              height={491}
            />
          </div>
          <div className="space-y-7">
            <div className="text-[24px] font-medium tracking-[.02em]">
              Search - Map
            </div>
            <Image
              src="/resto/iterations-2.png"
              alt="Search - Restaurant list"
              width={1040}
              height={491}
            />
          </div>
          <div className="space-y-7">
            <div className="text-[24px] font-medium tracking-[.02em]">
              Search - Restaurant info
            </div>
            <Image
              src="/resto/iterations-3.png"
              alt="Search - Restaurant list"
              width={1040}
              height={491}
            />
          </div>
          <div className="space-y-7">
            <div className="text-[24px] font-medium tracking-[.02em]">
              Reservation - Notification
            </div>
            <Image
              src="/resto/iterations-4.png"
              alt="Search - Restaurant list"
              width={1040}
              height={491}
            />
          </div>
        </SubSection>
        <Transition text="After I made design changes based on the usability test, the design is finalized" />
        <Image
          src="/resto/hifi-wireframes.jpeg"
          alt="wireframes"
          width={1040}
          height={851}
        />
        <div className="w-full">
          <Link href="https://www.figma.com/proto/LV5sMpEKJ8JlL6TBeFPdVS/Capstone-3---End-to-End-Application?page-id=493%3A4780&node-id=493-9339&viewport=927%2C821%2C0.1&t=x4PyBZiBp9vuODCP-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=493%3A9506&show-proto-sidebar=1">
            <div
              className={
                "h-[70px] w-[357px] rounded-[64px] bg-dark-green text-white text-[22px] font-medium " +
                "tracking-[.02em] flex items-center justify-center"
              }
            >
              View hi-fi prototype
            </div>
          </Link>
        </div>
      </Section>
      {/* conclusion */}
      <Section
        title="Conclusion"
        underline="bg-dark-brown"
        className="px-52 pb-24"
        bg="bg-light-ivory"
      >
        <Text>
          To create a better product throughout the flow from research to
          design, it’s crucial to grasp users’ pain points and consider how to
          improve them. Therefore, user feedback is paramount, and hearing raw
          voices through research is necessary. After actually listening to user
          feedback in this project, I found it challenging to utilize that
          feedback to strategize improvements. The goal of this project was to
          develop an app that eliminates language barriers and confusion in
          reservation management for travelers searching for restaurants in
          Japan, helps them find restaurants that meet their needs, and provides
          a better dining experience. Based on user experiences, I aimed to
          understand frustrations and difficulties in Japanese dining and
          determine what features would be useful during actual travel, leading
          to the final design.
        </Text>
      </Section>
    </div>
  );
}
