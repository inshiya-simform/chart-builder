# 📊 Chart Builder

Chart Builder is a simple and flexible tool that allows users to create customizable charts by selecting chart types, uploading data via CSV, and adjusting various settings like title, legend position, and colors.

Built using **React + Vite** and powered by a custom chart rendering component library called **lune-ui**.

## ✨ Features

- ✅ Select chart type (e.g., Bar, Line, Pie)
- ✅ Upload CSV files for chart data
- ✅ Configure:
  - Chart title
  - Legend position
  - Colors (background, border)
- ✅ Live preview of the chart

## 🚀 Getting Started

### 📦 Installation

```bash
git clone https://github.com/yourusername/chart-builder.git
cd chart-builder
npm install
npm run dev
```

## 📁 CSV Format

The uploaded CSV file should follow this format:

```csv
label,yValue,backgroundColor,borderColor
January,40,rgba(75,192,192,1),rgba(75,192,192,1)
February,55,rgba(153,102,255,1),rgba(153,102,255,1)
March,60,rgba(255,159,64,1),rgba(255,159,64,1)
```

## 🛠 Tech Stack

- **Frontend Framework:** [React](https://reactjs.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Chart Rendering & UI Components:** [lune-ui](https://www.npmjs.com/package/lune-ui) (custom-built NPM package)

## 🖼 Preview

Here’s a quick look at the Chart Builder in action:

![Chart Builder Preview](./preview.png)
