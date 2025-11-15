import CodeMirror from "@uiw/react-codemirror";
import { sql } from "@codemirror/lang-sql";
import { Title } from "@/shared/ui/title/title";
import { Text } from "@/shared/ui/text/text";

import styles from "./start-guide-section.module.scss";

import { lightCodeMirrorTheme } from "@/shared/ui/codeMirrorThemes";

export const StartGuideSection = () => {
  return (
    <section>
      <div className={styles.startGuideSection}>
        <Title
          size="18.5vw"
          color="white"
          as="h3"
          padding="10vw 0 0 1vw"
        >
          как начать?
        </Title>
        <Text
          size="1.5vw"
          color="white"
          className={styles.textDescription}
        >
          Тебе предстоит пройти три миссии, каждая из которых отличается уровнем сложности. Чем больше задач ты решишь, тем больше баллов и достижений получишь — а значит, поднимешься выше в рейтинге
        </Text>
        <Text
          size="2vw"
          color="white"
          className={styles.textCluesTitle}
        >
          Во время решения ты можешь воспользоваться подсказками:
        </Text>
        <Text
          size="1.5vw"
          color="white"
          className={styles.textClues}
        >
          <span>Первая подсказка — от 10 до 50 баллов (в зависимости от сложности задачи)</span>
          <span>Просмотр ожидаемого результата — от 20 до 100 баллов</span>
        </Text>
      </div>
      <div className={styles.startGuideSection}>
        <Text
          size="3vw"
          color="white"
          className={styles.textScoreTitle}
        >
          Будь внимателен!
        </Text>
        <Text
          size="1.5vw"
          color="white"
          className={styles.textScore}
        >
          <span>За правильное решение задачи ты получаешь от 100 до 500 баллов, в зависимости от миссии</span>
          <span>За неправильное решение — теряешь от 10 до 50 баллов</span>
        </Text>
        <div className={styles.codeBlock}>
          <CodeMirror
            className={styles.exampleCode}
            theme={lightCodeMirrorTheme}
            value=
{`SELECT ф.название_фронта, в.вид_войск, COUNT(г.герой_id) AS количество_героев, 
  AVG(г.уровень_подвига) AS средний_подвиг
FROM герои г
  JOIN фронты ф ON г.фронт_id = ф.фронт_id
  JOIN войска в ON г.войска_id = в.войска_id
WHERE г.награда = 'Орден Победы'
  GROUP BY ф.название_фронта, в.вид_войск
  ORDER BY средний_подвиг DESC;`}
            extensions={[sql()]}
            editable={false}
          />
        </div>
       <div
        className={styles.textScrolling}
       >
          <Title
            as="p"
            size="3.8vw"
            color="white"
          >
            Присоединяйся к «Битве за данные». Учись. Борись. Побеждай.
          </Title>
       </div>
      </div>
    </section>
  );
};
