import { Table } from "@/shared/ui/table/table";
import { Text } from "@/shared/ui/text/text";
import { ResultQueryDataType } from "@/shared/types/task-type";

type ErrorRunngingQuery = {
  detail: string,
};

const isExtractedTableData = (
  data: ResultQueryDataType | ErrorRunngingQuery
): data is ResultQueryDataType => {
  return (
    typeof data === "object" &&
    data !== null &&
    "columns" in data &&
    "data" in data &&
    Array.isArray(data.columns) &&
    Array.isArray(data.data)
  );
};

export const ResultTable = ({
  data,
}: {
  data: ResultQueryDataType | ErrorRunngingQuery,
}) => {
  if (isExtractedTableData(data)) {
    const resultData = { columns: data.columns, data: data.data };

    return (
      <>
        <Table data={resultData} height="23vw"/>
        <Text margin="0.5vw 0 0">Всего строк: {data.row_count}</Text>
      </>
    );
  }

  return (
    <Text>{data.detail}</Text>
  );
};
