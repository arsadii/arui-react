import React, { useState } from "react";
import Styles from "./PageHeader.module.scss";
import { Bell, CaretDown, List } from "phosphor-react";
import { Breadcrumb, Dropdown, Grid, MenuProps } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { sidebarOpen } from "src/store";
import { UserDataFromTokenType } from "src/layout/MainLayout/MainLayout";
import Button from "../../Button";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { dashboardMenuPrefix } from "src/helper/UrlHelper";
import YgbkApi from "src/api/YgbkApi";
import Modal from "src/designSystem/reusables/Modal";
import { GetErrorMessage } from "src/helper/FormHelper";

const { useBreakpoint } = Grid;
const { confirm } = Modal;

export type YgbkPageHeaderProps = {
  pageTitle?: React.ReactNode;
  breadCrumb?: YgbkBreadcrumbType[];
  userData?: UserDataFromTokenType;
};

export type YgbkBreadcrumbType = {
  label: string;
  url?: string;
};

const PageHeader: React.FC<YgbkPageHeaderProps> = ({
  pageTitle,
  breadCrumb,
  userData,
}) => {
  const go = useNavigate();
  const screens = useBreakpoint();
  const [openSidebar, setOpenSidebar] = useRecoilState(sidebarOpen);

  const logoutMutation = useMutation({
    mutationFn: async () =>
      YgbkApi.post("logout")
        .then((res) => {
          window.location.href = "/";
          localStorage.removeItem("token");
          localStorage.removeItem("user");
        })
        .catch((err) => {
          toast.error(GetErrorMessage(err));
        }),
  });

  const handleLogout = () => {
    confirm({
      content: (
        <div className={Styles["confirm-container"]}>
          <p className={Styles["word"]}>Kamu mau pergi? </p>
        </div>
      ),
      icon: <></>,
      okText: "Iya",
      okButtonProps: {
        danger: true,
      },
      cancelText: "Gak jadi",
      cancelButtonProps: {
        type: "primary",
        className: Styles["btn-primary"],
      },
      onOk: () => logoutMutation.mutate(),
    });
  };

  const UserItem: MenuProps = {
    items: [
      {
        key: "1",
        label: (
          <div className="">
            <Button
              block
              onClick={() => go(dashboardMenuPrefix + "/profile")}
              type="link"
            >
              Profil Saya
            </Button>
          </div>
        ),
      },
      {
        key: "2",
        label: (
          <div className="">
            <Button
              loading={logoutMutation.isPending}
              block
              onClick={handleLogout}
              danger
              type="link"
            >
              Keluar
            </Button>
          </div>
        ),
      },
    ],
  };

  return (
    <div className={Styles["container"]}>
      <div className={Styles["page-identity"]}>
        <div
          role="button"
          onClick={() => setOpenSidebar(!openSidebar)}
          className={Styles["toggle-button"]}
        >
          <List size={24} className={Styles["toggle-icon"]} weight="fill" />
        </div>
        <div>
          {screens.sm && <RenderBreadcrumb items={breadCrumb ?? []} />}
          <h2 className={Styles["page-title"]}>{pageTitle}</h2>
        </div>
      </div>
      <div className={Styles["top-menu"]}>
        <div className={Styles["notification-button"]}>
          <Bell size={32} />
        </div>

        <Dropdown
          className={Styles["user-menu"]}
          menu={UserItem}
          placement="topRight"
        >
          <div className={Styles["avatar-container"]}>
            <img src={userData?.avatar} className={Styles["avatar"]}></img>
            {!screens.xs && (
              <>
                <p className={Styles["user-name"]}>{userData?.username}</p>
                <CaretDown size={16} />
              </>
            )}
          </div>
        </Dropdown>
      </div>
    </div>
  );
};

type BreadcrumbProps = {
  items: YgbkBreadcrumbType[];
};

const RenderBreadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <Breadcrumb className={Styles["breadcrumbs"]}>
      {items?.map((bread, key) => {
        return (
          <Breadcrumb.Item key={key}>
            <NavLink to={bread.url ?? "#"}>{bread.label}</NavLink>
          </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
  );
};

export default PageHeader;
