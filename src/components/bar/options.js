import { barData } from "../../data";

export const barOptions = {
    chart: {
        type: 'column',

    },
    xAxis: {
        type: 'category',
        title: {
            text: 'Date',
        },
        labels: {
            rotation: -30
        }
    },
    yAxis: {
        title: {
            text: 'Quantity'
        },
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
       enabled: true,
       symbolRadius: 0
    },
    credits: {
        enabled: false
    },
    series: barData
}