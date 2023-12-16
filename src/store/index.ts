import { atom } from "recoil";

type PrintData = {
  userId: string;
  data: any;
  userName: string;
  periode: string;
};

export const sidebarOpen = atom({
  key: "sidebarOpen",
  default: true,
});

export const userLoginData = atom({
  key: "userLoginData",
  default: undefined,
});

export const printData = atom<Partial<PrintData>>({
  key: "printData",
  default: {
    data: undefined,
    userId: "",
    userName: "",
    periode: "",
  },
});
