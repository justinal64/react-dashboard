import styled from "styled-components";
import { getAlignment, getFontSize, getColor } from "../../Styles/Styles";

export const GraphWrapper = styled.div`${getAlignment};`;
export const GraphHeader = styled.span`
  ${getFontSize};
  ${getColor};
`;
