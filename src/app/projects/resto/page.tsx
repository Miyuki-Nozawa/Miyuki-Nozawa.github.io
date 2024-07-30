import BrandSection from "@/app/components/brand-section";
import Card from "@/app/components/card";
import Color from "@/app/components/color";
import Definition from "@/app/components/definition";
import SubSection from "@/app/components/sub-section";
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
import TaskFlow from "@/app/components/task-flow";
import TestCard from "@/app/components/test-card";
import Text from "@/app/components/text";
import Transition from "@/app/components/transition";
import UserFlow from "@/app/components/user-flow";
import Image from "next/image";
import Link from "next/link";
import Avatar from "@/app/components/avatar";

export default function Resto() {
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
        statement={
          "After the pandemic, travel has become more accessible, allowing many people to explore various " +
          "countries. According to a World Economic Forum report, Japan is one of the best tourist destinations for " +
          "2024, with 9.62 million foreign tourists visiting in 2023. Many people look forward to experiencing " +
          "Japan's food culture, but for those unfamiliar with the language and culture, finding and booking " +
          "suitable restaurants or cafes can be challenging. Additionally, organizing all the reservations and " +
          "saved restaurants across different apps can be disorganized and sometimes difficult."
        }
        solution={
          "Developing an app that allows travelers to easily make and manage restaurant reservations without being " +
          "hindered by language barriers, and to search for restaurants that meet their specific needs."
        }
        className="bg-light-pink"
      />
      <ProjectContents />
      {/* introduction */}
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
      {/* research */}
      <Section
        title="Research"
        underline="bg-dark-green"
        className="px-52 mb-12"
      >
        <ResearchGoalSummary className="bg-olive">
          <span className="font-bold">
            Understanding what users prioritize when searching for restaurants
            as well as their experiences and issues with reservations amidst
            language barriers
          </span>{" "}
          so that we can build an app that provides users with a better
          experience when traveling.
        </ResearchGoalSummary>
        {/* research 1 */}
        <ResearchGoal title="1. Getting to know what competitors are focusing on">
          <Text>
            Before diving into the interview, I conducted a competitive analysis
            to understand what features are available in existing apps. I
            compared their target users, focus, and trends to identify which
            features address specific needs.
          </Text>
          <ResearchSubsection title="Competitive Analysis">
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
                className="object-contain"
                fill
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
              <div
                className={
                  "px-8 py-5 mt-12 border-2 border-dark-green rounded-[5rem] inline-block " +
                  "text-dark-green text-xl font-semibold"
                }
              >
                View the competitive analysis
              </div>
            </Link>
          </ResearchSubsection>
        </ResearchGoal>
        {/* research 2 */}
        <ResearchGoal title="2. Getting to know how people approach dining during their travels">
          <ResearchObjectives
            questions={[
              "Identify what users prioritize in choosing restaurants when traveling",
              "Understand how people plan their trips and what kind of information is required for them",
              "Understand the deciding factors and challenges users encounter when searching for and choosing " +
                "restaurants",
              "Understand how users manage their desired destinations and planned locations",
            ]}
          />
          {/* research methods */}
          <div className="space-y-12">
            <div className="font-manrope text-[1.75rem] font-extrabold tracking-[.02em] text-dark-green underline">
              Research methods
            </div>
            <Text>
              In order to collect a large amount of qualitative data, I
              conducted two different research methods.
            </Text>
            <div className="space-y-24">
              {/* survey */}
              <ResearchMethod
                title="Survey"
                desc={
                  "The first research method I used was a survey. Surveys are " +
                  "used to gather quantitative data from a wide range of " +
                  "travelers to help understand their travel styles, the " +
                  "importance of exploring foods during their trips, and their " +
                  "dining experiences."
                }
              >
                <Participants
                  title="Survey participants"
                  desc1="17 people age between 18-34"
                  desc2="(12 out of 17 people have traveled to Japan)"
                />
                <KeyQuestions
                  questions={[
                    "How do you search for restaurants or cafes when dining out during your travels?",
                    "How was your experience when searching for and deciding on restaurants while traveling?",
                    "Are there any struggles or difficulties you encounter when managing your restaurant list?",
                  ]}
                />
                <ParticpantResponses
                  img="/resto/survey-responses.png"
                  alt="Survey responses"
                />
              </ResearchMethod>
              {/* user interview */}
              <ResearchMethod
                title="User interview"
                desc={
                  "The second research method I conducted is user interviews. " +
                  "User interviews are used to collect qualitative data on more " +
                  "specific thoughts and personal experiences of users, based on " +
                  "the wide range of data obtained from the survey."
                }
              >
                <Participants
                  title="Interview participants"
                  desc1="5 people age between 23-68"
                  desc2="(1 Japanese, 4 of 5 people have traveled to Japan)"
                />
                <KeyQuestions
                  questions={[
                    "When you checked information about restaurants on websites, were these sites updated with " +
                      "current information or did you find that the info was missing or outdated?",
                    "What are the key factors in choosing a restaurant?",
                    "When you make a list of restaurants, what kind of information do you include in the list?",
                  ]}
                />
                <ParticpantResponses
                  img="/resto/interview-responses.png"
                  alt="Interview responses"
                />
              </ResearchMethod>
            </div>
          </div>
          {/* results */}
          <div className="space-y-12">
            <div className="font-manrope text-[1.75rem] font-extrabold tracking-[.02em] text-dark-green underline">
              Results
            </div>
            <Text>
              After implementing these research methods, I recorded all data
              points and ideas on individual sticky notes, grouped them based on
              interview topics, and further categorized them into patterns.
              <div className="h-5"></div>
              By creating an affinity map, I was able to gain a deeper
              understanding of user needs, trends and pain points in restaurant
              searches and restaurant reservations. It helped to define product
              requirements and plan future product features.
            </Text>
            <div className="space-y-24">
              <div className="relative w-full h-[966px]">
                <Image src="/resto/affinity-map.png" alt="Affinity map" fill />
              </div>
              <Text>
                After reviewing the affinity map, I was able to grasp what
                criteria travelers use to choose restaurants, the resources they
                use when searching for restaurants, and the issues or
                difficulties they encounter when making reservations for
                restaurants.
              </Text>
              {/* paper */}
              <div className="rounded-3xl bg-light-ivory px-20 py-12 space-y-12">
                <DiamondHeadedList
                  title="How to decide on restaurants"
                  color="brown"
                  items={[
                    "Recommendations",
                    "Reviews & Ratings",
                    "Ambiance",
                    "Location",
                    "Language option",
                  ]}
                />
                <DiamondHeadedList
                  title="Difficulties or challenging when making reservations"
                  color="brown"
                  items={[
                    "Language barriers",
                    "No English translation",
                    "Needs phone call",
                    "Popular restaurants were all booked up",
                    "There are too many options to choose from",
                    "Finding a specific restaurant from a list",
                  ]}
                />
                <DiamondHeadedList
                  title="User needs"
                  color="brown"
                  items={[
                    "Language support",
                    "Enhanced search functions tailored to purpose",
                    "Reliable reviews and ratings ",
                    "Ability to make and cancel reservations online easily",
                    "Engaging photos",
                  ]}
                />
              </div>
              <Text>
                After all the research, I was able to identify the key points
                for building the app&apos;s features. This process allowed me to
                understand the critical elements that would meet the users&apos;
                needs and enhance their overall experience.
              </Text>
              <DownArrow />
              {/* key findings */}
              <div className="px-24 py-12 space-y-7 rounded-3xl border-dark-green border-2">
                <div className="text-3xl font-bold tracking-[.02em]">
                  Key findings
                </div>
                <ul className="list-disc list-outside text-[26px] tracking-[.02em] pl-6 space-y-1">
                  <li>Reliable Reviews and Ratings</li>
                  <li>Up-to-date information</li>
                  <li>Ease of Reservations and Reservation Management</li>
                  <li>Eliminate Anxiety Due to Language Differences</li>
                  <li>Search and Filter Functions Tailored to Needs</li>
                </ul>
              </div>
            </div>
          </div>
        </ResearchGoal>
      </Section>
      {/* define */}
      <Section title="Define" underline="bg-brown3" className="px-52">
        <Text>
          After doing research, reviewing the findings, and organizing the data,
          I used the insights to create three POV statements to identify design
          challenges. I chose one that focused on the language barrier and
          managing restaurant lists, which many people found challenging.
        </Text>
        <Definition
          title="POV (Point Of View) statement"
          text={
            "I’d like to explore ways to propose a streamlined and functional reservation system catering to " +
            "travelers who face challenges with language barriers during restaurant booking or encounter issues " +
            "managing reservations."
          }
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
        />
        <DownArrow />
        <Text>
          Based on the POV and HMW questions, I created two personas to
          understand users&apos; needs and behaviors and to ensure that design
          and decisions are centered around the user.
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
        />
        <FigmaLink href="">View the personas</FigmaLink>
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
          <FigmaLink href="">View the project goals</FigmaLink>
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
          <Transition text="To design the structure of the app, I conducted a card sort based on these feature keywords" />
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
            <FigmaLink href="">View the sitemap</FigmaLink>
          </div>
          <div className="space-y-7">
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
          />
          <TaskFlow
            title="Check the reservations and the saved restaurants to plan your dining schedule during the trip"
            img="/resto/task-flow-2.png"
            width={1312}
            height={168}
          />
          <div>
            <FigmaLink href="">View the task flows</FigmaLink>
          </div>
        </SubSection>
        <SubSection title="User Flow" color="text-brown4">
          <Text>
            I created a user flow to understand user needs and identify
            potential issues or confusing elements that are related to “search”
            and “reservations”.
          </Text>
          <UserFlow
            title="Discover restaurants or cafes and make reservations those tailored to your preferences"
            img="/resto/user-flow.png"
            width={4096}
            height={875}
          />
          <FigmaLink href="">View the user flow</FigmaLink>
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
                <Image src="/resto/lofi-1.png" alt="Home" fill />
              </div>
            </div>
            <div className="flex flex-col w-1/3 space-y-2 text-center">
              <div className="flex-none text-2xl tracking-[.02em]">Search</div>
              <div className="relative flex-auto">
                <Image src="/resto/lofi-2.png" alt="Home" fill />
              </div>
            </div>
            <div className="flex flex-col w-1/3 space-y-2 text-center">
              <div className="flex-none text-2xl tracking-[.02em]">
                Make a reservation
              </div>
              <div className="relative flex-auto">
                <Image src="/resto/lofi-3.png" alt="Home" fill />
              </div>
            </div>
          </div>
          <FigmaLink href="">View the full low-fidelity</FigmaLink>
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
          <FigmaLink href="">View the full mid-fidelity</FigmaLink>
        </SubSection>
        <Text>
          After creating the mid-fidelity wireframes, I conducted a quick test
          to check if users understood my design layout and if they found the
          interface user-friendly.
        </Text>
        {/* mid-fidelity test */}
        <TestCard title="Mid-fidelity test">
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
            src="/resto/iterated-midfi.png"
            alt="Mid-fidelity iterations"
            width={1040}
            height={1874}
          />
          <FigmaLink href="">View the iterated mid-fidelity</FigmaLink>
        </SubSection>
      </Section>
      <Separator />
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
        <Separator />
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
          <FigmaLink href="">View the full hi-fidelity</FigmaLink>
        </SubSection>
      </div>
      <Section title="Test" underline="bg-green3" className="px-52">
        <Text>
          To confirm whether high-fidelity wireframes can actually achieve user
          goals, I conducted usability testing.
        </Text>
        {/* usability test */}
        <TestCard title="Usability test">
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
          <Link href="">
            <div
              className={
                "h-[70px] w-[357px] rounded-[64px] bg-dark-green text-white text-[22px] font-semibold " +
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
        className="px-52"
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
