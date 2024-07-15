import { createContext, useContext } from "react";
import styled from "styled-components";
import Heading from "./Heading";

/* eslint-disable react/prop-types */
const StyledTable = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 1; //to fit the remaining
  gap: 12px;
  background-color: white;
  padding: ${(props) => (props.padding ? props.padding : "12px 18px")};
  min-height: 216px;
  border-radius: 15px;
`;

const StyledHeader = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  color: rgba(143, 147, 155, 1);
  height: 15px;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 15px;
  align-content:center;
`;

const StyledRow = styled(StyledHeader)`
  color: black;
`;

const StyledBody = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 5px;
`;

const TableContext = createContext();

function Table({ children, columns, padding }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <StyledTable role="table" padding={padding}>
        {children}
      </StyledTable>
    </TableContext.Provider>
  );
}

function TableTitle({ title }) {
  return (
    <Heading
      as="p1-b"
      style={{ borderBottom: "0.5px solid #8F939B" }}
    >
      {title}
    </Heading>
  );
}

function Header({ children }) {
  const { columns } = useContext(TableContext);
  return (
    <StyledHeader role="row" columns={columns}>
      {children}
    </StyledHeader>
  );
}

function Row({ children }) {
  const { columns } = useContext(TableContext);
  return (
    <StyledRow role="row" columns={columns}>
      {children}
    </StyledRow>
  );
}

function Body({ data, render }) {
  if (!data.length) return <p>No data to show at the moment</p>;

  return <StyledBody>{data.map(render)}</StyledBody>;
}

Table.TableTitle = TableTitle;
Table.Header = Header;
Table.Row = Row;
Table.Body = Body;

export default Table;
