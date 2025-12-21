import { Table } from "@/shared/ui/table/table";
import { Text } from "@/shared/ui/text/text";

type ExtractedTableData = {
  columns: string[],
  data: (number | string)[][],
  row_count: number,
}

type ErrorRunngingQuery = {
  detail: string,
}

const isExtractedTableData = (
  data: ExtractedTableData | ErrorRunngingQuery
): data is ExtractedTableData => {
  return (
    typeof data === "object" &&
    data !== null &&
    "columns" in data &&
    "data" in data &&
    Array.isArray(data.columns) &&
    Array.isArray(data.data)
  );
};

export const Result = ({
  data,
}: {
  data: ExtractedTableData | ErrorRunngingQuery,
}) => {
  if (isExtractedTableData(data)) {
    const resultData = { columns: data.columns, data: data.data };

    return (
      <Table data={resultData} height="23vw"/>
    );
  }

  return (
    <Text>{data.detail}</Text>
  );
};
