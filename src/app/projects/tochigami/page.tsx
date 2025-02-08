"use client";

import Image from "next/image";
import { useEffect, useContext, useState } from "react";

import DesignProcess from "@/app/components/design-process";
import Down from "@/app/components/down";
import Hero from "@/app/components/hero";
import KeySection from "@/app/components/key-section";
import List from "@/app/components/list";
import OutlinedCard from "@/app/components/outlined-card";
import Paragraph from "@/app/components/paragraph";
import Project, { ProjectRefsContext } from "@/app/components/project";
import Section from "@/app/components/section";
import Speech from "@/app/components/speech";
import Subsection from "@/app/components/subsection";
import UserNeeds from "@/app/components/user-needs";
import { AuthContext } from "@/app/authContext";
import { useRouter } from "next/navigation";

export default function Tochigami() {
  const refs = useContext(ProjectRefsContext);
  const { authed } = useContext(AuthContext);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!authed) {
      router.push("/");
    } else {
      setIsLoading(false);
    }
  }, [authed, router]);

  if (isLoading) {
    return null;
  }

  return (
    <Project>
      <Hero
        title="TOCHIGAMI"
        subtitle="Real Estate Agent Finder"
        desc="A new feature that connects users with the right real estate agents to help them find their ideal home"
        role="UX/UI Designer"
        type="Add a feature, redesign"
        timeline="Nov 2024 - Jan 2025"
      >
        <div className="flex justify-center py-[10px] lg:py-[20px] lg:pb-[50px]">
          <Image
            src="/tochigami/hero.png"
            alt="Tochigami"
            width={800}
            height={470}
          />
        </div>
      </Hero>
      <Section title="Introduction">
        <Subsection title="Background">
          <Paragraph>
            TOCHIGAMI is creating a web app to revolutionize real estate
            listings. Current real estate platforms lack <b>transparency</b> and{" "}
            <b>control</b>, preventing direct connections between <b>agents</b>{" "}
            and <b>consumers</b>. TOCHIGAMI addresses this by allowing agents to
            fully own their data and directly connect with consumers, enhancing
            trust and communication.
          </Paragraph>
        </Subsection>
        <Subsection title="Problems">
          <Paragraph md>
            The original web app provides limited details on key selection
            criteria such as qualifications, experience, and specialties,
            creating an information gap that undermines trust and complicates
            the process of choosing an agent.
          </Paragraph>
        </Subsection>
        <Subsection title="Solutions">
          <Paragraph md>
            Introduced a feature that allows agents to highlight their
            experience and personality, making it easier for consumers to
            connect with an agent who best matches their needs.
          </Paragraph>
        </Subsection>
      </Section>
      <Section>
        <Subsection title="Design Process">
          <DesignProcess
            research={["Target Users", "Competitive Analysis"]}
            define={["POV & HMW"]}
            ideate={["Feature Ideas", "Design Review"]}
            design={["Sketches", "Wireframes"]}
            nextSteps={["Testing", "Key Success Metrics"]}
          />
        </Subsection>
      </Section>
      <Section title="Research" ref={refs?.research}>
        <Subsection title="Target Users">
          <Paragraph>
            To ensure that both the research and proposed solutions were closely
            aligned with users’ needs, I revisited the target audience.
          </Paragraph>
          <div className="space-y-[10px]">
            <div className="inline-block px-[20px] py-[8px] bg-light-green rounded-[10px]">
              Agents
            </div>
            <Paragraph>
              Hawaii-based real estate agents, particularly those using the MLS
              (Multiple Listing Service) and looking to expand their listings.
            </Paragraph>
          </div>
          <div className="space-y-[10px]">
            <div className="inline-block px-[20px] py-[8px] bg-light-green rounded-[10px]">
              Consumers
            </div>
            <Paragraph>
              Individuals looking to purchase a home in Hawaii and those who
              want to find an agent based on their preferences.
            </Paragraph>
          </div>
        </Subsection>
        <Subsection title="Understanding the Competition and the Market Standard">
          <Paragraph>
            To identify the information users expect, the essential details
            about agents, and the features competitors have yet to implement, I
            compared well-known real estate websites in the US market. This
            competitive analysis helped me explore new approaches to better meet
            the needs of target users.
          </Paragraph>
          <div className="grid grid-cols-2 gap-x-4 gap-y-[10vw] md:grid-cols-4 md:gap-x-4">
            {["zillow", "realtor", "trulia", "compass"].map((img, i) => (
              <Image
                key={i}
                src={`/tochigami/${img}.svg`}
                alt={img}
                width={164}
                height={30}
                className="w-[113px] h-[22px] md:w-[164px] md:h-[30px]"
              />
            ))}
          </div>
          <KeySection
            title="Key Findings"
            cards={[
              {
                icon: "/icons/calendar.svg",
                iconSm: "/icons/paper-thin.svg",
                label: "Limited agent info and unclear profiles",
                sublabel: "results in a lack of transparency",
              },
              {
                icon: "/icons/gear.svg",
                iconSm: "/icons/sad.svg",
                label: "Deciding which agent is the best fit",
                sublabel: "is challenging for consumers",
              },
              {
                icon: "/icons/magnifying-glass-thin.svg",
                iconSm: "/icons/paper-cancel.svg",
                label: "None of the real estate website",
                sublabel:
                  "how agents can effectively market themselves to consumers",
              },
              {
                icon: "/icons/book.svg",
                iconSm: "/icons/check-thin.svg",
                label: "Years of experience, sales, and reviews ",
                sublabel:
                  "are the primary factors consumers consider when choosing an agent",
              },
            ]}
          />
        </Subsection>
      </Section>
      <Section title="Define" ref={refs?.define}>
        <Subsection title="Clarifying User Needs and Solutions">
          <Paragraph>
            Based on the research results and insights, I analyzed the needs of
            both agents and consumers and created POV statements for each.
          </Paragraph>
          <div className="space-x-[30px]">
            <div className="flex flex-col space-y-[5.1vw] lg:space-y-0 lg:flex-row lg:space-x-[30px]">
              {[
                {
                  title: "Agents' Needs",
                  text:
                    "Agents want to edit their profiles to highlight their experience, sales, and unique traits " +
                    "to stand out to consumers.",
                },
                {
                  title: "Consumers' Needs",
                  text:
                    "Consumers want to compare agents because the overwhelming number of options makes it hard to " +
                    "find the best fit.",
                },
              ].map(({ title, text }, i) => (
                <div
                  key={i}
                  className={
                    "flex flex-col space-y-[1.28vw] lg:space-y-[20px] p-[5.1vw] lg:p-[30px] rounded-[10px] " +
                    "lg:rounded-[20px] shadow-[0px_6px_3px_0px_rgba(234,230,221,0.25)] " +
                    "lg:shadow-[6px_6px_3px_0px_#EAE6DD] " +
                    "bg-white"
                  }
                >
                  <div
                    className={
                      "text-dark-brown text-[3.6vw] lg:text-[18px] font-medium lg:font-semibold " +
                      "tracking-[.01em]"
                    }
                  >
                    {title}
                  </div>
                  <div className="text-[3.1vw] lg:text-[18px] tracking-[.01em]">
                    {text}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Paragraph>
            Before moving into ideation, I synthesized all my research data and
            insights into a clear HMW statement to ensure that any proposed
            solutions directly address the core challenges users face.
          </Paragraph>
          <Down />
          <OutlinedCard title="HMW (How Might We) question">
            How might we help agents effectively showcase their expertise while
            enabling consumers to easily find and choose the right agent for
            their needs?
          </OutlinedCard>
        </Subsection>
      </Section>
      <Section title="Ideate" ref={refs?.ideate}>
        <Subsection title="Consider features that match the existing design and business model">
          <Paragraph>
            I brainstormed feature ideas and worked on seamlessly integrating
            them into the existing design.
          </Paragraph>
          <div className="py-[20px] space-y-[5.13vw] lg:flex lg:space-x-[30px] lg:space-y-0">
            <Speech src="/tochigami/speech-bubble.svg" />
            <UserNeeds
              left={[
                { icon: "/icons/ranking.svg", label: "Agent Ranking" },
                { icon: "/icons/pen.svg", label: "Custom Profile" },
                { icon: "/icons/image.svg", label: "Featured Post" },
                { icon: "/icons/review.svg", label: "Reviews" },
              ]}
              right={[
                { icon: "/icons/camera.svg", label: "Stories" },
                { icon: "/icons/activity.svg", label: "Recent Activities" },
                {
                  icon: "/icons/search.svg",
                  label: "Agent Search",
                },
                { icon: "/icons/message.svg", label: "Direct Message" },
              ]}
            />
          </div>
        </Subsection>
        <Subsection title="Reviewing the Current Design for Feature Implementation">
          <Paragraph>
            To efficiently add new features, I reviewed the existing design to
            determine which features best fit each page and considered how to
            create pages that help solve user problems.
          </Paragraph>
          <div className="flex flex-col py-[2.56vw] gap-[5.1vw] lg:py-[20px] lg:gap-[40px] lg:flex-row lg:flex-wrap">
            {[
              "/tochigami/review-1.png",
              "/tochigami/review-2.png",
              "/tochigami/review-3.png",
              "/tochigami/review-4.png",
            ].map((img, i) => (
              <Image key={i} width={480} height={341} src={img} alt="review" />
            ))}
          </div>
        </Subsection>
      </Section>
      <Section title="Design" ref={refs?.design}>
        <Subsection title="Sketching Out the Ideas">
          <div className="lg:py-[20px] flex flex-col lg:flex-row lg:gap-4">
            <div className="lg:w-[55%] flex flex-col lg:flex-row gap-4 justify-between lg:space-x-[40px]">
              <div className="flex-1">
                <Image
                  width={244}
                  height={325}
                  src="/tochigami/sketch-1.png"
                  alt="sketch"
                  className="w-full h-auto rounded-[10px]"
                />
              </div>
              <div className="flex-1">
                <Image
                  width={244}
                  height={325}
                  src="/tochigami/sketch-2.png"
                  alt="sketch"
                  className="w-full h-auto rounded-[10px]"
                />
              </div>
            </div>
            <div className="pt-[5.12vw] lg:pt-0 lg:w-[45%] flex flex-col gap-4 lg:pl-[40px] lg:space-y-[20px]">
              <Paragraph>
                I sketched feature ideas to see how they would fit with the
                original design. I focused on aligning new features with the
                existing layout and user flow.
              </Paragraph>
              <Paragraph>
                I integrated the most effective features into the{" "}
                <b>Homepage</b> and <b>Agent Profile</b> to address user pain
                points, ensuring they aligned with the product’s goals and
                overall user experience.
              </Paragraph>
            </div>
          </div>
        </Subsection>
        <Subsection title="Adding the Features to the Current Design">
          <Paragraph>
            I worked on integrating new features into the existing design,
            ensuring they were intuitive and helped consumers choose the right
            agent.
          </Paragraph>
          <div className="lg:py-[20px] space-y-[5.13vw] lg:space-y-[100px]">
            <div className="py-[2.56vw] lg:py-0 space-y-[5.13vw] lg:space-y-[50px]">
              <List
                title="Agent Ranking"
                items={[
                  "Helping consumers find the right agent among many options",
                  "Boosting agent visibility and consumer connection",
                ]}
              />
              <Image
                src="/tochigami/prototype-1.png"
                alt="prototype"
                width={1000}
                height={904}
                className="rounded-[20px]"
              />
            </div>
            <div className="py-[2.56vw] lg:py-0 space-y-[5.13vw] lg:space-y-[50px]">
              <List
                title="Agent Profile Page"
                items={[
                  "Customizable profiles highlight agents’ unique personalities and styles",
                  "Featured posts and listings help consumers find matching agents",
                  "Clear experience and achievements build consumer trust",
                ]}
              />
              <Image
                src="/tochigami/prototype-2.png"
                alt="prototype"
                width={1000}
                height={2003}
                className="rounded-[20px]"
              />
            </div>
            <div className="flex justify-end">
              <div
                className={
                  "w-full lg:w-auto lg:inline-flex bg-brown3 rounded-[22px] lg:rounded-[75px] px-[10px] " +
                  "py-[10px] lg:px-[60px] lg:py-[15px] justify-center items-center text-black " +
                  "text-[4vw] lg:text-[20px] font-medium lg:font-semibold tracking-[.01em] " +
                  "opacity-50 text-center"
                }
              >
                Live Site Coming Soon!
              </div>
            </div>
          </div>
        </Subsection>
      </Section>
      <Section title="Next Steps" ref={refs?.nextSteps}>
        <Subsection title="Testing">
          <Paragraph>
            The next step is beta testing, where we will gather user feedback to
            evaluate the design’s effectiveness, identify usability issues, and
            ensure the features meet the needs of both agents and consumers
            before launch.
          </Paragraph>
        </Subsection>
        <Subsection title="Key Success Metrics">
          <Paragraph>
            Success was measured based on design principles rather than user
            data, addressing pain points and improving usability. The design
            aligns with business goals, received positive internal feedback, and
            ensures consistency, scalability, and technical feasibility.
          </Paragraph>
        </Subsection>
      </Section>
    </Project>
  );
}
