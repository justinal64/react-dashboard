import styled from "styled-components";

export const Navigation = styled.ul`
  list-style-type: none;
  color: white;
  display: block;
  -webkit-margin-before: 0;
  -webkit-margin-after: 0;
  -webkit-margin-start: 0px;
  -webkit-margin-end: 0px;
  -webkit-padding-start: 0;
  font-size: 1.15em;
`;

export const Li = styled.li`
  border-top: 1px solid black;
  background: #4f666e;
  &:hover {
    background: #657f89;
  }
`;
