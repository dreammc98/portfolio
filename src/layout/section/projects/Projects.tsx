import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { SectionDescript } from "../../../components/SectionDescript";
import { Project } from "./Project";

const myProject = [
  {
    title: "Project Tile goes here 1",
    descript: "This is sample project description random 1",
    stack: "Html 1",
  },
  {
    title: "Project Tile goes here 2",
    descript: "This is sample project description random 2",
    stack: "Html 2",
  },
  {
    title: "Project Tile goes here 3",
    descript: "This is sample project description random 3",
    stack: "Html 3",
  },
  {
    title: "Project Tile goes here 4",
    descript: "This is sample project description random 4",
    stack: "Html 4",
  },
  {
    title: "Project Tile goes here 5",
    descript: "This is sample project description random 5",
    stack: "Html 5",
  },
  {
    title: "Project Tile goes here 6",
    descript: "This is sample project description random 6",
    stack: "Html 6",
  },
];

export const Projects = () => {
  return (
    <StyledProjects>
      <FlexWrapper direction="column" align="center">
        <SectionTitle>Projects</SectionTitle>
        <SectionDescript>Things I’ve built so far</SectionDescript>
      </FlexWrapper>
      <FlexWrapper wrap="wrap" gap="65px 48px" justify="center">
        {myProject.map((project, index) => {
          return (
            <Project
              title={project.title}
              descript={project.descript}
              stack={project.stack}
              key={index}
            />
          );
        })}
      </FlexWrapper>
    </StyledProjects>
  );
};

const StyledProjects = styled.section`
  min-height: 100vh;
  background-color: black;
`;
