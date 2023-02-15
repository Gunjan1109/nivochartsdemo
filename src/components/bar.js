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
          axisBottom={{
            tickRotation: -20,
            legend: 'date',
            legendPosition: 'middle',
            legendOffset: 40
          }}
          axisLeft={{
            legend: 'Quantity',
            legendPosition: 'middle',
            legendOffset: -40
          }}
          legends={[
            {
              anchor: 'bottom-right',
              direction: 'column',
              justify: false,
              translateX: 135,
              translateY: 0,
              itemWidth: 89,
              itemHeight: 37,
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