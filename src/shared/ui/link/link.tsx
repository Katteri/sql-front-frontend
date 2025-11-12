import NextLink, { LinkProps as NextLinkProps } from "next/link";

import styles from "./link.module.scss";

type LinkProps = NextLinkProps & {
  size: string,
  children: React.ReactNode,
}

export const Link = ({ size, children, ...nextLinkProps }: LinkProps) => {
  return (
    <NextLink {...nextLinkProps} className={styles.link} style={{ fontSize: size }} >
      {children}
    </NextLink>
  );
};
