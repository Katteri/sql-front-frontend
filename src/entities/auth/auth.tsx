import { useSearchParams } from "next/navigation";
import { useCallback } from "react";

import { AuthType } from "@/shared/types";
import { colors } from "@/shared/ui/colors";
import { Form } from "@/shared/ui/form-auth/form-auth";
import { Title } from "@/shared/ui/title/title";
import { Link } from "@/shared/ui/link/link";

import styles from "./auth.module.scss";

export const Auth = () => {
  const params = useSearchParams();
  const authType = (params.get("type") as AuthType) || "login";

  const color = authType === "login" ? "red" : "white";
  const linkColor = authType === "login" ? colors.black : colors.white;
  const colorLinkHover = authType === "login" ? colors.red : colors.grayMid;

  const makeAuth = useCallback((type: AuthType) => {
    const existingParams = params.toString();
    const newSearchParams = new URLSearchParams(existingParams);
    newSearchParams.set("type", type);
    return `/auth?${newSearchParams.toString()}`;
  }, [params]);

  return (
    <section
      className={styles[authType]}
      style={{
        "--link-color": linkColor,
        "--link-hover-color": colorLinkHover,
      } as React.CSSProperties}
    >
      <div className={styles.menu}>
        {authType === "login"
          ? <Link href={makeAuth("register")} size="1vw">зарегистрироваться</Link>
          : <Link href={makeAuth("login")} size="1vw">войти</Link>
        }
      </div>
      <Title
        as="p"
        size="30vw"
        padding="3vw 0 0 5vw"
        color={color}
      >
        SQL
      </Title>
      <Title
        as="p"
        size="18vw"
        margin="-2.4vw 0 0 2.4vw"
        color={color}
      >
        фронт
      </Title>
      <Form type={authType}/>
    </section>
  );
};
