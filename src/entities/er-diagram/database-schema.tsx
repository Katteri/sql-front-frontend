import { Handle, Position } from "@xyflow/react";
import { Text } from "@/shared/ui/text/text";
import cn from "classnames";

import styles from "./database-schema.module.scss";

export type DatabaseSchemaNodeType = {
  data: {
    label: string;
    description: string;
    columns: { title: string; type: string }[];
  };
};

export const DatabaseSchema = ({ data }: DatabaseSchemaNodeType) => {
  return (
    <div className={styles.card}>
      <div className={styles.innerContent}>
        <Text size="1.2vw">{data.label}</Text>
        <Text color="grayMid" size="1vw">{data.description}</Text>

        <div className={styles.rowsBlock}>
          {data.columns.map((entry) => (
            <div key={entry.title} className={styles.row}>
              <Handle
                type="target"
                position={Position.Left}
                id={`target:${entry.title}`}
                className={cn(styles.handle, styles.handleTarget)}
              />

              <Text>{entry.title}&nbsp;&nbsp;</Text>
              <Text color="grayMid">{entry.type}</Text>

              <Handle
                type="source"
                position={Position.Right}
                id={`source:${entry.title}`}
                className={cn(styles.handle, styles.handleSource)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
