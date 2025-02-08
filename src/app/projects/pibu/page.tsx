"use client";

import Image from "next/image";
import { useContext } from "react";

import AffinityMap from "@/app/components/affinity-map";
import CommentSection from "@/app/components/comment-section";
import DesignProcess from "@/app/components/design-process";
import Down from "@/app/components/down";
import Figma from "@/app/components/figma";
import Final from "@/app/components/final";
import Flow from "@/app/components/flow";
import Hero from "@/app/components/hero";
import KeySection from "@/app/components/key-section";
import OutlinedCard from "@/app/components/outlined-card";
import Paragraph from "@/app/components/paragraph";
import Persona from "@/app/components/persona";
import Project, { ProjectRefsContext } from "@/app/components/project";
import Section from "@/app/components/section";
import Subsection from "@/app/components/subsection";
import TaskFlowCard from "@/app/components/task-flow-card";
import UserNeed from "@/app/components/user-need";
import { handleCursorHoverStart, handleCursorHoverStop } from "@/app/cursor";
import Link from "next/link";
import Speech from "@/app/components/speech";
import UserNeeds from "@/app/components/user-needs";

export default function Resto() {
  const refs = useContext(ProjectRefsContext);
  return (
    <Project>
      <Hero
        title="Pibu"
        subtitle="Skincare Store Website"
        desc="A website to introduce a local business and expand their business."
        role="Product Designer"
        type="Responsive Web Design"
        timeline="May - June 2024"
        url="https://www.figma.com/proto/LV5sMpEKJ8JlL6TBeFPdVS/Capstone-3---End-to-End-Application?page-id=493%3A4780&node-id=493-9339&node-type=canvas&viewport=284%2C360%2C0.06&t=6NVbRlngR40WJKQQ-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=493%3A9506&show-proto-sidebar=1"
      >
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
      </Hero>
      <Section title="Introduction">
        <Subsection title="Background">
          <Paragraph>
            Pibu is a family-owned Korean skincare store located in New York
            City. They opened their store in December 2023, and they target
            individuals of <b>all genders in their 20s to 40s</b> and offer a
            variety of skincare products. Their customers are mainly local
            residents, and they are considering the development of a{" "}
            <b>website</b> and an <b>e-commerce platform</b> to expand their
            business. They are hoping to have a website that matches to their
            target customers, and their aesthetic of the store.
          </Paragraph>
        </Subsection>
        <Subsection title="Problems">
          <Paragraph md>
            Pibu has a clear target audience and brand aesthetic but struggles
            to align these with their website design. They are uncertain about
            the content that will encourage purchases and wish to create a
            unique, user-friendly website without relying on pre-made templates,
            ensuring they stand out from competitors.
          </Paragraph>
        </Subsection>
        <Subsection title="Solutions">
          <Paragraph md>
            Developing a website to increase brand awareness and drive online
            sales, focusing on e-commerce for business expansion while
            emphasizing a user-friendly design that aligns with Pibu’s brand
            identity and appeals to their target audience.
          </Paragraph>
        </Subsection>
      </Section>
      <Section>
        <Subsection title="Design Process">
          <DesignProcess
            research={["Competitive Analysis", "Survey", "User Interviews"]}
            define={[
              "Affinity Map",
              "User Personas",
              "Problem Statement",
              "Project Goals",
            ]}
            ideate={[
              "Feature Ideas",
              "Card Sort",
              "Sitemap",
              "Task & User Flows",
            ]}
            design={["Wireframes", "Branding", "Prototyping"]}
            test={["Usability Testing", "Iterations"]}
            nextSteps={["Learning", "Different Approach"]}
          />
        </Subsection>
      </Section>
      <Section title="Research" ref={refs?.research}>
        <Subsection title="Research Goal">
          <Paragraph md>
            Understanding which information is beneficial for users and what
            motivates them will enhance their desire to make purchases. These
            insights will encourage users to shop at Pibu, thereby increasing
            brand recognition and supporting business expansion.
          </Paragraph>
        </Subsection>
        <Subsection title="Understanding the Competition">
          <Paragraph>
            First, I conducted a competitive analysis to understand the
            structure and features of general skincare e-commerce sites. I
            compared two direct competitors specializing in K-beauty with one
            indirect competitor focusing on general skincare. Based on each
            site’s brand value and target audience, I identified how they
            present their websites.
          </Paragraph>
          <div className="py-[20px] flex justify-between">
            <Image
              src="/pibu/sentisenti.svg"
              alt="sentisenti"
              width={164}
              height={30}
            />
            <Image
              src="/pibu/masksheets.svg"
              alt="masksheets"
              width={164}
              height={30}
            />
            <Image
              src="/pibu/sephora.svg"
              alt="sephora"
              width={164}
              height={30}
            />
          </div>
          <Paragraph>
            While all e-commerce websites share basic functionalities, each one
            incorporates unique features tailored to their target users. Direct
            competitors have fewer products but offer a simple and very
            user-friendly layout. On the other hand, indirect competitors, with
            a broader range of brands and products, use icons and other design
            elements to make the vast amount of information more accessible.
          </Paragraph>
          <KeySection
            title="Key Features"
            cards={[
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
            ]}
          />
        </Subsection>
        <Subsection title="Exploring the Experiences of Purchasing Skincare Products">
          <Paragraph>
            I conducted a survey with <b>15 participants aged 25-44</b> to
            understand their interest in skincare products, the criteria they
            use, and how they make purchase decisions.
          </Paragraph>
          <CommentSection
            comments={[
              {
                comment:
                  "“I usually use Amazon or Target because I can check for discounts, view ingredient information, and read more honest reviews.”",
                avatar: "/avatars/participant-1.svg",
              },
              {
                comment:
                  "“I have had difficulties selecting the right skincare products because I didn’t know my skin type.” ",
                avatar: "/avatars/participant-2.svg",
                mirror: true,
              },
            ]}
          />
          <KeySection
            title="Key Findings"
            cards={[
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
                sublabel:
                  "are hard to determine when purchasing products online",
              },
            ]}
          />
        </Subsection>
      </Section>
      <Section title="Define" ref={refs?.define}>
        <Subsection title="Gaining a Deeper Understanding of User Needs and Pain Points">
          <Paragraph>
            I recorded key points from the surveys and user interviews on
            individual sticky notes and created an affinity map. Then, I
            categorized the information by topics and patterns.
          </Paragraph>
          <AffinityMap
            src="/pibu/affinity-map-1.svg"
            label="What is most challenging when choosing skincare products?"
            url="https://www.figma.com/board/O6slDgrnsFVZaBVJnSHu3k/Capstone-2---Responsive-Web-Design?node-id=174-1452&t=AeAMurRVSMPAt7Vk-1&fuid=855782041187973259"
            className="h-[535px] w-full relative"
          />
          <KeySection
            title="Key Findings"
            cards={[
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
            ]}
          />
        </Subsection>
        <Subsection title="Transforming Insights into Personas">
          <Paragraph>
            After conducting research, reviewing the findings, and organizing
            the data, I created a persona in the early stages of the design
            process to deepen my understanding of specific users and user needs.
          </Paragraph>
          <Persona
            src="/pibu/persona-1.jpeg"
            url="https://www.figma.com/design/RbkCKTmRORmmiispxyOpXz/Capstone-2---Responsive-Web-Design?node-id=0-1&t=Ezlc7eUJ1xCvo01W-1&fuid=855782041187973259"
          />
        </Subsection>
        <Subsection title="Exploring and Clarifying Solutions for User Needs">
          <Paragraph>
            To address specific user needs, I created a POV statement focused on
            skin type, as it is crucial for achieving the personas’ goals.
          </Paragraph>
          <OutlinedCard title="POV (Point Of View) statement">
            I’d like to explore ways to help people to find and understand their
            skin type because choosing the right skincare products becomes
            challenging without knowledge of their skin type.
          </OutlinedCard>
          <Down />
          <Paragraph>
            Then, I took the problem into a clear question that helps find
            creative and practical solutions.
          </Paragraph>
          <OutlinedCard title="HMW (How Might We) question">
            How might we help people to effectively choose the appropriate
            skincare products based on their skin type?
          </OutlinedCard>
        </Subsection>
      </Section>
      <Section title="Ideate" ref={refs?.ideate}>
        <Subsection title="Prioritizing Features that Align Business and User Needs">
          <Paragraph>
            Considering technical aspects and stakeholder input, I brainstormed
            key features aligning with business and user goals. A hybrid card
            sort with 37 cards and 7 participants helped refine the menu
            structure.
          </Paragraph>
          <div className="py-[20px] flex justify-between">
            <Speech src="/pibu/speech-bubble.svg" />
            <UserNeeds
              left={[
                { icon: "/icons/review.svg", label: "Reviews" },
                { icon: "/icons/star-hollow.svg", label: "Ratings" },
                { icon: "/icons/filter.svg", label: "Filter" },
                { icon: "/icons/magnifying-glass-thin.svg", label: "Search" },
              ]}
              right={[
                { icon: "/icons/check-2.svg", label: "Skin type checker" },
                { icon: "/icons/book.svg", label: "How to use the product" },
                {
                  icon: "/icons/side-by-side.svg",
                  label: "Side by side comparison",
                },
                { icon: "/icons/info.svg", label: "Detailed product info" },
              ]}
            />
          </div>
        </Subsection>
        <Subsection title="Designing the App Structure with a Sitemap">
          <Paragraph>
            Based on the card sort results, I created a sitemap for the website
            structure, ensuring easy access to product categories like skin type
            and concerns alongside the shop section.
          </Paragraph>
          <div className="space-y-[30px]">
            <div className="overflow-x-scroll scrollbar-always-visible">
              <div className="w-[137.95vw] h-[102.56vw] lg:w-[1000px] lg:h-[703px] relative">
                <Image src="/pibu/sitemap.svg" alt="sitemap" fill />
              </div>
            </div>
            <Figma href="https://www.figma.com/board/O6slDgrnsFVZaBVJnSHu3k/Capstone-2---Responsive-Web-Design?node-id=86-5125&t=AeAMurRVSMPAt7Vk-1&fuid=855782041187973259">
              View the Sitemap
            </Figma>
          </div>
        </Subsection>
        <Subsection title="Mapping Out User Needs and Goals">
          <Paragraph>
            To understand user needs and identify potential issues or confusing
            elements, I created a user flow.
          </Paragraph>
          <Flow
            label="Purchase the right products for your skin type"
            src="/pibu/task-flow.svg"
            url="https://www.figma.com/board/O6slDgrnsFVZaBVJnSHu3k/Capstone-2---Responsive-Web-Design?node-id=70-2700&t=AeAMurRVSMPAt7Vk-1&fuid=855782041187973259"
            className="py-[20px] w-[4723px] h-[1113px] relative"
          />
        </Subsection>
      </Section>
      <Section title="Design" ref={refs?.design}>
        <Subsection title="Designing and Refining Page Layouts for Usability">
          <Paragraph>
            After creating initial sketches, I developed mid-fi wireframes and
            conducted a usability test. Based on the results, I improved the
            designs to make them more user-friendly and easier for users to
            navigate.
          </Paragraph>
          <div className="py-[20px]">
            <Image
              src="/pibu/iteration-1.svg"
              alt="iteration"
              width={1000}
              height={600}
            />
          </div>
          <div className="py-[20px]">
            <Image
              src="/pibu/iteration-2.svg"
              alt="iteration"
              width={1000}
              height={600}
            />
          </div>
        </Subsection>
        <Subsection title="Applying Branding in Hi-Fi Wireframes">
          <Paragraph>
            To align the website with Pibu&apos;s established brand image, I
            confirmed the branding with stakeholders and incorporated the
            elements into the high-fidelity wireframes.
          </Paragraph>
          <div className="py-[20px] flex justify-between">
            <div className="w-full flex justify-between">
              <Image
                src="/pibu/hifi-1.png"
                alt="hifi"
                width={480}
                height={595}
                className="inline-block"
              />
              <Image
                src="/pibu/hifi-2.png"
                alt="hifi"
                width={200}
                height={540}
                className="inline-block mt-auto"
              />
              <Image
                src="/pibu/hifi-3.png"
                alt="hifi"
                width={200}
                height={540}
                className="inline-block mt-auto"
              />
            </div>
          </div>
          <Figma href="https://www.figma.com/design/RbkCKTmRORmmiispxyOpXz/Capstone-2---Responsive-Web-Design?node-id=931-7844&t=Ezlc7eUJ1xCvo01W-1&fuid=855782041187973259">
            View the Hi-Fi Wireframes
          </Figma>
        </Subsection>
      </Section>
      <Section title="Test" ref={refs?.test}>
        <Subsection title="Validating and Refining Designs Based on User Feedback">
          <Paragraph>
            I conducted usability testing with <b>6 participants</b> to confirm
            that the high-fidelity wireframes met user goals, refining the
            design through repeated testing and iterations to ensure smooth
            functionality on both desktop and mobile.
          </Paragraph>
          <div className="space-y-[5.13vw] lg:py-[20px] lg:space-y-[100px]">
            {[
              "/pibu/iteration-1.png",
              "/pibu/iteration-2.png",
              "/pibu/iteration-3.png",
              "/pibu/iteration-4.png",
            ].map((src, i) => (
              <Image
                key={i}
                src={src}
                alt="iteration"
                width={1000}
                height={400}
                className={`py-[2.56vw] lg:py-0 w-[500px] h-[200px] lg:w-[1000px] lg:h-[400px]`}
              />
            ))}
          </div>
        </Subsection>
        <Subsection title="Final Prototype">
          <Paragraph md>
            Skincare Store Website - A website to introduce a local business and
            expand their business
          </Paragraph>
          <div className={`py-[20px] space-y-[50px]`}>
            {[
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
                  default: [196, 400] as [number, number],
                  desktop: {
                    src: "/pibu/final-1.png",
                    className: "lg:w-[196px] lg:h-[400px]",
                  },
                  mobile: {
                    src: "/pibu/final-1.png",
                    className: "w-[100px] h-[200px]",
                  },
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
                  default: [196, 400] as [number, number],
                  desktop: {
                    src: "/pibu/final-2.png",
                    className: "lg:w-[196px] lg:h-[400px]",
                  },
                  mobile: {
                    src: "/pibu/final-2.png",
                    className: "w-[100px] h-[200px]",
                  },
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
                  default: [196, 400] as [number, number],
                  desktop: {
                    src: "/pibu/final-3.png",
                    className: "lg:w-[196px] lg:h-[400px]",
                  },
                  mobile: {
                    src: "/pibu/final-3.png",
                    className: "w-[100px] h-[200px]",
                  },
                },
                header:
                  "A comparison feature simplifies product selection for users",
                notes: [
                  "Enable better product choices",
                  "Easily see the differences between each item at a glance",
                ],
                vertical: true,
              },
            ].map(({ video, image, header, notes, vertical }, i) => (
              <Final
                key={i}
                video={video}
                image={image}
                header={header}
                notes={notes}
                vertical={vertical}
                wide
              />
            ))}
            <div className="flex justify-between">
              <Link
                href="https://www.figma.com/proto/RbkCKTmRORmmiispxyOpXz/Capstone-2---Responsive-Web-Design?page-id=597%3A7713&node-id=807-7005&node-type=canvas&viewport=373%2C-836%2C0.03&t=gMvi3WuZgZoYEoEd-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=807%3A7005&show-proto-sidebar=1"
                target="_blank"
                onMouseEnter={handleCursorHoverStart}
                onMouseLeave={handleCursorHoverStop}
              >
                <div
                  className={
                    "px-[60px] py-[15px] rounded-[75px] bg-brown3 text-[20px] font-semibold " +
                    "tracking-[.01em] inline-block"
                  }
                >
                  View Desktop Prototype
                </div>
              </Link>
              <Link
                href="https://www.figma.com/proto/RbkCKTmRORmmiispxyOpXz/Capstone-2---Responsive-Web-Design?page-id=1270%3A16466&node-id=1270-16467&node-type=canvas&viewport=182%2C302%2C0.02&t=N8ufLRQptDTfWbhu-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1270%3A16467&show-proto-sidebar=1"
                target="_blank"
                onMouseEnter={handleCursorHoverStart}
                onMouseLeave={handleCursorHoverStop}
              >
                <div
                  className={
                    "px-[60px] py-[15px] rounded-[75px] bg-brown3 text-[20px] font-semibold " +
                    "tracking-[.01em] inline-block "
                  }
                >
                  View Mobile Prototype
                </div>
              </Link>
            </div>
          </div>
        </Subsection>
      </Section>
      <Section title="Next Steps" ref={refs?.nextSteps}>
        <Subsection title="Learning">
          <Paragraph>
            This project gave me hands-on experience collaborating with
            stakeholders to design a website that helps users identify their
            skin type. The main challenge was balancing research with
            stakeholder feedback. The fast-changing cosmetics market highlights
            the need for continuous updates to keep the site user-friendly and
            support business growth.
          </Paragraph>
        </Subsection>
        <Subsection title="Improvement Opportunities">
          <Paragraph>
            Since many people seek convenience when purchasing skincare products
            online, the search function and checkout process need improvement.
            By enabling customers to quickly find the products they are looking
            for and reducing the hassle of entering information through card
            history, I can enhance customer satisfaction.
          </Paragraph>
        </Subsection>
      </Section>
    </Project>
  );
}
