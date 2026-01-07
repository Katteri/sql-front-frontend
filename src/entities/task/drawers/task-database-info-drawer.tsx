import { Drawer, DrawerProps } from "@/shared/ui/drawer/drawer";
import { Title } from "@/shared/ui/title/title";
import { ERDiagram } from "@/entities/er-diagram/er-diagram";

export const TaskDatabaseInfoDrawer = ({
  isOpen,
  onClose,
}: DrawerProps) => {
  // TODO: add fetching db data

  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      width="60vw"
      padding="4vw 2vw 5vw 4vw"
    >
      <Title
        as="p"
        size="5vw"
        color="red"
        margin="0 0 1vw"
      >
        схема базы данных
      </Title>
      <ERDiagram />
    </Drawer>
  );
};
