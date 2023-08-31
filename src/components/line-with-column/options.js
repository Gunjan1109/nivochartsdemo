export const lineWithColumnOptions = {
    chart: {
        zoomType: 'xy'
    },
    credits: {
        enabled: false
    },
    title: {
        text: 'Karasjok weather, 2021',
        align: 'left'
    },
    subtitle: {
        text: 'Source: ' +
            '<a href="https://www.yr.no/nb/historikk/graf/5-97251/Norge/Troms%20og%20Finnmark/Karasjok/Karasjok?q=2021"' +
            'target="_blank">YR</a>',
        align: 'left'
    },
    xAxis: [{
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        crosshair: true,
        labels: {
            rotation: -30,
          },
    }],
    yAxis: [{ // Primary yAxis
        labels: {
            format: '{value}°C',
        },
        title: {
            enabled: false
        }
    }, { // Secondary yAxis
        visible: false
    }],
    tooltip: {
        shared: true
    },
    legend: {
        align: 'right',
        x: 0,
        verticalAlign: 'top',
        layout: 'vertical',
        y: 60,
        itemMarginBottom: 20,
        title: {
            text: 'Brand',
        }
    },
    series: [{
        name: 'Precipitation',
        type: 'column',
        color: 'green',
        yAxis: 1,
        data: [27.6, 28.8, 21.7, 34.1, 29.0, 28.4, 45.6, 51.7, 39.0,
            60.0, 28.6, 32.1],
        tooltip: {
            valueSuffix: ' mm'
        },

    }, {
        name: 'Temperature',
        type: 'line',
        color: 'yellow',
        data: [-13.6, -14.9, -5.8, -0.7, 3.1, 13.0, 14.5, 10.8, 5.8,
            -0.7, -11.0, -16.4],
        tooltip: {
            valueSuffix: '°C'
        },
        marker: {
            enabled: false
        },
        dataLabels: {
            enabled: true,
            color: 'yellow'
        }
    }]
}