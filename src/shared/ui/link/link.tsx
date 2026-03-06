import NextLink, { LinkProps as NextLinkProps } from "next/link";

import { colors } from "../colors";

import styles from "./link.module.scss";

type LinkProps = NextLinkProps & {
  size?: string,
  underline?: boolean,
  isVisited?: boolean,
  fontVariant?: "text" | "capital",
  position?: React.CSSProperties["position"],
  left?: string,
  top?: string,
  color?: "red" | "black",
  children: React.ReactNode,
}

export const Link = ({
  size="1vw",
  fontVariant="text",
  underline=false,
  isVisited=false,
  children,
  position="static",
  left="auto",
  top="auto",
  color="black",
  ...nextLinkProps
}: LinkProps) => {
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
    <NextLink {...nextLinkProps} className={styles.link}
      style={{
        ...style,
        "--fontVariant": fontVariant === "capital" ? "Buran USSR" : "Moscow Sans",
        "--link-color": colors[color],
        "--link-hover-color": color === "black" ? colors.red : colors.black,
        position,
        left,
        top,
      } as React.CSSProperties}
    >
      {children}
    </NextLink>
  );
};
