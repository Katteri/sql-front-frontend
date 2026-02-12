import { useCallback, useState } from "react";

import CodeMirror from "@uiw/react-codemirror";
import { sql } from "@codemirror/lang-sql";

import { TaskCluesDrawer } from "@/shared/ui/task-clues-drawer/task-clues-drawer";
import { Button } from "@/shared/ui/button/button";
import { Text } from "@/shared/ui/text/text";
import { ERDiagramType } from "@/shared/types/er-diagram-types";
import { lightCodeMirrorTheme } from "@/shared/ui/code-mirror/code-mirror-theme-light";

import styles from "./task-block.module.scss";
import { ResultTable } from "../result-table/result-table";
import { resultData } from "../../../entities/task/mock";
import { Title } from "@/shared/ui/title/title";
import { DatabaseInfoDrawer } from "../database-info-drawer/database-info-drawer";

type TaskBlockType = ERDiagramType & {
  type: "quest" | "task";
  questClue?: string; 
  isSolved?: boolean,
  task: string;
  isUserHasClue?: boolean;
  isUserHasExpectedResult?: boolean;
};

export const TaskBlock = ({
  type,
  questClue,
  isSolved,
  task,
  isUserHasClue,
  isUserHasExpectedResult,
  databaseNodes,
  databaseEdges,
}: TaskBlockType) => {
  const [isDatabaseInfoOpen, setIsDatabaseInfoOpen] = useState(false);
  const [isTaskCluesOpen, setIsTaskCluesOpen] = useState(false);
  const [value, setValue] = useState("");

  const toggleDatabaseInfo = useCallback(() => {
    setIsDatabaseInfoOpen((prev) => !prev);
  }, [setIsDatabaseInfoOpen]);

  const toggleTaskClues = useCallback(() => {
    setIsTaskCluesOpen((prev) => !prev);
  }, [setIsTaskCluesOpen]);

  const onChange = useCallback((val: string) => {
    setValue(val);
  }, []);

  return (
    <>
      <DatabaseInfoDrawer
        isOpen={isDatabaseInfoOpen}
        onClose={toggleDatabaseInfo}
        databaseNodes={databaseNodes}
        databaseEdges={databaseEdges}
      />
      {questClue && isUserHasClue !== undefined && isUserHasExpectedResult !== undefined
        ? <TaskCluesDrawer
            isOpen={isTaskCluesOpen}
            type={type}
            isQuestHasClue={!questClue}
            isUserHasClue={isUserHasClue}
            isUserHasExpectedResult={isUserHasExpectedResult}
            onClose={toggleTaskClues}
          />
        : null
      }
      <div className={styles.taskBlockContainer}>
        <Text>
          {task}
        </Text>
        <CodeMirror
          className={styles.codeWindow}
          height="10vw"
          theme={lightCodeMirrorTheme}
          value={value}
          onChange={onChange}
          extensions={[sql()]}
          editable={true}
          basicSetup={{
            lineNumbers: true,
            highlightActiveLine: true,
            highlightSelectionMatches: true,
            foldGutter: false,
            autocompletion: false,
            completionKeymap: false,
          }}
        />
        <div className={styles.spaceBetween}>
          <div className={`${styles.spaceBetween} ${styles.buttonsLeftWidth}`}>
            <Button
              color="black"
              width="10vw"
              padding=".5vw 2vw"
            >
              выполнить
            </Button>
            <Button
              color="black"
              width="2.5vw"
              padding="0.5vw"
              onClick={toggleDatabaseInfo}
            >
              i
            </Button>
          </div>
          {questClue
            ? <Button
                color="black"
                width="10vw"
                padding=".5vw 2vw"
                onClick={toggleTaskClues} 
              >
                подсказка
              </Button>
            : null}
        </div>

        <div className={`${styles.spaceBetween} ${styles.resultHeader}`}>
          <Title
            color={isSolved ? "black" : "red"}
            as="p"
            size="3vw"
          >
            результат
          </Title>
          <Button
            color={isSolved ? "black" : "red"}
            width="10vw"
            padding=".5vw 2vw"
          >
            отправить
          </Button>
        </div>
        <ResultTable data={resultData}/>
      </div>
    </>
  );
};
