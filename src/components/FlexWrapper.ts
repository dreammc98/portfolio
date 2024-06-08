import styled from "styled-components";

type flexWrapperPropsType = {
  direction?: string;
  justify?: string;
  align?: string;
  wrap?: string;
  gap?: string;
};

export const FlexWrapper = styled.div<flexWrapperPropsType>`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "normal"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  gap: ${(props) => props.gap || "0"};
  height: 100%;
`;
