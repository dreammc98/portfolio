import styled from "styled-components";
import { Menu } from "../../components/menu/Menu";
import { SocialIcon } from "../../components/SocialIcon";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";

const menuItems = ["Home", "About", "Tech Stack", "Projects", "Contact"];

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify="space-between">
          <Menu menuItems={menuItems} />
          <SocialIcon />
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: black;
  padding: 40px 0;
`;
