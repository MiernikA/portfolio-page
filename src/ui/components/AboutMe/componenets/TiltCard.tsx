import { TiltCardContainer } from "./TiltCardContainer";
import { TiltCardContent } from "./TiltCardContent";

export const TiltCard = ({
  index,
  title,
  icon,
}: {
  index: number;
  title: string;
  icon: string;
}) => (
  <TiltCardContainer index={index}>
    <TiltCardContent title={title} icon={icon} />
  </TiltCardContainer>
);
