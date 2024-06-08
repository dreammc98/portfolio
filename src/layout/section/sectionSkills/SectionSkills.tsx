import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { DesktopSkills } from "./skills/DesktopSkills";
import { SectionDescript } from "../../../components/SectionDescript";
import { Container } from "../../../components/Container";
import { MobileSkills } from "./skills/MobileSkills";

export const SectionSkills = () => {
  return (
    <StyledSectionSkills>
      <Container>
        <FlexWrapper justify="center" direction="column" align="center">
          <SectionTitle>My Tech Stack</SectionTitle>
          <SectionDescript> Technologies I’ve been working with recently</SectionDescript>
        </FlexWrapper>
        <DesktopSkills />
        <MobileSkills />
      </Container>
    </StyledSectionSkills>
  );
};

const StyledSectionSkills = styled.section``;
