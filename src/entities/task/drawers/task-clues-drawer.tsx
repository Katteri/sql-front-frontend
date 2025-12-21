import { Button } from "@/shared/ui/button/button";
import { Drawer, DrawerProps } from "@/shared/ui/drawer/drawer";
import { Table } from "@/shared/ui/table/table";
import { Text } from "@/shared/ui/text/text";
import { Title } from "@/shared/ui/title/title";

import { clueData, expectedResultData } from "./mock";
import styles from "./task-clues-drawer.module.scss";

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

  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      width="60vw"
      padding="5vw 2vw 0 4vw"
    >
      <Title
        as="p"
        size="5vw"
        color="black"
      >
        подсказка
      </Title>
      <div className={styles.block}>
        {hasClue 
          ? <Text>{clueData.clue}</Text>
          : <Button
              color="black"
              hoverColor="red"
              width="8vw"
              padding="0.5vw"
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
        {hasExpectedResult 
          ? <>
              <Table data={expectedResultData} height="15vw"/>
              <Text margin="0.5vw 0 0">Всего строк: {expectedResultData.row_count}</Text>
            </>
          : <Button
              color="black"
              hoverColor="red"
              width="7vw"
              padding="0.5vw"
            >
              показать
            </Button>
        }
      </div>
      
    </Drawer>
  );
};
