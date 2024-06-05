import styled, { css } from "styled-components";
import { theme } from "../../styles/Theme";

type MenuPropsType = {
  menuItems: Array<string>; // Array<string> или string[];
};

export const MobileMenu = (props: MenuPropsType) => {
  return (
    <StyledMobileMenu>
      <BurgerButton isOpen={false}>
        <span></span>
      </BurgerButton>

      <MobileMenuPopup isOpen={false}>
        <ul>
          {props.menuItems.map((item, index) => {
            return (
              <li key={index}>
                <a href="#">{item}</a>
              </li>
            );
          })}
        </ul>
      </MobileMenuPopup>
    </StyledMobileMenu>
  );
};

const StyledMobileMenu = styled.nav`
  display: none;
  @media screen and (max-width: 900px) {
    display: block;
  }
`;

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  left: 10px;
  top: 55px;
  z-index: 99999;
  transition: 2s;

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
  opacity: 0.9;
  z-index: 9999;
  display: none;

  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      display: flex;
      justify-content: center;
      align-items: center;
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
    :hover {
      color: #d6d5d5;
    }
  }
`;