import { Link } from "../link/link";
import { Title } from "../title/title";
import { Drawer, type DrawerProps } from "./drawer";

import styles from "./menu-drawer.module.scss";

type MenuDrawerProps = DrawerProps & {
  currentPage: typeof menuCoonfig.authorized[number]["page"],
};

const menuCoonfig = {
  unauthorized: [
    {
      text: "Войти",
      href: "auth?type=login",
    },
    {
      text: "Зарегистрироваться",
      href: "auth?type=register",
    },
  ],
  // TODO: add real hrefs
  authorized: [
    {
      page: "main",
      text: "Главная",
      href: "/",
    },
    {
      page: "profile",
      text: "Мой профиль",
      href: "/profile",
    },
    {
      page: "quest",
      text: "Квест",
      href: "",
    },
    {
      page: "tasks",
      text: "Задачи",
      href: "",
    },
    {
      page: "achievements",
      text: "Достижения",
      href: "/achievements",
    },
    {
      page: "logout",
      text: "Выйти",
      href: "",
    },
  ],
} as const;

export const MenuDrawer = ({
  isOpen,
  currentPage,
  onClose,
}: MenuDrawerProps) => {
  const config = menuCoonfig["authorized"];
  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
    >
      <Title
        as="p"
        color="red"
        size="4vw"
      >
        SQL фронт
      </Title>
      <div
        className={styles.linksBlock}
      >
        {config.map((link) => (
          <Link
            key={link.page}
            href={link.href}
            size="1vw"
            onClick={onClose}
            underline={currentPage === link.page}
          >
            {link.text}
          </Link>
        ))}
      </div>
    </Drawer>
  );
};
