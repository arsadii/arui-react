import { Layout } from "antd";
import React, { useState } from "react";
import Menu from "src/designSystem/reusables/layouts/Menu";
import AppLogo from "../../AppLogo";
import Styles from "./Sidebar.module.scss";
import { MenuItem } from "./SidebarMenu";

const { Sider } = Layout;

const Sidebar: React.FC = () => {
  return (
    <Sider width={"250px"} className={Styles["custom-sider"]} theme="light">
      <div className={Styles["logo"]}>
        <AppLogo colorMode="green" />
      </div>
      <div className={Styles["menu-container"]}>
        <Menu items={MenuItem} />
      </div>
    </Sider>
  );
};

export default Sidebar;
