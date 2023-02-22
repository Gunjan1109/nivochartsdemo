export const lineChartOptions = {

    chart: {
        type: "line"
    },
    yAxis: {
        title: {
            text: 'Quantity'
        }
    },

    xAxis: {
        title: {
            text: 'Time'
        },
        categories: ["01/2023", "02/2023"]
    },

    legend: {
        layout: 'horizontal',
        align: 'center',
    },

    plotOptions: {
        line: {
            dataLabels: {
                enabled: true
            },
            marker: {
                radius: 5
            }
        },
        series: {
            lineWidth: 4,
        }
    },

    series: [{
        name: '2GO Organic',
        data: [250, 400],
    }, {
        name: '4 purpose Energy',
        data: [120, 300],
        marker: {
            symbol: 'circle'
        }
    },]

}