import React from "react";
import AppLogo from "src/designSystem/reusables/AppLogo";
import Styles from "./AuthLayout.module.scss";
import { Row, Col } from "antd";
import Card from "src/designSystem/reusables/layouts/Card";
import { Toaster } from "react-hot-toast";

type AuthLayoutProps = { children: React.ReactNode };

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <main className={Styles["container"]}>
      <Toaster />
      <div className={Styles["bg-brand"]}>
        <div className={Styles["logo-container"]}>
          <AppLogo colorMode="white" />
        </div>
      </div>
      <Row
        align={"middle"}
        justify="center"
        className={Styles["content-container"]}
      >
        <Col
          xs={{ offset: 0, span: 24 }}
          sm={{ offset: 0, span: 18 }}
          md={{ offset: 0, span: 12 }}
          lg={{ offset: 12, span: 8 }}
          span={8}
        >
          <Card>{children}</Card>
        </Col>
      </Row>
    </main>
  );
};

export default AuthLayout;
