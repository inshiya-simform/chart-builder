import { Button, Card, Flex, notification, Space, Typography } from "antd";
import { useAppDispatch } from "../../../store/hook";
import { chartActions, initialState } from "../../../store";
import { csvToObject } from "../../../utils/csvToObject";
import { DownloadOutlined, InboxOutlined } from "@ant-design/icons";
import Dragger from "antd/es/upload/Dragger";
import { useRef } from "react";
import Input, { type InputRef } from "antd/es/input/Input";

interface DataUploadProp {
  openAndCloseModal: () => void;
}

const DataUpload = ({ openAndCloseModal }: DataUploadProp) => {
  const dispatch = useAppDispatch();
  const [api, contextHolder] = notification.useNotification();
  const inputRef = useRef<InputRef>(null);
  function handleFile(file: File) {
    if (file.name.split(".").pop() === "csv") {
      const reader = new FileReader();
      reader.readAsText(file);
      reader.onload = (event) => {
        const csvContent = event.target?.result as string;
        const data = csvToObject(
          csvContent,
          inputRef.current?.input?.value || "",
        );
        dispatch(chartActions.setData(data));
        api.success({
          message: "Data uploaded successfully!",
          placement: "topRight",
        });
        openAndCloseModal();
      };
    } else {
      api.error({
        message: "Please upload a valid CSV file.",
        placement: "topRight",
      });
    }
    return false;
  }

  return (
    <Space direction="vertical" align="start" className="full-width">
      {contextHolder}
      <Typography.Title className="upload-heading" level={4}>
        Dataset
      </Typography.Title>
      <Input
        id="label"
        placeholder="Enter label for dataset"
        ref={inputRef}
        type="text"
      />
      <Card>
        <Flex justify="space-between">
          <div>
            <p className="sample-csv-text">
              label,yValue,backgroundColor,borderColor
            </p>
            <p className="sample-csv-text">January,40,#4bc0c0,#4bc0c0</p>
            <p className="sample-csv-text">February,55,#9966ff,#9966ff</p>
            <p className="sample-csv-text">March,60,#ff9f40,#ff9f0</p>
          </div>
          <a href="./data.csv" download="sampleCsv.csv">
            <Button type="primary" icon={<DownloadOutlined />} size="middle" />
          </a>
        </Flex>
      </Card>
      <Dragger
        maxCount={1}
        accept=".csv"
        beforeUpload={handleFile}
        onRemove={() => {
          dispatch(chartActions.setData(initialState.data));
          openAndCloseModal();
          return true;
        }}
        showUploadList={true}
      >
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag a <b>csv file</b> to this area to upload.
        </p>
        <p className="extra-info-upload">
          You can download the provided file to understand the format.
        </p>
      </Dragger>
    </Space>
  );
};

export default DataUpload;
