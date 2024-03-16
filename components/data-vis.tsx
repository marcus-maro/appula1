"use client";

import ReactECharts from "echarts-for-react";

import fastestLap from "@/data/fastest-lap.json";
import trackMap from "@/data/lap-position.json";

export const TrackMap = () => {
  function gearColor(nGear: number) {
    // Define colors for different gears
    const colors = [
      "#fee2e2",
      "#fecaca",
      "#fca5a5",
      "#f87171",
      "#ef4444",
      "#dc2626",
      "#b91c1c",
      "#991b1b",
    ];
    return colors[nGear - 1]; // Simple mapping, adjust as needed
  }

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
          type: "value",
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
          // {
          //   data: trackMap.map((position) => [position.X, position.Y]),
          //   type: "line",
          //   showSymbol: false,
          // },
          {
            // Scatter plot for gear positions
            data: trackMap.map((position) => ({
              value: [position.X, position.Y],
              itemStyle: {
                color: gearColor(position.nGear), // Function to determine color
              },
            })),
            type: "scatter",
            symbolSize: 5, // Adjust size as needed
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
