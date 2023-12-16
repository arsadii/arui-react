import { SearchOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import React from "react";
import Input from "src/designSystem/reusables/Form/Input";

type YgbkToolbarProps = {
  withSearch?: boolean;
  children?: React.ReactNode;
  onSearch?: (value: string) => void;
};

const Toolbar: React.FC<YgbkToolbarProps> = ({
  children,
  withSearch = false,
  onSearch,
}) => {
  return (
    <Row
      gutter={[8, 8]}
      justify={"space-between"}
      style={{ marginBottom: "16px" }}
    >
      <Col xs={{ span: 24, order: 2 }} md={{ span: 12, order: 1 }}>
        {withSearch && (
          <Input
            onChange={(e) => onSearch && onSearch(e.target.value)}
            prefix={<SearchOutlined />}
            placeholder="Cari ..."
          />
        )}
      </Col>
      <Col xs={{ span: 24, order: 1 }} md={{ span: 12, order: 2 }}>
        <Row gutter={[8, 8]} justify={{ sm: "space-between", md: "end" }}>
          {children}
        </Row>
      </Col>
    </Row>
  );
};

export default Toolbar;
