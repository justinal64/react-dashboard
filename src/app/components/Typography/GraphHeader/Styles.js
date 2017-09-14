import styled from "styled-components";

const getAlignment = props =>
  props.alignment ? `align-items: ${props.alignment};` : "";

const getFont = props => (props.font ? `font-size: ${props.font}px;` : "");

export const GraphWrapper = styled.div`${getAlignment};`;
export const GraphHeader = styled.span`${getFont};`;
