import styled from "styled-components";
import { SocialIcon } from "../../components/SocialIcon";

export const Footer = () => {
  return (
    <StyledFooter>
      <Name>Leonid</Name>
      <SocialIcon />
      <Copyright>© 2024 Leonid Talaev, all rights reserved.</Copyright>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  min-height: 30vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Name = styled.span`
  color: white;
  font-size: 30px;
  font-weight: bold;
`;

const Copyright = styled.span`
  font-size: 12px;
  color: gray;
`;
