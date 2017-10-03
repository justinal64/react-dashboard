import styled from "styled-components";
import { getAlignment, getFont } from "../Styles/Styles";

// progress {
//     background-color: #f3f3f3;
//     border: 0;
//     height: 5px;
//     border-radius: 9px;
// }

// // Styling for Safari and Chrome
// progress::-webkit-progress-bar {
//     background-color: #f3f3f3;
//     border: 0;
//     height: 5px;
//     border-radius: 9px;
// }

// progress::-webkit-progress-value {
//     background-color: green;
//     border: 0;
//     height: 5px;
//     border-radius: 9px;
// }

export const ProgressBarColor = styled.progress`
  background-color: green;
  border: 0;
  height: 5px;
  border-radius: 9px;
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

// export const GraphWrapper = styled.div`${getAlignment};`;
// export const GraphHeader = styled.span`${getFont};`;
