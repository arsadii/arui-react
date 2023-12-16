import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConfigProvider } from "antd";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { CustomTheme } from "./antdThemeConfig";
import routes from "./routes/routes";

const MINUTE = 1000 * 60;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: true,
      retry: false,
      gcTime: 5 * MINUTE,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ConfigProvider theme={CustomTheme}>
        <RecoilRoot>
          <RouterProvider router={routes} />
        </RecoilRoot>
      </ConfigProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
