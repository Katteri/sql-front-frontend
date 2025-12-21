import styles from "./table.module.scss";

type TableProps = {
  data: {
    columns: string[],
    data: (number | string)[][],
  },
  height?: string,
};

export const Table = ({ data: { columns, data }, height }: TableProps) => {
  return (
    <div
      className={styles.tableWrapper}
      style={{
        "--height": height,
      } as React.CSSProperties}
    >
      <table className={styles.table}>
        <thead className={styles.header}>
          <tr>
            {columns.map((columnName, index) => (
              <th
                key={`column-${index}`}
              >
                {columnName}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={styles.body}>
          {data.map((row, index) => (
            <tr
              key={`row-${index}`}
            >
              {row.map((data, index) => (
                <td
                  key={`data-${index}`}
                >
                  {data}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
