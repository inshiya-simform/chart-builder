import React from "react";
import { Typography, Select } from "antd";
import { useAppDispatch, useAppSelector } from "../../../store/hook";
import { chartActions } from "../../../store";
import { LEGEND_POSITIONS, type LegendPosition } from "../../../types/types";

const { Option } = Select;

const LegendPosition: React.FC = () => {
  const dispatch = useAppDispatch();
  const chattProps = useAppSelector((state) => state.chart);
  const handleChange = (value: LegendPosition) => {
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
          defaultValue="top"
          onChange={handleChange}
          popupMatchSelectWidth={false}
        >
          <Option value={LEGEND_POSITIONS.left}>Left</Option>
          <Option value={LEGEND_POSITIONS.right}>Right</Option>
          <Option value={LEGEND_POSITIONS.bottom}>Bottom</Option>
          <Option value={LEGEND_POSITIONS.top}>Top</Option>
        </Select>
      </div>
    </>
  );
};

export default LegendPosition;
