import { BLACK_COLOR, RED_COLOR, WHITE_COLOR } from "../colors";

import styles from "./menu.module.scss";

type MenuProps = {
  color?: typeof BLACK_COLOR | typeof RED_COLOR | typeof WHITE_COLOR,
};

export const MenuIcon = ({ color=BLACK_COLOR }: MenuProps) => {
  return (
    <div
      className={styles.menu}
      style={{color}}
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
