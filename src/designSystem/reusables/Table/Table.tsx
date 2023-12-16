import React from "react";
import { Table as AntdTable, TableProps } from "antd";

type YgbkTableProps = {} & TableProps<any>;

const Table: React.FC<YgbkTableProps> = (props) => {
  return <AntdTable scroll={{ x: "max-content" }} size="small" {...props} />;
};

export default Table;
