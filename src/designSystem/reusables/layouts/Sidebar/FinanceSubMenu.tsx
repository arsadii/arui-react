import { dashboardMenuPrefix } from "src/helper/UrlHelper";
import { YgbkMenuItem } from "../Menu/Menu";

const FinanceSubMenu: YgbkMenuItem[] = [
  {
    key: "71",
    label: "Dashboard",
    url: dashboardMenuPrefix + "/finance/dashboard",
  },
  {
    key: "72",
    label: "Laporan Keuangan",
    url: dashboardMenuPrefix + "/finance/report",
    permissions: ["read finance report"],
  },
  {
    key: "73",
    label: "Arsip Dokumen",
    url: dashboardMenuPrefix + "/finance/archive",
    permissions: ["read finance archive"],
  },
];

export default FinanceSubMenu;
