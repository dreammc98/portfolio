import styled from "styled-components";

type MenuPropsType = {
  menuItems: Array<string>; // Array<string> или string[];
};

export const Menu = (props: MenuPropsType) => {
  return (
    <StyledMenu>
      <ul>
        {props.menuItems.map((item, index) => {
          return (
            <li key={index}>
              <a href="#">{item}</a>
            </li>
          );
        })}
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 50px;
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
`;
