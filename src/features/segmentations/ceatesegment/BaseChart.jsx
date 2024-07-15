import { PieChart, Pie, ResponsiveContainer } from "recharts";

const data01 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

export default function BaseChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={50} height={50}>
        <Pie
          data={data01}
          dataKey="value"
          cx="40%"
          cy="50%"
          outerRadius={30}
          fill="#8884d8"
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
