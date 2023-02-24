import { invertedGroupedData } from "../../data";

export const invertedGroupedOptions = {
  chart: {
    type: "bar",
    marginLeft: 350,
  },
  xAxis: {
    type: "category",
    title: {
      text: "Products",
    },
  },
  yAxis: {
    min: 0,
    title: {
      text: "Percentage",
    },
  },
  plotOptions: {
    bar: {
      dataLabels: {
        enabled: true,
      },
    },
    series: {
      pointWidth: 10,
    },
  },
  legend: {
    symbolRadius: 0,
  },
  credits: {
    enabled: false,
  },
  series: invertedGroupedData
};
