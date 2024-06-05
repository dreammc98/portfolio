import styled from "styled-components";
import { theme } from "../styles/Theme";

export const SectionTitle = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 48px;
  font-weight: 700;
  color: #cccccc;
  margin-bottom: 49px;

  @media ${theme.media.mobile} {
    font-size: 38px;
    text-align: center;
    margin-bottom: 25px;
  }
`;
