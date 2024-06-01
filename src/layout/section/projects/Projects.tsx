import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { SectionDescript } from "../../../components/SectionDescript";
import { Project } from "./Project";
import { Container } from "../../../components/Container";

const myProject = [
  {
    title: "Project Tile goes here",
    descript:
      "Были реализованный: главная страница, страница корзины, запросы на сервер и тдБыли реализованный: главная страница, страница корзины, запросы на сервер и тдБыли реализованный: главная страница, страница корзины, запросы на сервер и тд",
    stack: "HTML , JavaScript, SASS, React",
  },
  {
    title: "Project Tile goes here 2",
    descript: "Были реализованный: главная страница, страница корзины, запросы на сервер и тд",
    stack: "HTML , JavaScript, SASS, React",
  },
  {
    title: "Project Tile goes here 3",
    descript: "Были реализованный: главная страница, страница корзины, запросы на сервер и тд",
    stack: "HTML , JavaScript, SASS, React",
  },
  {
    title: "Project Tile goes here 4",
    descript: "This is sample project description random 4",
    stack: "Html 4",
  },
  {
    title: "Project Tile goes here 5",
    descript: "Были реализованный: главная страница, страница корзины, запросы на сервер и тд",
    stack: "Html 5",
  },
  {
    title: "Project Tile goes here 6",
    descript: "This is s  ",
    stack: "Html 6",
  },
];

export const Projects = () => {
  return (
    <StyledProjects>
      <Container>
        <FlexWrapper direction="column" align="center">
          <SectionTitle>Projects</SectionTitle>
          <SectionDescript>Things I’ve built so far</SectionDescript>
        </FlexWrapper>
        <FlexWrapper wrap="wrap" gap="65px 46px" justify="center" align="flex-start">
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
      </Container>
    </StyledProjects>
  );
};

const StyledProjects = styled.section``;
