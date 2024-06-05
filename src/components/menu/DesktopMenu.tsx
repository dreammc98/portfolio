import styled from "styled-components";
import { theme } from "../../styles/Theme";

type MenuPropsType = {
  menuItems: Array<string>; // Array<string> или string[];
};

export const DesktopMenu = (props: MenuPropsType) => {
  return (
    <StyledDesktopMenu>
      <ul>
        {props.menuItems.map((item, index) => {
          return (
            <li key={index}>
              <a href="#">{item}</a>
            </li>
          );
        })}
      </ul>
    </StyledDesktopMenu>
  );
};

const StyledDesktopMenu = styled.nav`
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
    :hover {
      color: #d6d5d5;
    }
  }

  @media screen and (max-width: 900px) {
    display: none;
  }
`;
