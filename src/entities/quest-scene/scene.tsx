import { useCallback, useState } from "react";

import { DatabaseInfoDrawer } from "@/entities/database-info-drawer.tsx/database-info-drawer";
import { Button } from "@/shared/ui/button/button";
import { Title } from "@/shared/ui/title/title";
import { useSceneData } from "./use-scene-data";
import styles from "./scene.module.scss";

export const Scene = () => {
  const { sceneData, databaseSchema } = useSceneData();
  const [isDatabaseInfoOpen, setIsDatabaseInfoOpen] = useState(false);

  const toggleDatabaseInfo = useCallback(() => {
    setIsDatabaseInfoOpen((prev) => !prev);
  }, [setIsDatabaseInfoOpen]);

  return (
    <section className={styles.section}>
      <DatabaseInfoDrawer
        isOpen={isDatabaseInfoOpen}
        onClose={toggleDatabaseInfo}
        databaseNodes={databaseSchema?.databaseNodes}
        databaseEdges={databaseSchema?.databaseEdges}
      />
      <Button
        color="black"
        hoverColor="red"
        width="2.5vw"
        padding="0.5vw"
        onClick={toggleDatabaseInfo}
      >
        i
      </Button>
    </section>
  );
};
