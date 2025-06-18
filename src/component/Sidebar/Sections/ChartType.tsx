import React, { useState } from "react";
import { Radio, Typography, type RadioChangeEvent } from "antd";

const ChartType: React.FC = () => {
  const [value, setValue] = useState("bar");

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div>
        <Typography.Text>type</Typography.Text>
      </div>
      <Radio.Group onChange={onChange} value={value}>
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
