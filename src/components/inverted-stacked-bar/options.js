import { invertedStackeddata } from "../../data";

export const invertedStackedOPtions = {
    chart: {
        type: 'bar'
    },
    xAxis: {
        categories: invertedStackeddata.xAxisData,
        title: {
            text: 'Age Group',
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
    legend: {
        reversed: true,
        symbolRadius: 0,
    },
    plotOptions: {
        series: {
            stacking: 'normal',
            dataLabels: {
                enabled: false
            }
        }
    },
    series: invertedStackeddata.yAxisData
}