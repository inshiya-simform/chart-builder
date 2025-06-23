import { Alert, Layout } from "antd";
import { Charts } from "lune-ui";
import "./Content.css";
import { useAppSelector } from "../../store/hook";

const Content = () => {
  const chartProps = useAppSelector((state) => state.chart);
  let chartData;
  if (chartProps.data?.labels) {
    chartData =
      chartProps.data?.labels?.length > 0
        ? { ...chartProps.data, datasets: [...chartProps.data.datasets] }
        : undefined;
  }
  return (
    <Layout className="chart-container">
      {chartData ? (
        <Charts
          className="chart"
          chartType={chartProps.chartType}
          chartTitle={chartProps.chartTitle}
          chartLegend={chartProps.legendPosition}
          data={chartData}
        />
      ) : (
        <Alert message="Add data to build chart" type="info" showIcon />
      )}
    </Layout>
  );
};

export default Content;
