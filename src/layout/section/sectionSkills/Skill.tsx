import styled from "styled-components";
import { Icon } from "../../../components/icon/Icon";

type SkillPropsType = {
  iconId: string;
  viewBoxIcon?: string;
  width?: string;
  height?: string;
};

export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
      <Icon
        iconId={props.iconId}
        viewBoxIcon={props.viewBoxIcon}
        widthIcon={props.width}
        heightIcon={props.height}
      />
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  width: 120px;
`;
