import styled from "styled-components";
import { Icon } from "../../../components/icon/Icon";

type SkillPropsType = {
  iconId: string;
  viewBoxIcon?: string;
};

export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
      <Icon iconId={props.iconId} viewBoxIcon={props.viewBoxIcon} />
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  width: 16%;
`;
