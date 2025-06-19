import React from "react";
import { Select } from "antd";
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
    <Select
      value={chattProps.legendPosition}
      defaultValue="top"
      className="drop-down"
      onChange={handleChange}
    >
      <Option value={LEGEND_POSITIONS.left}>Left</Option>
      <Option value={LEGEND_POSITIONS.right}>Right</Option>
      <Option value={LEGEND_POSITIONS.bottom}>Bottom</Option>
      <Option value={LEGEND_POSITIONS.top}>Top</Option>
    </Select>
  );
};

export default LegendPosition;
