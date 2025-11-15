import { colors } from "../colors"; 
import styles from "./title.module.scss";

type TitleProps = {
  size: string,
  color?: keyof typeof colors,
  as?: "h1" | "h2" | "h3" | "p",
  letterSpacing?: string,
  margin?: string,
  padding?: string,
  children: React.ReactNode,
}

export const Title = ({
  size,
  color="red",
  as="h1",
  letterSpacing="0",
  margin="0",
  padding="0",
  children,
}: TitleProps) => {
  const Tag = as;
  return (
    <Tag
      className={styles.title}
      style={{
        color: colors[color],
        letterSpacing,
        margin,
        padding,
        fontSize: size,
      }}
    >
      {children}
    </Tag>
  );
};
