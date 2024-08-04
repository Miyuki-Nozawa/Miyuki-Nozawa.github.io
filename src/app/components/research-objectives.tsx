export default function ResearchObjectives({
  questions,
  className,
}: {
  questions: string[];
  className: string;
}) {
  return (
    <div className="space-y-12">
      <div className={`font-manrope text-[1.75rem] font-extrabold tracking-[.02em] ${className}`}>
        Research objectives
      </div>
      <ul className="list-disc list-outside text-[26px] font-medium tracing-[0.02em] space-y-6 pl-7">
        {questions.map((question, index) => (
          <li key={index}>{question}</li>
        ))}
      </ul>
    </div>
  );
}
