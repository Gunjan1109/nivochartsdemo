import { invertedBarData } from "../../data";

export const invertedBarOptions = {
    chart: {
        type: 'bar',
        marginLeft: 200,
        marginTop: 40,
        width: 600
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
        labels: {
            format: '{text}%'
        }
    },
    tooltip: {
        valueSuffix: ' %'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true,
                format: '{y}%'
            }
        },
        series: {
            pointWidth: 6
        }
    },
    legend: {
        maxHeight: 70,
        symbolRadius: 0,
        width: 600,
        itemWidth: 130,
        x: 220
    },
    credits: {
        enabled: false
    },
    series: invertedBarData
}