import KeySection from "@/app/components/key-section";
import Paragraph from "@/app/components/paragraph";
import Comments from "@/app/components/comments";
import { KeyCardT } from "@/types";

export type ResearchExplorationProps = {
  survey: {
    desc: React.ReactNode;
    comments: CommentsT;
  };
  userInterview?: {
    desc: React.ReactNode;
    comments: CommentsT;
  };
  usabilityTesting?: {
    desc: React.ReactNode;
    comments: CommentsT;
  };
  findings: KeyCardT;
};

type CommentsT = {
  comment: string;
  avatar: string;
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
      <div className="space-y-[2.5vw] lg:space-y-[30px]">
        <div className="space-y-[2.5vw] lg:space-y-[10px]">{survey.desc}</div>
        <div className="py-[2.5vw] lg:py-[50px] space-y-[2.5vw] lg:space-y-[30px]">
          {survey.comments.map(({ comment, avatar, mirror }, i) => (
            <Comments
              key={i}
              comment={comment}
              avatar={avatar}
              mirror={mirror}
            />
          ))}
        </div>
      </div>
      {/* user interview */}
      {userInterview && (
        <div className="space-y-[2.5vw] lg:space-y-[30px]">
          <div className="space-y-[2.5vw] lg:space-y-[10px]">
            <div className="text-[4.1vw] lg:text-[27px] font-semibold tracking-[.01em]">
              User Interview
            </div>
            <Paragraph>{userInterview.desc}</Paragraph>
          </div>
          <div className="py-[2.5vw] lg:py-[50px] space-y-[2.5vw] lg:space-y-[30px]">
            {userInterview.comments.map(
              ({ comment: response, avatar, mirror }, i) => (
                <Comments
                  key={i}
                  comment={response}
                  avatar={avatar}
                  mirror={mirror}
                />
              )
            )}
          </div>
        </div>
      )}
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
            {usabilityTesting.comments.map(
              ({ comment: response, avatar, mirror }, i) => (
                <Comments
                  key={i}
                  comment={response}
                  avatar={avatar}
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
