import styled from "styled-components";
import photo from "../../../assets/images/project.png";
import { Icon } from "../../../components/icon/Icon";

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
        <Stack>
          Tech stack : <span> {props.stack}</span>
        </Stack>
        <SeeProject>
          <a href="#">
            <Icon iconId="connectSvg" widthIcon="22px" heightIcon="22px" viewBoxIcon="0 0 20 20" />
            <span>Live Preview</span>
          </a>
          <a href="#">
            <Icon
              iconId="githubSvg"
              widthIcon="22px"
              heightIcon="22px"
              viewBoxIcon="0 -15 100 100"
            />
            <span>View Code</span>
          </a>
        </SeeProject>
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
  display: flex;
  flex-direction: column;
  padding: 30px 30px 0;
  margin-bottom: 20px;

  color: #ccc;
`;

const Title = styled.h3`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 28px;
  line-height: 93%;
  text-align: center;
`;

const Description = styled.p`
  margin: 17px 0 17px;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-size: 18px;
`;

const Stack = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 20px;

  span {
    font-weight: 300;
    font-size: 14px;
  }
`;

const SeeProject = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 16px;
  text-decoration: underline;
  color: #fff;

  span {
    margin-left: 10px;
  }
`;
