import { Grid, Layout } from "antd";
import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import { Outlet, useOutletContext } from "react-router-dom";
import { useRecoilValue } from "recoil";
import PageHeader from "src/designSystem/reusables/layouts/PageHeader";
import { YgbkBreadcrumbType } from "src/designSystem/reusables/layouts/PageHeader/PageHeader";
import Sidebar from "src/designSystem/reusables/layouts/Sidebar";
import SidebarDrawer from "src/designSystem/reusables/layouts/Sidebar/SidebarDrawer";
import { sidebarOpen } from "src/store";
import Styles from "./MainLayout.module.scss";

const { Content } = Layout;

type MainLayoutProps = {};

export type UserDataFromTokenType = {
  avatar: string;
  id: string;
  name: string;
  username: string;
  email: string;
  branch_office: {
    id: string;
    name: string;
  };
  department: {
    id: string;
    name: string;
  };
  roles: string[];
  permissions: string[];
};

export type LayoutContextType = {
  setBreadcrumb: React.Dispatch<React.SetStateAction<YgbkBreadcrumbType[]>>;
  setPageTitle: React.Dispatch<React.SetStateAction<string>>;
  userData?: UserDataFromTokenType;
};

export type YgbkTokenType = {
  exp: number;
  user: UserDataFromTokenType;
};

const { useBreakpoint } = Grid;

const MainLayout: React.FC<MainLayoutProps> = () => {
  const { userData } = useLayoutContext();

  const [breadcrumb, setBreadcrumb] = useState<YgbkBreadcrumbType[]>([]);
  const [pageTitle, setPageTitle] = useState<string>("");
  const isSidebarOpen = useRecoilValue(sidebarOpen);
  const screens = useBreakpoint();

  return (
    <Layout className={Styles["custom-layout"]}>
      <Toaster />
      {!screens.md && <SidebarDrawer />}
      {isSidebarOpen && screens.md && <Sidebar />}

      <Layout className={Styles["content-layout"]}>
        <PageHeader
          breadCrumb={breadcrumb}
          pageTitle={pageTitle}
          userData={userData}
        />
        <Content className={Styles["content"]}>
          {<Outlet context={{ setBreadcrumb, setPageTitle, userData }} />}
        </Content>
      </Layout>
    </Layout>
  );
};

export function useLayoutContext() {
  return useOutletContext<LayoutContextType>();
}

export default MainLayout;
