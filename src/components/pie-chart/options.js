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
            data: pieChartData,
            innerSize: '50%'
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
                distance: -35,
                format: '<div align="center">{y}% </div>',
                style: {
                    fontSize: "20px"
                },
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