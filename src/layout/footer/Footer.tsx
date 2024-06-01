import styled from "styled-components";
import { SocialIcon } from "../../components/IconsGroup";
import { Container } from "../../components/Container";
import { Name } from "../section/main/Main";

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FooterBody>
          <Name>Leonid</Name>
          <IconsWrapper>
            <SocialIcon />
          </IconsWrapper>
          <Copyright>© 2024 Leonid Talaev, all rights reserved.</Copyright>
        </FooterBody>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: black;
`;

const FooterBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 2px solid #1f1f20;
  padding: 45px 0 55px;
`;

const IconsWrapper = styled.div`
  margin: 25px 0 30px;
`;

const Copyright = styled.span`
  font-weight: 400;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
`;
