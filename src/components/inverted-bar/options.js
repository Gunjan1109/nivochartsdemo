import { invertedBarData } from "../../data";

export const invertedBarOptions = {
    chart: {
        type: 'bar',
        marginLeft: 150,
        marginBottom: 180

    },
    xAxis: {
        type: 'category',
        title: {
            text: 'Products',
        },
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Percentage'
        },
    },
    tooltip: {
        valueSuffix: ' %'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
        y: 0,
        maxHeight: 100,
        symbolRadius: 0
    },
    credits: {
        enabled: false
    },
    series: invertedBarData
}