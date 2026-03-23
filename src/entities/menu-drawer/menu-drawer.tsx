import { useAppDispatch } from "@/shared/hooks/redux";
import { logoutUser } from "@/store/reducers/actions/auth-action";

import { Link } from "../../shared/ui/link/link";
import { Drawer, type DrawerProps } from "../../shared/ui/drawer/drawer";
import styles from "./menu-drawer.module.scss";

type MenuDrawerProps = DrawerProps & {
  currentPage: "main" | typeof menuCoonfig.authorized[number]["page"];
  isAuth?: boolean;
};

const menuCoonfig = {
  unauthorized: [
    {
      page: "login",
      text: "Войти",
      href: "auth?type=login",
    },
    {
      page: "register",
      text: "Зарегистрироваться",
      href: "auth?type=register",
    },
  ],
  authorized: [
    {
      page: "profile",
      text: "Мой профиль",
      href: "/profile",
    },
    {
      page: "quest",
      text: "Квест",
      href: "/quest",
    },
    {
      page: "missions",
      text: "Задачи",
      href: "/missions",
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
  isAuth = true,
  isOpen,
  currentPage,
  onClose,
}: MenuDrawerProps) => {
  const dispatch = useAppDispatch();
  
  const config = menuCoonfig[isAuth? "authorized" : "unauthorized"];

  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
    >
      <Link
        href="/"
        size="4vw"
        onClick={onClose}
        underline={currentPage === "main"}
        fontVariant="capital"
        color="red"
      >
        SQL фронт
      </Link>
      <div
        className={styles.linksBlock}
      >
        {config.map((link) => (
          <Link
            key={link.page}
            href={link.href}
            size="1vw"
            onClick={() => {
              if (link.page === "logout") {
                dispatch(logoutUser());
              }
              onClose();
            }}
            underline={currentPage === link.page}
          >
            {link.text}
          </Link>
        ))}
      </div>
    </Drawer>
  );
};
