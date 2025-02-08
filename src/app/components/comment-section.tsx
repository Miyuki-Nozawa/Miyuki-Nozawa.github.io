import Comments from "@/app/components/comments";

export type CommentSectionProps = {
  comments: CommentsT;
};

type CommentsT = {
  comment: string;
  avatar: string;
  mirror?: boolean;
}[];

export default function CommentSection({ comments }: CommentSectionProps) {
  return (
    <div className="py-[2.5vw] lg:py-[50px] space-y-[2.5vw] lg:space-y-[30px]">
      {comments.map(({ comment, avatar, mirror }, i) => (
        <Comments key={i} comment={comment} avatar={avatar} mirror={mirror} />
      ))}
    </div>
  );
}
