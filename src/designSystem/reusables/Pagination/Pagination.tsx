import { PaginationProps, Pagination as AntdPagination, Tooltip } from "antd";
import { Trash } from "phosphor-react";
import React from "react";
import Button from "../Button";
import Styles from "./Pagination.module.scss";
import cn from "classnames";

type YgbkPaginationProps = {
  onClickTrash?: () => void;
  withTrash?: boolean;
  metaData?: any;
} & PaginationProps;

const Pagination: React.FC<YgbkPaginationProps> = ({
  withTrash,
  onClickTrash,
  metaData,
  ...props
}) => {
  const handleClassNames = () => {
    const containerClassname = Styles["container"];
    const withTrashClassname = withTrash ? Styles["with-trash"] : "";

    return cn(containerClassname, withTrashClassname);
  };

  return (
    <div data-testid="ygbk-pagination" className={handleClassNames()}>
      {withTrash ? (
        <Tooltip title="Lihat data terhapus">
          <Button data-testid="trash-btn" onClick={onClickTrash} type="dashed">
            <Trash size={24} weight="fill" color="gray" />
          </Button>
        </Tooltip>
      ) : (
        <></>
      )}

      <AntdPagination
        showSizeChanger
        total={metaData?.total ?? 0}
        defaultCurrent={1}
        current={metaData?.current_page ?? 1}
        pageSize={metaData?.per_page ?? 10}
        {...props}
      />
    </div>
  );
};

export default Pagination;
