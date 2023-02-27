export const splineChartOptions = {
  chart: {
    type: "spline",
  },
  xAxis: {
    labels: {
      enabled: true,
    },
    title: {
        text: "Date",
      },
      categories: ["04/2022", "05/2022", "06/2022", "07/2022", "08/2022", "09/2022"]
  },
  yAxis: {
    reversed: true,
    lineWidth: 1
  },
  legend: {
    enabled: true,
    symbolRadius: 0,
    squareSymbol: true
  },
  plotOptions: {
    spline: {
      lineWidth: 5,
      marker: {
        enabled: false
      }
    },
  },
  series: [
    {
      name: "Baked goods",
      data: [
        30, 20, 11, 4, 29
      ],
      color: "orange"
    },
    {
        name: "Bites", 
        data: [
            5, 20, 4, 15, 24
          ],
          color: "brown"
    },
  ],
};
