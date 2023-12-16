import { Drawer, Grid } from "antd";
import React from "react";
import { useRecoilState } from "recoil";
import { sidebarOpen } from "src/store";
import AppLogo from "../../AppLogo";
import Menu from "../Menu";
import Styles from "./Sidebar.module.scss";
import { MenuItem } from "./SidebarMenu";

const { useBreakpoint } = Grid;

const SidebarDrawer = () => {
  const screens = useBreakpoint();
  const [openSidebar, setOpenSidebar] = useRecoilState(sidebarOpen);

  const handleOpenDrawer = (isOpen: boolean) => {
    let filteredScreens = Object.entries(screens).filter((scr) => scr[1]);
    return !screens.md && isOpen;
  };

  return (
    <Drawer
      width={"100vw"}
      placement="left"
      open={handleOpenDrawer(openSidebar)}
      className={Styles["custom-sider"]}
      onClose={() => setOpenSidebar(false)}
    >
      <div className={Styles["logo"]}>
        <AppLogo colorMode="green" />
      </div>
      <div className={Styles["menu-container"]}>
        <Menu items={MenuItem} />
      </div>
    </Drawer>
  );
};

export default SidebarDrawer;
