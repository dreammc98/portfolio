import styled, { css } from "styled-components";

//mobile

const MobileMenu = styled.nav``;

const BurgerButton = styled.button<{ isOpen: boolean; headerSizeChanges: boolean }>`
  position: fixed;
  left: 10px;
  top: ${(props) => (props.headerSizeChanges ? "28px" : "50px")};
  /* top: 55px; */
  z-index: 99999;
  transition: top 0.5s;
  span {
    display: block;
    width: 40px;
    height: 3px;
    background-color: #a7a7a7;

    ${(props) =>
      props.isOpen &&
      css<{ isOpen: boolean }>`
        background-color: rgba(0, 0, 0, 0);
      `}

    :before {
      content: "";
      display: block;
      width: 40px;
      height: 3px;
      background-color: #a7a7a7;
      position: absolute;
      transform: translateY(-10px);
      transition: transform 0.5s;
      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(45deg) translateY(0);
        `}
    }
    :after {
      content: "";
      display: block;
      width: 30px;
      height: 3px;
      background-color: #a7a7a7;
      position: absolute;
      transform: translateY(10px);
      transition: transform 0.5s;
      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          width: 40px;
          transform: rotate(-45deg) translateY(0);
        `}
    }
  }
`;

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: black;
  opacity: 0;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s;
  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      opacity: 0.9;
    `}
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 50px;
    font-family: "DM Sans", sans-serif;
    font-weight: 500;
    font-size: 36px;
  }
  a {
    color: #a7a7a7;
    cursor: pointer;
    :hover,
    &.active {
      color: #eae9e9;
    }
  }
`;

//desktop

const DesktopMenu = styled.nav`
  ul {
    display: flex;
    gap: 40px;
    font-family: "DM Sans", sans-serif;
    font-weight: 500;
    font-size: 26px;
  }
  a {
    color: #a7a7a7;
    cursor: pointer;
    :hover,
    &.active {
      color: #eae9e9;
    }
  }
`;
export const S = {
  // mobile
  MobileMenu,
  BurgerButton,
  MobileMenuPopup,
  // desktop
  DesktopMenu,
};
