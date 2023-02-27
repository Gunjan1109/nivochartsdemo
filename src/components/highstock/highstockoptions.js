import { highstockData } from "../../data";

export const highstockOptions = {
  chart: {
    type: "line",
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

  // tooltip: {
  //     pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.cumulativeSum})<br/>',
  //     changeDecimals: 2,
  //     valueDecimals: 2
  // },
};
