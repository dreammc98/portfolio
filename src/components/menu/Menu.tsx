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
    list-style-type: none;
    gap: 50px;
  }
  a {
    text-decoration: none;
    color: #a7a7a7;
  }
`;
