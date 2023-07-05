import { mapData, mapTopologyData } from "../../data";

export const mapOptions = {
    chart: {
        map: mapTopologyData
    },

    title: {
        text: 'US population density (/km²)'
    },

    exporting: {
        sourceWidth: 600,
        sourceHeight: 500
    },

    legend: {
        layout: 'horizontal',
        borderWidth: 0,
        backgroundColor: 'rgba(255,255,255,0.85)',
        floating: true,
        verticalAlign: 'top',
        y: 25
    },

    mapNavigation: {
        enabled: true
    },

    colorAxis: {
        min: 1,
        type: 'logarithmic',
        minColor: '#EEEEFF',
        maxColor: '#000022',
        stops: [
            [0, '#EFEFFF'],
            [0.67, '#4444FF'],
            [1, '#000022']
        ]
    },

    series: [{
        accessibility: {
            point: {
                valueDescriptionFormat: '{xDescription}, {point.value} people per square kilometer.'
            }
        },
        animation: {
            duration: 1000
        },
        data: mapData,
        joinBy: ['postal-code', 'code'],
        dataLabels: {
            enabled: true,
            color: '#FFFFFF',
            format: '{point.code}'
        },
        name: 'Population density',
        tooltip: {
            pointFormat: '{point.code}: {point.value}/km²'
        }
    }]
}