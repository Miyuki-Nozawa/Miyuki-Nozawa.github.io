import SimpleSection from "@/app/components/simple-section";

export default function KeyQuestions({ questions }: { questions: string[] }) {
  return (
    <SimpleSection title="Key questions" className="text-brown2">
      <ul className="list-disc list-outside text-[26px] tracing-[0.02em] space-y-6 pl-5">
        {questions.map((question, index) => (
          <li key={index}>{question}</li>
        ))}
      </ul>
    </SimpleSection>
  );
}
