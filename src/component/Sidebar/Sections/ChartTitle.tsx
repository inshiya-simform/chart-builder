import { Input, Typography } from "antd";

const ChartTitle = () => {
  return (
    <>
      <div>
        <Typography.Text>Title</Typography.Text>
      </div>
      <div>
        <Input type="text" placeholder="Enter chart title" />
      </div>
    </>
  );
};

export default ChartTitle;
