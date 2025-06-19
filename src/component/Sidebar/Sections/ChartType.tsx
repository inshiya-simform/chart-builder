import React from "react";
import { Radio, type RadioChangeEvent } from "antd";
import { useAppDispatch, useAppSelector } from "../../../store/hook";
import { chartActions } from "../../../store";
import { CHART_TYPES } from "../../../types/types";

const ChartType: React.FC = () => {
  const dispatch = useAppDispatch();
  const chartProps = useAppSelector((state) => state.chart);
  const onChange = (e: RadioChangeEvent) => {
    dispatch(chartActions.setChartType(e.target.value));
  };

  return (
    <Radio.Group onChange={onChange} value={chartProps.chartType}>
      <Radio value={CHART_TYPES.bar}>Bar</Radio>
      <Radio value={CHART_TYPES.line}>Line</Radio>
      <Radio value={CHART_TYPES.pie}>Pie</Radio>
    </Radio.Group>
  );
};

export default ChartType;
