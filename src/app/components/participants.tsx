import SimpleSection from "@/app/components/simple-section";
import Text from "@/app/components/text";

export default function Participants({
  title,
  desc1,
  desc2,
}: {
  title: string;
  desc1: string;
  desc2: string;
}) {
  return (
    <SimpleSection title={title}>
      <Text>
        {desc1}
        <br />
        {desc2}
      </Text>
    </SimpleSection>
  );
}
