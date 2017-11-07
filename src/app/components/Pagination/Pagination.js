import React from "react";
import styled from "styled-components";
import { getIcon } from "../Helper/Helper";
const StyledPageUL = styled.ul`
  color: black;
  list-style-type: none;
  padding: 0.5rem 0;
`;

const StyledPageLI = styled.li`color: black;`;

const StyledHref = styled.a`
  background-color: ${props => (props.active ? "#20a8d8" : "white")};
  color: ${props => (props.active ? "white" : "#20a8d8")};
  padding: 0.5rem 0.75rem;
  border: 1px solid #ddd;
  :link {
    text-decoration: none;
  }
  :visited {
    text-decoration: none;
    color: ${props => (props.active ? "white" : "#20a8d8")};
  }
  :hover {
    color: ${props => (props.active ? "white" : "#20a8d8")};
    background-color: #e1e6ef;
    border-color: #ddd;
  }
`;

const StyledDiv = styled.div`padding: 1.5rem 0;`;

const Pagination = props => {
  return (
    <StyledDiv>
      <StyledPageUL>
        <StyledPageLI>
          <StyledHref href="#">{getIcon("backward")}</StyledHref>
          <StyledHref href="#" active>
            1
          </StyledHref>
          <StyledHref href="#">2</StyledHref>
          <StyledHref href="#">3</StyledHref>
          <StyledHref href="#">4</StyledHref>
          <StyledHref href="#">{getIcon("forward")}</StyledHref>
        </StyledPageLI>
      </StyledPageUL>
    </StyledDiv>
  );
};

export default Pagination;
