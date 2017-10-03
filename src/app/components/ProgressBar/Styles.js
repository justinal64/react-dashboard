import styled from "styled-components";
import { getBackgroundColor } from "../Styles/Styles";

// styling for Chrome/Safari
// styling for firefox
export const ProgressBarStyled = styled.progress`
   {
    width: 100%;
  }
  ::-webkit-progress-bar {
    background-color: #f3f3f3;
    border: 0;
    height: 5px;
    border-radius: 9px;
    width: 100%;
  }
  ::-webkit-progress-value {
    ${getBackgroundColor};
    border: 0;
    height: 5px;
    border-radius: 9px;
  }
  ::-moz-progress-bar {
    ${getBackgroundColor};
    border: 0;
    height: 5px;
    border-radius: 9px;
  }
`;

export const ProgressBarHeader = styled.span`
  display: block;
  font-size: 0.75em;
  color: black;
`;

export const ProgressBarSubheader = styled.span`
  display: block;
  font-size: 1.25em;
  color: black;
  font-weight: 600;
`;
