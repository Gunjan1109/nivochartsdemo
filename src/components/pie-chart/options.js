import { pieChartData } from "../../data";

export const pieChartOptions = {
    chart: {
        type: 'pie'
    },
    credits: false,
    tooltip: {
        pointFormat: 'Contribution To Total Quanity: <b>{point.percentage:.1f}%</b>'
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
            showInLegend: true,
            data: pieChartData
        },
    },
    legend: {
        symbolRadius: 0
    },
    series: [
        {
            type: 'pie',
            dataLabels: {
                color: 'white',
                distance: -60,
               useHTML: true,
                format: '<div align="center">{y}% </div>',
                style: {
                    fontSize: "40px"
                },
                align: "left"
            }
        },
        {
            type: 'pie',
            dataLabels: {
                enabled: true
            },
            showInLegend: false
        }
    ]
}