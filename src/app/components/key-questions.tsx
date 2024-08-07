import SimpleSection from "@/app/components/simple-section";

export default function KeyQuestions({
  questions,
  className,
}: {
  questions: string[];
  className: string;
}) {
  return (
    <SimpleSection title="Key questions" className={className}>
      <ul className="list-disc list-outside text-[26px] tracing-[0.02em] space-y-6 pl-5">
        {questions.map((question, index) => (
          <li key={index} className="font-normal">{question}</li>
        ))}
      </ul>
    </SimpleSection>
  );
}
