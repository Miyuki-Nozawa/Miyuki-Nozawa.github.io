"use client";

import Image from "next/image";
import { useContext } from "react";

import AffinityMap from "@/app/components/affinity-map";
import CommentSection from "@/app/components/comment-section";
import DesignProcess from "@/app/components/design-process";
import Down from "@/app/components/down";
import Figma from "@/app/components/figma";
import Final from "@/app/components/final";
import Hero from "@/app/components/hero";
import KeySection from "@/app/components/key-section";
import OutlinedCard from "@/app/components/outlined-card";
import Paragraph from "@/app/components/paragraph";
import Persona from "@/app/components/persona";
import Project, { ProjectRefsContext } from "@/app/components/project";
import Section from "@/app/components/section";
import Subsection from "@/app/components/subsection";
import UserNeed from "@/app/components/user-need";
import { handleCursorHoverStart, handleCursorHoverStop } from "@/app/cursor";
import Link from "next/link";
import Flow from "@/app/components/flow";
import Speech from "@/app/components/speech";
import UserNeeds from "@/app/components/user-needs";

export default function Resto() {
  const refs = useContext(ProjectRefsContext);
  return (
    <Project>
      <Hero
        title="Resto"
        subtitle="Dining App in Japan"
        desc="A mobile app that simplifies restaurant discovery and reservation management for travelers in Japan."
        role="Product Designer"
        type="End-to-end application"
        timeline="June - Aug 2024"
        url="https://www.figma.com/proto/LV5sMpEKJ8JlL6TBeFPdVS/Capstone-3---End-to-End-Application?page-id=493%3A4780&node-id=493-9339&node-type=canvas&viewport=284%2C360%2C0.06&t=6NVbRlngR40WJKQQ-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=493%3A9506&show-proto-sidebar=1"
      >
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
      </Hero>
      <Section title="Introduction">
        <Subsection title="Background">
          <Paragraph>
            After the pandemic, travel has become more accessible, allowing many
            people to explore various countries. According to a World Economic
            Forum report, <b>Japan is one of the best tourist destinations</b>{" "}
            for 2024, with <b>9.62 million foreign tourists</b> visiting in
            2023. Many people look forward to experiencing Japan&apos;s food
            culture, but for those unfamiliar with the language and culture,{" "}
            <b>
              finding and booking suitable restaurants or cafes can be
              challenging
            </b>
            . Additionally, organizing all the reservations and saved
            restaurants across different apps can be disorganized and sometimes
            difficult.
          </Paragraph>
        </Subsection>
        <Subsection title="Problems">
          <Paragraph md>
            Travelers often face difficulties in discovering suitable
            restaurants in Japan and managing their reservations efficiently.
          </Paragraph>
        </Subsection>
        <Subsection title="Solutions">
          <Paragraph md>
            Developing an app that allows travelers to search for restaurants
            that match their preferences and manage reservations easily, without
            being hindered by language barriers.
          </Paragraph>
        </Subsection>
      </Section>
      <Section>
        <Subsection title="Design Process">
          <DesignProcess
            research={["Competitive Analysis", "Survey", "User Interviews"]}
            define={["Affinity Map", "User Persona", "Problem Statement"]}
            ideate={[
              "Feature Ideas",
              "Card Sort",
              "Sitemap",
              "Task & User Flows",
            ]}
            design={["Wireframes", "Mid-fi Testing"]}
            test={["Usability Testing", "Iterations", "Final Prototype"]}
            nextSteps={["Improvement"]}
          />
        </Subsection>
      </Section>
      <Section title="Research" ref={refs?.research}>
        <Subsection title="Research Goal">
          <Paragraph md>
            Understanding what users prioritize when searching for restaurants,
            along with their experiences and challenges, including issues with
            reservations despite language barriers.
          </Paragraph>
        </Subsection>
        <Subsection title="Understanding the Competition">
          <>
            <div className="flex space-x-[30px]">
              <Paragraph>
                Before diving into the interview, I compared two direct
                competitors (Japanese reservation apps) and one indirect
                competitor (a well-known American reservation app) to understand
                what features are available in existing apps.
                <br />
                <br />
                The Japanese apps are strong in search and details but have
                unclear reservation system, while the American app focuses on a
                smooth, modern reservation process instead of detailed
                descriptions.
              </Paragraph>
              <div className="flex flex-wrap min-w-[25%] space-x-[20px] justify-center">
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
            </div>
          </>
          <KeySection
            title="Key Features"
            cards={[
              {
                icon: "/icons/calendar.svg",
                iconSm: "/icons/calendar-thin.svg",
                label: "Simple reservation system",
                centered: true,
              },
              {
                icon: "/icons/gear.svg",
                iconSm: "/icons/gear-thin.svg",
                label: "Flexible reservation methods",
                centered: true,
              },
              {
                icon: "/icons/magnifying-glass-thin.svg",
                iconSm: "/icons/magnifying-glass-thin-2.svg",
                label: "User-friendly search function",
                centered: true,
              },
              {
                icon: "/icons/book.svg",
                iconSm: "/icons/book-thin.svg",
                label: "Guide to popular spots and culture",
                centered: true,
              },
            ]}
          />
        </Subsection>
        <Subsection title="Exploring Travel Dining Experiences through Surveys and User Interviews">
          <Paragraph>
            To understand travelers’ interests and priorities regarding dining
            and personal experiences, I conducted{" "}
            <b>surveys with 17 participants</b> and{" "}
            <b>user interviews with 5 participants</b>, all of whom are
            interested in traveling to Japan or have previously visited the
            country.
          </Paragraph>
          <CommentSection
            comments={[
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
            ]}
          />
          <KeySection
            title="Key Findings"
            cards={[
              {
                icon: "/icons/star-hollow.svg",
                label: "Local tips & reviews",
                sublabel:
                  "can be the deciding factor when choosing a restaurant",
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
            ]}
          />
        </Subsection>
      </Section>
      <Section title="Define" ref={refs?.define}>
        <Subsection title="Gaining a Deeper Understanding of User Needs and Pain Points">
          <Paragraph>
            I recorded the points and ideas obtained from the surveys and user
            interviews on individual sticky notes. Then I grouped them by
            interview topics, further categorized them into patterns, and
            created an affinity map.
          </Paragraph>
          <AffinityMap
            label="What criteria do you use when selecting restaurants?"
            src="/resto/affinity-map-2.svg"
            url="https://www.figma.com/board/63QeyiJMgUu0SL6h2rmDcv/Capstone-3---End-to-End-Application?node-id=90-2022&t=Rh2UA7lbJbDJRhGN-1"
            className="w-[127.47vw] h-[94.84vw] lg:w-full lg:h-[545px] relative"
          />
          <KeySection
            title="Key Findings"
            cards={[
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
            ]}
          />
        </Subsection>
        <Subsection title="Transforming Insights into Personas">
          <Paragraph>
            By gaining insights through surveys, user interviews, and affinity
            mapping, I created a user persona to highlight key patterns.
          </Paragraph>
          <Persona
            src="/resto/persona-1.jpeg"
            url="https://www.figma.com/design/LV5sMpEKJ8JlL6TBeFPdVS/Capstone-3---End-to-End-Application?node-id=0-1&t=6g8QSShYxUqXAJml-1"
          />
        </Subsection>
        <Subsection title="Exploring and Clarifying Solutions for User Needs">
          <Paragraph>
            To clarify the solutions needed to address specific user needs, I
            created two POV statements based on the personas. Among them, I
            selected the POV focusing on the language barrier and managing
            restaurant lists, as these were identified as significant challenges
            for many users.
          </Paragraph>
          <OutlinedCard title="POV (Point Of View) statement">
            I’d like to explore ways to propose a streamlined and functional
            reservation system catering to travelers who face challenges with
            language barriers during restaurant booking or encounter issues
            managing reservations.
          </OutlinedCard>
          <Down />
          <Paragraph>
            Then, I took the problems into clear questions that help find
            creative and practical solutions.
          </Paragraph>
          <OutlinedCard title="HMW (How Might We) question">
            How might we design a reservation system that easily accommodates
            people facing language barriers, ensuring smooth booking
            experiences?
          </OutlinedCard>
        </Subsection>
      </Section>
      <Section title="Ideate" ref={refs?.ideate}>
        <Subsection title="Prioritizing Features that Align Business and User Needs">
          <Paragraph>
            I brainstormed key features that address the intersection of
            business and user goals, considering technical feasibility, and used
            a card sort to determine the site structure.
          </Paragraph>
          <div className="py-[20px] space-y-[5.1vw] lg:flex lg:space-x-[30px] lg:space-y-0">
            <Speech src="/resto/speech-bubble.svg" />
            <UserNeeds
              left={[
                { icon: "/icons/ideate-filter.svg", label: "Filter" },
                { icon: "/icons/ideate-search.svg", label: "Search" },
                { icon: "/icons/ideate-map.svg", label: "Map" },
                { icon: "/icons/ideate-bell.svg", label: "Notification" },
              ]}
              right={[
                { icon: "/icons/ideate-star.svg", label: "Reviews & Ratings" },
                {
                  icon: "/icons/ideate-smile.svg",
                  label: "Utilization of icons",
                },
                { icon: "/icons/ideate-a.svg", label: "Language Option" },
                {
                  icon: "/icons/ideate-calendar.svg",
                  label: "Simple Reservation",
                },
              ]}
            />
          </div>
        </Subsection>
        <Subsection title="Designing the App Structure with a Sitemap">
          <Paragraph>
            Based on the results of the card sort and research showing that
            travelers struggle with searching for restaurants and managing
            reservations, I designed a sitemap to structure the app.
          </Paragraph>
          <div className="space-y-[30px]">
            <div className="overflow-x-scroll scrollbar-always-visible">
              <div className="w-[137.95vw] h-[102.56vw] lg:w-[1000px] lg:h-[703px] relative">
                <Image src="sitemap" alt="sitemap" fill />
              </div>
            </div>
            <Figma href="https://www.figma.com/board/63QeyiJMgUu0SL6h2rmDcv/Capstone-3---End-to-End-Application?node-id=35-1840&t=Rh2UA7lbJbDJRhGN-1">
              View the Sitemap
            </Figma>
          </div>
        </Subsection>
        <Subsection title="Mapping out User Needs and Goals">
          <Paragraph>
            To better understand user needs and identify potential pain points
            or confusing elements related to the “search” and “reservation”
            processes, I created several user flows and task flows. This helped
            visualize the user’s journey and pinpoint areas for improvement.
          </Paragraph>
          <Flow
            label="Discover restaurants and make a reservation"
            src="/resto/user-flow.svg"
            url="https://www.figma.com/board/63QeyiJMgUu0SL6h2rmDcv/Capstone-3---End-to-End-Application?node-id=80-1978&t=Rh2UA7lbJbDJRhGN-1"
            className="w-[161.28vw] h-[33.33vw] lg:w-[4626px] lg:h-[875px] relative"
          />
        </Subsection>
      </Section>
      <Section title="Design" ref={refs?.design}>
        <Subsection title="Exploring Ideas">
          <Paragraph>
            I created specific design layouts based on the user flow, task flow,
            and observations of how users prefer to search for and make
            reservations effectively.
          </Paragraph>
          <div className="pb-[2.6vw] lg:pb-[20px] space-y-[5.1vw] lg:space-y-[30px]">
            <div className="flex justify-between overflow-x-scroll space-x-[2.1vw] py-[2.6vw] lg:py-0 lg:space-x-0">
              {[
                "/resto/lofi-1.jpg",
                "/resto/lofi-2.jpg",
                "/resto/lofi-3.jpg",
              ].map((img, i) => (
                <div key={i} className="space-y-[10px] flex-shrink-0">
                  <Image
                    src={img}
                    alt="lofi"
                    width={315}
                    height={400}
                    className={`rounded-[10px] lg:w-[315px] lg:h-[400px] w-[197px] h-[250px]`}
                  />
                </div>
              ))}
            </div>
          </div>
        </Subsection>
        <Subsection title="Ensuring Users Understand the Design Layouts">
          <Paragraph>
            After creating the mid-fidelity wireframes, I conducted a quick
            usability test to evaluate whether users understood the design
            layouts. Based on the feedback, I made iterative improvements to
            enhance clarity and usability.
          </Paragraph>
          <div className="lg:hidden py-[2.6vw] space-y-[3.5vw]">
            {[
              "/resto/iteration-1-sm.svg",
              "/resto/iteration-2-sm.svg",
              "/resto/iteration-3-sm.svg",
            ].map((img, i) => (
              <Image
                key={i}
                src={img}
                alt="test"
                width={0}
                height={0}
                style={{ width: "100%", height: "auto" }}
              />
            ))}
          </div>
          <div className="hidden lg:block py-[20px] space-y-[50px]">
            {[
              "/resto/iteration-1.svg",
              "/resto/iteration-2.svg",
              "/resto/iteration-3.svg",
            ].map((img, i) => (
              <Image
                key={i}
                src={img}
                alt="test"
                width={0}
                height={0}
                style={{ width: "100%", height: "auto" }}
              />
            ))}
          </div>
        </Subsection>
        <Subsection title="Applying Japanese Branding to Hi-Fi Designs">
          <div className="lg:py-[20px] space-y-[2.56vw] lg:space-y-[30px]">
            <div className="py-[2.56vw] lg:py-0 flex flex-wrap gap-y-[2.56vw] lg:flex-nowrap justify-between">
              {[
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
              ].map((img, i) => (
                <Image
                  key={i}
                  src={img.src}
                  alt="branding"
                  width={img.default[0]}
                  height={img.default[1]}
                  className={`mt-auto ${img.mobile} ${img.desktop}`}
                />
              ))}
            </div>
            <Figma href="https://www.figma.com/design/LV5sMpEKJ8JlL6TBeFPdVS/Capstone-3---End-to-End-Application?node-id=692-48559&t=6g8QSShYxUqXAJml-1">
              View the Hi-Fi Wireframes
            </Figma>
          </div>
        </Subsection>
      </Section>
      <Section title="Test" ref={refs?.test}>
        <Subsection title="Testing and Refining Designs to Create User-Centric Solutions">
          <Paragraph>
            To address users’ challenges with navigating the app, finding
            restaurants, and making reservations, I conducted usability testing
            to gain insights into their interactions. Based on the feedback, I
            iterated on the design to simplify the process and better meet user
            needs, ensuring a more seamless experience.
          </Paragraph>
          {[
            ["/resto/iteration-1.png", "/resto/iteration-1-sm.png"],
            ["/resto/iteration-2.png", "/resto/iteration-2-sm.png"],
            ["/resto/iteration-3.png", "/resto/iteration-3-sm.png"],
          ].map(([desktop, mobile], i) => (
            <>
              <Image
                key={`desktop-${i}`}
                src={desktop}
                alt="iteration"
                width={1000}
                height={512}
                className="hidden lg:block lg:w-[1000px] lg:h-[512px]"
              />
              <Image
                key={`mobile-${i}`}
                src={mobile}
                alt="iteration"
                width={1000}
                height={512}
                className="lg:hidden py-[2.56vw] w-[70.26vw] h-auto"
              />
            </>
          ))}
        </Subsection>
        <Subsection title="Final Prototype">
          <Paragraph md>
            Dining App in Japan - A mobile app that simplifies restaurant
            discovery and reservation management for travelers in Japan
          </Paragraph>
          <div className="py-[20px] space-y-[50px]">
            {[
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
            ].map(({ video, header, notes, mirror }, i) => (
              <Final
                key={i}
                video={video}
                header={header}
                notes={notes}
                mirror={mirror}
              />
            ))}
            <div>
              <Link
                href="https://www.figma.com/proto/LV5sMpEKJ8JlL6TBeFPdVS/Capstone-3---End-to-End-Application?page-id=493%3A4780&node-id=493-9339&node-type=canvas&viewport=284%2C360%2C0.06&t=6NVbRlngR40WJKQQ-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=493%3A9506&show-proto-sidebar=1"
                target="_blank"
                onMouseEnter={handleCursorHoverStart}
                onMouseLeave={handleCursorHoverStop}
              >
                <div
                  className={
                    "bg-brown3 font-semibold tracking-[.01em] " +
                    "flex rounded-[22px] text-[4.10vw] w-[70.26vw] h-[11.28vw] items-center justify-center " +
                    "lg:inline-block lg:w-auto lg:h-auto lg:px-[60px] lg:py-[15px] lg:rounded-[75px] lg:text-[20px]"
                  }
                >
                  View Hi-fi Prototype
                </div>
              </Link>
            </div>
          </div>
        </Subsection>
      </Section>
      <Section title="Next Steps" ref={refs?.nextSteps}>
        <Subsection title="Opportunities for Enhancement">
          <div className="space-y-[5.13vw] lg:space-y-[50px]">
            <div className="space-y-[0.69vw] lg:space-y-[10px]">
              <div className="text-[3.65vw] lg:text-[22px] font-medium tracking-[.01em]">
                Search Function
              </div>
              <Paragraph>
                The current search function in RESTO allows users to explore
                restaurants in various ways, but adding an AI-powered
                recommendation system could improve the experience by suggesting
                options based on search history, favorites, or similar choices
                for a more personalized and efficient search.
              </Paragraph>
            </div>
            <div className="space-y-[0.69vw] lg:space-y-[10px]">
              <div className="text-[3.65vw] lg:text-[22px] font-medium tracking-[.01em]">
                Multilingual Support
              </div>
              <Paragraph>
                Currently, users can find restaurants with English support and
                make reservations without language barriers. Expanding language
                options and adding translation features would make RESTO more
                inclusive, allowing non-English speakers to navigate and book
                reservations easily.
              </Paragraph>
            </div>
          </div>
        </Subsection>
      </Section>
    </Project>
  );
}
