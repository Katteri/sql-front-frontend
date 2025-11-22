import { Link } from "../../link/link";
import { Title } from "../../title/title";
import styles from "./menu-drawer.module.scss";

type MenuDrawerProps = {
  isOpen: boolean,
  currentPage: typeof menuCoonfig.authorized[number]["page"];
  onClose: () => void,
}

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
      href: "",
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
    <div
      className={`${styles.menuDrawer} ${isOpen ? styles.open : ""}`}
    >
      <button
        className={styles.closeButton}
        type="button"
        onClick={onClose}
      >
        x
      </button>
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
            href={link.href}
            size="1vw"
            onClick={onClose}
            underline={currentPage === link.page}
          >
            {link.text}
          </Link>
        ))}
      </div>
    </div>
  );
};
