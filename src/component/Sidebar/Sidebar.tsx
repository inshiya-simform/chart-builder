import { Typography } from "antd";
import "./Sidebar.css";
import Section from "./Section";
import ChartType from "./Sections/ChartType";
import ChartTitle from "./Sections/ChartTitle";
import LegendPosition from "./Sections/LegendPosition";
import Data from "./Sections/Data";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <Typography.Title level={4}> Chart</Typography.Title>
      <Section heading="Chart Type" render={() => <ChartType />} />
      <Section heading="Chart Title" render={() => <ChartTitle />} />
      <Section heading="Legend Position" render={() => <LegendPosition />} />
      <Section heading="Data" render={() => <Data />} />
    </div>
  );
};

export default Sidebar;
