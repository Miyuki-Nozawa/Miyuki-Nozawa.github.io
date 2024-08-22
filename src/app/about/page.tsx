import Image from "next/image";
import Text from "@/app/components/text";

const subheader = "font-manrope text-[2.8rem] tracking-widest font-bold";

export default function About() {
  return (
    <main className="flex flex-col justify-between p-16">
      <div className="font-manrope text-7xl font-bold mb-36">About Me</div>
      {/* Intro */}
      <div>
        <div className="flex space-x-7">
          <Image
            src="/about/niigata.png"
            alt="niigata"
            width={312}
            height={382}
          />
          <Image src="/about/tokyo.png" alt="tokyo" width={312} height={382} />
          <div className="w-1/2 text-[32px] pl-6 pr-20 font-light tracking-[.03em]">
            Hello. My name is Miyuki Nozawa. I am a UX/UI designer based in New
            York.
          </div>
        </div>
        <div className="flex">
          <Text className="w-1/2 pt-12 space-y-6 pr-7">
            <div>
              With a background in international business law, I have lived in
              Asia, Europe, and America, and I’ve worked in multiple
              international companies.
            </div>
            <div>
              This experience has allowed me to interact with people from
              various countries and deepen my understanding of cultural
              differences.
            </div>
          </Text>
          <div className="w-[312px] h-[382px] relative mr-8 my-auto">
            <Image
              src="/about/strasbourg.png"
              alt="strasbourg"
              className="object-cover"
              fill
            />
          </div>
          <div className="w-[312px] h-[382px] relative my-auto">
            <Image
              src="/about/newyork.png"
              alt="new york"
              className="object-cover"
              fill
            />
          </div>
        </div>
      </div>
      {/* Experiences */}
      <div className="mt-44 space-y-10">
        <div className={subheader}>My experiences</div>
        <Text className="w-[56%]">
          Across the various industries that I’ve worked in, such as fashion,
          textiles, cosmetics, and art, my roles have always involved elements
          of design.
        </Text>
        <div className="flex justify-between">
          <Image
            src="/about/experiences-1.png"
            alt="experiences"
            width={758}
            height={320}
          />
          <Image
            src="/about/experiences-2.png"
            alt="experiences"
            width={536}
            height={320}
          />
        </div>
        <div className="flex justify-between">
          <Image
            src="/about/experiences-3.png"
            alt="experiences"
            width={650}
            height={320}
          />
          <Text className="w-1/2 pl-4 flex items-center">
            I became motivated to improve the usability issues of a
            company&apos;s website, so I began studying web development. This
            led me to stumble upon the concepts of UX/UI for the first time. As
            I continued my studies in web development, I realized that I was
            actually more interested in the design aspect of building websites
            and applications, so I decided to pivot my focus completely to UX
            design.
          </Text>{" "}
        </div>
        <div className="flex">
          <Text className="w-1/2 pr-8 flex items-center">
            In the industries I&apos;ve worked in, I&apos;ve often engaged
            directly with consumers&apos; feedback and experimented to meet
            their needs. As a UX designer, conducting user tests is a
            significant part of problem-solving, and I believe my past
            experiences can be maximized in this role. Furthermore, I aim to
            leverage the knowledge I&apos;ve gained across various industries to
            assist in providing consumers with richer experiences through
            websites.
          </Text>
          <Image
            src="/about/experiences-4.png"
            alt="experiences"
            width={650}
            height={200}
          />
        </div>
      </div>
      {/* Goals */}
      <div className="my-44 space-y-10">
        <div className={subheader}>My goal</div>
        <Text className="w-1/2">
          We are now in an era where people around the world can access the same
          websites and applications from anywhere, and these have become an
          integral part of business.
        </Text>
        <div className="flex space-x-6">
          <Image
            src="/about/goal-1.png"
            alt="goal"
            width={650}
            height={772}
            className="rounded"
          />
          <div className="w-1/2 flex flex-col justify-between">
            <Text>
              Leveraging my background, I aspire to become a UX/UI designer who
              can address the pain points of our users and play an integral role
              in improving their experience.
            </Text>
            <Text>
              Furthermore, I look forward to working as part of a team and
              collaborating with individuals from diverse backgrounds while
              offering my own unique perspective.
            </Text>
            <div className="flex h-[55%] space-x-4">
              <div className="w-1/2 relative">
                <Image
                  src="/about/goal-2.png"
                  alt="goal"
                  className="rounded"
                  fill
                />
              </div>
              <div className="w-1/2 relative">
                <Image
                  src="/about/goal-3.png"
                  alt="goal"
                  className="rounded"
                  fill
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
