import Definition from "@/app/components/definition";
import DiamondHeadedList from "@/app/components/diamond-headed-list";
import DiamondHeader from "@/app/components/diamond-header";
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
import Text from "@/app/components/text";
import Transition from "@/app/components/transition";
import Image from "next/image";
import Link from "next/link";

export default function Gengo() {
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
              <Image
                src="/icons/down-arrow.svg"
                alt="down arrow"
                width={75}
                height={100}
                className="mx-auto"
              />
              {/* key findings */}
              <div className="px-24 py-12 space-y-7 rounded-3xl border-dark-green border-2">
                <div className="text-3xl font-bold tracking-[.02em]">
                  Key findings
                </div>
                <ul className="list-disc list-outside text-[1.6rem] tracking-[.02em] pl-6 space-y-1">
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
        <Image
          src="/icons/down-arrow.svg"
          alt="down arrow"
          width={75}
          height={100}
          className="mx-auto"
        />
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
          img="/resto/persona1.png"
        />
        <Persona
          title="Persona 2"
          desc={
            "Sarah Laine, a 26-year-old interior designer from New York, is planning her first trip to Japan with " +
            "friends and is excited to explore Japanese cuisine. She faces challenges managing and sharing " +
            "restaurant reservations among her group and is worried about keeping track of them amidst a packed " +
            "schedule. Her goals include visiting many tourist spots and sticking to their travel plan."
          }
          img="/resto/persona2.png"
        />
        <FigmaLink href="">View the personas</FigmaLink>
      </Section>
    </div>
  );
}
