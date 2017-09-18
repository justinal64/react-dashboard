import styled from "styled-components";
import { getPaddingBottom } from "../../Styles/Styles";

export const Segment = styled.span`
  font-size: 2.5rem;
  background-color: black;
  padding: 0 1rem;
  text-transform: uppercase;
`;

export const SegmentWrapper = styled.div`
  ${getPaddingBottom};
  width: 90%;
  height: 30px;
  border-bottom: 1px solid white;
  text-align: center;
  margin: 0 auto;
`;

export const SegmentPadding = styled.div`padding-bottom: 1rem;`;
