import React from "react";
import { Typography, Select } from "antd";
import { useAppDispatch, useAppSelector } from "../../../store/hook";
import { chartActions } from "../../../store";

const { Option } = Select;

const LegendPosition: React.FC = () => {
  const dispatch = useAppDispatch();
  const chattProps = useAppSelector((state) => state.chart);
  const handleChange = (value: string) => {
    dispatch(chartActions.setLegendPosition(value));
  };

  return (
    <>
      <div>
        <Typography.Text>Position</Typography.Text>
      </div>
      <div>
        <Select
          value={chattProps.legendPosition}
          defaultValue="--select-position--"
          onChange={handleChange}
          dropdownMatchSelectWidth={false}
        >
          <Option value="left">Left</Option>
          <Option value="right">Right</Option>
          <Option value="bottom">Bottom</Option>
          <Option value="top">Top</Option>
        </Select>
      </div>
    </>
  );
};

export default LegendPosition;
