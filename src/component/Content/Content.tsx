import { Layout } from "antd";
import type { ChartData } from "chart.js";
import { Charts } from "lune-ui";
import "./Content.css";

const chartData: ChartData = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Dataset 1",
      data: [10, 20, 30, 40, 50],
      backgroundColor: ["rgba(255, 99, 132, 0.2)"],
      borderColor: ["rgba(255, 99, 132, 1)"],
      borderWidth: 1,
    },
  ],
};
const Content = () => {
  return (
    <Layout className="chart-container">
      <Charts
        className="chart"
        chartType="pie"
        chartTitle="Sample Chart"
        chartLegend="bottom"
        data={chartData}
      />
    </Layout>
  );
};

export default Content;
