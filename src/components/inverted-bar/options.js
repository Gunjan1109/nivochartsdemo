import { invertedBarData } from "../../data";

export const invertedBarOptions = {
    chart: {
        type: 'bar',
        marginLeft: 200,
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
        symbolRadius: 0,
       align: 'right',
       layout: 'vertical',
       verticalAlign: "bottom"
    },
    credits: {
        enabled: false
    },
    series: invertedBarData
}