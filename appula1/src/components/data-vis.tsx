import ReactECharts from "echarts-for-react";

import fastestLap from "@/data/fastest-lap.json";

export const FastestLap = () => {
  return (
    <ReactECharts
      option={{
        grid: {
          top: "2%",
          right: 0,
          bottom: 0,
          left: 0,
          containLabel: true,
        },
        xAxis: {
          type: "category",
          data: fastestLap.map((lap) => lap.Time),
          axisLabel: {
            fontFamily: "monospace",
          },
        },
        yAxis: {
          type: "value",
          axisLabel: {
            fontFamily: "monospace",
          },
        },
        series: [
          {
            data: fastestLap.map((lap) => lap.Speed),
            type: "line",
            showSymbol: false,
          },
        ],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "none",
            label: {
              show: true,
              fontFamily: "monospace",
            },
          },
          textStyle: {
            fontFamily: "monospace",
          },
        },
      }}
    />
  );
};
