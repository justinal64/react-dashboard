import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TBody = styled.tbody`background-color: white;`;

export const TableLeftAligned = Table.extend`text-align: left;`;

export const TH = styled.th`
  font-size: 1.25rem;
  border-bottom: 2px solid #e1e6ef;
`;

export const TD = styled.td`
  font-size: 1rem;
  border-bottom: 1px solid #e1e6ef;
`;
