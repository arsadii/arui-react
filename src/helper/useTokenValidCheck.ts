import { getDecryptedLocalStorage } from "./EncryptLocalStorage";
import { useState } from "react";
import { UserDataFromTokenType } from "src/layout/MainLayout/MainLayout";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import YgbkApi from "src/api/YgbkApi";

const useTokenValidCheck = () => {
  const [userData, setUserData] = useState<UserDataFromTokenType>();
  const go = useNavigate();

  const token = getDecryptedLocalStorage("token");

  const checkToken = useQuery({
    queryKey: ["check-token"],
    queryFn: async () =>
      await YgbkApi.get("users/auth-revalidate", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          setUserData(res.data?.field?.user);
          return res;
        })
        .catch((err) => {
          go("/login");
          setUserData(undefined);
          return err;
        }),
    enabled: Boolean(token.length),
  });

  return {
    checkToken,
    userData,
  };
};

export default useTokenValidCheck;
