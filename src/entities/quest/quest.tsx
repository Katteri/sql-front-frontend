import { useCallback, useState } from "react";

import { Link } from "@/shared/ui/link/link";
import { Title } from "@/shared/ui/title/title";
import { MenuIcon } from "@/shared/ui/menu-icon/menu-icon";

import { MenuDrawer } from "../menu-drawer/menu-drawer";
import styles from "./quest.module.scss";

export const Quest = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, [setIsMenuOpen]);

  return (
    <section className={styles.startQuest}>
      <MenuIcon onClick={toggleMenu}/>
      <MenuDrawer isOpen={isMenuOpen} onClose={toggleMenu} currentPage="quest"/>
      <Title
        as="h2"
        size="29vw"
        margin="6vw 0 0 5vw"
      >
        SQL
      </Title>
      <Title
        as="p"
        size="17.5vw"
        margin="-2.2vw 0 0 2.4vw"
      >
        фронт
      </Title>
      <Title
        size="17vw"
        position="absolute"
        top="9.8vw"
        left="36.3vw"
      >
        квест
      </Title>
      <Link
        href=""
        fontVariant="capital"
        size="6.7vw"
        position="absolute"
        top="24.2vw"
        left="39vw"
      >
        начать
      </Link>
    </section>
  );
};
