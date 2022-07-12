import React, { useState } from "react";
import { Options } from "./ConfirmContext";
import { Button, Modal, ModalProps } from "antd";

export type ConfirmationDialogOwnProps = {
  open: boolean;
  options: Options;
  onOk: (result: boolean) => void;
};
export type ConfirmationDialogProps = {
  visible: boolean;
  options: Options;
  onOk: (result: boolean) => void;
} & Omit<ModalProps, keyof ConfirmationDialogOwnProps>;
const ConfirmationDialog = ({
  visible,
  options: { title, description, okButtonText, cancelButtonText },
  onOk,
  ...props
}: ConfirmationDialogProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    onOk(false);
  };

  const handleOk = () => {
    onOk(true);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default ConfirmationDialog;
