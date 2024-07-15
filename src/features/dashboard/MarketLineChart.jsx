/* eslint-disable react/prop-types */

import { Label, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const axisLabelStyle = {
  fontFamily: "DM Sans",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "10px",
  fill: "#8F939B",
};

function MarketLineChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{ top: 0, right: 30, left: 25, bottom: 5 }}
      >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis
          dataKey="year"
          tick={{ ...axisLabelStyle }}
          tickFormatter={(tick) => (tick === 2014 ? "" : tick)}
          axisLine={false}
          tickLine={false}
          padding={{ left: 20 }}
          angle={-45}
        />
        <YAxis
          tick={{ ...axisLabelStyle }}
          tickFormatter={(tick) => (tick === 0 ? "" : tick)}
          tickLine={false}
          tickCount={9}
          mirror={true}
          padding={{ top: 5 }}
          axisLine={{ strokeWidth: 0.2 }}
          // tickMargin={1}
        >
          <Label
            value="Number of Orders"
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
        <Line
          type="linear"
          dataKey="ProductA"
          stroke="#FF3A29"
          strokeWidth={2}
          dot={false}
        />
        <Line
          type="linear"
          dataKey="ProductB"
          stroke="#34B53A"
          strokeWidth={2}
          dot={false}
        />
        <Line
          type="linear"
          dataKey="ProductC"
          stroke="#4339F2"
          strokeWidth={2}
          dot={false}
        />
        <Line
          type="linear"
          dataKey="ProductD"
          stroke="#FFB200"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default MarketLineChart;
