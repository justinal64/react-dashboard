import styled from "styled-components";

export const getAlignment = props =>
  props.alignment ? `align-items: ${props.alignment};` : "";

export const getFont = props =>
  props.font ? `font-size: ${props.font}px;` : "";

export const getPaddingBottom = props =>
  props.paddingBottom ? `padding-bottom: ${props.paddingBottom}rem;` : "";
