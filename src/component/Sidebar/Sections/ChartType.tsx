import React from "react";
import { Radio, Typography, type RadioChangeEvent } from "antd";
import { useAppDispatch, useAppSelector } from "../../../store/hook";
import { chartActions } from "../../../store";

const ChartType: React.FC = () => {
  const dispatch = useAppDispatch();
  const chartProps = useAppSelector((state) => state.chart);
  const onChange = (e: RadioChangeEvent) => {
    dispatch(chartActions.setChartType(e.target.value));
  };

  return (
    <>
      <div>
        <Typography.Text>type</Typography.Text>
      </div>
      <Radio.Group onChange={onChange} value={chartProps.chartType}>
        <div>
          <Radio value="bar">Bar</Radio>
        </div>
        <div>
          <Radio value="line">Line</Radio>
        </div>
        <div>
          <Radio value="pie">Pie</Radio>
        </div>
      </Radio.Group>
    </>
  );
};

export default ChartType;
