import { Input } from "antd";
import { useAppDispatch } from "../../../store/hook";
import { chartActions } from "../../../store";

const ChartTitle = () => {
  const dispatch = useAppDispatch();
  return (
    <Input
      type="text"
      onBlur={(e) => dispatch(chartActions.setChartTitle(e.target.value))}
      placeholder="Enter chart title"
    />
  );
};

export default ChartTitle;
