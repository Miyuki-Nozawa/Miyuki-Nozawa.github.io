import SimpleSection from "@/app/components/simple-section";

export default function KeyQuestions({ questions }: { questions: string[] }) {
  return (
    <SimpleSection title="Key questions">
      <ul className="list-disc list-outside text-[1.6rem] tracing-[0.02em] space-y-6 pl-5">
        {questions.map((question, index) => (
          <li key={index}>{question}</li>
        ))}
      </ul>
    </SimpleSection>
  );
}