import DownloadOutlined from "@ant-design/icons/lib/icons/DownloadOutlined";
import { Button, Modal } from "antd";
import { useState } from "react";
import DataUpload from "./DataUpload";

const Data = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  function openAndCloseModal() {
    setIsModalOpen((prev) => !prev);
  }
  return (
    <>
      <Button
        type="primary"
        icon={<DownloadOutlined />}
        onClick={openAndCloseModal}
        size="middle"
      >
        add data
      </Button>
      <Modal
        centered
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
        cancelButtonProps={{
          style: {
            borderColor: "red",
            color: "red",
          },
        }}
      >
        <DataUpload openAndCloseModal={openAndCloseModal} />
      </Modal>
    </>
  );
};

export default Data;
