import NextLink, { LinkProps as NextLinkProps } from "next/link";

import { colors } from "../colors";

import styles from "./link.module.scss";

type LinkProps = NextLinkProps & {
  size?: string,
  underline?: boolean,
  isVisited?: boolean,
  children: React.ReactNode,
}

export const Link = ({ size="1vw", underline=false, isVisited=false, children, ...nextLinkProps }: LinkProps) => {
  const style: React.CSSProperties = {
    fontSize: size,
  };

  if (underline) {
    style.textDecoration = "underline";
  }

  if (isVisited) {
    style.color = colors.grayMid;
  }

  return (
    <NextLink {...nextLinkProps} className={styles.link} style={style} >
      {children}
    </NextLink>
  );
};
