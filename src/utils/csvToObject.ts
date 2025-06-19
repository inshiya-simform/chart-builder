import type { Dataset } from "../types/types";

export const csvToObject = (csv: string) => {
  const lines = csv.split("\n");
  const labels: Array<string> = [];
  const datasets: Dataset[] = [];
  const data: Array<number> = [];
  const backgroundColor: Array<string> = [];
  const borderColor: Array<string> = [];
  for (let i = 1; i < lines.length - 1; i++) {
    const values = lines[i].split(",");
    labels.push(values[0]);
    data.push(parseFloat(values[1]));
    backgroundColor.push(values[2]);
    borderColor.push(values[3]);
  }
  datasets.push({
    label: "Dataset 1",
    data: data,
    backgroundColor: backgroundColor,
    borderColor: borderColor,
  });
  return {
    labels: labels,
    datasets: datasets,
  };
};
