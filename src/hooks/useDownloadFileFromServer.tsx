import { useMutation, useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-hot-toast";
import YgbkApi from "src/api/YgbkApi";
import { GetErrorMessage, HandleErrorResponse } from "src/helper/FormHelper";

type DownloadFileFromServerInput = {
  url: string;
  fileName: string;
  fileExtension: string;
};

const useDownloadFileFromServer = () => {
  return useMutation({
    mutationFn: async (input: DownloadFileFromServerInput) =>
      await toast.promise(
        YgbkApi.get(input.url, {
          responseType: "blob",
        })
          .then((res) => {
            const url = window.URL.createObjectURL(new Blob([res.data]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", input.fileName + input.fileExtension);
            document.body.appendChild(link);
            link.click();
            link.remove();
            window.URL.revokeObjectURL(url);
            return res;
          })
          .catch((err) => {
            toast.error(GetErrorMessage(err));
            return err;
          }),
        {
          error: "Pengunduhan gagal!",
          loading: "Sedang mengunduh ..",
          success: "Berhasil mengunduh!",
        }
      ),
  });
};

export default useDownloadFileFromServer;
