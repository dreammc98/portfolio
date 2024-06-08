import styled from "styled-components";
import { theme } from "../styles/Theme";

export const SectionDescript = styled.h3`
  font-family: "Poppins", sans-serif;
  font-size: 32px;
  font-weight: 400;
  color: #a7a7a7;
  margin-bottom: 125px;
  text-align: center;

  @media ${theme.media.mobile} {
    font-size: 20px;
    text-align: center;
    margin-bottom: 65px;
  }
`;
