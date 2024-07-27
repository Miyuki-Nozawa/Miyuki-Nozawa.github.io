import Image from "next/image";

const subheader = "font-manrope text-[2.8rem] tracking-widest font-bold";
const paragraph = "text-2xl tracking-.03em font-light leading-9";

export default function About() {
  return (
    <main className="flex flex-col justify-between p-16">
      <div className="font-manrope text-7xl font-bold mb-36">About Me</div>
      {/* Intro */}
      <div>
        <div className="flex space-x-7">
          <Image
            alt="niigata"
            src="/about/niigata.png"
            width={312}
            height={382}
          />
          <Image alt="tokyo" src="/about/tokyo.png" width={312} height={382} />
          <div className="w-1/2 text-[32px] pl-6 pr-20 font-light tracking-.03em">
            Hello. My name is Miyuki Nozawa. I am a UX/UI designer based in New
            York.
          </div>
        </div>
        <div className="flex">
          <div className={`w-1/2 pt-12 space-y-6 pr-7 ${paragraph}`}>
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
          </div>
          <Image
            alt="niigata"
            src="/about/niigata.png"
            width={312}
            height={382}
            className="mr-8"
          />
          <Image alt="tokyo" src="/about/tokyo.png" width={312} height={382} />
        </div>
      </div>
      {/* Experiences */}
      <div className="mt-44 space-y-10">
        <div className={subheader}>My experiences</div>
        <div className={`w-[56%] ${paragraph}`}>
          Across the various industries that I’ve worked in, such as fashion,
          textiles, cosmetics, and art, my roles have always involved elements
          of design.
        </div>
        <div className="flex justify-between">
          <Image
            alt="experiences"
            src="/about/experiences-1.png"
            width={758}
            height={320}
          />
          <Image
            alt="experiences"
            src="/about/experiences-2.png"
            width={536}
            height={320}
          />
        </div>
        <div className="flex justify-between">
          <Image
            alt="experiences"
            src="/about/experiences-3.png"
            width={650}
            height={320}
          />
          <div className={`w-1/2 pl-4 ${paragraph} flex items-center`}>
            I became motivated to improve the usability issues of a company's
            website, so I began studying web development. This led me to stumble
            upon the concepts of UX/UI for the first time. As I continued my
            studies in web development, I realized that I was actually more
            interested in the design aspect of building websites and
            applications, so I decided to pivot my focus completely to UX
            design.
          </div>
        </div>
        <div className="flex">
          <div className={`w-1/2 pr-8 ${paragraph} flex items-center`}>
            In the industries I've worked in, I've often engaged directly with
            consumers' feedback and experimented to meet their needs. As a UX
            designer, conducting user tests is a significant part of
            problem-solving, and I believe my past experiences can be maximized
            in this role. Furthermore, I aim to leverage the knowledge I've
            gained across various industries to assist in providing consumers
            with richer experiences through websites.
          </div>
          <Image
            alt="experiences"
            src="/about/experiences-4.png"
            width={650}
            height={200}
          />
        </div>
      </div>
      {/* Goals */}
      <div className="my-44 space-y-10">
        <div className={subheader}>My goal</div>
        <div className={`w-1/2 ${paragraph}`}>
          We are now in an era where people around the world can access the same
          websites and applications from anywhere, and these have become an
          integral part of business.
        </div>
        <div className="flex space-x-6">
          <Image
            alt="goal"
            src="/about/goal-1.png"
            width={650}
            height={772}
            className="rounded"
          />
          <div className="w-1/2 flex flex-col justify-between">
            <div className={paragraph}>
              Leveraging my background, I aspire to become a UX/UI designer who
              can address the pain points of our users and play an integral role
              in improving their experience.
            </div>
            <div className={paragraph}>
              Furthermore, I look forward to working as part of a team and
              collaborating with individuals from diverse backgrounds while
              offering my own unique perspective.
            </div>
            <div className="flex h-[55%] space-x-4">
              <div className="w-1/2 relative">
                <Image
                  alt="goal"
                  src="/about/goal-2.png"
                  fill={true}
                  className="rounded"
                />
              </div>
              <div className="w-1/2 relative">
                <Image
                  alt="goal"
                  src="/about/goal-3.png"
                  fill={true}
                  className="rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
