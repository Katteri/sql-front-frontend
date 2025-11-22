import { Text } from "../../text/text";
import { colors } from "../../colors";

type ErrorProps = {
  message?: string,
  color?: keyof typeof colors,
  className?: string,
};

export const Error = ({
  message,
  color="red",
  className="",
}: ErrorProps) => {
  return (
    <Text
      size="0.7vw"
      color={color}
      className={className}
    >
      {message}
    </Text>
  );
};
