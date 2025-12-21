import { useCallback, useState } from "react";

import CodeMirror from "@uiw/react-codemirror";
import { sql } from "@codemirror/lang-sql";

import { Button } from "@/shared/ui/button/button";
import { MenuIcon } from "@/shared/ui/menu-icon/menu-icon";
import { MenuDrawer } from "@/entities/menu-drawer/menu-drawer";
import { Overlay } from "@/shared/ui/drawer/overlay/overlay";
import { Title } from "@/shared/ui/title/title";
import { Text } from "@/shared/ui/text/text";

import { lightCodeMirrorTheme } from "@/shared/ui/code-mirror/code-mirror-theme-light";

import { Result } from "./result";
import { useTaskData } from "./use-task-data";
import styles from "./task.module.scss";
import { resultData } from "./mock";

export const Task = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [value, setValue] = useState("");
  const data = useTaskData();
  
  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, [setIsMenuOpen]);

  const onChange = useCallback((val: string) => {
    setValue(val);
  }, []);

  return (
    <section className={styles.task}>
      {isMenuOpen && <Overlay onClick={toggleMenu}/>}
      <MenuIcon color="red" onClick={toggleMenu}/>
      <MenuDrawer isOpen={isMenuOpen} onClose={toggleMenu} currentPage="missions"/>
      <div className={styles.spaceBetween}>
        <Text>
          миссия {data.missionId}.{data.taskId}
        </Text>
        <Text>
          мои баллы: {data.totalScore}
        </Text>
      </div>

      <Title
        color="black"
        size="7vw"
        margin="6vw 0"
      >
        География сражений
      </Title>
      <Text>
        Определите все боевые операции, проведенные в Сталинграде. Результаты помогут оценить стратегическую значимость этого региона
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
            hoverColor="red"
            width="10vw"
            padding=".5vw 2vw"
          >
            выполнить
          </Button>
          <Button
            color="black"
            hoverColor="red"
            width="2.5vw"
            padding="0.5vw"
          >
            i
          </Button>
        </div>
        <Button
          color="black"
          hoverColor="red"
          width="10vw"
          padding=".5vw 2vw"
        >
          подсказки
        </Button>
      </div>

      <div className={`${styles.spaceBetween} ${styles.resultHeader}`}>
        <Title
          color="black"
          as="p"
          size="3vw"
        >
          результат
        </Title>
        <Button
          color="black"
          hoverColor="red"
          width="10vw"
          padding=".5vw 2vw"
        >
          выполнить
        </Button>
      </div>
      <Result data={resultData}/>
    </section>
  );
};
