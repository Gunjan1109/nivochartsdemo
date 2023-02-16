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
        x: 0,
        y: 0,
        width: 800,
        floating: false,
        borderWidth: 1,
        backgroundColor: '#FFFFFF',
        shadow: false
    },
    credits: {
        enabled: false
    },
    series: invertedBarData
}