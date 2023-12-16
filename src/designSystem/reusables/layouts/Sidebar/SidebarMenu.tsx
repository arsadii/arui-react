import { YgbkMenuItem } from "../Menu/Menu";
import {
  House,
  CalendarCheck,
  Buildings,
  Coins,
  Storefront,
  CreditCard,
  HardDrives,
  Fingerprint,
  ShoppingCart,
  ListChecks,
} from "phosphor-react";
import ProgramSubMenu from "./ProgramSubMenu";
import FundraisingSubMenu from "./FundraisingSubMenu";
import HumanCapitalSubMenu from "./HumanCapitalSubMenu";
import MasterDataSubMenu from "./MasterDataSubMenu";
import FinanceSubMenu from "./FinanceSubMenu";
import { dashboardMenuPrefix } from "src/helper/UrlHelper";

const iconsSize = 20;

export const MenuItem: YgbkMenuItem[] = [
  {
    label: "Dashboard",
    key: "1",
    url: dashboardMenuPrefix + "/dashboard",
    icon: <House size={iconsSize} weight="regular" />,
    iconActive: <House size={iconsSize} weight="fill" />,
  },
  {
    label: "Absen",
    key: "2",
    url: dashboardMenuPrefix + "/absen",
    icon: <Fingerprint size={iconsSize} weight="regular" />,
    iconActive: <Fingerprint size={iconsSize} weight="fill" />,
    permissions: ["read presence"],
    roleExeption: ["super admin"],
  },
  {
    label: "Task Management",
    key: "3",
    url: dashboardMenuPrefix + "/task-management",
    icon: <CalendarCheck size={iconsSize} weight="regular" />,
    iconActive: <CalendarCheck size={iconsSize} weight="fill" />,
    permissions: ["read task"],
    roleExeption: ["super admin"],
  },
  {
    label: "Approval",
    key: "90",
    url: dashboardMenuPrefix + "/human-capital/approval",
    icon: <ListChecks size={iconsSize} weight="regular" />,
    iconActive: <ListChecks size={iconsSize} weight="fill" />,
  },
  {
    label: "PPD",
    key: "4",
    url: dashboardMenuPrefix + "/ppd",
    icon: <ShoppingCart size={iconsSize} weight="regular" />,
    iconActive: <ShoppingCart size={iconsSize} weight="fill" />,
    permissions: ["read ppd"],
  },
  {
    label: "Program",
    key: "5",
    icon: <Storefront size={iconsSize} weight="regular" />,
    iconActive: <Storefront size={iconsSize} weight="fill" />,
    children: ProgramSubMenu,
    permissions: [
      "read program",
      "read volunteer",
      "read program report",
      "read program suplies",
      "read program archive",
    ],
  },
  {
    label: "Fundraising",
    key: "6",
    icon: <Coins size={iconsSize} weight="regular" />,
    iconActive: <Coins size={iconsSize} weight="fill" />,
    children: FundraisingSubMenu,
    permissions: ["read fundraising"],
  },
  {
    label: "Finance",
    key: "7",
    icon: <CreditCard size={iconsSize} weight="regular" />,
    iconActive: <CreditCard size={iconsSize} weight="fill" />,
    children: FinanceSubMenu,
    permissions: ["read finance"],
  },

  {
    label: "Human Capital",
    key: "8",
    icon: <Buildings size={iconsSize} weight="regular" />,
    iconActive: <Buildings size={iconsSize} weight="fill" />,
    children: HumanCapitalSubMenu,
    permissions: [
      "read user",
      "read aset",
      "read kpi",
      "read work_plan",
      "read structure",
      "read rules",
      "read document archive",
      "read permission",
      "read role",
    ],
  },
  {
    label: "Master Data",
    key: "9",
    icon: <HardDrives size={iconsSize} weight="regular" />,
    iconActive: <HardDrives size={iconsSize} weight="fill" />,
    children: MasterDataSubMenu,
    permissions: [
      "create position",
      "create department",
      "create division",
      "create office",
    ],
  },
];
