import React, { useState } from "react";
import { Typography, Select } from "antd";

const { Option } = Select;

const LegendPosition: React.FC = () => {
  const [position, setPosition] = useState("top");

  const handleChange = (value: string) => {
    setPosition(value);
  };

  return (
    <>
      <div>
        <Typography.Text>Position</Typography.Text>
      </div>
      <div>
        <Select
          value={position}
          defaultValue="--select-position--"
          onChange={handleChange}
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
