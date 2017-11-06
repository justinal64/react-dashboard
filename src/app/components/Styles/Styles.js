import styled from "styled-components";

export const colors = {
  primary: "#20a8d8",
  secondary: "#c0cadd",
  success: "#79c447",
  info: "#67c2ef",
  warning: "#fabb3d",
  danger: "#ff5454"
};

export const getAlignment = props =>
  props.alignment ? `text-align: ${props.alignment};` : "";

export const getFontSize = props =>
  props.font ? `font-size: ${props.font}rem;` : "";

export const getPaddingBottom = props =>
  props.paddingBottom ? `padding-bottom: ${props.paddingBottom}rem;` : "";

export const getBackgroundColor = props =>
  props.backgroundColor ? `background-color: ${props.backgroundColor};` : "";

export const getHoverBackgroundColor = props =>
  props.hoverBGC ? `background-color: ${props.hoverBGC};` : "";

export const getColor = props => (props.color ? `color: ${props.color};` : "");

export const getLineHeight = props =>
  props.lineHeight ? `line-height: ${props.lineHeight}em;` : "";

export const getBorderColor = props =>
  props.borderColor ? `border-color: ${props.borderColor};` : "";

export const getHoverBorderColor = props =>
  props.hoverBC ? `border-color: ${props.hoverBC};` : "";
