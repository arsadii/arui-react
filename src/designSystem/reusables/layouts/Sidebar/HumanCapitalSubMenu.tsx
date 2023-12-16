import { dashboardMenuPrefix } from "src/helper/UrlHelper";
import { YgbkMenuItem } from "../Menu/Menu";

const HumanCapitalSubMenu: YgbkMenuItem[] = [
  {
    label: "Dashboard",
    key: "89",
    url: dashboardMenuPrefix + "/human-capital/dashboard",
  },
  {
    label: "Amil",
    key: "81",
    url: dashboardMenuPrefix + "/human-capital/amil",
    permissions: ["read user"],
  },
  {
    label: "Aset",
    key: "82",
    url: dashboardMenuPrefix + "/human-capital/aset",
    roleExeption: ["super admin", "user"],
  },
  {
    label: "KPI",
    key: "88",
    url: dashboardMenuPrefix + "/human-capital/kpi",
    permissions: ["read kpi"],
  },
  {
    label: "FRK",
    key: "83",
    url: dashboardMenuPrefix + "/human-capital/frk",
    permissions: ["read work_plan"],
  },
  {
    label: "Struktur Lembaga",
    key: "84",
    url: dashboardMenuPrefix + "/human-capital/structure",
    permissions: ["read structure"],
  },
  {
    label: "Aturan",
    key: "85",
    url: dashboardMenuPrefix + "/human-capital/rules",
    permissions: ["read rules"],
  },
  {
    label: "Arsip Dokumen",
    key: "86",
    url: dashboardMenuPrefix + "/human-capital/archive",
    permissions: ["read document archive"],
  },
  {
    label: "Hak Akses",
    key: "87",
    url: dashboardMenuPrefix + "/human-capital/permission",
    permissions: ["read permission", "read role"],
  },
  {
    label: "Hari Libur",
    key: "88",
    url: dashboardMenuPrefix + "/human-capital/holiday",
    // permissions: ["read holiday"],
  },
  {
    label: "Pengaturan",
    key: "89",
    url: dashboardMenuPrefix + "/human-capital/settings",
    roleExeption: ["user"],
  },
];

export default HumanCapitalSubMenu;
