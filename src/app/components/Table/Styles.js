import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TBody = styled.tbody`background-color: white;`;

export const TableLeftAligned = Table.extend`
  text-align: left;
  tbody: {
    background-color: white;
  }
  th: {
    font-size: 1.25rem;
    border-bottom: 2px solid #e1e6ef;
  }
  tbody tr:nth-child(odd) {
    background-color: ${props =>
      props.striped ? "rgba(0, 0, 0, 0.05)" : "transparent"};
  }
  td {
    padding: ${props => (props.condensed ? "0" : "0.75rem")};
    font-size: 1rem;
    border-bottom: 1px solid #e1e6ef;
  }
`;

export const TH = styled.th`
  font-size: 1.25rem;
  border-bottom: 2px solid #e1e6ef;
`;
