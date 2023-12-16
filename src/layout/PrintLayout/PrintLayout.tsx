import { Layout } from "antd";
import React from "react";
import { Outlet } from "react-router-dom";

const PrintLayout: React.FC = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default PrintLayout;
