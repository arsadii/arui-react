import {
  Flex,
  Image,
  Upload as AntdUpload,
  UploadFile,
  UploadProps,
  Typography,
} from "antd";
import React, { useEffect, useState } from "react";
import { useLayoutContext } from "src/layout/MainLayout/MainLayout";
import Styles from "./ProfilePictureCard.module.scss";
import Button from "src/designSystem/reusables/Button";
import toast from "react-hot-toast";
import { RcFile } from "antd/es/upload";
import Modal from "../Modal";

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

type ProfilePictureCardProps = {
  onSubmit?: (file?: UploadFile) => void;
  isLoading?: boolean;
  errorMessage?: string;
};

const ProfilePictureCard: React.FC<ProfilePictureCardProps> = ({
  onSubmit,
  isLoading,
  errorMessage,
}) => {
  const { userData } = useLayoutContext();
  const [previewImage, setPreviewImage] = useState<string>("");
  const [previewOpen, setPreviewOpen] = useState<boolean>(false);
  const maxSize = 2097152;

  const [fileList, setFileList] = useState<UploadFile[]>();

  const beforeUploadValidate: UploadProps["beforeUpload"] = (file) => {
    const isAllowed = ["image/png", "image/jpeg"]?.some(
      (uploadType: string) => uploadType === file.type
    );

    if (!isAllowed) {
      toast.error(
        `Jenis dari ${file.name} tidak diizinkan! Hanya boleh file PNG/JPG`
      );
      return AntdUpload.LIST_IGNORE;
    }

    if (file.size > maxSize) {
      toast.error(`${file.name} melebihi kapasitas! Gambar maksimal 2 Mb`);
      return AntdUpload.LIST_IGNORE;
    }

    return false;
  };

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
  };

  const handleCancel = () => setPreviewOpen(false);

  const handleSubmit = () => {
    onSubmit && onSubmit(fileList?.length ? fileList[0] : undefined);
  };

  return (
    <Flex gap={16} vertical>
      <Modal open={previewOpen} footer={null} onCancel={handleCancel}>
        <img alt="example" style={{ width: "100%" }} src={previewImage} />
      </Modal>
      {fileList?.length ? (
        <>
          <AntdUpload
            disabled={isLoading}
            onPreview={handlePreview}
            fileList={fileList}
            onChange={(info) => setFileList(info.fileList)}
            listType="picture-circle"
          />
          {errorMessage && (
            <Typography className={Styles["error-helper"]}>
              {errorMessage}
            </Typography>
          )}
        </>
      ) : (
        <div className="">
          <Image className={Styles["picture-img"]} src={userData?.avatar} />
        </div>
      )}

      <AntdUpload
        style={{
          display: fileList?.length ? "none" : "block",
        }}
        beforeUpload={beforeUploadValidate}
        fileList={fileList}
        onChange={(info) => setFileList(info.fileList)}
        showUploadList={false}
      >
        {!fileList?.length ? <Button>Ganti foto</Button> : null}
      </AntdUpload>

      {fileList?.length ? (
        <Flex gap={8} className={Styles["action-btn"]}>
          <Button disabled={isLoading} onClick={() => setFileList([])} danger>
            Batal
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={isLoading}
            loading={isLoading}
            type="primary"
          >
            Simpan
          </Button>
        </Flex>
      ) : null}
    </Flex>
  );
};

export default ProfilePictureCard;
