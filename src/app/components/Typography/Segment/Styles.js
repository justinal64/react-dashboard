import styled from "styled-components";

export const Subtitle = styled.span`
  display: inline-block;
  position: relative;
  :after,
  :before {
    content: "";
    position: absolute;
    height: 5px;
    border-bottom: 1px solid white;
    top: 0;
    width: 1em;
  }

  :before {
    right: 100%;
    margin-right: 15px;
  }

  :after {
    left: 100%;
    margin-left: 15px;
  }
`;

export const SegmentWrapper = styled.p`
  line-height: 0.5;
  text-align: center;
`;
