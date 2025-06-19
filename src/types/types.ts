export const CHART_TYPES = {
  bar: "bar",
  line: "line",
  pie: "pie",
};
export const LEGEND_POSITIONS = {
  left: "left",
  top: "top",
  right: "right",
  bottom: "bottom",
};
export type ChartType = keyof typeof CHART_TYPES;
export type LegendPosition = keyof typeof LEGEND_POSITIONS;

export type LegendAction = {
  type: string;
  payload: LegendPosition;
};
export type TypeAction = {
  type: string;
  payload: ChartType;
};
export type TitleAction = {
  type: string;
  payload: string;
};
