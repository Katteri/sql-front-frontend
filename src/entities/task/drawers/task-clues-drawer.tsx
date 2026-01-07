import { Button } from "@/shared/ui/button/button";
import { Drawer, DrawerProps } from "@/shared/ui/drawer/drawer";
import { Table } from "@/shared/ui/table/table";
import { Text } from "@/shared/ui/text/text";
import { Title } from "@/shared/ui/title/title";

import { clueData, expectedResultData } from "./mock";
import styles from "./task-clues-drawer.module.scss";
import { useCallback, useState } from "react";

type TaskCluesDrawerProps = DrawerProps & {
  hasClue: boolean,
  hasExpectedResult: boolean,
};

export const TaskCluesDrawer = ({
  isOpen,
  onClose,
  hasClue,
  hasExpectedResult,
}: TaskCluesDrawerProps) => {
  // TODO: add fetching clues data
  const [showClue, setShowClue] = useState<boolean>(hasClue);
  const [showExpectedResult, setShowExpectedResult] = useState<boolean>(hasExpectedResult);

  const clueButtonHandler = useCallback(() => {
    setShowClue(true);
    // TODO: send data to backend
  }, []);

  const expectedResultButtonHandler = useCallback(() => {
    setShowExpectedResult(true);
    // TODO: send data to backend
  }, []);

  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      width="60vw"
      padding="4vw 2vw 0 4vw"
    >
      <Title
        as="p"
        size="5vw"
        color="black"
      >
        подсказка
      </Title>
      <div className={styles.block}>
        {showClue 
          ? <Text>{clueData.clue}</Text>
          : <Button
              color="black"
              hoverColor="red"
              width="8vw"
              padding="0.5vw"
              onClick={clueButtonHandler}
            >
              показать
            </Button>
        }
      </div>
      
      <Title
        as="p"
        size="5vw"
        color="black"
      >
        ожидаемый результат
      </Title>
      <div className={styles.block}>
        {showExpectedResult 
          ? <>
              <Table data={expectedResultData} height="15vw"/>
              <Text margin="0.5vw 0 0">Всего строк: {expectedResultData.row_count}</Text>
            </>
          : <Button
              color="black"
              hoverColor="red"
              width="8vw"
              padding="0.5vw"
              onClick={expectedResultButtonHandler}
            >
              показать
            </Button>
        }
      </div>
      
    </Drawer>
  );
};
