
export const invertedGroupedOptions = {
    chart: {
        type: 'bar',
        marginLeft: 350,

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
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true,
            }
        },
        series: {
            pointWidth: 10
        }
    },
    legend: {
        maxHeight: 100,
        symbolRadius: 0,
    },
    credits: {
        enabled: false
    },
    series: [{
        name: "2GO Organic",
        data: [["Organic dided", 275],["Organic pineapple", 146], ["Raw cane", 200]]
    },
{
    name: "4 purpose Energy",
    data: [["Energy drink", 50],["Zero sugar", 16]]
}]
}