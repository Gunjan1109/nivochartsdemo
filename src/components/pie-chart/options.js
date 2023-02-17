import { pieChartData } from "../../data";

export const pieChartOptions = {
    chart: {
        type: 'pie'
    },
    credits: false,
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {  
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
            },
            showInLegend: true
        }
    },
    series: pieChartData
}