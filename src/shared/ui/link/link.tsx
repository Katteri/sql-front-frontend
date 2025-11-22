import NextLink, { LinkProps as NextLinkProps } from "next/link";

import styles from "./link.module.scss";

type LinkProps = NextLinkProps & {
  size: string,
  underline?: boolean,
  children: React.ReactNode,
}

export const Link = ({ size, underline=false, children, ...nextLinkProps }: LinkProps) => {
  const style: React.CSSProperties = {
    fontSize: size,
  };

  if (underline) {
    style.textDecoration = "underline";
  }

  return (
    <NextLink {...nextLinkProps} className={styles.link} style={style} >
      {children}
    </NextLink>
  );
};
