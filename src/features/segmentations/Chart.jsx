/* eslint-disable react/prop-types */

import {
  Bar,
  BarChart,
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

const data = [
  { month: "January", sales: 1500 },
  { month: "February", sales: 1800 },
  { month: "March", sales: 2100 },
  { month: "April", sales: 1900 },
  { month: "May", sales: 2200 },
  { month: "June", sales: 2500 },
  { month: "July", sales: 2700 },
  { month: "August", sales: 2900 },
  { month: "September", sales: 2600 },
  { month: "October", sales: 2300 },
  { month: "November", sales: 2000 },
  { month: "December", sales: 1800 },
];

function Chart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 0, right: 30, left: 25, bottom: 5 }}>
        <XAxis
          dataKey="month"
          tick={{ ...axisLabelStyle }}
          axisLine={false}
          tickLine={false}
          padding={{ left: 10 }}
        />
        <YAxis
          tick={false}
          tickLine={false}
          tickCount={9}
          mirror={true}
          axisLine={{ strokeWidth: 0.2 }}
        >
          <Label
            value="Sales"
            angle={-90}
            position="left"
            offset={20}
            style={{
              textAnchor: "middle",
              fontSize: 11,
              fontFamily: "Open Sans Hebrew",
              fontStyle: "normal",
              fontWeight: 400,
            }}
          />
        </YAxis>
        <Bar
          dataKey="sales"
          fill="#01213A"
          label={{
            position: "top",
            offset: "-20",
            fill: "#ffffff",
            fontSize: "11",
            fontWeight: 300,
          }}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default Chart;
