import styled from "styled-components";
import photo from "../../../assets/images/project.png";
import { Icon } from "../../../components/icon/Icon";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Description } from "../../../components/Description";

type ProjectPropsType = {
  title: string;
  descript: string;
  stack: string;
};

export const Project = (props: ProjectPropsType) => {
  return (
    <StyledProject>
      <img src={photo} alt="" />
      <ProjectBody>
        <Title>{props.title}</Title>
        <Description>{props.descript}</Description>
        <div>
          <span>Tech stack :</span> <span> {props.stack}</span>
        </div>
        <FlexWrapper justify="space-between">
          <a href="#">
            <Icon iconId="connectSvg" widthIcon="22px" heightIcon="22px" viewBoxIcon="0 0 20 20" />
            Live Preview
          </a>
          <a href="#">
            <Icon iconId="githubSvg" widthIcon="22px" heightIcon="22px" />
            View Code
          </a>
        </FlexWrapper>
      </ProjectBody>
    </StyledProject>
  );
};

const StyledProject = styled.div`
  max-width: 375px;
  /* width: 100%; */
  background-color: #363636;
  border-radius: 20px;
  color: #cccc;
  a {
    color: white;
  }
`;

const ProjectBody = styled.div`
  padding: 27px 45px 25px 30px;
`;

const Title = styled.h3``;
