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
        }
    },
    legend: {
        reversed: true
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