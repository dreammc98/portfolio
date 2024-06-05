import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Skill } from "./Skill";
import { theme } from "../../../styles/Theme";

export const MobileSkills = () => {
  return (
    <MobileSkillsStyled>
      <FlexWrapper wrap="wrap" justify="center" align="center" gap="50px">
        <Skill iconId="htmlSvg" width="60" height="60" />
        <Skill iconId="cssSvg" width="60" height="60" />
        <Skill iconId="sassSvg" width="60" height="60" />
        <Skill iconId="jsSvg" width="60" height="60" />
        <Skill iconId="tsSvg" viewBoxIcon="0 0 640 640" width="60" height="60" />
        <Skill iconId="reactSvg" width="60" height="60" />
        <Skill iconId="vueSvg" viewBoxIcon="50 100 440 440" width="60" height="60" />
        <Skill iconId="bootstrapSvg" viewBoxIcon="0 0 100 100" width="60" height="60" />
        <Skill iconId="gitSvg" viewBoxIcon="0 0 105 105" width="60" height="60" />

        <Skill iconId="tailwindSvg" viewBoxIcon="15 25 100 60" width="60" height="60" />
        <Skill iconId="vscodeSvg" width="60" height="60" />
        <Skill iconId="githubSvg" viewBoxIcon="-10 40 100 10" width="60" height="60" />
      </FlexWrapper>
    </MobileSkillsStyled>
  );
};

const MobileSkillsStyled = styled.div`
  display: none;

  @media ${theme.media.mobile} {
    display: block;
  }
`;
