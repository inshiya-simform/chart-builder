import { configureStore, createSlice } from "@reduxjs/toolkit";
import type { ChartData } from "chart.js";
import type {
  ChartType,
  LegendAction,
  LegendPositionType,
  TitleAction,
  TypeAction,
} from "../types/types";

type Chart = {
  chartTitle: string;
  data?: ChartData;
  chartType: ChartType;
  legendPosition: LegendPositionType;
};
export const initialState: Chart = {
  chartType: "bar",
  chartTitle: "",
  legendPosition: "top",
  data: {
    labels: [],
    datasets: [],
  },
};

const chartSlice = createSlice({
  name: "chart",
  initialState: initialState,
  reducers: {
    setChartType: (state, action: TypeAction) => {
      state.chartType = action.payload;
    },
    setChartTitle: (state, action: TitleAction) => {
      state.chartTitle = action.payload;
    },
    setLegendPosition: (state, action: LegendAction) => {
      state.legendPosition = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const chartActions = chartSlice.actions;
export const chartStore = configureStore({
  reducer: {
    chart: chartSlice.reducer,
  },
});

export type RootState = ReturnType<typeof chartStore.getState>;
export type AppDispatch = typeof chartStore.dispatch;
