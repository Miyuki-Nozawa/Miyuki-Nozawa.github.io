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
import Project, { ProjectRefsContext } from "@/app/components/project";
import Section from "@/app/components/section";
import Subsection from "@/app/components/subsection";
import { handleCursorHoverStart, handleCursorHoverStop } from "@/app/cursor";
import Link from "next/link";
import Flow from "@/app/components/flow";
import Speech from "@/app/components/speech";

export default function Resto() {
  const refs = useContext(ProjectRefsContext);
  return (
    <Project>
      <Hero
        title="Korean Air"
        subtitle="Mileage Optimizer"
        desc="A feature that allows users to easily and effectively utilize their mileage for various options."
        role="UX/UI Designer"
        type="Add a feature"
        timeline="April - May 2024"
        url="https://www.figma.com/proto/r91kC7CV7Rf6DdH7Dk6iQG/Capstone-1---Add-a-feature?page-id=74%3A269&node-id=97-342&node-type=frame&viewport=807%2C-264%2C0.07&t=jT6cyLgtvycuIhew-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=97%3A342&show-proto-sidebar=1"
      >
        <div className="py-[30px]">
          <Image
            src="/korean-air/hero.png"
            alt="Korean Air"
            width={1000}
            height={475}
          />
        </div>
      </Hero>
      <Section title="Introduction">
        <Subsection title="Background">
          <Paragraph>
            Korean Air, the flag carrier of South Korea, is{" "}
            <b>the largest airline in the country</b> by fleet size,
            international destinations, and flights. Serving{" "}
            <b>120 cities across 43 countries</b>, Korean Air ranked among the
            top 10 airlines globally with a <b>5-star rating</b>. In 2022, it
            transported over{" "}
            <b>4.7 million passengers on international flights</b> and more than
            6.2 million on domestic routes. The airline’s comprehensive mileage
            program allows customers to redeem points for flights, hotels, and
            various airport services.
          </Paragraph>
        </Subsection>
        <Subsection title="Problems">
          <Paragraph md>
            The Korean Air website makes it difficult for users to navigate and
            use their mileage points. Mileage information is unclear and spread
            across multiple pages, leading to confusion about how many miles are
            needed and what they can be used for.
          </Paragraph>
        </Subsection>
        <Subsection title="Solutions">
          <Paragraph md>
            Introducing an intuitive feature that clearly display mileage usage
            options and simplify the process of utilizing mileage, allowing
            Korean Air users to easily understand and redeem their points for
            flights, hotels, and services.
          </Paragraph>
        </Subsection>
      </Section>
      <Section>
        <Subsection title="Design Process">
          <DesignProcess
            research={["Competitive Analysis", "Survey", "User Interviews"]}
            define={["Affinity Map", "Problem Statement"]}
            ideate={["Feature Ideas", "Task & User Flow"]}
            design={["Wireframes", "Mid-Fi Testing"]}
            test={["Usability Testing", "Iterations", "Final Prototype"]}
            nextSteps={["Learning", "Another Approach"]}
          />
        </Subsection>
      </Section>
      <Section title="Research" ref={refs?.research}>
        <Subsection title="Research Goal">
          <Paragraph md>
            Understanding what users value most when using mileage rewards so
            that we can change the mileage display to make it easier to
            understand, use, and increase user satisfaction.
          </Paragraph>
        </Subsection>
        <Subsection title="Understanding the Competition">
          <>
            <Paragraph>
              Before the interviews, I conducted a competitive analysis of
              websites with mileage or points systems. I compared Korean Air
              with direct competitor Delta Air Lines and indirect competitors
              Expedia and American Express.
              <br />
              Through competitive analysis, I identified the need to clearly
              display the mileage or points required for redemption. Since each
              site has separate pages for checking mileage and viewing
              redemption options, users have to navigate back and forth between
              them, which disrupts smooth navigation.
            </Paragraph>
            <div className="py-[20px] flex flex-wrap justify-between gap-[30px]">
              {[
                "/korean-air/logo-sm.svg",
                "/korean-air/delta.svg",
                "/korean-air/expedia.svg",
                "/korean-air/amex.svg",
              ].map((icon, i) => (
                <Image
                  key={i}
                  src={icon}
                  alt={`Competitor ${i + 1}`}
                  width={222}
                  height={50}
                />
              ))}
            </div>
          </>
          <KeySection
            title="Key Features"
            cards={[
              {
                icon: "/icons/laptop.svg",
                iconSm: "/icons/laptop.svg",
                label: "Clear visibility of mileage or points",
                centered: true,
              },
              {
                icon: "/icons/fire.svg",
                iconSm: "/icons/fire.svg",
                label: "Features that enhance user motivation",
                centered: true,
              },
              {
                icon: "/icons/hamburger-2.svg",
                iconSm: "/icons/hamburger-2.svg",
                label: "Variety of redemption options",
                centered: true,
              },
              {
                icon: "/icons/file.svg",
                iconSm: "/icons/file.svg",
                label: "Clear display of redemption options",
                centered: true,
              },
            ]}
          />
        </Subsection>
        <Subsection title="Exploring Users’ Mileage Redemption Experience through Surveys and Interviews">
          <Paragraph>
            To better understand people’s experiences and difficulties about the
            mileage system, I conducted <b>surveys with 12 participants</b> and{" "}
            <b>user interviews with 5 participants</b>, who are familiar with
            airline’s mileage program.
          </Paragraph>
          <CommentSection
            comments={[
              {
                comment:
                  "“Redeeming mileage is a bit challenging because the website design is not good and complicates the process.”",
                avatar: "/avatars/participant-1.svg",
              },
              {
                comment:
                  "“I have no idea how much mileage I’ve accumulated and I don’t know what I can do with the miles.”",
                avatar: "/avatars/participant-2.svg",
                mirror: true,
              },
            ]}
          />
          <KeySection
            title="Key Findings"
            cards={[
              {
                icon: "/icons/gift-2.svg",
                label: "Redeeming miles for flight tickets",
                sublabel: "is the most popular way to use the mileage",
              },
              {
                icon: "/icons/research-2.svg",
                label: "Restaurant search methods",
                sublabel: "vary by age group",
              },
              {
                icon: "/icons/book-3.svg",
                label: "Understanding the mileage system",
                sublabel: "is difficult for users",
              },
              {
                icon: "/icons/file-2.svg",
                label: "Mileage display on Korean Air website",
                sublabel: "can cause confusion",
              },
            ]}
          />
        </Subsection>
        <Subsection title="Testing the Usability of Mileage Redemption on the Korean Air Website">
          <Paragraph>
            I conducted a usability test on the Korean Air website with{" "}
            <b>5 participants</b> to understand how users navigate the site,
            identify the difficulties they encounter, and determine areas that
            need improvement.
          </Paragraph>
          <CommentSection
            comments={[
              {
                comment:
                  "“I wanted to go to my page to see my mileage, but I didn't know where to click.“",
                avatar: "/avatars/participant-3.svg",
              },
              {
                comment:
                  "“It is difficult to see where the mileage is displayed, it would be nice if it was next to the name.” ",
                avatar: "/avatars/participant-4.svg",
                mirror: true,
              },
            ]}
          />
          <KeySection
            title="Key Findings"
            cards={[
              {
                icon: "/icons/gift-2.svg",
                label: "Mileage display on Korean Air website",
                sublabel: "can cause confusion",
              },
              {
                icon: "/icons/research-2.svg",
                label: "Simplifying the mileage redemption process",
                sublabel: "encourages users to earn and utilize their mileage",
              },
            ]}
          />
        </Subsection>
      </Section>
      <Section title="Define" ref={refs?.define}>
        <Subsection title="Gaining a Deeper Understanding of User Needs and Pain Points">
          <Paragraph>
            Through primary research, I gathered data on users’ interest, pain
            points in exchanging miles, and their understanding of the system.
            To synthesize this information, I recorded key points on sticky
            notes and grouped them into categories to identify patterns in their
            experiences and needs.
          </Paragraph>
          <AffinityMap
            src="/korean-air/affinity-map-2.svg"
            label="Pain points when using the Korean Air website"
            url="https://www.figma.com/board/reZSsCdxDbS1QbXJlNEqFR/Capstone-1---Adding-a-Feature?node-id=112-726&t=kbOQafEoUowSmyvq-1"
            className="w-[127.47vw] h-[94.84vw] lg:w-[754px] lg:h-[545px] relative"
          />
          <KeySection
            title="Key Findings"
            cards={[
              {
                label: "41% of participants",
                sublabel: "are not aware of required mileage for redemption",
              },
              {
                label: "Many participants",
                sublabel:
                  "had difficulty navigating the Korean Air website to locate the mileage redemption options",
              },
            ]}
          />
        </Subsection>
        <Subsection title="Exploring and Clarifying Solutions for User Needs">
          <Paragraph>
            To clarify the solutions needed to address specific user needs, I
            created two POV statements based on the personas. I chose one that
            focuses on confirming the mileage required for redemption, as it is
            the most crucial for achieving the personas’ goals.
          </Paragraph>
          <OutlinedCard title="POV (Point Of View) statement">
            I’d like to explore ways for people joining the Korean Air mileage
            program (SKYPASS) to understand at a glance what they can redeem
            their mileage for because many people may not know how many miles
            are needed for redemption, leading to a lack of motivation to
            accumulate mileage.
          </OutlinedCard>
          <Down />
          <Paragraph>
            Then, I took the problem into clear questions that help find
            creative and practical solutions.
          </Paragraph>
          <OutlinedCard title="HMW (How Might We) question">
            How might we allow SKYPASS members to check their accumulated
            mileage against the required mileage at once?
          </OutlinedCard>
        </Subsection>
      </Section>
      <Section title="Ideate" ref={refs?.ideate}>
        <Subsection title="Prioritizing Features that Align Business and User Needs">
          <Paragraph>
            I brainstormed key features that address the intersection of
            business and user goals, while also considering technical
            feasibility to ensure both are met.
          </Paragraph>
          <div className="py-[20px] space-y-[5.1vw] lg:flex lg:space-x-[30px] lg:space-y-0">
            <Speech src="/korean-air/speech-bubble.svg" />
            <div className="py-[2.5vw] lg:py-[20px] space-y-[2.5vw] lg:space-y-[30px] lg:max-w-[462px]">
              {[
                "Simplify the explanation about the mileage program",
                "Category icons for redemption options",
                "Mileage redemption info in my page",
                "Display mileage count on a booking calendar",
              ].map((label, i) => (
                <div key={i} className="flex space-x-[2.1vw] lg:space-x-[10px]">
                  <Image
                    alt="feature"
                    src="/icons/brown-diamond-2.svg"
                    width={27}
                    height={27}
                    className="mb-auto w-[4.62vw] h-[4.62vw] lg:w-[27px] lg:h-[27px]"
                  />
                  <span className="text-[3.6vw] lg:text-[18px] tracking-[.01em]">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Subsection>
        <Subsection title="Mapping Out User Needs and Goals">
          <Paragraph>
            To better understand user needs and identify potential pain points
            related to mileage display and checking current mileage, I created
            several user flows and task flows. These helped visualize the
            user&apos;s journey and pinpoint areas for improvement.
          </Paragraph>
          <Flow
            label="Check the required mileage for exchanging award tickets"
            src="/korean-air/user-flow.svg"
            url="https://www.figma.com/board/reZSsCdxDbS1QbXJlNEqFR/Capstone-1---Adding-a-Feature?node-id=78-2052&t=kbOQafEoUowSmyvq-1"
            className="w-[362vw] h-[96.44vw] lg:w-[2346px] lg:h-[625px] relative"
          />
        </Subsection>
      </Section>
      <Section title="Design" ref={refs?.design}>
        <Subsection title="Brainstorming and Sketching Ideas">
          <Paragraph>
            Based on user flows, task flows, and observations of how users want
            to check their mileage, I sketched features that can solve user’s
            problems. Then I developed more detailed layouts, digitizing them
            into mid-fidelity wireframes to make the designs more tangible.
          </Paragraph>
          <div className="flex justify-between overflow-x-scroll space-x-[2.1vw] py-[2.6vw] lg:py-0 lg:space-x-0">
            {[
              [
                "/korean-air/lofi-1.png",
                "Display the accumulated mileage number under the my page icon",
              ],
              [
                "/korean-air/lofi-2.png",
                "Display what the miles can be redeemed for and how many miles are needed in graphs",
              ],
              [
                "/korean-air/lofi-3.png",
                "Below the accumulated mileage number, display mileage redemption options",
              ],
            ].map(([img, desc], i) => (
              <div key={i} className="space-y-[10px] flex-shrink-0">
                <Image
                  src={img}
                  alt="lofi"
                  width={300}
                  height={215}
                  className={`rounded-[10px] w-[197px] h-[130px] lg:w-[300px] lg:h-[215px]`}
                />
                <div
                  className={`text-[2.6vw] lg:text-[18px] tracking-[.01em] max-w-[197px] lg:max-w-[300px]`}
                >
                  {desc}
                </div>
              </div>
            ))}
          </div>
        </Subsection>
        <Subsection title="Ensuring Users Understand the Design Layouts">
          <Paragraph>
            After creating the mid-fidelity wireframes, I conducted{" "}
            <b>an early-stage usability test with 3 participants</b> to evaluate
            their understanding of the design layouts and compare the
            interface&apos;s usability to the original Korean Air design. Based
            on the feedback, I iterated on the design to enhance
            user-friendliness and support users in achieving their goals.
          </Paragraph>
          <div className="py-[2.6vw] space-y-[3.5vw] lg:py-[20px] lg:space-y-[50px]">
            {["/korean-air/iteration-1.svg", "/korean-air/iteration-2.svg"].map(
              (img, i) => (
                <Image
                  key={i}
                  src={img}
                  alt="test"
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                />
              )
            )}
          </div>
        </Subsection>
        <Subsection title="Adding the Feature to Korean Air’s Website in Hi-Fi Wireframes">
          <div className="py-[20px] space-y-[30px]">
            <div className="flex flex-wrap justify-between gap-[30px]">
              {[
                "/korean-air/hifi-1.png",
                "/korean-air/hifi-2.png",
                "/korean-air/hifi-3.png",
                "/korean-air/hifi-4.png",
              ].map((img, i) => (
                <Image key={i} src={img} alt="final" width={480} height={280} />
              ))}
            </div>
            <Figma href="https://www.figma.com/design/r91kC7CV7Rf6DdH7Dk6iQG/Capstone-1---Add-a-feature?node-id=539-3694&t=7ZhVcoHfPaWSlAut-1">
              View the Hi-Fi Wireframes
            </Figma>
          </div>
        </Subsection>
      </Section>
      <Section title="Test" ref={refs?.test}>
        <Subsection title="Testing and Refining Designs to Create User-Centric Solutions">
          <Paragraph>
            To confirm whether high-fidelity wireframes can actually achieve
            user goals, I conducted <b>usability testing</b> with{" "}
            <b>5 participants aged between 27-68</b>.
          </Paragraph>
          <div className="space-y-[5.13vw] lg:py-[20px] lg:space-y-[100px]">
            {[
              {
                default: [1000, 355],
                desktop: {
                  src: "/korean-air/iterating-1.svg",
                  className: "lg:w-[1000px] lg:h-[355px]",
                },
                mobile: {
                  src: "/korean-air/iterating-1.svg",
                  className: "w-[600px] h-[215px]",
                },
              },
              {
                default: [1000, 474],
                desktop: {
                  src: "/korean-air/iterating-2.svg",
                  className: "lg:w-[1000px] lg:h-[474px]",
                },
                mobile: {
                  src: "/korean-air/iterating-2.svg",
                  className: "w-[600px] h-[215px]",
                },
              },
              {
                default: [1000, 355],
                desktop: {
                  src: "/korean-air/iterating-3.svg",
                  className: "lg:w-[1000px] lg:h-[355px]",
                },
                mobile: {
                  src: "/korean-air/iterating-3.svg",
                  className: "w-[600px] h-[215px]",
                },
              },
            ].map((image, i) => (
              <div key={i}>
                <Image
                  src={image.desktop.src}
                  alt="iteration"
                  width={image.default[0]}
                  height={image.default[1]}
                  className={`hidden lg:block ${image.desktop.className}`}
                />
                <Image
                  src={image.mobile.src}
                  alt="iteration"
                  width={image.default[0]}
                  height={image.default[1]}
                  className={`lg:hidden py-[2.56vw] ${image.mobile.className}`}
                />
              </div>
            ))}
          </div>
        </Subsection>
        <Subsection title="Final Prototype">
          <Paragraph md>
            Mileage Optimizer - A feature that allows users to easily and
            effectively utilize their mileage for various options
          </Paragraph>
          <div className={`py-[20px] space-y-[50px]`}>
            {[
              {
                video: {
                  src: "/korean-air/final-1.mp4",
                  className: "w-[500px] h-[323px]",
                },
                header: "Display miles under the account icon",
                notes: [
                  "Easily check your mileage at a glance",
                  "Clearly show that mileage actions can be done from the account page",
                ],
                wide: true,
              },
              {
                video: {
                  src: "/korean-air/final-2.mp4",
                  className: "w-[500px] h-[323px]",
                },
                header:
                  "Show the miles needed to exchange for tickets of frequently used flights on the homepage",
                notes: [
                  "Make it easy to check the miles needed for ticket exchanges",
                ],
                mirror: true,
                wide: true,
              },
              {
                video: {
                  src: "/korean-air/final-3.mp4",
                  className: "w-[500px] h-[323px]",
                },
                header: "Display of mileage redemption options",
                notes: [
                  "Display what the mileage can be used for and how much more is needed",
                  "Increase user motivation to save or use mileage",
                ],
                wide: true,
              },
            ].map(({ video, header, notes, mirror, wide }, i) => (
              <Final
                key={i}
                video={video}
                header={header}
                notes={notes}
                mirror={mirror}
                wide={wide}
              />
            ))}
            <div>
              <Link
                href="https://www.figma.com/proto/r91kC7CV7Rf6DdH7Dk6iQG/Capstone-1---Add-a-feature?page-id=74%3A269&node-id=97-342&node-type=frame&viewport=807%2C-264%2C0.07&t=jT6cyLgtvycuIhew-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=97%3A342&show-proto-sidebar=1"
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
        <Subsection title="Learning">
          <Paragraph>
            The goal of this project was to help Korean Air users understand and
            effectively utilize their mileage. Since the research participants
            were not necessarily Korean Air users, I aimed to address the needs
            of both current and potential users. The most challenging part of
            the process was designing new features without disrupting the
            existing website’s design and functionality. Through repeated
            usability testing, I was able to gradually align with user goals,
            enabling them to more easily see how they could use their mileage
            compared to the existing website. This iterative usability testing
            process was crucial in refining my approach and ensuring that the
            final product effectively met user needs. It became clear that
            reflecting the users’ voices is essential for designing
            user-friendly features, leading to the creation of better products.
          </Paragraph>
        </Subsection>
        <Subsection title="Opportunities for Enhancement">
          <Paragraph>
            On the Korean Air website, it is possible to book flights using
            mileage. However the number of miles required may vary depending on
            the date, and users need to check these mile amounts on a separate
            page, making smooth mileage reservations difficult. To avoid
            lowering user motivation, it is key to check the availability of
            mileage bookings and the required miles at the same time. These
            issues need to be addressed to design more user-centric features.
          </Paragraph>
        </Subsection>
      </Section>
    </Project>
  );
}
