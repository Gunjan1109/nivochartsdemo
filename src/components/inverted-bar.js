import { ResponsiveBar } from "@nivo/bar"
import React from "react";

const InvertedBar = ({ data }) => {
    return (
  <div style={{height: "600px", width: "1000px"}}>
      <ResponsiveBar
          data={data}
          keys={[
            "percentage"
          ]}
          indexBy="product"
          margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
          padding={0.3}
          layout="horizontal"
          valueScale={{ type: 'linear' }}
          colorBy="indexValue"
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
            legend: 'percentage',
            legendPosition: 'middle',
            legendOffset: 40
          }}
          axisLeft={{
            legend: 'Products',
            legendPosition: 'middle',
            legendOffset: -40
          }}
          legends={[
            {
              dataFrom: "indexes",
              anchor: 'bottom-right',
              direction: 'column',
              justify: false,
              translateX: 135,
              translateY: 0,   
              itemsSpacing: 1,
              itemWidth: 89,
              itemHeight: 20,
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

export default InvertedBar;