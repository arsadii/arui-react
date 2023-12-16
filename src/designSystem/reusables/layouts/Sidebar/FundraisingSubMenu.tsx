import { dashboardMenuPrefix } from "src/helper/UrlHelper";
import { YgbkMenuItem } from "../Menu/Menu";

const FundraisingSubMenu: YgbkMenuItem[] = [
  {
    key: "61",
    label: "Dashboard",
    url: dashboardMenuPrefix + "/fundraising/dashboard",
  },
  {
    key: "62",
    label: "Donasi",
    permissions: ["read donation"],
    children: [
      {
        key: "621",
        label: "Catat Donasi",
        url: dashboardMenuPrefix + "/fundraising/donasi/list",
      },
      {
        key: "622",
        label: "Jenis Donasi",
        url: dashboardMenuPrefix + "/fundraising/donasi/type",
      },
      {
        key: "623",
        label: "Channel Donasi",
        url: dashboardMenuPrefix + "/fundraising/donasi/channel",
      },
    ],
  },
  {
    key: "63",
    label: "Donatur",
    permissions: ["read donatur"],
    children: [
      {
        key: "631",
        url: dashboardMenuPrefix + "/fundraising/donatur/list",
        label: "List Donatur",
      },
      {
        key: "632",
        url: dashboardMenuPrefix + "/fundraising/donatur/status",
        label: "Status Donatur",
      },
      {
        key: "633",
        url: dashboardMenuPrefix + "/fundraising/donatur/type",
        label: "Jenis Donatur",
      },
      {
        key: "634",
        url: dashboardMenuPrefix + "/fundraising/donatur/job",
        label: "Pekerjaan",
      },
      {
        key: "635",
        url: dashboardMenuPrefix + "/fundraising/donatur/source",
        label: "Sumber Data",
      },
    ],
  },
  {
    key: "64",
    label: "Rekening",
    url: dashboardMenuPrefix + "/fundraising/rekening",
    permissions: ["read rekening"],
  },
];

export default FundraisingSubMenu;
