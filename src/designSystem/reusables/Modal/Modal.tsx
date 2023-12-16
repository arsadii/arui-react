import React from "react";
import { Modal as AntdModal, ModalFuncProps, ModalProps } from "antd";
import Styles from "./Modal.module.scss";
import { ModalFunc } from "antd/es/modal/confirm";

const { confirm } = AntdModal;

type YgbkModalProps = {
  children?: React.ReactNode;
} & ModalProps;

const Modal: React.FC<YgbkModalProps> & { confirm: ModalFunc } = (props) => {
  return (
    <AntdModal centered footer={false} {...props}>
      {props.children}
    </AntdModal>
  );
};

Modal.confirm = (props: ModalFuncProps) =>
  confirm({
    centered: true,
    okButtonProps: {
      className: Styles["ok-button"],
    },
    cancelButtonProps: {
      className: Styles["cancel-button"],
    },
    ...props,
  });

export default Modal;
