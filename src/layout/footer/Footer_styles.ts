import styled from "styled-components";
import { theme } from "../../styles/Theme";

const Footer = styled.footer`
  background-color: black;
`;

const FooterBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 2px solid #1f1f20;
  padding: 45px 0 55px;
`;

const FooterName = styled.h2`
  font-size: 48px;
  color: #d9d9d9;
  @media ${theme.media.mobile} {
    font-size: 28px;
  }
`;
const IconsWrapper = styled.div`
  margin: 25px 0 30px;
`;

const Copyright = styled.span`
  font-weight: 400;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
`;

export const S = {
  Footer,
  FooterBody,
  FooterName,
  IconsWrapper,
  Copyright,
};
