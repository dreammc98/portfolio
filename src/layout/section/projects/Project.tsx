import { Icon } from "../../../components/icon/Icon";
import { S } from "./Project.styles";

type ProjectPropsType = {
  title: string;
  descript: string;
  stack: string;
};

export const Project: React.FC<ProjectPropsType> = (props: ProjectPropsType) => {
  return (
    <S.Project>
      <S.Image></S.Image>
      <S.ProjectBody>
        <S.Title>{props.title}</S.Title>
        <S.Description>{props.descript}</S.Description>
        <S.Stack>
          Tech stack : <span> {props.stack}</span>
        </S.Stack>
        <S.SeeProject>
          <a href="#">
            <Icon iconId="connectSvg" widthIcon="22px" heightIcon="22px" viewBoxIcon="0 -6 25 25" />
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
        </S.SeeProject>
      </S.ProjectBody>
    </S.Project>
  );
};
