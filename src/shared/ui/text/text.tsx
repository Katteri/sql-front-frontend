import styles from "./text.module.scss";

type TextProps = {
  size: string,
  children: React.ReactNode,
}

export const Text = ({ size, children }: TextProps) => {
 return (
  <p
    className={styles.text}
    style={{
      fontSize: size,
    }}
  >
    {children}
  </p>
 );
};
