import React from "react";
import { ResponsivePie } from "@nivo/pie";
import { pieChartData } from "../../data";

const PieChart = () => {
  return (
    <>
      <div style={{ height: "400px" }}>
        <ResponsivePie
          data={pieChartData}
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
          cornerRadius={3}
          activeOuterRadiusOffset={8}
          borderWidth={1}
          //colors={["blue", "#f2c94c"]}
          borderColor={{
            from: "color",
            modifiers: [["darker", "0.2"]],
          }}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor="#333333"
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: "color" }}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor={{
            from: "color",
            modifiers: [["darker", 2]],
          }}
          legends={[
            {
              anchor: "bottom",
              direction: "row",
              translateY: 56,
              itemWidth: 100,
              itemHeight: 18,
              itemTextColor: "#999",
              itemDirection: "left-to-right",
              itemOpacity: 1,
              symbolSize: 18,
              symbolShape: "square",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemTextColor: "#000",
                  },
                },
              ],
            },
          ]}
        />
      </div>
    </>
  );
};

export default PieChart;
