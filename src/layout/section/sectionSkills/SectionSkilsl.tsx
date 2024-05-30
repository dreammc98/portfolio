import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Skills } from "./Skills";
import { SectionDescript } from "../../../components/SectionDescript";
import { Container } from "../../../components/Container";

export const SectionSkills = () => {
  return (
    <StyledSectionSkills>
      <Container>
        <FlexWrapper justify="center" direction="column" align="center">
          <SectionTitle>My Tech Stack</SectionTitle>
          <SectionDescript> Technologies I’ve been working with recently</SectionDescript>
        </FlexWrapper>
        <Skills />
      </Container>
    </StyledSectionSkills>
  );
};

const StyledSectionSkills = styled.section`
  min-height: 100vh;
  background-color: black;
  span {
    color: #a7a7a7;
  }
`;