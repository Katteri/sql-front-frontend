import { Drawer, DrawerProps } from "@/shared/ui/drawer/drawer";
import { Title } from "@/shared/ui/title/title";
import { ERDiagramType } from "@/shared/types/er-diagram-types";

import { ERDiagram } from "./er-diagram";

export const DatabaseInfoDrawer = ({
  isOpen,
  onClose,
  databaseEdges,
  databaseNodes,
}:  DrawerProps & ERDiagramType) => {
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
      <ERDiagram
        databaseNodes={databaseNodes}
        databaseEdges={databaseEdges}
      />
    </Drawer>
  );
};
