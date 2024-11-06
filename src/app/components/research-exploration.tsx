import KeySection from "@/app/components/key-section";
import Paragraph from "@/app/components/paragraph";
import QuestionResponse from "@/app/components/question-response";
import { KeyCardT } from "@/types";

export type ResearchExplorationProps = {
  survey: {
    desc: React.ReactNode;
    questions: QuestionResponseT;
  };
  userInterview: {
    desc: React.ReactNode;
    questions: QuestionResponseT;
  };
  usabilityTesting?: {
    desc: React.ReactNode;
    questions: QuestionResponseT;
  };
  findings: KeyCardT;
};

type QuestionResponseT = {
  question?: string;
  response: string;
  avatar: string;
  name: string;
  mirror?: boolean;
}[];

export default function ResearchExploration({
  survey,
  userInterview,
  usabilityTesting,
  findings,
}: ResearchExplorationProps) {
  return (
    <div className="space-y-[20px] lg:space-y-[50px]">
      {/* survey */}
      <div className="space-y-[2.5vw] lg:space-y-[30px]">
        <div className="space-y-[2.5vw] lg:space-y-[10px]">
          <div className="text-[4.1vw] lg:text-[27px] font-semibold tracking-[.01em]">
            Survey
          </div>
          {survey.desc}
        </div>
        <div className="py-[2.5vw] lg:py-[50px] space-y-[2.5vw] lg:space-y-[30px]">
          {survey.questions.map(
            ({ question, response, avatar, name, mirror }, i) => (
              <QuestionResponse
                key={i}
                question={question}
                response={response}
                avatar={avatar}
                name={name}
                mirror={mirror}
              />
            )
          )}
        </div>
      </div>
      {/* user interview */}
      <div className="space-y-[2.5vw] lg:space-y-[30px]">
        <div className="space-y-[2.5vw] lg:space-y-[10px]">
          <div className="text-[4.1vw] lg:text-[27px] font-semibold tracking-[.01em]">
            User Interview
          </div>
          <Paragraph>{userInterview.desc}</Paragraph>
        </div>
        <div className="py-[2.5vw] lg:py-[50px] space-y-[2.5vw] lg:space-y-[30px]">
          {userInterview.questions.map(
            ({ question, response, avatar, name, mirror }, i) => (
              <QuestionResponse
                key={i}
                question={question}
                response={response}
                avatar={avatar}
                name={name}
                mirror={mirror}
              />
            )
          )}
        </div>
      </div>
      {/* usability testing */}
      {usabilityTesting && (
        <>
          <div className="space-y-[2.5vw] lg:space-y-[10px]">
            <div className="text-[4.1vw] lg:text-[27px] font-semibold tracking-[.01em]">
              Usability Testing
            </div>
            <Paragraph>{usabilityTesting.desc}</Paragraph>
          </div>
          <div className="py-[2.5vw] lg:py-[50px] space-y-[2.5vw] lg:space-y-[30px]">
            {usabilityTesting.questions.map(
              ({ question, response, avatar, name, mirror }, i) => (
                <QuestionResponse
                  key={i}
                  question={question}
                  response={response}
                  avatar={avatar}
                  name={name}
                  mirror={mirror}
                />
              )
            )}
          </div>
        </>
      )}
      <KeySection title="Key Findings" cards={findings} />
    </div>
  );
}
