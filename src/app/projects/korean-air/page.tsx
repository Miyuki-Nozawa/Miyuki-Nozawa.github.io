import Avatar from "@/app/components/avatar";
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
import Image from "next/image";
import Link from "next/link";

export default function KoreanAir() {
  return (
    <div>
      <ProjectHero
        name="Korean Air"
        img="/korean-air/hero.png"
        logo="/korean-air/logo.png"
        logoWidth={290}
        logoHeight={50}
        header="A feature that enables effective utilization of mileage"
        projectType="Add a feature"
        role="UX/UI designer"
        projectDuration="1 month"
        industry="Airline"
        className="bg-base2 px-24 space-x-12"
        classNameLeft="w-[57%]"
        classNameRight="w-[43%]"
        classNameButton="bg-brown3 text-black"
      />
      <ProjectStatement
        statement={
          "Korean Air has a comprehensive mileage program and they allow customers to use their mileage for " +
          "flights, hotels, special services at the airport, etc. However, the display method for mileage on their" +
          "website is unclear, requiring multiple visits to different pages to confirm details. Additionally, " +
          "understanding how, and for what purposes, the accrued mileage can be used is difficult."
        }
        solution={
          "Adding features that allow Korean Air users to easily understand what can be done with their mileage " +
          "and utilize it effectively."
        }
        className="bg-dark-green text-white"
        underline="border-white"
      />
      <ProjectContents />
      {/* introduction */}
      <Section title="Introduction" underline="bg-dark-green" className="px-52">
        <Text>
          Korean Air, the flag carrier of South Korea and the largest airline
          based on fleet size, international destinations, and international
          flights, serves 120 cities in 43 countries. In 2022, it had 4,755
          thousand passengers on international flights and 6,211 thousand on
          domestic flights. It is one of the 10 airlines ranked as a 5-star
          airline and among the top 20 airlines globally.
          <div className="h-8"></div>
          Korean Air flights can be booked through the Korean Air website, which
          offers various reservation methods. In addition to standard cash
          purchases, reservations can be made using mileage or a combination of
          mileage and cash. Furthermore, by enrolling in the mileage program,
          accumulated miles can be used not only for flights but also for
          airport services and hotel bookings. Despite the variety of mileage
          programs, using mileage can be complicated. Users often need to
          navigate between different pages to check the number of mileage points
          required for their purposes.
        </Text>
        <Transition text="How can we add a feature that allows users to easily check and use their mileage?" />
      </Section>
      {/* research */}
      <Section
        title="Research"
        underline="bg-dark-brown"
        className="px-52 pb-12"
      >
        <ResearchGoalSummary className="bg-olive">
          <span className="font-bold">
            Understanding what users value most when using mileage rewards
          </span>{" "}
          so that we can change the mileage display to make it easier to
          understand, use, and increase user satisfaction.
        </ResearchGoalSummary>
        {/* research 1 */}
        <ResearchGoal title="1. Getting to know what features competitors offer regarding mileage or points">
          <Text>
            Before conducting the interviews, I performed a competitive analysis
            to understand the features incorporated by websites that use mileage
            or points systems. I compared target users, the characteristics of
            each system, and the pros and cons to identify which features meet
            specific needs.
          </Text>
          <ResearchSubsection title="Competitive Analysis">
            <Text>
              I compared two direct airline websites, including Korean Air, and
              two indirect websites with reward systems. I identified the
              strengths and areas for improvement for each website.
            </Text>
            <div className="relative w-full h-[564px]">
              <Image
                src="/korean-air/competitor-table.svg"
                alt="Competitor table"
                className="object-contain"
                fill
              />
            </div>
            <Text>
              Despite the specialized mileage and points systems on each
              website, there can still be difficulties in redeeming mileage or
              points. Since each site has separate pages for checking one&apos;s
              mileage or points and for viewing available redemption options,
              users need to navigate back and forth between various pages.
              <div className="h-8"></div>
              Through competitive analysis, I realized the need to display the
              mileage or points required for redemption in a clear and specific
              way. By clearly showing the target items that many users want to
              redeem and the exact amount of mileage or points needed, I can
              enhance users&apos; motivation to redeem and improve their overall
              satisfaction. However, displaying all items at once can be
              challenging, so it is necessary to find an effective method.
            </Text>
            <Link href="">
              <div
                className={
                  "px-8 py-5 mt-12 border-2 border-dark-brown rounded-[5rem] inline-block " +
                  "text-dark-brown text-xl font-semibold underline"
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
                  "The first research method I used was a survey. The survey was conducted to collect quantitative " +
                  "data from a wide range of people to understand how they use airline mileage and credit card " +
                  "point systems, and how well they comprehend the process of redeeming miles or points."
                }
                color="light-brown"
              >
                <Participants
                  title="Survey participants"
                  desc1="12 people, age between 18-68"
                  className="text-dark-green"
                />
                <KeyQuestions
                  questions={[
                    "Have you redeemed your mileage (credit card points), and what did you use it for?",
                    "Are you aware of your mileage (credit card points) balance?",
                    "Are you aware of required mileage (credit card points) for redemptions?",
                  ]}
                />
                <ParticpantResponses
                  img="/korean-air/survey-responses.svg"
                  alt="Survey responses"
                />
              </ResearchMethod>
              {/* user interview */}
              <ResearchMethod
                title="User interview"
                desc={
                  "The second research method I conducted is user interviews. User interviews are used to collect " +
                  "qualitative data on more specific thoughts and personal experiences of users, based on the wide " +
                  "range of data obtained from the survey."
                }
                color="light-brown"
              >
                <Participants
                  title="Interview participants"
                  desc1="5 people who have joined an airline’s mileage program "
                  desc2="Age between 33-68"
                  className="text-dark-green"
                />
                <KeyQuestions
                  questions={[
                    "How long have you been a member of the mileage program?",
                    "What do you want to do with your mileage?",
                    "Have you redeemed your mileage, and is there a time where you found redeeming your mileage to " +
                      "be challenging?",
                  ]}
                />
                <ParticpantResponses
                  img="/korean-air/interview-responses.svg"
                  alt="Interview responses"
                />
              </ResearchMethod>
              {/* usability testing */}
              <ResearchMethod
                title="Usability testing"
                desc={
                  "The third method we conducted was a usability test. We used the existing Korean Air website to " +
                  "understand how people navigate the site, what aspects they find difficult, and what areas need " +
                  "improvement."
                }
                color="light-brown"
              >
                <Participants
                  title="Interview participants"
                  desc1="5 people, age between 33-68"
                  desc2="(4 out of 5 people have used the Korean Air website)"
                  className="text-dark-green"
                />
                <KeyQuestions
                  questions={[
                    "Show me how to find your accumulated mileage",
                    "Explain what you can do with your mileage",
                  ]}
                />
                <ParticpantResponses
                  img="/korean-air/usability-responses.svg"
                  alt="Usability responses"
                />
              </ResearchMethod>
            </div>
          </div>
          {/* results */}
          <div className="space-y-12">
            <div className="font-manrope text-[1.75rem] font-extrabold tracking-[.02em] text-dark-brown underline">
              Results
            </div>
            <Text>
              Through surveys and interviews, I was able to gather statistics on
              how enthusiastic people are about exchanging miles and points, and
              how well they understand the system. I recorded the key points
              from the surveys and interviews on individual sticky notes,
              grouped them based on interview topics, and further categorized
              them into patterns to create an affinity map. Creating the
              affinity map allowed me to gain a deeper understanding of
              users&apos; needs, motivations, and the confusing aspects of
              Korean Air&apos;s mileage system on their website.
            </Text>
            <div className="space-y-24">
              <div className="space-y-20">
                <div className="space-y-8">
                  <div className="font-bold text-3xl tracking-tight">
                    Motivation of mileage/points redemption
                  </div>
                  <Image
                    src="/korean-air/affinity-map-1.svg"
                    alt="Motivation of mileage/points redemption"
                    width={1040}
                    height={755}
                  />
                </div>
                <div className="space-y-8">
                  <div className="font-bold text-3xl tracking-tight">
                    Korean Air website
                  </div>
                  <Image
                    src="/korean-air/affinity-map-2.svg"
                    alt="Korean Air website"
                    width={1040}
                    height={1059}
                  />
                </div>
                <FigmaLink href="">View the full affinity map</FigmaLink>
              </div>
              <Text>
                Through the affinity map, I was able to identify what people
                most want to exchange their mileage and points for, as well as
                how knowledgeable they are about miles and points. Additionally,
                I was able to clearly identify the usability issues and areas
                for improvement on the Korean Air website.
              </Text>
              {/* paper */}
              <div className="rounded-3xl bg-light-ivory px-20 py-12 space-y-12">
                <DiamondHeadedList
                  color="brown"
                  title="Motivation of mileage redemption"
                  items={["Flight tickets"]}
                />
                <DiamondHeadedList
                  color="brown"
                  title="Difficulties experienced when redeeming mileage"
                  items={[
                    "The website design wasn’t good",
                    "The process was a bit complicating",
                  ]}
                />
                <DiamondHeadedList
                  color="brown"
                  title="Difficulties in displaying mileage information on the Korean Air website"
                  items={[
                    "Finding redemption options",
                    "Finding accumulated mileage",
                    "Navigating the website",
                    "Mileage display method ",
                    "The naming of menus",
                  ]}
                />
              </div>
              <Text>
                After completing all the research, I was able to identify the
                key points for adding a feature to Korean Air&apos;s website
                that allows users to easily check and use their mileage. This
                process helped me understand what is needed to meet the
                users&apos; needs.
              </Text>
              <DownArrow />
              {/* key findings */}
              <div className="px-24 py-12 space-y-7 rounded-3xl border-dark-brown border-2">
                <div className="text-3xl font-bold tracking-[.02em]">
                  Key findings
                </div>
                <ul className="list-disc list-outside text-[30px] tracking-[.02em] pl-6 space-y-1">
                  <li>Clear display of mileage redemption options</li>
                  <li>Smooth and easy redemption of flight tickets</li>
                  <li>Understanding the required mileage for redemption</li>
                  <li>Clear goals for mileage redemption</li>
                </ul>
              </div>
            </div>
          </div>
        </ResearchGoal>
      </Section>
      {/* define */}
      <Section title="Define" underline="bg-green3" className="px-52">
        <Text>
          Based on the insights gained from the research process, I created two
          POV statements. Since many people struggle to confirm the exact
          mileage required for redemption, I chose one of them, focusing on the
          mileage required for redemption.
        </Text>
        <Definition
          title="POV (Point Of View) statement"
          text={
            "I’d like to explore ways for people joining the Korean Air mileage program (SKYPASS) to understand at " +
            "a glance what they can redeem their mileage for because many people may not know how many miles are " +
            "needed for redemption, leading to a lack of motivation to accumulate mileage."
          }
          className="bg-green5"
        />
        <Text>
          Then, I took the problems into clear questions that help find creative
          and practical solutions.
        </Text>
        <Definition
          title="HMW (How Might We) question"
          text={
            "How might we allow SKYPASS members to check their accumulated mileage against the required mileage at " +
            "once?"
          }
          className="bg-green5"
        />
        <DownArrow />
        <Text>
          Based on the POV and HMW questions, I created a persona to understand
          users&apos; needs and behaviors and to ensure that design and
          decisions are centered around the user.
        </Text>
        <Persona
          title="Persona"
          desc={
            "Lina Kim is a 30-year-old product manager living in Los Angeles who frequently flies with Korean Air " +
            "to visit her family in Korea. Although she accumulates mileage with Korean Air’s SKYPASS program, she " +
            "finds the process of redeeming miles for tickets complicated and has never used them. Her main goals " +
            "are to understand how to redeem her mileage and to save costs on her trips to Korea, but she is " +
            "frustrated by the complexity of the website and the time it takes to find the necessary information."
          }
          img="/korean-air/persona.jpeg"
        />
        <div className="w-full">
          <FigmaLink href="">View the persona</FigmaLink>
        </div>
      </Section>
      {/* design */}
      <Section title="Design" underline="bg-light-pink" className="px-52">
        <Text>
          As a step to generate ideas to solve the persona&apos;s problems, I
          set project goals and brainstormed feature ideas to address them.
        </Text>
        {/* project goals */}
        <SubSection title="Project goals" color="text-brown4">
          <div className="relative w-[1040px] h-[950px]">
            <Image
              src="/korean-air/project-goals.svg"
              alt="Project goals"
              fill
            />
          </div>
          <FigmaLink href="">View the project goals</FigmaLink>
        </SubSection>
        {/* feature ideas */}
        <SubSection title="Feature ideas" color="text-brown4">
          <Text>
            Considering the existing design and features of Korean Air, I
            brainstormed key features that focus on overlapping goals of both
            business and user objectives to achieve them.
          </Text>
          <Image
            src="/korean-air/feature-ideas.svg"
            alt="Feature ideas"
            width={867}
            height={604}
            className="mx-auto"
          />
          <Transition
            text={
              "I considered how users would specifically utilize these features and reflected this in the task flow"
            }
          />
        </SubSection>
        <SubSection title="Task Flow" color="text-brown4">
          <Text>
            I created a task flow to clarify the steps necessary for users to
            achieve a specific goal and promote a user-friendly approach.
          </Text>
          <TaskFlow
            title="Check the required mileage for exchanging award tickets"
            img="/korean-air/task-flow.png"
            width={1473}
            height={168}
            className="w-[1473px] flex items-center"
          />
          <div>
            <FigmaLink href="">View the task flow</FigmaLink>
          </div>
        </SubSection>
        <SubSection title="User Flow" color="text-brown4">
          <Text>
            I created a user flow to understand user needs and identify
            potential issues or confusing elements that are related to “search”
            and “reservations”.
          </Text>
          <div>
            <div className="text-2xl font-medium tracking-[.02em] mb-12">
              Check the required mileage for exchanging award tickets
            </div>
            <div className="overflow-scroll">
              <div className="relative w-[1988px] h-[600px]">
                <Image
                  src="/korean-air/user-flow.png"
                  alt="task flow"
                  width={1988}
                  height={400}
                />
              </div>
            </div>
          </div>
          <FigmaLink href="">View the user flow</FigmaLink>
        </SubSection>
        <DownArrow />
        <Text>
          Based on user flows, task flows, and general observations of how users
          want to search and prevent duplicate reservations, I created specific
          design layouts.
        </Text>
        <SubSection title="Low-fidelity" color="text-brown4">
          <div className="space-y-7">
            <DiamondHeader color="light-pink" title="Home" />
            <div className="flex space-x-4">
              <div className="w-1/2 space-y-4">
                <div className="text-[24px] tracking-[.02em]">Original</div>
                <div className="relative w-[511px] h-[364px]">
                  <Image
                    src="/korean-air/home-original.png"
                    alt="Home (original)"
                    fill
                  />
                </div>
              </div>
              <div className="w-1/2 space-y-4">
                <div className="text-[24px] tracking-[.02em]">Low-fidelity</div>
                <div className="relative w-[511px] h-[364px]">
                  <Image
                    src="/korean-air/home-lofi.jpeg"
                    alt="Home (lofi)"
                    fill
                  />
                </div>
                <div className="text-[24px] tracking-[.02em]">
                  Display the accumulated mileage number under the my page icon.
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-7">
            <DiamondHeader color="light-pink" title="My page" />
            <div className="flex space-x-4">
              <div className="w-1/2 space-y-4">
                <div className="text-[24px] tracking-[.02em]">Original</div>
                <div className="relative w-[511px] h-[364px]">
                  <Image
                    src="/korean-air/my-page-original.png"
                    alt="My page (original)"
                    fill
                  />
                </div>
              </div>
              <div className="w-1/2 space-y-4">
                <div className="text-[24px] tracking-[.02em]">Low-fidelity</div>
                <div className="relative w-[511px] h-[364px]">
                  <Image
                    src="/korean-air/my-page-lofi.jpeg"
                    alt="My page (lofi)"
                    fill
                  />
                </div>
                <div className="text-[24px] tracking-[.02em]">
                  Below the accumulated mileage number on the My Page, display
                  what the miles can be redeemed for and how many miles are
                  needed in graphs.
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-7">
            <DiamondHeader color="light-pink" title="My mileage page" />
            <div className="flex space-x-4">
              <div className="w-1/2 space-y-4">
                <div className="text-[24px] tracking-[.02em]">Original</div>
                <div className="relative w-[511px] h-[364px]">
                  <Image
                    src="/korean-air/my-mileage-original.png"
                    alt="My mileage (original)"
                    fill
                  />
                </div>
              </div>
              <div className="w-1/2 space-y-4">
                <div className="text-[24px] tracking-[.02em]">Low-fidelity</div>
                <div className="relative w-[511px] h-[364px]">
                  <Image
                    src="/korean-air/my-mileage-lofi.jpeg"
                    alt="My mileage (lofi)"
                    fill
                  />
                </div>
                <div className="text-[24px] tracking-[.02em]">
                  Below the accumulated mileage number on the My Mileage Page,
                  display mileage redemption options
                </div>
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
          <Image
            src="/korean-air/midfi.svg"
            alt="Mid-fidelity"
            width={1040}
            height={828}
          />
          <FigmaLink href="">View the full mid-fidelity</FigmaLink>
        </SubSection>
        <Text>
          After creating the mid-fidelity wireframes, I conducted a quick test
          to check if users understood my design layout and if they found the
          interface user-friendly.
        </Text>
        {/* mid-fidelity test */}
        <TestCard title="Mid-fidelity test" className="border-light-pink">
          <Text sm>
            3 people, age 34-68
            <br />
            (2 people have used the Korean Air website)
          </Text>
          <div className="pt-7 space-y-20">
            {/* test 1 */}
            <div className="space-y-7">
              <ul className="list-disc list-outside text-[24px] tracking-[.02em] pl-6 font-medium">
                <li>Check the accumulated mileage</li>
              </ul>
              <Text sm>
                → People can easily check their saved mileage from the home
                screen, eliminating the need to navigate back and forth just to
                check the number of miles.
              </Text>
              <Image
                src="/korean-air/midfi-test-1.svg"
                alt="Mid-fidelity test"
                width={940}
                height={498}
              />
            </div>
            {/* test 2 */}
            <div className="space-y-7">
              <ul className="list-disc list-outside text-[24px] tracking-[.02em] pl-6 font-medium">
                <li>
                  Check how many miles are required to exchange for an flight
                  ticket
                </li>
              </ul>
              <Text sm>
                → After testing two options, I found that displaying the miles
                as a bar graph is more visually effective. However, to increase
                people&apos;s motivation for redeeming miles, I need to make the
                required number of miles more visible.
              </Text>
              <Image
                src="/korean-air/midfi-test-2.svg"
                alt="Mid-fidelity test"
                width={940}
                height={532}
              />
              <Image
                src="/korean-air/midfi-test-3.svg"
                alt="Mid-fidelity test"
                width={940}
                height={532}
              />
            </div>
            {/* test 3 */}
            <div className="space-y-7">
              <ul className="list-disc list-outside text-[24px] tracking-[.02em] pl-6 font-medium">
                <li>Confirm what can be done with the accumulated mileage</li>
              </ul>
              <Text sm>
                → People can easily learn about mileage redemption options, but
                they can&apos;t immediately see the exact number of miles
                required for each redemption. Therefore, it needs to be
                displayed in a way that is clear and easy for everyone to
                understand.
              </Text>
              <Image
                src="/korean-air/midfi-test-4.svg"
                alt="Mid-fidelity test"
                width={940}
                height={500}
              />
            </div>
          </div>
        </TestCard>
        <Transition
          text={
            "Based on the results of the mid-fi test, I iterated on the design to make it more user-friendly and " +
            "help users achieve their goals."
          }
        />
        <SubSection title="Mid-fidelity (iterations)" color="text-brown4">
          <Image
            src="/korean-air/midfi-iteration-1.svg"
            alt="Mid-fidelity iteration"
            width={1040}
            height={950}
          />
          <Separator className="bg-light-pink" />
          <Image
            src="/korean-air/midfi-iteration-2.svg"
            alt="Mid-fidelity iteration"
            width={1040}
            height={950}
          />
          <FigmaLink href="">View the iterated mid-fidelity</FigmaLink>
        </SubSection>
        <SubSection title="Mid-fidelity (iterations)" color="text-brown4">
          <Text>
            Considering Korean Air&apos;s image colors and existing design, I
            applied the brand colors to the added features.
          </Text>
          <Image
            src="/korean-air/hifi.png"
            alt="Hi-fidelity"
            width={1040}
            height={835}
          />
          <FigmaLink href="">View the full hi-fidelity</FigmaLink>
        </SubSection>
      </Section>
      {/* test */}
      <Section title="Test" underline="bg-brown3" className="px-52 pb-24">
        <Text>
          To confirm whether high-fidelity wireframes can actually achieve user
          goals, I conducted usability testing.
        </Text>
        {/* usability test */}
        <TestCard title="Usability test" className="border-light-pink">
          <div className="text-[24px] tracking-[.02em]">
            5 people, age between 27-68
          </div>
          <ul className="list-disc list-outside text-[26px] tracking-[.02em] font-medium pl-6 space-y-7">
            <li>Check the accumulated mileage</li>
            <li>
              Check if users are eligible to book an award ticket for their
              frequently used flight route using their accumulated mileage
            </li>
            <li>Find out the mileage redemption options</li>
          </ul>
        </TestCard>
        <SubSection title="Test results" color="text-green4" relaxed>
          <div className="flex flex-wrap gap-y-[55px] justify-evenly">
            <Avatar
              name="Yingyang"
              age="27"
              desc={
                "She was toggling back and forth between the nav bar and my page, unsure of where the frequently " +
                "used flight info was located."
              }
            />
            <Avatar
              name="Hisayo"
              age="32"
              desc={
                "She wasn't sure if the mileage redemption options listed on my mileage page are linked to the " +
                "flight history and search records."
              }
            />
            <Avatar
              name="Peter"
              age="34"
              desc={
                "He found the redemption options on my mileage page, but he wasn’t sure where to click to see other " +
                "options from there."
              }
            />
            <Avatar
              name="Alex"
              age="32"
              desc="It was challenging for him to find the required mileage for the award ticket."
            />
            <Avatar
              name="Minoru"
              age="68"
              desc={
                "He expected to see detailed information about the mileage redemption options on the My Mileage Page."
              }
            />
          </div>
          <Text>
            Users were able to smoothly check their accumulated mileage, but
            they struggled a bit with other tasks. While the mileage redemption
            options themselves were easy to view, many users found it unclear
            what criteria were used to display flight and seat upgrade options.
            Additionally, it seemed challenging for users to find out what else
            could be done beyond the displayed mileage redemption options.
          </Text>
        </SubSection>
        <SubSection title="Iterations" color="text-dark-brown" relaxed>
          <div className="space-y-24">
            <Image
              src="/korean-air/iterations-2.png"
              alt="My page"
              width={1040}
              height={940}
            />
            <Image
              src="/korean-air/iterations-2.png"
              alt="My Mileage Page"
              width={1040}
              height={1040}
            />
            <Image
              src="/korean-air/iterations-3.png"
              alt="My Mileage Page - Pop up"
              width={1040}
              height={945}
            />
          </div>
        </SubSection>
        <Transition text="After I made design changes based on the usability test, I finalized the design" />
        <Image
          src="/korean-air/hifi-prototype.png"
          alt="Hi-fidelity prototype"
          width={1040}
          height={880}
        />
        <div className="w-full">
          <Link href="">
            <div
              className={
                "h-[70px] w-[357px] rounded-[64px] bg-brown3 text-[22px] font-semibold " +
                "tracking-[.02em] flex items-center justify-center underline"
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
        underline="bg-dark-green"
        className="px-52 pb-24"
        bg="bg-base"
      >
        <Text>
          The goal of this project was to enable Korean Air users to easily
          understand and effectively utilize their mileage. Since the research
          participants were not necessarily all Korean Air users, I progressed
          through the process with the aim of meeting the needs of both users
          and potential users. The biggest challenge in the process was to
          consider features that would not interfere with the existing
          website&apos;s design and functionality. However, through repeated
          user testing, I was able to get closer to achieving users&apos; goals.
          The iterative process of user testing was invaluable in refining my
          approach and ensuring that the final product effectively addressed
          user needs. Moving forward, continuous feedback and iteration will be
          key to maintaining and improving the website’s usability and
          functionality.
        </Text>
      </Section>
    </div>
  );
}
