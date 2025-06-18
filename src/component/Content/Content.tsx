import type { ChartData } from "chart.js";
import { Charts } from "lune-ui";

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
    <Charts
      className="chart"
      chartType="line"
      chartTitle="Sample Chart"
      chartLegend="bottom"
      data={chartData}
    />
  );
};

export default Content;
