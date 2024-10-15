import KeySection from "@/app/components/key-section";
import Paragraph from "@/app/components/paragraph";
import QuestionResponse from "@/app/components/question-response";
import { KeyCardT } from "@/types";

type QuestionResponseT = {
  question: string;
  response: string;
  avatar: string;
  name: string;
}[];

export default function ResearchExploration({
  surveyDesc,
  surveyQuestions,
  userInterviewDesc,
  userInterviewQuestions,
  findings,
}: {
  surveyDesc: React.ReactNode;
  surveyQuestions: QuestionResponseT;
  userInterviewDesc: React.ReactNode;
  userInterviewQuestions: QuestionResponseT;
  findings: KeyCardT;
}) {
  return (
    <div className="space-y-[50px]">
      {/* survey */}
      <div className="space-y-[30px]">
        <div className="space-y-[10px]">
          <div className="text-[27px] font-semibold tracking-[.01em]">
            Survey
          </div>
          {surveyDesc}
        </div>
        <div className="py-[50px] space-y-[30px]">
          {surveyQuestions.map(({ question, response, avatar, name }, i) => (
            <QuestionResponse
              key={i}
              question={question}
              response={response}
              avatar={avatar}
              name={name}
            />
          ))}
        </div>
      </div>
      {/* user interview */}
      <div className="space-y-[30px]">
        <div className="space-y-[10px]">
          <div className="text-[27px] font-semibold tracking-[.01em]">
            User Interview
          </div>
          <Paragraph>{userInterviewDesc}</Paragraph>
        </div>
        <div className="py-[50px] space-y-[30px]">
          {userInterviewQuestions.map(
            ({ question, response, avatar, name }, i) => (
              <QuestionResponse
                key={i}
                question={question}
                response={response}
                avatar={avatar}
                name={name}
              />
            )
          )}
        </div>
        <KeySection title="Key Findings" cards={findings} />
      </div>
    </div>
  );
}
