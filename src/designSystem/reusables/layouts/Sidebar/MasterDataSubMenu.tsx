import { dashboardMenuPrefix } from "src/helper/UrlHelper";
import { YgbkMenuItem } from "../Menu/Menu";

const MasterDataSubMenu: YgbkMenuItem[] = [
  {
    label: "Jabatan",
    key: "91",
    url: dashboardMenuPrefix + "/master-data/position",
    permissions: ["create position"],
  },
  {
    label: "Departemen",
    key: "92",
    url: dashboardMenuPrefix + "/master-data/department",
    permissions: ["create department"],
  },
  {
    label: "Divisi",
    key: "93",
    url: dashboardMenuPrefix + "/master-data/division",
    permissions: ["create division"],
  },
  {
    label: "Kantor",
    key: "94",
    url: dashboardMenuPrefix + "/master-data/office",
    permissions: ["create office"],
  },
];

export default MasterDataSubMenu;
