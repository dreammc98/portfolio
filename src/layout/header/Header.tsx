import styled from "styled-components";
import { Menu } from "../../components/menu/Menu";
import { SocialIcon } from "../../components/SocialIcon";

const menuItems = ["Home", "About", "Tech Stack", "Projects", "Contact"];

export const Header = () => {
  return (
    <StyledHeader>
      <Menu menuItems={menuItems} />
      <SocialIcon />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: black;
`;
