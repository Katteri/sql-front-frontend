import { BLACK_COLOR, RED_COLOR, WHITE_COLOR } from "../colors"; 
import styles from "./title.module.scss";

type TitleProps = {
  size: string,
  color?: typeof RED_COLOR | typeof BLACK_COLOR | typeof WHITE_COLOR,
  as?: "h1" | "h2" | "h3" | "p",
  letterSpacing?: string,
  margin?: string,
  children: React.ReactNode,
}

export const Title = ({
  size,
  color=RED_COLOR,
  as="h1",
  letterSpacing="0",
  margin="0",
  children,
}: TitleProps) => {
  const Tag = as;
  return (
    <Tag
      className={styles.title}
      style={{
        color,
        letterSpacing,
        margin,
        fontSize: size,
      }}
    >
      {children}
    </Tag>
  );
};
