export default function ResearchObjectives({
  questions,
}: {
  questions: string[];
}) {
  return (
    <div className="space-y-12">
      <div className="font-manrope text-[1.75rem] font-extrabold tracking-[0.02em] text-dark-green underline">
        Research objectives
      </div>
      <ul className="list-disc list-outside text-[1.6rem] font-medium tracing-[0.02em] space-y-6 pl-5">
        {questions.map((question, index) => (
          <li key={index}>{question}</li>
        ))}
      </ul>
    </div>
  );
}
