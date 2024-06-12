import styled from "styled-components";

const Header = styled.header<{ headerSizeChanges: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: black;
  padding: ${(props) => (props.headerSizeChanges ? "10px 0" : "30px 0")};
  z-index: 99999;
  transition: padding 0.5s;
`;

export const S = {
  Header,
};
