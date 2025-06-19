import { configureStore, createSlice } from "@reduxjs/toolkit";
import type { ChartData } from "chart.js";

type Chart = {
  chartTitle: string;
  data?: ChartData;
  chartType: "bar" | "line" | "pie";
  legendPosition: "left" | "top" | "right" | "bottom" | "center" | "chartArea";
};
const initialState: Chart = {
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
    setChartType: (state, action) => {
      state.chartType = action.payload;
    },
    setChartTitle: (state, action) => {
      state.chartTitle = action.payload;
    },
    setLegendPosition: (state, action) => {
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
