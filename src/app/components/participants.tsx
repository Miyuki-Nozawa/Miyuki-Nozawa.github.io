import SimpleSection from "@/app/components/simple-section";
import Text from "@/app/components/text";

export default function Participants({
  title,
  desc1,
  desc2 = "",
  className,
}: {
  title: string;
  desc1: string;
  desc2?: string;
  className: string;
}) {
  return (
    <SimpleSection title={title} className={className}>
      <Text>
        {desc1}
        {desc2 && (
          <div>
            <br />
            {desc2}
          </div>
        )}
      </Text>
    </SimpleSection>
  );
}
