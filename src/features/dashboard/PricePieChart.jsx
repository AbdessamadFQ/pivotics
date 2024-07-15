import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";
import styled from "styled-components";

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: non;
  padding-left: 15px;
`;

const StyledLi = styled.li`
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  gap:24px;
  font-family: "Open Sans Hebrew";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 15px;
`;

const data = [
  { name: "Lowest", value: 23.04 },
  { name: "Lower", value: 12.04 },
  { name: "Higher", value: 13.74 },
  { name: "Highest", value: 11.39 },
];

const COLORS = ["#34B53A", "#E2FBD7", "#FFD3D3", "#FFB200"];

function renderCustomLegend(props) {
  const total = data.reduce((cur, acc) => cur + acc.value, 0);
  const { payload } = props;

  return (
    <StyledUl>
      {payload.map((entry, index) => (
        <StyledLi key={`item-${index}`}>
          <span>
            <svg width="10" height="10" style={{ marginRight: 5 }}>
                <circle cx="5" cy="5" r="5" fill={COLORS[index % COLORS.length]} />
            </svg>
            {entry.value}
            </span>
          <span style={{color : `${COLORS[index % COLORS.length]}`}}>{Math.round(entry.payload.value * 100/total)} %</span>
        </StyledLi>
      ))}
    </StyledUl>
  );
}

function PricePieChart() {
  return (
    <ResponsiveContainer height={184} width="100%">
      <PieChart>
        <Pie
          data={data}
          cx={75}
          cy={92}
          innerRadius={35}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend
          layout="vertical"
          verticalAlign="middle"
          align="right"
          content={renderCustomLegend}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default PricePieChart;
