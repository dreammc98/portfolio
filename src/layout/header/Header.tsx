import styled from "styled-components";
import { DesktopMenu } from "../../components/menu/DesktopMenu";
import { SocialIcon } from "../../components/IconsGroup";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { MobileMenu } from "../../components/menu/MobileMenu";

const menuItems = ["Home", "About", "Tech Stack", "Projects", "Contact"];

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify="space-between">
          <DesktopMenu menuItems={menuItems} />
          <MobileMenu menuItems={menuItems} />
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
  z-index: 99999;
`;
