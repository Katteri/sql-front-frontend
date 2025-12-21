import styles from "./drawer.module.scss";
import { Overlay } from "./overlay/overlay";

export type DrawerProps = {
  isOpen: boolean,
  onClose: () => void,
  width?: string,
  padding?: string,
  children?: React.ReactNode,
};

export const Drawer = ({
  isOpen,
  onClose,
  width="25vw",
  padding="2.3vw 1.5vw",
  children,
}: DrawerProps) => {
  return (
    <>
      {isOpen && <Overlay onClick={onClose}/>}
      <div
        className={`${styles.drawer} ${isOpen ? styles.open : ""}`}
        style={{
          "--width": width,
          "--padding": padding,
        } as React.CSSProperties}
      >
        <button
          className={styles.closeButton}
          type="button"
          onClick={onClose}
        >
          x
        </button>
        {children}
      </div>
    </>
  );
};
