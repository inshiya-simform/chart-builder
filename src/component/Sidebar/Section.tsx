import { Typography } from "antd";
import type { JSX } from "react";

interface SectionProp {
  heading: string;
  render: () => JSX.Element;
}
const Section = ({ heading, render }: SectionProp) => {
  return (
    <div className="section-container">
      <Typography.Title level={5}>{heading}</Typography.Title>
      {render()}
    </div>
  );
};

export default Section;
