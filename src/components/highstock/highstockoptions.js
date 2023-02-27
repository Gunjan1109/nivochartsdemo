import { highstockData } from "../../data";

export const highstockOptions = {
  chart: {
    type: "column",
  },
  series: [
    {
      data: highstockData,
      name: "2 GO Organic",
      color: "red"
    },
  ],
  rangeSelector: {
    enabled: false,
    selected: 100,
    allButtonsEnabled: true
  },
  xAxis: {
    title: {
      text: "Dates",
    },
    labels: {
      formatter: function (a) {
        return new Date(a.value)
          .toJSON()
          .slice(0, 10)
          .split("-")
          .reverse()
          .join("/");
      },
    },
  },
  yAxis: {
    opposite: false,
    lineWidth: 1,
  },
  legend: {
    enabled: true,
    symbolRadius: 0,
  },
  plotOptions: {
    line: {
      dataLabels: {
        enabled: false,
      },
      marker: {
        enabled: true,
        radius: 5,
      },
      //showInLegend: true,
    },
    series: {
      lineWidth: 3,
    },
  },

  tooltip: {
      split: false
  },
};
