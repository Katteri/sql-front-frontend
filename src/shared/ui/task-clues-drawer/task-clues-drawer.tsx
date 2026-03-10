import { useCallback, useState } from "react";

import { Button } from "@/shared/ui/button/button";
import { Drawer, DrawerProps } from "@/shared/ui/drawer/drawer";
import { Table } from "@/shared/ui/table/table";
import { Text } from "@/shared/ui/text/text";
import { Title } from "@/shared/ui/title/title";

import styles from "./task-clues-drawer.module.scss";
import { ResultQueryDataType } from "@/shared/types/task-type";

type TaskCluesDrawerProps = DrawerProps & {
  type: "quest" | "task";
  isUserHasClue: boolean;
  isUserHasExpectedResult?: boolean;
  getClue: () => void;
  getExpectedResult?: () => void;
  clue?: string;
  expectedResult?: ResultQueryDataType;
};

export const TaskCluesDrawer = ({
  isOpen,
  onClose,
  type,
  isUserHasClue,
  isUserHasExpectedResult,
  getClue,
  getExpectedResult,
  clue,
  expectedResult,
}: TaskCluesDrawerProps) => {
  const [showClue, setShowClue] = useState<boolean>(isUserHasClue);
  const [showExpectedResult, setShowExpectedResult] = useState<boolean>(isUserHasExpectedResult ? isUserHasExpectedResult : false);

  const clueButtonHandler = useCallback(async() => {
    getClue();
    if (clue) {
      setShowClue(true);
    }
  }, [getClue, clue]);

  const expectedResultButtonHandler = useCallback(() => {
    if (!getExpectedResult) {
      return;
    }
    getExpectedResult();
    if (expectedResult) {
      setShowExpectedResult(true);
    }
  }, [getExpectedResult, expectedResult]);

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
          ? <Text>{clue}</Text>
          : <Button
              color="black"
              width="8vw"
              padding="0.5vw"
              onClick={clueButtonHandler}
            >
              показать
            </Button>
        }
      </div>
      
      {type === "task"
        ? <>
            <Title
              as="p"
              size="5vw"
              color="black"
            >
              ожидаемый результат
            </Title>
            <div className={styles.block}>
              {showExpectedResult && expectedResult
                ? <>
                    <Table data={expectedResult} height="15vw"/>
                    <Text margin="0.5vw 0 0">Всего строк: {expectedResult.row_count}</Text>
                  </>
                : <Button
                    color="black"
                    width="8vw"
                    padding="0.5vw"
                    onClick={expectedResultButtonHandler}
                  >
                    показать
                  </Button>
              }
            </div>
          </>
        : null
      }
    </Drawer>
  );
};
