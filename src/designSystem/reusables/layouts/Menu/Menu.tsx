import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Styles from "./Menu.module.scss";
import cn from "classnames";
import { CaretDown, CaretUp } from "phosphor-react";
import { useSetRecoilState } from "recoil";
import { sidebarOpen } from "src/store";
import { Grid } from "antd";
import { userHasPermissions } from "src/security/SecurityHelper";

type YgbkMenuProps = {
  items: YgbkMenuItem[];
};

export type YgbkMenuItem = {
  label: string;
  key: string;
  isActive?: boolean;
  url?: string;
  icon?: React.ReactNode;
  iconActive?: React.ReactNode;
  children?: YgbkMenuItem[];
  permissions?: string[];
  roleExeption?: string[];
};

const { useBreakpoint } = Grid;

const Menu: React.FC<YgbkMenuProps> = ({ items }) => {
  const [menuHasOpen, setMenuHasOpen] = useState<string>("");
  const setSidebarOpen = useSetRecoilState(sidebarOpen);
  const screens = useBreakpoint();

  useEffect(() => {
    handleDefaultOpen();
  }, []);

  const handleDefaultOpen = () => {
    let menuActiveKey: string = "";

    const menuItems: YgbkMenuItem[] = items;

    const checkIfActiveMenu = (menuItems: YgbkMenuItem[]) => {
      menuItems.forEach((menuitem) => {
        if (isActive(menuitem.url ?? "#")) {
          menuActiveKey = menuitem.key[0];
        }

        menuitem?.children && checkIfActiveMenu(menuitem?.children);
      });
    };

    checkIfActiveMenu(menuItems);

    setMenuHasOpen(menuActiveKey);
  };

  const isActive = (url: string) => {
    return window.location.pathname.includes(url);
  };

  const handleToggleMenu = (menuKey: string, menuChild?: YgbkMenuItem[]) => {
    const haveChild = menuChild?.length ? true : false;

    if (haveChild) {
      hasRenderChildMenu(menuKey)
        ? setMenuHasOpen("")
        : setMenuHasOpen(menuKey);
    } else {
      !screens.md && setSidebarOpen(false);
    }
  };

  const hasRenderChildMenu = (menuKey: string) => {
    return menuHasOpen.includes(menuKey);
  };

  const renderDropDownIcon = (
    menuKey: string,
    menuChild: YgbkMenuItem[] | undefined
  ) => {
    const isOpen = hasRenderChildMenu(menuKey);
    const haveChild = menuChild?.length;
    const iconToRender = isOpen ? (
      <CaretUp size={16} />
    ) : (
      <CaretDown size={16} />
    );

    return haveChild && iconToRender;
  };

  const renderMenu = (menuItems: YgbkMenuItem[] | undefined) => {
    let menuItem: React.ReactNode[] = [];
    menuItems?.forEach((menu, key) => {
      const isHavePermission =
        menu.permissions?.length || menu.roleExeption?.length
          ? userHasPermissions(menu.permissions, menu.roleExeption)
          : true;

      const isMenuActive = isActive(menu.url ?? "#");
      isHavePermission &&
        menuItem.push(
          <NavLink
            to={!menu?.children ? menu.url ?? "" : "#"}
            className={cn(Styles["menu"], isMenuActive && Styles["active"])}
            key={menu.key}
          >
            <div
              className={Styles["menu-item"]}
              onClick={() => handleToggleMenu(menu.key, menu?.children)}
            >
              <div className={Styles["menu-title"]}>
                {isMenuActive ? menu.iconActive ?? menu.icon : menu.icon}
                {menu.label}
              </div>
              {renderDropDownIcon(menu.key, menu.children)}
            </div>
            {menu?.children && hasRenderChildMenu(menu.key) && (
              <div className={cn(Styles["container"], Styles["child"])}>
                {renderMenu(menu.children)}
              </div>
            )}
          </NavLink>
        );
    });

    return menuItem;
  };

  return <div className={Styles["container"]}>{renderMenu(items)}</div>;
};

export default Menu;
