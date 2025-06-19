import { Input, Typography } from "antd";
import { useAppDispatch } from "../../../store/hook";
import { chartActions } from "../../../store";

const ChartTitle = () => {
  const dispatch = useAppDispatch();
  return (
    <>
      <div>
        <Typography.Text>Title</Typography.Text>
      </div>
      <div>
        <Input
          type="text"
          onChange={(e) => dispatch(chartActions.setChartTitle(e.target.value))}
          placeholder="Enter chart title"
        />
      </div>
    </>
  );
};

export default ChartTitle;
