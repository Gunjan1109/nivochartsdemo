import { ResponsiveBar } from "@nivo/bar"
import React from "react";

const Bar = ({ data }) => {
    return (
  <div style={{height: "600px", width: "1000px"}}>
      <ResponsiveBar
          data={data}
          keys={[
            "qty"
          ]}
          indexBy="date"
          margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
          padding={0.3}
          valueScale={{ type: 'linear' }}
          indexScale={{ type: 'band', round: true }}
          colors={{ scheme: 'nivo' }}
          borderColor={{
              from: 'color',
              modifiers: [
                  [
                      'darker',
                      1.6
                  ]
              ]
          }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 0,
            tickPadding: 15,
            tickRotation: -20,
            legend: '',
            legendPosition: 'middle',
          }}
          axisLeft={{
            tickSize: 0,
            tickPadding: 15,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: -40
          }}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor={{
              from: 'color',
              modifiers: [
                  [
                      'darker',
                      1.6
                  ]
              ]
          }}
          legends={[
            {
              anchor: 'bottom',
              direction: 'row',
              justify: true,
              translateX: 35,
              translateY: 60,
              itemsSpacing: 4,
              itemWidth: 89,
              itemHeight: 37,
              itemDirection: 'left-to-right',
              itemOpacity: 0.85,
              symbolSize: 20,
              effects: [
                  {
                      on: 'hover',
                      style: {
                          itemOpacity: 1
                      },
                  }
              ]
          }
          ]}
          animate={true}
      />
  </div>
    )
}

export default Bar;