import { Link } from "../../link/link";
import { Title } from "../../title/title";
import styles from "./menu-drawer.module.scss";

type MenuDrawerProps = {
  isOpen: boolean,
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
      text: "Главная",
      href: "/",
    },
    {
      text: "Мой профиль",
      href: "",
    },
    {
      text: "Квест",
      href: "",
    },
    {
      text: "Задачи",
      href: "",
    },
    {
      text: "Достижения",
      href: "",
    },
    {
      text: "Выйти",
      href: "",
    },
  ],
}

export const MenuDrawer = ({
  isOpen,
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
          >
            {link.text}
          </Link>
        ))}
      </div>
    </div>
  );
};
