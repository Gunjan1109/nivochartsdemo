import { barData } from "../../data";

export const barOptions = {
  chart: {
    type: "column",
    style: {
      fontFamily: 'serif'
    }
  },
  xAxis: {
    type: "category",
    title: {
      text: "Date",
    },
    labels: {
      rotation: -30,
    },
  },
  yAxis: {
    title: {
      text: "Quantity",
    },
  },
  plotOptions: {
    column: {
      color: "orange",
      dataLabels: {
        enabled: true,
      },
    },
  },
  legend: {
    enabled: true,
    symbolRadius: 0,
    align: "right",
    layout: 'proximate',
    y: 50
  },
  credits: {
    enabled: false,
  },
  series: barData,
};
