import { useCallback, useState } from "react";

import CodeMirror from "@uiw/react-codemirror";
import { sql } from "@codemirror/lang-sql";

import { TaskCluesDrawer } from "@/shared/ui/task-clues-drawer/task-clues-drawer";
import { Button } from "@/shared/ui/button/button";
import { Text } from "@/shared/ui/text/text";
import { ERDiagramType } from "@/shared/types/er-diagram-types";
import { ResultQueryDataType, TaskClueData } from "@/shared/types/task-type";
import { QuestClueData } from "@/shared/types/quest-types";
import { lightCodeMirrorTheme } from "@/shared/ui/code-mirror/code-mirror-theme-light";
import { Title } from "@/shared/ui/title/title";
import { Link } from "@/shared/ui/link/link";

import styles from "./task-block.module.scss";
import { ResultTable } from "../result-table/result-table";
import { DatabaseInfoDrawer } from "../database-info-drawer/database-info-drawer";

type DefaultTaskBlock = {
  isSolved?: boolean,
  task: string;
  onChange: (_: string) => void;
  value: string;
  queryRunHandle: () => void;
  submitSolution: () => void;
  resultData: string | ResultQueryDataType | null;
  getClue: () => void;
};

type TaskBlockType =
  (DefaultTaskBlock & ERDiagramType & {
    type: "task",
    clueData: TaskClueData;
  }) |
  (DefaultTaskBlock & ERDiagramType & {
    type: "quest",
    clueData: QuestClueData;
  });

export const TaskBlock = ({
  type,
  isSolved,
  task,
  clueData,
  databaseNodes,
  databaseEdges,
  onChange,
  value,
  queryRunHandle,
  submitSolution,
  resultData,
  getClue,
}: TaskBlockType) => {
  const [isDatabaseInfoOpen, setIsDatabaseInfoOpen] = useState(false);
  const [isTaskCluesOpen, setIsTaskCluesOpen] = useState(false);

  const toggleDatabaseInfo = useCallback(() => {
    setIsDatabaseInfoOpen((prev) => !prev);
  }, [setIsDatabaseInfoOpen]);

  const toggleTaskClues = useCallback(() => {
    setIsTaskCluesOpen((prev) => !prev);
  }, [setIsTaskCluesOpen]);

  const isClueExist = type === "task" || (type === "quest" && clueData?.isQuestHasClue);

  return (
    <>
      <DatabaseInfoDrawer
        isOpen={isDatabaseInfoOpen}
        onClose={toggleDatabaseInfo}
        databaseNodes={databaseNodes}
        databaseEdges={databaseEdges}
      />
      {isClueExist
        ? <TaskCluesDrawer
            isOpen={isTaskCluesOpen}
            type={type}
            isUserHasClue={clueData.isUserHasClue}
            getClue={getClue}
            clue={clueData.clue}
            isUserHasExpectedResult={type === "task" ? clueData.isUserHasExpectedResult : undefined}
            getExpectedResult={type === "task" ? clueData.getExpectedResult : undefined}
            expectedResult={type === "task" ? clueData.expectedResult : undefined}
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
              onClick={queryRunHandle}
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
          {isClueExist
            ? <Button
                color="black"
                width="10vw"
                padding=".5vw 2vw"
                onClick={toggleTaskClues} 
              >
                {`подсказк${type === "task" ? "и" : "а"}`}
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
            type="submit"
            color={isSolved ? "black" : "red"}
            width="10vw"
            padding=".5vw 2vw"
            onClick={submitSolution}
            disabled={!value}
          >
            отправить
          </Button>
        </div>
        {resultData ?
          <ResultTable data={resultData}/>
          : null
        }
        {type === "task" && isSolved && 
          <div className={styles.toMissionsButtonContainer}>
            <Link
              href="/missions"
              variant="button"
            >
              ко всем заданиям
            </Link>
          </div>
        }
      </div>
    </>
  );
};
