/* eslint-disable react/prop-types */

import {
  Bar,
  Cell,
  ComposedChart,
  Label,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const axisLabelStyle = {
  fontFamily: "DM Sans",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "10px",
  fill: "#8F939B",
};

function MarketBarChart({ data, color }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart
        data={data}
        margin={{ top: 0, right: 30, left: 25, bottom: 5 }}
      >
        <XAxis
          dataKey="UserStep"
          tick={{ ...axisLabelStyle }}
          axisLine={false}
          tickLine={false}
          padding={{ left: 5 }}
        />
        <YAxis
          tick={false}
          tickLine={false}
          tickCount={9}
          mirror={true}
          axisLine={{ strokeWidth: 0.2 }}
        >
          <Label
            value="Total Users"
            angle={-90}
            position="left"
            offset={20}
            style={{
              textAnchor: "middle",
              fontSize: 11,
              fontFamily: "Open Sans Hebrew",
              fontStyle: "normal",
              fontWeight: 400,
              fill: "#212121",
            }}
          />
        </YAxis>
        {/* <Area
          dataKey="total"
          fill="#CCE6FE"
          stroke="white"
          label={{
            position: "top",
            offset: "-20",
            fill: "#ffffff",
            fontSize: "11",
            fontWeight: 300,
          }}
        /> */}
        <Bar
          dataKey="total"
          fill="#01213A"
          label={{
            position: "insideTop",
            offset: "10",
            fill: "#ffffff",
            fontSize: "11",
            fontWeight: 300,
          }}
        >
          {color.map((color, key) => (
            <Cell key={key} fill={color} />
          ))}
        </Bar>
      </ComposedChart>
    </ResponsiveContainer>
  );
}

export default MarketBarChart;
