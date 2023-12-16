import { YgbkMenuItem } from "../Menu/Menu";

const dashboardMenuPrefix = import.meta.env.VITE_DASHBOARD_MENU_PREFIX;

const ProgramSubMenu: YgbkMenuItem[] = [
  {
    label: "Dashboard",
    key: "51",
    url: dashboardMenuPrefix + "/programs/dashboard",
  },
  {
    label: "Manajemen Program",
    key: "52",
    url: dashboardMenuPrefix + "/programs/manage",
    permissions: ["read program"],
  },
  {
    label: "Relawan",
    key: "53",
    url: dashboardMenuPrefix + "/programs/volunteer",
    permissions: ["read volunteer"],
  },
  {
    label: "LPJ",
    key: "54",
    url: dashboardMenuPrefix + "/programs/report",
    permissions: ["read program report"],
  },
  {
    label: "Paket Bantuan",
    key: "55",
    url: dashboardMenuPrefix + "/programs/suplies",
    permissions: ["read program suplies"],
  },
  {
    label: "Arsip Proposal",
    key: "56",
    url: dashboardMenuPrefix + "/programs/archive",
    permissions: ["read program archive"],
  },
];

export default ProgramSubMenu;
