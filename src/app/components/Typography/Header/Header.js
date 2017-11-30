import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { getFontSize, getColor } from "../../Styles/Styles";

const Title = styled.span`
  ${getFontSize};
`;
const SubTitle = styled.span`
  ${getFontSize};
  padding-left: 0.25rem;
`;
const Code = styled.span`
  ${getFontSize};
  padding-left: 0.25rem;
  color: red;
`;

const addTitle = (title, font) => {
  if (title) return <Title font={font}>{title}</Title>;
};

const addSubTitle = (subtitle, font) => {
  if (subtitle) return <SubTitle font={font / 2}>{subtitle}</SubTitle>;
};

const addCode = (codetext, font) => {
  if (codetext) return <Code font={font / 2}>{codetext}</Code>;
};

const Header = props => {
  // example of deconstruction
  const { title, subtitle, font, codetext } = props;

  return (
    <div className="header">
      {addTitle(title, font)}
      {addSubTitle(subtitle, font)}
      {addCode(codetext, font)}
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired
  // viewBox: PropTypes.string.isRequired,
  // className: PropTypes.string,
  // fill: PropTypes.string,
  // width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  // height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  // label: PropTypes.string,
  // style: PropTypes.oneOfType([PropTypes.object])
};

export default Header;
