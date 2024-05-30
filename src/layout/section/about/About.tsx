import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Description } from "../../../components/Description";
import { Container } from "../../../components/Container";

export const About = () => {
  return (
    <StyledAbout>
      <Container>
        <SectionTitle>About Me</SectionTitle>
        <Description>
          The Generator App is an online tool that helps you to export ready-made templates ready to
          work as your future website. It helps you to combine slides, panels and other components
          and export it as a set of static files: HTML/CSS/JS.
        </Description>
      </Container>
    </StyledAbout>
  );
};

const StyledAbout = styled.section`
  background-color: black;
  min-width: 20vh;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-style: normal;
`;
