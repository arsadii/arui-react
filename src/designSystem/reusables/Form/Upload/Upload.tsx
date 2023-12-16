import React, { useState } from "react";
import { Upload as AntdUpload, UploadProps as AntdUploadProps } from "antd";
import Styles from "./Upload.module.scss";
import toast from "react-hot-toast";
import { RcFile, UploadFile } from "antd/es/upload";
import Modal from "../../Modal";
import { InboxOutlined } from "@ant-design/icons";
import cn from "classnames";

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

interface UploadProps extends AntdUploadProps {
  maxSize?: number;
  acceptedType: string[];
  placeholderText?: string;
  isError?: boolean;
  errorHelper?: string;
}

const Upload: React.FC<UploadProps> = ({
  maxSize = 2097152,
  placeholderText = "Upload file",
  isError,
  errorHelper,
  ...props
}) => {
  const [previewImage, setPreviewImage] = useState<string>("");
  const [previewTitle, setPreviewTitle] = useState<string>("");
  const [previewOpen, setPreviewOpen] = useState<boolean>(false);

  const beforeUploadValidate: AntdUploadProps["beforeUpload"] = (file) => {
    const isAllowed = props.acceptedType?.some(
      (uploadType: string) => uploadType === file.type
    );

    if (!isAllowed) {
      toast.error(`${file.name} tidak diizinkan!`);
      return AntdUpload.LIST_IGNORE;
    }

    if (file.size > maxSize) {
      toast.error(`${file.name} melebihi kapasitas!`);
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
    setPreviewTitle(
      file.name || file.url!.substring(file.url!.lastIndexOf("/") + 1)
    );
  };

  const handleCancel = () => setPreviewOpen(false);
  return (
    <>
      <Modal
        open={previewOpen}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img alt="example" style={{ width: "100%" }} src={previewImage} />
      </Modal>
      <AntdUpload
        beforeUpload={beforeUploadValidate}
        listType="picture"
        fileList={props.fileList}
        onPreview={handlePreview}
        onChange={props.onChange}
        className={cn(Styles["upload"], { [Styles["error"]]: isError })}
        maxCount={1}
      >
        <button type="button" className={Styles["btn"]}>
          <div className={Styles["placeholder"]}>
            <InboxOutlined className={Styles["icon"]} />
            {placeholderText}
          </div>

          <span className={Styles["helper"]}>
            Pilih atau tarik file kesini untuk menambahkan.
          </span>
          {isError && (
            <div className={cn(Styles["helper"], Styles["error"])}>
              {errorHelper}
            </div>
          )}
        </button>
      </AntdUpload>
    </>
  );
};

export default Upload;
